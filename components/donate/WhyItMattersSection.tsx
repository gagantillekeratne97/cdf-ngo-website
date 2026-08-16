import { Leaf, Sprout, GraduationCap, HeartPulse, Handshake, Scale } from "lucide-react";
import { fraunces, inter } from "@/lib/fonts";

const focusAreas = [
  { icon: Leaf, label: "Environment" },
  { icon: Sprout, label: "Livelihoods" },
  { icon: GraduationCap, label: "Education" },
  { icon: HeartPulse, label: "Health & Nutrition" },
  { icon: Handshake, label: "Community Empowerment" },
  { icon: Scale, label: "Social Justice" },
];

export default function WhyItMattersSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-white px-6 py-24 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-brand-primary md:text-4xl">
          Why Your Support Matters
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-[#333F38]">
          Your contribution can help support work in areas such as:
        </p>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {focusAreas.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border border-[#0B2B22]/10 bg-brand-cream px-6 py-10"
            >
              <Icon className="h-7 w-7 text-brand-accent" strokeWidth={1.75} />
              <p className="text-base font-medium text-brand-primary">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}