import { FIRST_STEPS_TIMELINE } from '@/lib/product-catalog'
import { cn } from '@/lib/utils'

const TONE: Record<'primary' | 'amber' | 'teal', string> = {
  primary: 'bg-primary/10 text-primary',
  amber: 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300',
  teal: 'bg-teal-100 text-teal-800 dark:bg-teal-500/15 dark:text-teal-300',
}

/** "How it works": a numbered vertical timeline that says who does each step. */
export function SetupTimeline() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">How it works</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            From sign-up to report cards
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Four steps. Only the first takes real effort — and we can walk you through it on a call.
          </p>
        </div>

        <ol className="relative">
          {FIRST_STEPS_TIMELINE.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 pb-12 last:pb-0 sm:gap-7">
              {/* rail */}
              {i < FIRST_STEPS_TIMELINE.length - 1 && (
                <span aria-hidden className="absolute left-[19px] top-11 h-[calc(100%-2.75rem)] border-l-2 border-dashed border-primary/25" />
              )}
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary">
                {i + 1}
              </span>
              <div className="min-w-0 pt-1">
                <span className={cn('inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider', TONE[step.whoTone])}>
                  {step.who}
                </span>
                <h3 className="mt-2 text-lg font-bold text-foreground sm:text-xl">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">{step.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.chips.map((c) => (
                    <span key={c} className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-foreground">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
