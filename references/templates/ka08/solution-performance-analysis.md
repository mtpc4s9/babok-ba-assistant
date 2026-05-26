#### description: Analyzes raw performance measures to derive actionable insights regarding variances, trends, new risks, and overall value realization (BABOK Task 8.2).

### KA08: Solution Performance Analysis

**🤖 AI AGENT INSTRUCTION (ANALYTICAL SYNTHESIS):** 
1. **Upstream Data Ingestion:** You MUST load `ka08/solution-performance-measures.md` (Task 8.1) to retrieve the raw Actual vs. Target metrics, and `ka06/potential-value.md` to understand the original expected business value.
2. **Variance Calculation (Zero-Hallucination):** For each metric, calculate the exact percentage variance between Target and Actual. DO NOT invent numbers. If data is insufficient to establish a trend (e.g., only 1 day of data), state: *"Insufficient sample size for trend analysis (BABOK 8.2.4.3)."*
3. **Diagnostic Triangulation:** If there is a negative variance, you MUST propose a high-level Root Cause Hypothesis. However, DO NOT recommend a final action here (Action recommendations belong in Task 8.5).

---

# SOLUTION PERFORMANCE ANALYSIS REPORT
**Initiative/Project:** [INSERT: Project Name]
**Date of Analysis:** [INSERT: ISO Date]
**Analyzed By:** [INSERT: Lead Business Analyst / AI Agent]

## 1. Data Accuracy & Reliability (BABOK 8.2.4.4)
*Validates that the data collected in Task 8.1 is reproducible, repeatable, and free from temporary anomalies.*
*   **Sample Size Assessment:** [INSERT: E.g., "The sample size of 10,000 transactions over 30 days provides a statistically significant foundation for analysis."]
*   **Data Integrity Flags:** [INSERT: Note any corrupted logs or skewed responses, e.g., "Warning: Survey data for Metric SPM-02 may be skewed due to being collected on a public holiday."]

## 2. Variance & Trend Analysis (BABOK 8.2.4.3 & 8.2.4.5)
**🤖 AI AGENT INSTRUCTION:** Calculate the Variance. A negative variance means under-performance; a positive variance means over-performance.

| Measure ID | Indicator/Metric | Target | Actual | Variance (%) | Trend Observation (Time Period) | Root Cause Hypothesis |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SPM-01** | [e.g., Transaction Error Rate] | [< 0.5%] | **[0.8%]** | **[- 60% (Under-performing)]** | [e.g., Error rate spiked during the 3rd week of the month (Payroll period).] | [e.g., System struggles with high-volume batch processing.] |
| **SPM-02** | [e.g., Agent Workflow Satisfaction] | [> 4.0 / 5.0] | **[3.8 / 5.0]** | **[- 5% (Under-performing)]** | [e.g., Consistent downward trend since Go-Live.] | [e.g., New UI requires too many clicks (Usability constraint).] |
| **[SPM-xx]** | [INSERT] | [INSERT] | [INSERT] | [INSERT] | [INSERT] | [INSERT] |

## 3. Newly Uncovered Risks (BABOK 8.2.4.2)
*Performance measures often uncover new risks to the solution or the enterprise that were not identified during Strategy Analysis.*
*   **Risk 1:** [INSERT: E.g., "If the transaction error rate remains at 0.8%, there is a high compliance risk of failing the upcoming financial audit."]
*   **Risk 2:** [INSERT: E.g., "Low Agent satisfaction (3.8/5.0) increases the risk of staff turnover in the Call Center."]

## 4. Solution Performance vs. Desired Value (BABOK 8.2.4.1)
**🤖 AI AGENT INSTRUCTION:** Evaluate if the solution is delivering its *Potential Value*. Remember the BABOK trap: A system can be technically high-performing but deliver low business value, and vice versa.

*   **Value Realization Summary:** [INSERT: Narrative evaluating the big picture. E.g., "While the technical uptime (NFR) exceeds expectations at 99.99%, the business value is not being fully realized because the manual error rate (SPM-01) is cannibalizing the expected operational cost savings."]
*   **Next Step Routing:** Proceed to **Task 8.3 (Assess Solution Limitations)** to investigate if internal system defects are causing these variances, and **Task 8.4 (Assess Enterprise Limitations)** to check if external factors (like lack of training or poor culture) are the real culprits.
