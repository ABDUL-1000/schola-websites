import { Link } from '@tanstack/react-router'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STATIC_STATS = [
  // { value: '1000+', label: 'Students managed' },
  { value: 'Zero', label: 'Downtime' },
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
      <div className="absolute -top-32 -left-32 size-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <p className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
          🚀 Early Access — Join the Waitlist
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
          The Digital Way{' '}
          <span className="text-primary">to Manage Your School</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A modern platform to digitize attendance, academics, assessments,
          results and more, built for Nigerian schools that are ready to ditch
          paper.
        </p>

        {/* Waitlist CTA - Simplified */}
        <div className="mt-8 flex justify-center">
          <Button
            size="xl"
            className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto"
            asChild
          >
            <Link to="/waitlist" className="flex items-center gap-2">
              Join Waitlist <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>

        {/* Dashboard mockup placeholder */}
        <div className="mt-14 mx-auto max-w-3xl rounded-xl border border-border bg-muted/50 shadow-2xl overflow-hidden glass">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-background/70 border-b border-border backdrop-blur-sm">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-yellow-400" />
            <span className="size-3 rounded-full bg-green-400" />
          </div>
          <div className="p-6 sm:p-10 flex items-center justify-center min-h-[200px] sm:min-h-[280px]">
            <div className="text-center text-muted-foreground text-sm">
              <GraduationCap className="size-16 mx-auto mb-4 text-primary/20" />
              <p className="font-medium text-foreground">Dashboard Preview</p>
              <p className="text-xs mt-1">Coming soon</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-12 max-w-2xl mx-auto">
          {/* Dynamic waitlist count */}
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              {waitlistLoading ? (
                <span className="animate-pulse bg-muted h-8 w-12 inline-block rounded"></span>
              ) : waitlistError ? (
                <span className="text-destructive text-xs">Error</span>
              ) : (
                `${waitlistCount}+`
              )}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
              Waitlist signups
            </p>
          </div>
          {STATIC_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
