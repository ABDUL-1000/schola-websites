import { UploadCloud, Edit3, Cpu, Printer, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

const STEPS = [
  {
    stepNumber: '01',
    icon: UploadCloud,
    title: 'Set up once in an afternoon',
    description:
      'Bulk-import your classes, subjects, teachers, and students using our validated Excel templates. Schola cleans duplicates and sets up your entire term structure in minutes.',
    badge: '1-Click Import',
  },
  {
    stepNumber: '02',
    icon: Edit3,
    title: 'Streamlined score entry',
    description:
      'Teachers open their subject score sheet and type in raw continuous assessment (CA 1, CA 2) and exam marks. Built-in auto-save prevents lost marks even during internet hiccups.',
    badge: 'Auto-Saving',
  },
  {
    stepNumber: '03',
    icon: Cpu,
    title: 'Automated broadsheet computation',
    description:
      'Our mathematical engine aggregates all subjects across the class. In seconds, it computes weighted averages, assigns official letter grades (A1 - F9), and determines class position rankings.',
    badge: 'Zero Math Errors',
  },
  {
    stepNumber: '04',
    icon: Printer,
    title: 'Branded report cards in one click',
    description:
      'School administrators review the completed broadsheet, lock the results, and generate high-resolution, watermarked PDF report cards customized with your school crest and motto.',
    badge: 'Print & Digital Ready',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 relative overflow-hidden bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Streamlined 4-Step Process
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            How Schola Transforms Your Termly Grading
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            From raw marks in a teacher&apos;s notebook to finished, branded
            report cards in the hands of parents—without the midnight headache.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Top row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      Step {step.stepNumber}
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-5 inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="size-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <span>Explore step</span>
                  <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            asChild
            className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 font-semibold cursor-pointer"
          >
            <Link to="/book-demo" className="flex items-center gap-2">
              See the 4 Steps Live in a 15-Minute Demo{' '}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
