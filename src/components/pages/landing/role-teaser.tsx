import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { ROLE_GUIDES, ROADMAP, STATUS_BADGE } from '@/lib/product-catalog'
import { cn } from '@/lib/utils'

/** Homepage teaser for the Role Guide: one card per dashboard. */
export function RoleTeaser() {
  return (
    <section id="roles" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">A dashboard for every role</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">Who sees what</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Each person signs in to a dashboard built around their job. Tap a role to see exactly what it can do.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROLE_GUIDES.map((r) => (
            <Link
              key={r.key}
              to="/product-tour"
              search={{ role: r.key }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <r.icon className="size-4.5" />
                </span>
                <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-semibold', STATUS_BADGE[r.status].className)}>
                  {STATUS_BADGE[r.status].label}
                </span>
              </div>
              <h3 className="mt-3 font-bold text-foreground">{r.name}</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>
              <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                See the {r.name.toLowerCase()} guide <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Honest "what's next": everything here is not live yet. */
export function RoadmapStrip() {
  return (
    <section id="roadmap" className="py-16 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">On the roadmap</p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">What we’re building next</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Not available yet — we’d rather tell you than surprise you. Tell us which matters most to your school.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ROADMAP.map((item) => (
            <div key={item.title} className="rounded-xl border border-dashed border-border bg-card/60 p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">Coming soon</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
