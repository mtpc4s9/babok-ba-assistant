---
description: Stakeholder verification register for KA08 Solution Evaluation (Tasks 8.1-8.5) defining Must Have, Should Have, and Approval Authority roles.
---

# KA08: Solution Evaluation - Stakeholders

> **🤖 AI AGENT INSTRUCTION (STAKEHOLDER VERIFICATION & ESCALATION):** 
> You MUST verify stakeholder participation before evaluating solution performance or recommending any actions.
> *   If a **Must Have** is missing: BLOCK execution. You cannot invent qualitative feedback or assume executive approval.
> *   If a **Should Have** is missing: Proceed but WARN the user of a potential quality or compliance blind spot.
> *   If the **Approval Authority (Sponsor)** is missing in Task 8.5: Do NOT finalize the recommendation. Shift to Advisory Mode and demand explicit executive sign-off routing.

---

## Tasks 8.1 & 8.2: Performance Measurement & Analysis
> **🤖 AI AGENT INSTRUCTION:** Focus: Defining metrics, collecting data, and interpreting variances.

*   **Must Have:**
    *   **Sponsor:** Responsible for approving the measures used to determine solution performance and providing baseline expectations.
    *   **End User / Customer:** Contributes the qualitative data (e.g., job satisfaction, usability feedback) required to measure actual value realized.
    *   **Domain Subject Matter Expert (SME):** Provides insights into data for analyzing solution performance and identifies underlying risks.
*   **Should Have:**
    *   **Project Manager:** Responsible for managing the schedule to perform the solution measurement (only required if the solution is still within an active project phase).
    *   **Regulator:** May dictate constraints and guidelines that must be incorporated into the performance measures.

---

## Tasks 8.3 & 8.4: Limitations Assessment (Internal vs. External)
> **🤖 AI AGENT INSTRUCTION:** Focus: Diagnosing root causes of under-performance in the software (8.3) or the enterprise/culture (8.4).

*   **Must Have:**
    *   **Domain SME:** Provides input into how the solution/organization should perform and identifies potential limitations to value realization.
    *   **End User / Customer:** The primary source for uncovering Enterprise Limitations (Task 8.4). If the AI Agent lacks insight into their culture or pain points, MUST trigger `elicitation-interview-playbook.md`.
*   **Should Have:**
    *   **Tester (Task 8.3 only):** Responsible for identifying internal solution defects/bugs during construction and implementation.
    *   **Regulator:** Must be consulted to ensure that organizational or system constraints are not actually mandatory legal compliance rules.
*   **Approval Authority:**
    *   **Sponsor:** Responsible for approving a change to potential value based on the identified limitations, and directing resources to fix them.

---

## Task 8.5: Recommend Actions to Increase Solution Value
> **🤖 AI AGENT INSTRUCTION:** Focus: Recommending organizational change, system retirement, or feature enhancement.

*   **Must Have:**
    *   **Domain SME:** Provides expert input into how to change the solution or the organization in order to increase value.
    *   **Customer / End User:** Their adoption rate and feedback heavily dictate whether a solution should be retired or enhanced with organizational change (training).
*   **Should Have:**
    *   **Regulator:** Ensures that any recommended action (e.g., retiring a legacy system) does not violate data retention laws or industry rules.
*   **Approval Authority (⚠️ MANDATORY):**
    *   **Sponsor:** Authorizes and ensures funding for the implementation of ANY recommended actions. The AI Agent / Business Analyst ONLY recommends; the Sponsor decides. Without the Sponsor, the `recommended-actions.md` remains a draft.
