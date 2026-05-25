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

## 📋 ID CONVENTION REFERENCE

All elements generated in this document must strictly adhere to the following naming conventions:

| Prefix | Entity | Format | Example |
| :--- | :--- | :--- | :--- |
| **SCP-IN-** | Scope Item (In-Scope) | `SCP-IN-xx` (where xx is a sequential number) | `SCP-IN-01`, `SCP-IN-02` |
| **SCP-OUT-** | Scope Item (Out-of-Scope) | `SCP-OUT-xx` (where xx is a sequential number) | `SCP-OUT-01`, `SCP-OUT-02` |
| **INT-** | Interface / Integration | `INT-xx` (where xx is a sequential number) | `INT-01`, `INT-02` |

---

## 1. Solution Vision
> **🤖 AI AGENT INSTRUCTION:** Provide a high-level summary of the solution's purpose, scope, and how it directly enables the desired Future State.

*   **Solution Purpose:** [INSERT: Vision Statement | 2-3 sentence overview of the ultimate functional output of the solution (e.g., "The solution is a unified, automated digital onboarding portal that validates customer identity in real time...") | Change Strategy (Section 4)]
*   **Business Alignment:** [INSERT: Alignment Narrative | Description of how this solution scope directly satisfies the Business Requirements and satisfies the SMART Business Objectives | Business Objectives (Section 2)]

---

## 2. In-Scope Capabilities and Components
> **🤖 AI AGENT INSTRUCTION:** Define the positive boundaries of the solution by documenting the specific business processes, data, organizational units, and technology domains that will be created, modified, or impacted. Ensure every item has a unique ID with the prefix `SCP-IN-`.

| Scope ID | Category | Scope Description | Impacted Stakeholder / Org Unit |
| :--- | :--- | :--- | :--- |
| **SCP-IN-01** | [Process / Data / System / OrgUnit] | [INSERT: e.g., "Manage Digital Onboarding Channel - Online registration verification and automated document parsing"] | [INSERT: e.g., Digital Risk Operations Team] |
| **SCP-IN-02** | [Process / Data / System / OrgUnit] | [INSERT: e.g., "Manage Stock Availability and Inventory levels"] | [INSERT: e.g., Warehouse Operations] |
| **[SCP-IN-xx]** | [INSERT] | [INSERT] | [INSERT] |

---

## 3. Out-of-Scope Components (Boundary Exclusions)
> **🤖 AI AGENT INSTRUCTION:** Explicitly state what is NOT included in this solution scope. Documenting these exclusions is critical to manage stakeholder expectations and prevent scope creep. Ensure every item has a unique ID with the prefix `SCP-OUT-`.

| Scope ID | Category | Scope Description (Boundary Exclusion) | Reason for Exclusion |
| :--- | :--- | :--- | :--- |
| **SCP-OUT-01** | [Process / Data / System / OrgUnit] | [INSERT: e.g., "Single view of customer - Customer profitability reporting"] | [INSERT: e.g., Out of scope for Phase 1 - Deferred to Phase 2 strategic roadmap] |
| **SCP-OUT-02** | [Process / Data / System / OrgUnit] | [INSERT: e.g., "Enterprise wide opt-out solution"] | [INSERT: e.g., Handled by corporate centralized governance team outside this project] |
| **[SCP-OUT-xx]** | [INSERT] | [INSERT] | [INSERT] |

---

## 4. Key Integrations and Interfaces
> **🤖 AI AGENT INSTRUCTION:** Identify the major touchpoints where this solution scope must interface with existing internal legacy applications or external third-party platforms.

| Interface ID | Interface Name | Type | Description |
| :--- | :--- | :--- | :--- |
| **INT-01** | [e.g., SAP Interface] | [Internal / External] | [INSERT: e.g., Legacy ledger accounting system via batch upload] |
| **INT-02** | [e.g., National ID API] | [Internal / External] | [INSERT: e.g., Government national database verification API for real-time validation] |
| **[INT-xx]** | [INSERT] | [INSERT] | [INSERT] |

---

## ✍️ GOVERNANCE & APPROVAL

> **🤖 AI AGENT INSTRUCTION:** This block represents the formal sign-off for the entire Solution Scope. Since C-level sponsors sign off on the overall boundary rather than individual line items, the agreement is captured at the document level.

| Approval Status | Date Agreed | Sign-off By (Sponsor/Authority) | Notes / Conditions |
| :--- | :--- | :--- | :--- |
| **[DRAFT / APPROVED / REJECTED]** | [INSERT: dd/mm/yyyy] | [INSERT: Surname, First name - Title/Role] | [INSERT: Any high-level conditions or remarks] |

---

## 5. Next Step Verification (Sequential Bridge Tollgate)

> **🤖 AI AGENT INSTRUCTION (TOLLGATE EXECUTION):** 
> Display this block exactly to prompt the user for the next steps. The solution scope is considered **RAW** until it is approved and transitioned to the requirement modeling phase.

*   **Self-Check Prompt:** "I have successfully drafted the **Solution Scope** with standard IIBA tables and a document-level Governance Block. Please select your preferred next step:
    1. **Deconstruct to Business Rules (Task 5.4):** Open `references/templates/shared/business-rules-catalog.md` to define and isolate the operational rules that govern this scope.
    2. **Model Requirements (Task 7.1):** Proceed to `specified-modelled-requirements.md` to write detailed, atomic functional requirements for the in-scope capabilities."