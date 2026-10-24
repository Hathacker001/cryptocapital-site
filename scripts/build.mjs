import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('../', import.meta.url)));
const outputDirectory = resolve(projectRoot, 'dist');
const publicDirectory = resolve(projectRoot, 'public');

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const fileName of ['index.html', 'site.css', 'site.js']) {
  await cp(resolve(projectRoot, fileName), resolve(outputDirectory, fileName));
}

for (const entry of await readdir(publicDirectory, { withFileTypes: true })) {
  await cp(
    resolve(publicDirectory, entry.name),
    resolve(outputDirectory, entry.name),
    { recursive: entry.isDirectory() },
  );
}

console.log('Built static site into dist/.');
