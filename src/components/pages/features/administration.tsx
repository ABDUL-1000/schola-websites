import { CustomCard } from '@/components/custom-ui/custom-card'
import { Building2, Users, Briefcase, Boxes } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FEATURES = [
  {
    title: 'Central Dashboard',
    description:
      'Real-time insights on attendance, budgets, and operational status.',
    icon: Building2,
    badge: 'Admin',
  },
  {
    title: 'Online Enrollment',
    description:
      'Paperless admissions process from inquiry to acceptance with digital status tracking.',
    icon: Users,
    badge: 'Admin',
  },
  {
    title: 'Staff Management',
    description:
      'Comprehensive HR tools for leave requests, performance reviews, and document management.',
    icon: Briefcase,
    badge: 'Admin',
  },
  {
    title: 'Inventory Control',
    description:
      'Manage assets, track library books, and oversee supplies across multiple campuses.',
    icon: Boxes,
    badge: 'Admin',
  },
]

export function Administration() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
            <Building2 className="size-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Administration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Digitize your daily operations with tools designed to replace
            paperwork and bring everything online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {FEATURES.map((feature) => (
            <CustomCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="border-border"
              badges={[
                <span
                  key="badge"
                  className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground uppercase tracking-wide"
                >
                  {feature.badge}
                </span>,
              ]}
            />
          ))}
        </div>

        <div className="mt-10 p-8 rounded-2xl bg-primary text-primary-foreground relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">End the paper trail</h3>
            <p className="text-primary-foreground/90 max-w-xl mb-6">
              Digitize routine tasks like attendance compilation and report card
              generation — no more manual paperwork.
            </p>
            <Button
              variant="outline"
              className="mt-2 bg-background text-foreground hover:bg-muted font-semibold border-none shadow-sm"
            >
              Learn more
            </Button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 skew-x-12 translate-x-12"></div>
        </div>
      </div>
    </section>
  )
}
