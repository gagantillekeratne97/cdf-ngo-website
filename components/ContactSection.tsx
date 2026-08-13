"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { siFacebook } from "simple-icons";
import { fraunces, inter } from "@/lib/fonts";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire this up to your email service or backend API route
    // e.g. await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-white px-6 py-28 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#C9A227]" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A6E14]">
            Contact
          </span>
        </div>

        <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.15] tracking-tight text-[#0B2B22] md:text-5xl">
          Let's start a{" "}
          <span className="italic text-[#8A6E14]">conversation.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-[#0B2B22]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-[#0B2B22]/15 bg-[#F7F5F0] px-4 py-3 text-[#0B2B22] outline-none transition-colors focus:border-[#C9A227]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-[#0B2B22]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-[#0B2B22]/15 bg-[#F7F5F0] px-4 py-3 text-[#0B2B22] outline-none transition-colors focus:border-[#C9A227]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-[#0B2B22]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full resize-none rounded-lg border border-[#0B2B22]/15 bg-[#F7F5F0] px-4 py-3 text-[#0B2B22] outline-none transition-colors focus:border-[#C9A227]"
                  placeholder="Tell us how you'd like to get involved..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center rounded-full bg-[#0B2B22] px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#8A6E14] disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : status === "sent" ? "Sent — Thank You" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Org details */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0B2B22] p-8">
              <p className="font-[family-name:var(--font-display)] text-xl font-medium text-white">
                Community Development Foundation
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A227]" strokeWidth={1.75} />
                  <p className="text-base leading-7 text-white/85">
                    A.11 Road 07, Maradankadawala Road,
                    <br />
                    Kewdawa, Ganeawalpola, Sri Lanka
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A227]" strokeWidth={1.75} />
                  <p className="text-base leading-7 text-white/85">
                    077 215 4048
                    <br />
                    075 910 7088
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A227]" strokeWidth={1.75} />

                    <a href="mailto:Cdfmaradankadawala93@gmail.com"
                    className="text-base leading-7 text-white/85 hover:text-[#C9A227]"
                    >
                    Cdfmaradankadawala93@gmail.com
                    </a>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-5 w-5 shrink-0 fill-[#C9A227]"
                  >
                    <path d={siFacebook.path} />
                  </svg>
                  <p className="text-base leading-7 text-white/85">
                    Community Development Foundation
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                  Registered under the Voluntary Social Service
                  Organizations Registration Act
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}