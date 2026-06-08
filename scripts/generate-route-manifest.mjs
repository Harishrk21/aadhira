/**
 * Build-time route list for Netlify edge 404 handling.
 * Parses sitemap.xml plus SPA slug aliases not listed there.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');

const paths = new Set(['/']);

for (const match of sitemap.matchAll(/<loc>https:\/\/aruratherapy\.in([^<]*)<\/loc>/g)) {
  const raw = match[1] || '/';
  const normalized = raw.replace(/\/$/, '') || '/';
  paths.add(normalized);
}

// SPA aliases handled by React Router
paths.add('/services/behaviour-therapy');
paths.add('/programs/handwriting-training');

const manifest = { paths: [...paths].sort() };
const outDir = join(root, 'netlify/shared');
mkdirSync(outDir, { recursive: true });
const js = `export default ${JSON.stringify(manifest, null, 2)};\n`;
writeFileSync(join(outDir, 'route-manifest.mjs'), js);
console.log(`route-manifest.mjs: ${manifest.paths.length} paths`);
