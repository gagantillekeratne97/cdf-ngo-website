import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { fraunces, inter } from "@/lib/fonts";

export default function DonationHero() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-brand-cream px-6 pb-20 pt-32 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
          Support Our Work
        </p>

        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-brand-primary md:text-5xl">
          Help us create stronger communities and a{" "}
          <span className="italic text-brand-accent">more sustainable future.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#333F38]">
          Your support can help communities access opportunities, build
          resilience, protect the environment, and create lasting positive
          change.
        </p>

        <Link
          href="#giving-options"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
        >
          Donate Now
          <ArrowDown className="h-4 w-4" strokeWidth={2} />
        </Link>
      </div>

      <div className="relative mx-auto mt-16 aspect-[16/8] w-full max-w-6xl overflow-hidden rounded-2xl">
        <Image
          src="/images/areas/child-protection.jpg"
          alt="Community Development Foundation program activity"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}