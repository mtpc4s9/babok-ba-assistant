---
name: process-modelling
description: Use when analyzing, designing, and modeling sequential operational workflows, business processes, or system events using Flowcharts, BPMN 2.0, or UML standards. Consolidates operating instructions for 5 AI modes including the Draw.io XML Compiler.
---

# Process Modelling (BABOK 10.35)

## 1. Overview & The Tri-Standard Framework

Process Modelling visually represents the sequential flow of work within an organization or system. To ensure high-quality communication with different audiences and guarantee successful IT verification, the AI Assistant must distinguish and utilize three distinct modeling standards:

| Standard | Target Audience | Core Purpose | Key Strengths |
| :--- | :--- | :--- | :--- |
| **1. Standard Flowchart & User Flow** | Business stakeholders, C-level, general users | Present high-level business logic, screens journey, and sequence simply. | High readability, low technical barrier, easy to understand. |
| **2. BPMN 2.0** | Process owners, operations teams, BA teams | Map rigorous operational boundaries and exception handling. | Clear ownership (Pools/Lanes), standardized event & gateway logic. |
| **3. UML Diagrams**| Solution architects, system engineers, IT team | Define software execution logic, data flows, and system integration. | Precise control flows, object flows (data state changes), system actions. |

---

## 2. Standard Triggers & Intention Recognition

The AI Assistant must automatically activate this technique when the user inputs requests containing these keywords or intent:
*   *Flowchart/User Flow:* "vẽ activity diagram", "vẽ sơ đồ hoạt động", "vẽ flowchart có màu", "vẽ user flow", "vẽ luồng màn hình", "tạo activity", "vẽ sơ đồ nghiệp vụ", "vẽ flow có rẽ nhánh", "vẽ sơ đồ cho Confluence", "làm cái flow đi".
*   *BPMN:* "vẽ BPMN", "thiết kế quy trình BPMN", "BPMN 2.0 process flow", "vẽ sơ đồ phân làn swimlanes", "BPMN payment flow".
*   *UML:* "vẽ sequence diagram", "sơ đồ tuần tự", "sơ đồ trạng thái", "vẽ class diagram", "UML sequence flow", "vẽ sơ đồ tích hợp API".

---

## 3. 🎯 The Rule of Process Decomposition (Anti-Spiderweb Rule)

> [!WARNING]
> **DO NOT** create massive, monolithic diagrams that look like a "spiderweb". An unreadable process model is a failed deliverable.
> The primary objective is to save the Business Analyst's time by generating clean, well-structured, editable diagram templates rather than trying to draw a finalized aesthetic masterpiece.

To ensure clarity and maintainability, the AI Assistant must enforce strict **Process Decomposition**:
1.  **The Rule of 7±2:** A single process diagram must contain between **5 and 9 activity nodes** (Process steps, Tasks, or Actions).
2.  **Sub-Process Encapsulation:** If an operational sequence exceeds 9 nodes, group logical sub-steps into a single **Sub-Process** node (Predefined Process in Flowcharts, Collapsed Sub-process in BPMN, or Sub-activity in UML).
3.  **Clean Interfaces:** Every decomposed Sub-Process must have a clearly defined **Trigger (Input)** and **End State (Output)** that matches its parent diagram parent-node interfaces.

---

## 4. Operating Instructions (The 5 Core Modes)

When requested to assist with Process Modelling, the AI Assistant must diagnose and execute under one of these five modes:

### Mode A: Analytical Decomposition (Default Business Analysis)
Analyze raw requirements, identify actors, systems, happy paths, and exception pathways.
*   **Step 1:** Establish process metadata (Name, Standard, Trigger, Success Outcome).
*   **Step 2:** Apply the Anti-Spiderweb Rule. If steps > 9, split into a Level 1 High-level map and Level 2 detailed Sub-processes.
*   **Step 3:** Draft the step-by-step sequential catalog using the [Process Specification Template](templates/process-specification.md).

