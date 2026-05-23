---
description: Use when writing, refining, or evaluating Agile User Stories and Given-When-Then Gherkin Acceptance Criteria.
metadata:
  tags: [agile, user-story, acceptance-criteria, gherkin, invest]
  source: internal
---

# User Stories & Acceptance Criteria (BABOK 10.48)

This folder contains the comprehensive, Tier 2 structured guidelines for drafting, refining, and validating high-quality User Stories and Gherkin-style Acceptance Criteria (AC).

## 1. Operating Modes for AI Agent

When the user triggers this technique, you **MUST** operate in one of the following three distinct modes. Determine the mode based on the user's prompt or ask for clarification if ambiguous:

*   **Mode A — Generation from Scratch:** The user provides a feature description, PRD, or business requirement, and you generate the complete User Story list, Card narratives, and Gherkin ACs from scratch.
*   **Mode B — Refinement & Review:** The user provides an existing User Story, and you evaluate it against the **INVEST** quality framework, highlighting gaps and providing a revised, high-quality version.
*   **Mode C — Elicitation of Acceptance Criteria:** The user has a stable User Story card but needs detailed, testable Gherkin-style Acceptance Criteria.

---

## 2. Core Operating Rules & Instructions

### Step 1: Input Elicitation (Zero Guessing Rule)
Before drafting a User Story, you **MUST** ensure the following four inputs are available in the context. If any are missing, **STOP** and ask the user to provide them (never hallucinate user intent):
1.  **Target Persona/User Role:** Who exactly is receiving the value? (e.g., "Registered E-Commerce Customer", not just "User").
2.  **User Goal:** What specific action does the persona want to perform?
3.  **Business Value:** Why does the persona need this capability? What benefit does it deliver?
4.  **Context/Scope:** Which epic, feature module, or system boundaries does this story belong to?

### Step 2: Draft the Narrative Card
Follow the standard three-part Agile card structure:
```
**US-[ID]**: [Short, Descriptive Title]

**As a** [specific user persona / system actor]
**I want to** [perform a specific, measurable system action]
**So that** [achieve a clear business outcome or personal benefit]
```
*   **⚠️ SHARP NEGATIVE CONSTRAINT:** The "So that..." clause **MUST** express a real business outcome or customer benefit. Never repeat the action (e.g., *Wrong:* "So that I can save my card." *Right:* "So that I can complete future checkouts faster without re-entering payment details.").

### Step 3: Apply the INVEST Framework
Self-evaluate the drafted story against the 6 INVEST quality criteria. If any criteria fail, apply the designated remedies.
*   *Detailed Guide:* [INVEST Criteria Details](references/invest-criteria.md)

### Step 4: Generate Given-When-Then Acceptance Criteria
Each User Story **MUST** have a minimum of **three (3) distinct Gherkin scenarios**:
1.  **Scenario 1 (Happy Path):** The successful execution of the core action.
2.  **Scenario 2 (Edge Case / Validation):** Handling boundaries, rules, or inputs.
3.  **Scenario 3 (Negative Path / Error):** How the system gracefully handles failures.

Use the strict Gherkin format:
```
**AC[Number]: [Scenario Name]**
- **Given** [specific initial context or pre-condition]
- **When** [the specific action taken by the actor]
- **Then** [the testable system response or outcome]
- **And** [additional minor outcomes, if applicable]
```
*   *Detailed Checklist:* [Acceptance Criteria Quality Checklist](checklists/quality-checklist.md)

---

## 3. Reference Material & Supporting Assets

To deliver high-fidelity outputs, you can dynamically load the following supporting files on-demand:

*   **Templates:** Use the pre-structured [Agile User Story Specification Template](templates/user-story-specification.md) to format your final deliverable.
*   **INVEST Reference Guide:** Consult [INVEST Criteria Details](references/invest-criteria.md) to understand deep-dive definitions, violation symptoms, and splitting strategies.
*   **Production Examples:** Read [High-Fidelity User Story Examples](references/examples.md) containing 7 production-grade, industry-standard Agile stories and Gherkin ACs mapped to EdTech and E-Commerce domains.
*   **Quality Checklist:** Review the [Quality Self-Checklist](checklists/quality-checklist.md) before final output submission to ensure compliance and avoid common CBAP gotchas.

---

## 4. Attributions
*Standardized to IIBA BABOK V3 English standards for Enterprise AI Environments.*
