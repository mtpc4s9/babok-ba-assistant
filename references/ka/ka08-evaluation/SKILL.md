---
name: ka08-evaluation
description: Use when assessing solution performance in use, analyzing performance metrics, identifying solution technical defects, identifying operational limitations, or recommending value improvement actions.
---

# KA08: Solution Evaluation

This skill orchestrates assessment of performance and value delivered by solutions in use (Tasks 8.1 to 8.5).

## 1. Mandatory Loading Sequence
1. Load `references/ka/ka08-evaluation/tasks.md` to establish the target task scope, inputs, and outputs.
2. Load `references/ka/ka08-evaluation/guidelines-tools.md` and `references/ka/ka08-evaluation/stakeholders.md` concurrently.
3. Load `references/ka/ka08-evaluation/techniques.md` only if selecting or executing evaluation and data analysis techniques.
4. Load `references/ka/ka08-evaluation/gotchas.md` only if diagnosing solution limitations.

## 2. Task Routing Table

| Task ID | Condition / Request | Mapped Template |
| :--- | :--- | :--- |
| **8.1** | Measure Solution Performance | `references/templates/ka08/solution-performance-measures.md` |
| **8.2** | Analyze Performance Measures | `references/templates/ka08/solution-performance-analysis.md` |
| **8.3** | Assess Solution Limitations (Technical) | `references/templates/ka08/solution-limitations-assessment.md` |
| **8.4** | Assess Enterprise Limitations (Operational) | `references/templates/ka08/enterprise-limitations-assessment.md` |
| **8.5** | Recommend Action to Increase Solution Value | `references/templates/ka08/recommended-actions.md` |
| **8.5** | Present Solution Recommendations to Board/C-Level | `references/templates/ka08/executive-recommendation-pitch.md` |

## 3. Data & Elicitation Constraints
* **Mandatory Tollgate:** Always run `references/advisor/readiness-check.md` before executing tasks.
* **Metric Reality Hook:** Do not hallucinate performance data or metrics. If you lack real-world data, you **MUST** trigger an Elicitation Interview using `references/advisor/elicitation-interview-playbook.md` (Domain E - Governance & Metrics).
* **Sunk Costs Exclusion:** Rationale for Task 8.5 recommendations **MUST** explicitly exclude sunk costs.
