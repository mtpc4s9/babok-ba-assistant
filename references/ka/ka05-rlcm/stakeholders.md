---
description: Stakeholder verification register for KA05 Requirements Life Cycle Management (Tasks 5.1-5.5) defining Must Have, Should Have, and Approval Authority roles.
---

# KA05: Requirements Life Cycle Management - Stakeholders

> **🤖 AI AGENT INSTRUCTION (STAKEHOLDER VERIFICATION):** You MUST verify stakeholder participation before generating any KA05 Matrix or Assessment artifacts. 
> *   If a **Must Have** is missing: BLOCK execution and request the user to identify them or assign a Stakeholder Proxy.
> *   If a **Should Have** is missing: Proceed but WARN the user of a potential quality/compliance drop.
> *   If the **Approval Authority** is missing in Task 5.4 or 5.5: Do NOT finalize the deliverable. Demand explicit sign-off routing based on the `governance-approach.md`.

---

## Tasks 5.1, 5.2, and 5.3: Unified Matrix Generation (Trace, Maintain, Prioritize)
> **🤖 AI AGENT INSTRUCTION:** Because these tasks are executed concurrently to build the RTM, BRM, FRM, and NFRM, their stakeholder groups are consolidated.

*   **Must Have:**
    *   **Sponsor:** Required to verify that prioritized requirements will deliver value from an organizational perspective.
    *   **Domain Subject Matter Expert (SME):** Required to provide recommendations regarding which requirements link to which solution components, and to ensure maintained requirements accurately reflect stated needs.
    *   **Implementation Subject Matter Expert (SME):** Required to provide input on technical dependencies and negotiate priority based on technical complexity/constraints.
*   **Should Have:**
    *   **Customer / End User:** Verifies that the prioritized requirements will deliver value from the user's perspective.
    *   **Tester:** Uses traced and maintained requirements to create test plans and test cases.
*   **Approval Authority:**
    *   **Sponsor (or designated Product Owner):** Approves the baseline prioritization and traceability linkages.

---

## Task 5.4: Assess Requirements Changes
*   **Must Have:**
    *   **Sponsor:** Accountable for the solution scope; provides executive insight to be utilized when assessing whether the change justifies the cost.
    *   **Domain Subject Matter Expert (SME):** Required to provide insight into how the change will impact business operations and overall value.
    *   **Project Manager:** Reviews the change assessment to determine if additional budget, schedule, or resources are required for implementation.
*   **Should Have:**
    *   **Regulator:** Required if the change touches compliance. Changes are likely to be referenced by auditors to confirm adherence to standards.
    *   **Operational Support:** Provides information on their ability to support the operation of the solution if the change is accepted.
*   **Approval Authority (⚠️ MANDATORY):**
    *   **Change Control Board (CCB) / Sponsor:** The Business Analyst performs the impact analysis, but MUST NOT approve the change. The Approval Authority defined in the `governance-approach.md` makes the final Go/No-Go decision.

---

## Task 5.5: Approve Requirements
*   **Must Have:**
    *   **Sponsor:** Responsible to review and approve the business case, solution or product scope, and all requirements and designs.
    *   **Domain SME / End User:** Involved in the review and validation of requirements before formal sign-off.
*   **Should Have:**
    *   **Project Manager:** Responsible for managing the project plan activities pertaining to review and approval schedules.
    *   **Tester:** Responsible for ensuring quality assurance standards are feasible (e.g., ensuring requirements have the *testable* characteristic) before approval.
*   **Approval Authority (⚠️ MANDATORY):**
    *   **Sponsor (or formal delegates):** The Sponsor MUST physically or digitally sign off on the `requirements-approval-package.md`. Without this authority, requirements remain in the "Proposed" or "Unconfirmed" state.
