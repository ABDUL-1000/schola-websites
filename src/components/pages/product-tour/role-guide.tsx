import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Check, Clock3, MapPin, Square, SquareCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ROLE_GUIDES, STATUS_BADGE, type RoleKey } from '@/lib/product-catalog'
import { cn } from '@/lib/utils'

/**
 * Interactive role guide: pick a role, see what that dashboard does, where to
 * find each thing in the app, and a first-week checklist you can tick off.
 */
export function RoleGuide({ role, onRoleChange }: { role: RoleKey; onRoleChange: (r: RoleKey) => void }) {
  const guide = ROLE_GUIDES.find((r) => r.key === role) ?? ROLE_GUIDES[0]
  const [done, setDone] = useState<Record<string, boolean>>({})
  const toggle = (k: string) => setDone((d) => ({ ...d, [k]: !d[k] }))
  const doneCount = guide.firstSteps.filter((s) => done[`${guide.key}:${s}`]).length

  return (
    <div className="mb-16">
      {/* Role picker */}
      <div role="tablist" aria-label="Choose a role" className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
        {ROLE_GUIDES.map((r) => {
          const active = r.key === guide.key
          return (
            <button
              key={r.key}
              role="tab"
              aria-selected={active}
              onClick={() => onRoleChange(r.key)}
              className={cn(
                'flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm',
                active
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'border border-border bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground',
              )}
            >
              <r.icon className="size-4 shrink-0" />
              {r.name}
            </button>
          )
        })}
      </div>

      <div role="tabpanel" className="grid gap-6 lg:grid-cols-12">
        {/* Summary */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-foreground/5 sm:p-8 lg:col-span-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={cn('rounded-full px-3 py-1 text-xs font-bold', STATUS_BADGE[guide.status].className)}>
              {STATUS_BADGE[guide.status].label}
            </span>
            <span className="text-xs font-medium text-muted-foreground">{guide.portal}</span>
          </div>
          <h2 className="mt-3 text-2xl font-extrabold text-foreground sm:text-3xl">{guide.name}</h2>
          <p className="mt-2 text-base font-medium text-primary">{guide.summary}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            <strong className="text-foreground">Who:</strong> {guide.who}
          </p>

          <h3 className="mt-8 mb-4 text-sm font-bold uppercase tracking-wider text-foreground">What this dashboard does</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {guide.capabilities.map((c) => (
              <div key={c.title} className="flex gap-3 rounded-xl border border-border bg-background p-4">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{c.title}</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{c.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {guide.comingSoon && guide.comingSoon.length > 0 && (
            <div className="mt-6 rounded-xl border border-dashed border-border p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Clock3 className="size-3.5" /> Not yet available
              </div>
              <ul className="space-y-1 text-xs text-muted-foreground">
                {guide.comingSoon.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Side: where to find + checklist */}
        <div className="space-y-6 lg:col-span-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground">
              <MapPin className="size-4 text-primary" /> Where to find it
            </h3>
            <ul className="space-y-2">
              {guide.whereToFind.map((w) => (
                <li key={w} className="rounded-lg bg-muted/50 px-3 py-2 font-mono text-[11px] leading-relaxed text-foreground">
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">First week</h3>
              <span className="text-xs text-muted-foreground">
                {doneCount}/{guide.firstSteps.length}
              </span>
            </div>
            <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${(doneCount / guide.firstSteps.length) * 100}%` }}
              />
            </div>
            <ul className="space-y-2">
              {guide.firstSteps.map((s) => {
                const k = `${guide.key}:${s}`
                const checked = !!done[k]
                return (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => toggle(k)}
                      aria-pressed={checked}
                      className="flex w-full cursor-pointer items-start gap-2.5 rounded-lg px-1 py-1 text-left text-sm hover:bg-muted/40"
                    >
                      {checked ? (
                        <SquareCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      ) : (
                        <Square className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      )}
                      <span className={cn(checked ? 'text-muted-foreground line-through' : 'text-foreground')}>{s}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <Button asChild size="lg" className="w-full shadow-lg shadow-primary/25">
            <Link to="/book-demo" className="flex items-center justify-center gap-2">
              See the {guide.name.toLowerCase()} view in a demo <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
