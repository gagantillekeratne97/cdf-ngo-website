import Image from "next/image";
import { Scale, Leaf, GraduationCap, Sprout, Handshake } from "lucide-react";
import { fraunces, inter } from "@/lib/fonts";

export default function VisionSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-[#0B2B22] px-6 py-28 font-[family-name:var(--font-body)] lg:px-10`}
    >
      {/* Vision & Mission */}
<div className="mt-10 max-w-xl rounded-2xl bg-[#0B2B22] p-8">
  <div className="space-y-6">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
        Vision
      </p>
      <p className="mt-2 text-base leading-7 text-[#F7F5F0]/90">
        A just society that secures the survival of nature and all
        living beings, humankind included.
      </p>
    </div>
    <div className="h-px w-full bg-[#F7F5F0]/10" />
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
        Mission
      </p>
      <p className="mt-2 text-base leading-7 text-[#F7F5F0]/90">
        To advance social justice and human dignity for communities
        and the environment alike, empowering people toward lasting,
        sustainable development.
      </p>
    </div>
  </div>
</div>
    </section>
  );
}