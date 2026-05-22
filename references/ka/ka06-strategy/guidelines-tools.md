---
description: Pre-flight checklist for KA06 Strategy Analysis (Tasks 6.1-6.4) detailing required Guidelines (boundaries/direction) and Tools (prerequisite data).
---

# KA06: Strategy Analysis - Guidelines & Tools

> **🤖 AI AGENT INSTRUCTION (PRE-FLIGHT CHECKLIST):**
> You MUST execute this checklist before generating any artifacts for KA06. 
> *   **Guidelines** provide instructions or descriptions on *why* or *how* to undertake a task. 
> *   **Tools** are objects or data *used* to perform the task.
> Check for the presence of these elements. If a critical guideline/tool is missing, HALT execution, flag the **Missing Risk**, and ask the user for the missing context.

## Task 6.1: Analyze Current State
*   **Guidelines (How/Why):**
    *   **Organizational Strategy** (External): The implicit or explicit corporate direction.
    *   **Business Analysis Approach** (Output 3.1): Guides how to undertake the analysis.
*   **Tools (What to Use):**
    *   **Solution Performance Goals & Measures** (Output 8.1): The current metrics.
    *   **Enterprise / Solution Limitations** (Outputs 8.3, 8.4): Known system or cultural constraints.
    *   **Stakeholder Analysis Results** (Output 3.2): Who to consult for the As-Is state.
*   **⚠️ Missing Guideline Risk (CRITICAL):** If **Organizational Strategy** is absent, the Current State analysis will severely misalign with corporate direction, leading to an invalid baseline and misdirected efforts.

## Task 6.2: Define Future State
*   **Guidelines (How/Why):**
    *   **Organizational Strategy** (External): Defines the overarching corporate vision to align the future state against.
*   **Tools (What to Use):**
    *   **Current State Description** (Output 6.1): Serves as the starting baseline.
    *   **Metrics and Key Performance Indicators (KPIs)**: Used to define what success looks like.
*   **⚠️ Missing Guideline Risk:** If the **Current State Description** is missing, the Future State becomes an isolated wish list, making it impossible to perform a realistic Gap Analysis in downstream tasks.

## Task 6.3: Assess Risks
*   **Guidelines (How/Why):**
    *   **Business Policies** (External): Defines the limits of decision-making and risk tolerance.
    *   **Business Analysis Approach** (Output 3.1): Directs the risk analysis methodology.
    *   **Stakeholder Engagement Approach** (Output 3.2): Identifies who can validate risk impacts.
*   **Tools (What to Use):**
    *   **Current State Description** (Output 6.1) & **Future State Description** (Output 6.2): Contextual boundaries for identifying risks.
    *   **Identified Risks** (Elicitation / External): The starting register of potential threats.
*   **⚠️ Missing Guideline Risk:** Operating without **Business Policies** causes the BA to recommend risk responses (e.g., *Accept* or *Increase*) that explicitly violate the enterprise's legal or operational risk tolerance.

## Task 6.4: Define Change Strategy
*   **Guidelines (How/Why):**
    *   **Business Analysis Approach** (Output 3.1): Dictates how the change strategy will be formulated and presented.
*   **Tools (What to Use):**
    *   **Design Options** (Output 7.5): Potential ways to satisfy the business needs.
    *   **Solution Recommendations** (Output 7.6): The most appropriate solution evaluated by SMEs.
*   **⚠️ Iterative Loop Warning:** Design Options (7.5) and Solution Recommendations (7.6) are outputs of KA07, which itself depends on KA06 outputs — this is a legitimate BABOK iterative relationship.
    *   **In pre-project or initial feasibility contexts:** These Tools are NOT yet available. Proceed with a clearly stated assumption: *"Design Options and Solution Recommendations are TBD, pending completion of Tasks 6.1–6.3. The Change Strategy produced here is a working hypothesis subject to revision."* Do NOT block execution.
    *   **In iterative or late-stage contexts (KA07 artifacts exist):** These Tools MUST be present before finalizing the Change Strategy. If absent, BLOCK and request the user to provide them.