#### description: Generates the Non-Functional Requirement Matrix to manage attributes, priorities, traceability, and maintenance of quality-of-service requirements (BABOK Tasks 5.1, 5.2, 5.3).

### KA05: Non-Functional Requirement Matrix (NFRM)

**🤖 AI AGENT INSTRUCTION (MATRIX POPULATION & ATTRIBUTE MANAGEMENT):** 
1. **Source Mapping (Zero-Hallucination):** You MUST extract the `Non-Functional Requirement Statement` from `ka07/specified-modelled-requirements.md` (specifically Task 10.30 NFR Analysis).
2. **Measurability Check:** Every NFR statement MUST be quantifiable and testable (e.g., time, volume, percentage). If a user provides a vague NFR ("must be secure"), shift to Advisory Mode and demand measurable metrics.
3. **NFR Attributes:** You MUST categorize each requirement using ONLY the 24 standard IIBA attributes from `Reference - RTM.md` (e.g., *Performance, Scalability, Security, Compliance, Availability, Data Migration, Usability*, etc.).
4. **Prioritization & Traceability:** Assign MoSCoW priorities and identify the *Basis for Prioritization*. Ensure *Backward Traceability* to a Business Requirement (BR-ID) and *Forward Traceability* to a specific Non-Functional Test Case.

---

# NON-FUNCTIONAL REQUIREMENT MATRIX
**Initiative/Project:** [INSERT: Project Name]
**Date of Update:** [INSERT: ISO Date]
**Phase / State:** [INSERT: e.g., Requirements Analysis / Architecture Design]

*This matrix manages the life cycle attributes of quality-of-service requirements. These requirements act as constraints on the solution design and define the criteria used to judge the operation of the system.*

| NFR ID | NFR Attribute (IIBA Standard) | Non-Functional Requirement Statement (Measurable) | Related BR ID (Backward Trace) | Mapping Test Case ID (Forward Trace) | Priority (MoSCoW) | Basis for Prioritization (BABOK 5.3) | Maintenance (Reuse & Status) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **NFR-01.01** | **Scalability** | [INSERT: e.g., "The marketing analytics system must have the capacity to cater for Home Services volumes according to year 1 to year 5 forecast sales numbers (up to 500,000 active records)."] | **[e.g., BR-02]** | [e.g., TC-LOAD-01] | **[High - Must Have]** | [e.g., Risk / Business Objective: System will crash under expected Year 2 holiday load if not met.] | **Status:** [Approved] <br> **Reuse:** [No - Project specific] |
| **NFR-02.04** | **Performance** | [INSERT: e.g., "Checking resource availability and matching the resource to a job should return a response in no longer than 5 seconds for 95% of queries."] | **[e.g., BR-05.07]** | [e.g., TC-PERF-02] | **[Medium - Should Have]** | [e.g., Cost / Effort: Desired UX, but high technical cost to implement caching layer.] | **Status:** [Under Review] <br> **Reuse:** [Yes - Enterprise standard] |
| **NFR-03.11** | **Compliance** | [INSERT: e.g., "All stored customer PII data must be encrypted at rest using AES-256 encryption to comply with data privacy regulations."] | **[e.g., BR-01.01]** | [e.g., TC-SEC-05] | **[High - Must Have]** | [e.g., Regulatory Penalty: Mandatory legal requirement.] | **Status:** [Approved] <br> **Reuse:** [Yes - Global IT Policy] |
| **[NFR-xx]** | **[INSERT: Attribute from RTM]** | [INSERT: Quantifiable Statement] | **[BR-xx]** | [INSERT] | **[INSERT]** | [INSERT] | **Status:** [INSERT] <br> **Reuse:** [Yes/No] |

---

#### ✍️ GOVERNANCE & APPROVAL TRACKING (Tasks 5.2 & 5.5)
**🤖 AI AGENT INSTRUCTION:** Update this section whenever the matrix undergoes a formal baseline review or change assessment (Task 5.4).

*   **RTM Baseline Status:** [DRAFT / BASELINED v1.0 / UPDATED]
*   **Change Log:** [INSERT: Brief summary if priority or status changed, e.g., "NFR-02.04 priority downgraded to Medium to meet initial release budget constraints."]
*   **Last Approved By:** [INSERT: Sponsor / Technical Architect Name]
