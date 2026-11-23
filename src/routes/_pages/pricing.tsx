import { createFileRoute } from '@tanstack/react-router'
import { CompareTable, PricingFaq, PricingHero, PricingPlans, TrialSteps } from '@/components/pages/pricing/content'
import { TermFeeCalculator } from '@/components/pages/landing/term-fee-calculator'
import { CtaBanner } from '@/components/pages/landing/cta-banner'
import { FREE_STUDENTS, PRICE_PER_STUDENT, TRIAL_DAYS, naira } from '@/constants/pricing'

const description = `Try every Schola feature free for ${TRIAL_DAYS} days. Then stay free (up to ${FREE_STUDENTS} students) or choose Standard at ${naira(PRICE_PER_STUDENT)} per student, per term, with everything included.`

export const Route = createFileRoute('/_pages/pricing')({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: 'Pricing | Schola' },
      { name: 'description', content: description },
      { name: 'keywords', content: 'Schola pricing, school management software price Nigeria, report card software, free school software' },
      { property: 'og:title', content: 'Pricing | Schola' },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://edumatrix.xyz/pricing' },
      { property: 'og:image', content: 'https://edumatrix.xyz/og-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Pricing | Schola' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://edumatrix.xyz/og-image.png' },
    ],
    links: [{ rel: 'canonical', href: 'https://edumatrix.xyz/pricing' }],
  }),
})

function RouteComponent() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <TrialSteps />
      <CompareTable />
      <TermFeeCalculator />
      <PricingFaq />
      <CtaBanner />
    </>
  )
}
