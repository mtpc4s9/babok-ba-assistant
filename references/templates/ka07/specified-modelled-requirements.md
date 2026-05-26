---
description: Template for generating atomic, highly detailed specified and modelled requirements (incorporating text, matrices, and diagrams) to build industry-standard documents like an SRS or FRD (BABOK Task 7.1).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES & CBAP ALIGNMENT)
> - **CHUNK EXECUTION RULE (Anti-Hallucination):** Real-world requirements specifications are highly dense. You **MUST NOT** generate the entire system specification at once. Prompt the user to specify which specific Feature, Module, or System Boundary (e.g., "User Access Control", "Billing Ledger Integration", "Non-Functional Reliability") they wish to model right now.
> - **BABOK Alignment (7.1.4.1):** Your output **MUST** combine *Text* (narrative descriptions), *Matrices* (tables mapping rules and triggers), and *Diagrams* (logical flow descriptions or Mermaid sequences).
> - **IT Perspective (11.3):** Maintain a clear separation between *Solution Requirements* (what the system must do to deliver value) and *Technical Design* (how it is coded). Do not generate programming source code or database physical schemas unless explicitly requested.
> - **⚠️ SHARP NEGATIVE CONSTRAINT (ANTI-HALLUCINATION):** If the `Solution Scope` (Output 6.4) or `Elicitation Results` (Output 4.2/4.3) are unknown, **HALT execution**. You cannot write functional requirements without knowing the business needs and strategic boundaries. Prompt the user for these inputs.
> - **🔄 THE REWORK WORKFLOW HOOK:** Remind the user that this document represents the "Raw Specification". In accordance with the Sequential Bridge Model, these requirements are intended to be checked via `requirements-quality-audit.md` (Task 7.2/7.3) and structured via `requirements-architecture.md` (Task 7.4).

# REQUIREMENTS (SPECIFIED AND MODELLED)

**Initiative/Project:** [INSERT: Short Text | e.g., "EcO2 Client Web Portal"]
**Target Module/Feature:** [INSERT: Short Text | e.g., "Section 3.1.2 - Instruction Management"]
**Date of Draft:** [INSERT: ISO Date | YYYY-MM-DD]
**Target Audience:** [Select: Implementation SMEs | Domain SMEs | Testers]

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** Elicitation Results (Task 4.2/4.3) -> Raw stakeholder findings, meeting notes, and observations.
*   [ ] **[Primary Input]** Solution Scope (Task 6.4) -> Defines what is in-scope and out-of-scope.
*   [ ] **[Shared Input]** Business Rules Catalog (../shared/business-rules-catalog.md) -> The single source of truth for decoupled business rules.

---

## 1. Introduction & Context (BABOK 7.1 & 11.3)
> **🤖 AI AGENT INSTRUCTION:** Provide a brief overview of this specific chunk/module, referencing its business purpose within the larger system.

*   **Module Purpose:** [INSERT: Narrative | e.g., "To define the requirements for inviting, approving, and editing users within the Client Web application."]
*   **Traceability (Parent Need):** [INSERT: e.g., "Traces back to Business Objective OBJ-01: Improve customer onboarding efficiency by 40%."]

---

## 2. Specific Requirements (Functional & Behavioural)
> **🤖 AI AGENT INSTRUCTION:** Parse the elicitation notes and generate *Atomic, Complete, Concise, and Testable* (BABOK 7.2.4) functional requirements. Structure this as a Matrix (Table) mapping directly to the features requested.
> **⚠️ DECOUPLING RULE:** Do not write business rules inline in the requirement description. All business rules must refer to an absolute RU-ID in `../shared/business-rules-catalog.md` (e.g., `RU-04`).

| Req ID | Feature/Function | Description (The 'What') | Associated Business Rule | Acceptance Criteria (Testable) |
| :--- | :--- | :--- | :--- | :--- |
| **[FR-USR-01]** | [e.g., Add Instruction] | [INSERT: "The system shall allow authorized EcO2 users to create instructions with Subject, Header Image, and Content in multiple languages."] | `RU-04` (Subject max length is 150 characters) | [INSERT: "Given an authorized user, When required fields are filled and 'Publish' is clicked, Then the instruction appears at the top of the list."] |
| **[INSERT]** | [INSERT] | [INSERT] | `RU-xx` | [INSERT] |

---

## 3. Associated Models & Designs (BABOK 7.1.4.1)
> **🤖 AI AGENT INSTRUCTION:** Generate the necessary business-level designs (Data Dictionary snippets, State Models, or User Interface flow descriptions) that support the functional requirements above.

### 3.1 Data Elements (Data Dictionary)
| Data Element | Definition / Description | Type / Format | Allowed Values |
| :--- | :--- | :--- | :--- |
| **[Header_Image]** | [Image URL for the instruction header] | [URL / String] | [Valid image format (.png, .jpg)] |
| **[INSERT]** | [INSERT] | [INSERT] | [INSERT] |

### 3.2 Activity / Interface Flow
*   **Trigger Event:** [INSERT: e.g., "User clicks 'Add Instruction' button."]
*   **Main Success Scenario:** 
    1. [INSERT: Step 1]
    2. [INSERT: Step 2]
*   **Exception / Alternative Paths:** [INSERT: e.g., "If mandatory fields are missing, display error message at the field's position."]

---

## 4. Non-Functional Requirements (Quality of Service)
> **🤖 AI AGENT INSTRUCTION:** Identify any Non-Functional Requirements (BABOK 10.30) specific to this module, categorized by the standard attributes (e.g., Usability, Reliability, Performance, Security).

*   **[Usability - Accessibility]:** [INSERT: e.g., "The module must support both English and Vietnamese languages natively without external plugins."]
*   **[Performance]:** [INSERT: e.g., "The system shall handle maximum 20 parameters/1s (10 connections)."]
*   **[Security - Roles]:** [INSERT: e.g., "Only users mapped to the 'Adm' or 'Mag' role in the Roles & Permissions Matrix can access the Edit User function."]

---

## 5. Next Step Verification (Sequential Bridge Tollgate)
> **🤖 AI AGENT INSTRUCTION (TOLLGATE EXECUTION):** 
> Display this block exactly to prompt the user for the next steps. These requirements are considered **RAW** until they undergo Quality Audit and Architectural Mapping.

*   **Self-Check Prompt:** "I have successfully drafted the requirements and models for the **[Module Name]**. Before we proceed, we should verify and validate these items to prevent defects downstream. Please select your preferred next step:
    1. **Run Quality Audit (Task 7.2/7.3):** Load `requirements-quality-audit.md` to run a strict verification checklist (Atomic, Testable, Concise) and validate strategic value.
    2. **Model Requirements Architecture (Task 7.4):** Load `requirements-architecture.md` to map these requirements into structural views (Process, Data, Role) and analyze interrelationships."