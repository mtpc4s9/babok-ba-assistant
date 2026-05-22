---
description: Task definitions for KA04 Elicitation and Collaboration (Tasks 4.1-4.5) including Purpose, Inputs, Outputs, and template mapping for artifact generation.
---

# KA04: Elicitation and Collaboration — Tasks Reference

> **🤖 AI AGENT INSTRUCTION (WORKFLOW EXECUTION):**
> You MUST execute `references/advisor/readiness-check.md` before generating any Output.
> Guidelines and Stakeholders for these tasks are managed entirely by `guidelines-tools.md` and `stakeholders.md` within this folder. NEVER infer or hallucinate them.
> If the Tollgate passes, load the explicitly mapped template below to generate the deliverable.
>
> **⚠️ CRITICAL INTERACTIVE INTERVIEW TRIGGER (ANTI-HALLUCINATION):**
> Tasks 4.2 and 4.5 depend heavily on real-world stakeholder feedback, notes, or behavioral observations. If the user requests generating deliverables for these tasks without providing the required raw context (meeting logs, interview transcripts, observation sheets), you **MUST HALT execution** and initiate an interactive Elicitation Interview to prompt the user for the necessary data.
>
> **📋 TEMPLATE DESIGN NOTE:** Note that Tasks 4.2 (Conduct Elicitation) and 4.3 (Confirm Elicitation Results) share a single, consolidated tracking template. Ensure sequential state separation (Unconfirmed vs. Confirmed state tracking) when updating this tracker.

---

## Task 4.1: Prepare for Elicitation
*   **Purpose:** To understand the scope of the elicitation activity, select appropriate techniques, and plan for (or procure) appropriate supporting materials and resources.
*   **Inputs:** Needs, Stakeholder Engagement Approach.
*   **Outputs:**
    *   **Elicitation Activity Plan** → Use `references/templates/ka04/elicitation-activity-plan.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Sets the logistical boundaries, techniques, and stakeholder education plan for a *single* elicitation event.
    *   *Exam Trap:* Do not confuse the "Scope of Elicitation" (what we need to find out today) with the "Solution Scope" (the boundaries of the final product).

## Task 4.2: Conduct Elicitation
*   **Purpose:** To draw out, explore, and identify information relevant to the change.
*   **Inputs:** Elicitation Activity Plan.
*   **Outputs:**
    *   **Elicitation Results (unconfirmed)** → Use `references/templates/ka04/elicitation-results-tracker.md` (Update the 'Unconfirmed' column/Section 2).
*   **🤖 AI AGENT INSTRUCTION (QUESTION PREPARATION & INTERVIEW RULE):**
    *   Before the user conducts a real-world interview or workshop, offer to generate a targeted **Question Bank**. Read the `Elicitation Activity Plan` (Task 4.1) and generate structured open-ended or closed-ended questions tailored to the specific Domain SMEs to prevent scope creep.
    *   If raw meeting notes, audio transcripts, or observation logs are not supplied by the user, **HALT execution** and ask: *"To populate the Elicitation Results Tracker, please provide the raw notes, transcript, or details from your elicitation session. Alternatively, let's run a quick simulation interview where I ask you about the session's key findings."*
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Guiding the activity to stay within scope and capturing raw outcomes.
    *   *Exam Trap:* Unplanned elicitation (e.g., ad-hoc hallway conversations) is completely valid in BABOK. Not all elicitation requires formal workshops.

## Task 4.3: Confirm Elicitation Results
*   **Purpose:** To check the information gathered during an elicitation session for accuracy and consistency with other information.
*   **Inputs:** Elicitation Results (unconfirmed).
*   **Outputs:**
    *   **Elicitation Results (confirmed)** → Use `references/templates/ka04/elicitation-results-tracker.md` (Update the 'Confirmed' column/Section 2 after cross-referencing).
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Cross-referencing raw notes against source documents or other stakeholders to establish a shared understanding.
    *   *Exam Trap:* **Confirmed != Approved.** Confirming just means "Yes, this is what I said and it is factually correct." Approving (Task 5.5) means "Yes, I agree we should spend money to build this."

## Task 4.4: Communicate Business Analysis Information
*   **Purpose:** To ensure stakeholders have a shared understanding of business analysis information.
*   **Inputs:** Business Analysis Information (any state), Stakeholder Engagement Approach.
*   **Outputs:**
    *   **Business Analysis Information (communicated)** → Use `references/templates/ka04/business-analysis-information-communicated.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Packaging information into appropriate formats (formal docs, presentations, informal emails).
    *   *Exam Trap:* The "One Size Fits All" trap. Never send a 100-page BRD to an Executive Sponsor; tailor the package format based on Task 3.2 constraints.

## Task 4.5: Manage Stakeholder Collaboration
*   **Purpose:** To encourage stakeholders to work towards a common goal.
*   **Inputs:** Stakeholder Engagement Approach, Business Analysis Performance Assessment.
*   **Outputs:**
    *   **Stakeholder Engagement** → Use `references/templates/ka04/stakeholder-engagement-tracking.md`
*   **🤖 AI AGENT INSTRUCTION (INTERACTIVE TRACKING TRIGGER):**
    *   This task evaluates real-time collaboration. If no observation logs or stakeholder attitude assessments are provided, **HALT execution** and ask the user: *"To log current stakeholder engagement and manage collaboration, please tell me: Which stakeholders have missed their sessions or shown signs of resistance? What commitments did they recently agree to?"*
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Tracking actual willingness to participate and securing agreement on time/resource commitments.
    *   *Exam Trap:* Confusing the "Plan" (Task 3.2) with the "Execution/Monitoring" (Task 4.5). Task 4.5 deals with real-time conflict resolution and participation tracking.