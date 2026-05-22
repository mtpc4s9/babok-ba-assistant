---
description: Template for generating the Business Requirements document representing the strategic problems, opportunities, or constraints triggering the change (BABOK Task 6.1).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity:** Must strictly adhere to IIBA BABOK V3 standard definitions and professional enterprise terminology. Focus exclusively on the strategic "WHY" (Goals, Objectives, Outcomes) of the enterprise. Absolutely NO functional requirements, technical specifications, or system features (e.g., "The system shall...") are allowed here. This document must remain entirely solution-agnostic.
> - **Input Validation:** Scan the Input Traceability Map before processing. If any mandatory input is missing, ambiguous, or conflict-prone, you MUST NOT proceed with generation.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If required inputs are unavailable or unclear in the user's context (e.g., vague business needs, unquantified strategic goals, or unclear corporate constraints), you MUST immediately halt generation, pivot to advisory/inquiry mode, and request the User to provide the missing facts or clarify ambiguity. Never hallucinate, assume, or guess business reality.

# BUSINESS REQUIREMENTS

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project | Project Charter or Kickoff Metadata]
**Date of Issue:** [INSERT: ISO Date | YYYY-MM-DD format of generation | Current Session Metadata]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** `Current State Description` (Task 6.1) -> Crucial for Section 1, 2, 3
*   [ ] **[Primary Input]** `Elicitation Results (confirmed)` (Task 4.4) -> Crucial for Section 1, 3
*   [ ] **[Primary Input]** `Enterprise Strategy` (Contextual asset) -> Crucial for Section 1, 2

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Business Need (The "Why")** | Specific business pain points, lost revenues, customer complaints, or strategic opportunities | `Current State Description` / `Elicitation Results (confirmed)` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Desired Business Outcomes** | High-level organizational goals, desired business value, enterprise strategic alignment | `Enterprise Strategy` / `Elicitation Results (confirmed)` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Business Constraints** | Sponsor-imposed budget limits, strict timelines, or corporate and regulatory mandates | `Elicitation Results (confirmed)` / `Current State Description` | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 1. Business Need (The "Why")
> **🤖 AI AGENT INSTRUCTION:** Clearly articulate the business problem to be solved or the strategic opportunity to be exploited. Avoid proposing solutions. Describe the pain points in quantitative and qualitative terms based on the Current State Description.

*   **Problem/Opportunity Statement:** [INSERT: Problem Statement | A concise description of the strategic pain point, its operational impact, and the business risk of inaction (e.g., "The enterprise loses 15% of new signups due to a 3-minute registration bottleneck...") | Current State Description (Section 2)]
*   **Strategic Driver:** [INSERT: Strategic Driver Narrative | The top-down corporate directive, bottom-up operational pain, or external regulatory/market driver triggering this need | Enterprise Strategy / Elicitation Results (confirmed)]

## 2. Desired Business Outcomes
> **🤖 AI AGENT INSTRUCTION:** Describe what success looks like at the organizational level once the business need is satisfied. This sets the stage for defining the Future State.

*   **Target State Vision:** [INSERT: Vision Statement | A high-level description of the ideal business environment once the need is addressed (e.g., "Achieve fully automated, instantaneous registration for all qualified digital customers") | Enterprise Strategy / Sponsor Directives]
*   **Value Proposition:** [INSERT: Benefit Narrative | The overarching benefit to the enterprise and its key stakeholders (Customer, Sponsor, Employees) if this need is successfully addressed | Elicitation Results (confirmed) - Business Value Discussions]

## 3. Business Constraints
> **🤖 AI AGENT INSTRUCTION:** Identify any high-level limitations or boundaries imposed by the enterprise or external factors that restrict how this business need can be resolved. Do not include technical design constraints; list only strategic and business-level constraints.

*   **Time/Budget Restrictions:** [INSERT: Financial/Timeline Constraints | Strict deadlines, budgetary limits, or fiscal year ceilings established by the Sponsor | Elicitation Results (confirmed) - Sponsor Constraints]
*   **Compliance Mandates:** [INSERT: Policy/Regulatory Constraints | Mandatory legal, compliance, or strict corporate policy boundaries that must not be breached during this change | Business Policies / Legal Audit]