---
name: fallback-rule
description: Use when a Business Analysis task requires a technique outside the Top 20 core techniques, or when performing ad-hoc stakeholder interviews to elicit raw requirement inputs.
---

# Non-Top 20 Fallback & Elicitation Interview Rule

This rule guides the Agent on how to handle requirements modeling or analysis when using techniques outside the Top 20 core BABOK techniques.

## 1. Operating Protocol

When a task requires a technique outside the Top 20:

1. **Lookup Catalog:** Consult `references/techniques/quick-reference.md` to identify its exact ID, Purpose, Knowledge Area (KA), and Key Artifact.
2. **Declare to User:** Inform the user which technique is being used and explain why it is optimal for the current context.
3. **Initiate Elicitation Interview (AI-to-User Elicitation Session):**
    *   **NEVER** hallucinate or generate empty templates.
    *   Load `references/advisor/elicitation-interview-playbook.md` to check if a standardized questionnaire exists. Match the technique to a Domain (A–E) and present the standardized questionnaire verbatim.
    *   If no playbook questionnaire exists in the playbook, formulate a focused, custom questionnaire (3-5 questions) to gather the raw inputs required for that specific technique.
    *   Instruct the user: *"To apply this technique, I need your input. Please provide the following details through this quick interview..."*
    *   Draft the custom deliverable ONLY after receiving the user's responses (unless **CBAP Fast-Track** conditions apply).
