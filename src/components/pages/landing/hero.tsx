import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  Sparkles,
  FileSpreadsheet,
  CheckCircle2,
  Award,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const STATIC_STATS = [
  { value: '15 Mins', label: 'To Generate All Class Report Cards' },
  { value: '100%', label: 'Position Ranking Accuracy' },
  { value: '45,000+', label: 'Term Results Processed' },
]

export function Hero({
  waitlistCount,
  waitlistLoading,
  waitlistError,
}: {
  waitlistCount: number | null
  waitlistLoading: boolean
  waitlistError: Error | null
}) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 md:pt-32 pb-20 sm:pb-24"
    >
      {/* Soft gradient blobs */}
      <div className="absolute -top-32 -left-32 size-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Early Access / Demo Badge */}
        <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="size-3.5" />
          The Modern Standard for African Schools
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
          The Smart School Management Platform Built for{' '}
          <span className="text-primary underline decoration-primary/20 decoration-wavy">
            Effortless Grading
          </span>{' '}
          &amp; Instant Report Cards
        </h1>

        {/* Subhead */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Teachers enter scores; Schola works out totals, grades and class
          positions and produces report cards with your logo. The same platform
          runs your fee register, vets every exam paper and takes admissions
          online.
        </p>

        {/* Dual CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="xl"
            className="w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            asChild
          >
            <Link
              to="/book-demo"
              className="flex items-center justify-center gap-2"
            >
              Book a Live Demo <ArrowRight className="size-5" />
            </Link>
          </Button>

          <Button
            size="xl"
            variant="outline"
            className="w-full sm:w-auto border-border text-foreground hover:bg-muted font-medium hover:-translate-y-0.5 transition-all cursor-pointer"
            asChild
          >
            <Link
              to="/product-tour"
              className="flex items-center justify-center gap-2"
            >
              <FileSpreadsheet className="size-5 text-primary" />
              Explore Product Tour
            </Link>
          </Button>
        </div>

        {/* Visual Mockup Preview */}
        <div className="mt-14 mx-auto max-w-4xl rounded-2xl border border-border bg-card shadow-2xl overflow-hidden text-left relative">
          {/* Mockup Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-400" />
              <span className="size-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs font-mono text-muted-foreground hidden sm:inline">
                schola.portal / academics / broadsheet-preview
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold">
                <CheckCircle2 className="size-3" /> Auto-Save Active
              </span>
            </div>
          </div>

          {/* Mockup Body: Interactive Score & Report Card Glimpse */}
          <div className="p-5 sm:p-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
              <div>
                <p className="text-xs font-bold uppercase text-primary tracking-wider">
                  Academic Session 2025/2026 • First Term
                </p>
                <h3 className="text-lg font-bold text-foreground">
                  Class Broadsheet: JSS 2 (Grade A)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Status:
                </span>
                <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold">
                  Results Approved &amp; Locked
                </span>
              </div>
            </div>

            {/* Score Rows Highlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">
                    SCH/2026/012
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    1st in Class
                  </span>
                </div>
                <h4 className="font-bold text-sm text-foreground">
                  Zainab Aliyu
                </h4>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-border/60">
                  <span className="text-muted-foreground">Total: 92/100</span>
                  <span className="font-bold text-primary">
                    A1 (Distinction)
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">
                    SCH/2026/045
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    2nd in Class
                  </span>
                </div>
                <h4 className="font-bold text-sm text-foreground">
                  Chukwudi Eze
                </h4>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-border/60">
                  <span className="text-muted-foreground">Total: 86/100</span>
                  <span className="font-bold text-primary">A1 (Excellent)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">
                    SCH/2026/078
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold">
                    3rd in Class
                  </span>
                </div>
                <h4 className="font-bold text-sm text-foreground">
                  Oluwaseun Adeleke
                </h4>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-border/60">
                  <span className="text-muted-foreground">Total: 79/100</span>
                  <span className="font-bold text-blue-600">
                    B2 (Very Good)
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Preview Bar */}
            <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Award className="size-4 text-primary" />
                <span className="text-foreground font-medium">
                  38 Students Graded • 10 Subjects Aggregated • 0 Formula Errors
                </span>
              </div>
              <Link
                to="/product-tour"
                className="text-primary font-semibold hover:underline flex items-center gap-1"
              >
                Inspect full broadsheet live &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Social Proof & Metrics */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 sm:gap-14 max-w-3xl mx-auto">
          {STATIC_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium max-w-[140px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
