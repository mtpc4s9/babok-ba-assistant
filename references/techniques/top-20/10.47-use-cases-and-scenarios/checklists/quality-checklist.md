---
description: 20-point quality validation checklist (C1-C20) for verifying Use Case specifications before finalization.
metadata:
  tags: [checklist, use-case, quality, qa]
  source: internal
---

# Use Case Quality Validation Checklist

This 20-point quality checklist is used to review and validate a Use Case specification before finalized submission or delivery to engineering.

## Validation Scorecard Format
After evaluating the Use Case, compile the results in the following scorecard table:

```markdown
## Validation Scorecard: [UC-ID]

| Code | Quality Metric | Status (✅/❌/⚠️) | Evaluator Comments & Findings |
| :--- | :--- | :---: | :--- |
| **C1** | Verb + Object Name | | |
| **C2** | User-Goal Level | | |
| ... | ... | ... | ... |

**Final Outcome:** [X]/20 Pass | Status: [Ready / Needs Revision]
```
*Status Markers: ✅ Pass | ❌ Fail (must correct immediately) | ⚠️ Needs Review (action required or TBD logged)*

---

## Group A: Scope & Identification (C1 - C5)

### C1. Name Syntax
*   **Metric:** The Use Case name starts with an active verb and a direct object noun phrase, containing no actor details.
*   **How to Verify:** Identify the leading verb. Ensure it is a concrete action, not vague.
*   *Pass:* "Enroll in Online Course", "Approve Mentoring Request", "Issue Completion Certificate".
*   *Fail:* "Enrollment" (no verb), "Student Books Session" (actor embedded), "Manage Courses" (vague verb).

### C2. User-Goal Level (Sea Level)
*   **Metric:** The Use Case represents a user-goal level transaction (passes the Coffee-Break Test). Upon completion, the actor has achieved a meaningful business objective.
*   **How to Verify:** Examine the postconditions. Can the actor immediately stop and take a break without leaving a process half-done?
*   *Pass:* "Enroll in Online Course" (outcome: enrolled, has material access).
*   *Fail:* "Verify OTP" (too low-level; just a sub-step of a larger authentication or payment flow), "Manage Account Lifecycle" (too high-level; summary cloud level spanning multiple distinct sessions).

### C3. Unique Naming & ID
*   **Metric:** The Use Case ID is unique within the project and adheres to the naming standard.
*   **How to Verify:** Check the master registry for ID duplication. Enforce the format: `UC-[MODULE]-[SEQ]`.
*   *Pass:* `UC-ENROLL-01`, `UC-MENTOR-003`.
*   *Fail:* `UC1` (no module code), `UseCase_CourseEnroll` (hard-coded name).

### C4. Singular Actor & Goal
*   **Metric:** The specification defines exactly one primary actor and one clear business goal.
*   **How to Verify:** Verify that only one initiating role is listed. Check that the description describes one cohesive outcome.
*   *Pass:* Primary Actor: Student. Goal: Purchase a course subscription.
*   *Fail:* Primary Actor: Student + Corporate HR Manager. (This must be split into: "Student self-enrolls" and "HR Manager allocates enterprise seat license").

### C5. Clear System Boundary
*   **Metric:** The steps clearly define interaction with a single, specific host system, treating external systems strictly as secondary actors.
*   **How to Verify:** Verify that "System" steps throughout the courses refer consistently to the boundaries of the target platform.
*   *Pass:* The System represents the "Web Portal", communicating with "Payment Gateway" as an external secondary system.
*   *Fail:* Blurring the boundaries between the web portal, mobile app, and external legacy APIs as if they were a single system step.

---

## Group B: Actor & Context (C6 - C8)

### C6. Specific Actor Roles
*   **Metric:** The primary actor represents a specific role or persona class. Generic terms like "User" or "Everyone" are avoided.
*   **How to Verify:** Check the Actor field for role specificity.
*   *Pass:* "Premium Student", "Certified Mentor", "Corporate HR Administrator".
*   *Fail:* "User", "Client", "Actor 1".

### C7. Structured Description
*   **Metric:** The Description is a concise 2-3 sentence summary addressing the **Why** (trigger), **What** (action), and **Outcome** (value).
*   **How to Verify:** Read the description box and check for these three components.
*   *Pass:* "When a student completes all course lessons and passes the final exam [WHY], the student requests their certificate [WHAT]. The system generates a verified PDF certificate, emails it to the student, and logs it in the database [OUTCOME]."
*   *Fail:* "This Use Case is about certificate generation." (Missing WHY and OUTCOME).

### C8. Quantified Frequency
*   **Metric:** The Frequency of Use is represented quantitatively using concrete metrics per time unit.
*   **How to Verify:** Check for numbers instead of vague adjectives.
*   *Pass:* "Average: 500 requests/day; peak: 120 requests/hour during campaign launches."
*   *Fail:* "Frequently used", "Occasional daily use" (no volume data).

---

## Group C: Preconditions & Postconditions (C9 - C11)

