import { CustomCard } from '@/components/custom-ui/custom-card'
import { useState } from 'react'
import { ShieldCheck, Users, GraduationCap, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STAKEHOLDERS = [
  {
    key: 'admins',
    label: 'Admins',
    icon: ShieldCheck,
    bullets: [
      'Full control over school settings and data',
      'Real-time analytics dashboards',
      'Manage staff and students from one place',
    ],
  },
  {
    key: 'teachers',
    label: 'Teachers',
    icon: Users,
    bullets: [
      'Mark attendance and enter scores quickly',
      'View class timetables and schedules',
      'Communicate with students directly',
    ],
  },

  {
    key: 'students',
    label: 'Students',
    icon: GraduationCap,
    bullets: [
      'View results and academic progress',
      'Access timetable and assignments',
      'Stay informed about school events',
    ],
  },
]

export function Stakeholders() {
  const [activeStakeholder, setActiveStakeholder] = useState('admins')

  const currentStakeholder = STAKEHOLDERS.find(
    (s) => s.key === activeStakeholder,
  )!

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Built for every stakeholder
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Dedicated interaction layers for everyone in your school&apos;s
            ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: tabs + bullets */}
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
              {STAKEHOLDERS.map((s) => {
                const active = s.key === activeStakeholder
                return (
                  <Button
                    key={s.key}
                    variant={active ? 'default' : 'outline'}
                    onClick={() => setActiveStakeholder(s.key)}
                    className={`flex items-center gap-2 rounded-full cursor-pointer ${
                      active
                        ? 'shadow-lg shadow-primary/25 ring-2 ring-primary ring-offset-2 ring-offset-background'
                        : 'border-border text-muted-foreground hover:border-primary/20 hover:text-foreground hover:bg-transparent'
                    }`}
                  >
                    <s.icon className="size-4" />
                    {s.label}
                  </Button>
                )
              })}
            </div>

            {/* Bullets */}
            <CustomCard
              className="border-border shadow-sm"
              headerClassName="pb-0"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
                <currentStakeholder.icon className="size-6 text-primary" />
                For {currentStakeholder.label}
              </h3>
              <ul className="space-y-4">
                {currentStakeholder.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="mt-1 shrink-0 size-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center dark:bg-green-900/30 dark:text-green-400">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <span
                      className="text-muted-foreground font-medium leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: b }}
                    ></span>
                  </li>
                ))}
              </ul>
            </CustomCard>
          </div>

          {/* Right: illustrative card */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform rotate-6 scale-90" />
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden min-h-[400px]">
              <div className="flex items-center gap-2 px-6 py-4 bg-muted border-b border-border">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-green-400" />
              </div>
              <div className="p-8 space-y-6">
                {/* Mini UI representation */}
                <div className="flex items-center justify-between mb-8">
                  <div className="h-4 w-32 rounded bg-muted animate-pulse" />
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <currentStakeholder.icon className="size-5 text-primary" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="p-4 rounded-xl border border-border bg-muted/50 flex items-center gap-4"
                    >
                      <div className="size-10 rounded-lg bg-card shadow-sm shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-3/4 rounded bg-muted" />
                        <div className="h-2 w-1/2 rounded bg-muted/60" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
