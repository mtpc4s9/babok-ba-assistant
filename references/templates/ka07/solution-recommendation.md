---
description: Generates a high-level executive Solution Recommendation (Task 7.6) structured specifically for PowerPoint (.pptx) export. Focuses on financial value, expected benefits, and strategic trade-offs for C-level Sponsors.
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION & PPTX EXPORT RULES)
> - **Executive Pitch Role:** You are presenting to the Board of Directors (Sponsor). Do NOT output low-level technical requirements. Use extremely concise, high-impact bullet points. Focus on ROI, TCO, and Strategic Value.
> - **Slide-Deck Mapping:** This markdown is structured to be directly compiled into a `.pptx` file via the `export-to-office.py` script.
>   * Treat every `##` (H2) as a new Slide Title.
>   * Treat every bullet point as slide body text.
>   * Keep bullet text under 15 words per line to prevent slide crowding.
> - **Financial Integrity (BABOK 7.6.4.2 / 10.20):** You MUST explicitly state the *Opportunity Cost*. You MUST explicitly ignore *Sunk Costs*. Ensure *Expected Benefits* cover both Tangible (financial) and Intangible (reputation/compliance) aspects.
> - **⚠️ SHARP NEGATIVE CONSTRAINT (ANTI-HALLUCINATION):** If the `Design Options` (Task 7.5) or `Potential Value` (Task 6.2) are unknown, **HALT execution**. You cannot make a recommendation without options and strategic value metrics. Prompt the user for these inputs via an interactive Advisory Interview.
> - **⚠️ EXPORT TRIGGER:** After generating this content, explicitly prompt the user: *"The Executive Recommendation is ready. Shall I run the export script to generate the `.pptx` presentation deck for your Sponsor meeting?"*

# SOLUTION RECOMMENDATION (EXECUTIVE SUMMARY)

**Initiative:** [INSERT: Short Text]  
**Date:** [INSERT: ISO Date]  
**Audience:** Executive Sponsors & Board of Directors  

---

## 🗺️ INPUT TRACEABILITY MAP (DO NOT EXPORT TO PPTX)

Before generating content, verify the availability of the following input data elements.

*   [ ] **[Primary Input]** Design Options (Task 7.5) -> Provides the baseline alternatives.
*   [ ] **[Primary Input]** Potential Value (Task 6.2) -> Provides the benchmark for evaluating benefits.

---

## Slide 1: Executive Summary & Recommendation

> **🤖 AI AGENT INSTRUCTION:** Provide the bottom-line up front (BLUF). State the selected option clearly.

*   **The Business Need:** [INSERT: 1-sentence summary of the problem from Task 6.1]
*   **The Recommendation:** We recommend proceeding with **[INSERT: Selected Design Option Name]**.
*   **Why This Option:** [INSERT: 1-sentence strategic justification, e.g., "It delivers the highest ROI while aligning with our 6-month time-to-market constraint."]

## Slide 2: Expected Benefits (BABOK 7.6.4.1)

> **🤖 AI AGENT INSTRUCTION:** List the positive value (Tangible and Intangible) the recommended solution will deliver.

*   **Tangible (Financial) Benefits:**
    *   [INSERT: e.g., "Increases annual revenue by $1.2M via automated upselling."]
    *   [INSERT: e.g., "Reduces operational processing costs by 30%."]
*   **Intangible (Strategic) Benefits:**
    *   [INSERT: e.g., "Ensures 100% compliance with new GDPR data privacy laws."]
    *   [INSERT: e.g., "Improves brand reputation and customer satisfaction scores."]

## Slide 3: Expected Costs & TCO (BABOK 7.6.4.2)

> **🤖 AI AGENT INSTRUCTION:** Break down the Total Cost of Ownership (TCO) over a defined period (e.g., 3-5 years). Do NOT include Sunk Costs.

*   **Initial Capital Expenditure (CapEx):** [INSERT: e.g., "$500,000 for licensing and implementation."]
*   **Ongoing Operating Expenditure (OpEx):** [INSERT: e.g., "$100,000 annually for cloud hosting and support."]
*   **Total Cost of Ownership (3-Year TCO):** [INSERT: e.g., "$800,000"]
*   *Note: Previously incurred R&D costs of $50k (Sunk Costs) are excluded from this analysis.*

## Slide 4: Value Determination & Financials (BABOK 10.20)

> **🤖 AI AGENT INSTRUCTION:** Calculate the Net Benefit. Compare the recommended option against the "Do Nothing" baseline or next-best alternative.

*   **Expected Return on Investment (ROI):** [INSERT: e.g., "150% over 3 years."]
*   **Net Present Value (NPV) / Payback Period:** [INSERT: e.g., "Breakeven achieved in Month 14."]
*   **Opportunity Cost Evaluated:** [INSERT: e.g., "By selecting this option, we forgo the ability to customize the UI (the benefit of Option B), but we gain 6 months in market readiness."]

## Slide 5: Trade-offs & Rejected Options (BABOK 7.6.4.4)

> **🤖 AI AGENT INSTRUCTION:** Briefly explain why the other options (from Task 7.5) were rejected to show objective analysis.

*   **Option B [Name]:** Rejected. [INSERT Reason: e.g., "Development time exceeds our regulatory deadline."]
*   **Option C [Do Nothing]:** Rejected. [INSERT Reason: e.g., "Current system risks critical failure, costing $50k/day in downtime."]
*   **Recommendation Trade-off:** [INSERT: e.g., "We accept a higher annual OpEx to guarantee 99.99% uptime."]

## Slide 6: Next Steps for Approval (Task 5.5)

> **🤖 AI AGENT INSTRUCTION:** Define the immediate action required from the Sponsor.

*   **Action Required:** Sponsor Approval of this Solution Recommendation and its associated budget.
*   **Immediate Next Step (Post-Approval):** [INSERT: e.g., "Initiate Vendor Procurement (RFQ) and transition to execution phase."]