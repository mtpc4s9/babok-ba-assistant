---
description: Template for generating the Governance Approach defining how decisions are made about requirements and designs, including reviews, change control, approvals, and prioritization (BABOK Task 3.3).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity (BA Focus):** This document strictly defines the governance of *business analysis information* (requirements, designs, and BA processes). Do not generate a generic project governance plan (which belongs to the Project Manager), though the BA governance must align with it.
> - **Change Control Rigor:** Pay special attention to the Change Control Process. You MUST define how a change is requested, who assesses its impact (cost, time, value, risk), and who has the ultimate authority to approve or reject it.
> - **Escalation Path:** For decision-making, you MUST define an escalation path for instances where stakeholders cannot reach a consensus.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If the `Business Analysis Approach` (Task 3.1) and `Stakeholder Engagement Approach` (Task 3.2) are unknown, HALT execution. The level of governance formality (Predictive = strict change control; Adaptive = flexible backlog prioritization) depends entirely on Task 3.1, and the approvers depend entirely on Task 3.2.

# BUSINESS ANALYSIS GOVERNANCE APPROACH

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Business Analysis Approach (Task 3.1) -> Crucial for determining the formality and rigour of the governance process.
*   [ ] **[Primary Input]** Stakeholder Engagement Approach (Task 3.2) -> Crucial for identifying decision-makers, reviewers, and approvers.

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Decision Making** | Stakeholder roles and authority levels | Stakeholder Engagement Approach | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Change Control Process** | Process formality, regulatory policies | BA Approach / Business Policies | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Prioritization** | Timeline, expected value, dependencies | BA Approach / Needs | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 4: Approvals** | Stakeholder availability, organizational culture | Stakeholder Engagement Approach | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 1. Decision Making and Escalation
> **🤖 AI AGENT INSTRUCTION:** Define the decision-making framework. Identify who serves as participants, SMEs, reviewers, and approvers. Crucially, define the escalation path for resolving conflicts when consensus cannot be reached.

*   **Decision-Making Framework:** [INSERT: Narrative | e.g., "Decisions regarding business rules will be made by consensus among Domain SMEs. Technical constraint decisions will be deferred to the Implementation SME."]
*   **Conflict Resolution & Escalation Path:** [INSERT: Escalation Path | e.g., "If Domain SMEs cannot reach consensus on a requirement within 3 days, the decision is escalated to the Project Sponsor for final binding authority."]

## 2. Change Control Process
> **🤖 AI AGENT INSTRUCTION:** Detail the exact process for managing proposed changes to baselined requirements and designs. Ensure all BABOK specific elements of a change request are addressed.

*   **Change Request Initiation:** [INSERT: Narrative | How and when changes can be proposed, and by whom. e.g., "Any stakeholder can propose a change via the Jira Change Request portal once the BRD is baselined."]
*   **Elements of a Change Request:** *Every formal change request must include the following impact assessments:*
    *   **Cost and Time Estimates:** Expected impact on the project schedule and budget.
    *   **Benefits:** Financial and tactical value added by the change.
    *   **Risks:** Analysis of risks to the solution scope or business objectives.
    *   **Priority:** Importance of the change relative to other competing interests.
    *   **Course(s) of Action:** Alternative options, including the recommender's choice.
*   **Impact Analysis Responsibility:** [INSERT: Role | e.g., "The Business Analyst, in collaboration with the Implementation SME, is responsible for performing the impact analysis."]
*   **Change Authorization (Change Control Board - CCB):** [INSERT: Authority | e.g., "Changes impacting scope/budget by >10% must be authorized by the Sponsor. Minor changes are authorized by the Product Owner."]
*   **Communication & Documentation:** [INSERT: Narrative | How changes are version-controlled and communicated to stakeholders.]

## 3. Prioritization Approach
> **🤖 AI AGENT INSTRUCTION:** Define how requirements and designs will be prioritized. Specify the criteria (e.g., Cost, Risk, Value, Penalty, Dependencies, Time Sensitivity) and the stakeholders involved.

*   **Prioritization Criteria:** [INSERT: Criteria | e.g., "Requirements will be prioritized based on Business Value (Weighted 50%), Regulatory Penalty (Weighted 30%), and Implementation Complexity (Weighted 20%)."]
*   **Prioritization Process:** [INSERT: Narrative | e.g., "A formal MoSCoW prioritization workshop will be held at the beginning of each phase with the Customer and Sponsor."]
*   **Key Participants:** [INSERT: Roles | e.g., "Sponsor, Customer, and Product Owner."]

## 4. Plan for Approvals
> **🤖 AI AGENT INSTRUCTION:** Define the formalization of agreement. Specify what needs approval, the timing/frequency of approvals, and who has the authority to sign off.

*   **Approval Timing and Frequency:** [INSERT: Narrative | e.g., "Approvals are required at the end of the Elicitation Phase (for the BRD) and at the end of the Design Phase (for the SRS)."]
*   **Approval Method:** [INSERT: Narrative | e.g., "Formal electronic sign-off via DocuSign is mandatory due to strict regulatory compliance standards."]
*   **Approval Authorities:**
    *   *Business Requirements:* [INSERT: Role | e.g., Sponsor]
    *   *Solution Requirements / Designs:* [INSERT: Role | e.g., Product Owner & Implementation SME]