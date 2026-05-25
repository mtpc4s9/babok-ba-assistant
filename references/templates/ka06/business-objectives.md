---
description: Template for generating the Business Objectives documenting the specific, measurable goals that will demonstrate the business need has been satisfied (BABOK Task 6.2).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity:** Must strictly adhere to IIBA BABOK V3 standard definitions and professional enterprise terminology. Ensure that goals represent qualitative, long-term visions, whereas objectives represent granular, time-bound, and quantitative targets.
> - **SMART Rule Enforcement:** Every objective generated MUST be Specific, Measurable, Achievable, Relevant, and Time-bounded (SMART). Reject all vague qualitative claims (e.g., "improve system speed," "enhance user satisfaction") and enforce quantified statements (e.g., "Reduce average transaction checkout response time to less than 1.5 seconds for 95% of requests by December 31, 2026").
> - **Input Validation:** Scan the Input Traceability Map before processing. If any mandatory input is missing, ambiguous, or conflict-prone, you MUST NOT proceed with generation.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If required inputs are unavailable or unclear in the user's context (e.g., missing Current State process performance baselines or vague Business Needs), you MUST immediately halt generation, pivot to advisory/inquiry mode, and request the User to provide the missing facts or clarify ambiguity. Never hallucinate, assume, or guess business reality.

# BUSINESS OBJECTIVES

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project | Project Charter or Kickoff Metadata]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD format of generation | Current Session Metadata]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** `Business Requirements` (Task 6.1) -> Crucial for Section 1, 2 (Traceability Matrix)
*   [ ] **[Primary Input]** `Current State Description` (Task 6.1) -> Crucial for Section 3
*   [ ] **[Primary Input]** `Enterprise Strategy` (Contextual asset) -> Crucial for Section 1

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Strategic Goals** | Long-term organizational strategy, vision statements, market directives | `Enterprise Strategy` / `Business Requirements` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: SMART Business Objectives** | Business pain points, qualitative needs to be quantified, strategic alignment | `Business Requirements` (Traceability Matrix) | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Key Performance Indicators** | Current state operational baselines, process bottlenecks, target state targets | `Current State Description` (Section 2) / `Business Requirements` | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 📋 ID CONVENTION REFERENCE

All elements generated in this document must strictly adhere to the following naming conventions:

| Prefix | Entity | Format | Example |
| :--- | :--- | :--- | :--- |
| **OBJ-** | Business Objective | `OBJ-xx` (where xx is a sequential number) | `OBJ-01`, `OBJ-02` |

---

## 1. Strategic Goals (The Long-Term Vision)
> **🤖 AI AGENT INSTRUCTION:** Describe the qualitative, long-term, ongoing state the enterprise is seeking to establish and maintain through this change. Strategic goals set the direction but are not yet quantified.

*   **Strategic Goal 1:** [INSERT: Qualitative Goal Statement | Overarching qualitative objective (e.g., "Achieve industry-leading digital onboarding efficiency") | Business Requirements (Section 2 - Drivers)]
*   **Strategic Goal 2:** [INSERT: Qualitative Goal Statement | Overarching qualitative objective (e.g., "Establish a resilient, compliance-hardened financial system") | Enterprise Strategy]

---

## 2. SMART Business Objectives
> **🤖 AI AGENT INSTRUCTION:** Decompose the Strategic Goals into highly granular, quantitative, and testable objectives. Apply the SMART criteria rigorously. Every objective must trace back to a specific Business Requirement using its ID (`BR-xx`).

| Objective ID | Business Objective (SMART Statement) | Linked Business Req ID (BR-xx) |
| :--- | :--- | :--- |
| **OBJ-01** | [INSERT: SMART Statement | Quantitative objective (e.g., "Reduce online customer registration dropout rate from 35% to less than 5% by Q4 2026") | `BR-01` |
| **OBJ-02** | [INSERT: SMART Statement | Quantitative objective (e.g., "Reduce manual data entry transaction errors to less than 0.5% within 3 months post-implementation") | `BR-02` |
| **[OBJ-xx]** | [INSERT] | `BR-xx` |

---

## 3. Key Performance Indicators (KPIs)
> **🤖 AI AGENT INSTRUCTION:** Define the precise, measurable parameters that will act as the baseline and target values for measuring change success once the future state is reached.

*   **[INSERT: Metric Name | Precise business metric (e.g., Customer Acquisition Cost - CAC) | Business Requirements Matrix (BR-ID)]:** Target: [INSERT: Quantitative Target | Desired future value (e.g., $15.00) | Future State Target] | Baseline: [INSERT: Quantitative Baseline | Current state baseline value (e.g., $45.00) | Current State Description (Section 2)]
*   **[INSERT: Metric Name | Precise business metric (e.g., Average Order Processing Time) | Business Requirements Matrix (BR-ID)]:** Target: [INSERT: Quantitative Target | Desired future value (e.g., < 2 minutes) | Future State Target] | Baseline: [INSERT: Quantitative Baseline | Current state baseline value (e.g., 25 minutes) | Current State Description (Section 2)]