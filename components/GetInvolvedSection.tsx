import { HandHeart, Users, Briefcase } from "lucide-react";
import { fraunces, inter } from "@/lib/fonts";

const options = [
  {
    icon: HandHeart,
    title: "Donate",
    description:
      "Your contribution funds home gardens, education access, and community-led recovery efforts like our Cyclone Ditwah response.",
    cta: "Donate Now",
    href: "#contact",
    highlighted: true,
  },
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Join our field team for community workshops, environmental restoration projects, or program support across Anuradhapura District.",
    cta: "Get In Touch",
    href: "#contact",
    highlighted: false,
  },
  {
    icon: Briefcase,
    title: "Partner With Us",
    description:
      "We work with NGOs, funders, and government bodies to expand programs sustainably. Let's talk about how we can work together.",
    cta: "Contact Us",
    href: "#contact",
    highlighted: false,
  },
];

export default function GetInvolvedSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-[#F7F5F0] px-6 py-28 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#C9A227]" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A6E14]">
            Get Involved
          </span>
        </div>

        <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[#0B2B22] md:text-5xl">
          There's a place for{" "}
          <span className="italic text-[#8A6E14]">you in this.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {options.map(({ icon: Icon, title, description, cta, href, highlighted }) => (
            <div
              key={title}
              className={`flex flex-col rounded-2xl p-8 ${
                highlighted
                  ? "bg-brand-primary text-white"
                  : "border border-[#0B2B22]/10 bg-white text-[#0B2B22]"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  highlighted ? "bg-[#C9A227]" : "bg-[#F7F5F0]"
                }`}
              >
                <Icon
                  className={`h-6 w-6 ${highlighted ? "text-[#0B2B22]" : "text-[#8A6E14]"}`}
                  strokeWidth={1.75}
                />
              </div>

              <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-medium">
                {title}
              </h3>

              <p
                className={`mt-3 flex-1 text-base leading-7 ${
                  highlighted ? "text-white/80" : "text-[#333F38]"
                }`}
              >
                {description}
              </p>

              
                <a href={href}
                className={`mt-6 inline-flex w-fit items-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-colors ${
                  highlighted
                    ? "bg-[#C9A227] text-[#0B2B22] hover:bg-white"
                    : "bg-brand-primary text-white hover:bg-[#8A6E14]"
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}