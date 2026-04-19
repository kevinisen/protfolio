const fs = require('fs');

const code = fs.readFileSync('src/components/sections/Work.tsx', 'utf-8');

// Seems like `newLayout` was appended correctly before `preservedVisuals`, but maybe it copied `topCode` that included `Work` and other stuff, leaving the original `Work()` inside `topCode`.
// Yes! `workIndex` was used to substring `topCode`, but `variantsCode` was ALSO extracted from `topCode`. And wait, the new format contains `export default function Work() {` in `newLayout`.
// If `topCode` contains `export default function Work`, we have duplicates.

const lastIndexWorkImport = code.lastIndexOf('export default function Work');
const topPart = code.substring(0, code.indexOf('export default function Work', code.indexOf('orderedSteps')));

// Actually let's just search for the first `export default function Work` and delete it up to `/* -------------------- Blocks -------------------- */` right above the second `export default function Work`.
let cleanedCode = code.replace(/export default function Work\(\) \{[\s\S]*?(?=\/\* -------------------- Blocks -------------------- \*\/)/, '');

fs.writeFileSync('src/components/sections/Work.tsx', cleanedCode);
