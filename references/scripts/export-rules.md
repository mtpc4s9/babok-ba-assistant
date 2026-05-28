---
name: export-rules
description: Use when exporting Business Analysis deliverables (such as BRDs, SRSs, financial cost-benefit models, matrices, or pitch decks) into professional Word (.docx), Excel (.xlsx), or PowerPoint (.pptx) formats.
---

# Office Export Rules (Triple-Engine Strategy)

This reference outlines the routing and capability matrix for the three complementary export engines of the BABOK BA Assistant.

## 1. Engine Selection Routing Rule

```
When user requests EXPORT:

  FORMAT = .pptx
  → Engine A (Python):
    python references/scripts/export-to-office.py --input <md_file> --format pptx --out outputs/

  FORMAT = .docx:
    Deliverable = BRD / SRS / Executive Report / Solution Recommendation / C-Level Pitch
    → Engine B (Node.js / docx-js):
      node references/scripts/docx-module/generate-docx.js --input <md_file> --section <letter> --out outputs/

    Deliverable = Quick Draft / Internal Review / Working Document
    → Engine A (Python):
      python references/scripts/export-to-office.py --input <md_file> --format docx --section <letter> --out outputs/

  FORMAT = .xlsx:
    Deliverable = Dynamic financial model, cost-benefit analysis, strict color-coded BA matrices
    → Engine C (Python / openpyxl + recalc.py):
      1. Write script or logic to output xlsx with openpyxl (adhering to Blue/Black style rules)
      2. Call formula evaluator: python references/scripts/xlsx-module/recalc.py <excel_file>
    
    Deliverable = Simple data dump / flat logs
    → Engine A (Python):
      python references/scripts/export-to-office.py --input <md_file> --format xlsx --section <letter> --out outputs/

  FALLBACK: If a specialized engine (B or C) is unavailable on the system → use Engine A for all formats and notify the user.
```

## 2. Engine Capability Comparison

| Capability | Engine A (Python) | Engine B (Node.js) | Engine C (Python / openpyxl + recalc) |
|---|---|---|---|
| **Formats** | `.docx`, `.xlsx`, `.pptx` | `.docx` only | `.xlsx` only |
| **Table of Contents** | ❌ | ✅ Auto-generated | N/A |
| **Page numbers / header-footer** | ❌ | ✅ | N/A |
| **Dynamic formula evaluation** | ❌ (Written as static strings) | N/A | ✅ (LibreOffice recalculation & safety scan) |
| **Formatting and Styling** | Basic | C-Level / Navy Branding | Professional Financial Color Coding (Blue/Black/Yellow) |
| **OOXML-compliant XML** | Basic | ✅ (LevelFormat.BULLET) | ✅ (Strict openpyxl structure) |
| **Best for** | PPT, quick draft exports | BRD, SRS, C-Level Word docs | Cost models, financial calculations, BA matrices |

## 3. Reporting Results
Provide the exact path of the generated file in the `outputs/` folder to the user.
*   **If Engine B was used:** Highlight the professional Table of Contents and executive branding.
*   **If Engine C was used:** Highlight that all formulas have been recalculated via LibreOffice and scanned for errors (such as `#DIV/0!`, `#REF!`, or `#VALUE!`).
