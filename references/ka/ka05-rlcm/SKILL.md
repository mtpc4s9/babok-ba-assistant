---
name: ka05-rlcm
description: Use when tracing requirements, maintaining requirements metadata, prioritizing features, assessing scope change requests, or obtaining requirements approvals.
---

# KA05: Requirements Life Cycle Management

This skill orchestrates requirements metadata, traceability, prioritization, and change control (Tasks 5.1 to 5.5).

## 1. Mandatory Loading Sequence
1. Load `references/ka/ka05-rlcm/tasks.md` to establish the target task scope, inputs, and outputs.
2. Load `references/ka/ka05-rlcm/guidelines-tools.md` and `references/ka/ka05-rlcm/stakeholders.md` concurrently.
3. Load `references/ka/ka05-rlcm/techniques.md` only if selecting or executing life cycle management techniques.
4. Load `references/ka/ka05-rlcm/gotchas.md` only if diagnosing scope creep or change control traps.

## 2. Task Routing Table & Dynamic Rules

| Task ID | Condition / Request | Mapped Template |
| :--- | :--- | :--- |
| **5.1 / 5.2 / 5.3** | Business or Strategic Level Matrix | `references/templates/ka05/business-requirement-matrix.md` |
| **5.1 / 5.2 / 5.3** | Solution or Functional Level Matrix | `references/templates/ka05/functional-requirement-matrix.md` |
| **5.1 / 5.2 / 5.3** | Quality or Non-Functional Matrix | `references/templates/ka05/non-functional-requirement-matrix.md` |
| **5.1 / 5.2 / 5.3** | Master Traceability Matrix (End-to-End) | `references/templates/ka05/requirement-traceability-matrix.md` |
| **5.4** | Assess Change Request / Scope Change | `references/templates/ka05/requirements-change-assessment.md` |
| **5.5** | Obtain Formal Approval / Sign-off Package | `references/templates/ka05/requirements-approval-package.md` |
| **5.5** | Present Recommendations to C-Level / Sponsor | `references/templates/ka05/executive-pitch-deck.md` |

## 3. Requirements Status Lifecycle Map (Metadata Standards)
Use these strict states to populate requirement matrices:
* **Proposed:** Suggested by a stakeholder, not yet formally assessed.
* **Under Review:** Undergoing impact analysis (Task 5.4) or detailed specification (KA07).
* **Approved:** Formally signed off by the Designated Change Authority (Task 5.5).
* **Baselined:** Approved requirement locked into project scope baseline. Changes require formal Change Request.
* **Deprecated:** Obsolete, rejected, or removed from scope. Stored for historical reference.

## 4. Tollgate Check
Before generating any matrices or assessments above, execute `references/advisor/readiness-check.md`.
