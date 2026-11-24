import { Rocket, ShieldCheck, CreditCard, HelpCircle } from 'lucide-react'
import { FREE_STAFF, FREE_STUDENTS, MAX_BILLED_STUDENTS, MAX_TERM_BILL, MIN_BILLED_STUDENTS, PRICE_PER_STUDENT, TRIAL_DAYS, naira } from '@/constants/pricing'
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
        q: 'How do I schedule a demo for my school?',
        a: "You can schedule a live 15-minute demo directly by clicking 'Book a Demo' on our website. Choose your preferred date, time slot, and the specific modules you'd like to test.",
      },
      {
        q: 'Is there a live test available for schools?',
        a: 'Yes! We can set up a live 15-minute test in your school computer lab using your actual subjects and grading scale with zero upfront commitment.',
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
        q: 'Can Schola make ID cards and certificates?',
        a: `Yes. Design your student and staff ID cards (portrait or landscape, in your colours, with your signature) and your certificates: graduation, testimonials, MSSN, FCS and other club certificates, and awards, in your own wording. Print a whole class at once or download them as one PDF. Students and staff can view theirs in 3D on their own portal. Certificates are on every plan; on the free plan, ID cards cover your first ${FREE_STUDENTS} students and ${FREE_STAFF} staff.`,
      },
      {
        q: 'Can we send admission and appointment letters?',
        a: 'Yes. Write your admission letter for new students and your appointment letter for new staff in your own words, with your logo, signature and stamp. Names, class, admission number, job title and start date fill in for each person. Approving someone does not send a letter; you send it when you are ready, to one person or many at once. Each letter is emailed as a PDF (to the parent or the staff member) and saved on their portal, where they can view and download it.',
      },
      {
        q: 'How much does Schola cost?',
        a: `Standard is ${naira(PRICE_PER_STUDENT)} per student, per term, with every feature included (report cards, publishing results, CBT, AI tools, finance, multiple branches). You never pay for more than ${MAX_BILLED_STUDENTS} students, so no school pays more than ${naira(MAX_TERM_BILL)} a term. Schools with fewer than ${MIN_BILLED_STUDENTS} students are billed for ${MIN_BILLED_STUDENTS}.`,
      },
      {
        q: 'Is there a free trial or a free plan?',
        a: `Yes, both. Every school gets a ${TRIAL_DAYS}-day free trial with everything unlocked. After the trial you can keep using Schola on the free plan: up to ${FREE_STUDENTS} students and ${FREE_STAFF} staff, with watermarked report cards and no publishing to parents.`,
      },
      {
        q: 'What happens to our data when the trial ends?',
        a: `Nothing is deleted. Every student, staff member and score you added stays and keeps working. On the free plan you just can't add more than ${FREE_STUDENTS} students or ${FREE_STAFF} staff until you upgrade.`,
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
