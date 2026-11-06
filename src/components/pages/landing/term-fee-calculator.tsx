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

export function TermFeeCalculator() {
  const [studentCount, setStudentCount] = useState<number>(350)

  // Pricing tiers: base ₦1,000/student/term with volume discounts
  const getRatePerStudent = (count: number): number => {
    if (count > 1000) return 650
    if (count > 600) return 750
    if (count > 250) return 850
    return 1000
  }

  const ratePerStudent = getRatePerStudent(studentCount)
  const termTotal = studentCount * ratePerStudent
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
            No hidden setup fees. No surprise server maintenance charges. Slide
            to your active student population and see your exact term
            investment.
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
                      Applied Term Rate per Student
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {studentCount > 250
                        ? `Volume discount applied for ${studentCount} students`
                        : 'Standard base term pricing'}
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
                  Approx. ₦{annualTotal.toLocaleString()} for the full 3-term
                  academic session
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
                    Lock In This Rate <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <p className="text-[10px] text-muted-foreground text-center mt-2.5">
                  🛡️ Free 15-minute lab test. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
