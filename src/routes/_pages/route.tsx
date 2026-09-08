import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

export const Route = createFileRoute('/_pages')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
