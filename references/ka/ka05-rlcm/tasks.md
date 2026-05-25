#### description: Task definitions for KA05 Requirements Life Cycle Management (Tasks 5.1-5.5) including Purpose, Inputs, Outputs, and template mapping for unified Matrix generation.

### KA05: Requirements Life Cycle Management — Tasks Reference

**🤖 AI AGENT INSTRUCTION (WORKFLOW EXECUTION):** 
You MUST execute `references/advisor/readiness-check.md` before generating any Output. 
**CRITICAL MERGE RULE:** Tasks 5.1, 5.2, and 5.3 are executed concurrently. You MUST NOT generate separate documents for them. Their outputs are unified into Matrix templates depending on the level of abstraction (Business, Functional, Non-Functional, or Master RTM).

---

#### Tasks 5.1, 5.2, and 5.3 (Unified Execution: Trace, Maintain, Prioritize)
*   **5.1 Trace Requirements Purpose:** To ensure requirements and designs are aligned to one another, and to manage the effects of change (Backward/Forward Traceability).
*   **5.2 Maintain Requirements Purpose:** To retain requirement accuracy and consistency, and to support reuse in other solutions.
*   **5.3 Prioritize Requirements Purpose:** To rank requirements in the order of relative importance (Value, Risk, Cost).
*   **Inputs:** Requirements (any state), Designs (any state).
*   **Unified Outputs (Route based on User Request):**
    *   *If Strategy/Business Level* → Use `references/templates/ka05/business-requirement-matrix.md`
    *   *If Solution/Functional Level* → Use `references/templates/ka05/functional-requirement-matrix.md`
    *   *If Quality/Constraint Level* → Use `references/templates/ka05/non-functional-requirement-matrix.md`
    *   *If End-to-End Lineage required* → Use `references/templates/ka05/requirement-traceability-matrix.md` (RTM)
*   **Notes & CBAP Traps:**
    *   *Exam Trap:* Prioritization (5.3) is not a one-time event; it is continuous. Dependencies (5.1) heavily influence Priorities (e.g., you cannot rank a dependent Functional Requirement higher than its parent Business Requirement).
    *   *Exam Trap:* Maintaining (5.2) involves identifying requirements for long-term organizational *Reuse*, not just keeping them updated for the current project.

---

#### Task 5.4: Assess Requirements Changes
*   **Purpose:** To evaluate the implications of proposed changes to requirements and designs (Impact Analysis).
*   **Inputs:** Proposed Change, Requirements (prioritized/traced), Designs.
*   **Governance Hook:** ⚠️ **MANDATORY:** You MUST load and reference `references/templates/ka03/governance-approach.md` to map the change process and authority levels correctly.
*   **Outputs:** 
    *   **Requirements Change Assessment / Designs Change Assessment** → Use `references/templates/ka05/requirements-change-assessment.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* The BA evaluates Benefit, Cost, Impact, Schedule, and Urgency. 
    *   *Exam Trap:* The BA performs the Impact Analysis but does NOT blindly approve the change. Approval is routed to the designated authority via Task 3.3 (Governance Approach).

---

#### Task 5.5: Approve Requirements
*   **Purpose:** To obtain agreement on and approval of requirements and designs for business analysis work to continue and/or solution construction to proceed.
*   **Inputs:** Requirements (verified), Designs.
*   **Outputs & Trigger Rules (C-Level split):**
    *   **Output A: Requirements Sign-off Memo** → Use `references/templates/ka05/requirements-approval-package.md`
    *   **Output B: Executive Pitch Deck (PPTX)** ➔ Use `references/templates/ka05/executive-pitch-deck.md`
    *   **🤖 AI AGENT TRIGGER RULE:** 
        *   If the user requests to present to the Board of Directors (BoD), C-Level Executives, or Key Sponsors ➔ **You MUST generate BOTH Output A and Output B.**
        *   If the request is for standard internal team approval / operational sign-off ➔ **Generate only Output A.**
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Gaining consensus and formal sign-off.
    *   *Exam Trap:* The mandatory input is Requirements *(verified)*. You cannot approve stated or unverified requirements. 
    *   *Action:* Once the Approval Package/Pitch Deck is signed, the AI Agent MUST update the `Req Status` column of the RTM (Tasks 5.1/5.2) for the affected requirements to `Approved` or `Baselined`.
