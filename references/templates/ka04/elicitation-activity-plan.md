---
description: Template for generating the Elicitation Activity Plan defining the logistics, scope, selected techniques, supporting materials, and stakeholder preparation strategy for an upcoming elicitation event (BABOK Task 4.1).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES & CBAP ALIGNMENT)
> - **Activity Scope vs. Solution Scope (BABOK 4.1.4.1):** When generating Section 1, strictly define the boundaries of *this specific elicitation activity*, NOT the entire project. What specific business analysis information are we trying to discover *today*? 
> - **Stakeholder Education & Buy-in (BABOK 4.1.4.5):** In Section 4, do not just list logistics or agendas. You MUST define how the BA will *educate* the stakeholders on the chosen elicitation technique (e.g., explaining how a Root Cause Analysis works) and how to secure their *buy-in* if they are resistant or confused.
> - **Technique Synergy:** Ensure the techniques selected in Section 2 directly align with the Stakeholder attitudes identified in the `Stakeholder Engagement Approach` (Task 3.2).
> - **⚠️ SHARP NEGATIVE CONSTRAINT (ANTI-HALLUCINATION):** If the strategic `Needs` (Task 6.1) or `Stakeholder Engagement Approach` (Task 3.2) are unknown, **HALT execution** and ask the user for them. You cannot plan an elicitation event without knowing *what* problem you are solving and *who* you are talking to.

# ELICITATION ACTIVITY PLAN

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative]
**Elicitation Event Name:** [INSERT: e.g., "Phase 1: Core Billing Process Discovery Workshop"]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Needs -> Crucial for defining the overall purpose and scope of the elicitation activities.
*   [ ] **[Primary Input]** Stakeholder Engagement Approach (Task 3.2) -> Crucial for identifying the correct participants and understanding their communication/collaboration preferences.

---

## 1. Scope of the Elicitation Activity (BABOK 4.1.4.1)
> **🤖 AI AGENT INSTRUCTION:** Define the specific boundaries and desired outcomes of this single elicitation event. 

*   **Elicitation Objective:** [INSERT: Narrative | e.g., "To elicit and document the current state workflows and pain points of the manual billing process."]
*   **Information to be Discovered:** [INSERT: List | Specific data, rules, or process steps expected to be extracted from stakeholders.]
*   **Expected Work Products:** [INSERT: Artifacts | e.g., "A draft As-Is Process Model and a list of unconfirmed Stakeholder Requirements."]
*   **Out-of-Scope for this Activity:** [INSERT: Explicit Boundaries | e.g., "We will NOT discuss future state software features or technical architecture during this session."]

## 2. Selected Elicitation Techniques (BABOK 4.1.4.2)
> **🤖 AI AGENT INSTRUCTION:** Recommend 1-3 specific techniques from the BABOK Top 50 to be used during this activity. Justify why they are appropriate based on the scope and stakeholder characteristics.

*   **Primary Technique:** [INSERT: Technique Name | e.g., Workshops]
    *   *Rationale:* [INSERT: Justification | e.g., "Selected to rapidly gain consensus among 5 cross-functional Domain SMEs."]
*   **Secondary/Supporting Technique:** [INSERT: Technique Name | e.g., Document Analysis]
    *   *Rationale:* [INSERT: Justification | e.g., "Used prior to the workshop to review existing billing policy documents, reducing SME interview time."]

## 3. Logistics and Supporting Materials (BABOK 4.1.4.3 & 4.1.4.4)
> **🤖 AI AGENT INSTRUCTION:** Detail the operational setup for the activity.

*   **Activity Format & Location:** [INSERT: e.g., "Virtual session via Microsoft Teams / On-site at HQ Room 4A."]
*   **Key Participants & Roles:** 
    *   *Facilitator:* [INSERT: Role/Name]
    *   *Scribe:* [INSERT: Role/Name]
    *   *Domain SMEs:* [INSERT: Target Stakeholder Groups]
*   **Supporting Materials Required:** [INSERT: List | e.g., "Existing system user manuals, previous month's error logs, and a blank SIPOC template."]

## 4. Stakeholder Preparation Plan (BABOK 4.1.4.5)
> **🤖 AI AGENT INSTRUCTION:** Define how you will ensure stakeholders are ready, willing, and able to participate effectively. Focus on education and buy-in.

*   **Pre-work / Pre-reading Requests:** [INSERT: Actions | e.g., "Stakeholders will be asked to review the current billing policy document 3 days prior to the workshop."]
*   **Technique Education Strategy:** [INSERT: Educational Narrative | How will you explain the technique? e.g., "Since stakeholders are unfamiliar with Process Modelling, the first 15 minutes of the workshop will be dedicated to explaining BPMN swimlane concepts so they can actively validate the models on the whiteboard."]
*   **Securing Buy-in & Mitigating Resistance:** [INSERT: Mitigation Strategy | e.g., "The Operational Support team has shown resistance to previous changes (identified in Stakeholder Engagement Approach). To secure buy-in, the Sponsor will kick off the meeting to reiterate the strategic value, and the BA will frame questions to focus on solving the team's immediate pain points rather than dictating new rules."]