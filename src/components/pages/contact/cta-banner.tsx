import { HelpCircle, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 pb-16 md:pb-24 md:pb-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-3xl p-10 sm:p-16 text-center shadow-sm">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-blue-500/10 mb-8 shadow-sm">
            <HelpCircle className="size-8 text-blue-500" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Looking for quick answers?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Check out our comprehensive FAQ and knowledge base for immediate
            solutions to common questions.
          </p>

          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="rounded-full font-semibold shadow-sm w-full sm:w-auto group"
              asChild
            >
              <Link to="/faq">
                Visit our Help Center & FAQs
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
