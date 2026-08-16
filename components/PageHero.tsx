// components/PageHero.tsx
import { fraunces, inter } from "@/lib/fonts";
import { ReactNode } from "react";

interface PageHeroProps {
  breadcrumb: string;
  heading: ReactNode;
  description: string;
}

export default function PageHero({ breadcrumb, heading, description }: PageHeroProps) {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-brand-primary px-6 pb-16 pt-32 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
          {breadcrumb}
        </p>
        <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-white md:text-6xl">
          {heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
          {description}
        </p>
      </div>
    </section>
  );
}