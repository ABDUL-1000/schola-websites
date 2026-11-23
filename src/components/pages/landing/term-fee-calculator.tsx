import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  Calculator,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Clock,
  Printer,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FREE_STUDENTS, MAX_BILLED_STUDENTS, MAX_TERM_BILL, MIN_BILLED_STUDENTS, PRICE_PER_STUDENT, TRIAL_DAYS, billedStudents, naira, termBill } from '@/constants/pricing'

export function TermFeeCalculator() {
  const [studentCount, setStudentCount] = useState<number>(350)

  // One flat price: Standard, everything included.
  const ratePerStudent = PRICE_PER_STUDENT
  const termTotal = termBill(studentCount)
  const billed = billedStudents(studentCount)
  const annualTotal = termTotal * 3
  const hoursSavedPerTerm = Math.round(studentCount * 0.22) // ~80 hours for 350 students
  const estimatedPaperSavings = Math.round(studentCount * 350) // ~₦122,500 paper/toner savings

  return (
    <section
      id="pricing-calculator"
      className="py-16 md:py-24 bg-muted/30 relative"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="size-3.5" />
            Transparent School Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Calculate Your School&apos;s Exact Term Bill
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            One simple price: {naira(PRICE_PER_STUDENT)} per student, per term,
            with every feature included, and you never pay for more than{' '}
            {MAX_BILLED_STUDENTS} students. Slide to your number of students to
            see your exact term bill.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl shadow-foreground/5 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-foreground">
                    Active Student Population
                  </label>
                  <span className="text-2xl font-extrabold text-primary font-mono">
                    {studentCount.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-muted-foreground">
                      students
                    </span>
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="10"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />

                <div className="flex justify-between text-[11px] text-muted-foreground mt-2 font-mono">
                  <span>50 students</span>
                  <span>500 students</span>
                  <span>1,000 students</span>
                  <span>1,500+ students</span>
                </div>
              </div>

              {/* Volume Discount Badge */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <TrendingDown className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      Price per student, per term
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {studentCount > MAX_BILLED_STUDENTS
                        ? `You pay for ${MAX_BILLED_STUDENTS} students only: the other ${(studentCount - MAX_BILLED_STUDENTS).toLocaleString()} are free`
                        : studentCount < MIN_BILLED_STUDENTS
                        ? `Smaller schools are billed for ${MIN_BILLED_STUDENTS} students`
                        : studentCount <= FREE_STUDENTS
                          ? `Up to ${FREE_STUDENTS} students? You can also stay on the free plan`
                          : 'Standard plan, everything included'}
                    </p>
                  </div>
                </div>
                <span className="text-base font-extrabold text-primary font-mono">
                  ₦{ratePerStudent.toLocaleString()}
                  <span className="text-[10px] text-muted-foreground font-normal">
                    {' '}
                    / student
                  </span>
                </span>
              </div>

              {/* ROI Breakdown */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Clock className="size-3.5 text-primary" />
                    <span>Teacher Hours Saved</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">
                    ~{hoursSavedPerTerm} hrs{' '}
                    <span className="text-xs font-normal text-muted-foreground">
                      / term
                    </span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Printer className="size-3.5 text-primary" />
                    <span>Est. Paper/Ink Saved</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">
                    ₦{estimatedPaperSavings.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-muted-foreground">
                      / term
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bill Summary Column (5 Cols) */}
            <div className="lg:col-span-5 bg-muted/50 border border-border rounded-xl p-6 sm:p-7 space-y-5 text-center lg:text-left">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Estimated Term Investment
                </p>
                <div className="mt-2 flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-foreground font-mono">
                    ₦{termTotal.toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground">/ term</span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-1">
                  {billed.toLocaleString()} students × {naira(PRICE_PER_STUDENT)}.
                  Approx. ₦{annualTotal.toLocaleString()} for the full 3-term
                  academic session
                </p>
                <p className="text-[11px] font-semibold text-primary mt-1">
                  The most any school pays: {naira(MAX_TERM_BILL)} a term
                </p>
              </div>

              <div className="pt-4 border-t border-border space-y-2 text-xs text-left">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>Unlimited CA score entry & grading</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>1-click broadsheet & ranking calculation</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>Branded report cards with custom school logo</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>CBT exams and AI lesson tools included</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>Free bulk student & staff onboarding</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  size="xl"
                  asChild
                  className="w-full shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 font-semibold text-sm cursor-pointer"
                >
                  <Link
                    to="/book-demo"
                    className="flex items-center justify-center gap-2"
                  >
                    Start your {TRIAL_DAYS}-day free trial <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <p className="text-[10px] text-muted-foreground text-center mt-2.5">
                  Every feature free for {TRIAL_DAYS} days. No card, no commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
