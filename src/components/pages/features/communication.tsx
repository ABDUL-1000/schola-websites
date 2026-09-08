import { CustomCard } from '@/components/custom-ui/custom-card'
import { Megaphone, MessageCircle, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Communication() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-6">
            <MessageCircle className="size-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Communication
          </h2>
          <p className="text-lg text-muted-foreground">
            Bridge the gap between school and home with robust, integrated
            messaging tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CustomCard
              icon={Megaphone}
              title="Mass Alerts"
              description="Broadcast emails or push notifications to students for emergencies or important updates."
              className="h-full border-border flex flex-col justify-between"
              contentClassName="pt-0"
            >
              <div className="mt-4 flex gap-2">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md font-medium">
                  Sent: 98%
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md font-medium">
                  Read: 85%
                </span>
                {/* Visual representation could go here if needed */}
              </div>
            </CustomCard>
          </div>

          <div className="lg:col-span-1">
            <CustomCard
              icon={MessageCircle}
              title="Direct Messaging"
              description="Secure one-on-one chat between teachers and students."
              className="h-full border-border"
            />
          </div>

          <div className="lg:col-span-3">
            <CustomCard
              icon={CalendarDays}
              title="Event Calendar"
              description="Centralized school calendar for exams, sports days, and PTA meetings. Syncs with personal devices."
              className="border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              headerClassName="flex-1 min-w-0"
              action={
                <Button
                  variant="outline"
                  className="whitespace-normal h-auto py-2.5"
                >
                  View Public Calendar
                </Button>
              }
              footerClassName="pt-6 sm:pt-0 pb-6 sm:pb-0 px-6 sm:pr-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
