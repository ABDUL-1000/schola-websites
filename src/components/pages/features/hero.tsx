import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-20 sm:pb-24 text-center">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-primary/5 blur-3xl opacity-60" />
        <div className="absolute top-40 right-10 size-96 rounded-full bg-blue-500/5 blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Feature Deep Dive
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6">
          The Complete Toolkit for <br className="hidden sm:block" />
          <span className="text-primary relative">
            Modern Education
            {/* Underline decoration */}
            <svg
              className="absolute -bottom-2 w-full h-3 text-primary/20 left-0"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" />
            </svg>
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          From admissions to alumni, Schola provides every tool you need to run
          your institution efficiently and securely.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="xl"
            className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto"
            asChild
          >
            <Link
              to="/waitlist"
              className="flex items-center justify-center gap-2"
            >
              Join Waitlist <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Full audit trails. Network capable.
        </p>
      </div>
    </section>
  )
}
