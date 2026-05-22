---
description: Template for generating a formal C-Level Business Case (PowerPoint-ready) justifying a strategic course of action based on benefits, costs, effort, and risks (BABOK Technique 10.7).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity:** Must strictly adhere to IIBA BABOK V3 standard definitions and professional enterprise terminology (e.g., *Need Assessment, Desired Outcomes, Assess Alternatives, Recommended Solution, Sunk Cost, Opportunity Cost, Total Cost of Ownership*).
> - **Executive Tone (Formality: High):** The target audience is the Board of Directors (BoD) and C-Suite. Focus strictly on strategic alignment, financial viability, and risk. Use high-impact, concise language suitable for PowerPoint slides.
> - **Mandatory "Do Nothing" Alternative:** You MUST evaluate "Do Nothing" (status quo) as the baseline option across all comparative sections (Alternatives, Costs, Benefits, Recommended Solution). You must explicitly justify why doing nothing is rejected, or conversely, recommend "Do Nothing" if the risk/cost of change outweighs the potential value.
> - **Economic Rigor:** Factor in *Opportunity Costs* and the Total Cost of Ownership (TCO). Completely ignore *Sunk Costs* (past expenditures that cannot be recovered).
> - **Input Validation:** Scan the Input Traceability Map before processing. If any mandatory input is missing, ambiguous, or conflict-prone, you MUST NOT proceed with generation.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If required inputs are unavailable or unclear in the user's context (e.g., unquantified project costs, missing risk mitigation budgets, or undefined future state metrics), you MUST immediately halt generation, pivot to advisory/inquiry mode, and request the User to provide the missing facts or clarify ambiguity. Never hallucinate, assume, or guess business reality.

# BUSINESS CASE (EXECUTIVE PRESENTATION)

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project | Project Charter or Kickoff Metadata]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD format of generation | Current Session Metadata]
**Target BABOK Tasks:** Task 6.4 (Define Change Strategy) & Task 7.6 (Analyze Potential Value)
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** `Change Strategy` (Task 6.4) -> Crucial for Section 1, 2, 5, 9, 10
*   [ ] **[Primary Input]** `Potential Value` (Task 6.2) -> Crucial for Section 1, 3, 6, 7, 10
*   [ ] **[Primary Input]** `Risk Analysis Results` (Task 6.3) -> Crucial for Section 8, 10
*   [ ] **[Primary Input]** `Business Objectives` (Task 6.2) -> Crucial for Section 4, 7
*   [ ] **[Primary Input]** `Current State Description` (Task 6.1) -> Crucial for Section 2, 3
*   [ ] **[Primary Input]** `Business Requirements` (Task 6.1) -> Crucial for Section 2

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Executive Summary** | Core value metrics, selected option, total investment, ROI, payback period | `Potential Value` / `Change Strategy` / `Risk Analysis Results` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Need Assessment** | Current state problem statement, corporate strategic goals alignment | `Business Requirements` (Section 1) / `Current State Description` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Cost of Inaction** | Current state ongoing losses, inefficiency expenses, risk costs of doing nothing | `Potential Value` (Section 3) / `Current State Description` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 4: Desired Outcomes** | SMART business objectives, baseline vs target state metrics | `Business Objectives` (Section 2 & 3) | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 5: Assess Alternatives** | Evaluated strategic alternatives including Option A: Do Nothing | `Change Strategy` (Section 3) | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 6: Expected Costs** | Total Cost of Ownership (TCO) Capex and Opex over 3-5 years | `Potential Value` (Section 2) | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 7: Expected Benefits** | Quantified financial benefits, qualitative improvements, ROI, payback timeline | `Potential Value` (Section 1) / `Business Objectives` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 8: Risk Assessment** | Top strategic risks, treatment strategies, residual risk levels | `Risk Analysis Results` (Section 3 & 4) | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 9: Timeline** | Strategic transition states, release phases, major value milestones | `Change Strategy` (Section 5) | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 10: Recommended Solution** | Formal strategic recommendation, final justification, budget ask | `Change Strategy` (Section 4) / `Potential Value` | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 📊 SLIDE MAPPING GUIDE
*For presentation export, map the sections below to the following executive slide structure:*

| Section | Target Slide # | Slide Title | Content Type |
| :--- | :--- | :--- | :--- |
| Section 1 | Slide 1-2 | Executive Summary | One-page strategic pitch & financial summary |
| Section 2 | Slide 3 | Need Assessment | Strategic drivers and current state operational pain |
| Section 3 | Slide 4 | Cost of Inaction | The quantified penalty of remaining in the status quo (Do Nothing) |
| Section 4 | Slide 5-6 | Desired Outcomes | Quantifiable future state targets (SMART metrics) |
| Section 5 | Slide 7 | Assess Alternatives | Multi-option comparison matrix including Do Nothing |
| Section 6 | Slide 8 | Expected Costs | 3-Year Total Cost of Ownership (Capex vs Opex breakdown) |
| Section 7 | Slide 9 | Expected Benefits | Quantitative ROI, qualitative gains, and value timeline |
| Section 8 | Slide 10 | Risk Assessment | Critical strategic risks, treatment actions, and residual exposures |
| Section 9 | Slide 11 | Timeline | Strategic roadmap, transition states, and release phases |
| Section 10| Slide 12 | Recommended Solution | Formal choice, investment ask, and strategic sign-off |

