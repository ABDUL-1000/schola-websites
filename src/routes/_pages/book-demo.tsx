import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  PhoneCall,
  Sparkles,
  ArrowRight,
  Send,
  Check,
  Mail,
  CalendarCheck,
  MonitorPlay,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { submitDemoRequest, type DemoRequestResponse } from '@/api/demo'
import { whatsappLink } from '@/constants'

export const Route = createFileRoute('/_pages/book-demo')({
  component: BookDemoPage,
  head: () => ({
    meta: [
      {
        title: 'Book a Live 15-Minute Demo | Schola',
      },
      {
        name: 'description',
        content:
          'Experience how Schola automates raw score entry, broadsheets, and branded report card generation in 15 minutes. Zero upfront commitment.',
      },
      {
        property: 'og:title',
        content: 'Book a Live Demo | Schola School Management',
      },
      {
        property: 'og:description',
        content:
          'Experience how Schola automates raw score entry, broadsheets, and branded report card generation in 15 minutes.',
      },
    ],
  }),
})

const MODULE_OPTIONS = [
  'Results, Report Sheets & Report Cards',
  'CBT & Written Exams (with approval)',
  'School Fees & Payment Records',
  'Online Enrolment & Staff Registration',
  'Roles: Admin, Bursar, Exam Officer, Form Master',
  'Attendance, Timetable & Lesson Notes',
  'All Modules',
]

const TIME_SLOTS = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
]

const NIGERIAN_STATES = [
  'Lagos',
  'Abuja (FCT)',
  'Rivers',
  'Oyo',
  'Ogun',
  'Kano',
  'Kaduna',
  'Edo',
  'Delta',
  'Enugu',
  'Anambra',
  'Akwa Ibom',
  'Kwara',
  'Ondo',
  'Plateau',
  'Other',
]


function BookDemoPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    email: '',
    phone: '',
    locationState: 'Lagos',
    locationCity: '',
    studentPopulation: '200 - 500 students',
    modulesOfInterest: [
      'Results, Report Sheets & Report Cards',
    ],
    preferredDate: '',
    preferredTime: '10:30 AM',
    notes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] =
    useState<DemoRequestResponse | null>(null)
  const [validationError, setValidationError] = useState('')

  const handleModuleToggle = (module: string) => {
    if (module === 'All Modules') {
      if (formData.modulesOfInterest.includes('All Modules')) {
        setFormData({
          ...formData,
          modulesOfInterest: ['Results, Report Sheets & Report Cards'],
        })
      } else {
        setFormData({ ...formData, modulesOfInterest: [...MODULE_OPTIONS] })
      }
      return
    }

    const current = formData.modulesOfInterest.filter(
      (m) => m !== 'All Modules',
    )
    if (current.includes(module)) {
      const next = current.filter((m) => m !== module)
      setFormData({
        ...formData,
        modulesOfInterest: next.length
          ? next
          : ['Results, Report Sheets & Report Cards'],
      })
    } else {
      setFormData({ ...formData, modulesOfInterest: [...current, module] })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError('')

    if (!formData.fullName.trim()) {
      setValidationError('Please provide your full name.')
      return
    }
    if (!formData.schoolName.trim()) {
      setValidationError('Please provide your school name.')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setValidationError('Please provide a valid official email address.')
      return
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setValidationError('Please provide an active WhatsApp or phone number.')
      return
    }
    if (!formData.preferredDate) {
      setValidationError('Please select your preferred demo date.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await submitDemoRequest(formData)
      setSubmissionSuccess(response)
    } catch (err) {
      setValidationError(
        err instanceof Error
          ? err.message
          : 'Unable to submit demo request. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      {/* Background Ambience */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="size-3.5" />
            Free 1-on-1 walkthrough
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            See your school running on Schola in{' '}
            <span className="text-primary">15 minutes</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Results, report cards, exams, fees and admissions &mdash; shown live
            with your own classes and grading scale. Tell us when suits you and
            we&apos;ll confirm a time.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Form Area (7 Cols) */}
          <div className="lg:col-span-7 bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl shadow-foreground/5 relative overflow-hidden">
            {submissionSuccess ? (
              /* Success View */
              <div className="py-6">
                <div className="text-center">
                  <div className="size-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-6 ring-8 ring-primary/5">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Request received
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                    {submissionSuccess.message}
                  </p>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-muted/50 border border-border text-left space-y-3 max-w-md mx-auto text-sm">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Reference</span>
                    <span className="font-mono font-semibold text-primary">
                      {submissionSuccess.reference}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">School</span>
                    <span className="font-medium text-foreground">
                      {formData.schoolName}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Preferred time</span>
                    <span className="font-medium text-foreground">
                      {formData.preferredDate} at {formData.preferredTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">We'll contact</span>
                    <span className="font-medium text-foreground">
                      {formData.phone}
                    </span>
                  </div>
                </div>

                <ol className="mt-8 max-w-md mx-auto space-y-4 text-sm">
                  {[
                    { icon: Mail, title: 'Check your inbox', text: `A confirmation is on its way to ${formData.email}.` },
                    { icon: PhoneCall, title: 'We confirm a time', text: 'Our team calls or emails you within one business day to lock in a slot that suits you.' },
                    { icon: MonitorPlay, title: 'Your live demo', text: 'A screen-share walkthrough set up with your classes, subjects and grading scale.' },
                  ].map((step, idx) => (
                    <li key={step.title} className="flex gap-3">
                      <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <step.icon className="size-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {idx + 1}. {step.title}
                        </div>
                        <div className="text-muted-foreground text-xs mt-0.5">{step.text}</div>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 flex justify-center">
                  <Button variant="outline" asChild>
                    <Link to="/product-tour" className="flex items-center gap-2">
                      Explore the role guide while you wait <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    School & Contact Details
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Tell us where to reach you for the live screen-share or lab
                    test.
                  </p>
                </div>

                {validationError && (
                  <div className="p-3.5 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
                    {validationError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Your Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Dr. Chinedu Okafor"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      School Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., St. Gregory College"
                      value={formData.schoolName}
                      onChange={(e) =>
                        setFormData({ ...formData, schoolName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Official Email Address{' '}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="principal@school.edu.ng"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Phone / WhatsApp Number{' '}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0803 123 4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      State
                    </label>
                    <select
                      value={formData.locationState}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          locationState: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      {NIGERIAN_STATES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      City / Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Ikeja / Garki"
                      value={formData.locationCity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          locationCity: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Student Population
                    </label>
                    <select
                      value={formData.studentPopulation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          studentPopulation: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      <option value="Under 150 students">
                        Under 150 students
                      </option>
                      <option value="150 - 350 students">
                        150 - 350 students
                      </option>
                      <option value="350 - 750 students">
                        350 - 750 students
                      </option>
                      <option value="750 - 1,500 students">
                        750 - 1,500 students
                      </option>
                      <option value="1,500+ students">1,500+ students</option>
                    </select>
                  </div>
                </div>

                {/* Modules of Interest */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-2">
                    Key Modules You Want to Test in the Demo
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {MODULE_OPTIONS.map((module) => {
                      const selected =
                        formData.modulesOfInterest.includes(module)
                      return (
                        <button
                          key={module}
                          type="button"
                          onClick={() => handleModuleToggle(module)}
                          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border text-xs font-medium text-left transition-all ${
                            selected
                              ? 'border-primary bg-primary/10 text-primary font-semibold ring-1 ring-primary/30'
                              : 'border-border bg-card text-muted-foreground hover:border-border hover:bg-muted/50'
                          }`}
                        >
                          <div
                            className={`size-4 rounded flex items-center justify-center border ${
                              selected
                                ? 'bg-primary border-primary text-primary-foreground'
                                : 'border-muted-foreground/30'
                            }`}
                          >
                            {selected && (
                              <Check className="size-3 stroke-[3]" />
                            )}
                          </div>
                          <span className="truncate">{module}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Scheduling */}
                <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-4">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Clock className="size-4 text-primary" />
                    <span>Select Preferred Demo Date & Time</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredDate: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">
                        Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredTime: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      >
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Specific Grading Challenges or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g., We use a 30% CA + 70% Exam weighted structure and need custom remarks per subject."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full shadow-lg shadow-primary/25 hover:shadow-xl font-semibold text-base py-3.5 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Clock className="size-5 animate-spin" />
                      Sending your request...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="size-4" />
                      Request My Free Demo
                    </span>
                  )}
                </Button>

                <p className="text-center text-[11px] text-muted-foreground">
                  🔒 No credit card required. No obligation. Zero disruption to
                  your ongoing school term.
                </p>
              </form>
            )}
          </div>

          {/* Trust Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Risk-Reversal Guarantee Card */}
            <div className="bg-linear-to-br from-primary/10 via-background to-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <ShieldCheck className="size-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    Built around your school, not a script
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    We set the demo up with your actual classes, subjects and
                    grading scale, so you see your own report sheet &mdash; not a
                    generic sample. Free, and no commitment.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-foreground">
                <span className="flex items-center gap-1.5 text-primary">
                  <CheckCircle2 className="size-4" /> 100% Free Consultation
                </span>
                <span className="text-muted-foreground">
                  Reply within 1 business day
                </span>
              </div>
            </div>

            {/* What You'll Experience in the 15 Mins */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                What We Will Show You Live:
              </h3>
              <ul className="space-y-3 text-xs text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <div className="size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Raw Score Entry:
                    </strong>{' '}
                    A teacher keys in CA and exam marks; totals, grades and
                    subject positions compute as they type.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Class Report Sheet:
                    </strong>{' '}
                    Every student and subject on one sheet, ranked 1st to last,
                    with class averages &mdash; no spreadsheet formulas.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-foreground">
                      Report Cards & Fees:
                    </strong>{' '}
                    A printable report card with your logo, then the bursar's
                    view of who has paid, part-paid and is owing.
                  </div>
                </li>
              </ul>
            </div>

            {/* Who should join */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                <CalendarCheck className="size-4 text-primary" /> Bring the right people
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Each person gets their own dashboard, so it helps if they see
                theirs: the <strong className="text-foreground">proprietor or principal</strong>,
                your <strong className="text-foreground">bursar</strong>, your{' '}
                <strong className="text-foreground">exam officer</strong> and one or two{' '}
                <strong className="text-foreground">form masters</strong>.
              </p>
            </div>

            {/* Direct WhatsApp Callout (only when a real number is configured) */}
            {whatsappLink('Hello Schola team, I would like to book a demo for my school.') && (
              <div className="p-4 rounded-xl border border-border bg-muted/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <PhoneCall className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Prefer to chat now?</p>
                    <p className="text-[11px] text-muted-foreground">Message our team on WhatsApp</p>
                  </div>
                </div>
                <a
                  href={whatsappLink('Hello Schola team, I would like to book a demo for my school.')}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
