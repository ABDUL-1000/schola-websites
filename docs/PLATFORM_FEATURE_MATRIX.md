# Schola Platform Feature Matrix & Architecture Inventory

> **Document Status:** Internal Engineering & Product Reference  
> **Last Updated:** October 2026  
> **Scope:** Schola Multi-Tenant School Management Suite (`edumasterBackend`, `schola-school-web`, `schola-staff-web`, `schola-student-web`, `schola-websites`)

---

## 1. Executive Architecture Summary

Schola is built on an enterprise multi-tenant architecture designed specifically for educational institutions across African markets. The platform operates on a central PostgreSQL database schema (`edumasterBackend/prisma/schema.prisma`), authenticated REST APIs, and role-segregated React web portals.

### Dashboard Personas

1. **Platform Super Admin (Backoffice)**: Master tenancy oversight, onboarding authorization, global grade scale templates, platform-wide billing overrides.
2. **School Proprietor & Administrator Portal (`schola-school-web`)**: Executive academics, session/term lifecycle locks, class & department configuration, broadsheet approval, and report card publication.
3. **Teacher / Staff Portal (`schola-staff-web`)**: Continuous assessment (CA) score entry, automated grade computation, class attendance roll calls, and student performance remarks.
4. **Bursar & Finance Office**: Student fee register, manual teller receipt logging, debt rollover tracking across terms, and payment ledger reconciliation.
5. **Parent & Student Self-Service Portal (`schola-student-web`)**: Real-time performance dashboards, tamper-proof printable report card downloads, and fee receipt history.

---

## 2. Core Capabilities Matrix

| Capability Area                  | Current Production Status                                                                                                                                                                            | Partially Implemented                                                                                            | Future Roadmap (Market Parity)                                                                                                                                                                           |
| :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Grading & Broadsheets**        | • Multi-component CA score entry (Test 1, Test 2, Assignments, Final Exam)<br>• Automated total computation<br>• Custom grading scales (A1-F9 / British / Custom)<br>• Gradebook aggregation backend | • Class position & ranking engine<br>• Subject teacher remark templates<br>• Automated broadsheet grid view      | • 1-click batch PDF report card generation with tamper-proof QR watermarks<br>• Psychomotor domain & behavioral rating matrix<br>• Multi-term cumulative performance trends                              |
| **Report Card Generation**       | • Student grade viewer in student portal<br>• Subject assessment records (`AssessmentRecord`)<br>• Principal & teacher remark tables                                                                 | • Administrative approval lock before term result publishing<br>• Custom school crest & header watermarking      | • Instant WhatsApp PDF delivery to parents' phone numbers<br>• Tamper-proof digital verification URL for third-party institutions                                                                        |
| **School Fee Management**        | • School late fee settings<br>• Staff payroll records & pay slips (`payroll_records`)                                                                                                                | • Manual bank teller receipt entry<br>• Termly student billing register<br>• Debt memory carry-over across terms | • Self-reconciling virtual Nigerian bank account numbers per parent (OPay/Monnify/Paystack)<br>• Automated WhatsApp invoice & receipt dispatch<br>• Add-on club & extra-curricular activity self-billing |
| **Staff & Student Attendance**   | • Daily student roll call attendance marking by teachers<br>• Attendance record tracking (`student_attendance`)                                                                                      | • Staff attendance logging (`staff_attendance`)<br>• Basic time-in / time-out capture                            | • Anti-proxy kiosk clock-in with dynamic TOTP QR code rotation<br>• Biometric PIN backup with geo-fencing                                                                                                |
| **Computer-Based Testing (CBT)** | • AI question generator in staff portal (`ai-question-gen.tsx`)<br>• Question bank & exam models (`exam`, `exam_question`)                                                                           | • Online quiz & test taking in student portal (`exams.tsx`)<br>• Objective / Theory / Essay question types       | • 100% Offline Desktop CBT lockdown client (Electron + local SQLite)<br>• Zero-internet local network exam server with conflict-free cloud sync                                                          |
| **Backoffice Multi-Tenancy**     | • Multi-branch school support (`school_branches`)<br>• App administrator roles (`app_admins`)                                                                                                        | • School onboarding approval flow (`school.onboarding.service.ts`)                                               | • 1-click tenant audit impersonation<br>• Dynamic school fee override & grace-period toggle<br>• Automated multi-tenant metrics aggregator                                                               |

