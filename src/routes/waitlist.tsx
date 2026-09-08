import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { GradientGrid } from '@/components/gradient-grid'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/waitlist')({
  component: WaitlistPage,
  head: () => ({
    meta: [
      {
        title: 'Join the Waitlist | Schola',
      },
      {
        name: 'description',
        content:
          'Join the Schola waitlist to get early access to the future of school management systems.',
      },
      {
        name: 'keywords',
        content:
          'Schola Waitlist, Early Access Schola, School Management System Waitlist',
      },
      {
        property: 'og:title',
        content: 'Join the Waitlist | Schola',
      },
      {
        property: 'og:description',
        content:
          'Join the Schola waitlist to get early access to the future of school management systems.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://edumatrix.xyz/waitlist',
      },
      {
        property: 'og:image',
        content: 'https://edumatrix.xyz/og-image.png',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Join the Waitlist | Schola',
      },
      {
        name: 'twitter:description',
        content:
          'Join the Schola waitlist to get early access to the future of school management systems.',
      },
      {
        name: 'twitter:image',
        content: 'https://edumatrix.xyz/og-image.png',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://edumatrix.xyz/waitlist',
      },
    ],
  }),
})

function WaitlistPage() {
  const ref = useRef<HTMLIFrameElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Listen for Tally form submission
    const handleMessage = (e: MessageEvent) => {
      // Tally events might be objects or JSON strings
      let data = e.data
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data)
        } catch {
          // Ignore non-JSON messages
          return
        }
      }

      if (data?.event === 'Tally.FormSubmitted') {
        // Redirect to home after successful submission
        setTimeout(() => {
          navigate({ to: '/' })
        }, 2000)
      }
    }

    window.addEventListener('message', handleMessage)

    // Tally embedded script for auto-resizing
    const loadScript = () => {
      // Check if script already exists to avoid duplicates
      if (
        document.querySelector(
          'script[src="https://tally.so/widgets/embed.js"]',
        )
      ) {
        // If script is already loaded (e.g. from landing page), trigger load manually
        if (typeof window !== 'undefined' && (window as any).Tally) {
          ;(window as any).Tally.loadEmbeds()
        }
        return
      }

      const script = document.createElement('script')
      script.src = 'https://tally.so/widgets/embed.js'
      script.async = true
      script.onload = () => {
        if (typeof window !== 'undefined' && (window as any).Tally) {
          ;(window as any).Tally.loadEmbeds()
        }
      }
      script.onerror = () => {
        // Fallback: if script fails, the iframe has a src attribute now
        console.error('Failed to load Tally embed script')
      }
      document.body.appendChild(script)
    }
    loadScript()

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [navigate])

  const { theme } = useTheme()
  const [tallyTheme, setTallyTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const resolveTheme = () => {
      if (theme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
      return theme
    }

    setTallyTheme(resolveTheme())

    // If needed, we could add a listener for system theme changes here
    // but typically users don't switch system themes while filling a form.
  }, [theme])

  const formId = import.meta.env.VITE_TALLY_FORM_ID
  const themeParam = tallyTheme === 'dark' ? '&theme=dark' : ''
  const formUrl = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1${themeParam}`

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 relative">
      <GradientGrid />

      <div className="w-full max-w-2xl bg-card rounded-xl shadow-lg border border-border overflow-hidden relative z-10">
        <div className="p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-foreground">
              Join the Waitlist
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete the form below to secure your spot.
            </p>
          </div>

          <iframe
            ref={ref}
            src={formUrl}
            data-tally-src={formUrl}
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Schola Waitlist"
            className="w-full"
          />
        </div>
      </div>

      <Button
        variant="ghost"
        onClick={() => navigate({ to: '/' })}
        className="mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors relative z-10 cursor-pointer"
      >
        ← Back to Home
      </Button>
    </div>
  )
}
