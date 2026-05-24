---
description: Standard modeling rules and Draw.io styles for UML Sequence, Activity, and State Diagrams.
---

# UML Modeling Standards

Unified Modeling Language (UML) provides standard structural and behavioral modeling diagrams for software development. Within BABOK 10.35, UML diagrams bridge the gap between functional business analysis and technical software specification.

---

## 1. UML Sequence Diagrams (System & API Integration)

Sequence diagrams map the sequential exchange of messages between object lifelines over a timeline:

*   **Lifelines (Đường đời - Khối hệ thống):** Represent independent system components, database nodes, or external microservices (e.g., "Mobile App", "Auth Service", "SQL Database").
    *   *Draw.io Lifeline Stencil:* `style="shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;collapsible=0;recursiveResize=0;outline=0;fillColor=#dae8fc;strokeColor=#6c8ebf;"`
*   **Activation Box (Thanh hoạt động):** A vertical rectangle placed on a lifeline indicating that a system is actively processing or waiting for a response.
*   **Synchronous Message (Solid Line, Filled Arrowhead):** Represents a blocking call (API request). The caller halts until a response is received.
*   **Reply / Return Message (Dashed Line, Open Arrowhead):** Returns data or a confirmation token back to the caller.
*   **Asynchronous Message (Solid Line, Open Arrowhead):** A non-blocking call. The caller proceeds immediately without waiting for a reply (e.g., triggering a background webhook notification).

---

## 2. UML Activity Diagrams (Execution Control & Data Flow)

UML Activity Diagrams map the execution flow of system processes and are particularly powerful for modeling concurrent operations:

*   **Action Node (Rounded Rectangle):** Represents an atomic task or execution block.
    *   *Draw.io Style:* `style="rounded=1;whiteSpace=wrap;html=1;arcSize=40;fillColor=#E1F5EE;strokeColor=#1D9E75;"`
*   **Fork Bar (Thanh phân nhánh song song):** A thick black horizontal or vertical bar. A single incoming control flow splits into multiple parallel execution flows.
*   **Join Bar (Thanh hội tụ song song):** Multiple parallel execution flows synchronize back into a single control flow. All incoming flows must reach the Join bar before the process can continue.
*   **Object Node (Rectangle):** Represents a physical document, token, or data payload transferred during the flow.
*   **Control Flow (Solid Arrow) vs. Object Flow (Dashed Arrow):** Control flow indicates execution sequence, while Object flow traces data input/output.

---

## 3. UML State Machine Diagrams (Vòng đời Thực thể)

State diagrams capture the life cycle of a single business entity (e.g., "Invoice", "User Account", "Order"):

*   **State (Rectangle with highly rounded corners):** Represents a stable condition or status of the entity (e.g., `Draft`, `Pending Payment`, `Activated`, `Expired`).
*   **Transition (Directed Arrow):** Represents the movement from one state to another.
*   **Transition Syntax (BABOK 10.44.3):** Transitions must be labeled using the strict IIBA format:
    `Trigger [Guard Condition] / Action`
    *   *Example:* `receive_otp [otp_valid == True] / activate_account`

---

## 4. UML Draw.io XML Stencil Catalog

To generate true UML elements in a `.drawio` file, the AI Assistant must apply these explicit styles:

### A. UML Actor
*   `style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outline=1;strokeColor=#999999;fillColor=#f5f5f5;"`

### B. Lifeline Header & Activation Box
*   **System Lifeline Header Box:**
    `style="shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;collapsible=0;recursiveResize=0;outline=0;fillColor=#dae8fc;strokeColor=#6c8ebf;"`
*   **Activation Bar:**
    `style="html=1;points=[];perimeter=orthogonalPerimeter;fillColor=#333333;strokeColor=none;"` (Typically `width=10`, `height=80`).

### C. UML Synchronization Bar (Fork / Join)
*   `style="shape=rect;fillColor=#333333;strokeColor=none;rounded=0;"` (Typically `width=120`, `height=8` for horizontal, or `width=8`, `height=120` for vertical).
