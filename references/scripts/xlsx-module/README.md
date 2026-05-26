---
name: xlsx-module
description: >-
  Specialized Excel document calculation and validation module for BABOK BA Assistant.
  Provides professional formula evaluation and validation using recalc.py (LibreOffice).
  Supplements the Python export-to-office.py script (Engine A) which remains the primary engine for .pptx and basic exports.
---

# BABOK Xlsx Module — High-Quality Excel Formula Calculator & Style Guide

> 🤖 **AI AGENT INSTRUCTION:**
> This module coordinator tells you WHEN and HOW to use each export engine for spreadsheets.
> Read this file before executing any Excel/Spreadsheet creation, modification, or export command.

---

## Engine Selection (Triple-Engine Strategy)

The BABOK BA Assistant uses **three complementary export engines**:

| Criterion | Engine A (Python) | Engine B (Node.js) | Engine C (Python / openpyxl + recalc) |
|-----------|-------------------|-------------------|---------------------------------------|
| **Script** | `../export-to-office.py` | `../docx-module/generate-docx.js` | `openpyxl` / `pandas` inline + `./recalc.py` |
| **Formats** | `.docx`, `.xlsx`, `.pptx` | `.docx` only | `.xlsx` only |
| **Excel quality**| Basic (flat data dump) | N/A | Professional (Dynamic formulas, colors, LibreOffice-evaluated) |
| **Best for** | Quick drafts, PowerPoint | BRD, SRS, Executive Word | Elicitation Excel, Cost-Benefit, Traceability, Matrices |
| **Runtime** | Python 3.10+ | Node.js 16+ | Python 3.10+ & LibreOffice |
| **Dependencies**| `python-docx`, `openpyxl` | `npm install docx` | `pip install openpyxl pandas` + LibreOffice |

### Decision Rule for AI Agent

```
When user requests EXPORT:

  if format == pptx:
      → Use Engine A (Python): python ../export-to-office.py --format pptx ...

  if format == docx:
      if deliverable is BRD / SRS / Executive Report:
          → Use Engine B (Node.js): node ../docx-module/generate-docx.js ...
      else:
          → Use Engine A (Python): python ../export-to-office.py --format docx ...

  if format == xlsx:
      if deliverable requires dynamic calculations, cost models, or strict BABOK formatting:
          → Use Engine C: Build spreadsheet using openpyxl, then run:
            python recalc.py <excel_file>
      else (simple data table dump / raw logs):
          → Use Engine A (Python): python ../export-to-office.py --format xlsx ...
```

---

## Engine C: Setup & Usage

### Prerequisites

```powershell
# 1. Ensure Python packages are installed
pip install openpyxl pandas

# 2. Verify LibreOffice is installed (Required for recalc.py to evaluate formulas)
soffice --version
```

### Recalculate Formulas (MANDATORY AFTER EDITING OR CREATING)

When openpyxl writes formulas (e.g. `=SUM(B2:B9)`), Excel does not automatically compute the values until the file is opened by a user. To ensure formulas are fully calculated and error-free before delivery:

```powershell
# Run from within this folder: references/scripts/xlsx-module/
python recalc.py "../../../outputs/your_model.xlsx"
```

The script will return a JSON result verifying formula safety:
- **`status`**: `"success"` (no formula errors) or `"errors_found"`
- **`total_errors`**: Number of `#REF!`, `#DIV/0!`, `#VALUE!` errors
- **`error_summary`**: Exact locations of the errors for debugging

---

## Workflow Patterns for AI Agent

### 1. Creating a New Professional Excel File

