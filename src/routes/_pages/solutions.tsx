import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/pages/solutions/hero'
import { ByRole } from '@/components/pages/solutions/by-role'
import { CtaBanner } from '@/components/pages/solutions/cta-banner'

export const Route = createFileRoute('/_pages/solutions')({
  component: SolutionsPage,
  head: () => ({
    meta: [
      {
        title: 'Solutions | Schola',
      },
      {
        name: 'description',
        content:
          'Discover how Schola provides tailored solutions for administrators, teachers, parents, and students.',
      },
      {
        name: 'keywords',
        content:
          'Schola Solutions, School Management Solutions, EdTech Solutions by Role',
      },
      {
        property: 'og:title',
        content: 'Solutions | Schola',
      },
      {
        property: 'og:description',
        content:
          'Discover how Schola provides tailored solutions for administrators, teachers, parents, and students.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://edumatrix.xyz/solutions',
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
        content: 'Solutions | Schola',
      },
      {
        name: 'twitter:description',
        content:
          'Discover how Schola provides tailored solutions for administrators, teachers, parents, and students.',
      },
      {
        name: 'twitter:image',
        content: 'https://edumatrix.xyz/og-image.png',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://edumatrix.xyz/solutions',
      },
    ],
  }),
})

function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<'role' | 'type'>('role')

  return (
    <>
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      <ByRole activeTab={activeTab} />
      <CtaBanner />
    </>
  )
}
