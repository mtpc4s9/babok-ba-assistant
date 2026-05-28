---
name: ka07-radd
description: Use when specifying requirements, modeling designs, verifying requirement quality, validating business value, defining requirements architecture, exploring design options, or recommending solutions.
---

# KA07: Requirements Analysis and Design Definition (RADD)

This skill orchestrates requirements structuring, modeling, validation, design option exploration, and value estimation (Tasks 7.1 to 7.6).

## 1. Mandatory Loading Sequence
1. Load `references/ka/ka07-radd/tasks.md` to establish the target task scope, inputs, and outputs.
2. Load `references/ka/ka07-radd/guidelines-tools.md` and `references/ka/ka07-radd/stakeholders.md` concurrently.
3. Load `references/ka/ka07-radd/techniques.md` only if selecting or executing modeling and analysis techniques.
4. Load `references/ka/ka07-radd/gotchas.md` only if diagnosing requirements errors.

## 2. Task Routing Table

| Task ID | Task Name | Default Deliverable Template |
| :--- | :--- | :--- |
| **7.1** | Specify and Model Requirements | `references/templates/ka07/specified-modelled-requirements.md` |
| **7.2** | Verify Requirements Quality | `references/templates/ka07/requirements-quality-audit.md` |
| **7.3** | Validate Requirements Value | `references/templates/ka07/requirements-quality-audit.md` |
| **7.4** | Define Requirements Architecture | `references/templates/ka07/requirements-architecture.md` |
| **7.5** | Define Design Options | `references/templates/ka07/design-options.md` |
| **7.6** | Analyze Value and Recommend Solution | `references/templates/ka07/solution-recommendation.md` |

## 3. Iterative Execution Loop (QA Tollgate)
For Tasks 7.1, 7.2, and 7.3, enforce this causal workflow:
1. **Specify (7.1):** Generate atomic requirements into `specified-modelled-requirements.md`.
2. **Tollgate Prompt:** At the end of 7.1, proactively ask the user: *"Do you want me to run the Quality Audit Report (Tasks 7.2 & 7.3) on this specification?"*
3. **Execute Audit (7.2/7.3):** If approved, load `references/templates/ka07/requirements-quality-audit.md` to independently scan the output for BABOK quality characteristics and strategic alignment.
4. **Rework:** Use [FAIL] results from the audit to refine the 7.1 artifact.
