---
description: Generates tactical Design Options based on validated requirements, including solution approaches, improvement opportunities, and requirements allocation across components (BABOK Task 7.5).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES & CBAP ALIGNMENT)
> - **Options Generation (Not Selection):** Your role in Task 7.5 is to generate and describe feasible *Design Options*. You MUST NOT evaluate their financial ROI or recommend a final solution here. (That is strictly reserved for Task 7.6).
> - **BABOK Alignment (7.5.4):** Every generated option MUST specify its *Solution Approach* (Create, Purchase, or Combination), identify *Improvement Opportunities*, and explicitly map *Requirements Allocation* to specific components.
> - **⚠️ SHARP NEGATIVE CONSTRAINT (ANTI-HALLUCINATION):** If the user has not provided `Requirements (validated)` (Output 7.3) and a `Change Strategy` (Output 6.4), HALT execution. You cannot design options without knowing the strategic direction and validated business value boundaries. Prompt the user for these inputs.

# DESIGN OPTIONS SPECIFICATION

**Initiative/Project:** [INSERT: Short Text]  
**Date of Design Formulation:** [INSERT: ISO Date | YYYY-MM-DD]  
**Target Audience:** [Select: Implementation SMEs | Project Manager | Sponsor]  

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements.

*   [ ] **[Primary Input]** Requirements (validated, prioritized - Task 5.3 & 7.3) -> Crucial for ensuring the designs solve actual needs.
*   [ ] **[Primary Input]** Change Strategy (Task 6.4) -> Defines what is feasible/allowed strategically.
*   [ ] **[Primary Input]** Requirements Architecture (Task 7.4) -> Ensures holistic design across all components.

---

## 1. Solution Approaches (BABOK 7.5.4.1)

> **🤖 AI AGENT INSTRUCTION:** Define the overarching approach for the proposed design options based on the Change Strategy constraints.

*   **Approach Type:** [Select: Create (In-house Custom) | Purchase (COTS/SaaS) | Combination]
*   **Rationale:** [INSERT: Brief justification connecting the approach to the Change Strategy constraints, e.g., "Due to the 3-month time constraint defined in the Change Strategy, a Purchase/COTS approach is prioritized."]

## 2. Improvement Opportunities (BABOK 7.5.4.2)

> **🤖 AI AGENT INSTRUCTION:** Identify opportunities to improve business operations that can be embedded into these design options.

*   **Increase Efficiencies:** [INSERT: E.g., "Automate the manual data entry process to reduce processing time by 40%."]
*   **Improve Access to Information:** [INSERT: E.g., "Provide a real-time dashboard for frontline staff to reduce escalation calls."]
*   **Identify Additional Capabilities:** [INSERT: E.g., "The COTS option includes a built-in mobile app module which is not currently requested but offers future value."]

---

## 3. Design Options Evaluation (BABOK 7.5.4.4)

> **🤖 AI AGENT INSTRUCTION:** Generate at least two distinct design options. Describe the structural components of each option (e.g., IT systems, processes, organizational structures).

### Option A: [INSERT: Option Name | e.g., "Cloud-based SaaS Integration"]
*   **Description:** [INSERT: High-level narrative of how this option works.]
*   **Structural Components:**
    *   *Software/IT:* [INSERT: Technical components]
    *   *Business Processes:* [INSERT: Operational workflows required]
    *   *People/Roles:* [INSERT: Job functions operating this option]

### Option B: [INSERT: Option Name | e.g., "In-house Microservices Development"]
*   **Description:** [INSERT: High-level narrative of how this option works.]
*   **Structural Components:**
    *   *Software/IT:* [INSERT: Technical components]
    *   *Business Processes:* [INSERT: Operational workflows required]
    *   *People/Roles:* [INSERT: Job functions operating this option]

---

## 4. Requirements Allocation (BABOK 7.5.4.3)

> **🤖 AI AGENT INSTRUCTION:** Demonstrate how the highest-priority validated requirements are allocated to the components or release phases of each Design Option to maximize value.

| Requirement ID | Allocated to Option A (Component/Release) | Allocated to Option B (Component/Release) | Rationale for Allocation (Value Maximization) |
| :--- | :--- | :--- | :--- |
| [e.g., FR-01] | [e.g., Release 1: Core SaaS Module] | [e.g., Release 2: Custom API Gateway] | [e.g., "Option A allows immediate compliance out-of-the-box."] |
| **[INSERT]** | [INSERT] | [INSERT] | [INSERT] |

---

## 5. Next Step Verification (Sequential Bridge Tollgate)

> **🤖 AI AGENT INSTRUCTION (TOLLGATE EXECUTION):**
> Display this block exactly to prompt the user for the next steps. These design options are evaluated in Task 7.6.

*   **Advisory Prompt:** "I have formulated the Design Options and completed the Requirements Allocation (Task 7.5). I have intentionally NOT selected a winner. To recommend the final solution, we must now calculate the expected costs, expected benefits, and opportunity costs. Are you ready to proceed to **Task 7.6: Analyze Potential Value and Recommend Solution**?"