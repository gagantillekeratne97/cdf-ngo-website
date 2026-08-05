import Image from "next/image";
import {
  Sprout,
  Leaf,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Briefcase,
  Scale,
  Users,
  HeartPulse,
} from "lucide-react";
import { fraunces, inter } from "@/lib/fonts";

const areas = [
  {
    icon: Sprout,
    label: "Agriculture",
    image: "/images/areas/agriculture.jpg",
  },
  {
    icon: Leaf,
    label: "Environment",
    image: "/images/areas/environment.jpg",
  },
  {
    icon: GraduationCap,
    label: "Education",
    image: "/images/areas/education.jpg",
  },
  {
    icon: HeartHandshake,
    label: "Reconciliation",
    image: "/images/areas/reconciliation.jpg",
  },
  {
    icon: ShieldCheck,
    label: "Child Protection",
    image: "/images/areas/child-protection.jpg",
  },
  {
    icon: Briefcase,
    label: "Livelihood",
    image: "/images/areas/livelihood.jpg",
  },
  {
    icon: Scale,
    label: "Human Rights",
    image: "/images/areas/human-rights.jpg",
  },
  {
    icon: Users,
    label: "Community Development",
    image: "/images/areas/community-development.jpg",
  },
  {
    icon: HeartPulse,
    label: "Health",
    image: "/images/areas/health.jpg",
  },
];

export default function AreasWeWorkSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} border-t border-[#0B2B22]/10 bg-white px-6 py-28 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#C9A227]" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A6E14]">
            What We Do
          </span>
        </div>

        <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[#0B2B22] md:text-5xl">
          Areas we <span className="italic text-[#8A6E14]">work in.</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[#333F38]">
          Nine focus areas, one goal: communities that can stand on their
          own.
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {areas.map(({ icon: Icon, label, image }) => (
            <div
              key={label}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src={image}
                alt={label}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Gradient overlay — darkens further on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22]/90 via-[#0B2B22]/20 to-transparent transition-opacity duration-500 group-hover:from-[#0B2B22]/95" />

              {/* Gold hover ring */}
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-[#C9A227]/60" />

              {/* Icon */}
              <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors duration-500 group-hover:bg-[#C9A227]">
                <Icon
                  className="h-5 w-5 text-white transition-colors duration-500 group-hover:text-[#0B2B22]"
                  strokeWidth={1.75}
                />
              </div>

              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="font-[family-name:var(--font-display)] text-lg font-medium leading-tight text-white">
                  {label}
                </span>
                <span className="mt-1 block h-0.5 w-0 bg-[#C9A227] transition-all duration-500 group-hover:w-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}