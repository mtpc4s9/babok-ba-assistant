---
description: Pre-flight checklist for KA08 Solution Evaluation detailing required Guidelines (boundaries/direction) and Tools (prerequisite benchmark data) for Tasks 8.1-8.5.
---

# KA08: Solution Evaluation - Guidelines & Tools

> **🤖 AI AGENT INSTRUCTION (PRE-FLIGHT CHECKLIST & TOLLGATE):** You MUST execute this checklist before generating any artifact for KA08. Solution Evaluation relies heavily on upstream artifacts from Strategy Analysis (KA06).
> *   **Guidelines** provide the instructions, benchmarks, and expectations for the solution.
> *   **Tools** are the scoped boundaries used to analyze performance gaps.
> If a critical guideline/tool is missing, HALT execution, flag the **Missing Risk**, and prompt the user to provide the strategic context.

---

## Global Tool (Required for ALL KA08 Tasks: 8.1 - 8.5)
> **🤖 AI AGENT INSTRUCTION:** This tool is mandatory for every evaluation task.

*   **Solution Scope** (Output 6.4): The solution boundaries to measure and evaluate.
*   **⚠️ Missing Risk (CRITICAL):** If `solution-scope.md` is missing, you MUST NOT evaluate performance. State: *"I cannot evaluate the solution without knowing its boundaries. Please provide the Solution Scope."*

---

## Task 8.1: Measure Solution Performance & Task 8.2: Analyze Performance Measures
> **🤖 AI AGENT INSTRUCTION:** Focus: Defining metrics and comparing Actuals vs. Targets.

*   **Guidelines & Tools:**
    *   **Change Strategy** (Output 6.4): The change strategy used or in use to implement the potential value.
    *   **Future State Description** (Output 6.2): Boundaries of the proposed components and the potential value expected.
    *   **Requirements (validated)** (Task 8.1 only): A set of requirements analyzed and appraised to determine their value.
    *   **Risk Analysis Results** (Task 8.2 only): The overall level of risk and planned approaches, used to uncover new risks from performance variances.
*   **⚠️ Missing Risk:** If **Future State Description** is missing in 8.2, you cannot calculate the Variance because you lack the "Expected Target". Ask the user: *"What was the original target for this metric?"*

---

## Task 8.3: Assess Solution Limitations & Task 8.4: Assess Enterprise Limitations
> **🤖 AI AGENT INSTRUCTION:** Focus: Diagnosing the root causes of under-performance (Internal vs. External).

*   **Guidelines & Tools:**
    *   **Change Strategy** (Output 6.4): Used to understand how the solution was implemented.
    *   **Risk Analysis Results** (Output 6.3): The planned approach to modifying risks, used to assess risks specific to solution defects or enterprise culture.
    *   **Business Objectives** (Task 8.4 only): Considered when determining how external factors prevent the solution from meeting enterprise goals.
    *   **Future State Description** (Task 8.4 only): Used to understand what the enterprise was supposed to look like vs. its current culture/operations.
*   **⚠️ Missing Risk:** If **Risk Analysis Results** are absent, you cannot properly determine the disposition strategy (e.g., Mitigate vs. Accept) for identified limitations.

---

## Task 8.5: Recommend Actions to Increase Solution Value
> **🤖 AI AGENT INSTRUCTION:** Focus: Prescribing actions (e.g., Organizational Change, Retire Solution) based on limitation synthesis.

*   **Guidelines & Tools:**
    *   **Business Objectives** (Output 6.2): Considered in evaluating, measuring, and determining if the solution fulfills enterprise goals.
    *   **Current State Description** (Output 6.1): Provides the context within which the work needs to be completed. Used to assess alternatives, understand potential increased value, and highlight **unintended consequences** of the recommended alternatives.
*   **⚠️ Missing Risk (CBAP Trap):** If the **Current State Description** is not loaded before recommending "Retire the Solution" or "Organizational Change", the AI Agent might propose an action that breaks existing operations. Always check the current state first.
