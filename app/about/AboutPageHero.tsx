import { fraunces, inter } from "@/lib/fonts";

export default function AboutPageHero() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-[#0B2B22] px-6 pb-16 pt-32 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A227]">
          Home / About Us
        </p>
        <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-white md:text-6xl">
          Thirty years of standing with,{" "}
          <span className="italic text-[#C9A227]">not standing over.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
          The story of Community Development Foundation — where we started,
          what we believe, and why the work still matters today.
        </p>
      </div>
    </section>
  );
}