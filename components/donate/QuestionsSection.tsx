import Link from "next/link";
import { fraunces, inter } from "@/lib/fonts";

export default function QuestionsSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-white px-6 py-20 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-brand-primary md:text-3xl">
          Have Questions?
        </h2>
        <p className="mt-3 text-base leading-7 text-[#333F38]">
          Want to discuss a donation, partnership, or sponsorship?
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-accent hover:text-brand-primary"
        >
          Contact Our Team
        </Link>
      </div>
    </section>
  );
}