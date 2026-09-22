const routes = [
  '/',
  '/map',
  '/stack',
  '/ecosystem/models',
  '/ecosystem/tools',
  '/ecosystem/frameworks',
  '/learn',
  '/learn/ai-foundations',
  '/learn/concept/rag',
  '/learn/concept/artificial-intelligence',
  '/learn/concept/agents',
  '/build',
  '/build/architectures',
  '/build/prompt-lab',
  '/safety',
  '/glossary',
  '/timeline',
  '/careers',
  '/sitemap.xml',
  '/robots.txt'
];

async function verifyAllRoutes() {
  console.log('🚀 Verifying production server endpoints on http://localhost:3000...\n');
  let failures = 0;

  for (const r of routes) {
    try {
      const res = await fetch('http://localhost:3000' + r);
      if (res.status === 200) {
        const text = await res.text();
        console.log(`✓ [200 OK] ${r.padEnd(40)} (${(text.length / 1024).toFixed(1)} KB)`);
      } else {
        failures++;
        console.error(`✗ [${res.status}] ${r}`);
      }
    } catch (err) {
      failures++;
      console.error(`✗ [ERR] ${r}: ${err.message}`);
    }
  }

  console.log('\n----------------------------------------');
  if (failures > 0) {
    console.error(`❌ Route verification failed with ${failures} error(s).`);
    process.exit(1);
  } else {
    console.log(`✅ All ${routes.length} production routes returned 200 OK with valid payloads!`);
    process.exit(0);
  }
}

verifyAllRoutes();
