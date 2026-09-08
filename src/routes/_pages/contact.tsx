import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/pages/contact/hero'
import { Content } from '@/components/pages/contact/content'
import { CTABanner } from '@/components/pages/contact/cta-banner'

export const Route = createFileRoute('/_pages/contact')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: 'Contact Us | Schola',
      },
      {
        name: 'description',
        content:
          'Get in touch with the Schola team. We are here to help you revolutionize your school management.',
      },
      {
        name: 'keywords',
        content:
          'Contact Schola, Schola Support, School Management System Contact',
      },
      {
        property: 'og:title',
        content: 'Contact Us | Schola',
      },
      {
        property: 'og:description',
        content:
          'Get in touch with the Schola team. We are here to help you revolutionize your school management.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://edumatrix.xyz/contact',
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
        content: 'Contact Us | Schola',
      },
      {
        name: 'twitter:description',
        content:
          'Get in touch with the Schola team. We are here to help you revolutionize your school management.',
      },
      {
        name: 'twitter:image',
        content: 'https://edumatrix.xyz/og-image.png',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://edumatrix.xyz/contact',
      },
    ],
  }),
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Schola Support',
  description:
    'Get in touch with the Schola team. We are here to help you revolutionize your school management.',
  url: 'https://edumatrix.xyz/contact',
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
