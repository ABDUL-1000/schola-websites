import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-4 sm:mb-6 animate-fade-in-up">
          How can we help you?
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 font-medium leading-relaxed animate-fade-in-up animation-delay-150">
          Find answers about multi-tenancy, security, data ownership, and our
          early access program.
        </p>

        <div className="max-w-3xl mx-auto relative animate-fade-in-up animation-delay-300">
          <div className="relative flex items-center bg-card border border-border rounded-xl shadow-sm p-2 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <Search className="absolute left-6 size-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for answers (e.g. 'security', 'pricing')..."
              className="w-full bg-transparent border-none py-4 pl-14 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 sm:text-lg"
            />
            <Button size="lg" className="rounded-lg shadow-sm hidden sm:flex">
              Search
            </Button>
          </div>
          <Button
            size="lg"
            className="w-full mt-4 rounded-lg font-semibold shadow-sm sm:hidden"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  )
}
