import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/pages/privacy/header'
import { Content } from '@/components/pages/privacy/content'

export const Route = createFileRoute('/_pages/legal')({
  component: PrivacyPage,
  head: () => ({
    meta: [
      {
        title: 'Legal & Privacy | Schola',
      },
      {
        name: 'description',
        content:
          'Read the legal and privacy policies for Schola. We take your data privacy and control seriously.',
      },
      {
        name: 'keywords',
        content: 'Schola Privacy Policy, Schola Terms of Service, EdTech Legal',
      },
      {
        property: 'og:title',
        content: 'Legal & Privacy | Schola',
      },
      {
        property: 'og:description',
        content:
          'Read the legal and privacy policies for Schola. We take your data privacy and control seriously.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://edumatrix.xyz/legal',
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
        content: 'Legal & Privacy | Schola',
      },
      {
        name: 'twitter:description',
        content:
          'Read the legal and privacy policies for Schola. We take your data privacy and control seriously.',
      },
      {
        name: 'twitter:image',
        content: 'https://edumatrix.xyz/og-image.png',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://edumatrix.xyz/legal',
      },
    ],
  }),
})

function PrivacyPage() {
  return (
    <>
      <Header />
      <Content />
    </>
  )
}
