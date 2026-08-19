import Image from "next/image";
import { fraunces, inter } from "@/lib/fonts";

const boardMembers = [
  {
    name: "S.H. Razik",
    role: "Founding Executive Director",
    image: "/images/board/razik.jpg",
    featured: true,
  },
  {
    name: "A.A. Tamara Nandani",
    role: "Chairman",
    image: "/images/board/nandani.jpg",
  },
  {
    name: "Indrani Jayanthi Vijesekara",
    role: "Vice President",
    image: "/images/board/vijesekara.jpg",
  },
  {
    name: "T.M. Anura Thannakoon",
    role: "Secretary",
    image: "/images/board/thannakoon.jpg",
  },
  {
    name: "D.M. Jayanthikumari Veerakoon",
    role: "Deputy Secretary",
    image: "/images/board/veerakoon.jpg",
  },
  {
    name: "E.M.S. Kumarihami Ekanayaka",
    role: "Treasurer",
    image: "/images/board/ekanayaka.jpg",
  },
  {
    name: "M. Sisira Senarathna",
    role: "Organizing Secretary",
    image: "/images/board/senarathna.jpg",
  },
  {
    name: "R. Karunathilaka",
    role: "Technical Advisor",
    image: "/images/board/karunathilaka.jpg",
  },
];

export default function LeadershipSection() {
  const featured = boardMembers.find((m) => m.featured);
  const rest = boardMembers.filter((m) => !m.featured);

  return (
    <section
      className={`${fraunces.variable} ${inter.variable} relative overflow-hidden bg-white px-6 py-24 font-[family-name:var(--font-body)] lg:px-10`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-brand-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Leadership
          </span>
        </div>

        <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium leading-[1.2] tracking-tight text-brand-primary md:text-4xl">
          Led by the community it serves.
        </h2>

        {featured && (
          <div className="mt-12 flex max-w-2xl flex-col items-start gap-6 rounded-2xl border border-[#0B2B22]/10 p-8 sm:flex-row sm:items-center">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl font-medium text-brand-primary">
                {featured.name}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-brand-accent">
                {featured.role}
              </p>
              <p className="mt-3 text-base leading-7 text-[#333F38]">
                One of the original seventeen founders in 1993, Razik has
                led CDF through three decades of work — including its
                recent revival — and continues to guide the organization's
                programs across Anuradhapura District today.
              </p>
            </div>
          </div>
        )}

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {rest.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-[family-name:var(--font-display)] text-base font-medium leading-snug text-brand-primary">
                {member.name}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