```python
import os
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

wb = Workbook()
ws = wb.active
ws.title = "Cost-Benefit Model"

# Font configurations
font_title = Font(name="Calibri", size=16, bold=True, color="1F497D")
font_header = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
font_body_formula = Font(name="Calibri", size=11, bold=False, color="000000") # Black text
font_body_input = Font(name="Calibri", size=11, bold=False, color="0000FF") # Blue text (Inputs)

# Fill configurations
fill_header = PatternFill(start_color="1F497D", end_color="1F497D", fill_type="solid")
fill_assumption = PatternFill(start_color="FFFFE0", end_color="FFFFE0", fill_type="solid") # Yellow background

# Set Titles and Headers
ws["A1"] = "SchoolsBuddy Integration — Cost-Benefit Analysis"
ws["A1"].font = font_title

headers = ["Category", "Item", "Cost/Benefit ($)", "Note"]
for col_idx, text in enumerate(headers, 1):
    cell = ws.cell(row=3, column=col_idx, value=text)
    cell.font = font_header
    cell.fill = fill_header
    cell.alignment = Alignment(horizontal="center")

# Inputs (Blue Text, Hardcoded)
ws["A4"] = "Development Cost"
ws["B4"] = "Software Licensing"
ws["C4"] = 15000  # Hardcoded input
ws["C4"].font = font_body_input

ws["A5"] = "Development Cost"
ws["B5"] = "Implementation Labor"
ws["C5"] = 8500  # Hardcoded input
ws["C5"].font = font_body_input

# Formulas (Black Text, Starts with '=')
ws["A6"] = "Total Development"
ws["B6"] = ""
ws["C6"] = "=SUM(C4:C5)"  # Formula
ws["C6"].font = font_body_formula

# Auto-fit columns
for col in ws.columns:
    max_len = max(len(str(cell.value or '')) for cell in col)
    col_letter = col[0].column_letter
    ws.column_dimensions[col_letter].width = max(max_len + 3, 12)

wb.save("../../../outputs/cost_benefit.xlsx")
```

### 2. XML-Level Edits on Existing Workbooks

Use utility scripts in `./office/` for surgical XML manipulations on Excel sheets (useful for correcting templates without losing advanced properties):

```powershell
# 1. Unpack .xlsx for editing
python office/unpack.py your_sheet.xlsx unpacked_dir/

# 2. Modify XML sheets in unpacked_dir/xl/worksheets/

# 3. Repack and validate
python office/validate.py unpacked_dir/ --original your_sheet.xlsx
python office/pack.py unpacked_dir/ finished_sheet.xlsx --original your_sheet.xlsx
```

---

## BABOK Financial Model & Excel Style Guide

When generating spreadsheets, you **MUST** adhere to the following standards to match executive financial criteria:

### Color Coding Standards
- **Blue text (RGB: 0,0,255)**: Hardcoded inputs, and numbers users will change for scenarios.
- **Black text (RGB: 0,0,0)**: ALL formulas and calculations.
- **Green text (RGB: 0,128,0)**: Links pulling from other worksheets within the same workbook.
- **Red text (RGB: 255,0,0)**: External links pointing to other files.
- **Yellow background (RGB: 255,255,224)**: Key assumptions needing attention or cells that need to be updated.

### Number Formatting
- **Years**: Format as text strings (e.g., `"2026"` not `"2,026"`).
- **Currency**: Use `$#,##0` format; always specify units in headers (e.g. `"Revenue ($mm)"`).
- **Zeros**: Use number formatting to render all zeros as `"-"` (e.g., `_($* #,##0_);_($* (#,##0);_($* "-"_);_(@_)`).
- **Percentages**: Default to `0.0%` format (one decimal place).
- **Multiples**: Format as `0.0x` for valuation multiples.
- **Negative numbers**: Use parentheses `(123)` instead of a minus sign `-123`.

### Formula Construction Rules
- **No hardcoded values in formulas**: Place all assumptions (growth rates, parameters) in separate cells. Use cell references instead of raw numbers.
  - ❌ *Wrong:* `=B5 * 1.05`
  -  *Right:* `=B5 * (1 + $B$6)`
- **Verify offsets**: Excel is 1-indexed, while Python pandas is 0-indexed (Row 5 in pandas DataFrame = Row 6 in Excel).
- **NaN Handling**: Ensure null/empty values are caught using `pd.notna()` in Python to avoid `#VALUE!` or `#N/A` errors.

---

## Formula Verification Checklist

- [ ] **Test 2-3 sample references** before building the full formula table.
- [ ] **Ensure division-by-zero checks** are handled in formulas (e.g., using `=IF(B5=0, 0, A5/B5)`).
- [ ] **Verify cross-sheet references** are using the exclamation format (e.g. `'Stakeholder Registry'!A1`).
- [ ] **Verify no circular references** are accidentally created.
- [ ] **Execute recalc.py** and ensure exit code is 0 and no formula errors are detected.

---

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| `#NAME?` in cell | Typo in Excel function name or custom macro | Ensure standard functions like `SUM`, `AVERAGE`, `IF` are uppercase. |
| `#REF!` in cell | Invalid cell reference (e.g., referenced a deleted row/column) | Check range boundaries in Python script. |
| `soffice not found` | LibreOffice is not installed or not in PATH | Install LibreOffice or add its installation folder (e.g., `C:\Program Files\LibreOffice\program`) to Windows System PATH. |
| Formulas show as strings | Script did not run recalculation | Ensure `python recalc.py` is invoked on the file before concluding work. |
