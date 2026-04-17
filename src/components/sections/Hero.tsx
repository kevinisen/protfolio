"use client";

import { motion } from "framer-motion";

const easePremium = [0.16, 1, 0.3, 1] as const; 
// plus doux que le précédent

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.05),transparent_60%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: easePremium }}
          className="text-sm tracking-wide text-neutral-600"
        >
          Full-stack • Production-minded • AI when it matters
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(14px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: easePremium, delay: 0.25 }}
          className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl"
        >
          Kevin NETH
          <span className="mt-4 block text-neutral-600 font-normal">
            Let’s build something solid, together.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: easePremium, delay: 0.6 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg"
        >
          I’m a full-stack developer building applications, with a focus on best practices and AI integration.
          <br className="hidden sm:block" />
          <br className="sm:hidden" />
          Stay focused. Keep it simple. Move forward.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: easePremium, delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition hover:opacity-90"
          >
            View Projects
          </a>

          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5"
          >
            Work
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