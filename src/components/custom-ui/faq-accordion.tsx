import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full space-y-4">
      {items.map((faq, i) => {
        const isOpen = openIndex === i

        return (
          <div
            key={i}
            className={cn(
              'rounded-2xl border bg-card px-2 overflow-hidden transition-all duration-300',
              isOpen
                ? 'border-primary/20 shadow-md ring-1 ring-primary/10'
                : 'border-border hover:border-primary/20 hover:shadow-md',
            )}
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between px-4 py-5 sm:px-6 outline-none group cursor-pointer"
            >
              <span
                className={cn(
                  'text-base font-semibold text-left transition-colors leading-relaxed',
                  isOpen
                    ? 'text-foreground'
                    : 'text-foreground group-hover:text-primary',
                )}
              >
                {faq.q}
              </span>
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 transition-colors duration-300',
                    isOpen
                      ? 'text-primary'
                      : 'text-muted-foreground group-hover:text-primary',
                  )}
                />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.3, delay: 0 },
                    },
                  }}
                  className="overflow-hidden"
                  transition={{
                    height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                    opacity: { duration: 0.3, delay: 0.1 },
                  }}
                >
                  <div className="px-4 pb-6 sm:px-6 pt-0">
                    <div className="h-px w-full bg-muted mb-4" />
                    <p
                      className="text-sm text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
