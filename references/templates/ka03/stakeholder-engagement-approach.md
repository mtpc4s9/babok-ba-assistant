---
description: Template for generating the Stakeholder Engagement Approach detailing stakeholder analysis (roles, attitudes, authority) and defining the collaboration and communication strategies for business analysis activities (BABOK Task 3.2).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity (BA Focus):** This is NOT a generic project communication plan. This plan strictly dictates how the Business Analyst will engage stakeholders to elicit, analyze, verify, validate, and approve *business analysis information* (requirements, designs, strategy).
> - **Attitude & Authority Profiling:** When generating the stakeholder analysis, you MUST synthesize their level of influence, decision-making authority, and attitude towards the change. Flag any "High Influence + Negative Attitude" stakeholders as a risk.
> - **Collaboration vs. Communication:** Keep these concepts strictly separated. Collaboration = working together to create value (e.g., workshops, modeling sessions). Communication = disseminating information and gathering feedback (e.g., status reports, document routing).
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If the `Business Analysis Approach` (Task 3.1) is unknown, HALT execution. The engagement frequency and formality depend entirely on whether the BA Approach is Predictive or Adaptive.

# STAKEHOLDER ENGAGEMENT APPROACH

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Needs / Current State Description -> Crucial for identifying who is impacted by the change.
*   [ ] **[Primary Input]** Business Analysis Approach (Task 3.1) -> Crucial for aligning the formality of engagement (Adaptive vs. Predictive).

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Stakeholder Analysis** | Organization chart, affected business units, roles | Current State Description / Needs | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Collaboration Plan** | Level of interaction required, geographic locations | Business Analysis Approach | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Communication Plan** | Formality level, regulatory requirements | Business Analysis Approach / Business Policies | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 1. Stakeholder Analysis and Characteristics
> **🤖 AI AGENT INSTRUCTION:** Perform a thorough stakeholder analysis based on the provided context. Identify key groups, their specific roles in the BA process (e.g., Domain SME, Sponsor, Regulator), their decision-making authority, and their perceived attitude towards the initiative.
> *Note: Use RACI mapping (Responsible, Accountable, Consulted, Informed) if appropriate for the context.*

| Stakeholder Name / Group | BA Role (BABOK standard) | Decision-Making Authority | Influence | Attitude towards Change | Key Concerns / Interests |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [INSERT: e.g., CFO] | [INSERT: e.g., Sponsor] | [INSERT: Ultimate sign-off on budget] | [High/Med/Low] | [Positive/Neutral/Negative] | [INSERT: e.g., ROI and cost reduction] |
| [INSERT: e.g., Retail Sales Team] | [INSERT: e.g., End User] | [INSERT: None] | [High/Med/Low] | [Positive/Neutral/Negative] | [INSERT: e.g., Fear of job automation] |
| [INSERT: e.g., Compliance Dept] | [INSERT: e.g., Regulator] | [INSERT: Can veto non-compliant designs] | [High/Med/Low] | [Positive/Neutral/Negative] | [INSERT: e.g., Adherence to data privacy laws] |

### 1.1 Stakeholder Engagement Risks
> **🤖 AI AGENT INSTRUCTION:** Identify specific risks related to stakeholder availability, conflicting priorities, or negative attitudes.

*   **Risk 1:** [INSERT: Risk Description | e.g., "The Retail Sales Team has high influence over successful adoption but a negative attitude due to fear of automation."]
*   **Mitigation:** [INSERT: Action Plan | e.g., "Involve key sales representatives early in collaborative prototyping sessions to build buy-in."]

## 2. Stakeholder Collaboration Approach
> **🤖 AI AGENT INSTRUCTION:** Define how the BA will interact with stakeholders to perform elicitation, modeling, and analysis. Tailor the tools and frequency based on the BA Approach (Predictive = formal workshops; Adaptive = daily stand-ups, informal whiteboarding).

*   **Primary Collaboration Method:** [INSERT: Narrative | e.g., "Collaboration will be primarily Adaptive, relying on bi-weekly backlog refinement sessions and continuous informal interactions via Microsoft Teams."]
*   **Collaboration Tools:** [INSERT: Tools | e.g., "Jira for user stories, Miro for virtual whiteboarding, SharePoint for shared models."]
*   **Geographic & Timezone Considerations:** [INSERT: Narrative | Detail how distributed teams will collaborate, e.g., "As the development team is in UTC+7 and SMEs in UTC-5, asynchronous collaboration via shared wikis will be heavily utilized."]

### 2.1 Planned Collaboration Events
| Collaboration Event | Purpose | Target Stakeholders | Frequency / Timing |
| :--- | :--- | :--- | :--- |
| [INSERT: e.g., Elicitation Workshops] | [INSERT: To discover and define business rules] | [INSERT: Domain SMEs, Sponsor] | [INSERT: e.g., Phase 1, twice weekly] |
| [INSERT: e.g., Solution Prototype Review] | [INSERT: To validate design options] | [INSERT: End Users, Implementation SMEs] | [INSERT: e.g., End of each Sprint] |

## 3. Stakeholder Communication Needs (Alignment with Task 4.4)
> **🤖 AI AGENT INSTRUCTION (4.4 ALIGNMENT RULE):** Define how business analysis information will be packaged and disseminated based on audience preferences (BABOK 3.2.4.3).
> ⚠️ **CRITICAL ALIGNMENT:** The formats defined in the matrix below MUST establish the baseline "Forms for Packages" (e.g., Formal Documentation, Presentations, Informal Emails) that will be explicitly requested and generated when executing Task 4.4 (*Communicate Business Analysis Information*).

*   **Communication Formality:** [INSERT: Narrative | e.g., "Given the regulatory nature of the project, all requirements communications will be formal, utilizing approved BRD templates (.docx)."]
*   **Feedback Mechanism:** [INSERT: Narrative | How stakeholders are expected to respond to communications, e.g., "Stakeholders are required to provide written feedback via email or Jira comments within 3 business days of receiving a requirements package."]

### 3.1 Communication & Packaging Matrix
> **🤖 AI AGENT INSTRUCTION:** Map the information to be communicated with the specific *Package Format* (BABOK 4.4.4.1) and *Delivery Platform* (BABOK 4.4.4.2).

| What to Communicate (Information) | Target Audience | Package Format (Input for Task 4.4) | Delivery Platform (Task 4.4) | Frequency | Level of Detail |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [INSERT: e.g., Elicitation Results] | [INSERT: e.g., Domain SMEs] | **[INSERT: e.g., Informal Documentation / .xlsx or Email]** | [INSERT: e.g., Individual Collaboration] | [INSERT: e.g., 24 hours after each session] | [INSERT: e.g., Raw meeting notes and models] |
| [INSERT: e.g., Requirements Package] | [INSERT: e.g., Project Manager, Regulator] | **[INSERT: e.g., Formal Documentation / .docx BRD]** | [INSERT: e.g., Non-verbal via SharePoint] | [INSERT: e.g., At Phase Gates] | [INSERT: e.g., Highly detailed and atomic] |
| [INSERT: e.g., Solution Recommendation] | [INSERT: e.g., Executive Sponsor] | **[INSERT: e.g., Presentation / .pptx Executive Summary]** | [INSERT: e.g., Group Collaboration / Meeting] | [INSERT: e.g., Prior to implementation] | [INSERT: e.g., Low detail, high visual/financial focus] |