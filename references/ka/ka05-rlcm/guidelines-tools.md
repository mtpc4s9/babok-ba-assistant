#### description: Pre-flight checklist for KA05 Requirements Life Cycle Management detailing required Guidelines (boundaries/direction) and Tools (prerequisite data) for Tasks 5.1-5.5.

### KA05: Requirements Life Cycle Management - Guidelines & Tools

**🤖 AI AGENT INSTRUCTION (PRE-FLIGHT CHECKLIST):** You MUST execute this checklist before generating any artifact for KA05.
*   **Guidelines** provide instructions or descriptions on *why* or *how* to undertake a task.
*   **Tools** are objects or data *used* to perform the task. 
Check for the presence of these elements. If a critical guideline/tool is missing, HALT execution, flag the **Missing Risk**, and ask the user for the missing context.

---

#### Tasks 5.1, 5.2, and 5.3: Unified Matrix Generation (Trace, Maintain, Prioritize)
**🤖 AI AGENT INSTRUCTION:** Because these tasks are executed concurrently to generate the BRM, FRM, NFRM, or RTM, you must ensure the following global guidelines are available.

*   **Guidelines (How/Why):**
    *   **Information Management Approach** (Output 3.4): Dictates the traceability approach and how requirements will be managed for reuse.
    *   **Governance Approach** (Output 3.3): Outlines the exact methodology for prioritizing requirements (e.g., MoSCoW, Timeboxing).
    *   **Business Constraints** (External): Regulatory or business policies that may force a requirement to be "High Priority".
*   **Tools (What to Use):**
    *   **Solution Scope** (Output 6.4): Used to ensure the requirements being traced and prioritized actually fall within the approved boundaries.
    *   **Domain Knowledge** (Expertise): Required to understand dependencies (Necessity vs. Effort).
*   **⚠️ Missing Guideline Risk:** If the **Governance Approach** is missing, you MUST NOT arbitrarily assign "High/Medium/Low" priorities. Ask the user: *"What is our defined basis for prioritization (Value, Risk, Cost, or Compliance)?"*

---

#### Task 5.4: Assess Requirements Changes
*   **Guidelines (How/Why):**
    *   **Governance Approach** (Output 3.3): Provides guidance on the change control process and who holds the authority to approve/reject.
    *   **Change Strategy** (Output 6.4): Establishes the context for the change, used to evaluate if the proposed change adds value to the ultimate goal.
*   **Tools (What to Use):**
    *   **Solution Scope** (Output 6.4): Used to determine if the proposed change is an enhancement or a scope creep.
    *   **Requirements Architecture** (Output 7.4): Used to perform the "Ripple Effect" impact analysis to see which other requirements are related.
*   **⚠️ Missing Guideline Risk (CRITICAL):** If the **Requirements Architecture** or the **RTM** is not loaded, you cannot perform a valid Impact Analysis. HALT and request the user to provide the traceability links to assess the full cost of the change.

---

#### Task 5.5: Approve Requirements
*   **Guidelines (How/Why):**
    *   **Governance Approach** (Output 3.3): Identifies the exact stakeholders who have the authority and responsibility to approve business analysis information (requires `references/templates/ka03/governance-approach.md`).
    *   **Legal/Regulatory Information** (External): Dictates if specific compliance sign-offs are required (e.g., SOX, HIPAA auditor signatures).
*   **Tools (What to Use):**
    *   **Solution Scope** (Output 6.4): Must be considered when approving to accurately assess alignment and completeness (requires `references/templates/ka06/solution-scope.md`).
    *   **Business Case Financials & Value Analysis** (KA06): Mandatory for Pitch Deck creation (requires `references/templates/ka06/potential-value.md`).
    *   **Business Case Risk Assessment** (KA06): Mandatory for Pitch Deck creation (requires `references/templates/ka06/risk-analysis-results.md`).
    *   **Requirement Management Tools/Repository**: The tool used to record the final approval status (e.g., our RTM matrices).
*   **⚠️ Missing Guideline Risk:** If the **Governance Approach** is missing, the AI Agent MUST NOT authorize the approval itself. State clearly: *"Pending formal sign-off from the authorized sponsor as defined in the Governance Plan."*
*   **🛑 CRITICAL HALT RULE (PITCH DECK ONLY):** If the user requests a BoD or C-level Pitch Deck, and either `references/templates/ka06/potential-value.md` or `references/templates/ka06/risk-analysis-results.md` is NOT found in the workspace, you **MUST HALT IMMEDIATELY** and request the missing inputs. Do **NOT** hallucinate financial metrics (ROI, costs, benefits) or project risks. Flag it as a high-priority advisory risk.
