import {
  Calendar,
  BookOpen,
  FileText,
  GraduationCap,
  CheckCircle2,
} from 'lucide-react'
import { CustomCard } from '@/components/custom-ui/custom-card'

const FEATURES = [
  {
    title: 'Digital Timetable',
    description:
      'Conflict-free scheduling. Drag-and-drop interface for easy adjustments.',
    icon: Calendar,
    badges: ['Teacher', 'Student'],
  },
  {
    title: 'Digital Gradebook',
    description:
      'Record grades, track homework, and calculate term averages instantly.',
    icon: BookOpen,
    badges: ['Teacher'],
  },
  {
    title: 'Lesson Planning',
    description:
      'Create, reuse, and share lesson plans. Attach videos, documents and quizzes easily.',
    icon: FileText,
    badges: ['Teacher'],
  },
  {
    title: 'Homework Portal',
    description:
      'Students can submit assignments online. Teachers grade and return feedback digitally.',
    icon: GraduationCap,
    badges: ['Student'],
  },
]

export function Academics() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-1">
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <GraduationCap className="size-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Academics
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Empower educators with tools that foster better planning and
              student engagement.
            </p>

            <ul className="space-y-4">
              {[
                'Digital CPA Calculation',
                'Customizable Report Cards',
                'Student Portal Access',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <CheckCircle2 className="size-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feature) => (
              <CustomCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconWrapperClassName="mb-0"
                iconClassName="size-6"
                badges={feature.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground uppercase font-bold tracking-wider"
                  >
                    {badge}
                  </span>
                ))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
