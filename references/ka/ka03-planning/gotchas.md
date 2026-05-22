---
description: Critical traps and common CBAP misconceptions for KA03 Business Analysis Planning and Monitoring (Tasks 3.1-3.5) to be flagged during execution.
---

# KA03: Business Analysis Planning and Monitoring - Gotchas & Traps

> **🤖 AI AGENT INSTRUCTION (TRAP DETECTION & FORMATTING):**
> Use this file to detect user misconceptions during BA planning. When a user's scenario triggers one of these 6 gotchas, you MUST inject the relevant warning into the `⚠️ CBAP Gotcha:` field of your standard response format (defined in `SKILL.md`).

## Top 6 BA Planning Traps

### 1. The "Project Plan" Trap (Task 3.1)
*   **The Trap:** Confusing the *Business Analysis Approach* with the overall *Project Management Plan* or Work Breakdown Structure (WBS).
*   **BABOK Standard:** The BA Approach ONLY covers Business Analysis activities. It must integrate into the Project Plan but does not replace the Project Manager's responsibilities.

### 2. Communication vs. Collaboration (Task 3.2)
*   **The Trap:** Believing that sending a status report email constitutes "Collaboration".
*   **BABOK Standard:** *Communication* is about packaging and pushing information (e.g., reports). *Collaboration* is a two-way, dynamic interaction to create value (e.g., workshops, brainstorming).

### 3. The "Approvals = 100% Consensus" Trap (Task 3.3)
*   **The Trap:** Assuming *Approve Requirements* means every stakeholder must agree.
*   **BABOK Standard:** Approval means agreement by those explicitly identified with *decision-making authority* in the Governance Approach. Conflict resolution and escalation paths handle disagreements.

### 4. The "Only Requirements" Trap (Task 3.4)
*   **The Trap:** Setting up a repository tool (like Jira) strictly for Requirements and ignoring other artifacts.
*   **BABOK Standard:** Task 3.4 governs ALL *Business Analysis Information* (including elicitation results, models, meeting notes, and risks), not just formal requirements.

### 5. Solution Performance vs. BA Performance (Task 3.5)
*   **The Trap:** Using software bug rates or system downtime to measure BA Performance.
*   **BABOK Standard:** Task 3.5 strictly evaluates the performance of the *Business Analysis process* (e.g., requirement defect rate, timeliness of deliverables). Evaluating software functionality belongs to KA08 (Solution Evaluation).

### 6. The "Hidden Dependency" Blind Spot (Cross-KA Trap)
*   **The Trap:** Starting Elicitation (KA04) without finalizing KA03.
*   **BABOK Standard:** KA03 outputs are mandatory *Guidelines* for downstream tasks. If you don't define the *Information Management Approach* (3.4) first, elicited data will be lost or inconsistently formatted.