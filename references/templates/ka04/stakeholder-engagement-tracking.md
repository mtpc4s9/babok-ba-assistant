---
description: Template for generating the Stakeholder Engagement tracking log to monitor stakeholders' willingness to participate, record agreed-upon commitments, and track actual collaboration performance (BABOK Task 4.5).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES & ANTI-HALLUCINATION)
> - **Domain Integrity (Real-world Monitoring):** This artifact tracks the *actual* willingness and participation of stakeholders. It is an ongoing assessment of their performance against the `Stakeholder Engagement Approach` (Task 3.2).
> - **⚠️ MANDATORY ELICITATION INTERVIEW (NO HALLUCINATION):** You **CANNOT** generate this document blindly. Because you (the AI) cannot physically observe stakeholder behavior or negotiate commitments in the real world, you **MUST** prompt the User for the raw data.
>   *If the user requests this output without providing status data, **HALT execution** and ask:*
>   *"To accurately track Stakeholder Engagement, I need your real-world observations. Please provide: 
>   1) Which stakeholders have agreed to their time/resource commitments? 
>   2) Have you noticed any drop in participation or negative shifts in attitude recently? 
>   3) Are there any outstanding stakeholder conflicts that need addressing?"*
>   *(Do not proceed with document generation until the user answers these questions).*
> - **Commitment Focus (BABOK 4.5.4.1):** In Section 1, focus strictly on whether the stakeholders have agreed to the *time and resource commitments* required for upcoming BA activities (e.g., attending workshops, reviewing documents).

# STAKEHOLDER ENGAGEMENT & COLLABORATION LOG

**Initiative/Project:** [INSERT: Short Text | Formal name of the change initiative]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Stakeholder Engagement Approach (Task 3.2) -> Crucial for comparing *planned* engagement vs. *actual* engagement.
*   [ ] **[Primary Input]** Business Analysis Performance Assessment (Task 3.5) -> Crucial for identifying if poor BA performance is causing stakeholder disengagement.
*   [ ] **[Real-world Data]** User's observation notes regarding stakeholder attitudes and participation.

---

## 1. Agreement on Commitments (BABOK 4.5.4.1)
> **🤖 AI AGENT INSTRUCTION:** Based on the user's input, log the specific time and resource commitments negotiated with key stakeholders for the current phase of BA activities. Record whether consensus was reached or if conflict resolution is ongoing.

| Stakeholder Role / Name | Required BA Activity Commitment | Commitment Agreed? (Yes/No/Pending) | Negotiation / Conflict Notes |
| :--- | :--- | :--- | :--- |
| **[INSERT: e.g., Domain SME]** | [INSERT: e.g., "Attend two 2-hour process mapping workshops per week"] | [INSERT: e.g., Yes] | [INSERT: e.g., "Agreed, but requested all materials be sent 48 hours in advance."] |
| **[INSERT: e.g., Sponsor]** | [INSERT: e.g., "Review and sign-off on BRD within 3 days of submission"] | [INSERT: e.g., No] | [INSERT: e.g., "Sponsor pushed back; negotiated a 5-day review window instead."] |
| **[INSERT]** | [INSERT] | [INSERT] | [INSERT] |

---

## 2. Monitor Stakeholder Engagement (BABOK 4.5.4.2)
> **🤖 AI AGENT INSTRUCTION:** Evaluate the actual participation and attitude of stakeholders against the baseline defined in the `Stakeholder Engagement Approach` (Task 3.2).

*   **Positive Shifts / Champions:** [INSERT: Narrative | Highlight stakeholders who are highly engaged, providing quality information, and acting as champions for the change.]
*   **Engagement Risks (Disengagement / Resistance):** 
    *   *Risk 1:* [INSERT: e.g., "The Operational Support team has missed 3 consecutive elicitation interviews."]
    *   *Root Cause:* [INSERT: e.g., "Diverted to resolving a critical production system outage."]

---

## 3. Collaboration Action Plan (BABOK 4.5.4.3)
> **🤖 AI AGENT INSTRUCTION:** Recommend actions to capitalize on positive reactions or to mitigate/avoid negative reactions. Provide actionable steps for the Business Analyst to restore the free flow of information.

| Impacted Stakeholder | Issue / Symptom | Planned Corrective Action (to foster collaboration) |
| :--- | :--- | :--- |
| **[INSERT: e.g., Regulatory Rep]** | [INSERT: e.g., "Expressing frustration over technical jargon in requirement packages."] | [INSERT: e.g., "Schedule a 1-on-1 session to translate technical constraints into business risks; adjust future communication format per Task 4.4."] |
| **[INSERT]** | [INSERT] | [INSERT] |