import { Link } from '@tanstack/react-router'
import { Rocket, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden text-center">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Icon */}
        <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-muted border border-border shadow-sm mb-8">
          <Rocket className="size-6 text-primary" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Ready to stop doing things
          <br className="hidden sm:block" /> manually?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Join over 500+ schools waiting to transform their management
          experience. Get early access and exclusive pricing.
        </p>

        <div className="flex justify-center mt-8">
          <Button
            size="xl"
            className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto"
            asChild
          >
            <Link
              to="/waitlist"
              className="flex items-center justify-center gap-2"
            >
              Join the Waitlist <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
