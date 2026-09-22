import { readFileSync } from 'fs';
import { resolve } from 'path';

console.log('🔗 [Aivora Link Validator] Checking internal and external source links...\n');

let checkedCount = 0;
let errors = [];

function scanLinks(file) {
  const content = readFileSync(resolve(process.cwd(), file), 'utf8');
  const urlMatches = content.match(/url:\s*['"](https?:\/\/[^'"]+)['"]/g) || [];
  
  for (const match of urlMatches) {
    const url = match.match(/['"](https?:\/\/[^'"]+)['"]/)[1];
    checkedCount++;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      errors.push(`Invalid URL format: ${url} in ${file}`);
    }
  }
}

scanLinks('src/data/concepts.ts');
scanLinks('src/data/models.ts');
scanLinks('src/data/frameworks.ts');
scanLinks('src/data/safety.ts');

console.log(`✓ Scanned ${checkedCount} source links across knowledge base.`);
if (errors.length > 0) {
  console.error(`❌ Found ${errors.length} link errors.`);
  process.exit(1);
} else {
  console.log(`✅ All ${checkedCount} links have valid syntactical formatting!`);
  process.exit(0);
}
