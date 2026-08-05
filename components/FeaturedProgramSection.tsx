import Image from "next/image";
import { fraunces, inter } from "@/lib/fonts";

export default function FeaturedProgramSection() { 
    return (
        <section className={`${fraunces.variable} ${inter.variable} 
        relative overflow-hidden font-[family-name:var(--font-body)]`}> 
        <div className="relative min-h-[600px] w-full">
            <Image src="/images/areas/community-development.jpg"
            alt="CDF volunteers cleaning up after Cyclone Ditwah" fill className="object-cover"/>                        

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22]/95 via-[#0B2B22]/50 to-[#0B2B22]/10" />            

            <div className="relative z-10 flex min-h-[600px] items-end px-6 py-16 lg:py-20">
                <div className="max-w-2xl">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="h-px w-10 bg-[#C9A227]"/>                         
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A227]">Featured Response</span>
                    </div>

                    <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl">
                        When Cyclon Ditwah hit, we were on the ground within days 
                    </h2>

               <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
                After Cyclone Ditwah caused severe flooding across the
                district, the Anuradhapura District Secretary invited
                Community Development Foundation to help restore Anuradhapura
                Central College's playground. Our team mobilized volunteers
                for the cleanup — work later formally recognized by the
                Anuradhapura Civil Organizations Forum, which presented CDF
                with a certificate of appreciation for service during the
                disaster response.
              </p>
              <div> 
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className="inline-flex items-center rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#0B2B22] transition-colors hover:bg-white">
                    Support Our Response Work
                </a>
              </div>
              </div>
                </div>
            </div>
        </div>
        </section>
    );
}