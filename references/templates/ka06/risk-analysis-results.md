---
description: Template for generating the Risk Analysis Results documenting the uncertainties, potential impacts to value, and recommended treatment strategies associated with transitioning to or operating in the future state (BABOK Task 6.3).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity:** Must strictly adhere to IIBA BABOK V3 standard definitions and professional enterprise terminology. Risk is defined as the effect of uncertainty on the value of a change.
> - **Value Impact Focus:** Express all risks as specific conditions or events that threaten to degrade or eliminate the Potential Value of the change. Do not simply list system bugs; focus on enterprise-level risks (e.g., adoption failures, operational disruptions, financial shortfalls).
> - **Standardized Treatment:** Every analyzed risk MUST be assigned one of the five BABOK standard treatment strategies:
>   1. **Avoid:** Eliminate the condition or source of the risk.
>   2. **Transfer:** Shift ownership of the risk to a third party (e.g., insurance, outsourcing).
>   3. **Mitigate:** Reduce the probability and/or impact of the risk event.
>   4. **Accept:** Do nothing to address the risk; bear the consequences if it occurs.
>   5. **Increase:** Take on more risk in pursuit of higher opportunity/benefits.
> - **Input Validation:** Scan the Input Traceability Map before processing. If any mandatory input is missing, ambiguous, or conflict-prone, you MUST NOT proceed with generation.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If required inputs are unavailable or unclear in the user's context (e.g., missing business constraints, undefined technical architectures, or unquantified business objectives), you MUST immediately halt generation, pivot to advisory/inquiry mode, and request the User to provide the missing facts or clarify ambiguity. Never hallucinate, assume, or guess business reality.

# RISK ANALYSIS RESULTS

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project | Project Charter or Kickoff Metadata]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD format of generation | Current Session Metadata]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** `Business Objectives` (Task 6.2) -> Crucial for Section 1, 3
*   [ ] **[Primary Input]** `Future State Description` (Task 6.2) -> Crucial for Section 2, 3
*   [ ] **[Primary Input]** `Current State Description` (Task 6.1) -> Crucial for Section 1, 2, 3
*   [ ] **[Primary Input]** `Elicitation Results (confirmed)` (Task 4.4) -> Crucial for Section 1, 4

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Enterprise Risk Context & Tolerance** | Sponsor risk preferences, business policies regarding risk, corporate culture notes | `Elicitation Results (confirmed)` / `Current State Description` (Section 1) | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Constraints, Assumptions & Dependencies (CAD) Risks** | Pre-defined future state assumptions, strict business constraints, system dependencies | `Future State Description` (Section 5) / `Business Requirements` (Section 3) | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Risk Assessment Register** | Key operational changes, system integrations, operational baselines, and objectives | `Current State Description` / `Future State Description` / `Business Objectives` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 4: Recommended Risk Treatments** | Prioritized risks from register, vendor capabilities, mitigation resource options | `Elicitation Results (confirmed)` / Section 3 of this document | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 5: Strategic Recommendation** | Risk appetite limits, net potential value calculations, and overall corporate directives | `Business Objectives` / `Potential Value` / Section 1 of this document | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 1. Enterprise Risk Context & Tolerance
> **🤖 AI AGENT INSTRUCTION:** Define the overall level of uncertainty the enterprise is willing to accept for this initiative. Identify if the sponsor/organization is Risk-Averse, Risk-Neutral, or Risk-Seeking, and justify this based on Business Policies or corporate culture.

