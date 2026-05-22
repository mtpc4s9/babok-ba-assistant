---
description: Template for generating the Business Analysis Approach defining the overarching method, level of formality, activities, and timing for conducting business analysis work on a given initiative (BABOK Task 3.1).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity (BA Focus):** Strictly define the approach for *Business Analysis* activities (elicitation, requirements management, strategy analysis). DO NOT generate a general Project Management Plan, Software Development Life Cycle (SDLC) plan, or Work Breakdown Structure (WBS) for developers.
> - **Methodology Diagnosis (Predictive vs. Adaptive):** Evaluate the user's context to recommend where the approach falls on the continuum. If uncertainty is high and feedback loops are needed -> Adaptive. If risk is high, requirements must be locked early, and compliance is strict -> Predictive.
> - **Input Validation:** Scan the Input Traceability Map. The overarching *Need* or *Business Problem* must be understood before an approach can be formulated.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If the strategic business *Need* is completely unknown or the organizational methodology constraints are undefined, HALT generation. Ask the user: *"What is the core business problem we are trying to solve, and does your organization mandate a specific methodology (e.g., Agile, Waterfall)?"*

# BUSINESS ANALYSIS APPROACH

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD format of generation]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Needs (Task 6.1 or Pre-project Context) -> Crucial for establishing the scope of BA work.
*   [ ] **[Guideline]** Methodologies and Frameworks -> Crucial for determining Predictive vs. Adaptive.
*   [ ] **[Guideline]** Business Policies -> Crucial for regulatory compliance and formality.

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Planning Approach** | Known constraints, enterprise methodologies | Methodologies & Frameworks / Expert Judgment | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Formality & Detail** | Compliance rules, stakeholder locations | Business Policies / Stakeholder Context | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: BA Activities & Timing** | Deadlines, resource availability | Needs / Project Charter | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 4: Complexity & Risk** | Domain knowledge gaps, stakeholder attitudes | BA Performance Assessment / Elicitation | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 1. Planning Approach & Methodology
> **🤖 AI AGENT INSTRUCTION:** Define whether the BA work will follow a Predictive (plan-driven/waterfall) or Adaptive (change-driven/agile) approach, or a hybrid. Justify this choice based on the level of upfront uncertainty and organizational standards.

*   **Selected Approach:** [Select one: Predictive | Adaptive | Hybrid]
*   **Strategic Rationale:** [INSERT: Narrative | e.g., "An Adaptive approach is selected because the solution requirements cannot be effectively defined ahead of implementation, and rapid stakeholder feedback loops are necessary."]
*   **Methodology Framework:** [INSERT: Framework Name | e.g., Scrum, SAFe, Waterfall, Homegrown IT Framework]

## 2. Formality and Level of Detail
> **🤖 AI AGENT INSTRUCTION:** Based on the selected approach, describe how formal the BA deliverables will be. Predictive approaches require heavy documentation and templates; Adaptive approaches rely on interaction, user stories, and lightweight documentation.

*   **Documentation Standards:** [INSERT: Narrative | e.g., "Requirements will be captured as User Stories with Acceptance Criteria in JIRA. No formal BRD will be produced."]
*   **Driving Factors:** [INSERT: Factors | List the drivers for this formality level, e.g., "Highly regulated industry requiring strict audit trails," or "Co-located agile team favoring verbal communication."]

## 3. Business Analysis Activities and Timing
> **🤖 AI AGENT INSTRUCTION:** Outline the sequence of BA activities. For Predictive: list phases (Elicitation -> Analysis -> Sign-off). For Adaptive: outline the iterative cycle (Backlog Refinement -> Sprint Planning). Specify *when* the bulk of the BA effort will occur.

*   **Key BA Deliverables:** [INSERT: Deliverables List | e.g., Elicitation Plan, Solution Scope, Product Backlog, Traceability Matrix]
*   **Activity Timing / Phasing:** [INSERT: Timeline Narrative | e.g., "BA effort will be heavily front-loaded in Q1 to lock down baseline requirements, followed by 20% allocation for change control during construction."]
*   **Iteration Strategy (If Adaptive):** [INSERT: Iteration Narrative | How requirements will be chunked and delivered iteratively]

## 4. Complexity and Risk Assessment
> **🤖 AI AGENT INSTRUCTION:** Analyze the complexity of the BA work (not the technical implementation risk). Consider the number of stakeholders, cultural norms, BA domain experience, and geographic distribution.

*   **BA Effort Complexity:** [Select one: Low | Medium | High]
*   **Contributing Factors:** [INSERT: Complexity Factors | e.g., "High complexity due to 5 disparate stakeholder groups across 3 time zones and lack of existing process documentation."]
*   **BA Process Risks & Mitigation:**
    *   *Risk:* [INSERT: Specific BA Risk | e.g., "SMEs may not be available for elicitation workshops due to Q4 closing activities."]
    *   *Mitigation:* [INSERT: Action Plan | e.g., "Utilize document analysis and asynchronous surveys to reduce required SME meeting time."]

## 5. Acceptance and Change Control
> **🤖 AI AGENT INSTRUCTION:** Define how this Business Analysis Approach will be reviewed and agreed upon, and how it will be updated if project conditions change.

*   **Review & Approval:** [INSERT: Narrative | e.g., "The approach must be formally signed off by the Executive Sponsor and the Project Manager before elicitation begins."]
*   **Approach Maintenance:** [INSERT: Narrative | e.g., "This approach will be reviewed iteratively at the end of each Sprint Retrospective to adjust formality or timing as needed."]