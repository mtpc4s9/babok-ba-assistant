#### description: Generates the Master Requirement Traceability Matrix (RTM) to provide end-to-end lineage from High-Level Business Needs down to Test Cases (BABOK Tasks 5.1, 5.2, 5.3).

### KA05: Master Requirement Traceability Matrix (RTM)

**🤖 AI AGENT INSTRUCTION (MATRIX POPULATION & ALIGNMENT):** 
1. **Master Synchronization (Zero-Hallucination):** You MUST NOT generate isolated data here. You MUST pull and merge data from `business-requirement-matrix.md` (for BRs), `functional-requirement-matrix.md` (for FRs), and `non-functional-requirement-matrix.md` (for NFRs).
2. **Backward Traceability (5.1):** Ensure every FR/NFR correctly traces back to its parent `BR ID`. If an FR/NFR does not have a parent BR, flag it as an orphan (⚠️ Gold-Plating Risk).
3. **Forward Traceability (5.1 - Satisfy & Validate):** Ensure every requirement maps forward to a `System Use Case` (Satisfy) and a `Mapping Test Case ID` (Validate). 
4. **Prioritization Consistency (5.3):** Check for priority conflicts. A `Low - Could Have` Business Requirement should typically not spawn a `High - Must Have` Functional Requirement.
5. **Maintenance & Status (5.2):** Use strict status terminology (`Approved`, `Not Approved`) and update test completion statuses (ST, SIT, UAT) to mark readiness for deployment.

---

# MASTER REQUIREMENT TRACEABILITY MATRIX
**Initiative/Project:** [INSERT: Project Name]
**Date of Update:** [INSERT: ISO Date]
**Phase / State:** [INSERT: e.g., Quality Assurance / Pre-Deployment]

*This matrix is the central backbone of Requirements Life Cycle Management. It provides absolute visibility into requirement lineage, ensuring all business drivers are satisfied by solution designs and comprehensively validated through testing.*

| High Level Req (HLR) | BR ID | Business Requirement Statement | BR Priority | FR / NF ID | Req Type | Solution Requirement Statement (FR/NFR) | Solution Priority | System Use Case Name (Satisfy) | Req Status (Task 5.2) | Mapping Test Case ID (Validate) | ST | SIT | UAT | Non-Functional Test |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **[e.g., HLR.02]** | **[e.g., BR-01.01]** | [INSERT: e.g., "Create and maintain a product catalogue of Home Energy Products"] | [High - Must Have] | **[e.g., FR-04.17]** | Functional | [INSERT: e.g., "Ability for the product manager to perform maintenance by assigning classifications."] | [High - Must Have] | [e.g., SU001 - Define Product Cat.] | [Approved] | [e.g., TC-CAT-01] | [ ] | [ ] | [x] | N/A |
| **[e.g., HLR.03]** | **[e.g., BR-04.05]** | [INSERT: e.g., "Provide the Customer with a contract of sale"] | [High - Must Have] | **[e.g., FR-01.74]** | Functional | [INSERT: e.g., "Call Centre Agents must have the ability to upload contracts received as attachments."] | [High - Must Have] | [e.g., SU019 - Prepare Paperwork] | [Not Approved] | [e.g., TC-DOC-05] | [ ] | [ ] | [ ] | N/A |
| **[e.g., HLR.05]** | **[e.g., BR-05.03]** | [INSERT: e.g., "Monitor Supplier Performance based on agreed KPIs"] | [Medium - Should Have] | **[e.g., NFR-02.04]** | Non-Functional | [INSERT: e.g., "Checking resource availability must return a response in < 5 seconds."] | [Medium - Should Have] | N/A (System-wide) | [Approved] | [e.g., TC-PERF-02] | [ ] | [x] | [ ] | [x] |
| **[INSERT]** | **[BR-xx]** | [INSERT] | [INSERT] | **[FR/NFR-xx]** | [INSERT] | [INSERT] | [INSERT] | [INSERT] | [INSERT] | [INSERT] | [ ] | [ ] | [ ] | [ ] |

---

#### ✍️ TRACEABILITY AUDIT & EXCEPTIONS
**🤖 AI AGENT INSTRUCTION:** After generating the matrix, you MUST perform a quick audit and list any traceability gaps here.
*   **Orphaned Solution Requirements (No BR Link):** [INSERT: List any FR/NFRs that do not trace back to a BR. State: "Warning: Potential Gold-Plating."]
*   **Unfulfilled Business Requirements (No FR/NFR Link):** [INSERT: List any BRs that have no corresponding FR/NFR. State: "Warning: Missing Scope / Unfulfilled Value."]
*   **Untested Requirements (No Test Case):** [INSERT: List any approved FR/NFRs lacking a mapped Test Case ID.]

---

#### 🔄 POST-APPROVAL MATRIX STATUS SYNCHRONIZATION (Task 5.5 Action)
**🤖 AI AGENT INSTRUCTION:** Once the Executive Requirements Approval Package or Board of Directors Pitch Deck has been formally signed off / approved (Task 5.5):
1. You **MUST** immediately load and update the `Req Status` column of the following matrices to `Approved` or `Baselined`:
   * `references/templates/ka05/business-requirement-matrix.md`
   * `references/templates/ka05/functional-requirement-matrix.md`
   * `references/templates/ka05/non-functional-requirement-matrix.md`
2. Update the `Req Status` column of this Master Traceability Matrix (`references/templates/ka05/requirement-traceability-matrix.md`) to `Approved` or `Baselined` for all successfully approved requirements to seal the requirements phase baseline.
