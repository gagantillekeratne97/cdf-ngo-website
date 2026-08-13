import Image from "next/image";
import { fraunces, inter } from "@/lib/fonts";

export default function OurStorySection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-[#F7F5F0] px-6 py-28 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md">
              <Image
                src="/images/areas/office-team-photo.jpg"
                alt="Community Development Foundation field team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C9A227]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A6E14]">
                Our Story
              </span>
            </div>

            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium leading-[1.2] tracking-tight text-[#0B2B22] md:text-4xl">
              From one village to a district-wide network.
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-lg leading-8 text-[#333F38]">
              <p>
                Community Development Foundation was founded on January 29,
                1993, in Kollankuttigama, a small village in Anuradhapura
                District. Seventeen unemployed young people, under the
                leadership of S.H. Razik, came together to respond to the
                displacement rural communities were facing as they lost
                access to land and water.
              </p>
              <p>
                The organization was soon re-founded under a name that could
                unite Sinhala, Muslim, and Tamil communities alike — a
                deliberate choice that continues to shape how CDF works
                today, across ethnic and religious lines rather than within
                them.
              </p>
              <p>
                On July 29, 1995, CDF was formally registered under the
                Voluntary Social Service Organizations Registration Act, and
                separately registered as an environmental organization under
                the Central Environmental Authority — giving the
                organization the legal standing to grow beyond a single
                village initiative.
              </p>
              <p>
                Like many grassroots organizations, CDF's activity slowed
                considerably between 2012 and 2022. Rather than treat that as
                a chapter to leave out, we see it as part of the honest
                story — and what came after it is the part we're proudest
                of. Beginning in 2023, a new generation of leadership rebuilt
                CDF from the ground up, joining the Land & Agrarian Reform
                program and re-establishing a network of ecological
                agricultural producer collectives across the district.
              </p>
              <p>
                Today, CDF works alongside eleven producer collectives,
                delivers programs spanning education, health, environment,
                and human rights, and was formally re-registered with the
                Anuradhapura District Secretariat on January 30, 2026 —
                marking a new chapter built on three decades of lessons
                learned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}