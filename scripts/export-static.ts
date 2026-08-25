// Renders the NestJS app's routes to plain .html files and copies the public
// assets alongside them, producing a fully static output folder — because the
// deployed site itself is static (GitHub Pages), even though it's built with
// NestJS views + a data-driven menu during development.
import { createApp } from '../src/main';
import { mkdirSync, writeFileSync, cpSync, rmSync, existsSync } from 'fs';
import { join } from 'path';
import * as http from 'http';

const OUT_DIR = join(__dirname, '..', 'docs');

// Every server-rendered route to export. Add here if more pages are added later.
const ROUTES = ['/'];

async function fetchBody(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

async function main() {
  if (existsSync(OUT_DIR)) rmSync(OUT_DIR, { recursive: true, force: true });
  mkdirSync(OUT_DIR, { recursive: true });

  const app = await createApp();
  await app.listen(0);
  const address = app.getHttpServer().address();
  const port = typeof address === 'object' && address ? address.port : 0;
  const base = `http://127.0.0.1:${port}`;

  for (const route of ROUTES) {
    const html = await fetchBody(base + route);
    const fileName = route === '/' ? 'index.html' : `${route.replace(/^\//, '')}.html`;
    writeFileSync(join(OUT_DIR, fileName), html, 'utf8');
    console.log(`wrote ${fileName}`);
  }

  await app.close();

  cpSync(join(__dirname, '..', 'public'), OUT_DIR, { recursive: true });
  console.log(`copied public/ assets into ${OUT_DIR}`);
  console.log(`\nStatic export complete: ${OUT_DIR}`);
  // Nest/Express can leave open handles after app.close(); exit explicitly
  // so this script terminates cleanly when run from npm/CI.
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
