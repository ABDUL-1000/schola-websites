import { Link } from '@tanstack/react-router'
import { ArrowRight, Check, Clock, Gift, Minus, Rocket, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FaqAccordion } from '@/components/custom-ui/faq-accordion'
import { cn } from '@/lib/utils'
import {
  FREE_CBT_EXAMS,
  FREE_STAFF,
  FREE_STUDENTS,
  MAX_BILLED_STUDENTS,
  MAX_TERM_BILL,
  MIN_BILLED_STUDENTS,
  PRICE_PER_STUDENT,
  TRIAL_DAYS,
  naira,
} from '@/constants/pricing'

export function PricingHero() {
  return (
    <section className="relative pt-28 pb-10 sm:pt-36 sm:pb-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
          <Gift className="size-3.5" />
          {TRIAL_DAYS}-day free trial, every feature
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          Simple pricing for every school
        </h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Try everything free for {TRIAL_DAYS} days. Then stay on the free plan, or move to Standard at{' '}
          <strong className="text-foreground">{naira(PRICE_PER_STUDENT)} per student, per term</strong>, with nothing held back. Big
          school? You never pay for more than {MAX_BILLED_STUDENTS} students.
        </p>
      </div>
    </section>
  )
}

const FREE_FEATURES = [
  `Up to ${FREE_STUDENTS} students and ${FREE_STAFF} staff`,
  'Attendance, timetable, lesson notes and plans',
  'Score entry, broadsheet and class positions',
  'Fees and finance records',
  'Student and staff ID cards, in your design',
  'Report cards (with a "free plan" watermark)',
  `${FREE_CBT_EXAMS} CBT exams to try`,
]

const STANDARD_FEATURES = [
  'Unlimited students, staff and branches',
  'Clean report cards in your school’s design',
  'Publish results to students and parents in one click',
  "Print a whole class's report cards at once",
  'ID cards for every student and staff member',
  'Unlimited CBT exams',
  'AI lesson notes, lesson plans and exam questions',
  'Everything in Free',
]

export function PricingPlans() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <PlanCard
            name="Free"
            price="₦0"
            per="forever"
            blurb={`For small schools and for trying Schola after your ${TRIAL_DAYS}-day trial.`}
            features={FREE_FEATURES}
            cta="Start free"
          />
          <PlanCard
            highlight
            name="Standard"
            price={naira(PRICE_PER_STUDENT)}
            per="per student, per term"
            blurb="Everything Schola does, for a school of any size."
            features={STANDARD_FEATURES}
            cta={`Start your ${TRIAL_DAYS}-day free trial`}
            note={`Never more than ${naira(MAX_TERM_BILL)} a term: schools with over ${MAX_BILLED_STUDENTS} students pay for ${MAX_BILLED_STUDENTS}. Schools with fewer than ${MIN_BILLED_STUDENTS} pay for ${MIN_BILLED_STUDENTS}.`}
          />
        </div>
      </div>
    </section>
  )
}

function PlanCard({
  name,
  price,
  per,
  blurb,
  features,
  cta,
  note,
  highlight,
}: {
  name: string
  price: string
  per: string
  blurb: string
  features: Array<string>
  cta: string
  note?: string
  highlight?: boolean
}) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border bg-card p-6 sm:p-8',
        highlight ? 'border-primary shadow-xl shadow-primary/10 ring-1 ring-primary' : 'border-border',
      )}
    >
      {highlight && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
          <Sparkles className="size-3" /> Everything included
        </span>
      )}
      <h2 className="text-lg font-bold text-foreground">{name}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="text-4xl font-extrabold text-foreground font-mono">{price}</span>
        <span className="text-sm text-muted-foreground">{per}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-2.5 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            <span className="text-foreground">{f}</span>
          </li>
        ))}
      </ul>
      <Button size="lg" asChild variant={highlight ? 'default' : 'outline'} className="mt-8 w-full font-semibold">
        <Link to="/book-demo" className="flex items-center justify-center gap-2">
          {cta} <ArrowRight className="size-4" />
        </Link>
      </Button>
      {note && <p className="mt-3 text-center text-[11px] text-muted-foreground">{note}</p>}
    </div>
  )
}

