---
description: Task definitions for KA07 Requirements Analysis and Design Definition (Tasks 7.1-7.6) including Purpose, Inputs, Outputs, and iterative template mapping.
---

# KA07: Requirements Analysis and Design Definition — Tasks Reference

> **🤖 AI AGENT INSTRUCTION (WORKFLOW EXECUTION & MICRO-LOOP):**
> You MUST execute `references/advisor/readiness-check.md` before generating any Output. Guidelines and Stakeholders for these tasks are managed entirely by `guidelines-tools.md` and `stakeholders.md` within this folder. NEVER infer or hallucinate them.
> 
> **⚠️ CRITICAL ITERATIVE RULE (THE SEQUENTIAL BRIDGE MODEL):**
> Tasks 7.1, 7.2, and 7.3 are heavily coupled.
> 1. Use `specified-modelled-requirements.md` to generate Task 7.1 chunks.
> 2. Immediately prompt the user to audit the chunk using Tasks 7.2 & 7.3.
> 3. If approved, load `requirements-quality-audit.md` to perform the QA Audit.
> 
> *Note:* Task 7.4 (Architecture) accepts Requirements in ANY STATE (raw, verified, or validated), so it can run independently of the 7.2/7.3 approval.

---

## Task 7.1: Specify and Model Requirements

*   **Purpose:** To analyze, synthesize, and refine elicitation results into requirements and designs.
*   **Inputs:** Elicitation Results (any state).
*   **Outputs:**
    *   **Requirements (specified and modelled)** → Use [specified-modelled-requirements.md](../../templates/ka07/specified-modelled-requirements.md)
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Transforming raw notes into Text, Matrices, and Diagrams at the right level of abstraction.
    *   *Exam Trap:* "Requirements (specified and modelled)" is an umbrella term in BABOK. It means ANY combination of text and models (like an SRS, BRD, or FRD), not a specific software document.

## Task 7.2: Verify Requirements

*   **Purpose:** To ensure that requirements and designs specifications and models meet quality standards and are usable for the purpose they serve.
*   **Inputs:** Requirements (specified and modelled).
*   **Outputs:**
    *   **Requirements (verified)** → Use [requirements-quality-audit.md](../../templates/ka07/requirements-quality-audit.md) (Section 1)
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Quality Control. Checking for the 9 characteristics: Atomic, Complete, Consistent, Concise, Feasible, Unambiguous, Testable, Prioritized, Understandable.
    *   *Exam Trap:* **Verify != Validate.** Verification is about building the thing *right* (no spelling errors, fully testable). It does NOT care if the requirement actually delivers business value.

## Task 7.3: Validate Requirements

*   **Purpose:** To ensure that all requirements and designs align to the business requirements and support the delivery of needed value.
*   **Inputs:** Requirements (specified and modelled).
*   **Outputs:**
    *   **Requirements (validated)** → Use [requirements-quality-audit.md](../../templates/ka07/requirements-quality-audit.md) (Section 2)
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Value and Strategic Alignment. Am I building the *right* thing?
    *   *Exam Trap:* A requirement can be perfectly verified (testable, atomic) but fail validation because it is out of the Solution Scope (Gold-plating). Validation MUST check against Business Objectives.

## Task 7.4: Define Requirements Architecture

*   **Purpose:** To ensure that the requirements collectively support one another to fully achieve the objectives.
*   **Inputs:** Requirements (any state), Information Management Approach, Solution Scope.
*   **Outputs:**
    *   **Requirements Architecture** → Use [requirements-architecture.md](../../templates/ka07/requirements-architecture.md)
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Viewpoints, Views, and Interrelationships to ensure completeness.
    *   *Exam Trap:* **Traceability (5.1) vs Architecture (7.4).** Traceability ensures lineage (where it came from). Architecture ensures the components *work in harmony* as a cohesive whole.

## Task 7.5: Define Design Options

*   **Purpose:** To define the solution approach, identify opportunities to improve the business, allocate requirements across solution components, and represent design options that achieve the desired future state.
*   **Inputs:** Change Strategy, Requirements (validated, prioritized), Requirements Architecture.
*   **Outputs:**
    *   **Design Options** → Use [design-options.md](../../templates/ka07/design-options.md)
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Deciding Create vs. Purchase vs. Combination, and performing *Requirements Allocation* into releases or components.
    *   *Exam Trap:* Task 7.5 formulates the options and maps the requirements to them, but you MUST NOT select the final winner here.

## Task 7.6: Analyze Potential Value and Recommend Solution

*   **Purpose:** To estimate the potential value for each design option and to establish which one is most appropriate to meet the enterprise's requirements.
*   **Inputs:** Potential Value, Design Options.
*   **Outputs:**
    *   **Solution Recommendation** → Use [solution-recommendation.md](../../templates/ka07/solution-recommendation.md)
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Executive decision-making based on Net Benefit (Expected Benefits - Expected Costs).
    *   *Exam Trap:* You MUST ignore *Sunk Costs* (money already spent) and heavily factor in *Opportunity Costs* (value of the alternative given up) when making the recommendation.