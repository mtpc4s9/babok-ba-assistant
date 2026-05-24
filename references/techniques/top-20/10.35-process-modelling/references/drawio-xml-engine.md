---
description: Technical specification and engine guide for direct .drawio XML diagram generation.
---

# Draw.io XML Compiler Engine

This reference guide provides the exact styling parameters, coordinate math, and XML structure templates required to generate valid, importable, and editable `.drawio` XML files. The goal is to rapidly produce pre-connected diagrams so that Business Analysts can immediately open them in Draw.io and perform final aesthetic adjustments in seconds.

---

## 1. The Pragmatic Linear-Grid Spacing Model

To avoid complex geometric overlapping calculations, the AI Assistant must apply the **Linear-Grid Layout Strategy**:

*   **Vertical Flow (Primary Direction):** Sơ đồ phát triển theo chiều dọc.
    *   *Initial Y-Coordinate:* Start node begins at `y = 40`.
    *   *Step Increments:* Every consecutive action or step increases Y by `100px` to `120px` (`y = 40, 140, 240, 340...`). This provides a standard `50px` gap between shapes.
*   **Horizontal Offsets (Branching Direction):** Rẽ nhánh ngang.
    *   *Center Line:* Default X-coordinate for a single-column flow is `x = 300`.
    *   *Two-Way Splits (Decision):*
        *   Left Branch: `x_left = x_center - 180` (e.g., `x = 120`).
        *   Right Branch: `x_right = x_center + 180` (e.g., `x = 480`).
    *   *Three-Way Splits:*
        *   Left: `x = 60`, Center: `x = 300`, Right: `x = 540`.
*   **Swimlane Stack (Horizontal stacks):**
    *   *Lane Width:* Standard width for internal swimlanes is `width = 250px`.
    *   *Placement:* Lanes stack horizontally from left to right (`x = 0, 250, 500...`).

---

## 2. Shape Dimensions & Draw.io XML Styles

The following styles correspond strictly to native Draw.io shapes and stencils:

| Element | Style String | Standard Dimensions | Usage |
| :--- | :--- | :--- | :--- |
| **Start State** | `ellipse;whiteSpace=wrap;html=1;aspect=fixed;fillColor=#333333;strokeColor=#333333;fontColor=#ffffff;` | `width=24`, `height=24` | Point of initiation |
| **End State** | `ellipse;html=1;shape=endState;fillColor=#333333;strokeColor=#333333;strokeWidth=2;aspect=fixed;` | `width=24`, `height=24` | Final successful outcome |
| **Action Step (1 line)** | `rounded=1;whiteSpace=wrap;html=1;arcSize=10;fillColor=#f5f5f5;strokeColor=#999999;fontStyle=1;fontSize=11;` | `width=220`, `height=40` | Process step or activity |
| **Action Step (2 lines)** | `rounded=1;whiteSpace=wrap;html=1;arcSize=10;fillColor=#f5f5f5;strokeColor=#999999;fontStyle=1;fontSize=11;` | `width=270`, `height=50` | Step with short subtitle |
| **Decision / Gateway** | `rhombus;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontStyle=1;fontSize=11;` | `width=120`, `height=80` | Condition branch or Gateway |
| **Merge Node** | `rhombus;whiteSpace=wrap;html=1;fillColor=#666666;strokeColor=#666666;` | `width=26`, `height=26` | Convergence point |
| **Scope Container** | `rounded=1;fillColor=none;dashed=1;dashPattern=8 4;strokeColor=#7F77DD;strokeWidth=2;` | Auto calculated | Scope boundary box |
| **Scope Label** | `text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;fontSize=10;fontStyle=1;fontColor=#7F77DD;` | `width=80`, `height=20` | Title of scope container |
| **Swimlane (Single)** | `swimlane;html=1;horizontal=0;childLayout=stackLayout;startSize=30;fillColor=#E8E6FC;strokeColor=#7F77DD;` | `width=250`, `height=800` | Lane representing role/system |

---

## 3. Connectors & Edges (Orthogonal Wireframe)

To ensure that Draw.io automatically routes connections cleanly without coordinate bugs, the AI Assistant must configure connectors as follows:

*   **Standard Forward Flow Edge:**
    `style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;"`
*   **Horizontal / Decision Outflow Edge (with Label):**
    `style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;entryX=0.5;entryY=0;"`
*   **Error / Exception Feedback Flow Edge (Dashed & Red):**
    `style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;dashed=1;strokeColor=#b85450;exitX=0;exitY=0.5;entryX=0;entryY=0.5;"`

---

## 4. XML Structure & Shell

The output file must be written as a raw `.drawio` XML document using this standard shell:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net">
  <diagram id="D-1035" name="Process Model">
    <mxGraphModel dx="1200" dy="800" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        
        <!-- Shape Vertices -->
        <mxCell id="start" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fillColor=#333333;strokeColor=#333333;" vertex="1" parent="1">
          <mxGeometry x="388" y="40" width="24" height="24" as="geometry" />
        </mxCell>
        
        <mxCell id="step_01" value="Initiate Request" style="rounded=1;whiteSpace=wrap;html=1;arcSize=10;fillColor=#f5f5f5;strokeColor=#999999;fontStyle=1;fontSize=11;" vertex="1" parent="1">
          <mxGeometry x="290" y="120" width="220" height="40" as="geometry" />
        </mxCell>
        
        <!-- Shape Edges -->
        <mxCell id="edge_01" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" parent="1" source="start" target="step_01">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```

---

## 5. Enterprise Color Palette

The AI Assistant must color-code shapes to represent domain owners or logical semantics:

```
[#f5f5f5] Neutral Step (General system actions, generic start)
  ├── [#d5e8d4] Happy Path / Success Route (Primary customer actions)
  ├── [#FAECE7] Alternative Branch (Special payment method, alternate lane)
  ├── [#E8E6FC] Internal Server / Core System Checking
  ├── [#E1F5EE] Client App / UI Interaction
  ├── [#dae8fc] External Third Party API (E.g., Bank Gateway, VNeID)
  └── [#f8cecc] Error Handling / Boundary Exception / Cancellation
```

---

## 6. Python SVG-to-PNG Converter (Optional)

If the user requires a static PNG preview of the `.drawio` file, the AI can generate an SVG equivalent and compile it using this standard Python script in the scratch directory:

```python
import cairosvg

def compile_diagram_preview(svg_path: str, output_png_path: str):
    """
    Renders high-quality PNG preview from SVG code.
    Scale=2 ensures high-fidelity text and line resolution.
    """
    cairosvg.svg2png(url=svg_path, write_to=output_png_path, scale=2)
    print(f"Preview generated at: {output_png_path}")
```
