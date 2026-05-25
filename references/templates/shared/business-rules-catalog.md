---
description: Shared template for generating the Business Rules Catalog, managing the declarative business rules governing enterprise behavior and definitions (BABOK Task 5.4 / Technique 10.9).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity:** Must strictly adhere to IIBA BABOK V3 Technique 10.9 standard definitions. A business rule is a directive that defines or constrains some aspect of the business. It MUST be atomic, declarative, highly structured, and independent of any technology or business process that enforces it.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** Never embed business rule logic or statements directly into process descriptions, current state, or future state documents as inline text bullets. Always decouple them and maintain them in this centralized catalog.
> - **Rule Typing (Strict):** Ensure each rule is classified correctly under **Rule Type**:
>   - *Definitional (Structural)*: Defines a business concept, relationship, or category (e.g., "A 'VIP Customer' is defined as a customer with annual purchases exceeding $10,000").
>   - *Behavioural (Operational)*: Constrains or governs the behavior of people and systems, often containing triggers or conditional requirements (e.g., "Picking must be completed on the day prior to scheduled installation").
>   - *Note:* Do NOT confuse Business Rules with Business Policies. Policies are broad strategic directions; rules are operational and actionable directives.
> - **Format Constraints:** Every rule must have a unique ID using the standard format **`[RU-xx]`** (e.g., `RU-01`, `RU-02`). Statements must be testable (it must be clear whether a transaction or state violates the rule or not).
> - **Input Validation:** Scan the Input Traceability Map before processing. If any mandatory input is missing, ambiguous, or conflict-prone, you MUST NOT proceed with generation.

# BUSINESS RULES CATALOG

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project | Project Charter or Kickoff Metadata]
**Date of Issue:** [INSERT: ISO Date | YYYY-MM-DD format of generation | Current Session Metadata]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** `Elicitation Results (confirmed)` (Task 4.4) -> E.g., Policy documents, subject matter expert interviews, legacy code audits.
*   [ ] **[Primary Input]** `Current State Description` (Task 6.1) -> Baseline business rules currently active in the organization.
*   [ ] **[Primary Input]** `Future State Description` (Task 6.2) -> Target business rules or policy changes requested for the future state.

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Business Rules Register** | Confirmed business logic, conditional limits, definition policies, and constraints | `Elicitation Results (confirmed)` / `Current State Description` / `Future State Description` | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 📋 ID CONVENTION REFERENCE

All elements generated in this document must strictly adhere to the following naming conventions:

| Prefix | Entity | Format | Example |
| :--- | :--- | :--- | :--- |
| **RU-** | Business Rule | `RU-xx` (where xx is a sequential number) | `RU-04`, `RU-05` |

---

## 1. Business Rules Register

> **🤖 AI AGENT INSTRUCTION:** Generate the list of business rules discovered or designed for this initiative. Ensure that each statement is written in a declarative and atomic format (no nested processes or flow diagrams are allowed within rule statements).

| Business Rule ID | Rule Type | Business Rule Statement | Enforcement Level | Source / Driver |
| :--- | :--- | :--- | :--- | :--- |
| **RU-01** | [Definitional / Behavioural] | [INSERT: e.g., "All debt greater than 180 days is to be written off"] | [Mandatory / Advisory] | [INSERT: e.g., Corporate Finance Policy] |
| **RU-02** | [Definitional / Behavioural] | [INSERT: e.g., "Quote is valid for 30 days"] | [Mandatory / Advisory] | [INSERT: e.g., Sales Governance Guidelines] |
| **RU-03** | [Definitional / Behavioural] | [INSERT: e.g., "A domestic transaction is defined as a transaction originating from an IP address within the local country boundaries."] | [Mandatory / Advisory] | [INSERT: e.g., Compliance Department] |
| **[RU-xx]** | [INSERT] | [INSERT] | [INSERT] | [INSERT] |

---

## 2. Next Step Verification (Sequential Bridge Tollgate)

> **🤖 AI AGENT INSTRUCTION (TOLLGATE EXECUTION):** 
> Display this block exactly to prompt the user for the next steps. These business rules are considered **RAW** until they are integrated into requirements models and mapped.

*   **Self-Check Prompt:** "I have successfully drafted the **Business Rules Catalog**. These rules must now be mapped to processes, requirements, or data structures. Please select your preferred next step:
    1. **Trace to Requirements (Task 7.1):** Map these rules into the functional requirements in `specified-modelled-requirements.md` under the 'Associated Business Rule' column.
    2. **Define Scope Boundaries (Task 6.4):** Identify which business rules are in-scope or out-of-scope in `solution-scope.md`."
