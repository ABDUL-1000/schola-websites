import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/pages/about/hero'
import { Story } from '@/components/pages/about/story'
import { Values } from '@/components/pages/about/values'
import { Team } from '@/components/pages/about/team'
import { CtaBanner } from '@/components/pages/about/cta-banner'

export const Route = createFileRoute('/_pages/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: 'About Us | Schola',
      },
      {
        name: 'description',
        content:
          'Learn more about Schola, our story, our values, and the team building the future of school management.',
      },
      {
        name: 'keywords',
        content:
          'About Schola, Education Team, School Management System, EdTech, Our Story',
      },
      {
        property: 'og:title',
        content: 'About Us | Schola',
      },
      {
        property: 'og:description',
        content:
          'Learn more about Schola, our story, our values, and the team building the future of school management.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://edumatrix.xyz/about',
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
        content: 'About Us | Schola',
      },
      {
        name: 'twitter:description',
        content:
          'Learn more about Schola, our story, our values, and the team building the future of school management.',
      },
      {
        name: 'twitter:image',
        content: 'https://edumatrix.xyz/og-image.png',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://edumatrix.xyz/about',
      },
    ],
  }),
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Schola',
    url: 'https://edumatrix.xyz',
    logo: 'https://edumatrix.xyz/og-image.png',
    description:
      'Learn more about Schola, our story, our values, and the team building the future of school management.',
  },
}

function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Story />
      <Values />
      <Team />
      <CtaBanner />
    </>
  )
}
