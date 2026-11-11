import * as React from 'react'
import { Popover } from 'radix-ui'
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * shadcn-style date picker (no extra packages). The value is a plain local
 * "YYYY-MM-DD", so the day tapped is the day saved — never shifted by time zone.
 */

const pad = (n: number) => String(n).padStart(2, '0')
export const toYmd = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
export const fromYmd = (v?: string | null) => {
  const m = v ? /^(\d{4})-(\d{2})-(\d{2})/.exec(v) : null
  return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : undefined
}
/** e.g. "Wed, 18 Nov 2026" */
export const formatDay = (v?: string | null) =>
  fromYmd(v)?.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }) ?? ''

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const sameDay = (a?: Date, b?: Date) => !!a && !!b && toYmd(a) === toYmd(b)

interface DatePickerProps {
  value?: string
  onChange: (value: string) => void
  /** Earliest / latest day allowed, "YYYY-MM-DD". */
  min?: string
  max?: string
  /** Extra rule, e.g. no Sundays. */
  isDisabled?: (day: Date) => boolean
  placeholder?: string
  id?: string
  className?: string
  'aria-label'?: string
}

export function DatePicker({ value, onChange, min, max, isDisabled, placeholder = 'Pick a date', id, className, ...rest }: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const selected = fromYmd(value)
  const minD = fromYmd(min)
  const maxD = fromYmd(max)
  const today = new Date()
  const [month, setMonth] = React.useState(() => {
    const base = selected || (minD && minD > today ? minD : today)
    return new Date(base.getFullYear(), base.getMonth(), 1)
  })
  React.useEffect(() => {
    if (open && selected) setMonth(new Date(selected.getFullYear(), selected.getMonth(), 1))
  }, [open])

  const blocked = (d: Date) =>
    (!!minD && d < minD) || (!!maxD && d > maxD) || (isDisabled ? isDisabled(d) : false)

  // 6 rows × 7 days starting on the Sunday before the 1st.
  const first = new Date(month.getFullYear(), month.getMonth(), 1)
  const start = new Date(first)
  start.setDate(1 - first.getDay())
  const days = Array.from({ length: 42 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i))

  const prevMonth = new Date(month.getFullYear(), month.getMonth() - 1, 1)
  const nextMonth = new Date(month.getFullYear(), month.getMonth() + 1, 1)
  const canPrev = !minD || new Date(month.getFullYear(), month.getMonth(), 0) >= minD
  const canNext = !maxD || nextMonth <= maxD

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          id={id}
          aria-label={rest['aria-label']}
          className={cn(
            'flex w-full items-center gap-2 rounded-lg border border-input bg-background px-3 py-2 text-left text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40',
            className,
          )}
        >
          <CalendarIcon className="size-4 shrink-0 text-muted-foreground" />
          <span className={cn('truncate', !selected && 'text-muted-foreground')}>{selected ? formatDay(value) : placeholder}</span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={6}
          collisionPadding={8}
          className="z-50 w-[296px] max-w-[calc(100vw-16px)] rounded-xl border border-border bg-popover p-3 text-popover-foreground shadow-lg outline-none"
        >
          <div className="mb-2 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous month"
              disabled={!canPrev}
              onClick={() => setMonth(prevMonth)}
              className="flex size-8 items-center justify-center rounded-md hover:bg-muted disabled:opacity-30"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="text-sm font-semibold" aria-live="polite">
              {month.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </div>
            <button
              type="button"
              aria-label="Next month"
              disabled={!canNext}
              onClick={() => setMonth(nextMonth)}
              className="flex size-8 items-center justify-center rounded-md hover:bg-muted disabled:opacity-30"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
          <div className="grid grid-cols-7 text-center text-xs text-muted-foreground">
            {WEEKDAYS.map((w) => (
              <div key={w} className="py-1">
                {w}
              </div>
            ))}
          </div>
          <div role="grid" className="grid grid-cols-7 gap-0.5">
            {days.map((d) => {
              const inMonth = d.getMonth() === month.getMonth()
              const off = blocked(d)
              const isSel = sameDay(d, selected)
              const isToday = sameDay(d, today)
              return (
                <button
                  key={toYmd(d)}
                  type="button"
                  data-day={toYmd(d)}
                  disabled={off}
                  aria-pressed={isSel}
                  aria-label={d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  onClick={() => {
                    onChange(toYmd(d))
                    setOpen(false)
                  }}
                  className={cn(
                    'flex h-9 items-center justify-center rounded-md text-sm tabular-nums transition-colors',
                    !inMonth && 'text-muted-foreground/50',
                    !off && !isSel && 'hover:bg-muted',
                    isToday && !isSel && 'font-semibold text-primary',
                    isSel && 'bg-primary text-primary-foreground',
                    off && 'cursor-not-allowed opacity-30',
                  )}
                >
                  {d.getDate()}
                </button>
              )
            })}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
