import { MapPin, Phone, Mail } from "lucide-react";
import { siFacebook } from "simple-icons";
import { fraunces, inter } from "@/lib/fonts";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Areas We Work", href: "#areas" },
  { label: "Our Journey", href: "#journey" },
  { label: "Partners", href: "#partners" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

export default function FooterSection() {
  return (    
    <footer
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-[#0B2B22] px-6 pt-20 pb-8 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Org identity */}
          <div className="md:col-span-5">
            <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-white">
              Community Development Foundation
            </p>
            <p className="mt-4 max-w-sm text-base leading-7 text-white/70">
              Working alongside communities in Anuradhapura District since
              1993 — across land rights, education, environment, and
              livelihoods.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              
             <a href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#C9A227]">
                <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                  <path d={siFacebook.path} />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  
                <a href={link.href}
                    className="text-base text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Contact
            </p>
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A227]" strokeWidth={1.75} />
                <p className="text-base leading-7 text-white/70">
                  A.11 Road 07, Maradankadawala Road,
                  <br />
                  Kewdawa, Ganeawalpola, Sri Lanka
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A227]" strokeWidth={1.75} />
                <p className="text-base leading-7 text-white/70">
                  077 215 4048 · 075 910 7088
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A227]" strokeWidth={1.75} />
                
                <a href="mailto:Cdfmaradankadawala93@gmail.com"
                  className="text-base leading-7 text-white/70 transition-colors hover:text-white"
                 >
                  Cdfmaradankadawala93@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Community Development Foundation. All
            rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Registered under the Voluntary Social Service Organizations
            Registration Act
          </p>
        </div>
      </div>
    </footer>
  );
}