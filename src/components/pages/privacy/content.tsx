import {
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  User,
  GraduationCap,
  Lock,
  Award,
  Mail,
  MapPin,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { CustomCard } from '@/components/custom-ui/custom-card'

const SECTIONS = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'use-of-service', label: '2. Use of Service' },
  { id: 'data-collection', label: '3. Data Collection' },
  { id: 'security', label: '4. Security & Compliance' },
  { id: 'third-party', label: '5. Third-Party Services' },
  { id: 'liability', label: '6. Liability' },
  { id: 'contact', label: '7. Contact Us' },
]

export function Content() {
  const [activeSection, setActiveSection] = useState('introduction')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -80% 0px' },
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-32">
            <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4 pl-3">
              Contents
            </h3>
            <nav className="flex flex-col space-y-1 mb-8">
              {SECTIONS.map((section) => {
                const isActive = activeSection === section.id
                return (
                  <Button
                    key={section.id}
                    variant="ghost"
                    onClick={() => scrollTo(section.id)}
                    className={`w-full justify-between px-4 py-6 rounded-lg text-sm font-medium transition-colors group cursor-pointer ${
                      isActive
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                    }`}
                  >
                    {section.label}
                    {isActive && <ArrowRight className="size-3.5 opacity-50" />}
                  </Button>
                )
              })}
            </nav>

            <div className="mt-8 border border-border shadow-sm rounded-2xl p-6 bg-card flex flex-col items-start text-left">
              <div className="bg-blue-500/10 size-10 rounded-full flex items-center justify-center mb-6">
                <HelpCircle className="size-5 text-blue-500" />
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">
                Have questions?
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Our legal team is available to help clarify any points.
              </p>
              <a
                href="mailto:contact@edumatrix.xyz"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
              >
                Contact Support <ArrowRight className="size-4" />
              </a>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0 bg-card border border-border rounded-2xl p-6 sm:p-12 shadow-sm">
            <div className="space-y-16">
              {/* 1. Introduction */}
              <div id="introduction" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center size-8 rounded-full bg-muted text-sm font-bold text-muted-foreground">
                    1
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    Introduction
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to Schola. By accessing or using our school
                    management system, you agree to be bound by these Terms of
                    Service and our Privacy Policy. If you do not agree to these
                    terms, please do not use our services.
                  </p>
                  <p>
                    These terms apply to all visitors, users, and others who
                    access or use the Service. We reserve the right to modify
                    these terms at any time, effective upon posting of an
                    updated version of this agreement on the Service.
                  </p>
                </div>
              </div>

              <hr className="border-border" />

              {/* 2. Use of Service */}
              <div id="use-of-service" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center size-8 rounded-full bg-muted text-sm font-bold text-muted-foreground">
                    2
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    Use of Service
                  </h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Schola grants you a limited, non-exclusive,
                    non-transferable, and revocable license to use our Services
                    strictly in accordance with these Terms.
                  </p>

                  <CustomCard
                    subtitle="Acceptable Use Guidelines"
                    className="border-border shadow-none"
                    contentClassName="pt-4"
                  >
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">
                          You may use the service only for lawful purposes and
                          in accordance with these Terms.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">
                          You are responsible for maintaining the
                          confidentiality of your account credentials.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="size-4 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-sm">
                          You agree not to use the Service in any way that
                          violates any applicable federal, state, local, or
                          international law.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="size-4 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-sm">
                          You agree not to attempt to gain unauthorized access
                          to, interfere with, damage, or disrupt any parts of
                          the Service.
                        </span>
                      </li>
                    </ul>
                  </CustomCard>
                </div>
              </div>

              <hr className="border-border" />

              {/* 3. Data Collection */}
              <div id="data-collection" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center size-8 rounded-full bg-muted text-sm font-bold text-muted-foreground">
                    3
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    Data Collection
                  </h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    We collect various types of information for various purposes
                    to provide and improve our Service to you.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CustomCard
                      icon={User}
                      iconClassName="size-4 text-blue-600 dark:text-blue-400"
                      iconWrapperClassName="bg-blue-500/20 size-8 rounded-full mb-0"
                      title={
                        <span className="text-sm font-bold text-foreground">
                          Personal Data
                        </span>
                      }
                      description={
                        <span className="text-xs leading-relaxed mt-1 block">
                          While using our Service, we may ask you to provide us
                          with certain personally identifiable information that
                          can be used to contact or identify you ("Personal
                          Data"). This may include email address, name, phone
                          number, and cookie data.
                        </span>
                      }
                      headerClassName="flex flex-col gap-2 p-0"
                      contentClassName="p-0"
                      className="bg-blue-500/5 border-blue-500/10 shadow-none p-6 pb-6"
                    />

                    <CustomCard
                      icon={GraduationCap}
                      iconClassName="size-4 text-green-600 dark:text-green-400"
                      iconWrapperClassName="bg-green-500/20 size-8 rounded-full mb-0"
                      title={
                        <span className="text-sm font-bold text-foreground">
                          Educational Records
                        </span>
                      }
                      description={
                        <span className="text-xs leading-relaxed mt-1 block">
                          For school administrators, we collect and process
                          student data strictly as a Data Processor. This
                          includes grades, attendance records, and enrollment
                          history, managed in compliance with educational
                          standards.
                        </span>
                      }
                      headerClassName="flex flex-col gap-2 p-0"
                      contentClassName="p-0"
                      className="bg-green-500/5 border-green-500/10 shadow-none p-6 pb-6"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-border" />

              {/* 4. Security */}
              <div id="security" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center size-8 rounded-full bg-muted text-sm font-bold text-muted-foreground">
                    4
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    Security & Compliance
                  </h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The security of your data is important to us, but remember
                    that no method of transmission over the Internet, or method
                    of electronic storage is 100% secure. While we strive to use
                    commercially acceptable means to protect your Personal Data,
                    we cannot guarantee its absolute security.
                  </p>

                  <div className="space-y-4">
                    <CustomCard
                      icon={Lock}
                      iconClassName="size-5 text-orange-500"
                      iconWrapperClassName="bg-orange-500/10 size-10 rounded-full mb-0 shrink-0"
                      title={
                        <span className="text-sm font-bold text-foreground mb-1 block">
                          Encryption Standards
                        </span>
                      }
                      description={
                        <span className="text-xs">
                          All data is encrypted in transit using TLS 1.2+ and at
                          rest using AES-256 encryption protocols.
                        </span>
                      }
                      headerClassName="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-0 space-y-0"
                      className="border-border shadow-none p-5 pb-5"
                    />

                    {/*
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-background border border-border rounded-xl p-5">
                      <div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                        <Award className="size-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-1">
                          FERPA & GDPR Compliance
                        </h4>
                        <p className="text-xs">
                          Schola is fully compliant with the Family
                          Educational Rights and Privacy Act (FERPA) and GDPR
                          regulations for European users.
                        </p>
                      </div>
                    </div>
                    */}

                    <CustomCard
                      icon={Award}
                      iconClassName="size-5 text-purple-500"
                      iconWrapperClassName="bg-purple-500/10 size-10 rounded-full mb-0 shrink-0"
                      title={
                        <span className="text-sm font-bold text-foreground mb-1 block">
                          NDPA & NDPR Compliance
                        </span>
                      }
                      description={
                        <span className="text-xs">
                          Schola is fully compliant with the Nigeria Data
                          Protection Act (NDPA) and Nigeria Data Protection
                          Regulation (NDPR) for users in Nigeria.
                        </span>
                      }
                      headerClassName="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-0 space-y-0"
                      className="border-border shadow-none p-5 pb-5"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-border" />

              {/* 5. Third-Party */}
              <div id="third-party" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center size-8 rounded-full bg-muted text-sm font-bold text-muted-foreground">
                    5
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    Third-Party Services
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our Service may contain links to third-party web sites or
                    services that are not owned or controlled by Schola.
                  </p>
                  <p>
                    Schola has no control over, and assumes no responsibility
                    for, the content, privacy policies, or practices of any
                    third party web sites or services. You further acknowledge
                    and agree that Schola shall not be responsible or liable,
                    directly or indirectly, for any damage or loss caused or
                    alleged to be caused by or in connection with use of or
                    reliance on any such content, goods or services available on
                    or through any such web sites or services.
                  </p>
                </div>
              </div>

              <hr className="border-border" />

              {/* 6. Liability */}
              <div id="liability" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center size-8 rounded-full bg-muted text-sm font-bold text-muted-foreground">
                    6
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    Liability & Disclaimers
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <blockquote className="border-l-4 border-blue-500 bg-blue-500/5 p-6 rounded-r-xl text-sm italic">
                    "In no event shall Schola, nor its directors, employees,
                    partners, agents, suppliers, or affiliates, be liable for
                    any indirect, incidental, special, consequential or punitive
                    damages, including without limitation, loss of profits,
                    data, use, goodwill, or other intangible losses, resulting
                    from (i) your access to or use of or inability to access or
                    use the Service..."
                  </blockquote>
                </div>
              </div>

              <hr className="border-border" />

              {/* 7. Contact */}
              <div id="contact" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center size-8 rounded-full bg-muted text-sm font-bold text-muted-foreground">
                    7
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    Contact Us
                  </h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    If you have any questions about these Terms, please contact
                    our legal team.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 border border-border rounded-xl p-4 bg-background">
                      <div className="flex items-center justify-center shrink-0 size-10 rounded-full bg-muted">
                        <Mail className="size-4 text-foreground" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-0.5">
                          Email Us
                        </span>
                        <span className="text-sm font-bold text-foreground">
                          contact@edumatrix.xyz
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 border border-border rounded-xl p-4 bg-background">
                      <div className="flex items-center justify-center shrink-0 size-10 rounded-full bg-muted">
                        <MapPin className="size-4 text-foreground" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-0.5">
                          Mailing Address
                        </span>
                        <span className="text-sm font-bold text-foreground">
                          123 Education Lane, Tech City, CA 94000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
