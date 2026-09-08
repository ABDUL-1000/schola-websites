import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 text-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Ready to modernize your school?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
          Join hundreds of forward-thinking institutions that have already
          switched to Schola. Be part of the change.
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
