import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/pages/landing/hero'
import { Features } from '@/components/pages/landing/features'
import { HowItWorks } from '@/components/pages/landing/how-it-works'
import { Stakeholders } from '@/components/pages/landing/stakeholders'
import { Roadmap } from '@/components/pages/landing/roadmap'
import { FAQ } from '@/components/pages/landing/faq'
import { CtaBanner } from '@/components/pages/landing/cta-banner'
import { useWaitlistCount } from '@/hooks/use-tally'

export const Route = createFileRoute('/_pages/')({
  component: indexPage,

  head: () => ({
    meta: [
      {
        title: 'Schola - The Future of School Management System',
      },
      {
        name: 'description',
        content: 'Schola - The Future of School Management System',
      },
      {
        name: 'keywords',
        content:
          'Schola, Education, Future, Learning, School Management System, Education SaaS',
      },
      {
        property: 'og:title',
        content: 'Schola - The Future of School Management System',
      },
      {
        property: 'og:description',
        content: 'Schola - The Future of School Management System',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://edumatrix.xyz/',
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
        content: 'Schola - The Future of School Management System',
      },
      {
        name: 'twitter:description',
        content: 'Schola - The Future of School Management System',
      },
      {
        name: 'twitter:image',
        content: 'https://edumatrix.xyz/og-image.png',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://edumatrix.xyz/',
      },
    ],
  }),
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Schola',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  url: 'https://edumatrix.xyz',
  description:
    'The Digital Way to Manage Your School. A modern platform to digitize attendance, academics, assessments, results and more.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

function indexPage() {
  const {
    data: waitlistCount,
    isLoading: waitlistLoading,
    error: waitlistError,
  } = useWaitlistCount()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        waitlistCount={waitlistCount ?? null}
        waitlistLoading={waitlistLoading}
        waitlistError={waitlistError}
      />
      <Features />
      <HowItWorks />
      <Stakeholders />
      <Roadmap />
      <FAQ />
      <CtaBanner />
    </>
  )
}
