---
description: Advanced modeling standards and syntax rules for BPMN 2.0 process mapping.
---

# BPMN 2.0 Modelling Standards

BPMN 2.0 (Business Process Model and Notation) is the global standard for representing complex operational business processes. It provides a rigorous visual language that bridges the gap between business requirements and technical implementation.

---

## 1. Pools vs. Lanes (The Boundaries of Ownership)

Understanding the distinction between Pools and Lanes is critical for correct BPMN mapping:

*   **Pools (Thực thể độc lập):** Represent independent organizational entities, participants, or external systems (e.g., "Parent Pool", "Bank Portal Pool", "SchoolsBuddy System Pool").
    *   *Communication Rule:* Pools communicate with each other exclusively via **Message Flows (Dashed arrow with an open circle start)**.
    *   *Sequence Flow Constraint:* **Sequence Flows (Solid lines) CANNOT cross Pool boundaries.**
*   **Lanes (Swimlanes - Phòng ban / Vai trò):** Partition a Pool to represent internal roles, departments, or subsystem layers (e.g., "Accounting Dept", "Registrar Lane", "Database Engine").
    *   *Communication Rule:* Lanes within the same Pool communicate freely via **Sequence Flows**.
    *   *No Message Flows inside a Pool:* Do not use message flows between lanes in the same pool.

---

## 2. BPMN Events (Triggers & Lifecycle States)

Events are represented as circles and dictate process behavior:

*   **Start Event (Vòng tròn nét mảnh):** Initiates the process. Must have exactly one Start Event per Pool (unless it is a collapsed pool).
*   **Timer Event (Vòng tròn có hình đồng hồ):** Denotes a time-based delay or trigger (e.g., "Wait 24 Hours", "Every Monday at 8 AM").
*   **Message Catch/Throw Event (Vòng tròn có hình lá thư):** Catches or throws an asynchronous communication payload.
*   **Error Boundary Event (Vòng tròn chứa tia chớp, gắn ở cạnh Task):** Catches system exceptions or failures during a task.
    *   *Flow Route:* Must route directly to a failure handling path or retry loop.
*   **End Event (Vòng tròn nét đậm):** Denotes the process termination. Every path must terminate at an End Event. Use separate circles for **Success End** and **Failure End**.

---

## 3. Gateways & Branching Semantics

Gateways (Diamonds) control the divergence and convergence of sequence flows:

*   **Exclusive Gateway - XOR (Hình thoi trống hoặc chứa chữ X):**
    *   *Behavior:* Evaluates guard conditions. **Exactly one** outgoing branch is executed.
    *   *Rule:* Branching conditions must be 100% mutually exclusive and collectively exhaustive.
*   **Parallel Gateway - AND (Hình thoi chứa dấu +):**
    *   *Behavior:* Splits the flow into **all** concurrent branches simultaneously.
    *   *Convergence Rule:* Used to merge concurrent paths back into a single sequence. The gateway waits for all incoming flows to arrive before proceeding.
*   **Inclusive Gateway - OR (Hình thoi chứa dấu O):**
    *   *Behavior:* Executes **one or more** branches based on condition evaluation.
    *   *Rule:* Used only when multiple conditions can be true simultaneously.

---

## 4. BPMN Draw.io XML Stencil Catalog

To generate true BPMN elements in a `.drawio` file, the AI Assistant must apply these explicit styles:

### A. BPMN Pools & Lanes
*   **Multi-Lane Pool Parent:**
    `style="swimlane;html=1;horizontal=0;childLayout=stackLayout;startSize=30;fillColor=#E8E6FC;strokeColor=#7F77DD;fontColor=#4E2CC0;fontStyle=1;"`
*   **Child Swimlane:**
    `style="swimlane;html=1;horizontal=0;fillColor=none;strokeColor=#CCCCCC;connectable=0;"`

### B. Specialized BPMN Tasks
*   **User Task (Manual Human Action):**
    `style="rounded=1;whiteSpace=wrap;html=1;arcSize=10;fillColor=#E1F5EE;strokeColor=#1D9E75;fontStyle=1;"` (Usually decorated with a small user icon in Draw.io).
*   **Service Task (Automated API/Server Execution):**
    `style="rounded=1;whiteSpace=wrap;html=1;arcSize=10;fillColor=#E8E6FC;strokeColor=#7F77DD;fontStyle=1;"` (Usually decorated with a gear icon).

### C. BPMN Event Circles
*   **Timer Start Event:**
    `style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fillColor=#fff2cc;strokeColor=#d6b656;shape=mxgraph.bpmn.event;eventType=timer;"`
*   **Error Catching Boundary Event:**
    `style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fillColor=#f8cecc;strokeColor=#b85450;shape=mxgraph.bpmn.event;eventType=error;eventActor=boundary;"`
