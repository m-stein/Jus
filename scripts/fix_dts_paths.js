import fs from 'node:fs';

const DTS_PATH = 'types/jus.d.ts';

let text = fs.readFileSync(DTS_PATH, 'utf8');

// Regex to find all `declare module "..."` or `declare module '...'`
const moduleRegex = /declare module ['"]([^'"]+)['"]/g;

const modules = new Set();
let match;

// Collect all module names
while ((match = moduleRegex.exec(text)) !== null) {
    const name = match[1];

    // Only keep modules that do not already end with .js
    if (!name.endsWith('.js')) {
        modules.add(name);
    }
}

// Detect already existing .js modules to avoid duplicates
const existingJsModules = new Set();
const jsRegex = /declare module ['"]([^'"]+\.js)['"]/g;

while ((match = jsRegex.exec(text)) !== null) {
    existingJsModules.add(match[1]);
}

let aliases = '';

// Generate alias modules
for (const mod of modules) {
    const jsMod = `${mod}.js`;

    if (!existingJsModules.has(jsMod)) {
        aliases += `

declare module '${jsMod}' {
    export * from '${mod}';
}
`;
    }
}

// Append aliases if any were generated
if (aliases.length > 0) {
    text += '\n' + aliases;
    fs.writeFileSync(DTS_PATH, text, 'utf8');
    console.log(`Added ${modules.size} .js module aliases`);
} else {
    console.log('No aliases needed');
}