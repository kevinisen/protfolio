"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18, // plus lent entre chaque carte
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -70 }, // “tombe” plus visible
  visible: { opacity: 1, y: 0 },
};

export function DropRevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const arrayChildren = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {arrayChildren.map((child, i) => (
        <motion.div
          key={i}
          variants={item}
          transition={{
            duration: 1.25, // plus lent
            ease: [0.16, 1, 0.3, 1], // plus “premium / glide”
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}