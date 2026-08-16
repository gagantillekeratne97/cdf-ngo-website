import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fraunces, inter } from "@/lib/fonts";

export default function FeaturedStorySection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-brand-cream px-6 pt-20 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-10 bg-brand-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Featured Story
          </span>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#0B2B22]/10 bg-white lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full lg:aspect-auto">
            <Image
              src="/images/areas/environment.jpg"
              alt="Community members conserving native seeds"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
              Community &amp; Environment
            </p>

            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-medium leading-tight text-brand-primary md:text-3xl">
              Growing a More Sustainable Future Through Local Communities
            </h2>

            <p className="mt-4 text-base leading-7 text-[#333F38]">
              Local seed conservation, seed banks, organic home gardening
              and home forestry help communities strengthen sustainable
              practices — rebuilding the land alongside the people who
              depend on it.
            </p>

            <Link
              href="/stories/growing-a-sustainable-future"
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-brand-accent transition-colors hover:text-brand-primary"
            >
              Read Story
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}