---

## 3. Deep-Dive: The Grading & Results Engine (Current Core Focus)

### 3.1 Score Entry Architecture

- **Continuous Assessment (CA) Weighting**: Configurable assessment structure via `SubjectAssessmentConfig` (e.g., 20% First Test + 20% Second Test / Project + 60% Terminal Exam = 100%).
- **Raw Score Capture**: Class and subject teachers input raw marks per enrolled student with real-time browser auto-save, preventing data loss during network hiccups.
- **Grade Scale Resolution**: Dynamic mapping against school-defined `GradeScale`:
  - `75 - 100` &rarr; `A1` (Excellent)
  - `70 - 74` &rarr; `B2` (Very Good)
  - `65 - 69` &rarr; `B3` (Good)
  - `60 - 64` &rarr; `C4` (Credit)
  - `55 - 59` &rarr; `C5` (Credit)
  - `50 - 54` &rarr; `C6` (Credit)
  - `45 - 49` &rarr; `D7` (Pass)
  - `40 - 44` &rarr; `E8` (Pass)
  - `0 - 39` &rarr; `F9` (Fail)

### 3.2 Broadsheet Compilation

- Aggregates all subjects for a class branch (e.g., JSS 2 Silver).
- Calculates:
  - **Student Total Marks**: \(\sum \text{Subject Marks}\)
  - **Student Term Average**: \(\frac{\text{Total Marks}}{\text{Number of Enrolled Subjects}}\)
  - **Class Position**: Ranked from 1st to \(N\)th with fair tie-breaking handling.
  - **Class Statistics**: Highest score, lowest score, and class median per subject.
- **Approval Lock**: School Administrator reviews the completed broadsheet and flips the `resultsPublished` flag to unlock student & parent access.

### 3.3 Branded Report Card Delivery

- Branded header with School Crest, address, academic session, term, and motto.
- Student profile with admission number, class, days present/absent, and house.
- Comprehensive subject breakdown: CA1, CA2, Exam, Total, Grade, Class Position in Subject, and Subject Teacher initials.
- Form Master & Principal remarks with signature placeholders.
- Tamper-proof verification seal.

---

## 4. Deep-Dive: Manual Fee Management (Current State) vs. Future Virtual Accounts

### Current Manual Workflow

1. **Billing Setup**: School defines termly tuition, development levies, uniforms, and books.
2. **Teller Logging**: Bursar collects physical bank deposit slips or mobile transfer screenshots.
3. **Manual Receipting**: Bursar logs payment amount, teller reference, and date into the student ledger, issuing a printed carbon-copy receipt.
4. **Debt Carry-Over**: Unpaid balances are tracked across terms so that student debts are preserved upon session promotion.

### Future Roadmap: Automated Virtual Accounts (SchoolConnect Benchmark)

- Dedicated NUBAN assigned to every parent/family upon student enrollment.
- Instant automated bank reconciliation via webhook listeners (Monnify / Paystack).
- Immediate WhatsApp PDF receipt delivery to the payer's mobile phone within 5 seconds of transfer.

---

## 5. Persona-by-Persona Operational Breakdown

### Super Admin (Backoffice)

- Master registry of all tenant schools and branches.
- Administrative overrides for billing grace periods and subscription renewals.
- Onboarding validation queue for verifying CAC registration and school approvals.

### School Admin / Proprietor

- Academic calendar control: Terms, holidays, and examination dates.
- Class allocation: Assigning class leads and subject teachers.
- Final academic validation: 1-click lock/unlock of term results and report card distribution.

### Teacher Portal

- Gradebook score entry interface with row-level calculation.
- Automated ranking calculation for subject and overall class positions.
- Daily student attendance register (Present / Absent / Late / Excused).

### Bursar / Finance

- Fee collection register with status filters: _Fully Paid_, _Partially Paid_, _Defaulters_.
- Manual bank teller reconciliation and receipt reprinting.
- Termly revenue reports and outstanding receivables.

### Parent & Student

- View live subject grades, assignment feedback, and historical term performances.
- Instant download of official term report cards with watermark verification.
- Review manual payment history and current outstanding fee balance.
