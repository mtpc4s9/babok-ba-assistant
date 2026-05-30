---
description: Pre-task checklist (Tollgate) for AI Agent to verify Guidelines, Tools, Stakeholders, and Outputs before execution with CBAP Fast-Track support.
---

# Readiness Check (Tollgate)

> ⛔ **HARD STOP — MANDATORY AI AGENT TOLLGATE RULE**
> BEFORE generating any Business Analysis deliverable, proposing a design, or recommending a solution, you **MUST** execute this Tollgate. Do not proceed to execution if any checkpoint fails unless **CBAP Fast-Track** conditions are met.

---

## 1. The 5-Point Tollgate Check

### ✅ 0. Discovery Completeness
*   **Check:** Has the upstream discovery phase been completed? Are the business goals explicit and measurable? Are the root causes (not just symptoms) identified?
*   **Action if missing:** HALT document generation. Load `references/advisor/product-discovery/SKILL.md` and initiate the Upstream Discovery workflow to elicit the necessary business context.

### ✅ 1. Guidelines (Boundaries & Constraints)
*   **Check:** Do I have the required guiding artifacts (e.g., *Business Analysis Approach*, *Solution Scope*, *Business Policies*) to establish the boundaries for this task?
*   **Action if missing:** HALT. Ask the user to clarify boundaries.

### ✅ 2. Tools & Inputs (Prerequisite Data)
*   **Check:** Is the prerequisite data available in the current context? This includes:
    *   **Inputs:** Direct dependencies defined in `references/dependencies/task-dependency-map.md`.
    *   **Tools:** Supporting artifacts defined in `references/ka/[ka-folder]/guidelines-tools.md` for the target task.
*   **Action if missing:** BLOCK execution. Identify the exact missing inputs and request them from the user.

### ✅ 3. Stakeholders (Authorization & Subject Matter Expertise)
*   **Check:** Are the mandatory stakeholders (e.g., *Domain SME*, *Sponsor*, *Regulator*) identified and confirmed for participation/approval?
*   **Action if missing:** WARN. Recommend appointing a Stakeholder Proxy or assigning representatives before proceeding.

### ✅ 4. Outputs (Deliverable Architecture)
*   **Check:** Have I successfully loaded the correct formal template from `references/templates/`?
*   **Action if missing:** Automatically load the appropriate template before drafting the response.

---

## 2. ⚡ CBAP Fast-Track Clause (Bypass Rule)

> **💡 EXECUTIVE BYPASS FOR EXPERT USERS:**
> If the user (acting at the CBAP/Architect level) **explicitly states** that they have provided all necessary business context, inputs, and stakeholders, OR if they provide deep, structured business specifications directly in their prompt, you **MUST FAST-TRACK** execution:
> 1. **Bypass the Halt/Block actions** for points #0, #1, #2, and #3.
> 2. **Skip the interactive Elicitation Interview.**
> 3. **Draft the target deliverable immediately** with high-fidelity, production-grade details.
> 4. **Document all assumptions** explicitly in an `Assumptions & Contextual Constraints` section at the end of the deliverable.

---

## 3. Escalation Path by Failure Type (Non-Fast-Track)

| Tollgate Point | Fail Condition | Non-Fast-Track Required Agent Action |
| :--- | :--- | :--- |
| **#0 Discovery** | Upstream business context, measurable goals, or root causes are missing | **HALT** generation. Initiate product discovery using `references/advisor/product-discovery/SKILL.md`. |
| **#1 Guidelines** | Required guiding artifact is absent | Shift to **Advisory Mode**. Halt document generation. List missing guides. |
| **#2 Tools / Inputs** | A direct Input or prerequisite Tool is unavailable | **BLOCK** generation. Launch Elicitation Interview or request missing inputs. |
| **#3 Stakeholders** | A Must Have stakeholder role is unconfirmed | **WARN** the user. Suggest proxies or ask for explicit confirmation to proceed. |
| **#4 Template** | No template loaded for the target deliverable | **Auto-resolve.** Automatically load template from `references/templates/`. |

---

## 4. 📂 Tollgate Examples Across All 6 KAs

### 📌 Example KA03: Plan Stakeholder Engagement (Task 3.2)
*   **#1 Guidelines:** Requires **Business Analysis Approach** (Output 3.1) to align engagement rules.
*   **#2 Tools & Inputs:** Requires **Business Need** (Input 6.1/6.2). Without knowing the strategic need, you cannot map stakeholder power/influence.
*   **#3 Stakeholders:** Requires **Sponsor** (for approval) and **Domain SMEs** (for operational profiling).

### 📌 Example KA04: Conduct Elicitation (Task 4.2)
*   **#1 Guidelines:** Requires **Elicitation Activity Plan** (Output 4.1).
*   **#2 Tools & Inputs:** Requires raw real-world data (meeting notes, observation logs, surveys). If missing, launch **Elicitation Interview Playbook** (Domain A-E) to interview the user.
*   **#3 Stakeholders:** Requires **Domain SMEs** and **End Users** as active participants.

### 📌 Example KA05: Assess Requirements Changes (Task 5.4)
*   **#1 Guidelines:** Requires **Governance Approach** (Output 3.3) and **Change Strategy** (Output 6.4).
*   **#2 Tools & Inputs:** Requires **Proposed Change** (External input) and **Requirements Architecture** (Output 7.4). If requirements dependencies are not mapped, you cannot trace the ripple effect of the change.
*   **#3 Stakeholders:** Requires **Change Control Board (CCB) / Sponsor** for decision-making.

### 📌 Example KA06: Define Future State (Task 6.2)
*   **#1 Guidelines:** Requires **Current State Description** (Output 6.1) and **Business Objectives** (Organizational strategies).
*   **#2 Tools & Inputs:** Requires **Enterprise Limitations** (Output 8.4) to understand boundaries.
*   **#3 Stakeholders:** Requires **Sponsor** and **Key Stakeholders** to define strategic goals.

### 📌 Example KA07: Define Requirements Architecture (Task 7.4)
*   **#1 Guidelines:** Requires **Information Management Approach** (Output 3.4).
*   **#2 Tools & Inputs:** Requires **Requirements (Specified & Modelled)** (Output 7.1). If requirements are not Specified, they cannot be structured into an architecture.
*   **#3 Stakeholders:** Requires **Domain SMEs** and **Solution Architect** to align technical/business architecture.

### 📌 Example KA08: Assess Enterprise Limitations (Task 8.4)
*   **#1 Guidelines:** Requires **Change Strategy** (Output 6.4) and **Future State Description** (Output 6.2).
*   **#2 Tools & Inputs:** Requires **Current State Description** (Output 6.1) and **Solution Performance Analysis** (Output 8.2).
*   **#3 Stakeholders:** Requires **Domain SMEs** and **End Users**. If missing, launch Elicitation Interview Playbook (Domain A & C) to query organizational culture and adoption.