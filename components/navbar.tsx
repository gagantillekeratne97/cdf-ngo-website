"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  // { href: "/gallery", label: "Gallery" },
  { href: "/stories", label: "Stories" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <div className="rounded-full bg-white p-2 shadow-md ring-1 ring-black/5">
            <Image
              src="/images/logo.png"
              alt="Organization Logo"
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-[15px] font-medium tracking-wide uppercase transition-colors duration-300 hover:text-brand-accent ${
                  isActive ? "text-brand-accent" : "text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <Link
            href="/donate"
            className="ml-2 rounded-full bg-brand-accent px-6 py-2.5 text-[14px] font-semibold uppercase tracking-wide text-brand-primary transition-colors duration-300 hover:bg-white"
          >
            Donate
          </Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-brand-primary/95 backdrop-blur-sm px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-white text-[15px] font-medium tracking-wide uppercase hover:text-brand-accent"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-brand-accent px-6 py-2.5 text-center text-[14px] font-semibold uppercase tracking-wide text-brand-primary hover:bg-white"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}