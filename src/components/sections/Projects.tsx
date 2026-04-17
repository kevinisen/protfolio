import Image from "next/image";
import { DropRevealGroup } from "@/components/animations/DropRevealGroup";

const projects = [
  {
    title: "VR Assistant",
    description: "A production-ready monitoring dashboard integrating ML anomaly detection.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    imageUrl: "/project_img/vr-assistant.png",
  },
  {
    title: "Royalstart",
    description: "Re-implementation of core machine learning algorithms in math.",
    stack: ["Python", "NumPy", "Algebra"],
    imageUrl: "/project_img/royalstart.png",
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
      <h2 className="text-2xl font-semibold">My Projects</h2>
      <p className="mt-3 text-neutral-600 max-w-2xl leading-relaxed">
        Here are some of the projects I&apos;ve worked on (some are not clickable since they were developed privately for clients).
      </p>

      <DropRevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </DropRevealGroup>

      {/* WebGL / Three.js Mini Projects */}
      <div className="mt-20">
        <h3 className="text-xl font-semibold text-neutral-900">Creative Experiments (WebGL)</h3>
        <p className="mt-2 text-sm text-neutral-600 max-w-xl">
          A few extra Three.js pieces I&apos;ve built to experiment with 3D on the web. Click to explore.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <ThreeJsLink title="Web Portal" href="https://portal-3js.vercel.app/" />
          <ThreeJsLink title="Haunted House" href="https://hhouse3js.vercel.app/" />
          <ThreeJsLink title="Galaxy Physics" href="https://galaxy3js.vercel.app/" />
          <ThreeJsLink title="Earth 3D" href="https://earth3js-v1.vercel.app/" />
        </div>
      </div>
    </section>
  );
}

function ThreeJsLink({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-full border border-black/10 bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-100 hover:shadow-md"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 group-hover:bg-neutral-900 group-hover:text-white transition">
        🚀
      </span>
      {title}
      <svg className="w-4 h-4 ml-1 text-neutral-400 group-hover:text-neutral-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    </a>
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
      </div>
    </div>
  );
}