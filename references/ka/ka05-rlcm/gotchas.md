#### description: Critical traps and common CBAP misconceptions for KA05 Requirements Life Cycle Management (Tasks 5.1-5.5) to be flagged during execution.
### KA05: Requirements Life Cycle Management - Gotchas & Traps

**🤖 AI AGENT INSTRUCTION (TRAP DETECTION & FORMATTING):** Use this file to detect user misconceptions during requirements management. When a user's scenario triggers one of these 7 gotchas, you MUST inject the relevant warning into the `⚠️ CBAP Gotcha:` field of your standard response. 
*Note:* Tasks 5.1, 5.2, and 5.3 are executed concurrently via Unified Matrices (BRM, FRM, NFRM, RTM). Do not allow the user to generate separate narrative documents for them.

---

#### Top 7 Requirements Life Cycle Traps

##### 1. The "Sequential Execution" Trap (Tasks 5.1, 5.2, 5.3)
*   **The Trap:** Believing that Traceability, Maintenance, and Prioritization must be done one after the other in separate documents.
*   **BABOK Standard:** These tasks are performed *concurrently* and *continuously*. 
*   **Agent Action:** Force the use of the Unified Matrices (e.g., `requirement-traceability-matrix.md`) to capture relationships, reuse status, and priority simultaneously.

##### 2. The "Priority vs. Dependency Conflict" Trap (Tasks 5.1 & 5.3)
*   **The Trap:** Assigning a `High` priority to a Solution Requirement, while the Business Requirement it *Derives* from is marked as `Low`.
*   **BABOK Standard:** Dependencies (Task 5.1) directly dictate Priorities (Task 5.3). You cannot build a dependent component before its prerequisite.
*   **Agent Action:** Cross-check the RTM. If Priority conflicts with the *Depends / Derive* relationships, flag it as a logical error.

##### 3. The "Maintenance means Version Control" Trap (Task 5.2)
*   **The Trap:** Thinking that "Maintaining Requirements" simply means keeping the document updated with the latest edits.
*   **BABOK Standard:** Maintain Requirements is strictly about retaining accuracy AND ensuring the requirement is structured for **Long-term Organizational Reuse** beyond the current project.

##### 4. The "BA as the Decider" Trap (Task 5.4)
*   **The Trap:** The user asks the BA (or AI Agent) to Approve or Reject a change request because "it costs too much" or "is out of scope."
*   **BABOK Standard:** The BA *performs* the Impact Analysis (assessing Benefit, Cost, Impact, Schedule, Urgency), but the BA *MUST NOT* approve it. Only the Change Authority defined in the Governance Approach (Task 3.3) can make the decision.

##### 5. The "Complete Consensus" Myth (Task 5.5)
*   **The Trap:** Delaying approval because one stakeholder group disagrees with the design.
*   **BABOK Standard:** Complete agreement is NOT necessary for a successful change. If consensus cannot be reached, the conflicts are documented as *Risks*, and the Sponsor/Authority can still sign off to proceed.

##### 6. The "Unverified Approval" Trap (Task 5.5)
*   **The Trap:** Submitting raw, stated elicitation results directly to the Sponsor for sign-off.
*   **BABOK Standard:** You can only approve **Requirements (verified)**. Requirements must meet quality characteristics (Atomic, Complete, Concise, Feasible, Unambiguous, Testable) before entering Task 5.5.

##### 7. The "Missing Opportunity Cost" Trap (Task 5.4)
*   **The Trap:** Assessing a change request by only looking at the development cost of the new feature.
*   **BABOK Standard:** Impact Analysis must always include **Opportunity Costs** (what features or benefits must be sacrificed/deferred in order to implement this change).
