import { fraunces, inter } from "@/lib/fonts";

export default function ImpactSection() { 
    const stats = [
        { value: "1993", label: "Founded" }, 
        { value: "11", label: "Producer Collectives" }, 
        { value: "3", label: "Communities United" }, 
        { value: "30+", label: "Years Of Services" }
    ];

    return (
        <section className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-[#0B2B22] px-6 py-20 font-[family-name:var(--font-body)] lg:px-10`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                        <p className="font-[family-name:var(--font-display)] text-4xl font-medium text-[#C9A227] md:text-5xl">
                            {stat.value}
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-[0.15em] text-white/70">
                            {stat.label}
                        </p>
                </div>
                    ))}
            </div>
            </div>
        </section>
    ); 
}