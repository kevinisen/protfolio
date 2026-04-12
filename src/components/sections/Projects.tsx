import Image from "next/image";
import { DropRevealGroup } from "@/components/animations/DropRevealGroup";

const projects = [
  {
    title: "AI System Monitor",
    description: "A production-ready monitoring dashboard integrating ML anomaly detection.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    imageUrl: "https://picsum.photos/seed/monitor/900/600",
  },
  {
    title: "ML From Scratch",
    description: "Re-implementation of core machine learning algorithms in math.",
    stack: ["Python", "NumPy", "Algebra"],
    imageUrl: "https://picsum.photos/seed/ml/900/600",
  },
  {
    title: "SaaS Planner",
    description: "A time management SaaS focused on performance and clean architecture.",
    stack: ["React", "Express", "CI/CD"],
    imageUrl: "https://picsum.photos/seed/saas/900/600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-semibold">Selected Projects</h2>
      <p className="mt-3 text-neutral-600 max-w-2xl">
        A selection of projects focused on production quality, system thinking,
        and meaningful AI integration.
      </p>

      <DropRevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </DropRevealGroup>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  stack,
  imageUrl,
}: {
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full bg-neutral-100 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          fill
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">{title}</h3>
        <p className="mt-3 text-sm text-neutral-600 leading-relaxed flex-1">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-6">
          <button className="text-sm font-medium text-neutral-900 flex items-center gap-1 hover:opacity-70 transition">
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
          <button className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}