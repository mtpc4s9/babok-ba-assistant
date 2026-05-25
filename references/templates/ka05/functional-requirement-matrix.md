#### description: Generates the Functional Requirement Matrix to manage attributes, priorities, traceability, and maintenance of solution-level functional requirements (BABOK Tasks 5.1, 5.2, 5.3).

### KA05: Functional Requirement Matrix (FRM)

**🤖 AI AGENT INSTRUCTION (MATRIX POPULATION & ATTRIBUTE MANAGEMENT):** 
1. **Source Mapping (Zero-Hallucination):** You MUST extract the `Functional Requirement Statement` from `references/templates/ka07/specified-modelled-requirements.md` and the System Use Cases from `references/templates/ka07/use-cases-and-scenarios.md`. Do NOT invent new functional features here.
2. **Absolute Reference & ID Decomposition Rule:** 
   * Ensure every Functional Requirement ID (e.g., `FR-04.17`) is globally unique and never altered once assigned.
   * **Hierarchy Convention:** Format is `FR-[Parent Business Goal].[Sequential Sub-ID]`, e.g., `FR-04.17` represents Functional Requirement number 17 mapping under Business Goal `BR-04`.
3. **Traceability (Task 5.1):** 
   * *Backward:* Every FR MUST trace back to a valid `Related Business Req ID` (e.g., `BR-04.05` or `BR-01.01`) from the Business Requirement Matrix (`references/templates/ka05/business-requirement-matrix.md`).
   * *Forward:* Every FR MUST trace to a `System Use Case ID` (e.g., `SU001`) indicating how it will be implemented.
4. **Prioritization Framework (Task 5.3):** Use the IIBA standard MoSCoW notation (`High - Must Have`, `Medium - Should Have`, `Low - Could Have`). You MUST populate the `Basis for Prioritization` (e.g., Value, Cost, Risk, Regulatory) to justify the ranking.
5. **Maintenance (Task 5.2):** Assess if the requirement represents a generic capability that can be saved in the organizational repository for future reuse.

---

# FUNCTIONAL REQUIREMENT MATRIX
**Initiative/Project:** [INSERT: Project Name]
**Date of Update:** [INSERT: ISO Date]
**Phase / State:** [INSERT: e.g., Requirements Analysis / Sprint 1]

*This matrix establishes the foundational attributes, implementation priorities, and bidirectional traceability for all Functional Requirements. It acts as the primary life cycle control tool bridging business strategy and IT execution.*

| FR ID | Group | Functional Requirement Statement | Related BR ID (Backward Trace) | System Use Case (Forward Trace) | Priority (MoSCoW) | Basis for Prioritization (BABOK 5.3) | Dependencies (Depends / Derive) | Maintenance (Reuse & Status) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **FR-04.17** | [e.g., Product Mgmt] | [INSERT: e.g., "The system shall allow the product manager to perform product maintenance by assigning a Good/Better/Best classification."] | **[e.g., BR-01.01]** | **[e.g., SU001 - Define Product Cat.]** | **[High - Must Have]** | [e.g., Benefit & Risk: Core capability required for Phase 1 Go-Live.] | [None] | **Status:** [Approved] <br> **Reuse:** [Yes - Standard catalog model] |
| **FR-01.74** | [e.g., Orders] | [INSERT: e.g., "Call Centre Agents must have the ability to upload contracts received from the customer as attachments to a job."] | **[e.g., BR-04.05]** | **[e.g., SU019 - Prepare Paperwork]** | **[High - Must Have]** | [e.g., Compliance / Penalty: Legally mandated workflow.] | *Depends on:* [FR-04.17] | **Status:** [Draft] <br> **Reuse:** [No - Project specific] |
| **FR-07.21** | [e.g., Dispatch] | [INSERT: e.g., "The Field Force Partner must be able to allocate a resource, with the required skill set, to a Work Order."] | **[e.g., BR-05.03]** | **[e.g., SU024 - Allocate Resource]** | **[Medium - Should Have]** | [e.g., Cost / Effort: High UX value, but requires expensive 3rd party API integration.] | *Derives from:* [SU024] | **Status:** [Under Review] <br> **Reuse:** [Yes] |
| **[FR-xx]** | [INSERT] | [INSERT] | **[BR-xx]** | **[SU-xx - Name]** | **[INSERT]** | [INSERT] | [INSERT] | **Status:** [INSERT] <br> **Reuse:** [Yes/No] |

---

#### ✍️ GOVERNANCE & APPROVAL TRACKING (Tasks 5.2 & 5.5)
**🤖 AI AGENT INSTRUCTION:** Update this section whenever the matrix undergoes a formal baseline review or change assessment (Task 5.4).

*   **RTM Baseline Status:** [DRAFT / BASELINED v1.0 / UPDATED]
*   **Change Log:** [INSERT: Brief summary if priority or status changed, e.g., "FR-07.21 moved from Must Have to Should Have due to budget constraints."]
*   **Last Approved By:** [INSERT: Sponsor / Product Owner Name]
