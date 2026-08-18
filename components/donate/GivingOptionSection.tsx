"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import { fraunces, inter } from "@/lib/fonts";

type GivingMethod = "bank" | "online" | "contact";

const DONATION_EMAIL = "Cdfmaradankadawala93@gmail.com";

function buildMailtoLink(subject: string, body: string) {
  return `mailto:${DONATION_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export default function GivingOptionsSection() {
  const [method, setMethod] = useState<GivingMethod>("bank");

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
              <div className="rounded-xl bg-brand-cream p-6 text-center">
                <p className="text-base leading-7 text-[#333F38]">
                  For security, we don't publish our bank account details
                  online. Request them directly and our team will reply with
                  everything you need to complete a bank transfer.
                </p>
                
                <a  href={buildMailtoLink(
                    "Request for Bank Transfer Details",
                    "Hello,\n\nI'd like to make a donation via bank transfer. Could you please share your account details?\n\nThank you."
                  )}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-accent hover:text-brand-primary"
                >
                  <Mail className="h-4 w-4" strokeWidth={2} />
                  Request Bank Details
                </a>
              </div>
            )}

            {method === "online" && (
              <div className="rounded-xl bg-brand-cream p-6 text-center">
                <p className="text-base leading-7 text-[#333F38]">
                  Online payment is coming soon. In the meantime, please
                  request our bank transfer details or contact our team
                  directly to arrange your donation.
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