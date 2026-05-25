#### description: Evaluates the implications of proposed changes to both requirements and designs, performing impact analysis and routing the recommendation according to the established Governance Approach (BABOK Task 5.4 & 3.3).

### KA05: Requirements and Designs Change Assessment

**🤖 AI AGENT INSTRUCTION (CHANGE ASSESSMENT & GOVERNANCE ROUTING):**
1. **Scope of Assessment:** Treat "Requirements" and "Designs" uniformly in this assessment (BABOK 2.5). A change to a screen mock-up (Design) requires the exact same rigor as a change to a business rule (Requirement).
2. **Governance Synchronization (Task 3.3 Linkage):** You MUST load `ka03/governance-approach.md`. You MUST NOT hallucinate the decision-making process. Identify the exact Change Authority / Change Control Board (CCB) designated for this specific type/size of change.
3. **Traceability Lookup (Zero-Hallucination):** Cross-reference the `requirement-traceability-matrix.md` (RTM) to identify all backward and forward dependencies affected by this change.
4. **Advisory Elicitation:** If the user proposes a change but lacks cost, schedule, or benefit data, HALT and ask: *"To conduct a valid Impact Analysis aligned with our Governance Approach, please provide the estimated Cost/Effort, Schedule impact, and expected Business Benefit."*

---

# REQUIREMENTS AND DESIGNS CHANGE ASSESSMENT
**Initiative/Project:** [INSERT: Project Name]
**Date of Assessment:** [INSERT: ISO Date]
**Requested By:** [INSERT: Stakeholder Role / Source of Change]

## 1. Proposed Change Overview
*   **Target Artifact ID:** [INSERT: e.g., FR-04.17 or Design-UI-02]
*   **Artifact Type:** [SELECT: Business Requirement / Functional Req / Non-Functional Req / Design Component]
*   **Description of Proposed Change:** [INSERT: Clear statement of what is being added, modified, or removed from the approved baseline.]
*   **Trigger / Reason for Change:** [INSERT: e.g., Regulatory update, technical constraint, or stakeholder feedback.]

## 2. Traceability & Scope Impact (The Ripple Effect)
*Utilizes the RTM to identify all business analysis artifacts affected by this change.*
*   **Impacted Upstream Goals (Backward Trace):** [INSERT: BR IDs affected. Note if this change violates or dilutes an existing business objective.]
*   **Impacted Downstream Artifacts (Forward Trace):** [INSERT: System Use Cases, dependent FRs/NFRs, and Design mock-ups requiring rework.]
*   **Impacted Test Cases (Validation):** [INSERT: Test Cases requiring modification or re-execution.]

## 3. Impact Analysis (BABOK Criteria)
**🤖 AI AGENT INSTRUCTION:** Populate this matrix objectively. Ensure opportunity costs are explicitly stated in the Cost section.

| Impact Factor | Assessment / Evaluation Details |
| :--- | :--- |
| **Benefit** | [INSERT: The tangible or intangible value gained by accepting the change (e.g., increased revenue, compliance met).] |
| **Cost** | [INSERT: Total cost to implement, including rework and **opportunity costs** (e.g., "Feature X must be deferred").] |
| **Impact** | [INSERT: Number of customers, stakeholders, or business processes affected if accepted.] |
| **Schedule** | [INSERT: Effect on existing delivery commitments (e.g., "Will extend Sprint 3 by 4 days").] |
| **Urgency** | [INSERT: Time sensitivity driving necessity (e.g., "Must deploy before January 1st to meet new tax laws").] |

## 4. Governance Routing & Recommendation (Task 3.3 Alignment)
**🤖 AI AGENT INSTRUCTION:** Based on `governance-approach.md`, identify who has the authority to make the final decision for this specific impact level.

*   **Designated Change Authority:** [INSERT: Specific Role or Committee defined in the Governance Approach, e.g., "IT Steering Committee" or "Project Sponsor"]
*   **Recommended Action:** [SELECT: APPROVE / DENY / DEFER / MODIFY]
*   **Justification:** [INSERT: Concise rationale comparing Benefit vs. Cost/Schedule/Risk.]
*   **Next Steps:** Proceed to **Task 5.5 (Approve Requirements)** to present this assessment to the [INSERT: Designated Change Authority] for the final decision.
