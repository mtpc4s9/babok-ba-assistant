---
description: Template for generating the Potential Value assessment comparing the expected benefits against expected costs and opportunity costs to justify the future state (BABOK Task 6.2).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity:** Must strictly adhere to IIBA BABOK V3 standard definitions and professional enterprise terminology (e.g., *Potential Value, Expected Benefits, Expected Costs, Opportunity Cost, Net Value*).
> - **Net Benefit Focus:** Perform an economic analysis where `Net Value = Expected Benefits - Expected Costs`. Enforce the clear separation between initial Implementation Costs (upfront Capex/Effort) and long-term Operational/Maintenance Costs (Opex) to calculate the Total Cost of Ownership (TCO).
> - **"Do Nothing" Benchmark:** Contrast the future state value against the risk/cost of remaining in the current state (doing nothing). Treat "Do Nothing" as the baseline alternative.
> - **Input Validation:** Scan the Input Traceability Map before processing. If any mandatory input is missing, ambiguous, or conflict-prone, you MUST NOT proceed with generation.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If required inputs are unavailable or unclear in the user's context (e.g., unquantified operational savings, missing systems integration costs, or undefined strategic benefits), you MUST immediately halt generation, pivot to advisory/inquiry mode, and request the User to provide the missing facts or clarify ambiguity. Never hallucinate, assume, or guess business reality.

# POTENTIAL VALUE ASSESSMENT

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project | Project Charter or Kickoff Metadata]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD format of generation | Current Session Metadata]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** `Future State Description` (Task 6.2) -> Crucial for Section 1, 2
*   [ ] **[Primary Input]** `Business Objectives` (Task 6.2) -> Crucial for Section 1, 3
*   [ ] **[Primary Input]** `Current State Description` (Task 6.1) -> Crucial for Section 2, 3
*   [ ] **[Primary Input]** `Elicitation Results (confirmed)` (Task 4.4) -> Crucial for Section 1, 2

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Expected Benefits** | Quantified business benefits, cost reductions, risk avoidance metrics, or strategic value | `Business Objectives` (Section 3) / `Future State Description` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Expected Costs** | TCO breakdowns, software licensing fees, vendor quotes, and internal implementation effort | `Elicitation Results (confirmed)` / `Current State Description` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Net Value & Strategic Justification** | Current state ongoing losses, inefficiency costs, and the risk of doing nothing | `Current State Description` (Section 2) / `Business Objectives` | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 1. Expected Benefits (Positive Value)
> **🤖 AI AGENT INSTRUCTION:** Detail the positive outcomes the future state is expected to deliver once operational. Explicitly trace these benefits back to the SMART Business Objectives. Include financial benefits (reclaimed revenues, lower opex), operational benefits, risk avoidance, and compliance/reputational value.

*   **Quantitative Benefits:** [INSERT: Quantitative Benefits List | Quantifiable financial value and efficiencies (e.g., "$1.5M annual operational cost reduction via automated underwriting") | Business Objectives (Section 2 - OBJ-01)]
*   **Qualitative Benefits:** [INSERT: Qualitative Benefits List | Non-monetized positive impacts (e.g., "Increased NPS, improved employee morale, and enhanced brand reputation in security compliance") | Future State Description (Section 3)]

## 2. Expected Costs (Negative Value)
> **🤖 AI AGENT INSTRUCTION:** Estimate the Total Cost of Ownership (TCO) required to transition to and sustain the future state. Distinguish clearly between initial capital investment and long-term operating costs.

*   **Implementation Effort (One-Time Capex):** [INSERT: Initial Investment Detail | High-level estimate of design, development, vendor licenses, training, data migration, and transition costs | Elicitation Results (confirmed) - IT Architect Estimates]
*   **Operating/Maintenance Costs (Ongoing Opex):** [INSERT: Ongoing Costs Detail | Long-term operational costs to sustain the future state (e.g., annual SaaS fees, infrastructure hosting, ongoing support staff) | Elicitation Results (confirmed) - IT Ops Budget]

## 3. Net Value & Strategic Justification
> **🤖 AI AGENT INSTRUCTION:** Synthesize the benefits, costs, and opportunity costs into a definitive strategic recommendation. Evaluate the "Cost of Doing Nothing" as the baseline.

*   **The Cost of Doing Nothing:** [INSERT: Cost of Inaction Narrative | The quantified and qualitative negative impact if the enterprise maintains the Current State (e.g., ongoing 20% order attrition, $100K/month legacy support) | Current State Description (Section 2)]
*   **Opportunity Cost:** [INSERT: Opportunity Cost Narrative | The value of alternative changes foregone or the loss of market competitive position due to selecting this specific change strategy | Elicitation Results (confirmed)]
*   **Net Value Proposition:** [INSERT: Net Value Statement | High-impact C-Suite synthesis showing the Net Value (Benefits - Costs) and explaining why this change is strategically justified | Business Objectives (Section 1)]