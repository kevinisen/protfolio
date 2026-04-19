};

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-12 relative">
      <motion.div
        className="rounded-3xl bg-neutral-950 px-8 py-12 md:px-16 md:py-20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none transform -translate-x-1/4 translate-y-1/3" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start relative z-10">
          {/* Header left */}
          <motion.div variants={itemVariants} className="max-w-md">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-indigo-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Open to new opportunities
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Let's keep <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">in touch.</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
              I'm actively looking for new opportunities—whether it's a freelance mission, a full-time role (CDI), or any innovative project involving AI and Three.js. Feel free to reach out!
            </p>
            
            {/* Quick action button (mailto direct) */}
            <motion.a
              href="mailto:bonjour@ton-email.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 mt-10 bg-white text-neutral-900 border border-white/20 px-8 py-4 rounded-full font-semibold tracking-wide shadow-[0_4px_14px_rgba(255,255,255,0.1)] hover:bg-neutral-100 transition-colors"
            >
              Send me an email
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
                className="group flex items-center mx-auto md:mx-0 max-w-sm gap-5 p-4 rounded-2xl md:ml-auto w-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all shadow-none hover:shadow-lg hover:shadow-white/5 backdrop-blur-sm"
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-neutral-400 group-hover:bg-white/10 group-hover:text-white transition-colors">
                  {social.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-indigo-200 transition-colors">{social.name}</p>
                  <p className="text-sm text-neutral-400 mt-0.5 group-hover:text-neutral-300 transition-colors">
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
