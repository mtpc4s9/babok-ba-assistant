---
description: Template for generating the Requirements Architecture to ensure that all requirements form a cohesive whole, mapping them into specific Viewpoints and identifying their interrelationships (BABOK Task 7.4).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES & CBAP ALIGNMENT)
> - **Any State Input Rule (BABOK 7.4.3):** You **MUST** accept `Requirements (specified and modelled)` from Task 7.1 in **ANY state**. In accordance with standard BABOK principles, you do NOT block execution if the requirements are still in their raw state and have not yet been Verified (Task 7.2) or Validated (Task 7.3).
> - **⚠️ MANDATORY INPUT CHECK (ANTI-HALLUCINATION):** You **CANNOT** define an architecture without requirements. If the user requests a Requirements Architecture without providing the source requirements (from Task 7.1), you **MUST HALT execution** and ask:
>   *"To define the Requirements Architecture, please provide the requirements (raw or verified) from specified-modelled-requirements.md or point me to the feature module I should read. I cannot model viewpoints or define interrelationships without a source requirement set."*
>   *(Do not proceed with architecture generation until the user provides the requirements).*
> - **Architecture vs. Traceability (Anti-Hallucination):** You are NOT creating a traceability matrix (Task 5.1). Your goal is to structure the requirements to show how they *interact* and *support* one another to form a complete solution (e.g., how a Process requirement interacts with a Data or Security requirement).
> - **Viewpoints & Views (BABOK 7.4.4.1):** Group the provided requirements into standardized viewpoints (e.g., Process View, Data View, User Interaction View) so different stakeholders can consume the information holistically.
> - **Completeness Check (BABOK 7.4.4.3):** Actively scan the grouped requirements to identify if any pieces are missing (e.g., "We have a requirement to display data, but no requirement to capture it").

# REQUIREMENTS ARCHITECTURE

**Initiative/Project:** [INSERT: Short Text | e.g., "EcO2 Client Web Portal"]
**Date of Architecture Definition:** [INSERT: ISO Date | YYYY-MM-DD]
**Architect (AI Agent):** Google Anti Gravity

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Requirements (any state - Task 7.1) -> The raw or verified requirements to be structured.
*   [ ] **[Guideline]** Information Management Approach (Task 3.4) -> Defines how models are stored and linked.
*   [ ] **[Guideline]** Solution Scope (Task 6.4) -> Ensures the architecture aligns with project boundaries.

---

## 1. Architectural Viewpoints & Views (BABOK 7.4.4.1)
> **🤖 AI AGENT INSTRUCTION:** Based on the requirements provided by the user, categorize them into specific architectural views. Only include views that are relevant to the provided data.

### 1.1 Process & Activity View
*(Focus: How work flows and sequences of activities)*
*   **Included Requirements:** [INSERT: Comma-separated list of Req IDs, e.g., FR-USR-01, FR-USR-02]
*   **System Interaction Model:** [INSERT: Narrative describing how these requirements string together to form a complete business process.]

### 1.2 Data & Information View
*(Focus: The data models, state transitions, and information exchange)*
*   **Included Requirements:** [INSERT: Comma-separated list of Req IDs]
*   **Data Consistency Model:** [INSERT: Narrative explaining how data is captured, manipulated, and stored across these requirements.]

### 1.3 User Interaction & Role View
*(Focus: How different personas interact with the solution boundaries)*
*   **Included Requirements:** [INSERT: Comma-separated list of Req IDs]
*   **Role Interaction Model:** [INSERT: Narrative explaining how specific roles (e.g., Admin vs User) navigate these requirements.]

---

## 2. Requirement Interrelationships (BABOK 7.4.4.4)
> **🤖 AI AGENT INSTRUCTION:** Identify specific dependencies *between* the requirements that dictate how the solution must be constructed (e.g., Necessity, Effort).

| Source Requirement | Target Requirement | Relationship Type (Depends / Derive) | Architectural Impact (Why this relationship matters) |
| :--- | :--- | :--- | :--- |
| **[FR-USR-01]** | [NFR-SEC-01] | [Depends - Necessity] | [e.g., "The user creation process cannot be built until the Role-Based Access Control (RBAC) security rules are implemented."] |
| **[INSERT]** | [INSERT] | [INSERT] | [INSERT] |

---

## 3. Completeness & Integrity Check (BABOK 7.4.4.3)
> **🤖 AI AGENT INSTRUCTION:** Analyze the architecture above. Are there any "orphan" requirements that don't fit into the cohesive whole? Are there any logical gaps in the process or data views?

*   **Identified Gaps (Missing Requirements):** [INSERT: Narrative | e.g., "The architecture shows an entity state transition for 'User Activated', but there is no explicit requirement defining how an Admin deactivates a user."]
*   **Conflicting Requirements:** [INSERT: Narrative | e.g., "None identified" or describe any logical contradictions between grouped requirements.]
*   **Rework Recommendation:** [INSERT: Next steps for the Business Analyst to resolve the gaps in `specified-modelled-requirements.md` (Task 7.1).]