import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/pages/faq/hero'
import { Content } from '@/components/pages/faq/content'
import { CTABanner } from '@/components/pages/faq/cta-banner'

export const Route = createFileRoute('/_pages/faq')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: 'FAQ | Schola',
      },
      {
        name: 'description',
        content:
          'Frequently asked questions about Schola. Find answers about features, pricing, and how to get started.',
      },
      {
        name: 'keywords',
        content: 'Schola FAQ, School Management System FAQ, EdTech Support',
      },
      {
        property: 'og:title',
        content: 'FAQ | Schola',
      },
      {
        property: 'og:description',
        content:
          'Frequently asked questions about Schola. Find answers about features, pricing, and how to get started.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://edumatrix.xyz/faq',
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
        content: 'FAQ | Schola',
      },
      {
        name: 'twitter:description',
        content:
          'Frequently asked questions about Schola. Find answers about features, pricing, and how to get started.',
      },
      {
        name: 'twitter:image',
        content: 'https://edumatrix.xyz/og-image.png',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://edumatrix.xyz/faq',
      },
    ],
  }),
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Schola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schola is a modern platform to digitize attendance, academics, assessments, results and more, built for Nigerian schools that are ready to ditch paper.',
      },
    },
  ],
}

function RouteComponent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Content />
      <CTABanner />
    </>
  )
}
