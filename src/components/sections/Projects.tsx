import Image from "next/image";
import { DropRevealGroup } from "@/components/animations/DropRevealGroup";

const projects = [
  {
    title: "AI Assistant",
    description: "A 3D assistant connected to an AI model, designed to interact with users in real time.",
    highlight: "3D WebGL & Real-time AI integration",
    imageUrl: "/project_img/anime-assistant.png",
    link: "https://anime-assistant.vercel.app/",
  },
  {
    title: "Royal Start",
    description: "A web platform designed to help cat and dog breeders manage and support their activity.",
    highlight: "Scale to handle thousands of breeders",
    imageUrl: "/project_img/royalstart.png",
    link: "https://breeder.royalcanin.com/",
  },
  {
    title: "Vision Track",
    description: "A real-time behavior analysis system using computer vision to detect and track people.",
    highlight: "Computer Vision & Real-time tracking",
    imageUrl: "/project_img/yolo.png",
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
      <div className="mt-16">
        <p className="text-sm text-neutral-600 max-w-xl">
          A few extra Three.js app I&apos;ve built to experiment with 3D on the web.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <ThreeJsLink title="Web Portal" href="https://portal-3js.vercel.app/" emoji="🌀" />
          <ThreeJsLink title="Earth 3D" href="https://earth3js-v1.vercel.app/" emoji="🌍" />
          <ThreeJsLink title="Galaxy Physics" href="https://galaxy3js.vercel.app/" emoji="✨" />
          <ThreeJsLink title="Haunted House" href="https://hhouse3js.vercel.app/" emoji="👻" />
        </div>
      </div>
    </section>
  );
}

function ThreeJsLink({ title, href, emoji = "🚀" }: { title: string; href: string; emoji?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-full border border-black/10 bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-100 hover:shadow-md"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 group-hover:bg-neutral-200 transition">
        <span>{emoji}</span>
      </span>
      {title}
      <svg className="w-4 h-4 ml-1 text-neutral-400 group-hover:text-neutral-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    </a>
  );
}

function ProjectCard({
  title,
  description,
  highlight,
  imageUrl,
  link,
}: {
  title: string;
  description: string;
  highlight?: string;
  imageUrl: string;
  link?: string;
}) {
  const content = (
    <>
      {/* Decorative Gradient Background (Hover active) */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-400/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-400/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Image */}
      <div className="relative aspect-[16/10] w-full bg-neutral-100 shrink-0 overflow-hidden z-10">
        <Image
          src={imageUrl}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          fill
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-8 relative z-10 bg-white/50 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-neutral-900 group-hover:text-indigo-950 transition-colors duration-300">
            {title}
          </h3>
          {link && (
             <svg className="w-5 h-5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          )}
        </div>
        <p className="mt-3 text-sm text-neutral-600 leading-relaxed flex-1">
          {description}
        </p>

        {highlight && (
          <div className="mt-8 border-t border-neutral-100 pt-4">
            <p className="text-[13px] font-medium text-indigo-700/80 tracking-wide">
              {highlight}
            </p>
          </div>
        )}
      </div>
    </>
  );

  const containerClasses = "group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 relative";

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={containerClasses + " cursor-pointer"}>
        {content}
      </a>
    );
  }

  return (
    <div className={containerClasses}>
      {content}
    </div>
  );
}