### C9. Verifiable Preconditions
*   **Metric:** All preconditions represent hard, verifiable system states. Motivation or business rules are excluded.
*   **How to Verify:** Can the system check the precondition programmatically before the trigger occurs (e.g., via a boolean or DB check)?
*   *Pass:* "Student profile has email_verified='True'."
*   *Fail:* "Student is eager to start learning" (subjective, non-verifiable), "System is operational" (too vague).

### C10. State-Based Postconditions
*   **Metric:** Postconditions describe the passive state of the system *after* execution, covering database records, UI states, and external integrations.
*   **How to Verify:** Ensure postconditions represent states (e.g., "created", "updated") rather than active steps (e.g., "System saves...").
*   *Pass:* "Enrollment status is updated to 'Active' in the database; course access is granted."
*   *Fail:* "The System saves the enrollment." (This belongs in the Normal Course steps).

### C11. Preconditions vs. Assumptions
*   **Metric:** Preconditions (hard requirements verified by the system) are clearly separated from Assumptions (beliefs held as true but unverified).
*   *Pass (Precondition):* "Student is logged in." *Pass (Assumption):* "The student has basic web browser literacy."
*   *Fail:* Listing user computer literacy or network speed as Preconditions.

---

## Group D: Normal Course (C12 - C15)

### C12. Atomic Numbered Steps
*   **Metric:** Steps are presented as a numbered list. Each step contains exactly one atomic action.
*   **How to Verify:** Check for the word "and" connecting multiple distinct actions in a single step.
*   *Pass:* "3. The Student selects the payment method."
*   *Fail:* "3. The Student selects the payment method, enters details, and clicks Submit." (Three distinct actions).

### C13. Alternating Interaction Flow
*   **Metric:** Steps clearly depict a dialogue, alternating between Actor action (inputs) and System response (validations/outputs).
*   **How to Verify:** Check if there are long sequences of actor actions without system responses.
*   *Pass:* 1. Actor clicks. -> 2. System loads page. -> 3. Actor inputs details. -> 4. System validates.
*   *Fail:* 1. Actor selects. -> 2. Actor enters. -> 3. Actor clicks. (Lacks system feedback).

### C14. No Embedded Branching Logic
*   **Metric:** The Normal Course represents a straight, error-free path to success. No `if/else`, loops, or error conditions are embedded.
*   **How to Verify:** Scan for words like "if", "in case", "otherwise", or "loop" in the main flow.
*   *Pass:* "5. The System validates the student's remaining session quota."
*   *Fail:* "5. If the student has a Premium subscription, show all mentors; otherwise, show free-tier mentors." (Branching must be moved to an Alternative Course).

### C15. Flow Traceability
*   **Metric:** The flow starts with the trigger and concludes by meeting the successful postcondition. No steps are left hanging.
*   *Pass:* Step 1 matches the trigger $\rightarrow$ Step 8 successfully accomplishes the success postcondition.

---

## Group E: Detours & Failure Boundaries (C16 - C18)

### C16. Structured Alternative Courses
*   **Metric:** Every Alternative Course has a unique ID, specifies the exact step and condition where it diverges from the Normal Course, and concludes by rejoining the main flow or terminating in Success.
*   *Pass:*
    ```markdown
    UC-ENROLL-01.AC.1: Alternative Payment
    At step 3 of the Normal Course, if the student selects "Voucher":
    3a. The System displays a voucher field.
    3b. The Student enters the voucher code...
    ...Rejoin the Normal Course at Step 5.
    ```
*   *Fail:* "AC1: The student can pay with a voucher if they have one." (Lacks step reference, sub-numbering, and rejoining instructions).

### C17. Detailed Exception Flows
*   **Metric:** Every Exception flow defines the trigger condition, system response, and final system state (Failure postcondition).
*   *Pass:*
    ```markdown
    UC-ENROLL-01.EX.2: Course at Capacity
    Trigger: At Step 4, database returns COURSE_FULL.
    Response: System displays "Sorry, this course is full."
    Final State: Transaction rolled back, no enrollment created. Use Case fails.
    ```

### C18. Failure Mode Coverage
*   **Metric:** The Use Case adequately covers common operational failure modes (validation errors, timeouts, permission denials, external gateway failures, concurrency conflicts).
*   *Rule of Thumb:* A typical transactional Use Case should have at least 3 distinct Exceptions.

---

## Group F: Completeness & NFRs (C19 - C20)

### C19. Valid Includes
*   **Metric:** Any Use Case referenced in the Includes field exists in the registry with its own specification.
*   *Pass:* "Includes: UC-PAY-01 (Process payment)" (where `UC-PAY-01` is a fully drafted Use Case).
*   *Fail:* "Includes: Process Payment" (lacks unique ID).

### C20. Non-Functional Special Requirements
*   **Metric:** The Special Requirements section only documents Non-Functional Requirements (NFRs) such as performance limits, security regulations, or uptime requirements.
*   *Pass (NFR):* "The checkout validation must return within 1.5 seconds."
*   *Fail (Functional):* "The customer can only book 3 mentoring sessions per month." (This is a business rule, not a Special Requirement).
