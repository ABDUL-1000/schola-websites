import { Eye, ShieldCheck, HeartHandshake } from 'lucide-react'
import { CustomCard } from '@/components/custom-ui/custom-card'

const VALUES = [
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'No hidden fees, clear data ownership, and open communication with all our partners.',
    iconTheme: 'text-blue-500',
    bgTheme: 'bg-blue-500/10',
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    description:
      'Bank-grade encryption and privacy-first architecture protecting sensitive student data.',
    iconTheme: 'text-emerald-500',
    bgTheme: 'bg-emerald-500/10',
  },
  {
    icon: HeartHandshake,
    title: 'User-Centricity',
    description:
      'Built for humans, not just administrators. Intuitive interfaces that anyone can use.',
    iconTheme: 'text-purple-500',
    bgTheme: 'bg-purple-500/10',
  },
]

export function Values() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-card border border-border rounded-[2.5rem] p-8 sm:p-16 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We build with integrity, keeping schools and students at the heart
            of everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((value) => (
            <CustomCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              className="bg-muted/50 border-transparent hover:border-border transition-colors h-full"
              iconWrapperClassName={`size-12 rounded-xl ${value.bgTheme} ${value.iconTheme} flex items-center justify-center mb-6`}
              iconClassName="size-6"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
