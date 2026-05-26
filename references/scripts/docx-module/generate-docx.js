#!/usr/bin/env node
/**
 * generate-docx.js
 * ─────────────────────────────────────────────────────────────────────────────
 * BABOK V3 BA Assistant — Professional Word Document Generator (Engine B)
 *
 * Converts a filled BABOK markdown template into a high-quality .docx file
 * using docx-js. Produces executive-grade output with:
 *   - Automatic Table of Contents
 *   - BABOK Navy branding (#1F497D)
 *   - Proper OOXML bullet lists (no unicode chars)
 *   - Professional headers/footers with page numbers
 *   - Styled tables (Navy header row, alternating rows)
 *   - Blockquote support for AI Agent instructions (rendered as info boxes)
 *
 * Usage:
 *   node generate-docx.js --input <md_file> [--out <dir>] [--title <title>] [--section <letter>]
 *
 * Examples:
 *   node generate-docx.js --input references/templates/ka07/solution-recommendation.md --out outputs/
 *   node generate-docx.js --input references/templates/ka06/current-state-assessment-template.md --title "Payment Online Analysis" --section A
 *
 * Requirements:
 *   npm install docx     (in this directory: references/scripts/docx-module/)
 */

const fs = require("fs");
const path = require("path");
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  Header,
  Footer,
  HeadingLevel,
  AlignmentType,
  TableOfContents,
  LevelFormat,
  BorderStyle,
  WidthType,
  ShadingType,
  VerticalAlign,
  PageNumber,
  PageBreak,
  PageOrientation,
  ExternalHyperlink,
} = require("docx");

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const NAVY_HEX = "1F497D";
const NAVY_RGB = { r: 0x1f, g: 0x49, b: 0x7d };
const WHITE_HEX = "FFFFFF";
const LIGHT_GRAY_HEX = "F2F2F2";
const ACCENT_GRAY_HEX = "E8EEF5"; // light navy tint for blockquotes
const TEXT_DARK_HEX = "262626";
const META_GRAY_HEX = "808080";

// A4 page in DXA (1440 DXA = 1 inch)
const PAGE_WIDTH_DXA = 11906; // A4 width
const PAGE_HEIGHT_DXA = 16838; // A4 height
const MARGIN_DXA = 1440; // 1 inch margins
const CONTENT_WIDTH_DXA = PAGE_WIDTH_DXA - 2 * MARGIN_DXA; // 9026 DXA

// Table column widths that sum to CONTENT_WIDTH_DXA
const TABLE_FULL_WIDTH = CONTENT_WIDTH_DXA;

// ─── CLI PARSING ──────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = {};
  let i = 2;
  while (i < argv.length) {
    const key = argv[i].replace(/^--/, "");
    args[key] = argv[i + 1] || true;
    i += 2;
  }
  return args;
}

// ─── MARKDOWN PARSER ──────────────────────────────────────────────────────────

/**
 * Parse BABOK markdown into structured blocks.
 * Handles: headings (H1-H6), tables, bullet lists, numbered lists,
 *          blockquotes, YAML frontmatter (stripped), paragraphs.
 *
 * Returns: Array of {type, ...props} objects
 */
