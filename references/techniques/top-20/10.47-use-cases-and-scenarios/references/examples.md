---
description: Two complete, high-fidelity Use Case specification examples (Course Enrollment and Mentor Booking Approval) mapped to real-world system flows.
metadata:
  tags: [examples, use-case, specification, functional-requirements]
  source: internal
---

# Production-Grade Use Case Specification Examples

This document provides two complete, production-grade Use Case specification examples that have passed the full 20-point quality validation checklist. Use these as reference standards for writing and refining Use Case documentation in your project.

---

## Example 1: Course Enrollment with Payment Gateway

### Use Case Profile & Metadata

| Field | Value |
| :--- | :--- |
| **Use Case ID:** | `UC-ENROLL-01` |
| **Use Case Name:** | Enroll in Online Course |
| **Created By:** | Senior Business Analyst | **Last Updated By:** | Lead Analyst |
| **Date Created:** | 2026-05-14 | **Date Last Updated:** | 2026-05-14 |

---

### Context & Conditions

| Field | Value |
| :--- | :--- |
| **Actor:** | **Primary Actor:** Enrolled Student (registered account, email verified).<br>**Secondary Actor(s):** Payment Gateway, Notification Service, LMS (Learning Management System). |
| **Description:** | When a student discovers a course on the platform catalog and decides to purchase it, the student navigates to the course page and completes the enrollment transaction. The Use Case ends when the payment is confirmed, the student's account is granted immediate access to all course materials, and a welcome notification is successfully dispatched. |
| **Preconditions:** | 1. Student has successfully logged in with a verified email address.<br>2. The selected course status is 'Published' and has remaining seat capacity.<br>3. Student is not currently or previously enrolled in this course (no duplicate active enrollments).<br>4. External Payment Gateway service is online and responsive. |
| **Postconditions:** | **Postcondition (Success):**<br>1. An enrollment record is created in the Enrollments database with status='Active' and the current timestamp.<br>2. Student's account is granted read and streaming access to all published course materials and lessons.<br>3. Payment transaction is recorded in the Payments ledger with status='Completed' and a unique transaction reference ID.<br>4. A welcome email and push notification containing course access details are dispatched to the student within 60 seconds.<br>5. The course active enrollment count is incremented by 1.<br><br>**Postcondition (Failure):**<br>1. No database records are created or updated in the Enrollments table.<br>2. No payment is charged to the student's financial method.<br>3. Student course access permissions remain unchanged. |
| **Priority:** | High — Core revenue-generating feature; critical for product launch. |
| **Frequency of Use:** | Estimated ~500 enrollments per day platform-wide; peak volume of ~120 per hour during promotional campaigns. |

---

### Interaction Flows

#### 1. Normal Course of Events (Main Flow / Happy Path)

| Step | Action Description |
| :--- | :--- |
| **Step 1** | **Actor:** The Student browses the course catalog and clicks on the target course card. |
| **Step 2** | **System:** Fetches and displays the **Course Detail** page: syllabus, instructor bio, ratings, price, and the **Enroll Now** button. |
| **Step 3** | **Actor:** The Student clicks the **Enroll Now** button. |
| **Step 4** | **System:** Validates preconditions and displays the **Order Summary** screen: course title, original price, applicable discounts, and total balance due. |
| **Step 5** | **Actor:** The Student selects their preferred payment method (digital wallet, credit card, or corporate voucher) and clicks **Proceed to Payment**. |
| **Step 6** | **System:** Invokes the external payment integration `UC-PAY-01` to process the financial transaction. |
| **Step 7** | **System:** Upon receiving transaction success confirmation, creates the enrollment record in the LMS and grants the Student course access. |
| **Step 8** | **System:** Displays the **Enrollment Confirmed** screen containing a **Go to Course** button and a download link for the tax receipt. |
| **Step 9** | **System:** Invokes the notification system `UC-NOTI-01` to deliver the welcome email and push notification. |

---

#### 2. Alternative Courses

##### `UC-ENROLL-01.AC.1`: Enroll using a Corporate Voucher Code
*Triggered at Step 5 of the Normal Course when the Student selects "Corporate Voucher" as their payment method:*
- **5a.** The System displays a voucher code entry field.
- **5b.** The Student enters their corporate voucher code and clicks **Apply**.
- **5c.** The System validates the code against the active vouchers table: checks expiration date, course matching constraints, and remaining usage limits.
- **5d.** The System sets the balance due to $0 and displays: "Voucher applied — 100% discount".
- **5e.** The Student clicks **Confirm Enrollment** $\rightarrow$ continue from Step 7 of the Normal Course (skipping external payment gateway invocation).

