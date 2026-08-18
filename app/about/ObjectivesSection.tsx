import { fraunces, inter } from "@/lib/fonts";

const objectives = [
  {
    number: "01",
    title: "Community Empowerment",
    description:
      "Empowering communities socially, culturally, religiously, spiritually, environmentally, educationally, and economically, through social mobilization.",
  },
  {
    number: "02",
    title: "Economic Support for Members",
    description:
      "Providing assistance to strengthen the economic activities of CDF society members and promoting savings.",
  },
  {
    number: "03",
    title: "Training & Awareness",
    description:
      "Conducting training and awareness programs to build community knowledge and promote access to education.",
  },
  {
    number: "04",
    title: "Heritage Protection",
    description:
      "Empowering communities to protect natural resources, historical sites, and cultural heritage.",
  },
  {
    number: "05",
    title: "Advocacy",
    description:
      "Advocating on socio-economic, cultural, and environmental problems and challenges facing communities.",
  },
  {
    number: "06",
    title: "Rights Protection Without Discrimination",
    description:
      "Standing for communities' socio-economic and human rights regardless of ethnicity, religion, caste, or political affiliation — including defending members when they face injustice.",
  },
  {
    number: "07",
    title: "Unity Across Divides",
    description:
      "Bringing people together across ethnic, religious, caste, and political lines within one organization, introducing savings methods, and supporting self-employment to strengthen community economies.",
  },
];

export default function ObjectivesSection() {
  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-white px-6 py-24 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-brand-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Our Objectives
          </span>
        </div>

        <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium leading-[1.2] tracking-tight text-brand-primary md:text-4xl">
          How we put our mission into practice.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
          {objectives.map(({ number, title, description }) => (
            <div key={number} className="flex gap-5">
              <span className="font-[family-name:var(--font-display)] text-3xl font-medium text-brand-accent/40">
                {number}
              </span>
              <div>
                <p className="font-[family-name:var(--font-display)] text-lg font-medium text-brand-primary">
                  {title}
                </p>
                <p className="mt-2 text-base leading-7 text-[#333F38]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}