export function TrialSteps() {
  const steps = [
    {
      icon: Rocket,
      title: `Days 1–${TRIAL_DAYS}: everything unlocked`,
      text: 'Add your students and staff (we can import your Excel sheets), enter scores and print report cards. No card needed.',
    },
    {
      icon: Clock,
      title: 'After the trial: you choose',
      text: `Stay on the free plan, or upgrade to Standard. Nothing you added is deleted: every student, staff member and score stays.`,
    },
    {
      icon: Sparkles,
      title: 'On Standard: no limits',
      text: 'Clean report cards, publishing to parents, CBT and AI tools, for every student in your school.',
    },
  ]
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">How the free trial works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ROWS: Array<[string, string | boolean, string | boolean]> = [
  ['Students', `Up to ${FREE_STUDENTS}`, 'Unlimited'],
  ['Staff', `Up to ${FREE_STAFF}`, 'Unlimited'],
  ['Branches / campuses', '1', 'Unlimited'],
  ['Attendance, timetable, lesson notes and plans', true, true],
  ['Score entry, broadsheet and positions', true, true],
  ['Fees and finance', true, true],
  ['ID cards (3D view, print, your design)', `First ${FREE_STUDENTS} students & ${FREE_STAFF} staff`, 'Everyone'],
  ['Report cards', 'With watermark', 'Clean'],
  ['Publish results to students and parents', false, true],
  ["Print a whole class's report cards at once", false, true],
  ['Report card design (layouts, colours, signature, stamp)', false, true],
  ['CBT exams', `${FREE_CBT_EXAMS} to try`, 'Unlimited'],
  ['AI tools (lesson notes, plans, questions)', false, true],
  ['Price', '₦0', `${naira(PRICE_PER_STUDENT)} / student / term`],
  ['Most you pay per term', '₦0', `${naira(MAX_TERM_BILL)} (${MAX_BILLED_STUDENTS}+ students)`],
]

export function CompareTable() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Compare plans</h2>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-5 py-3 text-left font-semibold text-muted-foreground" />
                <th className="px-5 py-3 text-center font-bold text-foreground">Free</th>
                <th className="px-5 py-3 text-center font-bold text-primary">Standard</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, free, standard]) => (
                <tr key={label} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 text-muted-foreground">{label}</td>
                  {[free, standard].map((v, i) => (
                    <td key={i} className="px-5 py-3 text-center">
                      {v === true ? (
                        <Check className="mx-auto size-4 text-primary" />
                      ) : v === false ? (
                        <Minus className="mx-auto size-4 text-muted-foreground/50" />
                      ) : (
                        <span className="font-medium text-foreground">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const PRICING_FAQS = [
  {
    q: 'Do I need a card to start the free trial?',
    a: `No. Book a demo and we set your school up with a ${TRIAL_DAYS}-day trial with every feature unlocked. You only pay if you choose Standard.`,
  },
  {
    q: 'What happens when the trial ends?',
    a: `Your school moves to the free plan automatically. Nothing is deleted: every student, staff member and score stays and keeps working. You just can't add more than ${FREE_STUDENTS} students or ${FREE_STAFF} staff, report cards carry a watermark, and publishing results to parents is locked until you upgrade.`,
  },
  {
    q: 'How is the Standard price worked out?',
    a: `${naira(PRICE_PER_STUDENT)} for each active student, each term, up to ${MAX_BILLED_STUDENTS} students. A school with 300 students pays ${naira(300 * PRICE_PER_STUDENT)} a term; a school with 400, 900 or 2,000 students pays ${naira(MAX_TERM_BILL)}. Schools with fewer than ${MIN_BILLED_STUDENTS} students are billed for ${MIN_BILLED_STUDENTS}.`,
  },
  {
    q: 'Do we pay for teachers, parents or admins?',
    a: 'No. You pay per student only. Staff, parent and admin accounts are included.',
  },
  {
    q: 'Can you help us move our records in?',
    a: 'Yes. Schola imports students and staff straight from Excel, and our team helps every new school get set up.',
  },
]

export function PricingFaq() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-8">Pricing questions</h2>
        <FaqAccordion items={PRICING_FAQS} />
      </div>
    </section>
  )
}