##### `UC-ENROLL-01.AC.2`: Re-enroll in an Expired Course
*Triggered at Step 3 of the Normal Course if the student previously completed the course but their access license has expired:*
- **3a.** The System detects the expired enrollment status ('Expired') and displays the banner: "Your previous access license for this course expired on [date]. Re-enroll to regain learning access?"
- **3b.** The Student clicks **Re-enroll** $\rightarrow$ continue from Step 4 of the Normal Course. (The original expired record is archived, and a new active enrollment transaction is prepared).

---

#### 3. Exceptions

##### `UC-ENROLL-01.EX.1`: Payment Transaction Declined
*Triggered at Step 6 when `UC-PAY-01` returns a transaction decline response (e.g., insufficient funds, card expired, gateway timeout).*
- **EX.1.1:** The System displays the alert: "Payment unsuccessful. Please check your payment details or choose a different payment method."
- **EX.1.2:** The System leaves the shopping cart state intact and does not create an enrollment record.
- **EX.1.3:** The failed payment event is logged in the transaction logs with the gateway error reason code. The Use Case terminates in Failure.

##### `UC-ENROLL-01.EX.2`: Course Reaches Capacity Mid-Flow
*Triggered at Step 7 when the LMS database returns `CAPACITY_EXCEEDED` because another student filled the last remaining slot milliseconds prior.*
- **EX.2.1:** The System blocks the enrollment and displays: "Sorry, this course just reached full capacity. Would you like to join the waitlist?"
- **EX.2.2:** The System automatically initiates a transaction refund call to the gateway, reversing the payment.
- **EX.2.3:** No active enrollment record is created. The Use Case terminates in Failure.

##### `UC-ENROLL-01.EX.3`: Invalid Corporate Voucher Code
*Triggered at Step 5c (AC.1) when the voucher code does not exist, has expired, or has reached its maximum redemptions.*
- **EX.3.1:** The System displays the validation error: "Voucher code is invalid, fully redeemed, or has expired. Please verify with your corporate administrator."
- **EX.3.2:** No enrollment is generated. The Customer remains on the checkout page to retry or select a different payment option.

##### `UC-ENROLL-01.EX.4`: LMS Service Offline during Enrollment
*Triggered at Step 7 when the database connection to the LMS times out or returns a 503 service unavailable error after payment has been completed.*
- **EX.4.1:** The System captures the payment transaction as 'Completed'.
- **EX.4.2:** The System displays a warning screen: "Your payment was successful. We are currently provisioning your course access. This may take up to 5 minutes. Check your email for confirmation."
- **EX.4.3:** The System queues a high-priority background retry job that attempts to write the enrollment record every 2 minutes for up to 30 minutes.
- **EX.4.4:** If the job succeeds, the student is emailed course details. If it fails after 30 minutes, an automated critical ticket is generated for the support engineering team. The Use Case terminates in a Partial Success state.

---

### Supporting Details

| Field | Value |
| :--- | :--- |
| **Includes:** | `UC-PAY-01`: Process payment (invoked at Step 6 of the Normal Course)<br>`UC-NOTI-01`: Send system notification (invoked at Step 9) |
| **Special Requirements:** | 1. **Performance:** Course detail pages must load in under 2.0s; checkout and payment confirmation screens must load in under 1.0s under a concurrent load of 500 active enrollments.<br>2. **Security:** Cardholder details (PAN, CVV) must never touch or be stored on internal servers. All transactions must be tokenized and routed to the PCI-DSS certified gateway. Voucher validation must occur strictly server-side.<br>3. **Reliability:** If the LMS is offline at Step 7, the transaction must not be rolled back. The payment remains captured, and access provisioning is queued asynchronously.<br>4. **Usability:** The checkout flow must be completable in under 3 taps on mobile devices.<br>5. **Compliance:** Issue a local tax invoice for all transactions exceeding $10 in value per regional regulations. |
| **Assumptions:** | 1. Payment Gateway maintains an SLA of $\ge$ 99.5% operational uptime.<br>2. Student emails are verified prior to registration, preventing welcome emails from bouncing.<br>3. Downstream LMS APIs support synchronous provisioning in under 3.0 seconds under normal load. |
| **Notes and Issues:** | `[TBD-1] | Can students purchase a course enrollment as a gift for another registered user? | Product Team | 2026-06-01 | TBD - Deferred to Phase 2.` |

---
---

## Example 2: Mentor Booking Approval Queue

### Use Case Profile & Metadata

| Field | Value |
| :--- | :--- |
| **Use Case ID:** | `UC-MENTOR-03` |
| **Use Case Name:** | Approve Mentoring Session Request |
| **Created By:** | Senior Business Analyst | **Last Updated By:** | Lead Analyst |
| **Date Created:** | 2026-05-14 | **Date Last Updated:** | 2026-05-14 |

---

### Context & Conditions

