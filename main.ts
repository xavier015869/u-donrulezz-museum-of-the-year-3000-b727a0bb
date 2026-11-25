// Museum of the Year 3000 — u-donrulezz-museum-of-the-year-3000-b727a0bb
// Writes one museum label (1-200 chars, single line) to /output/entry.txt.
// The label: a deadpan year-3000 curator's note beside a CAPTCHA, misreading
// the 21st-century ritual of proving you are human by spotting traffic lights.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "CAPTCHA, c. 2023. To prove they were human, citizens identified every traffic light in a grid. The machines took notes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the sealed scorer only accepts 1-200 chars of non-blank,
// single-line UTF-8 text. Fail loudly instead of shipping an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(
    `entry fails the 1-200 char single-line gate (${ENTRY.length} chars)`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
