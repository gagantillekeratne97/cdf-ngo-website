import { fraunces, inter } from "@/lib/fonts";

export default function LeadershipSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-white px-6 py-24 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#C9A227]" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A6E14]">
            Leadership
          </span>
        </div>

        <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium leading-[1.2] tracking-tight text-[#0B2B22] md:text-4xl">
          Led by the community it serves.
        </h2>

        <div className="mt-12 max-w-2xl rounded-2xl border border-[#0B2B22]/10 p-8">
          <p className="font-[family-name:var(--font-display)] text-xl font-medium text-[#0B2B22]">
            S.H. Razik
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-[#8A6E14]">
            Founding Executive Director
          </p>
          <p className="mt-4 text-base leading-7 text-[#333F38]">
            One of the original seventeen founders in 1993, Razik has led
            CDF through three decades of work — including its recent revival
            — and continues to guide the organization's programs across
            Anuradhapura District today.
          </p>
        </div>

        <p className="mt-8 max-w-xl text-base leading-7 text-[#6B7A72]">
          CDF is additionally guided by a Board of Directors drawn from the
          communities we serve. Full board profiles coming soon.
        </p>
      </div>
    </section>
  );
}