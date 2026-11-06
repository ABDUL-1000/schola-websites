/**
 * Single source of truth for what Schola does, used by the homepage showcase,
 * the Product Tour / Role Guide and the roadmap.
 *
 * Rule: anything in ROLE_GUIDES / SHOWCASE must exist in the product today.
 * Anything not yet built goes in ROADMAP only. Inventory:
 * docs/FEATURE_CATALOG.md (kept in step with the code).
 */
import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  GraduationCap,
  Landmark,
  School,
  UserRound,
  UsersRound,
} from 'lucide-react'

export type RoleKey =
  | 'owner'
  | 'admin'
  | 'bursar'
  | 'exam-officer'
  | 'form-master'
  | 'teacher'
  | 'student'
  | 'parent'

export interface RoleGuide {
  key: RoleKey
  name: string
  portal: string
  icon: LucideIcon
  /** One-line answer to "what is this dashboard for?" */
  summary: string
  /** Who typically holds the role. */
  who: string
  /** What they can do — each item exists in the product today. */
  capabilities: Array<{ title: string; detail: string }>
  /** Where to find things, as labelled in the app's sidebar. */
  whereToFind: Array<string>
  /** Typical first-week checklist. */
  firstSteps: Array<string>
  /** Not yet available for this role (shown as "coming soon"). */
  comingSoon?: Array<string>
  status: 'live' | 'partial' | 'coming-soon'
}

