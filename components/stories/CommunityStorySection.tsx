import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fraunces, inter } from "@/lib/fonts";

const stories = [
  {
    category: "Education",
    title: "Creating Opportunities for Children",
    description:
      "School support, training and children's development programs.",
    image: "/images/areas/education.jpg",
    href: "/stories/creating-opportunities-for-children",
  },
  {
    category: "Livelihoods",
    title: "Creating Economic Opportunities",
    description:
      "Self-employment, income generation and livestock initiatives.",
    image: "/images/areas/livelihood.jpg",
    href: "/stories/creating-economic-opportunities",
  },
  {
    category: "Health & Wellbeing",
    title: "Building Healthier Communities",
    description:
      "Nutrition, reproductive health and HIV/AIDS prevention.",
    image: "/images/areas/health.jpg",
    href: "/stories/building-healthier-communities",
  },
  {
    category: "Community Empowerment",
    title: "Communities Working Together",
    description:
      "Social mobilization, awareness and community participation.",
    image: "/images/areas/reconciliation.jpg",
    href: "/stories/communities-working-together",
  },
];

export default function CommunityStoriesGrid() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-brand-cream px-6 py-20 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-10 bg-brand-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Community Stories
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {stories.map(({ category, title, description, image, href }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl border border-[#0B2B22]/10 bg-white"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
                  {category}
                </p>

                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-medium text-brand-primary">
                  {title}
                </h3>

                <p className="mt-2 text-base leading-7 text-[#333F38]">
                  {description}
                </p>

                <Link
                  href={href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-brand-accent transition-colors hover:text-brand-primary"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/stories/all"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-accent hover:text-brand-primary"
          >
            View All Stories
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}