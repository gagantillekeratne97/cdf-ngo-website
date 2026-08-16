"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Link from "next/link";
import { fraunces, inter } from "@/lib/fonts";

type GivingMethod = "bank" | "online" | "contact";

const paymentDetails = [
  { label: "Account Name", value: "[Add account name]" },
  { label: "Bank", value: "[Add bank name]" },
  { label: "Account Number", value: "[Add account number]" },
  { label: "Branch", value: "[Add branch name]" },
];

export default function GivingOptionsSection() {
  const [method, setMethod] = useState<GivingMethod>("bank");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const text = paymentDetails.map((d) => `${d.label}: ${d.value}`).join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      id="giving-options"
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-brand-cream px-6 py-24 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-[#0B2B22]/10 bg-white p-8 md:p-10">
          <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-medium text-brand-primary md:text-3xl">
            Make A Donation
          </h2>
          <p className="mt-2 text-center text-base text-[#333F38]">
            Choose your preferred way to support us.
          </p>

          {/* Method tabs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {[
              { key: "bank" as const, label: "Bank Transfer" },
              { key: "online" as const, label: "Online Payment" },
              { key: "contact" as const, label: "Contact Us" },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setMethod(option.key)}
                className={`flex-1 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-colors ${
                  method === option.key
                    ? "bg-brand-primary text-white"
                    : "bg-brand-cream text-brand-primary hover:bg-brand-accent/20"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Method content */}
          <div className="mt-8">
            {method === "bank" && (
              <div>
                <div className="space-y-4 rounded-xl bg-brand-cream p-6">
                  {paymentDetails.map((detail) => (
                    <div key={detail.label}>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-base text-brand-primary">{detail.value}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleCopy}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-accent hover:text-brand-primary"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" strokeWidth={2} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" strokeWidth={2} />
                      Copy Details
                    </>
                  )}
                </button>
              </div>
            )}

            {method === "online" && (
              <div className="rounded-xl bg-brand-cream p-6 text-center">
                <p className="text-base leading-7 text-[#333F38]">
                  Online payment is coming soon. In the meantime, please use
                  bank transfer or contact our team directly to arrange your
                  donation.
                </p>
              </div>
            )}

            {method === "contact" && (
              <div className="rounded-xl bg-brand-cream p-6 text-center">
                <p className="text-base leading-7 text-[#333F38]">
                  Prefer to talk it through? Reach out and our team will help
                  you find the right way to give.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-accent hover:text-brand-primary"
                >
                  Contact Our Team
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}