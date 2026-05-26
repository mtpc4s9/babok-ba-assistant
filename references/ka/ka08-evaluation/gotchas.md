---
description: Critical traps and common CBAP misconceptions for KA08 Solution Evaluation (Tasks 8.1-8.5) to be flagged during execution.
---

# KA08: Solution Evaluation - Gotchas & Traps

> **🤖 AI AGENT INSTRUCTION (TRAP DETECTION & FORMATTING):** Use this file to detect user misconceptions during solution evaluation. When a user's scenario triggers one of these 6 gotchas, you MUST inject the relevant warning into the `⚠️ CBAP Gotcha:` field of your standard response.
> *Note:* Do not hallucinate real-world data. If qualitative or operational context is missing, trigger `elicitation-interview-playbook.md`.

---

## Top 6 Solution Evaluation Traps

### 1. The "Data Collection vs. Data Analysis" Trap (Task 8.1 vs. 8.2)
*   **The Trap:** The user asks to calculate the variance or identify the root cause of a failure while currently executing Task 8.1 (Measure Solution Performance).
*   **BABOK Standard:** Task 8.1 is strictly for defining *how* to measure and collecting the raw numbers. Task 8.2 is where variance calculation, trend spotting, and root cause analysis occur. 
*   **Agent Action:** Stop the analysis. Output the raw measurements first in `solution-performance-measures.md`, then prompt the user to proceed to Task 8.2.

### 2. The "High Tech = High Value" Trap (Task 8.2)
*   **The Trap:** Assuming that because a solution meets all technical Non-Functional Requirements (e.g., 99.99% uptime), it is delivering maximum business value.
*   **BABOK Standard:** A solution can perform perfectly from a technical standpoint but still fail to deliver *Business Value* if it doesn't align with enterprise goals (e.g., users avoid using it).
*   **Agent Action:** Always cross-reference the actual performance against the `Potential Value` and `Business Objectives`. 

### 3. The "Internal vs. External Boundary" Trap (Task 8.3 vs. 8.4)
*   **The Trap:** Documenting lack of user training, poor corporate culture, or flawed organizational structure inside Task 8.3 (Assess Solution Limitations).
*   **BABOK Standard:** Task 8.3 is STRICTLY for internal hardware/software defects and bottlenecks. Human, cultural, and operational process issues belong in Task 8.4 (Assess Enterprise Limitations).
*   **Agent Action:** If the root cause involves people or policies, move it to `enterprise-limitations-assessment.md`.

### 4. The "Sunk Cost" Trap (Task 8.5)
*   **The Trap:** Recommending to continue funding a failing solution simply because the organization has already spent $2 Million on it.
*   **BABOK Standard:** Initial investments (Sunk Costs) must be explicitly ignored when making a recommendation. Decisions must be based ONLY on future investment, ongoing maintenance costs, and opportunity costs.
*   **Agent Action:** Inject a strong warning if the user justifies a decision based on past expenditures. Force the evaluation of alternatives (e.g., Retire the Solution).

### 5. The "Action is Mandatory" Myth (Task 8.5)
*   **The Trap:** Believing that the BA must always recommend a new IT project, software feature, or organizational change.
*   **BABOK Standard:** *Do Nothing* is a valid BABOK recommendation if the value of a change is low relative to the effort, or if the risks of changing outweigh the risks of the current state.
*   **Agent Action:** Always include "Do Nothing" as a baseline alternative in `recommended-actions.md` for comparison.

### 6. The "Hallucinated Culture" Trap (Playbook Hook)
*   **The Trap:** The AI Agent invents the organizational structure, user sentiments, or cultural resistance to fill out Task 8.4.
*   **BABOK Standard:** Enterprise culture is tacit knowledge that cannot be guessed by external systems. 
*   **Agent Action:** HALT generation. Load `elicitation-interview-playbook.md` (Domain A/C) and interview the user to acquire the true cultural context before assessing Enterprise Limitations.
