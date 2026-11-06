import {
  XCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

const COMPARISON_ROWS = [
  {
    feature: 'Broadsheet & Score Compilation',
    traditional:
      'Days of manual typing into Excel; broken formulas (#REF!, #DIV/0!) and exhausted teachers.',
    schola:
      'Instant real-time aggregation across all subjects; totals and averages computed in seconds.',
  },
  {
    feature: 'Class Position & Ranking',
    traditional:
      'Manual sorting in Excel often scrambles student rows and miscalculates tie-breaking ranks.',
    schola:
      'Automated, mathematically fair position rankings (1st to Nth) following standard guidelines.',
  },
  {
    feature: 'Report Card Publishing Speed',
    traditional:
      '2 to 3 weeks after exams end; chaotic printing marathons and delayed school vacation days.',
    schola:
      'Report sheets and report cards are ready the moment the last score is entered — print one student or the whole class.',
  },
  {
    feature: 'Who Can Change What',
    traditional:
      'Excel files on USB flash drives can easily be manipulated, overwritten, or infected by malware.',
    schola:
      'Teachers only enter scores for their own subjects; admin, bursar and exam officer powers are granted only by the school owner.',
  },
  {
    feature: 'Knowing Who Has Paid',
    traditional:
      'Paper ledgers or loose sheets; incomplete debts are frequently forgotten when promoting students.',
    schola:
      'A live register of paid, part-paid and owing students for every class, updated the moment a payment is recorded.',
  },
  {
    feature: 'Admissions Paperwork',
    traditional:
      'Parents queue at the office to collect, fill and return paper forms that someone then types up again.',
    schola:
      'Parents apply from their phone on your school’s own link; approving emails them the child’s login details.',
  },
]

export function ComparisonMatrix() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="size-3.5" />
            Clear Architecture Contrast
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Why Forward-Thinking Schools Ditch Excel for Schola
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            See the real operational difference between managing exams on
            error-prone spreadsheets versus an automated grading engine.
          </p>
        </div>

        {/* Matrix Card */}
        <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-5 px-6 text-sm font-bold text-foreground w-1/4 bg-muted/30">
                    Operational Dimension
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-destructive/80 w-[37.5%] bg-destructive/5">
                    <div className="flex items-center gap-2">
                      <XCircle className="size-5 text-destructive" />
                      <span>Traditional Paper & Excel Chaos</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-primary w-[37.5%] bg-primary/10 border-l border-primary/20">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-5 text-primary" />
                      <span>Schola Automated Grading Suite</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-muted/10 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-foreground bg-muted/10">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground leading-relaxed bg-destructive/[0.02]">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="size-4 text-destructive/70 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium leading-relaxed bg-primary/[0.03] border-l border-primary/20">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{row.schola}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Matrix Footer Callout */}
          <div className="p-6 bg-muted/40 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              💡 Over 45,000+ student report cards generated without a single
              positioning formula error.
            </p>
            <Button
              asChild
              size="default"
              className="shadow-md shadow-primary/20 shrink-0 cursor-pointer"
            >
              <Link to="/book-demo" className="flex items-center gap-2">
                See Live in Your Lab <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