function parseMarkdown(mdText) {
  const blocks = [];
  const lines = mdText.split(/\r?\n/);
  let i = 0;

  // Strip YAML frontmatter
  if (lines[0] && lines[0].trim() === "---") {
    i = 1;
    while (i < lines.length && lines[i].trim() !== "---") i++;
    i++; // skip closing ---
  }

  while (i < lines.length) {
    const line = lines[i];

    // Blank line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Heading
    const hMatch = line.match(/^(#{1,6})\s+(.*)/);
    if (hMatch) {
      blocks.push({ type: "heading", level: hMatch[1].length, text: hMatch[2].trim() });
      i++;
      continue;
    }

    // Table: detect separator row on next line
    if (i + 1 < lines.length && /^\|[\s\-\|:]+\|$/.test(lines[i + 1])) {
      const headers = line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      i += 2; // skip separator
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(
          lines[i]
            .trim()
            .replace(/^\||\|$/g, "")
            .split("|")
            .map((c) => c.trim())
        );
        i++;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    // Blockquote (BABOK AI Agent instructions, notes)
    if (line.startsWith(">")) {
      const bqLines = [];
      while (i < lines.length && (lines[i].startsWith(">") || lines[i].trim() === "")) {
        if (lines[i].startsWith(">")) {
          bqLines.push(lines[i].replace(/^>\s?/, "").trim());
        }
        i++;
      }
      blocks.push({ type: "blockquote", text: bqLines.filter(Boolean).join(" ") });
      continue;
    }

    // Horizontal rule
    if (/^[-*_]{3,}$/.test(line.trim())) {
      blocks.push({ type: "divider" });
      i++;
      continue;
    }

    // Bullet list
    const bulletMatch = line.match(/^(\s*)[-*]\s+(.*)/);
    if (bulletMatch) {
      const level = Math.floor(bulletMatch[1].length / 2);
      blocks.push({ type: "bullet", text: bulletMatch[2].trim(), level });
      i++;
      continue;
    }

    // Numbered list
    const numMatch = line.match(/^(\s*)\d+\.\s+(.*)/);
    if (numMatch) {
      const level = Math.floor(numMatch[1].length / 2);
      blocks.push({ type: "numbered", text: numMatch[2].trim(), level });
      i++;
      continue;
    }

    // Code block (skip — not relevant for BA deliverables)
    if (line.startsWith("```")) {
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) i++;
      i++;
      continue;
    }

    // Paragraph
    const text = line.trim();
    if (text) {
      blocks.push({ type: "paragraph", text });
    }
    i++;
  }

  return blocks;
}

/**
 * Extract blocks for a specific section letter (e.g., "A", "B").
 * Matches headings starting with "Section A:", "A.", "A " etc.
 */
function extractSection(blocks, sectionLetter) {
  const letter = sectionLetter.toUpperCase();
  let startIdx = null;
  let startLevel = null;

  for (let idx = 0; idx < blocks.length; idx++) {
    const b = blocks[idx];
    if (b.type === "heading") {
      const upper = b.text.toUpperCase();
      if (
        new RegExp(`^(SECTION\\s+)?${letter}[:\\.\\s]`).test(upper) ||
        upper.startsWith(letter + " ")
      ) {
        startIdx = idx;
        startLevel = b.level;
        break;
      }
    }
  }

  if (startIdx === null) return blocks;

  const result = [];
  for (let idx = startIdx; idx < blocks.length; idx++) {
    const b = blocks[idx];
    if (result.length > 0 && b.type === "heading" && b.level <= startLevel) break;
    result.push(b);
  }

  return result.length > 0 ? result : blocks;
}

// ─── TEXT CLEANER ─────────────────────────────────────────────────────────────

/**
 * Remove inline markdown formatting (bold, italic, code, links).
 * Returns plain string for use in docx-js TextRun.
 */
function cleanText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`(.*?)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/~~(.*?)~~/g, "$1")
    .trim();
}

/**
 * Parse inline bold/italic and return array of TextRun objects.
 * Supports: **bold**, *italic*, `code`, plain text.
 */
function parseInlineRuns(text, baseOptions = {}) {
  const runs = [];
  // Pattern: **bold**, *italic*, `code`
  const pattern = /(\*\*(.*?)\*\*|\*(.*?)\*|`(.*?)`)/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    // Plain text before this match
    if (match.index > lastIndex) {
      runs.push(new TextRun({ text: text.slice(lastIndex, match.index), ...baseOptions }));
    }

    if (match[0].startsWith("**")) {
      runs.push(new TextRun({ text: match[2], bold: true, ...baseOptions }));
    } else if (match[0].startsWith("*")) {
      runs.push(new TextRun({ text: match[3], italics: true, ...baseOptions }));
    } else if (match[0].startsWith("`")) {
      runs.push(new TextRun({ text: match[4], font: "Courier New", size: 20, ...baseOptions }));
    }

    lastIndex = match.index + match[0].length;
  }

  // Remaining text
  if (lastIndex < text.length) {
    runs.push(new TextRun({ text: text.slice(lastIndex), ...baseOptions }));
  }

  return runs.length > 0 ? runs : [new TextRun({ text, ...baseOptions })];
}

