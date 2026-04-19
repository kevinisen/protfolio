const fs = require('fs');

let code = fs.readFileSync('src/components/sections/Work.tsx', 'utf-8');

// I accidentally deleted the ONLY definition of `stepsContainer` because the regex deleted too much. Let's add them back right above export default function Work.

const missingVariants = `
const stepsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    },
  },
};

const stepItem = {
  hidden: (custom: { side: "top" | "bottom" }) => ({
    opacity: 0,
    y: custom.side === "top" ? -60 : 60,
    filter: "blur(10px)",
  }),
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

`;

code = code.replace("export default function Work", missingVariants + "export default function Work");

fs.writeFileSync('src/components/sections/Work.tsx', code);
