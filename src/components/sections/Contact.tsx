"use client";

import { motion } from "framer-motion";

const socials = [
  {
    name: "Email",
    label: "bonjour@ton-email.com",
    href: "mailto:bonjour@ton-email.com",
    icon: <MailIcon />,
    color: "group-hover:text-blue-500",
  },
  {
    name: "LinkedIn",
    label: "linkedin.com/in/ton-profil",
    href: "https://linkedin.com",
    target: "_blank",
    icon: <LinkedInIcon />,
    color: "group-hover:text-blue-600",
  },
  {
    name: "GitHub",
    label: "github.com/ton-github",
    href: "https://github.com",
    target: "_blank",
    icon: <GitHubIcon />,
    color: "group-hover:text-gray-900",
  },
  {
    name: "Twitter / X",
    label: "@ton-handle",
    href: "https://twitter.com",
    target: "_blank",
    icon: <TwitterIcon />,
    color: "group-hover:text-black",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
      <motion.div
        className="rounded-3xl bg-neutral-50 px-8 py-12 md:px-16 md:py-20 border border-black/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start">
          {/* Header left */}
          <motion.div variants={itemVariants} className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
              Travaillons ensemble.
            </h2>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Que ce soit pour un projet freelance, une offre d&apos;emploi ou simplement pour discuter de code, n&apos;hésitez pas &agrave; m&apos;envoyer un message.
            </p>
            
            {/* Quick action button (mailto direct) */}
            <motion.a
              href="mailto:bonjour@ton-email.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 mt-10 bg-neutral-900 text-white px-8 py-4 rounded-full font-medium tracking-wide shadow-lg hover:bg-neutral-800 transition-colors"
            >
              M&apos;envoyer un email
              <ArrowRightIcon />
            </motion.a>
          </motion.div>

          {/* Social Links Right */}
          <motion.div variants={containerVariants} className="flex flex-col gap-4 w-full">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.target}
                rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-white border border-transparent hover:border-black/5 transition-all shadow-none hover:shadow-sm"
              >
                <div className={`p-3 bg-white border border-black/5 rounded-xl text-neutral-500 shadow-sm transition-colors ${social.color}`}>
                  {social.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{social.name}</p>
                  <p className="text-sm text-neutral-500 mt-0.5 group-hover:text-neutral-700 transition-colors">
                    {social.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------ Icons ------------------ */

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.6 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22" />
      <path d="M9 20c-5 1.5-5-2.5-7-3" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
