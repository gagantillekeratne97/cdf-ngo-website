import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Briefcase,
  HeartPulse,
  Users,
  Scale,
  ShieldCheck,
  Sprout,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { fraunces, inter } from "@/lib/fonts";

const programs = [
  {
    icon: Leaf,
    title: "Environmental & Home Gardening",
    description:
      "Organic home gardening, home forestry, ecological farming and seed conservation.",
    image: "/images/programs/environment.jpg",
    href: "/programs/environment",
  },
  {
    icon: Briefcase,
    title: "Livelihood & Income Generation",
    description:
      "Self-employment training and income-generation activities for communities.",
    image: "/images/programs/livelihood.jpg",
    href: "/programs/livelihood",
  },
  {
    icon: HeartPulse,
    title: "Health & Nutrition",
    description:
      "Nutrition, reproductive health and HIV/AIDS prevention programs.",
    image: "/images/programs/health.jpg",
    href: "/programs/health",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description:
      "Social mobilization, awareness, leadership and community development.",
    image: "/images/programs/community-development.jpg",
    href: "/programs/community",
  },
  {
    icon: Scale,
    title: "Human Rights & Social Protection",
    description:
      "Human rights awareness, advocacy and protection of community rights.",
    image: "/images/programs/human-rights.jpg",
    href: "/programs/human-rights",
  },
  {
    icon: ShieldCheck,
    title: "Child & Family Protection",
    description:
      "Domestic violence, child abuse prevention and awareness programs.",
    image: "/images/programs/child-protection.jpg",
    href: "/programs/child-protection",
  },
  {
    icon: Sprout,
    title: "Livestock & Agriculture",
    description:
      "Livestock development, agricultural activities and community farming.",
    image: "/images/programs/agriculture.jpg",
    href: "/programs/agriculture",
  },
  {
    icon: HeartHandshake,
    title: "Youth & Social Cohesion",
    description:
      "Youth development, reconciliation and conflict-resolution work.",
    image: "/images/programs/reconciliation.jpg",
    href: "/programs/youth",
  },
];

export default function ProgramsGrid() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-brand-cream px-6 py-28 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-brand-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Featured Programs
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {programs.map(({ icon: Icon, title, description, image, href }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl border border-[#0B2B22]/10 bg-white"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cream">
                  <Icon className="h-5 w-5 text-brand-accent" strokeWidth={1.75} />
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium text-brand-primary">
                  {title}
                </h3>

                <p className="mt-2 text-base leading-7 text-[#333F38]">
                  {description}
                </p>

                <Link
                  href={href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-brand-accent transition-colors hover:text-brand-primary"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/programs/all"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-accent hover:text-brand-primary"
          >
            View All Programs
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}