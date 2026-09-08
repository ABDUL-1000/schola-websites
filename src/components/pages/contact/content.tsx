import { Mail, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Content() {
  return (
    <section className="bg-muted/30 py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 md:p-16">
          {/* Left Column: Form */}
          <div className="flex-1 w-full bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Send us a Message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-semibold text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="John Doe"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-foreground"
                >
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium cursor-pointer"
                    defaultValue="General Inquiry"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Sales & Pricing">Sales & Pricing</option>
                    <option value="Partnerships">Partnerships</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                ></textarea>
              </div>

              <Button
                size="lg"
                className="w-full font-semibold rounded-lg shadow-sm"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Right Column: Info blocks */}
          <div className="w-full lg:w-[450px] shrink-0 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-8">
                Other ways to reach us
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">
                      Email Us
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Our team is here to help.
                    </p>
                    <a
                      href="mailto:info@edumatrix.xyz"
                      className="text-sm font-semibold text-blue-500 hover:underline"
                    >
                      info@edumatrix.xyz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Clock className="size-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">
                      Support Hours
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Available Monday through Friday
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      8am - 5pm WAT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">
                      Office Location
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our Headquarters
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-64 bg-[#e2e8f0] dark:bg-muted/50 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center border border-border group cursor-pointer transition-all hover:ring-2 hover:ring-primary/20">
              <div className="absolute inset-0 bg-white/40 dark:bg-black/20 mix-blend-overlay"></div>
              <div className="z-10 bg-white/90 dark:bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-xs font-bold text-foreground flex items-center gap-2 group-hover:-translate-y-1 transition-transform">
                <MapPin className="size-3 text-primary" />
                View on Google Maps
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
