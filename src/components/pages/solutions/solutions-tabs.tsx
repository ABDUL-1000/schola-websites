import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface SolutionsTabsProps {
  activeTab: 'role' | 'type'
  setActiveTab: (tab: 'role' | 'type') => void
}

export function SolutionsTabs({ activeTab, setActiveTab }: SolutionsTabsProps) {
  return (
    <div className="flex justify-center flex-col items-center">
      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as 'role' | 'type')}
        className="inline-flex w-auto"
      >
        <TabsList className="rounded-full border border-border bg-muted/50 p-1.5 backdrop-blur-md h-12 w-full sm:w-auto">
          <TabsTrigger
            value="role"
            className="rounded-full border border-transparent px-8 py-2 text-sm sm:text-base font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md h-full flex-1 sm:flex-initial"
          >
            By Role
          </TabsTrigger>
          <TabsTrigger
            value="type"
            className="rounded-full border border-transparent px-8 py-2 text-sm sm:text-base font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md h-full flex-1 sm:flex-initial"
          >
            By School Type
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
