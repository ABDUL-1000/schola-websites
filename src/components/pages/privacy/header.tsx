import { Clock, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <div className="pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Legal Center
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium flex-wrap">
              <div className="flex items-center gap-1.5">
                <Clock className="size-4" />
                <span>Last Updated: February 21, 2026</span>
              </div>
            </div>
          </div>

          <Button
            onClick={() => window.print()}
            variant="ghost"
            className="text-primary hover:bg-primary/10 hover:text-primary transition-colors font-semibold px-4 cursor-pointer"
          >
            <Printer className="size-4 mr-2" />
            Print Policy
          </Button>
        </div>
      </div>
    </div>
  )
}
