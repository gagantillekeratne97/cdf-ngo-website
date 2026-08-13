import { fraunces, inter } from "@/lib/fonts";

export default function VisionMissionSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-[#0B2B22] px-6 py-24 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Vision
            </p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-2xl font-medium leading-snug text-white md:text-3xl">
              A just society that secures the survival of nature and all
              living beings, humankind included.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Mission
            </p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-2xl font-medium leading-snug text-white md:text-3xl">
              To advance social justice and human dignity for communities and
              the environment alike, empowering people toward lasting,
              sustainable development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}