// ─── BLOCK RENDERERS ──────────────────────────────────────────────────────────

/**
 * Map heading level to docx-js HeadingLevel.
 */
function getHeadingLevel(level) {
  const map = {
    1: HeadingLevel.HEADING_1,
    2: HeadingLevel.HEADING_2,
    3: HeadingLevel.HEADING_3,
    4: HeadingLevel.HEADING_4,
    5: HeadingLevel.HEADING_5,
    6: HeadingLevel.HEADING_6,
  };
  return map[Math.min(level, 6)] || HeadingLevel.HEADING_6;
}

function renderHeading(block) {
  return new Paragraph({
    heading: getHeadingLevel(block.level),
    children: parseInlineRuns(cleanText(block.text)),
    spacing: { before: block.level <= 2 ? 300 : 200, after: block.level <= 2 ? 150 : 100 },
  });
}

function renderParagraph(block) {
  const text = block.text;
  if (!cleanText(text)) return null;
  return new Paragraph({
    children: parseInlineRuns(text, { size: 22 }), // 11pt
    spacing: { after: 120 },
  });
}

function renderBullet(block, numbering, ref = "bullets") {
  return new Paragraph({
    numbering: { reference: ref, level: block.level },
    children: parseInlineRuns(block.text, { size: 22 }),
    spacing: { after: 80 },
  });
}

function renderNumbered(block, numbering) {
  return renderBullet(block, numbering, "numbers");
}

function renderBlockquote(block) {
  return new Paragraph({
    children: parseInlineRuns(cleanText(block.text), {
      size: 20, // 10pt
      color: "44546A",
      italics: true,
    }),
    indent: { left: 720 },
    border: {
      left: { style: BorderStyle.SINGLE, size: 6, color: NAVY_HEX, space: 10 },
    },
    shading: { fill: ACCENT_GRAY_HEX, type: ShadingType.CLEAR },
    spacing: { before: 100, after: 100 },
  });
}

function renderDivider() {
  return new Paragraph({
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: "BFBFBF", space: 1 },
    },
    spacing: { before: 200, after: 200 },
    children: [new TextRun("")],
  });
}

function renderTable(block) {
  const colCount = block.headers.length;
  if (colCount === 0) return null;

  const colWidth = Math.floor(TABLE_FULL_WIDTH / colCount);
  const colWidths = Array(colCount).fill(colWidth);
  // Adjust last column for rounding
  colWidths[colCount - 1] = TABLE_FULL_WIDTH - colWidth * (colCount - 1);

  const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
  const borders = { top: border, bottom: border, left: border, right: border };

  // Header row
  const headerRow = new TableRow({
    tableHeader: true,
    children: block.headers.map(
      (h, j) =>
        new TableCell({
          borders,
          width: { size: colWidths[j], type: WidthType.DXA },
          shading: { fill: NAVY_HEX, type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: cleanText(h),
                  bold: true,
                  color: WHITE_HEX,
                  size: 20, // 10pt
                  font: "Calibri",
                }),
              ],
            }),
          ],
        })
    ),
  });

  // Data rows (alternating shading)
  const dataRows = block.rows.map(
    (row, rowIdx) =>
      new TableRow({
        children: row.map(
          (cell, j) =>
            new TableCell({
              borders,
              width: { size: colWidths[j], type: WidthType.DXA },
              shading: {
                fill: rowIdx % 2 === 0 ? LIGHT_GRAY_HEX : WHITE_HEX,
                type: ShadingType.CLEAR,
              },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              verticalAlign: VerticalAlign.TOP,
              children: [
                new Paragraph({
                  children: parseInlineRuns(cleanText(cell || ""), { size: 20, font: "Calibri" }),
                }),
              ],
            })
        ),
      })
  );

  return new Table({
    width: { size: TABLE_FULL_WIDTH, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [headerRow, ...dataRows],
  });
}