---

## 1. Executive Summary
> **🤖 AI AGENT INSTRUCTION:** Write a highly impactful, C-level executive summary suitable for an opening pitch slide. State the core business need, the chosen recommended strategy, the required financial investment, expected ROI, payback period, and conclude with the specific decision/action requested.

*   [INSERT: Executive Rationale | 3 high-impact, bulleted sentences summarizing the business need, solution, and strategic ROI | Potential Value (Section 3) / Change Strategy (Section 4)]

## 2. Need Assessment (The Problem)
> **🤖 AI AGENT INSTRUCTION:** Describe the business problem or opportunity triggering this change. Connect the operational pain points from the Current State Description with the overarching corporate strategy to show alignment.

*   **Problem/Opportunity:** [INSERT: Need Narrative | Statement of the core problem, operational defects, or market opportunities | Business Requirements (Section 1)]
*   **Strategic Alignment:** [INSERT: Alignment Statement | How addressing this need supports corporate strategy and goals | Business Requirements (Section 1)]

## 3. Cost of Inaction (The "Do Nothing" Scenario)
> **🤖 AI AGENT INSTRUCTION:** Explicitly calculate and detail the negative financial and strategic consequences of choosing Option A: Do Nothing. Show the Board the cost of remaining in the status quo.

*   🗣️ **EXECUTIVE TALKING POINT:** *"If we choose to Do Nothing and maintain the status quo, the cumulative operational leakage over 3 years is projected to be [INSERT: Currency Amount | e.g., $1.2M | Potential Value (Section 3)]. Every month of delay in implementing this change costs the enterprise approximately [INSERT: Currency Amount | e.g., $40,000 | Current State Description (Section 2)]."*

## 4. Desired Outcomes
> **🤖 AI AGENT INSTRUCTION:** Define the SMART, measurable results indicating success. Trace these directly from the Business Objectives, contrasting the Current State baseline against the Future State targets.

| # | Desired Outcome (SMART Statement) | Current State Baseline | Future State Target |
| :--- | :--- | :--- | :--- |
| 1 | [INSERT: Metric Name | e.g., Reduce Customer Dropout | Business Objectives] | [INSERT: Baseline Value | e.g., 35% | Current State Description] | [INSERT: Target Value | e.g., < 5% | Future State Description] |
| 2 | [INSERT: Metric Name | e.g., Order Processing Time | Business Objectives] | [INSERT: Baseline Value | e.g., 25 mins | Current State Description] | [INSERT: Target Value | e.g., < 2 mins | Future State Description] |

## 5. Assess Alternatives
> **🤖 AI AGENT INSTRUCTION:** Evaluate the strategic change options. You MUST evaluate Option A: Do Nothing as the baseline comparison. Assess Expected Costs (excluding sunk costs), implementation timeline, risk profiles, and Opportunity Costs.

| Evaluation Criteria | Option A: Do Nothing | Option B: [INSERT: Option B Title | e.g., Custom Build] | Option C: [INSERT: Option C Title | e.g., SaaS Integration] |
| :--- | :--- | :--- | :--- |
| **Expected Cost (TCO)** | [INSERT: Cost | e.g., $1.2M in leakage | Potential Value] | [INSERT: Cost | e.g., $600K Capex | Potential Value] | [INSERT: Cost | e.g., $300K Capex | Potential Value] |
| **Time to Value** | [INSERT: Timeline | e.g., Immediate ongoing losses] | [INSERT: Timeline | e.g., 18 months | Change Strategy] | [INSERT: Timeline | e.g., 4 months | Change Strategy] |
| **Feasibility & Risk** | [INSERT: Risk | e.g., Extreme long-term risk | Risk Analysis] | [INSERT: Risk | e.g., High dev risk | Risk Analysis] | [INSERT: Risk | e.g., Low integration risk | Risk Analysis] |
| **Opportunity Cost** | [INSERT: Opportunity Cost | e.g., Loss of $1.5M efficiency gains] | [INSERT: Opportunity Cost | e.g., Internal resources locked for 18m] | [INSERT: Opportunity Cost | e.g., Minor custom flexibility lost] |

## 6. Expected Costs (Total Cost of Ownership)
> **🤖 AI AGENT INSTRUCTION:** Present the financial investment required for the recommended solution. Explicitly separate Capex/Implementation (Year 1) from long-term Opex/Maintenance (Years 2 & 3). Contrast this against the Do Nothing cost.

