import Image from "next/image";
import { Scale, Leaf, GraduationCap, Sprout, Handshake } from "lucide-react";
import { fraunces, inter } from "@/lib/fonts";

const pillars = [
  {
    icon: Scale,
    label: "Defending land and labor rights",
  },
  {
    icon: Leaf,
    label: "Restoring degraded ecosystems",
  },
  {
    icon: GraduationCap,
    label: "Expanding access to education",
  },
  {
    icon: Sprout,
    label: "Building sustainable livelihoods",
  },
  {
    icon: Handshake,
    label: "Uniting communities across ethnic and religious lines",
  },
];

export default function AboutSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-[#F7F5F0] px-6 py-28 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-[#C9A227]" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A6E14]">
            Our Story
          </span>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Photo + rotated year rule — spans left side, offset */}
          <div className="relative lg:col-span-5">
            <div className="relative ml-0 aspect-[4/5] w-full max-w-md lg:-ml-6">
              <Image
                src="/images/about-field-photo.jpg"
                alt="Community Development Foundation field team at work"
                fill
                className="object-cover"
              />
            </div>

            {/* Signature element: gold rule with rotated founding year */}
            <div className="mt-8 hidden items-center gap-4 lg:flex">
              <span className="h-24 w-px bg-[#C9A227]" />
              <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.3em] text-[#8A6E14] [writing-mode:vertical-rl]">
                Since 1993
              </span>
            </div>
          </div>

          {/* Narrative + pillars */}
          <div className="lg:col-span-7">
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[#0B2B22] md:text-5xl">
              Three decades of{" "}
              <span className="italic text-[#8A6E14]">showing up.</span>
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-lg leading-8 text-[#333F38]">
              <p>
                Community Development Foundation was founded in 1993 in
                Kollankuttigama, a small village in Anuradhapura District,
                when seventeen unemployed young people came together under
                the leadership of S.H. Razik. What began as a local youth
                initiative was deliberately re-founded soon after under a
                name that could unite Sinhala, Muslim, and Tamil communities
                alike — a founding choice that still shapes how we work
                today.
              </p>
              <p>
                More than thirty years later, that single village effort has
                grown into a network of community collectives across
                Anuradhapura District, working across land and water rights,
                ecological restoration, education, and local livelihoods. We
                build every program with local leadership at the center, so
                it can outlast our involvement.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-8 max-w-xl border-l-2 border-[#C9A227] pl-6">
              <p className="font-[family-name:var(--font-display)] text-xl italic leading-relaxed text-[#0B2B22]">
                "We didn't set out to build an organization. We set out to
                make sure no community was left to face displacement,
                poverty, or exclusion alone."
              </p>
              <footer className="mt-3 text-sm text-[#6B7A72]">
                S.H. Razik, Founding Executive Director
              </footer>
            </blockquote>            

            {/* Pillars */}
            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[#0B2B22]/10 pt-10 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-4">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A227]"
                    strokeWidth={1.75}
                  />
                  <span className="text-base font-medium text-[#0B2B22]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}