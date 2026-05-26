#### description: Generates the Solution Performance Measures defining how the implemented solution will be evaluated against the original Business Objectives, including the actual data collected (BABOK Task 8.1).

### KA08: Solution Performance Measures

**🤖 AI AGENT INSTRUCTION (METRICS ALIGNMENT & ELICITATION HOOK):** 
1. **Upstream Alignment (Zero-Hallucination):** You MUST load `ka06/business-objectives.md` (Task 6.2). Every performance measure defined here MUST map directly to an existing `OBJ-xx`. If the Business Objectives are missing, HALT and request them.
2. **The Playbook Hook (Interactive Elicitation):** If the User asks you to "measure performance" but does NOT provide the raw operational data (e.g., actual processing times, user survey results, sample sizes), you MUST NOT hallucinate the numbers. 
   * **Action:** Shift to Advisory Mode. Load `references/advisor/elicitation-interview-playbook.md` (Focus on **Domain A: Strategy & Enterprise Performance** or **Domain E: Governance & Metrics**). 
   * **Prompt the User:** *"Chào Chủ nhân, để hoàn thiện Báo cáo Đo lường (Task 8.1), tôi không thể tự bịa ra số liệu. Vui lòng cung cấp cho tôi các kết quả thực tế sau thông qua phiên phỏng vấn nhanh: [Insert 3-5 Playbook Questions regarding Sample Size, Qualitative Feedback, and Quantitative Results]."*

---

# SOLUTION PERFORMANCE MEASURES
**Initiative/Project:** [INSERT: Project Name]
**Date of Measurement:** [INSERT: ISO Date]
**Solution Status:** [Operational Release / Pilot / Beta / Prototype]

## 1. Traceability to Business Objectives
*This section ensures that the solution is being evaluated against the strategic goals it was funded to achieve, not just technical system metrics (BABOK 8.1.4.2).*

| Measure ID | Related Objective ID | Business Objective (Target) | Measurement Type | 
| :--- | :--- | :--- | :--- |
| **SPM-01** | **[e.g., OBJ-01]** | [e.g., Reduce manual data entry transaction errors to < 0.5%] | [Quantitative] |
| **SPM-02** | **[e.g., OBJ-02]** | [e.g., Increase Call Center Agent satisfaction and workflow ease] | [Qualitative] |
| **[SPM-xx]** | **[OBJ-xx]** | [INSERT] | [Quantitative / Qualitative] |

## 2. Performance Measurement Definition & Collection Method
*Defines exactly how the data is gathered, ensuring accuracy, reproducibility, and avoiding skewed trends (BABOK 8.1.4.3).*

**🤖 AI AGENT INSTRUCTION:** Populate this based on the user's answers from the Elicitation Interview Playbook.

### [SPM-01]: [Insert Name, e.g., Transaction Error Rate]
*   **Indicator / Metric:** [INSERT: e.g., Percentage of invoices requiring manual correction.]
*   **Collection Method:** [INSERT: e.g., Automated database query from the ERP log.]
*   **Volume / Sample Size:** [INSERT: e.g., 10,000 transactions processed between Jan 1 and Jan 30.]
*   **Frequency & Timing:** [INSERT: e.g., Weekly aggregation, measured at Friday 5:00 PM.]

### [SPM-02]: [Insert Name, e.g., Agent Workflow Satisfaction]
*   **Indicator / Metric:** [INSERT: e.g., Average rating on a 5-point Likert scale (1=Poor, 5=Excellent).]
*   **Collection Method:** [INSERT: e.g., Focus Group & Online Survey (Technique 10.45).]
*   **Volume / Sample Size:** [INSERT: e.g., 50 Customer Service Agents out of 200 total staff.]
*   **Frequency & Timing:** [INSERT: e.g., One-time survey conducted 30 days post-Go-Live.]

## 3. Actual Performance Data (The Results)
**🤖 AI AGENT INSTRUCTION:** This is the raw data collected from the field. Do not analyze the variance here (Variance analysis belongs in Task 8.2). Simply record the baseline, the target, and the actuals.

| Measure ID | Baseline (Pre-Change) | Target (Expected Value) | Actual Performance (Collected Data) | Data Currency (Date) |
| :--- | :--- | :--- | :--- | :--- |
| **SPM-01** | [e.g., 4.5% Error Rate] | [e.g., < 0.5%] | **[e.g., 0.8% Error Rate]** | [e.g., 2026-05-20] |
| **SPM-02** | [e.g., 2.1 / 5.0 Rating] | [e.g., > 4.0 / 5.0 Rating] | **[e.g., 3.8 / 5.0 Rating]** | [e.g., 2026-05-22] |
| **[SPM-xx]** | [INSERT] | [INSERT] | **[INSERT]** | [INSERT] |
