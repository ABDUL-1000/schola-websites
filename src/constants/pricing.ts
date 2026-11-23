/**
 * Schola's public pricing, used by the pricing page, the term-bill calculator and the FAQs.
 * Keep in step with the app: the Standard price is set in the super admin (Pricing),
 * and the free-plan limits / trial length in the API (utils/plan.ts, school approval).
 */
export const PRICE_PER_STUDENT = 500 // ₦ per active student, per term (Standard plan)
export const MIN_BILLED_STUDENTS = 50 // smaller schools are billed for this many
export const MAX_BILLED_STUDENTS = 400 // bigger schools only pay for this many (set in super admin → Pricing)
export const TRIAL_DAYS = 30
export const FREE_STUDENTS = 100
export const FREE_STAFF = 10
export const FREE_CBT_EXAMS = 2

export const naira = (n: number) => `₦${n.toLocaleString('en-NG')}`
/** Students a school is billed for: at least the minimum, at most the cap. */
export const billedStudents = (students: number) => Math.min(Math.max(students, MIN_BILLED_STUDENTS), MAX_BILLED_STUDENTS)
export const termBill = (students: number) => billedStudents(students) * PRICE_PER_STUDENT
/** The most any school pays per term. */
export const MAX_TERM_BILL = MAX_BILLED_STUDENTS * PRICE_PER_STUDENT
