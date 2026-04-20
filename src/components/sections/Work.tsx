"use client";

import { motion } from "framer-motion";

type Step = {
  side: "top" | "bottom";
  title: string;
  offsetX?: number; // px
};

const orderedSteps: Step[] = [
  {
    side: "top",
    title: "Main stays deployable",
    offsetX: -20,
  },
  {
    side: "bottom",
    title: "Feature branches",
    offsetX: 10,
  },
  {
    side: "top",
    title: "PR hygiene & reviews",
    offsetX: 10,
  },
  {
    side: "bottom",
    title: "Safe merges & releases",
    offsetX: -10,
  },
];


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

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-12 relative w-full">
      <header className="max-w-2xl mb-20">
        <h2 className="text-2xl font-semibold text-neutral-900">Work & Methodologies</h2>
        <p className="mt-3 text-[15px] sm:text-base text-neutral-600 leading-relaxed">
          The tools, flows, and frameworks that power my daily workflow. Less boxes, more focus on the craftsmanship.
        </p>
      </header>

      <div className="relative">
        {/* The Timeline Line (Only on md+ to allow full width floating on mobile) */}
        <div className="hidden md:block absolute left-[31px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-transparent" />

        {/* 1. AI */}
        <TimelineSection 
          title="Working with AI, not relying on it"
          badge="Next-Gen Workflow"
          color="purple"
          description="Artificial intelligence is at the core of my methodology. I use it to optimize context, structure complex tasks, and integrate seamlessly into real development flows while keeping absolute control over the output."
          visual={<div className="flex items-center justify-start xl:justify-center py-12"><AIVisual /></div>}
        />

        {/* 2. Git Flow */}
        <TimelineSection 
          title="Git Flow"
          badge="Continuous Integration"
          color="indigo"
          fullWidth={true}
          removeBottomMargin={true}
          description="A clean repository strategy that favors clarity, fast reviews, and predictable delivery without the overhead of heavy branching models. Main always stays deployable."
          visual={<div className="flex items-center justify-start xl:justify-center w-full mt-4"><GitFlowScaleView /></div>}
        />

        {/* 3. Clean Code */}
        <TimelineSection 
          title="Clean Code & Docs"
          badge="Maintainability"
          color="amber"
          description="I focus on clear structure, explicit naming, and useful documentation to keep code easy to maintain over time."
          visual={<div className="flex items-center justify-start xl:justify-center py-12"><CleanCodeVisual /></div>}
        />

        {/* 4. Agile */}
        <TimelineSection 
          title="Agile & Scrum"
          badge="Delivery"
          color="blue"
          description="Sprint planning, daily stand-ups, reviews, and retrospectives.
I’m comfortable working within this rhythm and adapt easily to it."
          visual={<div className="flex items-center justify-start xl:justify-center py-12"><AgileVisual /></div>}
        />
      </div>
    </section>
  );
}