| Option | Year 1 (Capex / Implementation) | Year 2 (Opex / Maintenance) | Year 3 (Opex / Maintenance) | Total TCO (3 Years) |
| :--- | :--- | :--- | :--- | :--- |
| **Option A: Do Nothing** | $0 | [INSERT: Cost | e.g., $400K | Potential Value] | [INSERT: Cost | e.g., $400K | Potential Value] | **[INSERT: Cost | e.g., $1.2M | Potential Value]** |
| **Recommended Option** | [INSERT: Year 1 Cost | e.g., $200K | Potential Value] | [INSERT: Year 2 Cost | e.g., $50K | Potential Value] | [INSERT: Year 3 Cost | e.g., $50K | Potential Value] | **[INSERT: Total Cost | e.g., $300K | Potential Value]** |

## 7. Expected Benefits (Value Realization)
> **🤖 AI AGENT INSTRUCTION:** Detail the financial and strategic returns of the recommended solution. Highlight the Return on Investment (ROI) and the payback period. Show both quantitative returns and qualitative benefits.

*   **Quantitative Benefits:** [INSERT: Quantitative List | e.g., "$1.5M in cumulative operational savings over 3 years" | Potential Value (Section 1)]
*   **Qualitative Benefits:** [INSERT: Qualitative List | e.g., "Enhanced customer trust, mitigated regulatory audit failures" | Potential Value (Section 1)]
*   🗣️ **EXECUTIVE TALKING POINT:** *"The recommended solution requires a Total 3-Year Investment of [INSERT: Total Cost | e.g., $300K | Potential Value (Section 2)], yielding a Cumulative 3-Year Return of [INSERT: Total Benefit | e.g., $1.5M | Potential Value (Section 1)]. This delivers a Net Value of [INSERT: Net Value | e.g., $1.2M | Potential Value (Section 3)], resulting in an ROI of [INSERT: Percentage | e.g., 400% | Potential Value] and a Payback Period of [INSERT: Months | e.g., 8 months | Potential Value]."*

## 8. Risk Assessment
> **🤖 AI AGENT INSTRUCTION:** Highlight the top strategic risks associated with the recommended solution. For each, list the Risk Level, the recommended treatment strategy, and the expected residual risk post-treatment.

| Risk Event or Condition | Impact (H/M/L) | Treatment Strategy | Residual Risk Post-Treatment |
| :--- | :--- | :--- | :--- |
| [INSERT: Risk Event | e.g., User adoption resistance | Risk Analysis] | [INSERT: Level | e.g., High] | [INSERT: Strategy & Plan | e.g., Mitigate: Structured training | Risk Analysis] | [INSERT: Residual | e.g., Low] |
| [INSERT: Risk Event | e.g., Legacy data migration delays | Risk Analysis] | [INSERT: Level | e.g., High] | [INSERT: Strategy & Plan | e.g., Mitigate: Clean data early | Risk Analysis] | [INSERT: Residual | e.g., Medium] |

## 9. Timeline and Transition States
> **🤖 AI AGENT INSTRUCTION:** Outline the high-level roadmap showing major milestones, transition states, and when incremental business value is realized. Do not list day-to-day project tasks.

*   **Transition State 1 [INSERT: Target Date | e.g., Q1 2027 | Change Strategy (Section 5)]:** [INSERT: Milestone Description | e.g., "Deploy core registration SaaS to digital retail customer segment" | Change Strategy (Section 5)] -> *Value Milestone:* [INSERT: Value Realized | e.g., "Achieve initial 60% reduction in customer dropouts" | Change Strategy (Section 5)]
*   **Transition State 2 [INSERT: Target Date | e.g., Q3 2027 | Change Strategy (Section 5)]:** [INSERT: Milestone Description | e.g., "Fully integrate platform with legacy billing and rollout to corporate channels" | Change Strategy (Section 5)] -> *Value Milestone:* [INSERT: Value Realized | e.g., "Reach 100% target future state capabilities and complete value realization" | Change Strategy (Section 5)]

## 10. Recommended Solution and Ask
> **🤖 AI AGENT INSTRUCTION:** State the final strategic choice and present the formal investment ask to the C-suite or Board. Explicitly note that "Do Nothing" (maintaining the Current State) is a valid, logical final recommendation if the expected costs, risks, or opportunity costs of the change outweigh its benefits.

*   **Selected Solution Choice:** [INSERT: Selected Choice | Choose one: Option A: Do Nothing | Option B: Custom Build | Option C: SaaS Integration | Change Strategy (Section 4)]
*   **Final Rationale:** [INSERT: Final Rationale Narrative | Clear business justification explaining why the chosen option delivers the highest net value to the enterprise | Change Strategy (Section 4)]
*   **Formal Decision Requested:** [INSERT: Formal Ask Statement | e.g., "APPROVE budget of $300,000 to proceed with Option C (SaaS Integration) by Q1 2027" | Change Strategy (Section 4)] *(Note: If Option A is selected, request formal approval to close the initiative and maintain current operations).*

**Sponsor Approval Signature:** ___________________________ **Date:** ____________