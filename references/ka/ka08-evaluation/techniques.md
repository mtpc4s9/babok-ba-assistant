---
description: Technique usage mapping for KA08 Solution Evaluation (Tasks 8.1-8.5) categorized by Primary and Secondary application, with embedded Elicitation Playbook routing.
---

# KA08: Solution Evaluation - Techniques

> **🤖 AI AGENT INSTRUCTION (3-TIER HYBRID LOOKUP & PLAYBOOK HOOK):**
> *   **Primary & Common Secondary:** Use the "Used to..." text to explain WHY a technique fits the evaluation context.
> *   **Quantitative Diagnostics:** For heavy data-centric techniques like *Data Mining* or *Financial Analysis*, strictly utilize the raw data provided by the user. Do NOT hallucinate financial returns or error rates.
> *   **Qualitative Playbook Hook:** If applying *Focus Groups*, *Interviews*, or *Survey or Questionnaire*, you MUST halt generation and trigger the `references/advisor/elicitation-interview-playbook.md` (Domain A or C) to collect real user sentiment. Do not invent organizational culture or user satisfaction scores.

---

## Task 8.1: Measure Solution Performance
> **🤖 AI AGENT INSTRUCTION:** Focuses on defining metrics and collecting raw quantitative/qualitative data.

*   **Primary:**
    *   **Metrics and Key Performance Indicators (KPIs) (10.28):** Used to measure solution performance and align with enterprise goals.
    *   **Data Mining (10.14):** Used to collect and analyze large amounts of data regarding solution performance directly from the implemented system.
    *   **Acceptance and Evaluation Criteria (10.1):** Used to define what constitutes "acceptable" solution performance.
*   **Common Secondary:**
    *   **Observation (10.31):** Used to physically witness the solution in action to collect performance data when system logs are insufficient.
    *   **Survey or Questionnaire (10.45) / Focus Groups (10.21):** Used to gather qualitative opinions, attitudes, and subjective impressions about solution performance.
*   **Other Secondary:** Benchmarking and Market Analysis, Business Cases, Decision Analysis, Non-Functional Requirements Analysis, Prototyping, Use Cases and Scenarios, Vendor Assessment.

---

## Task 8.2: Analyze Performance Measures
> **🤖 AI AGENT INSTRUCTION:** Focuses on interpreting data to calculate variances, spot trends, and identify new risks.

*   **Primary:**
    *   **Metrics and Key Performance Indicators (KPIs) (10.28):** Used to analyze performance against the targeted goals to calculate the variance.
    *   **Root Cause Analysis (10.40):** Used to determine the underlying cause of a performance variance (Why did actuals miss the target?).
    *   **Risk Analysis and Management (10.38):** Used to identify and manage newly discovered risks resulting from poor solution performance.
*   **Common Secondary:**
    *   **Data Mining (10.14):** Used to understand patterns, trends, and meaning in the collected variance data.
    *   **Benchmarking and Market Analysis (10.4):** Used to observe the results of other organizations employing similar solutions to contextualize the variance.
*   **Other Secondary:** Acceptance and Evaluation Criteria, Interviews, Observation, Survey or Questionnaire.

---

## Task 8.3: Assess Solution Limitations
> **🤖 AI AGENT INSTRUCTION:** Focuses on identifying internal system defects, bugs, and hardware constraints.

*   **Primary:**
    *   **Root Cause Analysis (10.40):** Used to identify the combination of internal technical factors and defects that led to the solution's inability to deliver value.
    *   **Item Tracking (10.26):** Used to record, track, and manage bugs and defects preventing the solution from meeting potential value.
    *   **Business Rules Analysis (10.9):** Used to identify if hardcoded operational rules within the system are the bottleneck causing the limitation.
*   **Common Secondary:**
    *   **Decision Analysis (10.16):** Used to decide whether to Resolve, Mitigate, or Accept the internal limitation.
    *   **Risk Analysis and Management (10.38):** Used to manage risks related to the solution's technical constraints.
*   **Other Secondary:** Acceptance and Evaluation Criteria, Benchmarking and Market Analysis, Data Mining, Interviews, Lessons Learned, Survey or Questionnaire.

---

## Task 8.4: Assess Enterprise Limitations
> **🤖 AI AGENT INSTRUCTION:** Focuses on identifying external barriers such as culture, organizational structure, and operational readiness.

*   **Primary:**
    *   **Organizational Modelling (10.32):** Used to identify if changes to the formal or informal reporting structure are needed to remove the enterprise limitation.
    *   **Process Analysis (10.34) / Process Modelling (10.35):** Used to illustrate the current business processes and identify operational inefficiencies causing the limitation.
    *   **Roles and Permissions Matrix (10.39):** Used to determine if stakeholder security accesses and role restrictions are impeding value realization.
*   **Common Secondary:**
    *   **SWOT Analysis (10.46):** Used to assess how the enterprise's internal weaknesses are compounding the solution's limitations.
    *   **Document Analysis (10.18):** Used to gain an understanding of the culture, operations, and structure of the organization.
*   **Other Secondary:** Benchmarking and Market Analysis, Brainstorming, Data Mining, Decision Analysis, Interviews, Item Tracking, Lessons Learned, Observation, Risk Analysis and Management, Root Cause Analysis, Survey or Questionnaire, Workshops.

---

## Task 8.5: Recommend Actions to Increase Solution Value
> **🤖 AI AGENT INSTRUCTION:** Focuses on determining the most appropriate course of action (e.g., Do Nothing, Retire, Organizational Change).

*   **Primary:**
    *   **Decision Analysis (10.16):** Used to determine the impact of acting on any of the potential value issues and choose between the 7 BABOK recommendation categories.
    *   **Financial Analysis (10.20):** Used to assess the future costs, opportunity costs, and financial benefits of a proposed change (strictly ignoring Sunk Costs).
    *   **Prioritization (10.33):** Used to identify the relative value of different actions to improve solution performance.
*   **Common Secondary:**
    *   **Risk Analysis and Management (10.38):** Used to evaluate the different outcomes and risks under specific recommended actions.
    *   **Organizational Modelling (10.32):** Used to demonstrate the potential change within the organization's structure if "Organizational Change" is recommended.
*   **Other Secondary:** Data Mining, Focus Groups, Process Analysis, Survey or Questionnaire.2].
