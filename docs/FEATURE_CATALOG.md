# Schola feature catalog

What the product does **today**, checked against the code (November 2026). This
is the source for marketing copy; `src/lib/product-catalog.ts` holds the same
facts for the site. If a feature isn't in the "Live" column it must not be
advertised as available.

> `PLATFORM_FEATURE_MATRIX.md` predates the latest work and lists some items as
> live that aren't (and some live items as roadmap). Prefer this file.

## Portals

| Portal | App | Who signs in |
|---|---|---|
| School portal | `schola-school-web` | The school account (owner / proprietor) |
| Staff portal | `schola-staff-web` | Every staff member; extra sections appear per role |
| Student portal | `schola-student-web` | Students |
| Public pages | `schola-school-web` (`/enroll`, `/staff/register`) | Parents and job applicants, no login |
| Marketing site | `schola-websites` | Everyone |

Each school gets its own subdomain, e.g. `yourschool.schola.com.ng`.

## Roles

| Role | Granted by | Adds to the staff portal |
|---|---|---|
| Teacher | Everyone | Score entry, CBT, question papers, attendance, lesson notes, timetable, HR self-service |
| Admin | School owner | Administration: teachers, classes, students, results, enrolment & staff queues |
| Bursar | School owner | Finance: overview, student fees, payment records, fee setup |
| Exam officer | School owner | Exam Office: review queue, question bank |
| Form master | Owner or admin (per class) | My Form Class: students, fee status, report sheet, report cards |

A staff member can hold several roles. Legacy staff with `roles = ADMIN` count as Admin.

## Live

### Results
- Assessment components per subject/term (must total 100) — school portal.
- Score entry by subject teachers — staff portal → Grading.
- Class report sheet: every student × subject, totals, grades (school grade scale or default A–F), subject and class positions with ties, class/subject averages.
- Printable report card per student: school logo/address, components, grade, position, class stats, attendance, teacher remarks.

### Exams
- CBT builder (objective, theory, essay, file upload), publish, student attempts, theory grading.
- Written question papers: sections, objective (with answer key) and theory (marking guide) questions, optional file attachment; draft → submit → approve/reject (reason required) → resubmit; comment threads.
- Exam officer review queue for written and CBT; rejected CBT returns to draft.
- Print and PDF download of any exam/test: A4 letterhead (logo, address, contacts), session and term, details grid, name/reg. no. lines; marking-guide version for officers/admins/school/own papers.
- Question bank: all exams & tests filterable by session, term, class, subject, type, written/CBT, status.

### Fees
- Fee items per term for all classes or chosen classes.
- Payments: cash, transfer, POS, card, cheque, online, other; reference; date; recorder.
- Per-student adjustments (discount/scholarship or extra charge) with reason.
- Register: total due, paid, balance, status Paid / Part paid / Owing / No bill; filters and search.
- Overview: expected, collected, outstanding, collection rate, by class, by method, payroll for the term's months.
- Read-only views for the school owner and form masters.

### Admissions & people
- Public enrolment (4 steps) and staff registration (role cards) on the school's link; links can be closed.
- Review queues for school owner and admins; approve & enroll emails the parent login details; decline emails an optional note; staff approval emails an invite.
- Add/edit staff, classes, students; form-master assignment; multi-branch.

### Other
- Attendance (class register, staff clock-in), timetable, lesson notes, announcements, student remarks.
- HR: leave requests and approvals, payroll, payslips.
- Book-a-demo requests stored in the API (`demo_requests`) and emailed to `SALES_EMAIL`.

## Partly live
- **Student portal**: CBT exams, assignments, scores from attempted exams, timetable. *No term report cards yet.*
- **Parents**: online enrolment and emails only. Guardian accounts exist in the API but there is no parent web app.
- **AI question generator / AI tutor**: UI only, no AI backend — do not advertise.

## Not built (roadmap)
- Parent portal (balance, payments, report cards, announcements)
- Dedicated bank account numbers / automatic transfer matching
- PDF receipts and invoices; WhatsApp delivery
- Session rollover: promotion and carrying balances forward
- Result lock / publish workflow; watermarked report cards
- Bulk Excel import of students; library and inventory
