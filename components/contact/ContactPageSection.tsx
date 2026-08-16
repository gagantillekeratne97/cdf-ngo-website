"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { siFacebook } from "simple-icons";
import { fraunces, inter } from "@/lib/fonts";

const contactCards = [
  {
    icon: MapPin,
    label: "Our Office",
    lines: ["Maradankadawala Road", "Kawdawa", "Ganewalpola, Sri Lanka"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["077 215 4048", "075 910 7088"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["Cdfmaradankadawala93@gmail.com"],
  },
];

export default function ContactPageSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire this up to your email service or backend API route
    setStatus("sent");
  }

  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-brand-cream px-6 py-28 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Get In Touch */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
              Get In Touch
            </p>

            <div className="mt-6 space-y-5">
              {contactCards.map(({ icon: Icon, label, lines }) => (
                <div
                  key={label}
                  className="rounded-xl border border-[#0B2B22]/10 bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-brand-accent" strokeWidth={1.75} />
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">
                      {label}
                    </p>
                  </div>
                  <div className="mt-3 space-y-1">
                    {lines.map((line) => (
                      <p key={line} className="text-base leading-7 text-[#333F38]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="rounded-xl border border-[#0B2B22]/10 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">
                  Social
                </p>
                <div className="mt-4 flex items-center gap-3">
                  
                 <a   href="#"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream transition-colors hover:bg-brand-accent"
                  >
                    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-brand-primary">
                      <path d={siFacebook.path} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
              Send Us A Message
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-brand-primary">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-[#0B2B22]/15 bg-white px-4 py-3 text-brand-primary outline-none transition-colors focus:border-brand-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-brand-primary">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-[#0B2B22]/15 bg-white px-4 py-3 text-brand-primary outline-none transition-colors focus:border-brand-accent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium text-brand-primary">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-[#0B2B22]/15 bg-white px-4 py-3 text-brand-primary outline-none transition-colors focus:border-brand-accent"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-brand-primary">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full resize-none rounded-lg border border-[#0B2B22]/15 bg-white px-4 py-3 text-brand-primary outline-none transition-colors focus:border-brand-accent"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-accent hover:text-brand-primary disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Sending..."
                  : status === "sent"
                  ? "Sent — Thank You"
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Find Us
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#0B2B22]/10">
            <iframe
              src="https://www.google.com/maps?q=Maradankadawala+Road,+Kawdawa,+Ganewalpola,+Sri+Lanka&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Community Development Foundation office location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}