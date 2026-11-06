import { useState } from 'react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { FileSpreadsheet, ArrowRight, Sparkles, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RoleGuide } from '@/components/pages/product-tour/role-guide'
import { ROLE_GUIDES, type RoleKey } from '@/lib/product-catalog'

const ROLE_KEYS = ROLE_GUIDES.map((r) => r.key)

export const Route = createFileRoute('/_pages/product-tour')({
  // ?role=bursar deep-links straight to a role (used by the homepage cards).
  validateSearch: (search: Record<string, unknown>): { role?: RoleKey } => ({
    role: ROLE_KEYS.includes(search.role as RoleKey) ? (search.role as RoleKey) : undefined,
  }),
  component: ProductTourPage,
  head: () => ({
    meta: [
      {
        title: 'Product Tour & Role Guide | Schola',
      },
      {
        name: 'description',
        content:
          'What every Schola dashboard does — school owner, admin, bursar, exam officer, form master, teacher, student and parent — with where to find each feature.',
      },
      {
        property: 'og:title',
        content: 'Schola Product Tour: What Each Dashboard Does',
      },
      {
        property: 'og:description',
        content:
          'Interactive walkthrough of Schola dashboards across all roles in your school ecosystem.',
      },
    ],
  }),
})

// Interactive Live Score Simulator Data
interface StudentScore {
  name: string
  admNo: string
  ca1: number
  ca2: number
  exam: number
}

function calculateGrade(total: number): { grade: string; remark: string } {
  if (total >= 75) return { grade: 'A1', remark: 'Excellent' }
  if (total >= 70) return { grade: 'B2', remark: 'Very Good' }
  if (total >= 65) return { grade: 'B3', remark: 'Good' }
  if (total >= 60) return { grade: 'C4', remark: 'Credit' }
  if (total >= 55) return { grade: 'C5', remark: 'Credit' }
  if (total >= 50) return { grade: 'C6', remark: 'Credit' }
  if (total >= 45) return { grade: 'D7', remark: 'Pass' }
  if (total >= 40) return { grade: 'E8', remark: 'Pass' }
  return { grade: 'F9', remark: 'Fail' }
}

const ordinal = (n: number) => {
  const sfx = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (sfx[(v - 20) % 10] || sfx[v] || sfx[0])
}

function ProductTourPage() {
  const { role } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const activeRole: RoleKey = role ?? 'owner'

  // Interactive Score Sheet State
  const [scores, setScores] = useState<StudentScore[]>([
    { name: 'Amina Bello', admNo: 'SCH/2026/042', ca1: 18, ca2: 19, exam: 54 },
    { name: 'Emeka Nwosu', admNo: 'SCH/2026/089', ca1: 14, ca2: 16, exam: 42 },
    { name: 'Tunde Bakare', admNo: 'SCH/2026/115', ca1: 20, ca2: 18, exam: 58 },
  ])

  const handleScoreChange = (
    index: number,
    field: 'ca1' | 'ca2' | 'exam',
    value: number,
  ) => {
    const clamped = Math.max(
      0,
      Math.min(field === 'exam' ? 60 : 20, isNaN(value) ? 0 : value),
    )
    const updated = [...scores]
    updated[index] = { ...updated[index], [field]: clamped }
    setScores(updated)
  }

  // Calculate sorted rankings for interactive simulator
  const rankedStudents = scores
    .map((s, originalIndex) => {
      const total = s.ca1 + s.ca2 + s.exam
      const { grade, remark } = calculateGrade(total)
      return { ...s, total, grade, remark, originalIndex }
    })
    .sort((a, b) => b.total - a.total)
    .map((s, rankIndex, all) => {
      // Equal totals share a position (1st, 1st, 3rd) — same as the real report sheet.
      const firstWithTotal = all.findIndex((x) => x.total === s.total)
      return { ...s, position: ordinal((firstWithTotal === -1 ? rankIndex : firstWithTotal) + 1) }
    })

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="size-3.5" />
            Product tour &amp; role guide
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            What each dashboard does
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Everyone in your school signs in to a dashboard built around their
            job. Pick a role to see what it can do, where to find each feature,
            and what to do in the first week.
          </p>
        </div>

        <RoleGuide
          role={activeRole}
          onRoleChange={(r) => navigate({ search: { role: r }, replace: true, resetScroll: false })}
        />

        {/* Interactive Live Score Sheet Simulator */}
        <div
          id="interactive-simulator"
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="size-5 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Try it: score entry &amp; class positions
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Change any CA or exam mark. The total, grade and class position
                update as you type &mdash; exactly how the report sheet behaves.
              </p>
            </div>
          </div>

          {/* Simulated Score Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/40 text-muted-foreground font-semibold">
                  <th className="py-3 px-3">Student Name</th>
                  <th className="py-3 px-3">Adm No</th>
                  <th className="py-3 px-3 text-center">CA 1 (20)</th>
                  <th className="py-3 px-3 text-center">CA 2 (20)</th>
                  <th className="py-3 px-3 text-center">Exam (60)</th>
                  <th className="py-3 px-3 text-center">Total (100)</th>
                  <th className="py-3 px-3 text-center">Grade</th>
                  <th className="py-3 px-3 text-center">Class Position</th>
                  <th className="py-3 px-3">Remark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rankedStudents.map((student) => (
                  <tr
                    key={student.admNo}
                    className="hover:bg-muted/20 transition-colors"
                  >
                    <td className="py-3.5 px-3 font-semibold text-foreground">
                      {student.name}
                    </td>
                    <td className="py-3.5 px-3 font-mono text-muted-foreground text-xs">
                      {student.admNo}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={scores[student.originalIndex].ca1}
                        onChange={(e) =>
                          handleScoreChange(
                            student.originalIndex,
                            'ca1',
                            parseInt(e.target.value) || 0,
                          )
                        }
                        className="w-14 text-center py-1 rounded border border-input bg-background font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
                      />
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={scores[student.originalIndex].ca2}
                        onChange={(e) =>
                          handleScoreChange(
                            student.originalIndex,
                            'ca2',
                            parseInt(e.target.value) || 0,
                          )
                        }
                        className="w-14 text-center py-1 rounded border border-input bg-background font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
                      />
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="60"
                        value={scores[student.originalIndex].exam}
                        onChange={(e) =>
                          handleScoreChange(
                            student.originalIndex,
                            'exam',
                            parseInt(e.target.value) || 0,
                          )
                        }
                        className="w-16 text-center py-1 rounded border border-input bg-background font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
                      />
                    </td>
                    <td className="py-3.5 px-3 text-center font-bold text-foreground text-sm">
                      {student.total}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold ${
                          student.grade === 'A1'
                            ? 'bg-primary/10 text-primary'
                            : student.grade.startsWith('B')
                              ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                              : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                        }`}
                      >
                        {student.grade}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <span className="font-extrabold text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {student.position}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-xs text-muted-foreground font-medium">
                      {student.remark}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interactive Footer Callout */}
          <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="size-4 text-primary" />
              <span>
                Sample class <strong>JSS 2 Diamond (Mathematics)</strong>. Your
                school sets its own components and grading scale.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Button size="sm" variant="outline" asChild>
                <Link to="/book-demo" className="flex items-center gap-1.5">
                  See a real report card in a demo
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            See your own school set up this way
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            We'll walk through it live with your classes, subjects and grading
            scale. Free, and no commitment.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button
              size="xl"
              asChild
              className="shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Link to="/book-demo" className="flex items-center gap-2">
                Book Your 15-Minute Demo <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link to="/features">View All Platform Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
