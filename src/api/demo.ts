/**
 * "Book a demo" client. Posts to the Schola API (POST /public/demo-requests),
 * which saves the request (visible in the super admin under "Demo requests"),
 * emails the Schola team and sends the school a confirmation.
 *
 * The API address comes from VITE_API_BASE_URL in the website's .env, e.g.
 *   VITE_API_BASE_URL=https://api.schola.com.ng/api/v1
 */
import { API_BASE_URL } from '@/constants'

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

export async function submitDemoRequest(payload: DemoRequestInput): Promise<DemoRequestResponse> {
  let res: Response
  try {
    res = await fetch(`${API_BASE_URL.replace(/\/+$/, '')}/public/demo-requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ source: 'book-demo', ...payload }),
    })
  } catch {
    throw new Error(
      'We could not reach our servers. Check your connection and try again, or email us at schola.com.ng@gmail.com.',
    )
  }

  const json = await res.json().catch(() => null)
  if (!res.ok || !json?.success) {
    throw new Error(json?.message || 'We could not submit your request. Please try again.')
  }
  return {
    message: json.message,
    id: json.data?.id,
    reference: json.data?.reference,
  }
}
