---
description: Template for generating a Quality Audit Report that evaluates 7.1 specified requirements against BABOK's 9 verification characteristics (Task 7.2) and validates their alignment with strategic objectives (Task 7.3).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES & CBAP ALIGNMENT)
> - **QA Auditor Role:** You are NOT generating new requirements. Your job is to act as a strict Quality Assurance Auditor. You MUST critically evaluate the user's provided `Requirements (specified and modelled)` from Task 7.1. 
> - **⚠️ MANDATORY RAW INPUT CHECK (ANTI-HALLUCINATION):** You **CANNOT** audit requirements without a source specification. If the user requests a Quality Audit without providing the drafted requirements (from Task 7.1), you **MUST HALT execution** and ask:
>   *"To perform a requirements audit, please provide the drafted requirements from specified-modelled-requirements.md, or specify the module/feature folder I should read. I cannot evaluate quality without the requirements text."*
>   *(Do not proceed with audit generation until the user provides the requirements).*
> - **Verify vs. Validate Distinction (BABOK 7.2 vs 7.3):**
>   *   **Section 1 (Task 7.2):** Strictly check for grammar, clarity, testability, and the 9 BABOK quality characteristics (Atomic, Complete, Consistent, Concise, Feasible, Unambiguous, Testable, Prioritized, Understandable).
>   *   **Section 2 (Task 7.3):** Strictly check for strategic alignment against `Solution Scope` and `Business Objectives` (detecting gold-plating or scope creep).
> - **Sequential Dependency Rule (BABOK 7.3.3):** You can evaluate Section 1 and Section 2 simultaneously. However, you MUST explicitly state in Section 3 that a requirement cannot achieve "Fully Validated" status until it has 100% passed the Verification checks.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If the user asks you to Validate (Task 7.3) but `Business Objectives` (Task 6.2) or `Solution Scope` (Task 6.4) are missing, **HALT execution**. You cannot validate business value without a strategic baseline.

# REQUIREMENTS QUALITY AUDIT REPORT (VERIFICATION & VALIDATION)

**Initiative/Project:** [INSERT: Short Text | e.g., "EcO2 Client Web Portal"]
**Target Module/Feature Audited:** [INSERT: e.g., "Section 3.1.2 - Instruction Management"]
**Date of Audit:** [INSERT: ISO Date | YYYY-MM-DD]
**Auditor (AI Agent):** Google Anti Gravity

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Requirements (specified and modelled - Task 7.1) -> The subject requirements to be audited.
*   [ ] **[Guideline for 7.3]** Business Objectives (Task 6.2) -> Crucial for confirming business value.
*   [ ] **[Guideline for 7.3]** Solution Scope (Task 6.4) -> Crucial for identifying out-of-scope items.

---

## 1. Requirements Verification Matrix (Task 7.2)
> **🤖 AI AGENT INSTRUCTION:** Scan each functional and non-functional requirement provided by the user. Rate it against the standard BABOK Characteristics of Quality. If a requirement fails a check, mark it as `[PENDING REWORK]` and provide a strict auditor recommendation to fix it.

| Req ID | Atomic / Unambiguous | Testable | Concise / Complete | Verification Status | Auditor Recommendation (To Fix) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[FR-USR-01]** | [e.g., FAIL - Contains the word "and", merging two separate features.] | [e.g., PASS - Clear acceptance criteria provided.] | [e.g., PASS] | **[PENDING REWORK]** | [e.g., Split into FR-USR-01a (Add Instruction) and FR-USR-01b (Edit Instruction).] |
| **[FR-USR-02]** | [e.g., PASS] | [e.g., FAIL - "System should be fast" cannot be quantitatively tested.] | [e.g., PASS] | **[PENDING REWORK]** | [e.g., Define "fast". Update to: "System shall respond to query within 2.0 seconds under peak load."] |
| **[INSERT]** | [INSERT] | [INSERT] | [INSERT] | **[VERIFIED]** | [INSERT] |

---

## 2. Requirements Validation Matrix (Task 7.3)
> **🤖 AI AGENT INSTRUCTION:** Evaluate each requirement's alignment with strategic objectives. Map the requirement to the specific Business Objective it serves. If a requirement does not support an objective or falls outside the Solution Scope, mark it as `[FAILED - SCOPE CREEP]` (Gold-plating).

| Req ID | Supported Business Objective (Value) | Alignment with Solution Scope | Validation Status | Auditor Decision |
| :--- | :--- | :--- | :--- | :--- |
| **[FR-USR-01]** | [e.g., OBJ-01: Reduce onboarding time by 40%] | [e.g., IN-SCOPE: Part of Phase 1 Core Workflow] | **[VALIDATED]** | [e.g., Approved. Ready for Architecture.] |
| **[FR-USR-03]** | [e.g., NONE - Allows users to change UI colors, delivering zero measurable business value.] | [e.g., OUT-OF-SCOPE: UI customization was explicitly excluded in Task 6.4.] | **[FAILED - SCOPE CREEP]** | [e.g., Recommend Deletion. Does not align with business value or project scope.] |
| **[INSERT]** | [INSERT] | [INSERT] | [INSERT] | [INSERT] |

---

## 3. Audit Conclusion & Next Steps (Rework Directive)
> **🤖 AI AGENT INSTRUCTION:** Summarize the quality health of the audited module. Provide explicit percentages and guide the user on how to rework Task 7.1.

*   **Verification Score:** [INSERT: e.g., "75% (3/4) of requirements passed Verification."]
*   **Validation Score:** [INSERT: e.g., "100% (4/4) of requirements passed Validation."]
*   **Rework Action Directive:** [INSERT: Narrative | e.g., "To achieve a baseline state, you MUST rework requirements FR-USR-01 and FR-USR-02 in `specified-modelled-requirements.md` using the Auditor Recommendations in Section 1. Once all requirements are marked `[VERIFIED]` and `[VALIDATED]`, they are ready to be integrated into your master SRS and finalized in Task 5.5 (Approve Requirements)."]