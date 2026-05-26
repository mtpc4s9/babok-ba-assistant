---
description: Playbook for executing AI-to-User Elicitation Interviews for non-top-20 BABOK V3 techniques during task fallbacks.
---

# Elicitation Interview Playbook (BABOK V3)

## 1. Overview & Operating Rules (The Elicitation Protocol)

> [!IMPORTANT]
> **THE ANTI-HALLUCINATION SHIELD:**
> When a task requires a technique outside the Top 20, the AI Assistant **MUST NOT** guess, invent business data, or generate empty templates.
> You **MUST** immediately halt document generation, shift to **Advisory Mode**, and initiate the **AI-to-User Elicitation Interview** using this playbook.

### Operating Rules for AI Agent:
1.  **Identify Technique Domain:** Match the target technique to one of the 5 domains in Section 2.
2.  **Present Questionnaire:** Present the standard 3-5 questions verbatim to the User. Add a highly professional, polite introductory note addressing the User as "Chủ nhân" (when communicating in Vietnamese) or using senior enterprise terminology (when in English).
3.  **Halt & Wait:** Stop generating other outputs. Wait for the User's input.
4.  **Process Answers:** Once the User responds, map their answers to the target deliverable, formatting the final specification according to Section 3.

---

## 2. Standardized Elicitation Questionnaires by Domain

---

### Domain A: Strategy & Enterprise Performance
*   *Applicable Techniques:* 10.3 (Balanced Scorecard), 10.4 (Benchmarking and Market Analysis), 10.6 (Business Capability Analysis), 10.46 (SWOT Analysis), 10.49 (Vendor Assessment).
*   *Key Artifact Produced:* Strategic Performance Report / Vendor Assessment Matrix.

#### Elicitation Questionnaire:
1.  **Strategic Objectives:** What are the primary business objectives or performance targets we are trying to measure or compare (e.g., reduce customer churn by 15%, evaluate ERP vendor capability)?
2.  **Competitive/Internal Peers:** Who are the external competitors (for Benchmarking/Market Analysis) or internal departments (for Capability Analysis) under scope?
3.  **Key Performance Indicators (KPIs):** What specific qualitative or quantitative metrics will define success (e.g., Net Promoter Score, system uptime, license cost per user)?
4.  **Strengths & Risks:** What are the known internal capabilities (strengths/weaknesses) or external market threats related to this analysis?

---

### Domain B: Quantitative & Financial Analysis
*   *Applicable Techniques:* 10.19 (Estimation), 10.20 (Financial Analysis).
*   *Key Artifact Produced:* ROI Analysis / Cost-Benefit Report / Effort Estimation Log.
*   *Note on 10.20:* For 10.20 (Financial Analysis), prefer loading the dedicated `references/techniques/top-20/10.20-financial-analysis.md` directly.

#### Elicitation Questionnaire:
1.  **Cost Categories:** What are the estimated initial development costs (CAPEX - e.g., developer hours, licenses) and recurring operational costs (OPEX - e.g., hosting, support)?
2.  **Benefit Drivers:** What are the expected financial returns or efficiency gains (e.g., saving 20 hours per week for 5 accountants, increasing average order value by $5)?
3.  **Time Horizon & Discount Rate:** Over what period should we analyze this investment (e.g., 3 years, 5 years), and is there a specific corporate discount rate / cost of capital (e.g., 8%)?
4.  **Estimation Uncertainty:** What is the confidence level of these estimates, and what are the major risk factors that could increase costs or delay benefits?

---

### Domain C: Collaborative & Group Elicitation
*   *Applicable Techniques:* 10.5 (Brainstorming), 10.10 (Collaborative Games), 10.21 (Focus Groups), 10.25 (Interviews), 10.31 (Observation), 10.45 (Surveys), 10.50 (Workshops).
*   *Key Artifact Produced:* Elicitation Activity Plan / Collaboration Report.

#### Elicitation Questionnaire:
1.  **Target Participants (Stakeholders):** Who are the key stakeholders or Subject Matter Experts (SMEs) required for this session (e.g., Chief Accountant, Lead Architect, End-user group)?
2.  **Session Objective:** What is the singular, concrete goal of this elicitation event (e.g., align on checkout page redesign, discover pain points in invoicing)?
3.  **Agenda & Facilitation Style:** Are there preferred collaborative methods (e.g., silent brainstorming, affinity mapping games, structured 1-on-1 interviews)?
4.  **Prerequisites & Inputs:** What reference documents or existing systems must the participants review before the session?

---

### Domain D: System Architecture, Interfaces & Data Flows
*   *Applicable Techniques:* 10.11 (Concept Modelling), 10.22 (Functional Decomposition), 10.24 (Interface Analysis), 10.42 (Sequence Diagrams).
*   *Key Artifact Produced:* System Interface Catalog / Functional Decomposition Tree / API Payload Specification.

#### Elicitation Questionnaire:
1.  **System Boundaries:** Which specific software components, external applications, or database nodes are exchanging information (e.g., SchoolsBuddy Mobile Client, RedDot Payment API, Core SQL DB)?
2.  **Trigger Event & Payload:** What exact event initiates this system interaction (e.g., User clicks "Pay Tuition"), and what is the primary data exchanged (e.g., JSON payload containing amount, card token, invoice ID)?
3.  **Communication Protocol:** What is the technical mechanism of the interface (e.g., Synchronous REST API, Asynchronous Webhook, database query)?
4.  **Security & Constraints:** What security protocols are required (e.g., JWT authorization, TLS 1.3, API rate limiting of 100 requests per minute)?

---

### Domain E: Governance, Backlog & Permissions Control
*   *Applicable Techniques:* 10.2 (Backlog Management), 10.26 (Item Tracking), 10.27 (Lessons Learned), 10.28 (Metrics/KPIs), 10.32 (Organizational Modelling), 10.39 (Roles and Permissions Matrix).
*   *Key Artifact Produced:* Prioritized Backlog / Roles and Permissions Matrix / Item Log.

#### Elicitation Questionnaire:
1.  **Governance Rules:** What parameters are used to prioritize backlog items or track issues (e.g., MoSCoW priority, Business Value vs. Development Effort)?
2.  **Roles & Actor Levels:** What are the specific user roles or system accounts involved (e.g., Guest, Registered Parent, School Admin, Platform Auditor)?
3.  **Permission Boundaries:** What exact access level does each role have over specific data entities (e.g., Read-Only, Create, Update, Delete)?
4.  **Escalation Path:** If a backlog item is blocked or an tracking item is flagged as high-risk, who is the ultimate decision-maker / approval authority?

---

## 3. Elicitation Output Format

Once the User has responded to the questionnaire, the AI Assistant **MUST** compile and format the final deliverable using this unified structure:

```markdown
**📍 BABOK Context:** KA [number] – [name] / Task [ID] – [task name]
**🎯 Fallback Technique Applied:** [Technique Name] (ID: 10.xx)
**👥 Elicitation Participants:** [User Role / SME Roles]

---

# [Deliverable Title: E.g., SchoolsBuddy Payment Interface Catalog]

## 1. Elicitation Interview Metadata
*   **Interview Date:** [ISO8601 current date]
*   **Key Inputs Provided by User:** [Briefly summarize the raw answers provided by the user]

## 2. Structured Specification
[Generate the detailed specification, table, or matrix using clean, professional English and standard IIBA terminology]

## 3. Verified Constraints & Risk Log
[List any technical limitations, security constraints, or operational risks captured during the interview]
```
