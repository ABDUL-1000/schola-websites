/**
 * "Book a demo" client. Emails the request straight to Schola's business inbox
 * (see sendToInbox) and sends the school an automatic confirmation. No backend.
 */
import { sendToInbox } from '@/lib/send-to-inbox'

export interface DemoRequestInput {
  fullName: string
  role?: string
  schoolName: string
  email: string
  phone: string
  locationState: string
  locationCity: string
  studentPopulation: string
  modulesOfInterest: Array<string>
  preferredDate: string
  preferredTime: string
  notes?: string
  source?: string
}

export interface DemoRequestResponse {
  message: string
  id: string
  reference: string
}

const newReference = () =>
  'DEMO-' +
  Date.now().toString(36).slice(-4).toUpperCase() +
  Math.random().toString(36).slice(2, 5).toUpperCase()

export async function submitDemoRequest(p: DemoRequestInput): Promise<DemoRequestResponse> {
  const reference = newReference()
  const location = [p.locationCity, p.locationState].filter(Boolean).join(', ')

  await sendToInbox({
    subject: `Demo request: ${p.schoolName} (${reference})`,
    replyTo: p.email.trim(),
    fields: {
      Reference: reference,
      'Full name': p.fullName,
      Role: p.role || '-',
      School: p.schoolName,
      Phone: p.phone,
      Location: location || '-',
      Students: p.studentPopulation || '-',
      'Modules of interest': p.modulesOfInterest.join(', ') || '-',
      'Preferred date': p.preferredDate,
      'Preferred time': p.preferredTime || '-',
      Notes: p.notes?.trim() || '-',
    },
    autoReply:
      `Hi ${p.fullName.split(' ')[0] || 'there'},\n\n` +
      `Thanks for booking a Schola demo for ${p.schoolName}. ` +
      `We'll contact you on ${p.phone} or by email to confirm a time` +
      `${p.preferredDate ? ` around ${p.preferredDate}` : ''}.\n\n` +
      `Your reference is ${reference}. Just reply to this email if you have any questions.\n\n` +
      `The Schola team`,
  })

  return {
    message: "Thanks! We've received your request and will contact you shortly to confirm a time.",
    id: reference,
    reference,
  }
}
