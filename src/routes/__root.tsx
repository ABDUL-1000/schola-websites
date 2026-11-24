import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'

import TanStackQueryProvider from '../integrations/tanstack-query/root-provider'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { ThemeProvider } from '@/components/theme-provider'
import { GradientGrid } from '@/components/gradient-grid'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Schola - The Future of School Management System',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <TanStackQueryProvider>
            <div>
              <GradientGrid />

              {/* Content wrapper to ensure z-index separation */}

              {children}
            </div>
          </TanStackQueryProvider>
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  )
}
