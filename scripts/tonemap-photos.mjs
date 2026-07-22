/* One-shot tone-map for the Higgsfield photography, which came back lit as
   night scenes. Originals are preserved in public/images/_original and every
   run re-derives from those, so repeated runs never compound.

   Adaptive: the lift is sized from each image's own mean luminance toward a
   target, and capped. Images already at or above target (the two full-bleed
   bands, which are deliberately dimmed again in CSS) pass through untouched. */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const DIR = "/Users/mayurkale/Development/field-service-pro-website/public/images";
const BACKUP = path.join(DIR, "_original");
fs.mkdirSync(BACKUP, { recursive: true });

const TARGET_MEAN = 100; // where a mid-key editorial photo tends to sit
const MAX_BOOST = 2.6; // beyond this, shadow noise starts to show

const meanOf = async (file) => {
  const s = await sharp(file).stats();
  return s.channels.slice(0, 3).reduce((a, c) => a + c.mean, 0) / 3;
};

for (const f of fs.readdirSync(DIR).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const src = path.join(DIR, f);
  const backup = path.join(BACKUP, f);
  if (!fs.existsSync(backup)) fs.copyFileSync(src, backup);

  const before = await meanOf(backup);
  const boost = Math.min(Math.max(TARGET_MEAN / before, 1), MAX_BOOST);

  if (boost <= 1.02) {
    fs.copyFileSync(backup, src);
    console.log(`${f.padEnd(26)} mean ${before.toFixed(1).padStart(5)}  — already bright, left alone`);
    continue;
  }

  await sharp(backup)
    // Open the blacks first, then raise overall exposure. Saturation creeps up
    // a little because lifting a dark frame washes colour out.
    .linear(1.25, 30 * (boost - 1))
    .modulate({ brightness: boost * 0.95, saturation: 1.14 })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(src + ".tmp");
  fs.renameSync(src + ".tmp", src);

  const after = await meanOf(src);
  console.log(
    `${f.padEnd(26)} mean ${before.toFixed(1).padStart(5)} -> ${after.toFixed(1).padStart(5)}  (x${boost.toFixed(2)})`,
  );
}