### Mode B: Flowchart & User Flow Generator (Mermaid Compatible)
Generate clean, Draw.io-compatible Mermaid code.
*   **Step 1:** Adhere strictly to the double-quoting rules (`A["Step Name"]`) to avoid Draw.io parser crashes.
*   **Step 2:** Never use HTML tags inside shapes.
*   **Step 3:** Use standard shape mappings (Capsule `([ ... ])` for Start/End, Rounded `( ... )` for Tasks, Diamond `{" ... "}` for Decisions).

### Mode C: Advanced BPMN 2.0 Specification
Prepare detailed operational BPMN specifications.
*   **Step 1:** Map Swimlanes/Pools to represent organizational boundaries.
*   **Step 2:** Classify tasks (User Task vs. Service Task) and events (Timer, Message, Error Boundary).
*   **Step 3:** Populate the [BPMN Specification Template](templates/bpmn-specification.md).

### Mode D: UML Modeling (PlantUML / Mermaid)
Provide precise software engineering diagrams (Sequence, Class, State).
*   **Step 1:** Reference the [UML Standards Guide](references/uml-standards.md) for correct syntax.
*   **Step 2:** Use `umlActor` and `umlLifeline` for Sequence diagrams.
*   **Step 3:** Focus heavily on system integration boundaries, API requests, and response payloads.

### Mode E: The Draw.io XML Compiler (Direct Download Output)
> [!IMPORTANT]
> The primary goal is to **save the BA's drafting time**. The output must be a valid, importable `.drawio` XML file containing all elements (shapes, swimlanes, decisions) pre-linked with orthogonal connections.
> **DO NOT** over-engineer complex aesthetic layout calculations. Use the simplified grid spacing model so the user can easily rearrange and fine-tune elements in Draw.io.

*   **Step 1:** Load the [Draw.io XML Engine Guide](references/drawio-xml-engine.md) to retrieve the style definitions and coordinate templates.
*   **Step 2:** Apply the **Pragmatic Linear-Grid Spacing Model**:
    *   *Vertical spacing:* `y` increments by `100px` for consecutive nodes (`y = 40, 140, 240...`).
    *   *Horizontal spacing:* Branches shift left (`x - 180px`) or right (`x + 180px`).
*   **Step 3:** Link elements using standard orthogonal edges (`edgeStyle=orthogonalEdgeStyle;rounded=0`).
*   **Step 4:** Write the raw XML code to a `.drawio` file under `outputs/[file-name]-process.drawio` and provide a clickable link for the user.

---

## 5. Relative Path Asset Catalog

Navigate to these structured assets to execute specific tasks:
*   **Templates:**
    *   [Process Specification Template](templates/process-specification.md) — 4-part general process specification document.
    *   [BPMN Specification Template](templates/bpmn-specification.md) — Specialized Pool, Event, and Gateway logs.
*   **References:**
    *   [Draw.io XML Engine](references/drawio-xml-engine.md) — Grid spacing math, Enterprise color palette, and raw XML stencils.
    *   [BPMN Standards Guide](references/bpmn-standards.md) — Strict rules for pools, lanes, events, and gateway usage.
    *   [UML Standards Guide](references/uml-standards.md) — PlantUML and Mermaid specifications for Activity, Sequence, and State diagrams.
    *   [High-Fidelity Examples](references/examples.md) — EdTech and Enterprise process models (Flowchart, BPMN, UML).
*   **Checklists:**
    *   [Quality Checklist](checklists/quality-checklist.md) — 20-point quality scorecard (Q1-Q20) for process verification.

---

## 🚦 IT Verification Checklist

Before finalized output generation, the AI Assistant must verify the model against the [Quality Checklist](checklists/quality-checklist.md):
*   **Terminator Balance:** Single clear start and at least one defined end.
*   **Gateway Completeness:** 100% mutually exclusive branches, fully labeled.
*   **Swimlane Consistency:** Explicit owners (Role/System) mapped to swimlanes/pools.
*   **Anti-Spiderweb Compliance:** Diagram contains ≤ 9 activity nodes.
*   **XML Validity:** The `.drawio` file parses correctly without unescaped XML entities.
