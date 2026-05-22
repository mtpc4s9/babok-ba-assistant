---
description: Definitive workflow patterns for aligning BABOK V3 execution sequences across Predictive (Waterfall), Adaptive (Agile), and Discovery (Feasibility) initiative types.
---

# ADVISOR: WORKFLOW PATTERNS

> ### 🤖 AI AGENT INSTRUCTION (WORKFLOW ORCHESTRATION & ANTI-HALLUCINATION)
> When a user asks "How do I structure my business analysis work?" or "What sequence of tasks should I follow?", identify their initiative methodology and recommend the appropriate execution pattern below. 
> ALWAYS remind the user that BABOK V3 tasks can be performed sequentially, iteratively, or simultaneously (BABOK 1.4.3) — however, these patterns represent optimal industry pathways.
> 
> **⚠️ ANTI-HALLUCINATION SHIELD:** Do not fabricate or invent new workflow sequences outside of the 3 canonical patterns described below. Ensure that any reference to active Knowledge Areas (KA03, KA04, KA06, KA07) is supported by their actual local path structures.

---

## 1. The Predictive (Waterfall) Pattern

*   **Context:** Used when minimizing upfront uncertainty is critical, regulatory compliance is high, and the solution must be fully defined before implementation begins.
*   **Execution Sequence:**
    1.  **Strategic Alignment:** Execute [KA06 (Strategy Analysis)](../ka/ka06-strategy/README.md) to define the Business Need and Change Strategy.
    2.  **Upfront Planning:** Execute [KA03 (Planning and Monitoring)](../ka/ka03-planning/README.md) to establish rigid governance, formal traceability, and stakeholder engagement approaches.
    3.  **Comprehensive Elicitation:** Execute [KA04 (Elicitation and Collaboration)](../ka/ka04-elicitation/README.md) to gather exhaustive raw requirements.
    4.  **Detailed Specification:** Execute [KA07 (Requirements Analysis and Design Definition)](../ka/ka07-radd/README.md) to generate the BRD/SRS, followed immediately by the rigorous 7.2 Verify and 7.3 Validate Tollgates.
    5.  **Formal Sign-off:** Execute KA05 (Requirements Life Cycle Management — *[Future Scope]*), specifically Task 5.5 (Approve Requirements) to establish the requirements baseline.
    6.  **Post-Deployment:** Execute KA08 (Solution Evaluation — *[Future Scope]*) to measure actual value against the baseline after go-live.

## 2. The Adaptive (Agile) Pattern

*   **Context:** Used when focusing on the rapid delivery of business value in short iterations and managing high degrees of uncertainty or emerging requirements.
*   **Execution Sequence:**
    1.  **Initial Vision & Backlog Setup:** Execute [KA06 (Strategy Analysis)](../ka/ka06-strategy/tasks.md) (Tasks 6.1 & 6.2) to define the product vision, followed immediately by KA05 (Task 5.3 Prioritize Requirements — *[Future Scope]*) to sequence the product backlog based on value.
    2.  **Just-In-Time Planning:** Execute [KA03 (Planning and Monitoring)](../ka/ka03-planning/README.md) using lightweight, highly collaborative approaches (e.g., planning one iteration at a time).
    3.  **The Iteration Micro-Loop (Continuous):**
        *   [KA04 (Elicitation)](../ka/ka04-elicitation/tasks.md) to explore the upcoming User Stories.
        *   [KA07 (RADD)](../ka/ka07-radd/tasks.md) to specify acceptance criteria just-in-time before development.
        *   KA05 (Requirements Life Cycle Management — *[Future Scope]*) to assess continuous changes and maintain the backlog.
    4.  **Continuous Evaluation:** Execute KA08 (Solution Evaluation — *[Future Scope]*) at the end of every iteration on the working software (prototypes/beta releases) to capture feedback.

## 3. The Discovery (Feasibility & Strategy) Pattern

*   **Context:** Used when the enterprise is facing a problem or opportunity, but no project has been approved yet. The objective is to secure funding or make a "Build vs. Buy" / "Do Nothing" decision.
*   **Execution Sequence:**
    1.  **Problem Definition:** Execute [KA06 - Task 6.1: Analyze Current State](../ka/ka06-strategy/tasks.md) to diagnose root causes and establish the baseline.
    2.  **Target Definition:** Execute [KA06 - Task 6.2: Define Future State](../ka/ka06-strategy/tasks.md) to set SMART Business Objectives and determine Potential Value.
    3.  **Risk & Feasibility:** Execute [KA06 - Task 6.3: Assess Risks](../ka/ka06-strategy/tasks.md) to evaluate enterprise readiness and potential pitfalls.
    4.  **Strategic Options:** Execute [KA07 - Task 7.5: Define Design Options](../ka/ka07-radd/tasks.md) to generate alternative approaches (e.g., COTS SaaS vs. Custom In-house).
    5.  **Executive Recommendation:** Execute [KA07 - Task 7.6: Analyze Potential Value and Recommend Solution](../ka/ka07-radd/tasks.md) to build the Business Case and secure Sponsor approval to initiate the project.