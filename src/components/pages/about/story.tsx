import { FileText } from 'lucide-react'
import { Image } from '@unpic/react'

export function Story() {
  return (
    <section id="story" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            The Why: Solving the Chaos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We saw teachers drowning in paperwork and administrators struggling
            with outdated systems. We decided to fix it by creating a platform
            that brings order to the complexity of school management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden shadow-xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1675179190669-ef6bc809d8d7?q=80&w=1170&auto=format&fit=crop"
              alt="African students in a classroom"
              layout="fullWidth"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>

          {/* Text Content Area */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <FileText className="size-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                From Paper to Pixel
              </h3>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Traditional school management was built on stacks of paper and
                disconnected spreadsheets. We reimagined the entire process,
                building a unified digital ecosystem that connects every
                stakeholder in real-time.
              </p>
              <p>
                Our journey started in a small classroom where we witnessed
                firsthand the frustration of lost records and miscommunication.
                That sparked the idea for Schola.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
