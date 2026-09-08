import { Rocket, ShieldCheck, CreditCard, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaqAccordion } from '@/components/custom-ui/faq-accordion'

const FAQ_CATEGORIES = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Rocket,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    questions: [
      {
        q: 'How do I sign up for early access?',
        a: "Join our waitlist by clicking the 'Join Waitlist' button on our website. We are progressively rolling out invites to schools based on region and readiness.",
      },
      {
        q: 'Is there a demo available for schools?',
        a: 'We provide personalized guided demos to school leadership once you are invited from the waitlist.',
      },
      {
        q: 'What are the system requirements?',
        a: 'Schola is entirely cloud-based. All you need is a stable internet connection and any modern web browser on a desktop, tablet, or smartphone.',
      },
      {
        q: 'Can I import existing student data?',
        a: 'Yes! Our onboarding team will assist you with bulk-importing students, staff, and historical records using standardized CSV templates.',
      },
    ],
  },
  {
    id: 'technical-security',
    title: 'Technical & Security',
    icon: ShieldCheck,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    questions: [
      {
        q: 'Who owns the student data?',
        a: 'Your school owns all data entered into the system. Schola acts strictly as a data processor in compliance with the Nigeria Data Protection Act (NDPA).',
      },
      {
        q: 'Is the platform multi-tenant?',
        a: 'Yes, Schola is built on a secure multi-tenant architecture, ensuring complete data isolation between different schools and institutions.',
      },
      {
        q: 'How is data encrypted?',
        a: 'All data is encrypted in transit using industry-standard TLS 1.2+ and encrypted at rest using AES-256 protocols within our secure cloud infrastructure.',
      },
      {
        q: 'Is there 2FA support?',
        a: 'Yes, two-factor authentication (2FA) is available and highly recommended for all administrative and staff accounts.',
      },
    ],
  },
  {
    id: 'account-pricing',
    title: 'Account & Pricing',
    icon: CreditCard,
    iconColor: 'text-foreground',
    iconBg: 'bg-muted',
    questions: [
      {
        q: 'Are there separate logins for teachers and parents?',
        a: 'Yes. Schola provides distinct, role-based portals for Administrators, Teachers, and Students/Parents, ensuring everyone has appropriate access.',
      },
      {
        q: 'What happens after the beta period?',
        a: 'Early adopters will transition into our favorable launch pricing tier. You will be notified well in advance of any billing changes.',
      },
      {
        q: 'Do you offer non-profit discounts?',
        a: 'We handle non-profit and public school discounting on a case-by-case basis. Please contact our sales team during onboarding.',
      },
      {
        q: 'Can I cancel my subscription anytime?',
        a: 'Yes, there are no aggressive lock-in contracts. You can export your data and cancel your subscription at the end of your billing cycle.',
      },
    ],
  },
]

export function Content() {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0].id)

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 md:p-16 items-start">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-32">
            <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-6 pl-4">
              Categories
            </h3>
            <nav className="flex flex-col space-y-2 mb-10">
              {FAQ_CATEGORIES.map((category) => {
                const isActive = activeCategory === category.id
                const Icon = category.icon
                return (
                  <Button
                    key={category.id}
                    variant="ghost"
                    onClick={() => {
                      setActiveCategory(category.id)
                      const element = document.getElementById(category.id)
                      if (element) {
                        const y =
                          element.getBoundingClientRect().top +
                          window.scrollY -
                          120
                        window.scrollTo({ top: y, behavior: 'smooth' })
                      }
                    }}
                    className={`w-full justify-start px-4 py-6 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 hover:text-blue-600 shadow-sm'
                        : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                    }`}
                  >
                    <Icon
                      className={`size-4 mr-3 ${isActive ? 'text-blue-500' : 'text-muted-foreground'}`}
                    />
                    {category.title}
                  </Button>
                )
              })}
            </nav>

            <div className="border border-border shadow-sm rounded-2xl p-6 bg-card hidden lg:flex flex-col items-start text-left">
              <div className="bg-blue-500/10 size-10 rounded-full flex items-center justify-center mb-6">
                <HelpCircle className="size-5 text-blue-500" />
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">
                Need direct help?
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Our support team is available Mon-Fri, 9am-5pm EST.
              </p>
              <Button variant="outline" className="w-full font-semibold">
                Contact Support
              </Button>
            </div>
          </aside>

          {/* FAQ Sections */}
          <div className="flex-1 min-w-0 w-full">
            <div className="space-y-16">
              {FAQ_CATEGORIES.map((category) => {
                const SectionIcon = category.icon
                return (
                  <div
                    id={category.id}
                    key={category.id}
                    className="scroll-mt-32"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className={`size-10 rounded-xl ${category.iconBg} flex items-center justify-center shrink-0 shadow-sm`}
                      >
                        <SectionIcon
                          className={`size-5 ${category.iconColor}`}
                        />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {category.title}
                      </h2>
                    </div>

                    <div className="mt-8">
                      <FaqAccordion items={category.questions} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
