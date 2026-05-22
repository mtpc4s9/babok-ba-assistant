---
description: Task definitions for KA06 Strategy Analysis (Tasks 6.1-6.4) including Purpose, Inputs, Outputs, and template mapping for artifact generation.
---

# KA06: Strategy Analysis — Tasks Reference

> **🤖 AI AGENT INSTRUCTION (WORKFLOW EXECUTION):**
> You MUST execute `references/advisor/readiness-check.md` before generating any Output.
> Guidelines and Stakeholders for these tasks are managed entirely by `guidelines-tools.md` and `stakeholders.md` within this folder. NEVER infer or hallucinate them.
> If the Tollgate passes, load the explicitly mapped template below to generate the deliverable.
>
> **📋 TEMPLATE DESIGN NOTE:** Each Output maps to a single, atomic template file named after the BABOK canonical output (e.g., `current_state_description.md`). Fill one template at a time. When the user requests a final document, consolidate completed artifacts in the order defined in `references/templates/index.md` and export to the target format.

## Task 6.1: Analyze Current State
*   **Purpose:** To understand the reasons why an enterprise needs to change some aspect of how it operates and what would be directly or indirectly affected by the change.
*   **Inputs:** Needs, Elicitation Results (confirmed).
*   **Outputs:**
    *   **Current State Description** → Use `references/templates/ka06/current-state-description.md`
    *   **Business Requirements** → Use `references/templates/ka06/business-requirements.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Establishes the As-Is baseline.
    *   *Exam Trap:* Do not confuse *Stakeholders* (who actively participate) with *External Influencers* (who constrain but do not participate).

## Task 6.2: Define Future State
*   **Purpose:** To determine the set of necessary conditions to meet the business need.
*   **Inputs:** Business Requirements.
*   **Outputs:**
    *   **Future State Description** → Use `references/templates/ka06/future-state-description.md`
    *   **Business Objectives** → Use `references/templates/ka06/business-objectives.md`
    *   **Potential Value** → Use `references/templates/ka06/potential-value.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Defines SMART goals and boundaries of the solution space.
    *   *Exam Trap:* The Future State is the *final destination*. Intermediate rollout steps (Phase 1, Phase 2) are *Transition States* and belong exclusively to Task 6.4.

## Task 6.3: Assess Risks
*   **Purpose:** To understand the undesirable consequences of internal and external forces on the enterprise during a transition to, or once in, the future state.
*   **Inputs:** Business Objectives, Elicitation Results (confirmed), Influences (internal and external), Potential Value, Requirements (prioritized).
*   **Outputs:**
    *   **Risk Analysis Results** → Use `references/templates/ka06/risk-analysis-results.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Recommends action based on the organization's risk tolerance.
    *   *Exam Trap:* Memorize the risk treatment strategies: Avoid, Transfer, Mitigate, Accept, and Increase.

## Task 6.4: Define Change Strategy
*   **Purpose:** To develop and assess alternative approaches to the change, and then select the recommended approach.
*   **Inputs:** Current State Description, Future State Description, Risk Analysis Results, Stakeholder Engagement Approach.
*   **Outputs:**
    *   **Change Strategy** → Use `references/templates/ka06/change-strategy.md`
    *   **Solution Scope** → Use `references/templates/ka06/solution-scope.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Performs gap analysis and evaluates strategic alternatives.
    *   *Critical Dependency Warning:* The outputs of this task (Change Strategy, Solution Scope) are mandatory Guidelines for almost all tasks in KA07 and KA08. Do not proceed to those KAs without Sponsor sign-off on these artifacts.
    *   *Exam Trap:* Ignore *Sunk Costs*; only consider *Opportunity Costs* and future investments.
