---
description: Template for generating a tailored Business Analysis Information package formatted specifically for the target audience to ensure a shared understanding (BABOK Task 4.4).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES & CBAP ALIGNMENT)
> - **Domain Integrity (Shared Understanding):** This task is not about simply broadcasting data; it is about formatting elicited or analyzed information so the specific target audience can easily consume, understand, and agree with it.
> - **⚠️ MANDATORY FORMAT CHECK (ANTI-HALLUCINATION):** You **MUST NOT** generate the information package until the user explicitly defines the `Form for Package`. 
>   *If the user's prompt DOES NOT specify an output format (e.g., .docx formal report, .xlsx traceability table, .pptx presentation slide, or informal email summary), you **MUST HALT execution** and ask:* 
>   *"To effectively communicate this business analysis information, please specify the desired format for the package. Do you need a formal Word document (.docx), an Excel data table (.xlsx), a PowerPoint presentation for executives (.pptx), or a simple Email notification?"*
>   *(Do not proceed until the user selects a format).*
> - **Audience Alignment (BABOK 4.4.4.1):** Ensure the language, tone, and level of detail perfectly match the target stakeholders defined in the `Stakeholder Engagement Approach` (Task 3.2). (e.g., Do not send deep technical UML diagrams to a C-Level Sponsor unless explicitly requested).

# BUSINESS ANALYSIS INFORMATION PACKAGE

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative]
**Package Subject:** [INSERT: e.g., "Phase 1: Elicitation Results Summary" or "Updated Business Rules"]
**Date of Communication:** [INSERT: ISO Date | YYYY-MM-DD]
**Target Audience:** [INSERT: Stakeholder Group | e.g., "Executive Steering Committee" or "Development Team"]

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Business Analysis Information -> The raw data, requirements, designs, or elicitation results to be communicated.
*   [ ] **[Primary Input]** Stakeholder Engagement Approach (Task 3.2) -> Crucial for confirming the audience's preferred level of detail and formality.

---

## 1. Communication Context & Objectives
> **🤖 AI AGENT INSTRUCTION:** Briefly define the purpose of this communication package. What action or understanding is required from the audience?

*   **Communication Objective:** [Select one: Informational | Request for Review | Request for Approval | Early Assessment | Input to Design]
*   **Key Message:** [INSERT: Narrative | A 1-2 sentence executive summary of the information being delivered.]
*   **Requested Action:** [INSERT: Call to Action | e.g., "Please review the attached process models and provide feedback by Friday."]

---

## 2. The Information Package (Tailored Content)
> **🤖 AI AGENT INSTRUCTION:** Generate the actual information payload based strictly on the user-selected `Form for Package`.

### 🔀 DYNAMIC SECTION: [INSERT: Selected Format (e.g., Email Summary / Executive Presentation / Formal Document)]

*(If the user requested an **Email Summary**)*
> **Subject:** Action Required: Review of [Subject]
> **To:** [Target Audience]
> **Body:** 
> [INSERT: Bulleted, high-level summary of the business analysis information, avoiding heavy technical jargon. Highlight key impacts and next steps.]

*(If the user requested a **.pptx Presentation Layout**)*
> **Slide 1: Executive Overview** - [INSERT: High-level metrics or core problem statement]
> **Slide 2: Current Status / Findings** - [INSERT: Key elicited points or design options]
> **Slide 3: Next Steps & Decisions** - [INSERT: Immediate actions required from the audience]

*(If the user requested a **.docx Formal Document / .xlsx Table**)*
> [INSERT: The detailed structural breakdown of the requirements, business rules, or models, utilizing exact BABOK terminology and extensive detail suitable for SMEs or Developers.]

---

## 3. Collaboration & Feedback Mechanism (BABOK 4.4.4.2)
> **🤖 AI AGENT INSTRUCTION:** Specify how the audience should interact with this package and provide feedback, aligned with the collaboration methods defined in Task 3.2.

*   **Delivery Platform:** [Select one: Group Collaboration (Workshop/Meeting) | Individual Collaboration (1-on-1) | Non-verbal (Email/Wiki)]
*   **Feedback Channel:** [INSERT: Instructions | e.g., "Please leave your comments directly in the Jira ticket (ID: #1234) or reply to this email."]
*   **Deadline for Feedback/Consensus:** [INSERT: Date/Time]