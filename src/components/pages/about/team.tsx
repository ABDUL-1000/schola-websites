import { Image } from '@unpic/react'

const TEAM = [
  {
    name: 'Abdulkareem Abdullateef',
    role: 'Co-Founder & CEO',
    image: '/team/abdul.jpeg',
  },
  {
    name: 'Faruq Abiodun',
    role: 'Co-Founder & CPO',
    image: '/team/faruq.jpeg',
  },
  {
    name: 'Olatilewa Olatoye',
    role: 'Co-Founder & CTO',
    image: '/team/olatilewa.jpeg',
  },
]

export function Team() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Meet the Minds
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A diverse team of educators and engineers working together to
            reshape the future of learning.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group cursor-pointer w-full sm:w-[calc(50%-1.25rem)] lg:w-[280px]"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-4 border border-border">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fullWidth"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
