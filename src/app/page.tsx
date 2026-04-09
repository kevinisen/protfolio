import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <Projects />
      <Work />
      <Contact />
    </main>
  );
}
