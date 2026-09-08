import { CustomCard } from '@/components/custom-ui/custom-card'
import { ShieldCheck, Lock, Eye, FileKey } from 'lucide-react'

export function DataPrivacy() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-6">
            <ShieldCheck className="size-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Data Privacy & Control
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full control over who sees what. Zero-compromise on data sovereignty
            and security. Industry standard encryption for all records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Granular Roles */}
          <CustomCard
            icon={Lock}
            title="Granular Roles & Permissions"
            description="Define exactly what each user can see and do. Create custom roles beyond the standard Admin, Teacher, and Student types."
            className="border-border"
          >
            <div className="bg-muted/50 rounded-xl p-4 space-y-3 border border-border mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Edit Student Records</span>
                <div className="flex gap-2">
                  <span className="size-2 rounded-full bg-primary"></span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">View Academic Data</span>
                <div className="flex gap-2">
                  <span className="size-2 rounded-full bg-destructive"></span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Approve Leave Requests</span>
                <div className="flex gap-2">
                  <span className="size-2 rounded-full bg-primary"></span>
                </div>
              </div>
            </div>
          </CustomCard>

          {/* Activity Logs */}
          <CustomCard
            icon={Eye}
            title="Comprehensive Activity Logs"
            description="Audit every action in the system. Track who viewed a file, modified a record, or exported data for accountability."
            className="border-border"
          >
            <div className="space-y-4 mt-4">
              {[
                {
                  action: 'Grade updated',
                  user: 'Mrs. Johnson',
                  time: '2 mins ago',
                  icon: FileKey,
                },
                {
                  action: 'Report card generated',
                  user: 'Principal Office',
                  time: '1 hour ago',
                  icon: FileKey,
                },
                {
                  action: 'New student enrolled',
                  user: 'Admin Desk',
                  time: '3 hours ago',
                  icon: FileKey,
                },
              ].map((log, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="mt-1 size-2 rounded-full bg-primary"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {log.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {log.user} • {log.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CustomCard>
        </div>
      </div>
    </section>
  )
}
