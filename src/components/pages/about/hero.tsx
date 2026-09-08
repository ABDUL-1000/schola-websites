import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Image } from '@unpic/react'
import { Button } from '@/components/ui/button'

const STATS = [
  { value: '—', label: 'SCHOOLS JOINED' },
  { value: '—', label: 'HOURS SAVED' },
  { value: '—', label: 'TEACHERS' },
  { value: '—', label: 'STUDENTS MANAGED' },
]

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background flourishes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 size-[800px] rounded-full bg-primary/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 size-[600px] rounded-full bg-blue-500/5 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:p-16 items-center">
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4 md:mb-6">
              Schools Deserve <br className="hidden sm:block" />
              Better Systems
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed">
              Our mission is to modernize school operations and free educators
              from administrative chaos, letting them focus on what matters
              most: students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="xl"
                className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto"
                asChild
              >
                <Link
                  to="/waitlist"
                  className="flex items-center justify-center gap-2"
                >
                  Join our mission <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="w-full sm:w-auto font-semibold bg-background"
                asChild
              >
                <a href="#story">See our story</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1632215861513-130b66fe97f4?q=80&w=1169&auto=format&fit=crop"
              alt="African children learning in a classroom"
              layout="fullWidth"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-sm">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-left sm:text-center">
              <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">
                {stat.label}
              </p>
              <p className="text-4xl sm:text-5xl font-extrabold text-primary">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