*   **Risk Tolerance Level:** [INSERT: Risk Attitude Narrative | Characterization of the organization's risk tolerance (e.g., Risk-Averse due to strict HIPAA regulations and prior security breach histories) | Current State Description (Section 1 - Culture / Section 4 - Policies)]
*   **Significant Unknowns:** [INSERT: Unknowns List | Narrative detailing major elements where the likelihood or impact of events cannot currently be determined (e.g., "Uncertainty regarding external partner API stabilization timelines") | Elicitation Results (confirmed) - Technical workshops]

## 2. Constraints, Assumptions, and Dependencies (CAD) Risks
> **🤖 AI AGENT INSTRUCTION:** Analyze the previously documented Constraints, Assumptions, and Dependencies. Restate them as formal risks by defining the specific event and consequences that will occur if an assumption proves false, a constraint is violated, or a dependency fails.

*   **CAD Risk 1 (Assumption Failure):** [INSERT: Risk Description | e.g., "If [Assumption: Core system API response times remain under 1 second] is false, then [Consequence: Checkout checkout workflows will fail, resulting in lost digital transactions]"] | Future State Description (Section 5)]
*   **CAD Risk 2 (Constraint Violation):** [INSERT: Risk Description | e.g., "If [Constraint: The solution must launch before the Black Friday sales freeze on Nov 1] is violated, then [Consequence: The initiative faces a 3-month launch delay, losing $200K in projected peak revenue]"] | Business Requirements (Section 3)]

## 3. Risk Assessment Register
> **🤖 AI AGENT INSTRUCTION:** Evaluate the key operational and technical risks of the initiative. Estimate the Probability (Low/Medium/High) and Impact to Value (Low/Medium/High) to calculate the Overall Risk Level.

| Risk ID | Risk Event or Condition | Consequence (Negative Impact to Value) | Probability | Impact | Overall Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RSK-01** | [INSERT: Risk Event | e.g., If business staff fail to adopt the new automated CRM workflow... | [INSERT: Low/Med/High] | [INSERT: Low/Med/High] | **[INSERT: Low/Med/High]** |
| **RSK-02** | [INSERT: Risk Event | e.g., If legacy customer records cannot be successfully cleansed during migration... | [INSERT: Low/Med/High] | [INSERT: Low/Med/High] | **[INSERT: Low/Med/High]** |

## 4. Recommended Risk Treatments
> **🤖 AI AGENT INSTRUCTION:** For all prioritized High and Medium risks identified in the register above, recommend a formal BABOK risk treatment strategy (Avoid, Transfer, Mitigate, Accept, Increase) and outline the action plan.

*   **RSK-01 Treatment:** [INSERT: Strategy Selection | Choose: Avoid | Transfer | Mitigate | Accept | Increase | Register ID: RSK-01]
    *   **Action Plan:** [INSERT: Treatment Action | Specific steps to execute the strategy (e.g., "Mitigate: Establish a mandatory Change Management and training program with weekly checkpoints to ensure staff adoption") | Elicitation Results (confirmed) - Change Management Plan]
    *   **Residual Risk:** [INSERT: Residual Level | Risk level remaining after mitigation (Low/Medium/High) | Risk Workshop Estimates]
*   **RSK-02 Treatment:** [INSERT: Strategy Selection | Choose: Avoid | Transfer | Mitigate | Accept | Increase | Register ID: RSK-02]
    *   **Action Plan:** [INSERT: Treatment Action | Specific steps to execute the strategy (e.g., "Avoid: Run a data scrubbing phase 2 months prior to actual migration, deleting duplicate accounts") | Elicitation Results (confirmed) - IT Data Strategy]
    *   **Residual Risk:** [INSERT: Residual Level | Risk level remaining | Risk Workshop Estimates]

## 5. Strategic Recommendation
> **🤖 AI AGENT INSTRUCTION:** Provide a definitive strategic recommendation to the Sponsor based on the aggregated Risk Register and the Enterprise Risk Tolerance.

*   **Overall Risk Conclusion:** [INSERT: Strategic Conclusion | Choose and justify one:
    1. Pursue the benefits of the change regardless of risk.
    2. Pursue the benefits of the change while investing in reducing risk (Recommended).
    3. Seek out ways to increase the benefits of a change to outweigh the risk.
    4. Do not pursue the benefits of a change (Do Nothing) due to risk level exceeding tolerance limits. | Elicitation Results (confirmed) / Risk Analysis Synthesis]