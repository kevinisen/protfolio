const fs = require('fs');

let code = fs.readFileSync('src/components/sections/Work.tsx', 'utf-8');

// Remove duplicate `stepsContainer` and `stepItem`
code = code.replace(/const stepsContainer[\s\S]*?const stepItem[\s\S]*?(?=export default function Work)/, '');

fs.writeFileSync('src/components/sections/Work.tsx', code);
