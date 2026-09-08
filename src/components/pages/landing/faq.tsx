import { FaqAccordion } from '@/components/custom-ui/faq-accordion'

const FAQS = [
  {
    q: 'Is my school data secure?',
    a: 'Absolutely. All data is encrypted at rest and in transit. We follow industry-standard security practices to keep your institution&apos;s information safe.',
  },
  {
    q: 'How do I register my school?',
    a: 'Join our waitlist by entering your email above. Once we launch, you&apos;ll receive an invitation to set up your school profile in minutes.',
  },
  {
    q: 'Can Schola handle multiple branches?',
    a: 'Yes! Multi-branch support is on our roadmap (Phase 4). You&apos;ll be able to manage all branches from a single admin dashboard.',
  },
  {
    q: 'Is there a free plan?',
    a: 'We&apos;re finalizing pricing. Early waitlist members will receive an exclusive discount and extended free trial upon launch.',
  },
  {
    q: 'What devices does Schola support?',
    a: 'Schola is fully responsive and works on desktops, tablets, and smartphones — any device with a modern browser.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have questions? We&apos;re here to help.
          </p>
        </div>

        <FaqAccordion items={FAQS} />
      </div>
    </section>
  )
}
