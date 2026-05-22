---
description: >-
  Pre-task checklist (Tollgate) for AI Agent to verify Guidelines, Tools, Stakeholders, and Outputs before execution.
---

# Readiness Check (Tollgate)

> **🤖 AI AGENT INSTRUCTION (PRE-FLIGHT CHECK):**
> BEFORE generating any Business Analysis deliverable or proposing a technique, you MUST execute this internal readiness check. Do not proceed to execution if any of these checks fail. Shift to a "Proactive Advisory" state and request missing context.

## The 4-Point Execution Tollgate

### ✅ 1. Guidelines (Boundaries & Constraints)
*   **Check:** Do I have the required guiding artifacts (e.g., *Business Analysis Approach*, *Solution Scope*, *Business Policies*) to establish the boundaries for this task?
*   **Action if missing:** DO NOT assume boundaries. Ask the user to provide or clarify the specific Guideline.

### ✅ 2. Tools & Inputs (Prerequisite Data)
*   **Check:** Is the prerequisite data available in the current context? This includes:
    *   **Inputs** (Direct Dependencies) as defined in `references/dependencies/task-dependency-map.md`
    *   **Tools** (supporting artifacts) as defined in `references/ka/[ka-folder]/guidelines-tools.md` for this specific task
*   **Action if missing:** FLAG / BLOCK execution. Explicitly inform the user which Input or Tool artifact is missing and offer to help them create it first.

### ✅ 3. Stakeholders (Authorization & Subject Matter Expertise)
*   **Check:** Are the mandatory stakeholders (e.g., *Domain SME*, *Sponsor*, *Regulator*) identified and confirmed for participation/approval?
*   **Action if missing:** STOP. Warn the user about the risk of invalid requirements. Recommend that the user either appoint the missing role, assign a **Stakeholder Proxy** (representative), or escalate the gap to the Sponsor.

### ✅ 4. Outputs (Deliverable Architecture)
*   **Check:** Have I successfully loaded the correct formal hybrid template from `references/templates/`?
*   **Action if missing:** Automatically load the appropriate template framework before drafting the response.

---

## Escalation Path by Failure Type

| Tollgate Point | Fail Condition | Required Agent Action |
| :--- | :--- | :--- |
| **#1 Guidelines** | Required guiding artifact is absent (e.g., no *Solution Scope*, no *Business Policies*) | Shift to **Advisory Mode**. Surface in `📋 Missing Prerequisites`. Ask user to provide or confirm the specific Guideline before continuing. |
| **#2 Tools / Inputs** | A direct Input or prerequisite Tool artifact is unavailable | **BLOCK** generation. Identify the exact missing artifact. Offer to help the user create the upstream deliverable first. |
| **#3 Stakeholders** | A Must Have stakeholder role is unconfirmed or absent | **WARN** the user. Surface in `👥 Required Stakeholders`. Recommend appointing a **Stakeholder Proxy**, or escalating the gap to the Sponsor. Ask for explicit confirmation before proceeding. |
| **#4 Template** | No template has been loaded for the target deliverable | **Auto-resolve.** Load the appropriate template from `references/templates/` automatically. Do not block. |

> **⚠️ MANDATORY FAILURE RULE:**
> If Tollgate Points **#1, #2, or #3** fail, you MUST halt document generation immediately. Reply to the user explicitly stating the missing component using the fields `📋 Missing Prerequisites` or `👥 Required Stakeholders` in your response. Await user confirmation before proceeding. Point #4 is self-healing and must never block the user.