function TimelineSection({ title, badge, description, visual, color, fullWidth = false, removeBottomMargin = false }: { title: string, badge: string, description: string, visual: React.ReactNode, color: string, fullWidth?: boolean, removeBottomMargin?: boolean }) {
  const colors = {
    purple: "text-purple-700 bg-purple-500/10 border-purple-500/20",
    indigo: "text-indigo-700 bg-indigo-500/10 border-indigo-500/20",
    blue: "text-blue-700 bg-blue-500/10 border-blue-500/20",
    amber: "text-amber-700 bg-amber-500/10 border-amber-500/20",
  };
  const dotColor = {
    purple: "border-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.6)]",
    indigo: "border-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.6)]",
    blue: "border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.6)]",
    amber: "border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.6)]",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative md:pl-24 ${removeBottomMargin ? 'mb-0' : 'mb-32 last:mb-0'}`}
    >
      <div className={`flex flex-col ${fullWidth ? 'gap-8' : 'xl:flex-row gap-12 xl:items-center'}`}>
        {/* Text */}
        <div className={`flex-1 relative w-full ${fullWidth ? 'max-w-3xl' : 'max-w-xl'}`}>
          {/* Timeline Dot (Desktop only) */}
          <div className={`hidden md:block absolute -left-[74px] top-[4px] h-5 w-5 rounded-full bg-white border-[4px] ${dotColor[color as keyof typeof dotColor]} z-10`} />

          <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${colors[color as keyof typeof colors]}`}>
            {badge}
          </div>
          <h3 className="text-3xl font-bold text-neutral-900 leading-tight">
            {title}
          </h3>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Visual floating right / below */}
        <div className={fullWidth ? "w-full relative mt-4" : "flex-1 w-full relative"}>
          {/* Very subtle glow behind visual to make it pop without a hard box */}
          {!fullWidth && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-black/[0.03] rounded-full blur-[80px] pointer-events-none" />}
          <div className="relative z-10 w-full drop-shadow-sm">
            {visual}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GitFlowScaleView() {
  return (
      <div className="w-full flex justify-center overflow-hidden h-[250px] md:h-[400px] items-center relative z-10">
        <div
          style={{ width: 1000, height: 400, transform: 'scale(min(1, calc((100vw - 100px) / 1050)))', transformOrigin: 'center center' }}
          className="relative shrink-0 flex items-center justify-center pointer-events-none"
        >
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
  );
}

/* -------------------- Blocks -------------------- */
function StepBlock({ step, index }: { step: Step; index: number }) {
  const isTop = step.side === "top";
  const offsetStyle = step.offsetX ? { transform: `translateX(${step.offsetX}px)` } : undefined;

  // Smaller margins for pill size
  const yOffsetClass = isTop ? "mb-[11rem]" : "mt-[11rem]";
  
  return (
    <motion.div
      className={`inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 shadow-sm snap-center ${yOffsetClass}`}
      style={offsetStyle}
      variants={stepItem}
      custom={{ side: step.side }}
    >
      <span className="flex shrink-0 items-center justify-center w-5 h-5 rounded-full bg-indigo-50 text-[10px] font-bold text-indigo-500">
        {index + 1}
      </span>
      <p className="text-sm font-medium text-neutral-800 whitespace-nowrap">{step.title}</p>
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
              ease: [0.16, 1, 0.3, 1] as const,
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
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay }}
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
        pathLength: { duration, ease: [0.16, 1, 0.3, 1] as const, delay },
        opacity: { duration: 0.25, delay },
      },
    },
  };
}

/* -------------------- Work Practices -------------------- */

