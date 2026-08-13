import { fraunces, inter } from "@/lib/fonts";

const milestones = [
  {
    year: "1993",
    title: "Founded",
    description:
      "S.H. Razik and seventeen young people establish CDF in Kollankuttigama village, Anuradhapura District.",
  },
  {
    year: "1995",
    title: "Formally Registered",
    description:
      "Registered under the Voluntary Social Service Organizations Registration Act, giving the organization legal standing.",
  },
  {
    year: "1990s",
    title: "Environmental Registration",
    description:
      "Registered as an environmental organization under the Central Environmental Authority.",
  },
  {
    year: "2012–2022",
    title: "A Quiet Decade",
    description:
      "Organizational activity slows during this period, as the founding team's capacity is stretched thin.",
  },
  {
    year: "2023",
    title: "Rebuilding Begins",
    description:
      "CDF joins the Land & Agrarian Reform program and starts rebuilding as a network of agricultural producer collectives.",
  },
  {
    year: "2025",
    title: "Renewed Support",
    description:
      "Receives funding from the Rambawa Community Empowerment Foundation and continued SEP Foundation support for anti-trafficking work.",
  },
  {
    year: "2026",
    title: "Present Day",
    description:
      "Re-registered with the Anuradhapura District Secretariat and leads the Cyclone Ditwah relief response.",
  },
];

export default function JourneyOfUsSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-[#F7F5F0] px-6 py-28 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#C9A227]" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A6E14]">
            Our Journey
          </span>
        </div>

        <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[#0B2B22] md:text-5xl">
          Three decades, <span className="italic text-[#8A6E14]">told honestly.</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[#333F38]">
          Not a straight line upward — a real journey, including the years
          we went quiet before finding our way back.
        </p>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical line — left-aligned on mobile, centered on desktop */}
          <div className="absolute left-4 top-0 h-full w-px bg-[#0B2B22]/15 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className="relative flex items-start md:mb-12 md:items-center md:justify-center"
                >
                  {/* Dot on the line */}
                  <div className="absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-[#C9A227] md:left-1/2 md:top-auto" />

                  {/* Card — full width offset from line on mobile, alternating half-width on desktop */}
                  <div
                    className={`ml-12 w-full md:ml-0 md:w-[45%] ${
                      isLeft
                        ? "md:mr-auto md:text-right"
                        : "md:ml-auto md:text-left"
                    }`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#8A6E14]">
                      {item.year}
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-display)] text-xl font-medium text-[#0B2B22]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#333F38]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}