export const ROLE_GUIDES: Array<RoleGuide> = [
  {
    key: 'owner',
    name: 'School owner',
    portal: 'School portal',
    icon: Building2,
    who: 'Proprietor, director or principal who signed the school up.',
    summary:
      'Set the school up once, decide who does what, and see everything — academics, admissions, fees and staff.',
    capabilities: [
      { title: 'Set up the school', detail: 'Branches (campuses), sessions & terms, classes, subjects and departments.' },
      { title: 'Give staff their roles', detail: 'Make any teacher an Admin, Bursar or Exam Officer — or several — and assign a form master to each class.' },
      { title: 'Choose how scores add up', detail: 'Set the CA and exam components per subject and term (they must total 100).' },
      { title: 'Share registration links', detail: 'One link for parents to apply for admission, one for staff to apply to join. Open or close each link any time.' },
      { title: 'Review applications', detail: 'Approve enrolments (the parent is emailed login details) and staff applications (the applicant gets an invite email).' },
      { title: 'See school finance', detail: 'Expected, collected and outstanding fees by class, who has paid, and every payment recorded.' },
      { title: 'Oversee exams', detail: 'Every CBT and written paper, current and past, filterable by session and term — print or download any as PDF.' },
      { title: 'Run HR', detail: 'Approve leave requests and run payroll for staff.' },
    ],
    whereToFind: ['Management → Staff / Students / Enrolment Queue / Staff Queue', 'Academics → Sessions, Classes, Subjects, Assessments Config', 'Assessments → Exams & Tests, Results, Question Bank', 'Finance → School Fees', 'HR & Payroll'],
    firstSteps: [
      'Create your session and terms',
      'Add classes and subjects',
      'Add staff (or share the staff registration link) and assign roles',
      'Add students (or share the enrolment link)',
      'Ask your bursar to set this term’s fees',
    ],
    status: 'live',
  },
  {
    key: 'admin',
    name: 'Admin',
    portal: 'Staff portal → Administration',
    icon: School,
    who: 'Vice principal, head of school or administrator — any staff the school marks as Admin.',
    summary:
      'Day-to-day school administration without needing the owner’s login: teachers, classes, students and results.',
    capabilities: [
      { title: 'Teachers & staff', detail: 'View, add and edit staff. New staff receive an email invite to set their password.' },
      { title: 'Classes', detail: 'Create and edit classes and assign or replace each class’s form master.' },
      { title: 'Students', detail: 'Add students, edit their records and see full details including parents and health notes.' },
      { title: 'Results', detail: 'Any class’s report sheet with positions, and any student’s printable report card.' },
      { title: 'Admissions', detail: 'Work through the enrolment queue and staff queue: approve or reject applications.' },
      { title: 'Exam archive', detail: 'Every submitted exam and test with print and PDF download, including marking guides.' },
    ],
    whereToFind: ['Administration → Teachers & Staff, Classes, Students, Results, Enrolment Queue, Staff Queue', 'Assessments → Question Bank'],
    firstSteps: ['Check every class has a form master', 'Clear the enrolment queue', 'Open a class report sheet once scores are in'],
    comingSoon: ['Granting Admin/Bursar/Exam Officer roles stays with the school owner by design'],
    status: 'live',
  },
  {
    key: 'bursar',
    name: 'Bursar',
    portal: 'Staff portal → Finance',
    icon: Landmark,
    who: 'Bursar, accountant or finance officer.',
    summary:
      'Set each term’s fees, record payments, and always know exactly who has paid, part-paid or is still owing.',
    capabilities: [
      { title: 'Fee setup per term', detail: 'Tuition, levies and other items for all classes or chosen classes, with the total bill per class.' },
      { title: 'Live fee register', detail: 'Every student’s total due, paid and balance — filter by class and by Paid / Part paid / Owing.' },
      { title: 'Record payments', detail: 'Cash, bank transfer, POS, card or cheque, with reference numbers and the date paid.' },
      { title: 'Adjust a student’s fee', detail: 'Discounts, scholarships or extra charges with a reason — balances update instantly.' },
      { title: 'Payment records', detail: 'Every payment with who recorded it; search and filter by term, class, method and date.' },
      { title: 'Finance overview', detail: 'Expected vs collected, collection rate, by class and by payment method, plus payroll for the term.' },
    ],
    whereToFind: ['Finance → Overview, Student Fees, Payment Records, Fee Setup'],
    firstSteps: ['Add this term’s fee items', 'Apply discounts for scholarship students', 'Record payments as they come in'],
    comingSoon: ['Printable receipts', 'Automatic matching of bank transfers', 'Balances carried into the next term automatically'],
    status: 'live',
  },
  {
    key: 'exam-officer',
    name: 'Exam officer',
    portal: 'Staff portal → Exam Office',
    icon: ClipboardCheck,
    who: 'The staff member who vets exam and test questions before they reach students.',
    summary:
      'One review queue for every written paper and CBT exam: approve, reject with a reason, comment — then print.',
    capabilities: [
      { title: 'Review queue', detail: 'Written question papers and CBT exams waiting for approval, newest first.' },
      { title: 'Approve or reject', detail: 'Rejecting needs a reason; the teacher sees it and the paper goes back for editing.' },
      { title: 'Comment threads', detail: 'Back-and-forth with the teacher on each paper, with a full history.' },
      { title: 'Print & PDF', detail: 'A4 papers with the school logo, address, session and term — with or without the marking guide.' },
      { title: 'Question bank', detail: 'Every exam and test ever set, filterable by session, term, class, subject and type.' },
    ],
    whereToFind: ['Exam Office → Review Queue, Question Bank'],
    firstSteps: ['Agree a submission deadline with teachers', 'Clear the queue daily during exam season', 'Download approved papers for printing'],
    status: 'live',
  },
  {
    key: 'form-master',
    name: 'Form master',
    portal: 'Staff portal → My Form Class',
    icon: UsersRound,
    who: 'The class teacher responsible for one class.',
    summary:
      'Your whole class in one place: students, who has paid fees, the class report sheet and every report card.',
    capabilities: [
      { title: 'Your class', detail: 'Every student with their parent’s contact, plus the subjects and who teaches them.' },
      { title: 'Edit the class', detail: 'Rename the class or change its level.' },
      { title: 'Add students', detail: 'Register a student straight into your class and get their temporary password.' },
      { title: 'Fee status', detail: 'Paid, part-paid and owing for your class (read-only — the bursar records payments).' },
      { title: 'Report sheet & cards', detail: 'The full class broadsheet with positions, and a printable report card for each student.' },
    ],
    whereToFind: ['My Form Class → Students, School fees, Report sheet, Subjects & teachers'],
    firstSteps: ['Check your class list is complete', 'Follow up on students who are owing', 'Print report cards at the end of term'],
    status: 'live',
  },
  {
    key: 'teacher',
    name: 'Teacher',
    portal: 'Staff portal',
    icon: GraduationCap,
    who: 'Every member of staff — roles above are added on top of this.',
    summary:
      'Enter scores, set CBT and written exams, take attendance and plan lessons — all from a phone or laptop.',
    capabilities: [
      { title: 'Score entry', detail: 'Enter each assessment component per subject and class; totals and grades calculate themselves.' },
      { title: 'CBT exams & tests', detail: 'Build objective and theory questions, publish for students to take online, and grade theory answers.' },
      { title: 'Written question papers', detail: 'Type sections and questions (or attach a file), submit for approval, and see the exam officer’s feedback.' },
      { title: 'Attendance', detail: 'Mark your class register and keep your own clock-in record.' },
      { title: 'Lesson notes & timetable', detail: 'Write lesson notes per class and subject; see your weekly timetable.' },
      { title: 'Students & remarks', detail: 'See your students and add behaviour or academic remarks.' },
      { title: 'HR self-service', detail: 'Apply for leave and view your payslips.' },
    ],
    whereToFind: ['Assessments → CBT Exams & Tests, Question Papers, Question Bank, Grading', 'Attendance, Academics, HR & Payroll'],
    firstSteps: ['Accept your email invite and set a password', 'Enter scores for your subjects', 'Submit your exam paper before the deadline'],
    status: 'live',
  },
  {
    key: 'student',
    name: 'Student',
    portal: 'Student portal',
    icon: UserRound,
    who: 'Every enrolled student, with the login the school gives them.',
    summary: 'Take CBT exams and assignments online, see scores and check the class timetable.',
    capabilities: [
      { title: 'CBT exams & tests', detail: 'Take approved exams online; objective questions are marked instantly.' },
      { title: 'Assignments', detail: 'See and submit assignments set by teachers.' },
      { title: 'Scores', detail: 'See results from attempted exams.' },
      { title: 'Timetable', detail: 'The class timetable for the week.' },
    ],
    whereToFind: ['Dashboard → Exams, Assignments, Grades, Timetable'],
    firstSteps: ['Sign in with your reg. number and temporary password', 'Change your password'],
    comingSoon: ['Term report cards in the student portal'],
    status: 'partial',
  },
  {
    key: 'parent',
    name: 'Parent',
    portal: 'Enrolment link today · parent portal coming',
    icon: BadgeCheck,
    who: 'Parents and guardians.',
    summary:
      'Apply for admission online today. A parent portal for fees, results and announcements is on the way.',
    capabilities: [
      { title: 'Apply online', detail: 'A 4-step enrolment form on the school’s own link — child, parents, emergency contact, review.' },
      { title: 'Emails that matter', detail: 'An acceptance letter with the child’s login details, or a note if the application isn’t successful.' },
    ],
    whereToFind: ['The school’s enrolment link, e.g. yourschool.schola.com.ng/enroll'],
    firstSteps: ['Complete the enrolment form', 'Watch for the school’s email'],
    comingSoon: ['Parent portal: fee balance, payment history and report cards', 'Linking several children to one parent account'],
    status: 'partial',
  },
]