// ─── DOCUMENT BUILDER ─────────────────────────────────────────────────────────

/**
 * Convert parsed blocks into docx-js content elements.
 * Returns array of Paragraph / Table objects.
 */
function renderBlocks(blocks) {
  const content = [];

  for (const block of blocks) {
    switch (block.type) {
      case "heading":
        content.push(renderHeading(block));
        break;

      case "paragraph": {
        const p = renderParagraph(block);
        if (p) content.push(p);
        break;
      }

      case "bullet":
        content.push(renderBullet(block));
        break;

      case "numbered":
        content.push(renderNumbered(block));
        break;

      case "blockquote":
        content.push(renderBlockquote(block));
        break;

      case "divider":
        content.push(renderDivider());
        break;

      case "table": {
        const t = renderTable(block);
        if (t) {
          content.push(t);
          content.push(new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } })); // spacer
        }
        break;
      }
    }
  }

  return content;
}

// ─── MAIN DOCUMENT GENERATOR ─────────────────────────────────────────────────

async function generateDocx({ inputPath, outputPath, docTitle }) {
  const mdText = fs.readFileSync(inputPath, "utf-8");

  // Parse args for section
  const args = parseArgs(process.argv);
  let blocks = parseMarkdown(mdText);
  if (args.section) {
    blocks = extractSection(blocks, args.section);
  }

  const contentChildren = renderBlocks(blocks);

  const doc = new Document({
    // ── Numbering config (BABOK bullets/numbers)
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: "●",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 720, hanging: 360 } } },
            },
            {
              level: 1,
              format: LevelFormat.BULLET,
              text: "○",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 1080, hanging: 360 } } },
            },
            {
              level: 2,
              format: LevelFormat.BULLET,
              text: "■",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 1440, hanging: 360 } } },
            },
          ],
        },
        {
          reference: "numbers",
          levels: [
            {
              level: 0,
              format: LevelFormat.DECIMAL,
              text: "%1.",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 720, hanging: 360 } } },
            },
            {
              level: 1,
              format: LevelFormat.DECIMAL,
              text: "%1.%2.",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 1080, hanging: 360 } } },
            },
          ],
        },
      ],
    },

    // ── Typography styles
    styles: {
      default: {
        document: {
          run: { font: "Calibri", size: 22, color: TEXT_DARK_HEX }, // 11pt default
        },
      },
      paragraphStyles: [
        {
          id: "Heading1",
          name: "Heading 1",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { size: 36, bold: true, font: "Calibri", color: NAVY_HEX }, // 18pt
          paragraph: {
            spacing: { before: 360, after: 180 },
            outlineLevel: 0, // Required for TOC
            border: {
              bottom: { style: BorderStyle.SINGLE, size: 4, color: NAVY_HEX, space: 4 },
            },
          },
        },
        {
          id: "Heading2",
          name: "Heading 2",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { size: 28, bold: true, font: "Calibri", color: NAVY_HEX }, // 14pt
          paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 },
        },
        {
          id: "Heading3",
          name: "Heading 3",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { size: 24, bold: true, font: "Calibri", color: "2E5F9E" }, // 12pt
          paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 },
        },
        {
          id: "Heading4",
          name: "Heading 4",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { size: 22, bold: true, italics: true, font: "Calibri", color: TEXT_DARK_HEX }, // 11pt
          paragraph: { spacing: { before: 160, after: 60 }, outlineLevel: 3 },
        },
      ],
    },

    sections: [
      {
        properties: {
          page: {
            size: {
              width: PAGE_WIDTH_DXA, // A4
              height: PAGE_HEIGHT_DXA,
            },
            margin: {
              top: MARGIN_DXA,
              right: MARGIN_DXA,
              bottom: MARGIN_DXA,
              left: MARGIN_DXA,
            },
          },
        },

        // ── Header
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                border: {
                  bottom: { style: BorderStyle.SINGLE, size: 4, color: NAVY_HEX, space: 4 },
                },
                children: [
                  new TextRun({
                    text: docTitle,
                    size: 18, // 9pt
                    color: NAVY_HEX,
                    font: "Calibri",
                    bold: true,
                  }),
                ],
              }),
            ],
          }),
        },

        // ── Footer with page numbers
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                border: {
                  top: { style: BorderStyle.SINGLE, size: 2, color: "CCCCCC", space: 4 },
                },
                children: [
                  new TextRun({
                    text: "BABOK V3 BA Assistant  |  Generated: " + new Date().toLocaleDateString("en-GB"),
                    size: 16, // 8pt
                    color: META_GRAY_HEX,
                    font: "Calibri",
                  }),
                  new TextRun({
                    children: ["     Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES],
                    size: 16,
                    color: META_GRAY_HEX,
                    font: "Calibri",
                  }),
                ],
              }),
            ],
          }),
        },

        children: [
          // ── Cover: Title
          new Paragraph({
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { before: 1440, after: 240 }, // ~1 inch top space
            children: [
              new TextRun({
                text: docTitle,
                size: 56, // 28pt
                bold: true,
                color: NAVY_HEX,
                font: "Calibri",
              }),
            ],
          }),

          // ── Cover: Subtitle/meta
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
            children: [
              new TextRun({
                text: `BABOK V3 Business Analysis Deliverable  |  ${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}`,
                size: 22,
                color: META_GRAY_HEX,
                font: "Calibri",
                italics: true,
              }),
            ],
          }),

          // ── TOC (auto-generated from headings)
          new TableOfContents("Table of Contents", {
            hyperlink: true,
            headingStyleRange: "1-3",
            stylesWithLevels: [
              { styleId: "Heading1", level: 1 },
              { styleId: "Heading2", level: 2 },
              { styleId: "Heading3", level: 3 },
            ],
          }),

          // ── Page break before content
          new Paragraph({ children: [new PageBreak()] }),

          // ── Main content (rendered blocks)
          ...contentChildren,
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  console.log(`[OK] Generated: ${path.resolve(outputPath)}`);
  return outputPath;
}

