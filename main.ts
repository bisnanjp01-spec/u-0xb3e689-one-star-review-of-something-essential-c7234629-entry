// One-Star Review of Something Essential.
//
// The entry is one single-line, deadpan one-star review of an everyday
// essential everyone relies on: the blanket. The program writes that one
// line to /output/entry.txt, where the sealed gate checks it is UTF-8 text
// of 1 to 160 characters, not only white space. The line is 110 characters.
//
// No network, no dependencies, no configuration, no randomness: the same
// line on every run, so the two grading runs agree byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. The blanket covers my shoulders or my feet, never both, and has chosen a side every night for years.";

const OUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, REVIEW, "utf8");
console.log(`wrote ${REVIEW.length} characters to ${OUT_PATH}`);
