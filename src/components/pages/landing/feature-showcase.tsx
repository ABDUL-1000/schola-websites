import type { ReactNode } from 'react'
import { Check } from 'lucide-react'
import { SHOWCASE, type ShowcaseItem } from '@/lib/product-catalog'
import { cn } from '@/lib/utils'

/**
 * Numbered feature showcase: copy on one side, a small product-style card on
 * the other, alternating. Cards show illustrative sample data only.
 */
export function FeatureShowcase() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">What you get</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">The jobs that eat your term, handled</h2>
        </div>

        <div className="divide-y divide-dashed divide-border">
          {SHOWCASE.map((item, i) => (
            <article key={item.id} className="grid items-center gap-10 py-14 first:pt-0 last:pb-0 md:grid-cols-2 md:gap-16">
              <div className={cn(i % 2 === 1 && 'md:order-2')}>
                <p className="text-xs font-bold uppercase tracking-wider text-orange">
                  Nº {i + 1} — {item.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight text-foreground sm:text-3xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
                <ul className="mt-5 space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn(i % 2 === 1 && 'md:order-1')}>
                <Visual kind={item.visual} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="relative mx-auto max-w-md rounded-2xl border border-border bg-card p-5 shadow-sm">
      <span aria-hidden className="absolute -top-2.5 left-8 h-5 w-16 -rotate-2 rounded-sm bg-primary/15" />
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="text-[10px] text-muted-foreground/70">Sample data</span>
      </div>
      {children}
    </div>
  )
}

const pill = {
  good: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  warn: 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300',
  bad: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300',
  info: 'bg-primary/10 text-primary',
}

function Pill({ tone, children }: { tone: keyof typeof pill; children: ReactNode }) {
  return <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-semibold', pill[tone])}>{children}</span>
}

function Row({ left, sub, right }: { left: string; sub?: string; right: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-dashed border-border py-2.5 last:border-0">
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-foreground">{left}</div>
        {sub && <div className="text-[11px] text-muted-foreground">{sub}</div>}
      </div>
      <div className="shrink-0 text-right">{right}</div>
    </div>
  )
}

function Visual({ kind }: { kind: ShowcaseItem['visual'] }) {
  switch (kind) {
    case 'report-sheet':
      return (
        <Card label="Report sheet — JSS 2A · First term">
          {[
            ['Adaeze Okonkwo', '84.5', 'A', '1st'],
            ['Fatima Abdullahi', '81.0', 'A', '2nd'],
            ['Chidi Eze', '72.3', 'A', '3rd'],
            ['Emeka Nwosu', '61.8', 'B', '4th'],
          ].map(([n, avg, g, pos]) => (
            <Row
              key={n}
              left={n}
              sub={`Average ${avg}%`}
              right={
                <div className="flex items-center gap-2">
                  <span className="rounded-md border border-border px-2 py-0.5 text-xs font-semibold tabular-nums">{g}</span>
                  <span className="w-8 text-xs font-bold text-primary">{pos}</span>
                </div>
              }
            />
          ))}
        </Card>
      )
    case 'fee-register':
      return (
        <Card label="Fee register — this term">
          <Row left="Adaeze Okonkwo" sub="JSS 2A" right={<><div className="text-sm font-bold tabular-nums">₦194,000</div><Pill tone="good">Paid</Pill></>} />
          <Row left="Emeka Nwosu" sub="Primary 5B" right={<><div className="text-sm font-bold tabular-nums text-amber-700 dark:text-amber-300">₦48,500 of ₦97,000</div><Pill tone="warn">Part paid</Pill></>} />
          <Row left="Fatima Abdullahi" sub="SSS 1C" right={<><div className="text-sm font-bold tabular-nums">₦240,000</div><Pill tone="good">Paid</Pill></>} />
          <Row left="Taiwo Adeleke" sub="Primary 3A" right={<><div className="text-sm font-bold tabular-nums text-red-600 dark:text-red-400">₦85,000</div><Pill tone="bad">Owing</Pill></>} />
        </Card>
      )
    case 'exam-review':
      return (
        <Card label="Exam office — awaiting review">
          {[
            ['Mathematics — First Term Exam', 'JSS 2 · Written paper'],
            ['Basic Science — Mid-term Test', 'Primary 4 · CBT'],
            ['English — Continuous Assessment', 'SSS 1 · Written paper'],
          ].map(([t, s]) => (
            <Row
              key={t}
              left={t}
              sub={s}
              right={
                <div className="flex gap-1.5">
                  <span className="rounded-md bg-emerald-100 px-2 py-1 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">Approve</span>
                  <span className="rounded-md border border-border px-2 py-1 text-[10px] font-semibold text-muted-foreground">Reject</span>
                </div>
              }
            />
          ))}
        </Card>
      )
    case 'question-bank':
      return (
        <Card label="Question bank — 2026/2027 · First term">
          <div className="mb-3 rounded-lg border border-border bg-background p-3 text-center">
            <div className="text-xs font-extrabold uppercase tracking-wide text-foreground">Your School Name</div>
            <div className="text-[10px] text-muted-foreground">12 School Road, Ikeja · Tel 0800 000 0000</div>
            <div className="mt-1.5 text-[10px] font-bold uppercase">2026/2027 Session — First Term</div>
            <div className="text-[10px] font-bold uppercase underline">Examination: Mathematics</div>
          </div>
          <Row left="Mathematics — First Term Exam" sub="JSS 2 · Approved" right={<Pill tone="info">PDF</Pill>} />
          <Row left="Physics — Test 1" sub="SSS 1 · Approved" right={<Pill tone="info">PDF</Pill>} />
        </Card>
      )
    case 'enrolment':
      return (
        <Card label="Enrolment queue">
          <Row left="Abdull Abdu" sub="Nursery 1 · Mrs. Juwairiyah Abdu" right={<Pill tone="warn">Pending review</Pill>} />
          <Row left="Tobi Ade" sub="Primary 1 · Mrs. Ngozi Ade" right={<Pill tone="warn">Pending review</Pill>} />
          <Row left="Kemi Bello" sub="JSS 1 · Mr. Tunde Bello" right={<Pill tone="good">Enrolled</Pill>} />
          <div className="mt-3 rounded-lg bg-muted/60 p-2.5 text-[11px] text-muted-foreground">
            Approve &amp; enroll → the parent is emailed the child’s login details.
          </div>
        </Card>
      )
    case 'id-certificates':
      return (
        <Card label="ID card, certificate & letters — your design">
          <div className="group flex items-center justify-center gap-4 py-3 [perspective:900px]">
            {/* ID card */}
            <div className="w-[104px] shrink-0 -rotate-6 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-500 group-hover:[transform:rotateY(-14deg)_rotateZ(-3deg)]">
              <div className="bg-[#1e3a8a] px-2 pb-6 pt-2 text-center">
                <div className="text-[6px] font-extrabold uppercase tracking-wider text-white">Your School Name</div>
                <div className="text-[5px] font-bold uppercase tracking-widest text-amber-400">Student ID card</div>
              </div>
              <div className="-mt-5 flex justify-center">
                <div className="flex size-11 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-xs font-bold text-[#1e3a8a] shadow">AB</div>
              </div>
              <div className="px-2 pb-2 pt-1 text-center">
                <div className="text-[8px] font-bold text-slate-900">Amina Bello</div>
                <div className="text-[6px] text-slate-500">JSS 2 Gold · O+</div>
                <div className="mt-1.5 flex h-3.5 justify-center gap-px">
                  {[2, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 2, 3, 1].map((w, i) => (
                    <span key={i} className="bg-slate-900" style={{ width: w }} />
                  ))}
                </div>
              </div>
              <div className="h-1.5 bg-amber-400" />
            </div>
            {/* certificate */}
            <div className="relative w-[230px] rotate-2 bg-[#fdf8ec] p-1.5 shadow-lg ring-1 ring-black/5 transition-transform duration-500 group-hover:[transform:rotateY(12deg)_rotateZ(1deg)]">
              <div className="border-[3px] border-[#1e3a8a] p-0.5">
                <div className="border border-[#b8860b] px-3 py-2.5 text-center">
                  <div className="text-[6px] font-bold uppercase tracking-widest text-[#1e3a8a]">Your School Name</div>
                  <div className="mt-0.5 font-serif text-[15px] font-bold uppercase leading-none tracking-[0.12em] text-[#1e3a8a]">Certificate</div>
                  <div className="font-serif text-[9px] italic text-[#b8860b]">of Graduation</div>
                  <div className="mt-1.5 font-serif text-[6px] italic text-slate-500">This is to certify that</div>
                  <div className="font-serif text-[13px] italic text-[#1e3a8a]">Amina Bello</div>
                  <div className="mx-auto mt-0.5 h-px w-24 bg-[#b8860b]/60" />
                  <div className="mx-auto mt-1 max-w-[170px] font-serif text-[5.5px] leading-snug text-slate-600">
                    has successfully completed the Senior Secondary School course of study and is hereby awarded this certificate.
                  </div>
                  <div className="mt-2 flex items-end justify-between px-2">
                    <div className="w-12 border-t border-[#b8860b] pt-0.5 text-[5px] text-slate-500">Principal</div>
                    <div className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 via-amber-500 to-amber-700 text-[6px] font-bold text-amber-950 shadow">YS</div>
                    <div className="w-12 border-t border-[#b8860b] pt-0.5 text-[5px] text-slate-500">Proprietor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Pill tone="info">Graduation</Pill>
            <Pill tone="info">Testimonial</Pill>
            <Pill tone="info">MSSN / FCS</Pill>
            <Pill tone="info">Admission letters</Pill>
            <Pill tone="good">Whole class as one PDF</Pill>
          </div>
        </Card>
      )
    case 'roles':
      return (
        <Card label="One staff member, three hats">
          <div className="flex items-center gap-3 border-b border-dashed border-border pb-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">GO</div>
            <div>
              <div className="text-sm font-semibold">Mrs. Grace Obi</div>
              <div className="text-[11px] text-muted-foreground">Mathematics teacher</div>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill tone="info">Teacher</Pill>
            <Pill tone="good">Exam Officer</Pill>
            <Pill tone="warn">Form master · JSS 2A</Pill>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-muted-foreground">
            {['Question Papers', 'Exam Office', 'My Form Class', 'Grading'].map((s) => (
              <div key={s} className="rounded-md border border-border px-2 py-1.5">{s}</div>
            ))}
          </div>
        </Card>
      )
  }
}