// ─── ENTRY POINT ──────────────────────────────────────────────────────────────

(async function main() {
  const args = parseArgs(process.argv);

  if (!args.input) {
    console.error("ERROR: --input <md_file> is required");
    console.error(
      "Usage: node generate-docx.js --input <md_file> [--out <dir>] [--title <title>] [--section <letter>]"
    );
    process.exit(1);
  }

  const inputPath = path.resolve(args.input);
  if (!fs.existsSync(inputPath)) {
    console.error(`ERROR: Input file not found: ${inputPath}`);
    process.exit(1);
  }

  // Build output path
  const outDir = args.out || "outputs";
  fs.mkdirSync(outDir, { recursive: true });
  const stem = path.basename(inputPath, path.extname(inputPath));
  const sectionTag = args.section ? `_sec${args.section.toUpperCase()}` : "";
  const timestamp = new Date().toISOString().slice(0, 16).replace(/[T:]/g, "-").replace(/-/g, "");
  const filename = `${stem}${sectionTag}_${timestamp}.docx`;
  const outputPath = path.join(outDir, filename);

  // Build document title
  const docTitle =
    args.title ||
    stem.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) +
      (args.section ? ` — Section ${args.section.toUpperCase()}` : "");

  await generateDocx({ inputPath, outputPath, docTitle });
})();