/** Numbered homepage showcase. Every item is live. */
export interface ShowcaseItem {
  id: string
  eyebrow: string
  title: string
  body: string
  points: Array<string>
  visual: 'fee-register' | 'report-sheet' | 'exam-review' | 'enrolment' | 'question-bank' | 'roles'
}

export const SHOWCASE: Array<ShowcaseItem> = [
  {
    id: 'results',
    eyebrow: 'Results',
    title: 'Report sheets that work themselves out',
    body: 'Teachers enter scores per subject. Totals, grades, subject positions and class positions calculate on their own — the form master opens the class report sheet and it is already done.',
    points: ['Your own CA and exam weighting per subject', 'Grades from your grading scale', 'Class and subject positions with fair ties', 'Printable report cards with your logo'],
    visual: 'report-sheet',
  },
  {
    id: 'fees',
    eyebrow: 'Fees',
    title: 'A fee register you can trust at a glance',
    body: 'Set the term’s fees once. Every payment the bursar records updates the register — paid, part-paid and owing — per class or for the whole school.',
    points: ['Fees for all classes or chosen classes', 'Cash, transfer, POS, card and cheque', 'Discounts and extra charges per student', 'Collected vs outstanding, by class'],
    visual: 'fee-register',
  },
  {
    id: 'exams',
    eyebrow: 'Exams',
    title: 'Every exam vetted before students see it',
    body: 'Teachers submit written papers and CBT exams. The exam officer approves or sends them back with a reason — nothing reaches a classroom unchecked.',
    points: ['Written papers and CBT in one queue', 'Rejections always come with a reason', 'Comment threads per paper', 'A full review history'],
    visual: 'exam-review',
  },
  {
    id: 'print',
    eyebrow: 'Printing',
    title: 'Print-ready papers on your letterhead',
    body: 'Any approved exam or test prints on A4 — or downloads as a PDF — with your logo, address, session and term already on it. Last year’s questions are a filter away.',
    points: ['School logo and details on every paper', 'Marking guide version for staff', 'Filter by session, term, class and subject', 'One-click PDF download'],
    visual: 'question-bank',
  },
  {
    id: 'admissions',
    eyebrow: 'Admissions',
    title: 'Admissions that arrive already typed',
    body: 'Share your enrolment link. Parents fill in a 4-step form from their phone; it lands in your queue complete. Approve, and the parent is emailed the child’s login.',
    points: ['Your school’s own link', 'Child, parents and emergency contact', 'Approve & enroll in one step', 'A matching link for staff applications'],
    visual: 'enrolment',
  },
  {
    id: 'roles',
    eyebrow: 'Roles',
    title: 'Everyone sees exactly their job',
    body: 'Any teacher can also be the Admin, Bursar or Exam Officer — or a form master. Each role adds its own section to their dashboard, and nothing more.',
    points: ['Admin, Bursar, Exam Officer, Form master', 'Several roles on one person', 'Only the school owner grants roles', 'Changes apply without signing out'],
    visual: 'roles',
  },
]

