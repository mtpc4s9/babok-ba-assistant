---
description: Entry point for KA04 Elicitation and Collaboration. Provides context, task list (4.1-4.5), and file navigation for the AI Agent.
---

# KA04: Elicitation and Collaboration

> **🤖 AI AGENT INSTRUCTION (DISPATCHER & TOLLGATE HOOK):**
> Use this document to set the execution context. KA04 is NEVER a single "phase"; it is a continuous, ongoing activity.
> 
> **⚠️ CRITICAL ANTI-HALLUCINATION RULE:** Before executing any KA04 task, run the `readiness-check.md` Tollgate. Elicitation is highly dependent on real-world discovery. For tasks requiring real-world interactions or behavior monitoring (Task 4.2 Conduct Elicitation, Task 4.5 Manage Stakeholder Collaboration), you **MUST** act as an *Analytical Scribe*. 
> If required inputs or real-world data (meeting notes, recordings, user feedback) are missing, you **MUST HALT execution** and prompt the User for an interactive Elicitation Interview. **NEVER** fabricate or hallucinate real-world inputs.

---

## Purpose
To obtain information from stakeholders and confirm the results. It also describes the communication with stakeholders once the business analysis information is assembled and the ongoing collaboration with them throughout the business analysis activities.

## List of 05 Tasks
1. **4.1 Prepare for Elicitation:** Understand the scope of the elicitation activity, select appropriate techniques, and plan for logistics and supporting materials.
2. **4.2 Conduct Elicitation:** Draw out, explore, and identify information relevant to the change through collaborative, research, or experimental types of elicitation.
3. **4.3 Confirm Elicitation Results:** Check the gathered information for accuracy and consistency with other information to establish a shared understanding.
4. **4.4 Communicate Business Analysis Information:** Provide stakeholders with the information they need, at the time they need it, in a useful and tailored format.
5. **4.5 Manage Stakeholder Collaboration:** Work with stakeholders to engage them in the overall business analysis process and ensure commitments are maintained.

## When to Use This KA
*   **Continuously:** Throughout the entire project life cycle; elicitation is an ongoing activity, not a finite phase.
*   **Planned Discovery:** When setting up structured workshops, interviews, observations, or surveys.
*   **Unplanned Discovery:** When capturing "just-in-time" information from ad-hoc conversations or emails.
*   **Consensus Building:** When pushing packaged information out to stakeholders or tracking their willingness to engage and commit resources.

## 📂 Files in This Folder

| File | Role | When to Load |
| :--- | :--- | :--- |
| [README.md](README.md) | This file. Foundational context and entry point. | **Always load first.** |
| [tasks.md](tasks.md) | Task definitions: Purpose, Inputs, Outputs, template mapping. | Load when executing or planning a specific task. |
| [guidelines-tools.md](guidelines-tools.md) | Pre-flight checklist: required Guidelines and Tools. | **Load alongside tasks.md** — mandatory before generating. |
| [stakeholders.md](stakeholders.md) | Stakeholder verification: Must Have, Should Have, Approvers. | **Load alongside tasks.md** — mandatory before engaging. |
| [techniques.md](techniques.md) | Technique selection: which techniques apply and why. | Load only if the user asks HOW to perform or WHICH technique. |
| [gotchas.md](gotchas.md) | Common errors, CBAP exam traps, and anti-patterns. | Load only if the user asks about risks, pitfalls, or exams. |