---
description: Template for generating the Business Analysis Performance Assessment comparing planned versus actual BA performance, identifying root causes of variances, and proposing actions for improvement (BABOK Task 3.5).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES & ANTI-HALLUCINATION)
> - **Domain Integrity (BA Process Focus):** This document strictly evaluates the performance of the *Business Analysis process* itself (e.g., quality of requirements, elicitation efficiency), NOT the performance of the delivered software/solution (which belongs to KA08: Solution Evaluation).
> - **⚠️ MANDATORY ELICITATION INTERVIEW (NO HALLUCINATION):** You CANNOT generate this document without actual historical data and external performance objectives. If the user requests this document without providing specific performance data, you MUST HALT execution and initiate an Elicitation Interview.
>   *Ask the user:* "To generate an accurate BA Performance Assessment, please provide insights on the following:
>   1. What were the original BA performance objectives or KPIs?
>   2. What specific feedback did stakeholders provide regarding the *Accuracy, Timeliness, or Effectiveness* of your BA deliverables?
>   3. Were there any organizational bottlenecks (e.g., lack of SME availability)?"
>   *(Do not proceed until the user answers).*
> - **BABOK Alignment:**
>   - In Section 2, evaluate metrics against the strict BABOK criteria defined in 3.5.4.2.
>   - In Section 4, categorize every recommended action exactly as Preventive, Corrective, or Improvement (BABOK 3.5.4.4).

# BUSINESS ANALYSIS PERFORMANCE ASSESSMENT

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Business Analysis Approach (Task 3.1) -> Crucial for comparing *Planned* vs. *Actual* activities and deliverables.
*   [ ] **[External Input]** Performance Objectives -> Crucial for establishing the baseline targets set by the enterprise or Center of Excellence (CoE).

---

## 1. Performance Analysis Overview
> **🤖 AI AGENT INSTRUCTION:** Provide a brief narrative summarizing the context of this assessment. How did the actual BA execution compare generally to the `Business Analysis Approach` defined at the start of the project?

*   **Assessment Context:** [INSERT: Narrative | e.g., "This assessment evaluates the BA processes executed during Phase 1 of the ERP rollout, comparing actual effort against the Predictive approach outlined in the BA Plan."]
*   **Overall Satisfaction:** [INSERT: Narrative | Summary of informal or formal stakeholder feedback regarding the BA's performance.]

## 2. Assessment Measures (BABOK 3.5.4.2)
> **🤖 AI AGENT INSTRUCTION:** Evaluate the elicited performance data against the standard BABOK measurement categories. Replace [INSERT] with quantified data or qualitative stakeholder feedback. If a category was not measured, mark it as "Not Assessed".

| BABOK Measurement Category | Target / Objective | Actual Performance / Stakeholder Feedback | Variance & Root Cause |
| :--- | :--- | :--- | :--- |
| **Accuracy and Completeness** *(Were work products correct and relevant, or was rework needed?)* | [INSERT: e.g., < 5% defect rate in requirements] | [INSERT: e.g., 12% defect rate identified during UAT] | [INSERT: Root cause, e.g., "Missed edge cases due to lack of access to Operational Support SMEs."] |
| **Timeliness** *(Were deliverables provided on schedule?)* | [INSERT: e.g., BRD signed off by end of Sprint 2] | [INSERT: e.g., Signed off 1 week late] | [INSERT: Root cause, e.g., "Sponsor unavailable for sign-off."] |
| **Effectiveness** *(Were work products easy to use as standalone deliverables?)* | [INSERT: Expected standard] | [INSERT: Actual feedback] | [INSERT: Variance explanation] |
| **Organizational Support** *(Were adequate resources/tools available?)* | [INSERT: Expected standard] | [INSERT: Actual feedback] | [INSERT: Variance explanation] |
| **Knowledge** *(Did the BA possess the necessary domain/technical skills?)* | [INSERT: Expected standard] | [INSERT: Actual feedback] | [INSERT: Variance explanation] |
| **Significance & Strategic** *(Did the BA effort justify the cost/time invested?)* | [INSERT: Expected standard] | [INSERT: Actual feedback] | [INSERT: Variance explanation] |

## 3. Analysis of Results
> **🤖 AI AGENT INSTRUCTION:** Synthesize the variances identified above. Determine if the deviations from the plan were due to the BA process itself, the resources involved, or the tools utilized.

*   **Key Successes:** [INSERT: List of BA activities that exceeded expectations or provided exceptional value.]
*   **Critical Process Gaps:** [INSERT: List of areas where the BA process failed to meet organizational standards or stakeholder needs.]

## 4. Recommended Actions for Improvement (BABOK 3.5.4.4)
> **🤖 AI AGENT INSTRUCTION:** Based on the gaps identified, recommend specific actions. You MUST categorize each action into one of the three BABOK classifications: Preventive, Corrective, or Improvement.

| Action ID | Action Category | Recommended Action & Implementation Plan | Target Beneficiary |
| :---: | :---: | :--- | :--- |
| [INSERT: ACT-01] | **Preventive** *(Reduces probability of a negative event)* | [INSERT: e.g., "Establish a formal SME backup protocol in the Stakeholder Engagement Approach to prevent delays when primary SMEs are unavailable."] | [INSERT: e.g., Project Manager & BA Team] |
| [INSERT: ACT-02] | **Corrective** *(Reduces negative impact of an event)* | [INSERT: e.g., "Conduct a mandatory training session on the new BPMN modeling tool for all junior BAs to reduce syntax errors in future models."] | [INSERT: e.g., BA Center of Excellence] |
| [INSERT: ACT-03] | **Improvement** *(Increases probability of a positive event)* | [INSERT: e.g., "Adopt a shared Jira dashboard for real-time requirement tracking, increasing the visibility of BA progress for the Sponsor."] | [INSERT: e.g., Executive Sponsor] |