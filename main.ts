// Everyday Things, Two Lines — entry program (Node, stdlib only).
// Writes exactly two lines to (MAKEFUN_OUTPUT_DIR || "/output")/entry.txt,
// no trailing newline. Total must be 1-400 UTF-8 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "An echo is a wall playing copycat, throwing your words back at you a moment after you shout.";
const LINE_2 =
  "The copycat part fits because sound bounces off a hard, flat wall and comes back to your ears, but it leaves out that soft curtains swallow the sound and open fields let it drift away, so sometimes nothing answers back.";

const text = LINE_1 + "\n" + LINE_2;

function fail(message: string): never {
  throw new Error("entry validation failed: " + message);
}

// Gate validation: exactly 2 lines, 1-400 chars, no trailing newline.
const lines = text.split("\n");
if (lines.length !== 2) fail(`expected 2 lines, got ${lines.length}`);
if (text.endsWith("\n")) fail("trailing newline not allowed");
if (text.length < 1 || text.length > 400) {
  fail(`total length ${text.length} outside 1-400`);
}
for (const [i, line] of lines.entries()) {
  if (line.trim().length === 0) fail(`line ${i + 1} is blank`);
  // Each line must be exactly one sentence: one terminal punctuation mark,
  // at the very end, and no other sentence-ending punctuation inside.
  const terminators = line.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !/[.!?]$/.test(line)) {
    fail(`line ${i + 1} is not exactly one sentence`);
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
