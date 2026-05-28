---
name: ka04-elicitation
description: Use when preparing elicitation activities, conducting interviews, workshops, research or experiments, confirming elicitation results, or managing stakeholder collaboration.
---

# KA04: Elicitation and Collaboration

This skill orchestrates continuous, ongoing activities to gather information from stakeholders and confirm results (Tasks 4.1 to 4.5).

## 1. Mandatory Loading Sequence
1. Load `references/ka/ka04-elicitation/tasks.md` to establish the target task scope, inputs, and outputs.
2. Load `references/ka/ka04-elicitation/guidelines-tools.md` and `references/ka/ka04-elicitation/stakeholders.md` concurrently.
3. Load `references/ka/ka04-elicitation/techniques.md` only if selecting or executing specific discovery techniques.
4. Load `references/ka/ka04-elicitation/gotchas.md` only if diagnosing real-world engagement traps.

## 2. Task Routing Table

| Task ID | Task Name | Default Deliverable Template |
| :--- | :--- | :--- |
| **4.1** | Prepare for Elicitation | `references/templates/ka04/elicitation-activity-plan.md` |
| **4.2** | Conduct Elicitation | `references/templates/ka04/elicitation-results-unconfirmed.md` |
| **4.3** | Confirm Elicitation Results | `references/templates/ka04/elicitation-results-confirmed.md` |
| **4.4** | Communicate BA Information | `references/templates/ka04/ba-information-package.md` |
| **4.5** | Manage Stakeholder Collaboration | `references/templates/ka04/stakeholder-engagement-matrix.md` |

## 3. Tollgate & Anti-Hallucination Rules
* **Mandatory Tollgate:** Always run `references/advisor/readiness-check.md` before executing tasks.
* **Analytical Scribe Constraint:** For Task 4.2 and 4.5, if real-world inputs (meeting notes, raw data, feedback) are missing, **HALT execution** and prompt the user for an interactive Elicitation Interview. **NEVER** hallucinate or fabricate real-world inputs.
