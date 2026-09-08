import { CustomCard } from '@/components/custom-ui/custom-card'
import { Wallet, Receipt, CreditCard, PieChart } from 'lucide-react'

const FEATURES = [
  {
    title: 'Budget Planning',
    description:
      'Allocate funds across departments and track spending against annual goals.',
    icon: CreditCard,
  },
  {
    title: 'Expense Tracking',
    description:
      'Monitor school expenditures, categorize expenses, and generate income reports.',
    icon: PieChart,
  },
  {
    title: 'Vendor Management',
    description:
      'Keep track of suppliers, manage purchase orders, and monitor fulfillments.',
    icon: Wallet,
  },
]

export function Finance() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Receipt className="size-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Finance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Simplify budget planning and financial reporting with
              finance-related tools.
            </p>

            <div className="p-6 bg-card border border-border rounded-2xl text-card-foreground shadow-sm">
              <h3 className="text-lg font-bold mb-2">Detailed Audit Trails</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Maintain complete historical records of every financial change.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                  Included in all plans
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feature, idx) => (
              <CustomCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className={`border-border ${idx === 2 ? 'sm:col-span-2' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
