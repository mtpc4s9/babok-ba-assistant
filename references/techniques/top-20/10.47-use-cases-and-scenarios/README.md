---
description: Use when scoping, drafting, refining, or reviewing detailed Use Case specifications and Scenarios.
metadata:
  tags: [use-case, scenario, functional-requirements, scoping]
  source: internal
---

# Use Cases & Scenarios (BABOK 10.47)

This folder contains the comprehensive, Tier 2 structured guidelines and templates for scoping, modeling, and documenting detailed Use Case specifications and interaction scenarios.

## 1. Operating Modes for AI Agent

When this technique is triggered, you **MUST** operate in one of the following four distinct modes. Identify the mode from the user's request or prompt for clarification if needed:

*   **Mode A — Write New Use Case from Feature:** The user provides a feature description, business requirement, or PRD, and you draft the complete Use Case from scratch.
*   **Mode B — Split Feature into Use Case List:** The user pastes a large feature or complex system workflow and wants to identify all candidate Use Cases. You apply scoping techniques to produce a **Use Case List table** first, then ask the user which Use Case to document in detail.
*   **Mode C — Review / Refine Existing Use Case:** The user pastes an existing Use Case and wants a quality review. You skip scoping and execute the 20-point quality validation checklist immediately.
*   **Mode D — Write Specific Section:** The user requests a specific section (e.g., the Normal Course, Alternative Courses, or Exceptions) for a Use Case already present in the context.

---

## 2. Core Scoping Rules (The Alignment Phase)

Before drafting any Use Case, apply these four scoping rules (Alistair Cockburn standards) to ensure correct boundary definition:

1.  **The Coffee-Break Test:** Can the primary actor take a coffee break immediately after completing this Use Case without feeling their task is incomplete? If no, the scope is too low (sub-function); merge it. If yes, the scope is correct (user-goal level).
2.  **Goal Level (Sea Level):**
    *   *Summary (Cloud Level):* Spans multiple sessions (e.g., "Manage Course Lifecycles"). Too high; do not write as a single Use Case.
    *   *User-Goal (Sea Level):* ✅ 1 actor, 1 session, achieves 1 concrete business goal (e.g., "Enroll in a Course"). This is the correct level.
    *   *Sub-function (Fish Level):* A small step inside a goal (e.g., "Verify OTP"). Too low; treat as an `<include>` step inside another Use Case.
3.  **One Actor, One Goal, One Session:** Ensure the Use Case has exactly one primary actor, completing one business goal in a single continuous session. If multiple goals are present, split into separate Use Cases.
4.  **System Boundary Interaction:** A Use Case describes the interaction between the actor and the system. Every step must represent either the actor doing something to the system (input/action) or the system responding to the actor (output/validation). Do not document system-internal database design details.

---

## 3. Step-by-Step Writing Workflow (Sequential Mode)

To ensure maximum quality, you **MUST** draft the Use Case sequentially, generating **one section group at a time** and pausing for user confirmation before moving on (unless the user explicitly requests the full document at once):

*   **Group 1 — Profile & Description:** Use Case ID, Name, Primary/Secondary Actors, and Description.
    *   *Pause and Ask:* "Group 1 complete. Confirm to proceed to preconditions, postconditions, priority, and frequency?"
*   **Group 2 — Conditions & Metadata:** Preconditions, Postconditions (Success & Failure), Priority, and Frequency of Use.
    *   *Pause and Ask:* "Group 2 complete. Confirm to proceed to the Normal Course of Events?"
*   **Group 3 — Normal Course of Events:** Numbered, alternating step-by-step happy path.
    *   *Pause and Ask:* "Normal Course complete. Confirm to proceed to Alternative Courses and Exceptions?"
*   **Group 4 — Detours (Alternative Courses & Exceptions):** Detour step mappings (`AC.1`, `EX.1`).
    *   *Pause and Ask:* "Detours complete. Confirm to proceed to the final group (Includes, Special Requirements, Assumptions, Notes)?"
*   **Group 5 — Supporting Details:** Includes, Special Requirements, Assumptions, and Notes & Issues.
    *   *Pause and Ask:* "Specification complete. Shall I run the 20-point quality validation checklist now?"

---

## 4. Reference Material & Supporting Assets

To deliver high-fidelity outputs, you can dynamically load the following supporting files on-demand:

*   **Templates:** Use the pre-structured [Use Case Specification Template](templates/use-case-specification.md) to format the final deliverable.
*   **Field Guide:** Consult the [13-Field Specification Guide](references/template-guide.md) for detailed definitions, syntax rules, and precise instructions for each section.
*   **Writing Style & Conventions:** Check [Use Case Writing Style & Standards](references/writing-style.md) to review active voice conventions, Cockburn numbering standards, and critical anti-patterns.
*   **Production Examples:** Read [High-Fidelity Use Case Examples](references/examples.md) containing two complete, production-ready specifications (Course Enrollment and Mentor Booking Approval) mapped to real-world system flows.
*   **Quality Checklist:** Review the [20-Point Quality Validation Checklist](checklists/quality-checklist.md) before final output submission to ensure compliance and avoid common CBAP traps.
