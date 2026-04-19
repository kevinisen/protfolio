const fs = require('fs');

const code = fs.readFileSync('src/components/sections/Work.tsx', 'utf-8');

// The bottom components we want to KEEP:
// We need to find everything starting from `function StepBlock(` completely down to the end of the file.
const stepBlockIndex = code.indexOf('function StepBlock(');
if (stepBlockIndex === -1) {
  console.log("Could not find function StepBlock");
  process.exit(1);
}

const preservedVisuals = code.substring(stepBlockIndex);

// Also need the top imports and data structures up to `export default function Work() {`
const workIndex = code.indexOf('export default function Work() {');
if (workIndex === -1) {
  console.log("Could not find export default function Work");
  process.exit(1);
}

const topCode = code.substring(0, workIndex);

// Add stepsContainer variants to topCode if it's missing (it was above StepBlock but maybe inside Work?)
// Wait, `const stepsContainer = { ... }` is defined right before `function StepBlock`. Let's find it.
const stepsContainerMatch = code.match(/const stepsContainer[\s\S]*?(?=function StepBlock)/);
const stepsContainerCode = stepsContainerMatch ? stepsContainerMatch[0] : '';
const stepItemMatch = code.match(/const stepItem = [\s\S]*?(?=function StepBlock)/);
let variantsCode = "";
if (code.indexOf("const stepsContainer =") !== -1 && code.indexOf("const stepsContainer =") < stepBlockIndex) {
    const startIndex = code.indexOf("const stepsContainer =");
    variantsCode = code.substring(startIndex, stepBlockIndex);
}

const newLayout = `export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 overflow-x-hidden relative">
      <header className="max-w-2xl mb-24 md:pl-24">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
          Work & Methodologies
        </h2>
        <p className="mt-6 text-xl text-neutral-600 leading-relaxed font-light">
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
          visual={<div className="h-64 md:h-80 flex items-center justify-center"><AIVisual /></div>}
        />

        {/* 2. Git Flow */}
        <TimelineSection 
          title="Git Flow"
          badge="Continuous Integration"
          color="indigo"
          description="A clean repository strategy that favors clarity, fast reviews, and predictable delivery without the overhead of heavy branching models. Main always stays deployable."
          visual={<GitFlowScaleView />}
        />

        {/* 3. Agile */}
        <TimelineSection 
          title="Agile & Scrum"
          badge="Delivery"
          color="blue"
          description="Short iterations, sprint planning, dailies, and retrospectives. I adapt quickly, stay pragmatic about agile rituals, and strongly favor continuous delivery over infinite planning."
          visual={<div className="h-64 flex items-center justify-center scale-150"><AgileVisual /></div>}
        />

        {/* 4. Clean Code */}
        <TimelineSection 
          title="Clean Code & Docs"
          badge="Maintainability"
          color="amber"
          description="Code is read much more often than it's written. I focus on clear architecture, explicit naming, and up-to-date READMEs or TSDoc to ensure long-term maintainability."
          visual={<div className="h-64 flex items-center justify-center scale-150"><CleanCodeVisual /></div>}
        />
      </div>
    </section>
  );
}

function TimelineSection({ title, badge, description, visual, color }: { title: string, badge: string, description: string, visual: React.ReactNode, color: string }) {
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
      className="relative md:pl-24 mb-32 last:mb-0"
    >
      {/* Timeline Dot (Desktop only) */}
      <div className={\`hidden md:block absolute left-[23px] top-4 h-5 w-5 rounded-full bg-white border-[4px] \${dotColor[color as keyof typeof dotColor]} z-10\`} />

      <div className="flex flex-col xl:flex-row gap-12 items-start xl:items-center">
        {/* Text */}
        <div className="flex-1 max-w-xl">
          <div className={\`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm \${colors[color as keyof typeof colors]}\`}>
            {badge}
          </div>
          <h3 className="text-3xl font-bold text-neutral-900 leading-tight">
            {title}
          </h3>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Visual floating right */}
        <div className="flex-1 w-full relative">
          {/* Very subtle glow behind visual to make it pop without a hard box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-black/[0.03] rounded-full blur-[80px] pointer-events-none" />
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
      <div className="w-full flex justify-end xl:justify-center overflow-hidden h-[250px] md:h-[400px] items-center relative z-10">
        <div
          style={{ width: 1000, height: 400, transform: 'scale(min(1, max(0.4, calc(100vw / 1050))))', transformOrigin: 'center center' }}
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
`;

const finalFileContent = topCode + variantsCode + newLayout + preservedVisuals;

fs.writeFileSync('src/components/sections/Work.tsx', finalFileContent);
console.log("Refactoring complete");
