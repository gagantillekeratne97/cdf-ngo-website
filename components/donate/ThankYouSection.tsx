import { fraunces, inter } from "@/lib/fonts";

export default function ThankYouSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-brand-primary px-6 py-20 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
          Thank You
        </p>
        <p className="mt-4 font-[family-name:var(--font-display)] text-2xl font-medium leading-snug text-white md:text-3xl">
          Together, we can build stronger communities, protect our
          environment, and create a sustainable future.
        </p>
      </div>
    </section>
  );
}