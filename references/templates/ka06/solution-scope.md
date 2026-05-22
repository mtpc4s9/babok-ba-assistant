---
description: Template for generating the Solution Scope defining the boundaries of the solution and identifying the new capabilities it will deliver to achieve the business need (BABOK Task 6.4).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity:** Must strictly adhere to IIBA BABOK V3 standard definitions and professional enterprise terminology (e.g., *Solution Scope, Boundary Exclusions, In-Scope Capabilities, Interfaces, Scope Creep*).
> - **Strict Boundary Setting:** The primary value of this document is defining the clear limits of the solution space. Pay special attention to defining **Boundary Exclusions (Out-of-Scope)** to prevent downstream Scope Creep during Requirements Analysis and Design Definition (KA07).
> - **Capability-Focused:** Describe the solution scope in terms of high-level capabilities, major process areas, business rules, organizational units, and technical domains, without diving into low-level software design or coding specifications.
> - **Input Validation:** Scan the Input Traceability Map before processing. If any mandatory input is missing, ambiguous, or conflict-prone, you MUST NOT proceed with generation.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If required inputs are unavailable or unclear in the user's context (e.g., missing specific change strategy decisions, undefined future state technology baselines, or ambiguous business boundaries), you MUST immediately halt generation, pivot to advisory/inquiry mode, and request the User to provide the missing facts or clarify ambiguity. Never hallucinate, assume, or guess business reality.

# SOLUTION SCOPE

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project | Project Charter or Kickoff Metadata]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD format of generation | Current Session Metadata]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** `Change Strategy` (Task 6.4) -> Crucial for Section 1, 2
*   [ ] **[Primary Input]** `Future State Description` (Task 6.2) -> Crucial for Section 2, 3
*   [ ] **[Primary Input]** `Business Objectives` (Task 6.2) -> Crucial for Section 1, 2
*   [ ] **[Primary Input]** `Elicitation Results (confirmed)` (Task 4.4) -> Crucial for Section 4

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Solution Vision** | Chosen change strategy, overarching business needs, and value targets | `Change Strategy` (Section 4) / `Business Objectives` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: In-Scope Capabilities & Components** | Future state process outcomes, target organizational units, and technology ecosystem | `Future State Description` (Section 2, 3, 4) / `Change Strategy` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Out-of-Scope Components** | Excluded operational processes, divisions, legacy systems, or customer segments | `Future State Description` (Section 1 - Out-of-Scope) | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 4: Key Integrations & Interfaces** | Internal legacy systems, third-party vendor platforms, external stakeholder touchpoints | `Future State Description` (Section 4) / `Elicitation Results (confirmed)` | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 1. Solution Vision
> **🤖 AI AGENT INSTRUCTION:** Provide a high-level summary of the solution's purpose, scope, and how it directly enables the desired Future State.

*   **Solution Purpose:** [INSERT: Vision Statement | 2-3 sentence overview of the ultimate functional output of the solution (e.g., "The solution is a unified, automated digital onboarding portal that validates customer identity in real time...") | Change Strategy (Section 4)]
*   **Business Alignment:** [INSERT: Alignment Narrative | Description of how this solution scope directly satisfies the Business Requirements and satisfies the SMART Business Objectives | Business Objectives (Section 2)]

## 2. In-Scope Capabilities and Components
> **🤖 AI AGENT INSTRUCTION:** Define the positive boundaries of the solution by documenting the specific business processes, data, organizational units, and technology domains that will be created, modified, or impacted.

*   **Business Processes:** [INSERT: Processes List | The specific operational processes to be automated, optimized, or established (e.g., Online registration verification, automated document parsing) | Future State Description (Section 2)]
*   **Data & Information:** [INSERT: Data Domains List | Core data entities or information assets managed, stored, or processed by the solution (e.g., Customer Profile Master Data, ID Image Metadata) | Elicitation Results (confirmed)]
*   **Technology & Infrastructure:** [INSERT: Technical Domains List | High-level architectural components, hardware platforms, or software modules required (e.g., OCR extraction module, database server instance) | Future State Description (Section 4)]
*   **Organizational Units:** [INSERT: Impacted Org Units | Departments, divisions, or external customer segments whose work or interactions are directly altered by the solution (e.g., Digital Risk Operations Team) | Future State Description (Section 3)]

## 3. Out-of-Scope Components (Boundary Exclusions)
> **🤖 AI AGENT INSTRUCTION:** Explicitly state what is NOT included in this solution scope. Documenting these exclusions is critical to manage stakeholder expectations and prevent scope creep.

*   **Excluded Processes:** [INSERT: Excluded Processes List | Adjacent business processes that will remain entirely manual or untouched in this phase (e.g., Corporate customer registration) | Future State Description (Section 1)]
*   **Excluded Systems:** [INSERT: Excluded Systems List | Legacy platforms or applications that will not be modified or replaced (e.g., Core legacy retail billing system) | Future State Description (Section 1)]
*   **Excluded Stakeholders/Units:** [INSERT: Excluded Groups List | Particular user groups or external divisions explicitly carved out from utilizing this solution | Future State Description (Section 1)]

## 4. Key Integrations and Interfaces
> **🤖 AI AGENT INSTRUCTION:** Identify the major touchpoints where this solution scope must interface with existing internal legacy applications or external third-party platforms.

*   **Internal Interfaces:** [INSERT: Internal Interfaces List | Connections with existing enterprise software applications, databases, or local services (e.g., Legacy ledger accounting system via batch upload) | Elicitation Results (confirmed)]
*   **External Interfaces:** [INSERT: External Interfaces List | Touchpoints with external users, suppliers, regulatory databases, or vendor APIs (e.g., Government national database verification API, email/SMS gateway) | Elicitation Results (confirmed)]