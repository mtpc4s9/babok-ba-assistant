#### description: Generates the Business Requirement Matrix to manage attributes, priorities, and traceability of high-level business requirements (BABOK Tasks 5.1, 5.2, 5.3).

### KA05: Business Requirement Matrix (BRM)

**🤖 AI AGENT INSTRUCTION (MATRIX POPULATION & ATTRIBUTE MANAGEMENT):** 
1. **Source Mapping & ID Decomposition Rule (C-Level vs. Detail):** 
   * **KA06 (High-Level Goals):** Documented at the C-level in `references/templates/ka06/business-requirements.md` using the format `BR-xx` (e.g., `BR-01` representing "Increase Revenue").
   * **KA05 (Detailed Objectives):** Decomposed for operational tracking in this matrix using the format `[Goal ID].[Objective ID]`, e.g., `BR-01.01` ("Increase energy division revenue by 10%") and `BR-01.02` ("Increase installation service revenue by 5%").
   * **Backward Traceability Hook:** When mapping detailed requirements in this matrix back to KA06 business goals, **you MUST extract the parent Goal ID prefix** (the `BR-xx` part, e.g., `BR-01`) to align with the strategic goals baseline.
2. **Absolute Reference Rule (BABOK 3.4.4.6):** Ensure every Business Requirement ID (e.g., `BR-01.01`) and Business Driver ID (e.g., `BD-03`) matches the upstream and downstream documents exactly.
3. **Prioritization Framework (Task 5.3):** Use MoSCoW notation (`High - Must Have`, `Medium - Should Have`, `Low - Could Have`). If priority is not provided by the user, shift to Advisory Mode and prompt the user to define it based on Value, Risk, or Cost.
4. **Dependencies (Task 5.1):** Accurately identify *Depends* or *Derive* relationships between Business Requirements.

---

# BUSINESS REQUIREMENT MATRIX
**Initiative/Project:** [INSERT: Project Name]
**Date of Update:** [INSERT: ISO Date]
**Phase / State:** [INSERT: e.g., Strategy Analysis / Pre-Project]

*This matrix establishes the foundational attributes, strategic priorities, and upstream traceability (to Business Drivers) for all Business Requirements. It serves as the single source of truth for executive stakeholders.*

| Business Req ID | Requirement Group | Business Requirement Statement | Related Rule ID | Related Driver ID | Driver Statement | Priority (MoSCoW) | Dependant BR ID | Req Source | Considerations |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BR-01.01** | [e.g., Product Management] | [INSERT: e.g., Create and maintain a product catalogue of Home Energy Products] | [INSERT: e.g., RU-01] | **[e.g., BD-03]** | [INSERT: Driver narrative bridging current and future state gap] | **[High - Must Have]** | [None] | [e.g., Retail Strategy Dept] | [INSERT: e.g., The BOM is the set of components required to make up the Home Energy Products.] |
| **BR-04.05** | [e.g., Sales] | [INSERT: e.g., Provide the Customer with a contract of sale] | [None] | **[e.g., BD-02]** | [INSERT] | **[High - Must Have]** | [BR-01.01] | [e.g., Retail Strategy Dept] | [INSERT: e.g., The contract must cater for a quote with three options. Electronic signature is acceptable.] |
| **BR-05.03** | [e.g., Fulfilment] | [INSERT: e.g., Monitor Supplier Performance based on agreed KPIs] | [e.g., RU-05] | **[e.g., BD-05]** | [INSERT] | **[Medium - Should Have]** | [None] | [e.g., Retail Strategy Dept] | [INSERT: e.g., The measurements required for these KPIs must be captured so they can be reported on.] |
| **[BR-xx]** | [INSERT] | [INSERT] | [INSERT] | **[INSERT]** | [INSERT] | **[INSERT]** | [INSERT] | [INSERT] | [INSERT] |

---

#### ✍️ GOVERNANCE & MAINTENANCE STATUS (Tasks 5.2 & 5.5)
**🤖 AI AGENT INSTRUCTION:** Update this section whenever the matrix undergoes a formal review or change assessment (Task 5.4).

*   **Matrix Status:** [DRAFT / APPROVED / BASELINED]
*   **Maintained For Reuse (Task 5.2):** [Yes/No - Indicate if these business requirements reflect ongoing organizational capabilities to be saved in the enterprise repository]
*   **Last Approved By:** [INSERT: Sponsor/Executive Name]