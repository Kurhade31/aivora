import { readFileSync } from 'fs';
import { resolve } from 'path';

// Content validation runner for Aivora
console.log('🔍 [Aivora Content Validator] Starting content integrity verification...\n');

let errors = [];
let warnings = [];

// Helper to check TS file content
function checkFile(path, name) {
  try {
    const fullPath = resolve(process.cwd(), path);
    const content = readFileSync(fullPath, 'utf8');
    if (!content || content.length < 50) {
      errors.push(`[${name}] File is empty or malformed: ${path}`);
      return;
    }
    
    // Check for forbidden placeholder patterns
    const forbidden = ['TODO', 'Lorem ipsum', 'fake', 'TBD'];
    for (const word of forbidden) {
      if (content.includes(word) && !content.includes(`disallowed_substring: "${word}"`)) {
        // Exception for actual safety benchmark test case
        warnings.push(`[${name}] Possible placeholder '${word}' detected in ${path}`);
      }
    }
    console.log(`✓ [${name}] Syntactic scan passed (${(content.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    errors.push(`[${name}] Failed to read file: ${err.message}`);
  }
}

checkFile('src/data/concepts.ts', 'Concepts');
checkFile('src/data/models.ts', 'Models');
checkFile('src/data/tools.ts', 'Tools');
checkFile('src/data/frameworks.ts', 'Frameworks');
checkFile('src/data/architectures.ts', 'Architectures');
checkFile('src/data/projects.ts', 'Projects');
checkFile('src/data/roadmaps.ts', 'Roadmaps');
checkFile('src/data/safety.ts', 'Safety');
checkFile('src/data/glossary.ts', 'Glossary');
checkFile('src/data/timeline.ts', 'Timeline');
checkFile('src/data/careers.ts', 'Careers');

console.log('\n----------------------------------------');
if (errors.length > 0) {
  console.error(`❌ Validation failed with ${errors.length} error(s):`);
  errors.forEach(e => console.error(`   - ${e}`));
  process.exit(1);
} else {
  console.log(`✅ All content files verified successfully! Warnings: ${warnings.length}`);
  process.exit(0);
}
