---
description: Template for generating the Information Management Approach defining how business analysis information (requirements, designs, models) is organized, stored, traced, and accessed for long-term use (BABOK Task 3.4).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity (BA Focus):** This document strictly dictates the lifecycle and storage of *business analysis information* only (e.g., elicited requirements, designs, traceability matrices, and models). Do not generate a generic IT or corporate data management policy.
> - **Storage and C.R.U.D Mapping:** In the 'Storage and Access' section, you MUST synthesize the stakeholder roles identified in Task 3.2 and generate a logical repository/folder structure. Subsequently, map those stakeholders to a strict Create, Read, Update, Delete (C.R.U.D) access permission matrix.
> - **Attribute Standardization:** Ensure that the recommended requirement attributes (e.g., Status, Priority, Source) align seamlessly with the Prioritization and Change Control processes defined in the `Governance Approach` (Task 3.3).
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If the `Business Analysis Approach` (Task 3.1), `Stakeholder Engagement Approach` (Task 3.2), or `Governance Approach` (Task 3.3) are unknown, HALT execution. Storage tools depend on the BA Approach, and access permissions depend entirely on the identified stakeholders.

# BUSINESS ANALYSIS INFORMATION MANAGEMENT APPROACH

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Business Analysis Approach (Task 3.1) -> Crucial for aligning storage tools with Predictive (heavy docs) or Adaptive (backlogs) methods.
*   [ ] **[Primary Input]** Stakeholder Engagement Approach (Task 3.2) -> Crucial for populating the C.R.U.D permission matrix.
*   [ ] **[Primary Input]** Governance Approach (Task 3.3) -> Crucial for ensuring requirements attributes support change control and prioritization.

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Organization** | Abstraction level, modeling formats | BA Approach | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Traceability** | Regulatory rules, tool availability | Business Policies / BA Approach | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Storage & Access** | Roles, confidentiality rules | Stakeholder Approach | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 4: Attributes** | Prioritization criteria, statuses | Governance Approach | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 1. Organization and Level of Abstraction
> **🤖 AI AGENT INSTRUCTION:** Define how business analysis information will be structured. Specify the depth of detail based on the BA Approach (e.g., highly detailed SRS documents for Predictive; lightweight User Stories for Adaptive).

*   **Information Architecture:** [INSERT: Narrative | e.g., "Information will be organized by business domain and feature sets rather than by organizational departments to prevent siloed requirements."]
*   **Level of Abstraction:** [INSERT: Narrative | e.g., "Executive sponsors will receive highly conceptual dashboard models, whereas Implementation SMEs will receive detailed data dictionaries and sequence diagrams."]

## 2. Traceability Approach
> **🤖 AI AGENT INSTRUCTION:** Define the methodology for tracing requirements. Specify the relationships to be tracked (Derive, Depends, Satisfy, Validate) and the expected coverage.

*   **Traceability Scope:** [INSERT: Narrative | e.g., "All Solution Requirements MUST trace backward to a Business Objective and forward to a Test Case (Validate)."]
*   **Traceability Mechanism:** [INSERT: Tool/Method | e.g., "Traceability will be managed dynamically using Jira link types (e.g., 'blocks', 'relates to', 'tested by')."]

## 3. Plan for Requirements Reuse
> **🤖 AI AGENT INSTRUCTION:** Identify which requirements or models have long-term value beyond this specific initiative and how they will be stored for enterprise reuse.

*   **Reusable Artifacts:** [INSERT: List | e.g., "Regulatory compliance rules, enterprise data dictionaries, and core workflow process models."]
*   **Reuse Strategy:** [INSERT: Narrative | e.g., "Reusable business rules will be abstracted from specific system constraints and stored in the central Enterprise Architecture Wiki for cross-project reference."]

## 4. Storage, Access, and Permissions
> **🤖 AI AGENT INSTRUCTION:** Define the physical or virtual repository where BA information will reside. You MUST generate a visual folder tree and a C.R.U.D matrix allocating access rights to the stakeholders identified in Task 3.2.

*   **Primary Information Management Tool(s):** [INSERT: e.g., "Confluence for requirements documentation, Jira for backlog management, and SharePoint for baselined approvals."]

### 4.1 Proposed Repository Structure
```text
📁 [Project Name] BA Workspace
├── 📂 01_Elicitation_Results (Raw notes, transcripts, audio)
├── 📂 02_Requirements_and_Designs
│   ├── 📄 Business_Requirements (BRD)
│   ├── 📄 Solution_Requirements (SRS / Backlog)
│   └── 📄 Transition_Requirements
├── 📂 03_Models_and_Visuals (Process maps, Data flows)
└── 📂 04_Baselines_and_Approvals (Signed-off PDFs)
```

### 4.2 Access Permissions (C.R.U.D Matrix)
> **🤖 AI AGENT INSTRUCTION:** Map the stakeholders identified in Task 3.2 to the repository structure defined above. Assign specific Create (C), Read (R), Update (U), and Delete (D) privileges based on their decision-making authority and governance roles (Task 3.3).

*Legend: [C]reate, [R]ead, [U]pdate, [D]elete*

| Stakeholder Role | Elicitation Results | Requirements & Designs | Models & Visuals | Baselines & Approvals |
| :--- | :---: | :---: | :---: | :---: |
| **[INSERT: e.g., Business Analyst]** | C, R, U, D | C, R, U, D | C, R, U, D | C, R |
| **[INSERT: e.g., Domain SME]** | R, U | R | R | R |
| **[INSERT: e.g., Project Sponsor]** | R | R | R | R, U *(Sign-off)* |
| **[INSERT: e.g., Implementation SME]** | R | R | R | R |
| **[INSERT: e.g., Regulator/Compliance]** | - | R | - | R |

## 5. Requirements Attributes
> **🤖 AI AGENT INSTRUCTION:** List the metadata (attributes) that will be appended to each requirement to facilitate the Governance Approach (prioritization and change control).

Every requirement recorded in the system MUST contain the following attributes:
*   **Absolute Reference:** [INSERT: Format | e.g., "REQ-SYS-001 - A unique, immutable identifier."]
*   **Author / Owner:** [INSERT: Description | The stakeholder who supplied the requirement or owns the business process.]
*   **Priority:** [INSERT: Scale | e.g., "Must, Should, Could, Won't (MoSCoW)."]
*   **Status:** [INSERT: Life cycle states | e.g., "Proposed, In Review, Approved, Deferred, Implemented."]
*   **Source:** [INSERT: Description | Link to the specific elicitation event or document analysis source.]
*   **Complexity/Risk:** [INSERT: Scale | e.g., "High, Medium, Low."]