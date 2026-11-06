import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section id="demo-cta" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground">
          Ready to eliminate grading chaos in your school?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Schedule a live 15-minute test using your actual subjects and grading scale.
          Zero upfront commitment and no disruption to your term.
        </p>

        <div className="flex justify-center">
          <Button
            size="xl"
            className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto cursor-pointer"
            asChild
          >
            <Link
              to="/book-demo"
              className="flex items-center justify-center gap-2"
            >
              Book a Live 15-Minute Demo <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
