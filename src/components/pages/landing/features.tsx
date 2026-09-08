import { CustomCard } from '@/components/custom-ui/custom-card'
import {
  ClipboardCheck,
  BookOpen,
  BarChart3,
  CalendarDays,
  FolderArchive,
  Library,
} from 'lucide-react'

const FEATURES = [
  {
    icon: ClipboardCheck,
    title: 'Attendance',
    description:
      'Track and manage daily attendance in real-time, reducing manual effort and improving accuracy.',
  },
  {
    icon: BookOpen,
    title: 'Academics',
    description:
      'Assign subjects, set curricula, and manage class configurations to keep academics organized.',
  },
  {
    icon: BarChart3,
    title: 'Results',
    description:
      'Generate broadsheet and result sheets with grading rules tailored to your institution.',
  },
  {
    icon: Library,
    title: 'Library',
    description:
      'Manage book inventory digitally, track borrowing, and monitor returns — no paper logs needed.',
  },
  {
    icon: CalendarDays,
    title: 'Timetable',
    description:
      'Build conflict-free timetables for every class and teacher in minutes, not hours.',
  },
  {
    icon: FolderArchive,
    title: 'Records',
    description:
      'Store and retrieve student and staff records securely with powerful search capabilities.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Everything needed to run a modern institution
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f) => (
            <CustomCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.description}
              backgroundIcon={f.icon}
              className="group border-border p-6 hover:border-primary/20"
              iconWrapperClassName="size-14 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-sm border border-primary/10 mb-6"
              iconClassName="size-7"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
