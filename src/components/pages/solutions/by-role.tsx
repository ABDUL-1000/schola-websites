import {
  ShieldCheck,
  Users,
  UsersRound,
  CheckCircle2,
  XCircle,
  Star,
  Frown,
  TrendingUp,
  HandHeart,
  MessageSquare,
  BookOpen,
  Layers,
} from 'lucide-react'
import { CustomCard } from '@/components/custom-ui/custom-card'

const byRoleData = [
  {
    id: 'admin',
    title: 'For Owners & Admins',
    subtitle: 'Streamline operations and gain oversight.',
    icon: ShieldCheck,
    iconBg: 'bg-blue-500/10 text-blue-500',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <CustomCard className="border-border shadow-sm flex flex-col h-full bg-card">
          <div className="flex-1">
            <div className="size-8 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="size-4 text-blue-500" />
            </div>
            <h3 className="font-bold text-foreground mb-4">What you can do</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Manage multiple campuses from a single dashboard.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Access real-time attendance and academic reports.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Keep compliance records organized digitally.
                </span>
              </li>
            </ul>
          </div>
        </CustomCard>

        <CustomCard className="border-border shadow-sm flex flex-col h-full bg-card">
          <div className="flex-1">
            <div className="size-8 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
              <XCircle className="size-4 text-red-500" />
            </div>
            <h3 className="font-bold text-foreground mb-4">
              Stop doing manually
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 font-mono text-red-500 shrink-0">×</span>
                <span className="text-sm leading-relaxed">
                  Chasing department heads for weekly updates.
                </span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 font-mono text-red-500 shrink-0">×</span>
                <span className="text-sm leading-relaxed">
                  Consolidating attendance records from paper files.
                </span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 font-mono text-red-500 shrink-0">×</span>
                <span className="text-sm leading-relaxed">
                  Manually tracking inventory across departments.
                </span>
              </li>
            </ul>
          </div>
        </CustomCard>

        <CustomCard className="border-border shadow-sm flex flex-col h-full bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp className="w-32 h-32" />
          </div>
          <div className="relative z-10 flex-1">
            <div className="size-8 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
              <Star className="size-4 text-blue-500" />
            </div>
            <h3 className="font-bold text-foreground mb-6">
              Expected Outcomes
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-3xl font-extrabold text-blue-500 tracking-tight">
                  30%
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Reduction in administrative overhead.
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-500 tracking-tight">
                  100%
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Data accuracy across reports.
                </p>
              </div>
            </div>
          </div>
        </CustomCard>
      </div>
    ),
  },
  {
    id: 'teachers',
    title: 'For Teachers',
    subtitle: 'Focus on teaching, not paperwork.',
    icon: Layers,
    iconBg: 'bg-purple-500/10 text-purple-500',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <CustomCard className="border-border shadow-sm flex flex-col h-full bg-card">
          <div className="flex-1">
            <div className="size-8 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
              <MessageSquare className="size-4 text-purple-500" />
            </div>
            <h3 className="font-bold text-foreground mb-4">What you can do</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-purple-500 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  One-tap attendance taking.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-purple-500 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Upload and grade assignments in bulk.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-purple-500 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Instant student messaging for behavior logs.
                </span>
              </li>
            </ul>
          </div>
        </CustomCard>

        <CustomCard className="border-border shadow-sm flex flex-col h-full bg-card">
          <div className="flex-1">
            <div className="size-8 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
              <Frown className="size-4 text-red-500" />
            </div>
            <h3 className="font-bold text-foreground mb-4">
              Stop doing manually
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 font-mono text-red-500 shrink-0">×</span>
                <span className="text-sm leading-relaxed">
                  Spending weekends grading physical papers.
                </span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 font-mono text-red-500 shrink-0">×</span>
                <span className="text-sm leading-relaxed">
                  Copying grades from notebook to system.
                </span>
              </li>
            </ul>
          </div>
        </CustomCard>

        <CustomCard className="border-border shadow-sm flex flex-col h-full bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-purple-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-32 h-32"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <div className="relative z-10 flex-1">
            <div className="size-8 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
              <HandHeart className="size-4 text-purple-500" />
            </div>
            <h3 className="font-bold text-foreground mb-6">
              Expected Outcomes
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-3xl font-extrabold text-purple-500 tracking-tight">
                  5hrs+
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Saved per week on admin tasks.
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-purple-500 tracking-tight">
                  Faster
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Feedback loops for students.
                </p>
              </div>
            </div>
          </div>
        </CustomCard>
      </div>
    ),
  },
  {
    id: 'students',
    title: 'For Students',
    subtitle: 'Stay connected and on track.',
    icon: UsersRound,
    iconBg: 'bg-orange-500/10 text-orange-500',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <CustomCard className="border-border shadow-sm bg-card hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="shrink-0 size-24 sm:size-32 rounded-full overflow-hidden bg-orange-500/10 flex items-center justify-center">
              <div className="p-4 bg-orange-500/20 rounded-full">
                <Users className="size-12 text-orange-500" />
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-foreground">
                Stay Organized
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Keep track of daily schedules, school announcements, and
                upcoming homework right from your device.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold shrink-0">
                  Timetable
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold shrink-0">
                  Homework
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold shrink-0">
                  Announcements
                </span>
              </div>
            </div>
          </div>
        </CustomCard>

        <CustomCard className="border-border shadow-sm bg-card hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="shrink-0 size-24 sm:size-32 rounded-full overflow-hidden bg-emerald-500/10 flex items-center justify-center">
              <div className="p-4 bg-emerald-500/20 rounded-full">
                <BookOpen className="size-12 text-emerald-500" />
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-foreground">
                Empowered Learning
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Students can access resources, submit homework, and track their
                own progress visualizers, encouraging self-driven improvement.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold shrink-0">
                  Resources
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold shrink-0">
                  Grades
                </span>
              </div>
            </div>
          </div>
        </CustomCard>
      </div>
    ),
  },
]

export function ByRole({
  activeTab = 'role',
}: {
  activeTab?: 'role' | 'type'
}) {
  if (activeTab === 'type') {
    return (
      <section className="pt-8 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center min-h-[400px] flex flex-col items-center justify-center">
          <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <span className="text-2xl">🏫</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">
            Curated plans for your school type
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you are a primary school, secondary school, or tertiary
            institution, Schola has tailored modules. Coming soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-8 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-24">
        {byRoleData.map((role) => (
          <div key={role.id} className="scroll-mt-32">
            <div className="flex items-center gap-4">
              <div
                className={`size-12 rounded-xl flex items-center justify-center ${role.iconBg}`}
              >
                <role.icon className="size-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  {role.title}
                </h2>
                <p className="text-muted-foreground mt-1">{role.subtitle}</p>
              </div>
            </div>
            {role.content}
          </div>
        ))}
      </div>
    </section>
  )
}
