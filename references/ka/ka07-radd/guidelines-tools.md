---
description: Pre-flight checklist for KA07 Requirements Analysis and Design Definition (Tasks 7.1-7.6) detailing required Guidelines and Tools.
---

# KA07: Requirements Analysis and Design Definition - Guidelines & Tools

> **🤖 AI AGENT INSTRUCTION (PRE-FLIGHT CHECKLIST & MICRO-LOOP RULES):**
> You MUST execute this checklist before generating any artifacts for KA07.
> *   **Guidelines** provide instructions on *why* or *how* to undertake a task.
> *   **Tools** are objects or data *used* to perform the task.
> *   **⚠️ Micro-Loop Enforcement:** For 7.1, 7.2, and 7.3, if `Solution Scope` or `Business Objectives` are missing, HALT the entire loop and request them from the user.

---

## Task 7.1: Specify and Model Requirements

*   **Guidelines (How/Why):**
    *   **Solution Scope** (Output 6.4): The absolute boundary for all requirements.
    *   **Modelling Notations/Standards** (External): Dictates the syntax for models.
*   **Tools (What to Use):**
    *   **Requirements Architecture** (Output 7.4): Ensures models are consistent.
*   **⚠️ Missing Guideline Risk (CRITICAL):** Without **Solution Scope**, the AI Agent will suffer from Scope Creep, generating "gold-plated" requirements that stakeholders never asked for.

## Task 7.2: Verify Requirements

*   **Guidelines (How/Why):**
    *   *(Verification is primarily driven by the 9 BABOK Quality Characteristics).*
*   **Tools (What to Use):**
    *   **Requirements Life Cycle Management Tools** (External): Used to check for atomic, unambiguous, and prioritized traits.
*   **⚠️ Missing Guideline Risk:** Relying solely on manual checks without standardized tools leads to inconsistent syntax and untestable requirements.

## Task 7.3: Validate Requirements

*   **Guidelines (How/Why):**
    *   **Business Objectives** (Output 6.2): The ultimate benchmark for business value.
    *   **Future State Description** (Output 6.2): Ensures the requirement helps achieve the desired future state.
*   **Tools (What to Use):**
    *   **Potential Value** (Output 6.2): Used to assess the value delivered by requirements.
    *   **Solution Scope** (Output 6.4): Ensures requirements that provide benefit are within boundaries.
*   **⚠️ Missing Guideline Risk (CRITICAL):** Without **Business Objectives**, the AI Agent cannot validate if a requirement is building the *right thing*. Every requirement will incorrectly pass the 7.3 Audit.

## Task 7.4: Define Requirements Architecture

*   **Guidelines (How/Why):**
    *   **Legal/Regulatory Information** (External): Impacts architectural constraints.
    *   **Methodologies and Frameworks** (External): Predetermined sets of models (e.g., TOGAF, Zachman).
*   **Tools (What to Use):**
    *   **Architecture Management Software** (External): Used to manage relationships.
*   **⚠️ Missing Guideline Risk:** Ignoring **Legal/Regulatory Information** leads to non-compliant architectural viewpoints, risking massive rework during system integration.

## Task 7.5: Define Design Options

*   **Guidelines (How/Why):**
    *   **Future State Description** (Output 6.2): Ensures design options are viable.
    *   **Solution Scope** (Output 6.4): Boundaries for selecting viable options.
*   **Tools (What to Use):**
    *   **Existing Solutions** (External / Third-party): COTS products considered as components.
    *   **Requirements (traced)** (Output 5.1): Ensures designs fulfill known relationships.
*   **⚠️ Missing Guideline Risk:** Without assessing **Existing Solutions**, the AI Agent will default to "Custom Build" (Create) options, missing faster, cheaper "Purchase" (COTS) alternatives.

## Task 7.6: Analyze Potential Value and Recommend Solution

*   **Guidelines (How/Why):**
    *   **Business Objectives** (Output 6.2): Used to calculate expected benefits.
    *   **Future State Description** (Output 6.2): Ensures the recommended design is appropriate.
*   **Tools (What to Use):**
    *   **Current State Description** (Output 6.1): The baseline to quantify increased value.
    *   **Risk Analysis Results** (Output 6.3): Modifies the potential value based on uncertainty.
*   **⚠️ Missing Guideline Risk:** Without **Risk Analysis Results**, the Executive Presentation will show an artificially inflated ROI, blinding the Sponsor to potential financial disasters.