| Field | Value |
| :--- | :--- |
| **Actor:** | **Primary Actor:** Mentor (certified profile, active status).<br>**Secondary Actor(s):** Notification Service, Calendar Integration Service. |
| **Description:** | When a student submits a 1-on-1 session request, it enters the assigned mentor's review queue. The mentor accesses their dashboard, reviews the request details, and makes a decision: Approve, Decline, or Propose an Alternative Slot. The Use Case ends when a final decision is recorded and the student is notified of the outcome. |
| **Preconditions:** | 1. Mentor has logged in to the dashboard with an active, certified mentor account.<br>2. At least one session request exists in their queue with status='Pending_Mentor_Review'.<br>3. The student has at least 1 remaining session credit in their monthly subscription quota. |
| **Postconditions:** | **Postcondition (Success):**<br>1. The session request status is updated to 'Confirmed', 'Declined', or 'Rescheduled' in the database.<br>2. A decision record is saved in the audit logs with the mentor ID, timestamp, decision code, and justification notes.<br>3. If Confirmed: A shared Google Meet / MS Teams calendar invitation is automatically generated and sent to both parties, and the slot is blocked in the mentor's availability calendar.<br>4. If Confirmed: The student's session quota is decremented by 1.<br>5. A push notification and email are dispatched to the student with the decision within 2 minutes.<br><br>**Postcondition (Failure):**<br>1. The session request status remains 'Pending_Mentor_Review'.<br>2. No calendar invites are sent, no slots are blocked, and the student's monthly quota is unchanged. |
| **Priority:** | High — Core premium subscription differentiator; directly impacts customer satisfaction metrics. |
| **Frequency of Use:** | Average: 15 requests per active mentor per day; system-wide volume of ~300 requests per day across 20 active mentors. Peak volumes occur on Sunday evenings. |

---

### Interaction Flows

#### 1. Normal Course of Events (Main Flow / Happy Path)

| Step | Action Description |
| :--- | :--- |
| **Step 1** | **Actor:** The Mentor clicks the **Session Requests** tab in their dashboard. |
| **Step 2** | **System:** Fetches and displays the pending request queue, sorted chronologically (oldest first), showing student name, requested topic, preferred date/time, and subscription tier. |
| **Step 3** | **Actor:** The Mentor clicks on a specific request card. |
| **Step 4** | **System:** Loads the **Request Detail** view: student profile, course progress summary, submitted questions, preferred slot, and historical booking logs. |
| **Step 5** | **Actor:** The Mentor reviews the details and clicks the **Approve** button. |
| **Step 6** | **System:** Displays a confirmation popup containing an optional text note input for the student. |
| **Step 7** | **Actor:** The Mentor inputs a preparation note and clicks **Confirm Decision**. |
| **Step 8** | **System:** Saves the confirmation state, blocks the slot in the mentor's calendar, and decrements the student's monthly session quota. |
| **Step 9** | **System:** Invokes `UC-NOTI-02` to transmit the booking approval notification to the student. |
| **Step 10** | **System:** Displays the toast message: "Session request approved successfully" and returns the mentor to the active queue. |

---

#### 2. Alternative Courses

##### `UC-MENTOR-03.AC.1`: Propose an Alternative Time Slot
*Triggered at Step 5 of the Normal Course when the Mentor is unavailable at the student's preferred time but wants to reschedule:*
- **5a.** The Mentor clicks the **Propose Alternative Slot** button.
- **5b.** The System displays the mentor's personal availability calendar for the next 14 days.
- **5c.** The Mentor selects 1 to 3 alternative open time slots and clicks **Send Proposal**.
- **5d.** The System updates the request status to 'Awaiting_Student_Confirmation' and forwards the proposal to the student.
- **5e.** The Use Case terminates in Success for the mentor. (The student will accept or decline the proposal in a separate downstream Use Case `UC-MENTOR-04`).

