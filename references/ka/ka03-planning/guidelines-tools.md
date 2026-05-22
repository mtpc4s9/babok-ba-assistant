---
description: Pre-flight checklist for KA03 Business Analysis Planning and Monitoring (Tasks 3.1-3.5) detailing required Guidelines and Tools.
---

# KA03: Business Analysis Planning and Monitoring - Guidelines & Tools

> **🤖 AI AGENT INSTRUCTION (PRE-FLIGHT CHECKLIST):**
> You MUST execute this checklist before generating any artifacts for KA03.
> *   **Guidelines** provide instructions or descriptions on *why* or *how* to undertake a task.
> *   **Tools** are objects or data *used* to perform the task.
> Check for the presence of these elements. If a critical guideline/tool is missing, HALT execution, flag the **Missing Risk**, and ask the user for the missing context.

---

## Task 3.1: Plan Business Analysis Approach
*   **Guidelines (How/Why):**
    *   **Methodologies and Frameworks** (External): Prescribes the rules and procedures (e.g., Agile, Waterfall, ITIL).
    *   **Business Policies** (External): Defines the limits within which decisions must be made.
    *   **Expert Judgment** (External): Used to tailor the approach based on prior experiences.
*   **Tools (What to Use):**
    *   **Stakeholder Engagement Approach** (Output 3.2): Influences approach decisions based on stakeholder needs.
    *   **Business Analysis Performance Assessment** (Output 3.5): Previous assessments to incorporate lessons learned.
*   **⚠️ Missing Guideline Risk (CRITICAL):** If **Methodologies and Frameworks** are unconfirmed, the AI Agent may recommend an incompatible approach (e.g., heavy predictive documentation in a rapid Agile environment), causing massive friction.

## Task 3.2: Plan Stakeholder Engagement
*   **Guidelines (How/Why):**
    *   **Change Strategy** (Output 6.4): Used to assess stakeholder impact and develop effective engagement strategies.
*   **Tools (What to Use):**
    *   **Current State Description** (Output 6.1): Provides the context to identify who is affected by the desired change.
    *   **Business Analysis Performance Assessment** (Output 3.5): Used to improve stakeholder engagement based on past metrics.
*   **⚠️ Missing Guideline Risk:** Without a **Change Strategy** (or at least a high-level Future State context), stakeholder identification becomes a blind guess, risking the omission of critical users or resistance from overlooked influencers.

## Task 3.3: Plan Business Analysis Governance
*   **Guidelines (How/Why):**
    *   **Business Policies** (External): Governance mandates that dictate risk tolerance and change limits.
    *   **Legal/Regulatory Information** (External): Legislative rules that must be followed for sound decision-making.
*   **Tools (What to Use):**
    *   **Current State Description** (Output 6.1): Context that drives better decision-making paths.
    *   **Business Analysis Performance Assessment** (Output 3.5): Identifies governance bottlenecks from past projects.
*   **⚠️ Missing Guideline Risk:** Missing **Legal/Regulatory Information** leads to non-compliant change control processes and unauthorized approvals, exposing the enterprise to severe audit failures.

## Task 3.4: Plan Business Analysis Information Management
*   **Guidelines (How/Why):**
    *   **Business Policies** (External): Dictates data retention, security, and privacy rules.
    *   **Legal/Regulatory Information** (External): Defines statutory requirements for requirements traceability.
*   **Tools (What to Use):**
    *   **Information Management Tools** (External): The physical/virtual repository (e.g., Jira, Confluence, SharePoint).
    *   **Business Analysis Performance Assessment** (Output 3.5): Incorporates lessons learned on data organization.
*   **⚠️ Missing Guideline Risk:** If the specific **Information Management Tools** are unknown, the AI Agent cannot advise on a realistic repository structure (Folder Tree) or access matrix (C.R.U.D.), rendering the plan purely theoretical.

## Task 3.5: Identify Business Analysis Performance Improvements
*   **Guidelines (How/Why):**
    *   **Organizational Performance Standards** (External): Mandated performance metrics or expectations for BA work.
*   **Tools (What to Use):**
    *   *(Relies primarily on Inputs: Business Analysis Approach and external Performance Objectives)*
*   **⚠️ Missing Guideline Risk:** Without **Organizational Performance Standards**, the assessment is purely subjective. The AI Agent cannot accurately categorize actions as Preventive, Corrective, or Improvement without a quantifiable baseline.