/** Honest roadmap: none of these are live yet. */
export const ROADMAP = [
  { title: 'Parent portal', detail: 'Fee balance, payment history, report cards and announcements from any phone.' },
  { title: 'Automatic bank-transfer matching', detail: 'Parents pay by transfer; the payment lands on the right student without manual entry.' },
  { title: 'Receipts & invoices', detail: 'Branded PDF receipts and term invoices, sent to parents.' },
  { title: 'New-session rollover', detail: 'Promote classes and carry unpaid balances into the new term in one step.' },
  { title: 'WhatsApp delivery', detail: 'Invoices, receipts and report cards straight to parents’ WhatsApp.' },
  { title: 'AI question drafting', detail: 'Draft exam questions from a topic for the teacher to edit.' },
]

export const FIRST_STEPS_TIMELINE = [
  {
    who: 'Your school does this',
    whoTone: 'primary' as const,
    title: 'Set up once',
    body: 'Add your session and terms, classes, subjects and grading. Your school gets its own address — yourschool.schola.com.ng.',
    chips: ['Sessions & terms', 'Classes & subjects', 'Grading scale', 'Fee items'],
  },
  {
    who: 'Staff & parents do this',
    whoTone: 'amber' as const,
    title: 'Staff and students come in through your links',
    body: 'Share your staff registration link and your enrolment link — or add people yourself. You approve every application.',
    chips: ['Staff registration link', 'Enrolment link', 'Approval queues'],
  },
  {
    who: 'Your team does this',
    whoTone: 'primary' as const,
    title: 'Everyone gets their own dashboard',
    body: 'Mark teachers as Admin, Bursar or Exam Officer and assign form masters. Each sees exactly their job when they sign in.',
    chips: ['Admin', 'Bursar', 'Exam Officer', 'Form master'],
  },
  {
    who: 'Schola does this',
    whoTone: 'teal' as const,
    title: 'The arithmetic takes care of itself',
    body: 'Scores become report sheets with positions. Payments become a live fee register. Approved exams become print-ready papers.',
    chips: ['Totals & positions', 'Paid / part-paid / owing', 'Letterhead PDFs'],
  },
]

export const STATUS_BADGE: Record<RoleGuide['status'], { label: string; className: string }> = {
  live: { label: 'Live', className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300' },
  partial: { label: 'Partly live', className: 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300' },
  'coming-soon': { label: 'Coming soon', className: 'bg-muted text-muted-foreground' },
}

