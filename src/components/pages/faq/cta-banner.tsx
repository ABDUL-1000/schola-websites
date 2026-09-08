import { MessageSquare, Mail, Rocket } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function CTABanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-blue-500/10 mb-8 shadow-sm">
          <MessageSquare className="size-8 text-blue-500" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
          Still have questions?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          We're here to help! Chat with our team or get early access to see the
          platform for yourself.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full font-semibold shadow-sm"
            asChild
          >
            <Link to="/contact">
              <Mail className="size-5 mr-2" />
              Contact Support
            </Link>
          </Button>
          <Button
            size="xl"
            className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto"
            asChild
          >
            <Link
              to="/waitlist"
              className="flex items-center justify-center gap-2"
            >
              <Rocket className="size-5 mr-2" />
              Join Waitlist
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