##### `UC-MENTOR-03.AC.2`: Approve with Preparation Resource Attachment
*Triggered at Step 7 of the Normal Course if the mentor wants to share reading material prior to the session:*
- **7a.** The Mentor clicks the **Attach Resource** link and uploads a PDF file (max 10MB) or inputs a URL.
- **7b.** The System validates that the file size is under 10MB and the format is secure.
- **7c.** The Mentor clicks **Confirm Decision** $\rightarrow$ continue from Step 8 of the Normal Course. (The attached resource link is embedded in the student's confirmation notification).

---

#### 3. Exceptions

##### `UC-MENTOR-03.EX.1`: Concurrency Conflict - Request Already Processed
*Triggered at Step 8 when the System detects that the session request status has changed since the mentor opened the detail page (e.g., an automated system cancellation or admin override occurred in the background).*
- **EX.1.1:** The System blocks the decision save and displays: "This session request has already been processed or cancelled. Please refresh your queue."
- **EX.1.2:** The System discards the mentor's decision attempt, leaving the record status unchanged.
- **EX.1.3:** The concurrency event is logged in the system audit logs. The Use Case terminates in Failure.

##### `UC-MENTOR-03.EX.2`: Session Time Slot Passes before Review
*Triggered at Step 3 when the System detects that the student's preferred time slot is now in the past due to mentor review inactivity.*
- **EX.2.1:** The System loads the detail page but disables the **Approve** button.
- **EX.2.2:** The System displays the warning banner: "The student's preferred time slot has already passed. The Approve option is disabled. Please Decline or Propose an Alternative Slot."
- **EX.2.3:** The Mentor is restricted to declining the request or proposing new times.

##### `UC-MENTOR-03.EX.3`: Calendar Integration Service Offline
*Triggered at Step 8 when the calendar invite generation API times out or returns an error.*
- **EX.3.1:** The System saves the session status as 'Confirmed' in the database and decrements the student's quota.
- **EX.3.2:** The System displays the warning: "Session confirmed, but calendar invitation could not be sent automatically. Please copy and share the meeting link manually with the student."
- **EX.3.3:** The System queues an async background retry job to attempt calendar invite delivery every 5 minutes for up to 30 minutes. If failures persist, a support ticket is generated. The Use Case terminates in a Partial Success state.

##### `UC-MENTOR-03.EX.4`: Student Session Quota Exceeded at Approval Time
*Triggered at Step 8 when the System verifies student quota and finds it is 0 (e.g., the student's remaining credit was consumed by another booking approved concurrently).*
- **EX.4.1:** The System blocks the booking approval and displays: "This student's monthly session quota has been exhausted. Approval is blocked. Please Decline this request."
- **EX.4.2:** The System updates the request status in the database to 'Blocked_Quota_Exceeded'.
- **EX.4.3:** The System sends a notification to the student explaining the booking block and providing a link to purchase additional credits. The Use Case terminates in Failure.

---

### Supporting Details

| Field | Value |
| :--- | :--- |
| **Includes:** | `UC-NOTI-02`: Send session decision notification (invoked at Step 9 of the Normal Course) |
| **Special Requirements:** | 1. **Performance:** Pending request queues must load in under 2.0s (for up to 50 active requests). Detail views must load in under 1.5s.<br>2. **Security:** Mentors can only view, access, and process requests assigned directly to their personal queue (Role-Based Access Control). Customer details must be masked in compliance with data privacy policies.<br>3. **Audit:** All mentor actions (viewing, approving, declining, proposing) must be logged in the system audit logs with a second-level timestamp, retained for 3 years.<br>4. **SLA:** 80% of session requests must receive a mentor decision within 24 hours of submission. Requests pending for more than 48 hours trigger an automated escalation to the support management team. |
| **Assumptions:** | 1. Mentors have completed basic dashboard training prior to queue allocation.<br>2. Calendar integration supports both Google Calendar and Microsoft Outlook via OAuth 2.0.<br>3. Student session quota validation occurs in real-time. |
| **Notes and Issues:** | `[TBD-1] | Should mentors be penalized (e.g., dashboard rating deduction) for declining more than 30% of requests? | Ops Management | 2026-06-10 | TBD.` |

---
---

## Strategic Design Patterns Derived from EdTech & Enterprise Cases

1.  **Strict State Postconditions:** Postconditions must always represent passive database and system states (e.g., "status='Active'", "invite sent", "quota decremented"), ensuring they are verifiable via standard database query or QA validation checks.
2.  **Downstream Failure Provisioning (Async Retry Pattern):** Mapped in `UC-ENROLL-01.EX.4` (LMS offline) and `UC-MENTOR-03.EX.3` (Calendar offline). When payment or approvals are successful, do not roll back the transaction due to subsequent non-critical system failures. Instead, log the success and execute the downstream provisioning asynchronously via background retry queues.
3.  **Active Voice Alternation:** Main flows enforce strict dialogue alternation (Actor clicks $\rightarrow$ System loads $\rightarrow$ Actor inputs $\rightarrow$ System validates), avoiding dead ends or long, passive developer tasks.
4.  **Just-In-Time Validation (EX.4 Concurrency):** Quotas, seat capacity, and record states must be validated *at the moment of transaction execution* (Step 7/8), not just at page load. This eliminates duplicate bookings, over-capacity enrollments, or negative quotas in multi-user environments.
5.  **Clean Separation of Business Rules:** Complex data rules (e.g., voucher checks, mentor availability rules) are kept out of the main interaction steps. Instead, they are referenced by ID and documented in the **Special Requirements** table, keeping the flows purely behavioral.
