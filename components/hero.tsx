import Image from "next/image";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const stats = [
  { value: "1993", label: "Founded" },
  { value: "30+", label: "Years of service" },
  { value: "100+", label: "Community programs" },
  { value: "1,000+", label: "Families supported" },
];

export default function HeroSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative isolate min-h-screen overflow-hidden bg-[#0B2B22] font-[family-name:var(--font-body)]`}
    >
      {/* Background */}
      <Image
        src="/images/hero-image-background.jpg"
        alt="Community Development Foundation field programs in Sri Lanka"
        fill
        priority
        className="object-cover opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22]/96 via-[#0B2B22]/80 to-[#0B2B22]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22]/70 via-transparent to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-32 lg:px-10">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#C9A227]" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A227]">
              Est. 1993 · Sri Lanka
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.08] tracking-tight text-[#F7F5F0] md:text-6xl lg:text-[4.5rem]">
            Empowering communities.
            <br />
            <span className="italic text-[#C9A227]">Protecting nature.</span>
            <br />
            Building what lasts.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#D7DED9]">
            For three decades, the Community Development Foundation has
            partnered with communities across Sri Lanka on social justice,
            environmental conservation, education, and sustainable
            development — work built to outlast any single program.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-sm bg-[#C9A227] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-[#0B2B22] transition hover:bg-[#DDB93A]"
            >
              Explore Our Work
            </Link>

            <Link
              href="/contact"
              className="rounded-sm border border-[#F7F5F0]/40 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-[#F7F5F0] transition hover:border-[#F7F5F0] hover:bg-[#F7F5F0]/10"
            >
              Contact Us
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-20 flex max-w-2xl flex-wrap border-t border-[#F7F5F0]/15 pt-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex-1 min-w-[7rem] pr-6 ${
                  i > 0 ? "border-l border-[#F7F5F0]/15 pl-6" : ""
                }`}
              >
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[#F7F5F0]">
                  {stat.value}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-[#9FAFA6]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-[#F7F5F0]/40 p-1">
          <div className="h-2.5 w-1 animate-bounce rounded-full bg-[#C9A227]" />
        </div>
      </div>
    </section>
  );
}