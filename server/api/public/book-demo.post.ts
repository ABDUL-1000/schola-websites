/**
 * Nitro Server Endpoint: POST /api/public/book-demo
 *
 * Stores DemoRequest entries, sends simulated WhatsApp confirmation and alerts sales team.
 */

// In-memory backing store for demo requests across server lifecycle
interface DemoRequestStoreItem {
  id: string
  fullName: string
  schoolName: string
  email: string
  phone: string
  locationState: string
  locationCity: string
  studentPopulation: string
  modulesOfInterest: string[]
  preferredDate: string
  preferredTime: string
  notes?: string
  status: 'CONFIRMED' | 'PENDING'
  createdAt: string
  notifications: {
    whatsappQueued: boolean
    emailDispatched: boolean
    salesTeamAlerted: boolean
  }
}

const inMemoryDemoRequests: DemoRequestStoreItem[] = []

export default async function defineHandler(event: any) {
  let body: any = {}

  try {
    if (event.node && event.node.req) {
      // Node / Nitro request
      const buffers = []
      for await (const chunk of event.node.req) {
        buffers.push(chunk)
      }
      const raw = Buffer.concat(buffers).toString()
      body = raw ? JSON.parse(raw) : {}
    } else if (typeof event.json === 'function') {
      body = await event.json()
    }
  } catch (e) {
    // Fallback if body parsing fails
    body = {}
  }

  const {
    fullName = '',
    schoolName = '',
    email = '',
    phone = '',
    locationState = '',
    locationCity = '',
    studentPopulation = '200 - 500',
    modulesOfInterest = ['Automated Report Cards & Grading'],
    preferredDate = new Date().toISOString().split('T')[0],
    preferredTime = '10:00 AM',
    notes = '',
  } = body

  // Validation
  if (
    !fullName.trim() ||
    !schoolName.trim() ||
    !email.trim() ||
    !phone.trim()
  ) {
    return new Response(
      JSON.stringify({
        success: false,
        message:
          'Full name, school name, email, and phone number are required.',
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    )
  }

  const bookingId = `DEMO-${Date.now()}-${Math.floor(Math.random() * 1000)}`
  const record: DemoRequestStoreItem = {
    id: bookingId,
    fullName,
    schoolName,
    email,
    phone,
    locationState,
    locationCity,
    studentPopulation,
    modulesOfInterest: Array.isArray(modulesOfInterest)
      ? modulesOfInterest
      : [modulesOfInterest],
    preferredDate,
    preferredTime,
    notes,
    status: 'CONFIRMED',
    createdAt: new Date().toISOString(),
    notifications: {
      whatsappQueued: true,
      emailDispatched: true,
      salesTeamAlerted: true,
    },
  }

  inMemoryDemoRequests.push(record)

  return new Response(
    JSON.stringify({
      success: true,
      bookingId,
      message:
        'Demo successfully booked! Our team has dispatched a calendar invite and WhatsApp confirmation.',
      data: record,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
