"use client";

import { motion } from "framer-motion";

const easePremium = [0.16, 1, 0.3, 1] as const; 
// plus doux que le précédent

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 left-1/4 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.1),transparent_60%)] blur-3xl mix-blend-multiply" />
        <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_60%)] blur-3xl mix-blend-multiply" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24 relative z-10">
        
        {/* Eyebrow / Pre-title */}
        <motion.h2
          initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.2, ease: easePremium }}
          className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-indigo-500"
        >
          Full Stack & AI Developer
        </motion.h2>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(14px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.6, ease: easePremium, delay: 0.25 }}
          className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl"
        >
          Kevin NETH
          <span className="mt-4 block text-neutral-600 font-normal">
            Let’s build something solid, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 font-medium">together</span>.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.4, ease: easePremium, delay: 0.6 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl"
        >
          I'm a developer from France.<br className="hidden sm:block" />
          I build applications and enjoy learning and improving through projects, especially around AI and Web 3D.
          <br className="hidden sm:block" />
          <br className="sm:hidden" />
          Stay focused. Keep it simple. Move forward.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.2, ease: easePremium, delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10">View Projects</span>
          </a>

          <a
            href="#work"
            className="group inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-500/20 hover:bg-indigo-50"
          >
            <span className="group-hover:text-indigo-700 transition-colors">Methodologies</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-3 py-3 text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
          >
            Contact →
          </a>
        </motion.div>

      </div>
    </section>
  );
}