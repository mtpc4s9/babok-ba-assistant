---
description: Template for generating a unified tracking matrix that captures raw elicitation outcomes (unconfirmed - Task 4.2) and tracks their validation against source information (confirmed - Task 4.3) while ensuring alignment with planned scope.
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES & CBAP ALIGNMENT)
> - **Analytical Scribe Role:** Since the AI cannot physically conduct elicitation events, the user must provide raw meeting notes, audio transcripts, or observations. Your job is to parse, synthesize, and categorize this raw data into the matrix below.
> - **⚠️ MANDATORY INTERACTIVE ELICITATION INTERVIEW (NO HALLUCINATION):** You **CANNOT** generate this document out of thin air. If the user requests this tracker without providing specific meeting notes, audio transcripts, or observation logs, you **MUST HALT execution** and prompt the User:
>   *Ask the user:* "To build the Elicitation Results Tracker, I need the raw findings from your elicitation session. Could you please share the meeting notes, transcript, or a summary of what was discussed? Alternatively, we can run a brief interactive interview right now where you tell me:
>   1. What were the key requirements or pain points raised by stakeholders?
>   2. Were there any specific business rules or system behaviors explained?
>   3. Did stakeholders raise any out-of-scope concerns?"
>   *(Do not proceed with document generation until the user provides the raw data or answers these questions).*
> - **Scope Guidance & Deviation Check (BABOK 4.2.4.1):** Cross-reference the raw notes against the `Elicitation Activity Plan` (Task 4.1). If any elicited information falls outside the defined "Scope of Elicitation", move it directly to Section 3 (Out-of-Scope / Parking Lot).
> - **Sequential State Separation (BABOK 4.2 vs 4.3):** Ensure the matrix explicitly separates the "Unconfirmed" state (what was said/observed during Task 4.2) from the "Confirmed" state (what was cross-checked and verified during Task 4.3). If the results are not yet verified, leave the "Confirmed" column blank and set the status to "UNCONFIRMED" or "PARTIALLY CONFIRMED".
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If the `Elicitation Activity Plan` (Task 4.1) is missing, **HALT execution** and ask the user to provide it. You cannot evaluate if the elicited data is in-scope or out-of-scope without the baseline plan.

# ELICITATION RESULTS TRACKER

**Initiative/Project:** [INSERT: Short Text | Formal name of the change initiative]
**Elicitation Event Name:** [INSERT: e.g., "Phase 1: Core Billing Process Discovery Workshop"]
**Date of Execution:** [INSERT: ISO Date | YYYY-MM-DD]
**Status:** [Select: UNCONFIRMED (Task 4.2) | PARTIALLY CONFIRMED | FULLY CONFIRMED (Task 4.3)]

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Elicitation Activity Plan (Task 4.1) -> Crucial for checking scope boundaries (BABOK 4.2.4.1).
*   [ ] **[Raw Data]** User's meeting notes, transcripts, or observation logs -> Crucial for populating the matrix.

---

## 1. Scope Guidance & Activity Review (BABOK 4.2.4.1)
> **🤖 AI AGENT INSTRUCTION:** Summarize how the actual elicitation event aligned with the intended goals defined in the `Elicitation Activity Plan`. Did the stakeholders provide the expected information?

*   **Planned Objective:** [INSERT: Elicitation objective extracted from Task 4.1]
*   **Actual Execution Summary:** [INSERT: Narrative | e.g., "The workshop successfully captured the As-Is manual billing process. However, the Finance SME was absent, so tax calculation logic remains incomplete."]
*   **Information Gaps:** [INSERT: Missing elements that require follow-up elicitation sessions]

---

## 2. Elicitation Results Matrix (BABOK 4.2.8 & 4.3.8)
> **🤖 AI AGENT INSTRUCTION:** Parse the user's raw notes into atomic statements. Place them in the `Elicitation Results (UNCONFIRMED - Task 4.2)` column. If the user indicates that cross-checking or follow-up verification has occurred, populate the `Confirmation Method / Source` and `Elicitation Results (CONFIRMED - Task 4.3)` columns. Otherwise, leave those columns blank.

| ID | Topic / Category | Elicitation Results (UNCONFIRMED - Task 4.2) | Confirmation Method / Source | Elicitation Results (CONFIRMED - Task 4.3) |
| :--- | :--- | :--- | :--- | :--- |
| **[ER-01]** | [e.g., Payment Gateway] | [INSERT: Raw finding | e.g., "SME stated that PayPal integration is currently failing 10% of the time due to timeout limits."] | [INSERT: How it was checked | e.g., "Compared against System Error Logs (Document Analysis)."] | [INSERT: Verified fact | e.g., "Confirmed: Timeout is set to 3000ms. Failure rate is exactly 11.2%."] |
| **[ER-02]** | [e.g., Process Rule] | [INSERT: Raw finding | e.g., "Manager mentioned invoices over $500 require dual sign-off."] | [INSERT: e.g., "Pending follow-up with Audit Team."] | *[Leave blank if unconfirmed]* |
| **[ER-03]** | [INSERT] | [INSERT] | [INSERT] | [INSERT] |

---

## 3. Out-of-Scope / Parking Lot Items (Scope Control)
> **🤖 AI AGENT INSTRUCTION:** List any information provided in the raw notes that explicitly violates or is irrelevant to the boundaries set in the `Elicitation Activity Plan`.

*   **[PL-01] Out-of-Scope Item:** [INSERT: e.g., "Stakeholders began discussing UI color preferences for the mobile app."]
    *   *Reason for exclusion:* [INSERT: e.g., "This session was strictly scoped to backend business logic, not UI/UX design."]
    *   *Recommended Action:* [INSERT: e.g., "Log in Item Tracking and defer to the Prototyping Workshop scheduled for next month."]