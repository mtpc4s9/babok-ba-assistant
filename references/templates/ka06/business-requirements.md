---
description: Template for generating the Business Requirements document representing the strategic problems, opportunities, or constraints triggering the change (BABOK Task 6.1).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity:** Must strictly adhere to IIBA BABOK V3 standard definitions and professional enterprise terminology. Focus exclusively on the strategic "WHY" (Goals, Objectives, Outcomes) of the enterprise. Absolutely NO functional requirements, technical specifications, or system features (e.g., "The system shall...") are allowed here. This document must remain entirely solution-agnostic.
> - **Input Validation:** Scan the Input Traceability Map before processing. If any mandatory input is missing, ambiguous, or conflict-prone, you MUST NOT proceed with generation.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If required inputs are unavailable or unclear in the user's context (e.g., vague business needs, unquantified strategic goals, or unclear corporate constraints), you MUST immediately halt generation, pivot to advisory/inquiry mode, and request the User to provide the missing facts or clarify ambiguity. Never hallucinate, assume, or guess business reality.

# BUSINESS REQUIREMENTS

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project | Project Charter or Kickoff Metadata]
**Date of Issue:** [INSERT: ISO Date | YYYY-MM-DD format of generation | Current Session Metadata]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** `Current State Description` (Task 6.1) -> Crucial for Section 1, 2, 3
*   [ ] **[Primary Input]** `Elicitation Results (confirmed)` (Task 4.4) -> Crucial for Section 1, 3
*   [ ] **[Primary Input]** `Enterprise Strategy` (Contextual asset) -> Crucial for Section 1, 2

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Business Need (The "Why")** | Specific business pain points, lost revenues, customer complaints, or strategic opportunities | `Current State Description` / `Elicitation Results (confirmed)` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Desired Business Outcomes** | High-level organizational goals, desired business value, enterprise strategic alignment | `Enterprise Strategy` / `Elicitation Results (confirmed)` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Business Constraints** | Sponsor-imposed budget limits, strict timelines, or corporate and regulatory mandates | `Elicitation Results (confirmed)` / `Current State Description` | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 📋 ID CONVENTION REFERENCE

All elements generated in this document must strictly adhere to the following naming conventions:

| Prefix | Entity | Format | Example |
| :--- | :--- | :--- | :--- |
| **BD-** | Business Driver | `BD-xx` (where xx is a sequential number) | `BD-02`, `BD-03` |
| **BR-** | Business Requirement | `BR-xx` (where xx is a sequential number) | `BR-01`, `BR-02` |

---

## 1. Business Drivers Register

> **🤖 AI AGENT INSTRUCTION:** Identify and list the primary business drivers (e.g., strategic, financial, competitive, compliance-driven, or innovative forces) that trigger the change. Do not propose solutions or systems here.

| Business Driver ID | Category | Business Driver Statement | Source / Reference Document |
| :--- | :--- | :--- | :--- |
| **BD-01** | [Revenue / Strategy / Compliance / Innovation] | [INSERT: e.g., "Revenue - Preliminary estimates that the proposed 'New Business' could deliver EBITDA of up to c. $21m in 2028"] | [INSERT: e.g., High Level Requirement Document / Business Case] |
| **BD-02** | [Revenue / Strategy / Compliance / Innovation] | [INSERT: e.g., "Strategy - New Business capabilities support and add value to BAU and new growth initiatives including Home Energy Management"] | [INSERT: e.g., Enterprise Strategy / Stakeholder Interviews] |
| **[BD-xx]** | [INSERT] | [INSERT] | [INSERT] |

---

## 2. Business Requirements Traceability Matrix

> **🤖 AI AGENT INSTRUCTION:** List the high-level business requirements representing strategic problems, opportunities, or constraints. Every business requirement MUST be mapped to one or more Business Drivers using its ID. Priority here represents strategic alignment and high-level importance, not implementation sprint priority.

| Business Req ID | Requirement Statement | Related BD-ID | Strategic Priority | Source / Driver |
| :--- | :--- | :--- | :--- | :--- |
| **BR-01** | [INSERT: e.g., "To establish an energy services offering of scheduled install of energy efficient appliances, servicing, and repairs that continually improve value proposition to the customer."] | `BD-02` | [High / Medium / Low] | [INSERT: e.g., CVP Document] |
| **BR-02** | [INSERT: e.g., "To increase earnings from sales and installation of energy efficient appliances from -$10.2M loss in the first year to $21m in 2028."] | `BD-01` | [High / Medium / Low] | [INSERT: e.g., Business Case] |
| **[BR-xx]** | [INSERT] | `BD-xx` | [INSERT] | [INSERT] |

---

## 3. Next Step Verification (Sequential Bridge Tollgate)

> **🤖 AI AGENT INSTRUCTION (TOLLGATE EXECUTION):** 
> Display this block exactly to prompt the user for the next steps. These requirements are considered **RAW** until they are validated and scope boundaries are established.

*   **Self-Check Prompt:** "I have successfully drafted the **Business Requirements Traceability Matrix**. Before we proceed, we should verify the scope of the solution. Please select your preferred next step:
    1. **Define Solution Scope (Task 6.4):** Load `solution-scope.md` to map these requirements into positive and negative boundaries.
    2. **Quantify Business Objectives (Task 6.2):** Load `business-objectives.md` to define SMART targets corresponding to these requirements."