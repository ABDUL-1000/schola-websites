import { SolutionsTabs } from './solutions-tabs'

export function Hero({
  activeTab,
  setActiveTab,
}: {
  activeTab: 'role' | 'type'
  setActiveTab: (tab: 'role' | 'type') => void
}) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-12 sm:pb-16">
      {/* Background gradients matching other pages */}
      <div className="absolute -top-32 -left-32 size-96 rounded-full bg-primary/5 blur-3xl opacity-60" />
      <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-primary/5 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center z-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold text-foreground tracking-tight mb-6">
          Solutions built for your specific
          <br className="hidden sm:block" /> needs
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Whether you run a single primary school or manage a multi-academy
          <br className="hidden sm:block" /> trust, see how Schola fits you.
        </p>

        {/* Toggle Tabs */}
        <SolutionsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </section>
  )
}
