#### description: Synthesizes internal and external limitations to recommend specific actions to increase solution value, strictly adhering to BABOK V3 recommendation categories (Task 8.5).

### KA08: Recommended Actions to Increase Solution Value

**🤖 AI AGENT INSTRUCTION (SYNTHESIS & SUNK COST SHIELD):** 
1. **Upstream Ingestion:** You MUST load `ka08/solution-limitations-assessment.md` (Task 8.3) and `ka08/enterprise-limitations-assessment.md` (Task 8.4). You cannot recommend an action without understanding both internal defects and external cultural/operational barriers [3].
2. **The Sunk Cost Shield (Zero-Hallucination):** When evaluating whether to Retire or Replace a solution, you MUST explicitly ignore any money or effort already spent (*Sunk Cost*) [4]. Base your recommendation ONLY on *Future Investment*, *Ongoing Maintenance Cost*, and *Opportunity Cost* [4].
3. **Strict Categorization:** Your recommended actions MUST fall into one of the 7 BABOK categories: Do Nothing, Organizational Change, Reduce Complexity of Interfaces, Eliminate Redundancy, Avoid Waste, Identify Additional Capabilities, or Retire the Solution [5, 6].

---

# RECOMMENDED ACTIONS REPORT
**Initiative/Project:** [INSERT: Project Name]
**Date of Recommendation:** [INSERT: ISO Date]
**Assessed By:** [INSERT: Lead Business Analyst / AI Agent]

## 1. Executive Summary of Limitations
*A synthesis of the factors creating differences between potential value and actual value [1].*
*   **Internal Solution Limitations (Task 8.3):** [INSERT: e.g., "The current RPA workflow has a hardcoded timeout constraint causing 15% of high-volume transactions to fail."]
*   **External Enterprise Limitations (Task 8.4):** [INSERT: e.g., "Warehouse staff lack the necessary data literacy to operate the new inventory dashboards, leading to manual workarounds."]

## 2. Adjust Solution Performance Measures (BABOK 8.5.4.1)
*Sometimes the solution is performing acceptably, but the metrics originally defined do not accurately reflect business goals. This section recalibrates those measures [2].*
*   **Metric to Adjust/Discard:** [INSERT: e.g., "System Uptime (99.9%)"]
*   **New Proposed Measure:** [INSERT: e.g., "Successful End-to-End Order Processing Rate"]
*   **Justification:** [INSERT: e.g., "High uptime does not reflect business value if the underlying process logic is flawed."]

## 3. Alternative Actions Assessment (BABOK 8.5.4.2)
**🤖 AI AGENT INSTRUCTION:** Evaluate potential actions to address the limitations identified in Section 1. Ensure the analysis considers Opportunity Cost (what we sacrifice to do this) [4].

| Alternative Action | BABOK Category | Description of Action | Expected Value / Benefit | Estimated Future Cost / Effort | Opportunity Cost |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Option A** | **Organizational Change** | [e.g., Develop a targeted 2-week training program for warehouse staff to eliminate manual workarounds.] | [e.g., Full realization of the $500K automated inventory savings.] | [e.g., $20K for training materials and overtime pay.] | [e.g., Warehouse managers will be pulled from daily operations for 2 weeks.] |
| **Option B** | **Retire the Solution** | [e.g., Decommission the legacy RPA tool and migrate to the new corporate API gateway.] | [e.g., Eliminates $150K/year in legacy licensing and maintenance.] | [e.g., $80K implementation cost.] | [e.g., IT team must delay the CRM upgrade project.] |
| **Option C** | **Do Nothing** | [e.g., Accept the 15% transaction failure rate and handle exceptions manually.] | [e.g., Zero upfront cost. No disruption to current operations.] | [e.g., Ongoing $50K/year in manual labor costs.] | [e.g., Inability to scale operations for the Q4 holiday peak.] |

## 4. Final Solution Recommendation
*The suggested, most appropriate action based on the evaluation of alternatives, designed to maximize value provided to the enterprise [1].*

*   **Recommended Action:** [INSERT: e.g., Option A (Organizational Change) & Option B (Retire the Solution)]
*   **Rationale (Sunk Cost Excluded):** [INSERT: e.g., "Despite the $1M previously invested in the RPA tool (Sunk Cost), the ongoing maintenance costs now exceed the $80K required to migrate to the API Gateway. Coupled with Organizational Change (Training), this path maximizes long-term value."]
*   **Next Steps:** Transition this recommendation back to **Strategy Analysis (Task 6.4 Define Change Strategy)** to execute the replacement phase, or to **Requirements Life Cycle Management (Task 5.4 Assess Requirements Changes)** to update the baseline.

---

**Next Step Routing:** 
*   If the recommendation requires formal C-Level / BoD approval, proceed to **Task 4.4 (Communicate Business Analysis Information)** and load `references/templates/ka08/executive-recommendation-pitch.md` to generate the presentation deck.
*   Otherwise, transition to **Task 6.4 (Define Change Strategy)** to execute the replacement phase.
