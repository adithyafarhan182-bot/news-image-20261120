// news-image-20261120: a one-file program (Node 22, standard library only).
// The entry image lives beside this file as entry.png; the program copies it
// to the output directory the grader provides. Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Make sure the output directory exists (the grader provides /output, but a
// local run with MAKEFUN_OUTPUT_DIR=out needs the folder created first).
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
