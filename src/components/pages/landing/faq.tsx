import { FaqAccordion } from '@/components/custom-ui/faq-accordion'

const FAQS = [
  {
    q: 'Is my school data secure?',
    a: 'Absolutely. All data is encrypted at rest and in transit. We follow industry-standard security practices to keep your institution&apos;s information safe.',
  },
  {
    q: 'How do I get started with Schola?',
    a: 'Book a free 15-minute live demo on our website. Our solutions team will walk you through raw score entry, broadsheet compilation, and custom branded report cards tailored to your school.',
  },
  {
    q: 'Can Schola handle multiple branches?',
    a: 'Yes! Multi-branch support is natively built in. You can manage multiple campuses from a single centralized administrator dashboard.',
  },
  {
    q: 'How much does Schola cost?',
    a: 'Schola offers transparent termly pricing starting at ₦1,000 per active student per term, with automatic volume discounts for larger schools. You can slide your student population on our calculator to see your exact rate.',
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
