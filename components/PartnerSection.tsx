import { fraunces, inter } from "@/lib/fonts";

const partners = [
  { name: "World Vision Sri Lanka", category: "Training Partner" },
  { name: "CARE International", category: "Livelihood Support" },
  { name: "Sri Lanka Canada Development Fund", category: "Funding Partner" },
  { name: "SEP Foundation", category: "Funding Partner" },
  { name: "Rambawa Community Empowerment Foundation", category: "Funding Partner" },
  { name: "Central Environmental Authority", category: "Registering Body" },
  { name: "Anuradhapura District Secretariat", category: "Government Partner" },
  { name: "Anuradhapura Civil Organizations Forum", category: "Government Partner" },
];

export default function PartnersSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-white px-6 py-24 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#C9A227]" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A6E14]">
            Working Together
          </span>
        </div>

        <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[#0B2B22] md:text-5xl">
          Trusted by the{" "}
          <span className="italic text-[#8A6E14]">partners we work with.</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[#333F38]">
          Three decades of work has meant three decades of relationships —
          with funders, training institutions, and the government bodies
          that oversee our work.
        </p>

        {/* Partner grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col justify-between rounded-xl border border-[#0B2B22]/10 p-6 transition-colors duration-300 hover:border-[#C9A227]/60"
            >
              <div>
                <p className="font-[family-name:var(--font-display)] text-lg font-medium leading-snug text-[#0B2B22]">
                  {partner.name}
                </p>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#8A6E14]">
                {partner.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}