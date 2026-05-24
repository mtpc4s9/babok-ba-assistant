---
description: 20-point quality scorecard (Q1-Q20) for checking Flowcharts, BPMN, and UML diagrams.
---

# Process Modelling Quality Scorecard

This quality checklist must be evaluated by the AI Assistant before finalizing any process diagram. Every check is rated as **PASS** or **FAIL**. If any critical check fails, the model must be refactored before output.

---

## 1. Logical & Structural Correctness (Q1 - Q7)

*   **[ ] Q1: Single Start Entry Point**
    *   *Rule:* The process has exactly one clear start trigger or terminator oval. Multiple start points are forbidden (except in advanced concurrent message catching).
*   **[ ] Q2: Terminator Balance**
    *   *Rule:* Every execution path leads to at least one defined final end state. There are no orphan or dead-end action steps (black holes).
*   **[ ] Q3: Exclusive Gateway Completeness (XOR)**
    *   *Rule:* Every decision gateway has 100% mutually exclusive outgoing paths (e.g., Yes vs. No, Approved vs. Rejected) and all outgoing paths are explicitly labeled.
*   **[ ] Q4: Gateway Divergence vs. Convergence Balance**
    *   *Rule:* Gateways that split a flow must eventually merge back using a merge node/gateway, or terminate at their respective end-state ovals.
*   **[ ] Q5: Loop & Retry Exit Criteria**
    *   *Rule:* Any retry loop contains a decision node evaluating a guard condition (e.g., "Attempt Limit Exceeded?") preventing infinite loops.
*   **[ ] Q6: Swimlane Allocation Consistency**
    *   *Rule:* Every activity node is strictly placed inside a Swimlane, Pool, or Partition representing a clear owner (Role or System). No unallocated shapes.
*   **[ ] Q7: Swimlane Boundary Crossings**
    *   *Rule:* Sequence flows cross lane boundaries cleanly. BPMN Message flows only cross Pool boundaries, never internal Lane boundaries.

---

## 2. Decomposition & Scoping Standards (Q8 - Q11)

*   **[ ] Q8: Anti-Spiderweb Rule Compliance**
    *   *Rule:* A single process diagram does not contain more than **9 activity nodes**. If the process is larger, it must be decomposed into Level 1 and Level 2 diagrams.
*   **[ ] Q9: Sub-Process Interface Cleanliness**
    *   *Rule:* Every predefined sub-process has exactly the same inputs (triggers) and outputs (end states) in its detailed Level 2 map as represented in the Level 1 parent node.
*   **[ ] Q10: Level Consistency**
    *   *Rule:* All steps in a single diagram represent the same level of abstraction. Do not mix high-level business goals (e.g., "Increase Sales") with low-level click steps (e.g., "Click Submit Button").
*   **[ ] Q11: Domain Role Boundaries**
    *   *Rule:* The diagram maps operational actors and software systems as separate swimlanes. Human actions are clearly separated from automated backend service tasks.

---

## 3. Draw.io & Mermaid Syntax Compatibility (Q12 - Q16)

*   **[ ] Q12: Double-Quoted Shape Labels**
    *   *Rule:* Every text label containing spaces, colons, parentheses, or non-English characters is enclosed in double quotes (e.g., `A["Verify Account"]`).
*   **[ ] Q13: Standard Connector Usage**
    *   *Rule:* Only standard connector symbols are used (`-->` for solid line, `-.->` for dashed line). Advanced styling is avoided to prevent parsing crashes in Draw.io.
*   **[ ] Q14: No HTML Tags in Shapes**
    *   *Rule:* Labels do not contain HTML formatting tags (like `<br>`, `<b>`, `<i>`) inside the shapes. Multi-line text is split using standard string carriage returns or managed via XML properties.
*   **[ ] Q15: Orthogonal Connection Alignment**
    *   *Rule:* Connector edges use `edgeStyle=orthogonalEdgeStyle;rounded=0` to ensure clean, right-angled routing in the generated `.drawio` output.
*   **[ ] Q16: Correct Shape Mapping**
    *   *Rule:* Terminators are capsules `([ ... ])`, steps are rounded rectangles `( ... )`, gateways are diamonds `{" ... "}`, and data stores are cylinders `[( ... )]`.

---

## 4. Draw.io XML Validity & Production Readiness (Q17 - Q20)

*   **[ ] Q17: Clean XML Parsing**
    *   *Rule:* The generated `.drawio` file parses as valid, clean XML without unescaped special characters (e.g., `&`, `<`, `>` are properly escaped as `&amp;`, `&lt;`, `&gt;`).
*   **[ ] Q18: Grid Alignment (Clean Coordinates)**
    *   *Rule:* Shape positions align perfectly on a 10px grid. Vertical steps increment by exactly 100px. No overlapping boxes.
*   **[ ] Q19: Stencil Authenticity**
    *   *Rule:* BPMN tasks use BPMN shape styles; UML lifelines use true UML activation styles. No generic rectangle substitutes for specialized UML or BPMN elements.
*   **[ ] Q20: Mandatory Legend Inclusion**
    *   *Rule:* Every generated diagram includes a clear, visible Legend at the bottom explaining the semantic meaning of all shape colors.
