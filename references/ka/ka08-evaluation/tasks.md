---
description: Task definitions for KA08 Solution Evaluation (Tasks 8.1-8.5) including Purpose, Inputs, Outputs, and specific AI Agent routing instructions for diagnostic analysis.
---

# KA08: Solution Evaluation — Tasks Reference

> **🤖 AI AGENT INSTRUCTION (WORKFLOW EXECUTION):** 
> You MUST execute `references/advisor/readiness-check.md` before generating any Output. 
> **CRITICAL DATA FLOW RULE:** KA08 tasks have a strict sequential dependency. You cannot analyze performance (8.2) without raw measures (8.1). You cannot recommend actions (8.5) without assessing limitations (8.3 and 8.4). Always check the upstream input before executing a downstream task.

---

## Task 8.1: Measure Solution Performance
*   **Purpose:** To define performance measures and use the data collected to evaluate the effectiveness of a solution in relation to the value it brings.
*   **Inputs:** Business Objectives, Implemented Solution (external).
*   **Outputs:** 
    *   **Solution Performance Measures** → Use `references/templates/ka08/solution-performance-measures.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Data Collection. Gathering quantitative (e.g., transaction time) and qualitative (e.g., user satisfaction) data.
    *   *Exam Trap:* Do NOT analyze the variance here. This task only defines *how* to measure and *what* the raw numbers are.
    *   *AI Hook:* If raw data is missing, launch `elicitation-interview-playbook.md`.

---

## Task 8.2: Analyze Performance Measures
*   **Purpose:** To provide insights into the performance of a solution in relation to the value it brings.
*   **Inputs:** Potential Value, Solution Performance Measures.
*   **Outputs:** 
    *   **Solution Performance Analysis** → Use `references/templates/ka08/solution-performance-analysis.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Diagnostics. Calculating the variance between Target and Actual, identifying trends, and uncovering new risks.
    *   *Exam Trap:* High technical performance (e.g., 99.9% uptime) does not automatically equal high business value. Always compare against *Potential Value*.

---

## Task 8.3: Assess Solution Limitations
*   **Purpose:** To determine the factors internal to the solution that restrict the full realization of value.
*   **Inputs:** Implemented Solution (external), Solution Performance Analysis.
*   **Outputs:** 
    *   **Solution Limitation** → Use `references/templates/ka08/solution-limitations-assessment.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Internal hardware/software components (e.g., defects, hardcoded limits, database latency).
    *   *Exam Trap:* If the limitation involves user training, corporate policies, or organizational resistance, it DOES NOT belong here. Shift it to Task 8.4.

---

## Task 8.4: Assess Enterprise Limitations
*   **Purpose:** To determine how factors external to the solution are restricting value realization.
*   **Inputs:** Current State Description, Implemented (or Constructed) Solution (external), Solution Performance Analysis.
*   **Outputs:** 
    *   **Enterprise Limitation** → Use `references/templates/ka08/enterprise-limitations-assessment.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* External/Human factors including Enterprise Culture, Organizational Structure, Operations, and Stakeholder Impacts.
    *   *AI Hook:* Since AI cannot know the internal politics of a company, MUST launch `elicitation-interview-playbook.md` to gather cultural and operational context.

---

## Task 8.5: Recommend Actions to Increase Solution Value
*   **Purpose:** To understand the factors that create differences between potential value and actual value, and to recommend a course of action to align them.
*   **Inputs:** Enterprise Limitation, Solution Limitation.
*   **Outputs:** 
    *   **Recommended Actions** → Use `references/templates/ka08/recommended-actions.md`
    *   **Executive Pitch Deck** (Optional/BoD Presentation) → Use `references/templates/ka08/executive-recommendation-pitch.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Synthesizing 8.3 and 8.4 to prescribe a solution (e.g., Organizational Change, Retire the Solution, Do Nothing).
    *   *Exam Trap:* Sunk Costs are irrelevant. Recommendations must be based purely on Future Investment and Opportunity Costs. "Do Nothing" is a valid and highly tested BABOK recommendation.
