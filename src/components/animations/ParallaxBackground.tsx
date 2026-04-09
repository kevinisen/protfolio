"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  // Mouvement très léger du “fond”
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  // Éléments flottants à des vitesses différentes
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const orb1X = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const orb2X = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Layer de fond */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_20%_15%,rgba(91,140,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_480px_at_80%_30%,rgba(155,89,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_90%,rgba(255,255,255,0.06),transparent_60%)]" />
      </motion.div>

      {/* Orbes flottants */}
      <motion.div
        style={{ y: orb1Y, x: orb1X, opacity: 0.22 }}
        className="absolute left-[10%] top-[25%] h-56 w-56 rounded-full bg-white/10 blur-2xl"
      />
      <motion.div
        style={{ y: orb2Y, x: orb2X, opacity: 0.18 }}
        className="absolute right-[12%] top-[18%] h-72 w-72 rounded-full bg-white/10 blur-2xl"
      />
      <motion.div
        style={{ y: orb3Y, opacity: 0.14 }}
        className="absolute left-[55%] top-[65%] h-48 w-48 rounded-full bg-white/10 blur-2xl"
      />
    </div>
  );
}