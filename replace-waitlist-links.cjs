const fs = require('fs')
const path = require('path')

const targetButtonBase = `          <Button
            size="xl"
            className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto"
            asChild
          >
            <Link to="/waitlist" className="flex items-center gap-2 justify-center">`

const BUTTON_IMPORT = `import { Button } from '@/components/ui/button'\n`

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return
  let content = fs.readFileSync(filePath, 'utf-8')
  let original = content

  // Check if Button is imported, if not, add it near other imports
  if (
    content.includes('to="/waitlist"') &&
    !content.includes('@/components/ui/button')
  ) {
    content = content.replace(
      /(import .* from '.*'\n)(?!import)/,
      `$1${BUTTON_IMPORT}`,
    )
  }

  // specific hack for navbar to keep it consistent but small
  if (filePath.includes('navbar.tsx')) {
    // Desktop nav
    content = content.replace(
      /<Link\s*to="\/waitlist"\s*className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary\/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"\s*>\s*Join Waitlist\s*<\/Link>/s,
      `<Button size="default" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all rounded-full" asChild>
                <Link to="/waitlist">Join Waitlist</Link>
              </Button>`,
    )
    // Mobile nav
    content = content.replace(
      /<Link\s*to="\/waitlist"[\s\S]*?>\s*Join the Waitlist\s*<\/Link>/s,
      `<Button size="xl" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all w-full" asChild>
            <Link to="/waitlist" onClick={() => setMobileMenuOpen(false)}>
              Join the Waitlist
            </Link>
          </Button>`,
    )
    fs.writeFileSync(filePath, content)
    return
  }

  // Now for standard landing / feature / etc links
  // Find <Link to="/waitlist"...> ... </Link>
  content = content.replace(
    /<Link\s+to="\/waitlist"\s+className="([^"]+)"\s*>([\s\S]*?)<\/Link>/g,
    (match, className, inner) => {
      // If it's already inside a <Button asChild>, don't wrap again!
      // We'll handle existing buttons separately.
      return `<Button
            size="xl"
            className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto"
            asChild
          >
            <Link to="/waitlist" className="flex items-center gap-2 justify-center">
              ${inner.trim()}
            </Link>
          </Button>`
    },
  )

  // If there is an existing button wrapping a link, let's just make sure the classes match the new shadow setup
  // `<Button size="xl" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto" asChild>`
  content = content.replace(
    /<Button[^>]*asChild[^>]*>\s*<Link to="\/waitlist"[^>]*>([\s\S]*?)<\/Link>\s*<\/Button>/g,
    (match, inner) => {
      return `<Button
            size="xl"
            className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all w-full sm:w-auto"
            asChild
          >
            <Link to="/waitlist" className="flex items-center justify-center gap-2">
              ${inner.trim()}
            </Link>
          </Button>`
    },
  )

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8')
    console.log('Updated:', filePath)
  }
}

const targetFiles = [
  './src/components/pages/solutions/cta-banner.tsx',
  './src/components/pages/features/cta-banner.tsx',
  './src/components/pages/features/hero.tsx',
  './src/components/pages/landing/cta-banner.tsx',
  './src/components/pages/faq/cta-banner.tsx',
  './src/components/navbar.tsx',
  './src/components/pages/about/hero.tsx',
  './src/components/pages/about/cta-banner.tsx',
]

targetFiles.forEach(processFile)
