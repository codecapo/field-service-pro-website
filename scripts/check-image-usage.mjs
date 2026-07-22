/* Every photograph appears in exactly one place.

   A reused image is invisible in review — nothing breaks, the build passes, and
   you only catch it by noticing the same block on two pages. That is precisely
   the sort of thing that reads as a stretched stock library, so it is checked
   rather than remembered.

   Also reports images on disk that nothing references, which is how the old
   dark set and the disabled /platform band would otherwise sit there forever.

       node scripts/check-image-usage.mjs

   Exits non-zero on a duplicate, so it can gate a build if you want it to. */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC_DIRS = ["app", "components", "lib"];
const IMG_DIR = path.join(ROOT, "public/images");
const REF = /\/images\/([a-z0-9-]+\.(?:jpg|jpeg|png|webp|svg))/gi;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(tsx?|mdx?)$/.test(e.name)) out.push(p);
  }
  return out;
}

/** image filename -> list of source files referencing it */
const uses = new Map();
for (const dir of SRC_DIRS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    const code = fs.readFileSync(file, "utf8");
    for (const m of code.matchAll(REF)) {
      const name = m[1];
      if (!uses.has(name)) uses.set(name, []);
      uses.get(name).push(path.relative(ROOT, file));
    }
  }
}

const duplicates = [...uses].filter(([, files]) => files.length > 1);
/* Files on disk that nothing points at. Subdirectories (_original, superseded)
   are archives by design and are not reported. */
const onDisk = fs.existsSync(IMG_DIR)
  ? fs.readdirSync(IMG_DIR, { withFileTypes: true }).filter((e) => e.isFile()).map((e) => e.name)
  : [];
const orphans = onDisk.filter((f) => !uses.has(f));

console.log(`${uses.size} images referenced, ${onDisk.length} on disk\n`);

if (duplicates.length) {
  console.log("DUPLICATES — each image should appear in exactly one place:");
  for (const [name, files] of duplicates) {
    console.log(`  ${name}`);
    for (const f of files) console.log(`      ${f}`);
  }
} else {
  console.log("No duplicates — every referenced image is used exactly once.");
}

if (orphans.length) {
  console.log(`\nUnreferenced on disk (${orphans.length}):`);
  for (const f of orphans) console.log(`  ${f}`);
}

process.exit(duplicates.length ? 1 : 0);
