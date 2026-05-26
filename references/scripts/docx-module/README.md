---
name: docx-module
description: >-
  Specialized Word document generation module for BABOK BA Assistant.
  Provides high-quality .docx output using docx-js (Node.js) for C-Level
  and executive deliverables. Supplements the Python export-to-office.py
  script (Engine A) which remains the primary engine for .xlsx and .pptx.
---

# BABOK Docx Module — High-Quality Word Document Generator

> 🤖 **AI AGENT INSTRUCTION:**
> This module coordinator tells you WHEN and HOW to use each export engine.
> Read this file before executing any Office export command.

---

## Engine Selection (Dual-Engine Strategy)

The BABOK BA Assistant uses **two complementary export engines**:

| Criterion | Engine A (Python) | Engine B (Node.js / docx-js) |
|-----------|-------------------|-------------------------------|
| **Script** | `../export-to-office.py` | `./generate-docx.js` |
| **Formats** | `.docx`, `.xlsx`, `.pptx` | `.docx` only |
| **Docx quality** | Basic (no TOC, no footnotes) | Professional (TOC, footnotes, headers, tracked changes) |
| **Best for** | Quick drafts, Excel, PowerPoint | C-Level reports, BRD, SRS, Executive Recommendations |
| **Runtime** | Python 3.10+ | Node.js 16+ |
| **Dependencies** | `python-docx`, `openpyxl`, `python-pptx` | `npm install docx` |

### Decision Rule for AI Agent

```
When user requests EXPORT:

  if format == xlsx or pptx:
      → Use Engine A (Python): python ../export-to-office.py --format xlsx|pptx ...

  if format == docx:
      if deliverable is BRD / SRS / Executive Report / Solution Recommendation:
          → Use Engine B (Node.js): node generate-docx.js --input <md_file> --out outputs/
      else (draft / internal / quick):
          → Use Engine A (Python): python ../export-to-office.py --format docx ...
```

> ⚠️ **Fallback Rule:** If Node.js is not available on the system, **always fall back to Engine A** (Python) and inform the user that high-quality docx requires Node.js + `npm install docx`.

---

## Engine B: Setup & Usage

### Prerequisites

```powershell
# Check if Node.js is installed
node --version   # Required: >= 16.0.0

# Install docx-js package (run from the docx-module directory)
npm install docx
```

### Generate a Word Document

```powershell
# Basic usage (generates docx from a filled markdown template)
node generate-docx.js --input "references/templates/ka07/solution-recommendation.md" --out outputs/

# With custom title
node generate-docx.js --input "references/templates/ka06/current-state-assessment-template.md" --title "HCMC IB School — Payment Online Current State" --out outputs/

# Export specific section only
node generate-docx.js --input "references/templates/ka07/specified-modelled-requirements.md" --section A --out outputs/
```

### Output

The script creates:
```
outputs/
└── <template-stem>_<section>_<timestamp>.docx
```

---

## Engine A: Usage Reference (kept for xlsx/pptx)

```powershell
# Excel
python references/scripts/export-to-office.py --input <md_file> --format xlsx --section D --out outputs/

# PowerPoint
python references/scripts/export-to-office.py --input <md_file> --format pptx --out outputs/
```

---

## Advanced: Edit Existing .docx Files (XML Level)

Use the utility scripts in `./office/` for surgical edits on existing Word documents:

```powershell
# Step 1: Unpack .docx for editing
python office/unpack.py document.docx unpacked/

# Step 2: Edit XML files in unpacked/word/
# (Use view_file / replace_file_content tools to edit the XML directly)

# Step 3: Validate and repack
python office/validate.py unpacked/ --original document.docx
python office/pack.py unpacked/ output.docx --original document.docx
```

### Utility Scripts Reference

| Script | Purpose |
|--------|---------|
| `office/unpack.py` | Extract .docx ZIP → pretty-printed XML files |
| `office/pack.py` | Repack edited XML → .docx with validation |
| `office/validate.py` | Validate OOXML schema + tracked changes |
| `office/soffice.py` | Convert .docx → PDF or images via LibreOffice |

### Add Comments to a Document

```powershell
# After unpacking, add a comment at position 0
python scripts/comment.py unpacked/ 0 "Review this section carefully"

# Reply to comment 0
python scripts/comment.py unpacked/ 1 "Addressed in v2" --parent 0
```

---

## BABOK Docx Style Guide

When generating executive-grade documents, apply these consistent styles:

| Element | Specification |
|---------|---------------|
| Font | Calibri (all elements) |
| Primary color | Navy `#1F497D` (headings, table headers) |
| H1 size | 32pt bold |
| H2 size | 24pt bold |
| Body size | 11pt |
| Page size | A4 (international school context) or Letter |
| Margins | 1 inch all sides (1440 DXA) |
| Table header | White text on Navy background |
| Bullet list | LevelFormat.BULLET (never unicode `•` chars) |
| TOC | Auto-generated from heading levels 1–3 |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `node: command not found` | Install Node.js from https://nodejs.org or fall back to Engine A |
| `Cannot find module 'docx'` | Run `npm install docx` in `docx-module/` directory |
| `defusedxml not found` | Run `pip install defusedxml` for office utilities |
| Generated table renders black | Use `ShadingType.CLEAR` instead of `SOLID` in docx-js |
| Bullets appear as unicode chars | Never use `\u2022` — use `LevelFormat.BULLET` in numbering config |
