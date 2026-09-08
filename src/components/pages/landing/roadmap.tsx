import { CustomCard } from '@/components/custom-ui/custom-card'
import { CheckCircle2 } from 'lucide-react'

const ROADMAP = [
  {
    phase: 'Phase 1',
    title: 'Core Setup',
    items: [
      'School registration',
      'Class management',
      'Multi-branch support', // Moved from Phase 4
    ],
    status: 'in-progress' as const, // Changed from completed
  },
  {
    phase: 'Phase 2',
    title: 'Academic Tools',
    items: [
      'Student & staff onboarding', // Moved from Phase 1
      'Attendance tracking',
      'Result computation',
      // 'Grading engine', // Removed
    ],
    status: 'upcoming' as const, // Changed from in-progress
  },
  {
    phase: 'Phase 3',
    title: 'Analytics & Scale', // Swapped from Phase 4
    items: [
      'Dashboard analytics',
      'Custom Reporting', // Replaced API integrations
      // 'Multi-branch support', // Moved to Phase 1
    ],
    status: 'upcoming' as const,
  },
  {
    phase: 'Phase 4',
    title: 'Advanced Tools', // Swapped from Phase 3
    items: ['Library management', 'Inventory tracking'],
    status: 'upcoming' as const,
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Looking Ahead
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Product Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP.map((r) => {
            const statusStyles = {
              completed:
                'border-green-200 bg-green-50/50 dark:border-green-900/30 dark:bg-green-900/10',
              'in-progress':
                'border-primary/20 bg-primary/5 dark:border-primary/30',
              upcoming: 'border-border bg-card opacity-80',
            }
            const badgeStyles = {
              completed:
                'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
              'in-progress': 'bg-primary/10 text-primary dark:bg-primary/20',
              upcoming: 'bg-muted text-muted-foreground',
            }
            const badgeLabels = {
              completed: 'Done',
              'in-progress': 'Active',
              upcoming: 'Next',
            }
            return (
              <CustomCard
                key={r.phase}
                title={r.title}
                subtitle={r.phase}
                className={`group transition-all hover:scale-105 duration-300 ${statusStyles[r.status]}`}
                headerClassName="pb-2"
                badges={[
                  <span
                    key="badge"
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${badgeStyles[r.status]}`}
                  >
                    {badgeLabels[r.status]}
                  </span>,
                ]}
              >
                <ul className="space-y-3">
                  {r.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        className={`size-4 shrink-0 mt-0.5 ${r.status !== 'upcoming' ? 'text-primary' : 'text-muted-foreground/50'}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </CustomCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
