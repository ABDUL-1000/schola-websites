import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <section className="py-16 md:py-24 text-center">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Ready to transform your school?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Join the waitlist today and be among the first to bring modern,
          efficient, and secure administration to your institution.
        </p>

        <div className="flex justify-center flex-col sm:flex-row gap-4">
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
          <Button
            size="xl"
            variant="outline"
            className="w-full sm:w-auto font-bold"
            asChild
          >
            <a href="mailto:contact@edumatrix.xyz">Contact Sales</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
