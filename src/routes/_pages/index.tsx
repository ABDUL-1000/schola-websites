import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/pages/landing/hero'
import { SetupTimeline } from '@/components/pages/landing/setup-timeline'
import { FeatureShowcase } from '@/components/pages/landing/feature-showcase'
import { RoleTeaser, RoadmapStrip } from '@/components/pages/landing/role-teaser'
import { ComparisonMatrix } from '@/components/pages/landing/comparison-matrix'
import { TermFeeCalculator } from '@/components/pages/landing/term-fee-calculator'
import { FAQ } from '@/components/pages/landing/faq'
import { CtaBanner } from '@/components/pages/landing/cta-banner'
import { useWaitlistCount } from '@/hooks/use-tally'

export const Route = createFileRoute('/_pages/')({
  component: indexPage,

  head: () => ({
    meta: [
      {
        title:
          'Schola - Effortless Grading, Broadsheets & Report Cards for Schools',
      },
      {
        name: 'description',
        content:
          'Eliminate midnight spreadsheet errors and manual broadsheet calculations. Teachers enter scores in minutes; Schola calculates totals, class positions, and generates beautiful branded report cards instantly.',
      },
      {
        name: 'keywords',
        content:
          'Schola, School Management System, School Report Card Generator, Broadsheet Calculator, Nigerian School Software, Score Sheet Automation',
      },
      {
        property: 'og:title',
        content: 'Schola - Effortless Grading, Broadsheets & Report Cards',
      },
      {
        property: 'og:description',
        content:
          'Eliminate midnight spreadsheet errors and manual broadsheet calculations. Enter marks in minutes and generate branded report cards instantly.',
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
        content: 'Schola - Effortless Grading & Instant Report Cards',
      },
      {
        name: 'twitter:description',
        content:
          'Say goodbye to broken Excel formulas and manual broadsheet arithmetic. Generate 1-click branded report cards for your entire school.',
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
    'School management platform for results and report cards, school fees, exam approval and online admissions, with a dashboard for every role.',
  offers: {
    '@type': 'Offer',
    price: '1000',
    priceCurrency: 'NGN',
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
      <FeatureShowcase />
      <SetupTimeline />
      <RoleTeaser />
      <ComparisonMatrix />
      <TermFeeCalculator />
      <RoadmapStrip />
      <FAQ />
      <CtaBanner />
    </>
  )
}