function WorkPractices() {
  return (
    <div className="w-full mb-12">
      

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={stepsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <PracticeCard
          title="Agile & Scrum"
          body="Short iterations, sprint planning, dailies, and retrospectives. I adapt quickly and favor continuous delivery."
          visual={<AgileVisual />}
        />
        <PracticeCard
          title="Clean Code & Docs"
          body="Code is read much more often than it's written. I focus on clear architecture, explicit naming, and up-to-date READMEs / TSDoc."
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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function PracticeCard({ title, body, visual }: { title: string; body: string; visual: React.ReactNode }) {
  return (
    <motion.div
      variants={practiceCardItem}
      className="group relative flex flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full overflow-hidden"
    >
      {/* Decorative gradient blur */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-zinc-200/50 rounded-full blur-[60px] pointer-events-none group-hover:bg-indigo-300/30 transition-colors duration-500" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-zinc-100/50 rounded-full blur-[60px] pointer-events-none group-hover:bg-purple-300/30 transition-colors duration-500" />

      <div className="relative z-10 h-32 mb-8 flex items-center justify-center bg-neutral-50/50 rounded-2xl border border-black/5 group-hover:border-indigo-100/50 transition-colors">
        {visual}
      </div>
      <h4 className="relative z-10 text-lg font-semibold text-neutral-900 group-hover:text-indigo-950 transition-colors">
        {title}
      </h4>
      <p className="relative z-10 mt-3 text-sm leading-relaxed text-neutral-600">
        {body}
      </p>
    </motion.div>
  );
}

function AgileVisual() {
  return (
    <div className="flex justify-center gap-4 h-full items-center">
      {/* Todo */}
      <div className="w-16 h-32 bg-white border border-neutral-200 rounded-lg shadow-md flex flex-col p-2.5 gap-2.5 hover:-translate-y-2 transition-transform">
        <div className="w-full h-1.5 bg-neutral-200 rounded-full" />
        <div className="w-full h-6 bg-neutral-200 rounded-md" />
        <div className="w-full h-6 bg-neutral-200 rounded-md" />
      </div>
      {/* In Progress */}
      <div className="w-16 h-32 bg-white border border-neutral-200 rounded-lg shadow-md flex flex-col p-2.5 gap-2.5 hover:-translate-y-2 transition-transform delay-75">
        <div className="w-full h-1.5 bg-indigo-200 rounded-full" />
        <div className="w-full h-6 bg-indigo-400 rounded-md" />
      </div>
      {/* Done */}
      <div className="w-16 h-32 bg-white border border-neutral-200 rounded-lg shadow-md flex flex-col p-2.5 gap-2.5 hover:-translate-y-2 transition-transform delay-150">
        <div className="w-full h-1.5 bg-purple-200 rounded-full" />
        <div className="w-full h-6 bg-purple-500 rounded-md" />
        <div className="w-full h-6 bg-purple-500 rounded-md" />
      </div>
    </div>
  );
}

function CleanCodeVisual() {
  return (
    <div className="flex justify-center items-center h-full pb-2 pt-4 relative">
      <div className="w-32 h-40 bg-neutral-900 rounded-xl p-4 flex flex-col gap-3 shadow-xl hover:scale-105 transition-transform duration-300">
        {/* Floating Doc Badge */}
        <div className="absolute -right-2 -top-2 w-10 h-10 bg-white rounded-md shadow-md border border-black/10 flex flex-col p-1.5 gap-[3px]">
            <div className="w-full h-[3px] bg-neutral-300 rounded-full text-[0px]"></div>
            <div className="w-3/4 h-[3px] bg-neutral-300 rounded-full text-[0px]"></div>
            <div className="w-full h-[3px] bg-neutral-300 rounded-full text-[0px]"></div>
        </div>
        
        {/* Code blocks */}
        <div className="w-1/2 h-2.5 bg-fuchsia-400 rounded-sm" />
        <div className="w-full h-2.5 bg-neutral-500/80 rounded-sm mt-1" />
        <div className="w-4/5 h-2.5 bg-neutral-500/80 rounded-sm" />
        <div className="w-full h-2.5 bg-neutral-500/80 rounded-sm" />
        <div className="w-2/3 h-2.5 bg-neutral-500/80 rounded-sm" />
      </div>
    </div>
  );
}


function AIVisual() {
  return (
    <div className="flex justify-center items-center h-full relative">
      <div className="flex items-center gap-2">
        {/* Token node 1 */}
        <motion.div 
          className="w-8 h-8 rounded-full border-2 border-purple-500/30 flex items-center justify-center bg-purple-50"
          animate={{ scale: [1, 1.1, 1], borderColor: ["rgba(168,85,247,0.3)", "rgba(168,85,247,0.8)", "rgba(168,85,247,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-2.5 h-2.5 bg-purple-500 rounded-full" />
        </motion.div>
        
        {/* Connecting line */}
        <div className="w-8 h-0.5 bg-gradient-to-r from-purple-200 to-indigo-200 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-purple-500 to-indigo-500"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Central AI core */}
        <motion.div 
          className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 shadow-lg shadow-indigo-500/30 flex items-center justify-center relative"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-white text-lg font-bold">AI</span>
          
          {/* Sparkles */}
          <motion.div 
            className="absolute -top-2 -right-1 w-2 h-2 bg-yellow-300 rounded-full"
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-1 -left-2 w-1.5 h-1.5 bg-cyan-300 rounded-full"
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Connecting line */}
        <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-indigo-500 to-purple-500"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.5, delay: 0.75, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Token node 2 */}
        <motion.div 
          className="w-8 h-8 flex flex-col gap-1 items-center justify-center p-1 rounded bg-white shadow-sm border border-neutral-200"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Simulating code lines coming out */}
          <div className="w-full h-1 bg-indigo-400 rounded-full" />
          <div className="w-4/5 h-1 bg-indigo-300 rounded-full" />
          <div className="w-full h-1 bg-purple-400 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}
