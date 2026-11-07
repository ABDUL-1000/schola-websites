/**
 * Sends a website form straight to Schola's business inbox through FormSubmit
 * (https://formsubmit.co) — no backend involved.
 *
 * One-time setup: the very first submission makes FormSubmit email the inbox an
 * "Activate form" link. Click it once; every submission after that is delivered.
 * FormSubmit then shows a random alias for the inbox — put it in
 * VITE_FORM_INBOX to keep the real address out of the page source (optional).
 */
export const BUSINESS_EMAIL = 'schola.com.ng@gmail.com'

const INBOX = import.meta.env.VITE_FORM_INBOX || BUSINESS_EMAIL

export interface InboxMessage {
  /** Email subject the team sees. */
  subject: string
  /** The sender's email — replies from the inbox go to this address. */
  replyTo: string
  /** Rows shown in the email, label → value. */
  fields: Record<string, string>
  /** Optional automatic reply sent to `replyTo`. */
  autoReply?: string
}

export async function sendToInbox({ subject, replyTo, fields, autoReply }: InboxMessage) {
  const body: Record<string, string> = {
    ...fields,
    email: replyTo,
    _subject: subject,
    _replyto: replyTo,
    _template: 'table',
    _captcha: 'false',
    _honey: '',
  }
  if (autoReply) body._autoresponse = autoReply

  let res: Response
  try {
    res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(INBOX)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    throw new Error('We could not send your message. Check your connection and try again.')
  }

  const json = await res.json().catch(() => null)
  // FormSubmit answers with success: "true" / "false" (strings).
  if (!res.ok || String(json?.success) !== 'true') {
    throw new Error(
      `We could not send your message right now. Please email us at ${BUSINESS_EMAIL} or try again.`,
    )
  }
}
