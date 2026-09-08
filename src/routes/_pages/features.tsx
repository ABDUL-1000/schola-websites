import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/pages/features/hero'
import { Administration } from '@/components/pages/features/administration'
import { Academics } from '@/components/pages/features/academics'
import { Communication } from '@/components/pages/features/communication'
import { DataPrivacy } from '@/components/pages/features/data-privacy'
import { CtaBanner } from '@/components/pages/features/cta-banner'

export const Route = createFileRoute('/_pages/features')({
  component: FeaturesPage,
  head: () => ({
    meta: [
      {
        title: 'Features | Schola',
      },
      {
        name: 'description',
        content:
          'Explore the powerful features of Schola: Administration, Academics, Communication, and Data Privacy.',
      },
      {
        name: 'keywords',
        content:
          'Schola Features, School Management System Features, EdTech Features',
      },
      {
        property: 'og:title',
        content: 'Features | Schola',
      },
      {
        property: 'og:description',
        content:
          'Explore the powerful features of Schola: Administration, Academics, Communication, and Data Privacy.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://edumatrix.xyz/features',
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
        content: 'Features | Schola',
      },
      {
        name: 'twitter:description',
        content:
          'Explore the powerful features of Schola: Administration, Academics, Communication, and Data Privacy.',
      },
      {
        name: 'twitter:image',
        content: 'https://edumatrix.xyz/og-image.png',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://edumatrix.xyz/features',
      },
    ],
  }),
})

function FeaturesPage() {
  return (
    <>
      <Hero />
      <Administration />
      <Academics />
      <Communication />
      <DataPrivacy />
      <CtaBanner />
    </>
  )
}
