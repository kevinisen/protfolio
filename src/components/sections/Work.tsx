"use client";

import { motion } from "framer-motion";

type Step = {
  side: "top" | "bottom";
  title: string;
  body: string;
  offsetX?: number; // px
  maxW?: number; // px
};

const orderedSteps: Step[] = [
  {
    side: "top",
    title: "Main stays deployable",
    body: "Protected branch, CI required, clean merges — main is always ready to ship.",
    offsetX: -20,
    maxW: 320,
  },
  {
    side: "bottom",
    title: "Feature branches",
    body: "Small, short-lived branches. PRs opened early with clear scope + test plan.",
    offsetX: 10,
    maxW: 320,
  },
  {
    side: "top",
    title: "PR hygiene & reviews",
    body: "Context, steps to test, screenshots when useful. Reviews focus on clarity and risk.",
    offsetX: 10,
    maxW: 320,
  },
  {
    side: "bottom",
    title: "Safe merges & releases",
    body: "Predictable merges, minimal conflicts, and safe deploy practices.",
    offsetX: -10,
    maxW: 320,
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-12 overflow-x-hidden">
      <header className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-neutral-900">Work & Methodologies</h2>
        <p className="mt-3 text-neutral-600">
          Git flow that favors clarity, fast reviews, and predictable delivery.
        </p>
      </header>

      {/* Unified Scaled View (No scrolling, always properly sized) */}
      <div className="mt-16 w-full flex justify-center overflow-hidden h-[300px] sm:h-[400px] md:h-[600px] items-center">
        <div
          style={{ width: 1000, height: 600, transform: 'scale(min(1, max(0.3, calc(100vw / 1050))))', transformOrigin: 'center center' }}
          className="relative shrink-0 flex items-center justify-center pointer-events-none"
        >
          {/* The horizontal line pinned to the middle */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 flex justify-center">
            <GitFlowLine />
          </div>

          <motion.div
            className="relative z-10 w-full h-full flex justify-between items-center max-w-[1000px] mx-auto pointer-events-auto"
            variants={stepsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {orderedSteps.map((s, i) => (
              <StepBlock key={s.title} step={s} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      <WorkPractices />
    </section>
  );
}

/* -------------------- Motion -------------------- */

const stepsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.32,
      delayChildren: 0.08,
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* -------------------- Blocks -------------------- */

function StepBlock({ step, index }: { step: Step; index: number }) {
  const isTop = step.side === "top";
  const offsetStyle = step.offsetX ? { transform: `translateX(${step.offsetX}px)` } : undefined;
  const maxWStyle = step.maxW ? { width: `${step.maxW}px` } : undefined;

  // Further away from the branch: increased margin to top / bottom
  const yOffsetClass = isTop ? "mb-[22rem]" : "mt-[22rem]";
  
  return (
    <motion.div
      className={`rounded-2xl border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] snap-center ${yOffsetClass}`}
      style={{ ...maxWStyle, ...offsetStyle }}
      variants={stepItem}
      custom={{ side: step.side }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="flex shrink-0 items-center justify-center w-6 h-6 rounded-full bg-neutral-100 text-xs font-medium text-neutral-500">
          {index + 1}
        </span>
        <p className="text-sm font-semibold text-neutral-900">{step.title}</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.body}</p>
    </motion.div>
  );
}

/* -------------------- GitFlow SVG (horizontal) -------------------- */

function GitFlowLine() {
  const width = 1000;
  const height = 300; 
  
  const cy = height / 2; // Trunk is at the vertical center (150)

  // Main line horizontally spanning most of the width
  const main = `M 20 ${cy} L ${width - 20} ${cy}`;

  function branchPath(params: {
    x0: number;
    dir: -1 | 1;
    diagX: number;
    diagY: number;
    run: number;
  }) {
    const { x0, dir, diagX, diagY, run } = params;

    const y1 = cy + dir * diagY;
    const x1 = x0 + diagX;
    const x2 = x1 + run;

    return {
      path: `M ${x0} ${cy} L ${x1} ${y1} L ${x2} ${y1}`,
      endX: x2,
      endY: y1,
    };
  }

  // 6 nodes condensed on the 1000px line
  const x1 = 120;
  const x2 = 260;
  const x3 = 400;
  const x4 = 540;
  const x5 = 680;
  const x6 = 820;

  const branchColors = [
    "#F05032", // orange
    "#22C55E", // green
    "#A855F7", // purple
    "#3B82F6", // blue
    "#EAB308", // yellow
    "#EF4444", // red
  ];

  // Branches shorter diagonales, closer to the center, slightly overlapping visually to look like an active codebase
  const branchData = [
    branchPath({ x0: x1, dir: -1, diagX: 25, diagY: 45, run: 85 }),
    branchPath({ x0: x2, dir: 1,  diagX: 20, diagY: 35, run: 95 }),
    branchPath({ x0: x3, dir: -1, diagX: 30, diagY: 50, run: 75 }),
    branchPath({ x0: x4, dir: 1,  diagX: 20, diagY: 40, run: 80 }),
    branchPath({ x0: x5, dir: -1, diagX: 25, diagY: 45, run: 60 }),
    branchPath({ x0: x6, dir: 1,  diagX: 25, diagY: 35, run: 70 }),
  ];

  return (
    <motion.svg
      viewBox={`0 0 ${width} ${height}`}
      className="pointer-events-none w-full max-w-[1000px] h-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Main Trunk */}
      <motion.path
        d={main}
        fill="none"
        stroke="rgba(17,24,39,0.60)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="miter"
        variants={draw(1.5, 0)}
      />

      {/* Branches & Commit Dots */}
      {branchData.map((b, i) => (
        <motion.g key={i}>
          <motion.path
            d={b.path}
            fill="none"
            stroke={branchColors[i]}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="miter"
            variants={draw(1.0, 0.28 + i * 0.18)}
          />
          <motion.circle
            cx={b.endX}
            cy={b.endY}
            r="5"
            fill={branchColors[i]}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.45 + i * 0.18,
            }}
          />
        </motion.g>
      ))}

      {/* Trunk Dots */}
      <Dot cx={x1} cy={cy} delay={0.2} />
      <Dot cx={x2} cy={cy} delay={0.38} />
      <Dot cx={x3} cy={cy} delay={0.56} />
      <Dot cx={x4} cy={cy} delay={0.74} />
      <Dot cx={x5} cy={cy} delay={0.92} />
      <Dot cx={x6} cy={cy} delay={1.1} />
    </motion.svg>
  );
}

function Dot({ cx, cy, delay }: { cx: number; cy: number; delay: number }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="5"
      fill="rgba(17,24,39,0.75)"
      initial={{ opacity: 0, scale: 0.8, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    />
  );
}

function draw(duration: number, delay: number) {
  return {
    hidden: { pathLength: 0, opacity: 0.25 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration, ease: [0.16, 1, 0.3, 1], delay },
        opacity: { duration: 0.25, delay },
      },
    },
  };
}

/* -------------------- Work Practices -------------------- */

function WorkPractices() {
  return (
    <div className="mt-20 w-full mb-12">
      <header className="max-w-2xl mb-12">
        <h3 className="text-2xl font-semibold text-neutral-900">Au-delà du code</h3>
        <p className="mt-3 text-neutral-600">
          Les méthodes qui me permettent de maintenir la qualité et la vélocité.
        </p>
      </header>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={stepsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <PracticeCard
          title="Agile & Scrum"
          body="Itérations courtes, planification de sprints, dailies et rétrospectives. Je m'adapte rapidement et favorise la livraison continue."
          visual={<AgileVisual />}
        />
        <PracticeCard
          title="Stratégie de Test"
          body="Une pyramide solide : tests unitaires véloces, tests d'intégration (APIs), et tests E2E/AI end-to-end pour les parcours vitaux."
          visual={<TestingPyramid />}
        />
        <PracticeCard
          title="Clean Code & Docs"
          body="Le code est lu bien plus souvent qu'écrit. Je mise sur une architecture claire, un nommage explicite, et des READMEs / TSDoc à jour."
          visual={<CleanCodeVisual />}
        />
      </motion.div>
    </div>
  );
}

const practiceCardItem = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function PracticeCard({ title, body, visual }: { title: string; body: string; visual: React.ReactNode }) {
  return (
    <motion.div
      variants={practiceCardItem}
      className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full"
    >
      <div className="h-32 mb-6 flex items-center justify-center bg-neutral-50/50 rounded-xl border border-black/5">
        {visual}
      </div>
      <h4 className="text-lg font-semibold text-neutral-900">{title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{body}</p>
    </motion.div>
  );
}

function TestingPyramid() {
  return (
    <div className="flex flex-col items-center justify-end h-full w-full gap-[2px] pb-4 pt-8">
      {/* Top: E2E / AI */}
      <motion.div 
        className="w-1/3 bg-blue-500/90 text-white text-[10px] font-medium text-center py-1.5 rounded-t-md shadow-sm"
        whileHover={{ scale: 1.05 }}
      >
        E2E & AI
      </motion.div>
      {/* Middle: Integration */}
      <motion.div 
        className="w-2/3 bg-amber-500/90 text-white text-[10px] font-medium text-center py-1.5 shadow-sm"
        whileHover={{ scale: 1.05 }}
      >
        Intégration
      </motion.div>
      {/* Bottom: Unit */}
      <motion.div 
        className="w-[90%] bg-emerald-500/90 text-white text-[10px] font-medium text-center py-2 rounded-b-md shadow-sm"
        whileHover={{ scale: 1.05 }}
      >
        Tests Unitaires
      </motion.div>
    </div>
  );
}

function AgileVisual() {
  return (
    <div className="flex justify-center gap-3 h-full w-full items-end pb-4 pt-6">
      {/* Todo */}
      <div className="w-10 h-20 bg-white border border-neutral-200 rounded-md shadow-sm flex flex-col p-1.5 gap-1.5 hover:-translate-y-1 transition-transform">
        <div className="w-full h-1 bg-neutral-200 rounded-full" />
        <div className="w-full h-4 bg-neutral-200 rounded-sm" />
        <div className="w-full h-4 bg-neutral-200 rounded-sm" />
      </div>
      {/* In Progress */}
      <div className="w-10 h-20 bg-white border border-neutral-200 rounded-md shadow-sm flex flex-col p-1.5 gap-1.5 hover:-translate-y-1 transition-transform delay-75">
        <div className="w-full h-1 bg-blue-200 rounded-full" />
        <div className="w-full h-4 bg-blue-500 rounded-sm" />
      </div>
      {/* Done */}
      <div className="w-10 h-20 bg-white border border-neutral-200 rounded-md shadow-sm flex flex-col p-1.5 gap-1.5 hover:-translate-y-1 transition-transform delay-150">
        <div className="w-full h-1 bg-emerald-200 rounded-full" />
        <div className="w-full h-4 bg-emerald-500 rounded-sm" />
        <div className="w-full h-4 bg-emerald-500 rounded-sm" />
      </div>
    </div>
  );
}

function CleanCodeVisual() {
  return (
    <div className="flex justify-center items-center h-full w-full pb-2 pt-4 relative">
      <div className="w-20 h-24 bg-neutral-900 rounded-lg p-3 flex flex-col gap-2 shadow-md hover:scale-105 transition-transform duration-300">
        {/* Floating Doc Badge */}
        <div className="absolute -right-1 -top-1 w-6 h-6 bg-white rounded shadow-sm border border-black/10 flex flex-col p-1 gap-[2px]">
            <div className="w-full h-[2px] bg-neutral-300 rounded-full text-[0px]"></div>
            <div className="w-3/4 h-[2px] bg-neutral-300 rounded-full text-[0px]"></div>
            <div className="w-full h-[2px] bg-neutral-300 rounded-full text-[0px]"></div>
        </div>
        
        {/* Code blocks */}
        <div className="w-1/2 h-1.5 bg-fuchsia-400 rounded-sm" />
        <div className="w-full h-1.5 bg-neutral-500/80 rounded-sm mt-1" />
        <div className="w-4/5 h-1.5 bg-neutral-500/80 rounded-sm" />
        <div className="w-full h-1.5 bg-neutral-500/80 rounded-sm" />
        <div className="w-2/3 h-1.5 bg-neutral-500/80 rounded-sm" />
      </div>
    </div>
  );
}
