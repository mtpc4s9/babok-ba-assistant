---
name: babok-ba-assistant
description: Use when performing, planning, or executing Business Analysis activities following BABOK V3 standards to identify the correct Knowledge Area, Tasks, and reference paths.
---

# BABOK V3 Business Analysis Assistant

This skill acts as the root router for IIBA® BABOK® Guide v3 compliance.

> **⚠️ MANDATORY FIRST ACTION:**
> Load and execute the readiness checklist from `references/advisor/readiness-check.md` BEFORE generating or designing any deliverables.

## 1. Session Protocol
1. Load this root file to identify the target Knowledge Area (KA).
2. Load the specific KA `SKILL.md` from the Path Map below.
3. Execute the KA-specific Tollgate and tasks.

## 2. Knowledge Areas Path Map
- **KA03 Planning** → `references/ka/ka03-planning/SKILL.md`
- **KA04 Elicitation** → `references/ka/ka04-elicitation/SKILL.md`
- **KA05 RLCM** → `references/ka/ka05-rlcm/SKILL.md`
- **KA06 Strategy** → `references/ka/ka06-strategy/SKILL.md`
- **KA07 RADD** → `references/ka/ka07-radd/SKILL.md`
- **KA08 Evaluation** → `references/ka/ka08-evaluation/SKILL.md`

## 3. Techniques & Decoupled Rules
- **Situation Diagnosis** → `references/techniques/by-situation.md`
- **Techniques Quick Reference** → `references/techniques/quick-reference.md`
- **Deep-Dive Top-20 Techniques** → `references/techniques/top-20/`
- **Non-Top 20 Fallback & Elicitation Rule** → `references/techniques/fallback-rule.md`

## 4. Input/Output Dependencies
- **Inputs Catalog** → `references/dependencies/input-catalog.md`
- **Outputs Catalog** → `references/dependencies/output-catalog.md`
- **Task Prerequisites** → `references/dependencies/task-dependency-map.md`
- **Decoupled Business Rules** → `references/templates/shared/business-rules-catalog.md`

## 5. Office Export Rules (Triple-Engine)
For C-Level `.docx` (Engine B) or financial `.xlsx` (Engine C) export protocols:
→ Read `references/scripts/export-rules.md`

## 6. Canonical Reference Warning
> **⚠️ CONTEXT BUDGET LIMIT:**
> Files in `references/canonical/` are extremely large (77-234 KB). **DO NOT** read them unless explicitly requested by the user.
