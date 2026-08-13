import { fraunces, inter } from "@/lib/fonts";

const registrations = [
  {
    title: "Voluntary Social Service Organizations Registration Act",
    detail: "Registered July 29, 1995",
  },
  {
    title: "Central Environmental Authority",
    detail: "Registered as an environmental organization",
  },
  {
    title: "Anuradhapura District Secretariat",
    detail: "Re-registered January 30, 2026",
  },
];

export default function RegistrationSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-[#F7F5F0] px-6 py-24 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#C9A227]" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A6E14]">
            Legal Standing
          </span>
        </div>

        <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium leading-[1.2] tracking-tight text-[#0B2B22] md:text-4xl">
          A registered, accountable organization.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {registrations.map((reg) => (
            <div
              key={reg.title}
              className="rounded-xl border border-[#0B2B22]/10 bg-white p-6"
            >
              <p className="font-[family-name:var(--font-display)] text-lg font-medium leading-snug text-[#0B2B22]">
                {reg.title}
              </p>
              <p className="mt-3 text-sm text-[#6B7A72]">{reg.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}