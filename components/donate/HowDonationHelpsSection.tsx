
import { ArrowDown } from "lucide-react";
import { fraunces, inter } from "@/lib/fonts";

const steps = [
  "Your Support",
  "Community Programs",
  "Empowered Communities",
  "Lasting Change",
];

export default function HowDonationHelpsSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-brand-primary px-6 py-24 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-white md:text-4xl">
          How Your Donation Helps
        </h2>

        <div className="mt-14 flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <div className="rounded-full border border-brand-accent/40 bg-white/5 px-8 py-4">
                <p className="text-base font-semibold uppercase tracking-[0.1em] text-white">
                  {step}
                </p>
              </div>
              {index !== steps.length - 1 && (
                <ArrowDown className="my-3 h-5 w-5 text-brand-accent" strokeWidth={2} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}