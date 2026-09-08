import { Database, Settings, Zap } from 'lucide-react'

const STEPS = [
  {
    icon: Database,
    title: 'Enter Data',
    description:
      'Onboard your school by adding classes, students, and staff into the system.',
  },
  {
    icon: Settings,
    title: 'Go Digital',
    description:
      'Set up digital grading, timetables, and reporting to replace manual paperwork.',
  },
  {
    icon: Zap,
    title: 'Run Freely',
    description:
      'Focus on what matters — Schola replaces the paper trail so you can run your school effortlessly.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] [radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            How Schola Works
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            A simple, three-step process to digitize and run your school from
            anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-0.5 bg-linear-to-r from-transparent via-primary/20 to-transparent border-t border-dashed border-border" />

          {STEPS.map((step, i) => (
            <div key={step.title} className="relative text-center group">
              <div className="relative z-10 mx-auto mb-6 inline-flex items-center justify-center size-20 rounded-2xl bg-card text-primary border border-border shadow-xl shadow-primary/5 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="size-8" />
                <div className="absolute -top-2 -right-2 size-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center border-2 border-background">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
