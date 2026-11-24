import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "One star. He bought a $400 cat tree, then looked betrayed when I slept in the box. I am reviewing the box. Five stars for the box.";

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, line);
