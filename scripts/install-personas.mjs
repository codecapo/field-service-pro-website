/* Installs the chosen Higgsfield generations as the site photography.

   Four rounds got here and the reasons are worth keeping, because each was a
   different failure:
     1. Lit as night scenes — only tone-mappable so far.
     2. Bright but glossy corporate stock, and showed no real subject matter.
     3. Problem-led documentary (mould, dead-signal decks) — accurate to the
        copy but a downbeat wall of images that fought the brand.
     4. This set: editorial portraits with gravitas. Direct gaze, natural
        window light, senior and credible. Authority rather than either gloss
        or gloom.

   Two hard-won prompting notes:
   - Prompts that *name* text ("no captions, no watermarks") reliably summoned
     hallucinated gibberish captions. Prompts that never mention text come back
     clean. Every file here was checked by eye for burnt-in lettering.
   - Gravitas comes with moodier light, so the darkest frames get a gentle lift
     below — enough to read on a warm page, not enough to flatten the modelling
     that makes them feel authoritative.

   Superseded files are archived rather than deleted, and the _original backups
   are replaced too: stale backups would mean a later tonemap-photos.mjs run
   silently resurrected an old set. */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const GEN =
  "/private/tmp/claude-501/-Users-mayurkale-Development-field-service-pro-website/0106fe9d-1509-4d84-bed5-0035d9a5d361/scratchpad/gen";
const DIR = "/Users/mayurkale/Development/field-service-pro-website/public/images";
const BACKUP = path.join(DIR, "_original");
const ARCHIVE = path.join(BACKUP, "superseded");

/* Portraits render through PhotoPanel at 1000x1250 (4:5); bands render
   full-bleed through PhotoBand. Both ship at 2x for retina. */
/* Place for the organisations, people for the roles.

   Camden, Hackney, Hillingdon and Westminster all lead with place, residents
   and visible work rather than staff portraits, so the two audiences that are
   *organisations* (local authorities, housing associations) are represented by
   the stock they are accountable for. The two that are *roles* (surveyor,
   compliance lead) stay as portraits. The alternation also stops the row
   reading as four near-identical headshots.

   Both estate photographs are deliberately UK-specific — red post box, wheelie
   bins, balcony access decks, black railings. Earlier attempts came back as US
   suburban apartment blocks, which a British housing audience spots instantly. */
const PICKS = [
  { gen: "uk-c", dest: "persona-councils.jpg", w: 1200, h: 1500 },
  { gen: "ha-a", dest: "persona-has.jpg", w: 1200, h: 1500 },
  { gen: "a-supp-a", dest: "persona-suppliers.jpg", w: 1200, h: 1500 },
  /* Warm, not stern. The earlier gravitas portrait read as severe rather than
     authoritative — hard side light, dark clothing, unsmiling, a dim room.
     Holding a document was dropped too: every generation that included one
     came back with hallucinated gibberish printed on it. */
  { gen: "w2-c", dest: "persona-compliance.jpg", w: 1200, h: 1500 },
  { gen: "prs-a", dest: "persona-landlords.jpg", w: 1200, h: 1500 },
  { gen: "v2-field-a", dest: "field-band.jpg", w: 2000, h: 1125 },
  { gen: "v2-cta-a", dest: "cta-band.jpg", w: 2000, h: 1125 },

  /* Platform page bands. Each is composed with the subject to the right and
     open space to the left, because PhotoBand sets its copy against the left
     edge — a centred subject would sit under the headline. */
  { gen: "p-surv-a", dest: "band-surveys.jpg", w: 2000, h: 1125 },
  { gen: "p-asset-a", dest: "band-asset.jpg", w: 2000, h: 1125 },
  { gen: "p-comp-a", dest: "band-compliance.jpg", w: 2000, h: 1125 },
  { gen: "p-rep-b", dest: "band-reporting.jpg", w: 2000, h: 1125 },
  { gen: "q-plat-a", dest: "band-platform.jpg", w: 2000, h: 1125 },
  { gen: "q-sec-a", dest: "band-security.jpg", w: 2000, h: 1125 },
  { gen: "q-con-a", dest: "band-contact.jpg", w: 2000, h: 1125 },
  { gen: "q-sec-b", dest: "band-resources.jpg", w: 2000, h: 1125 },

  /* Solutions gets its own set rather than borrowing the homepage audience
     photos. Every image on the site appears in exactly one place — a repeat
     reads as a stock library being stretched, and the homepage row is the one
     that has to feel like a considered cast. These are alternate frames from
     the same shoots, so the two pages still look related without being the
     same pictures. Enforced by scripts/check-image-usage.mjs. */
  { gen: "uk-b", dest: "solution-asset.jpg", w: 1200, h: 1500 },
  { gen: "p-surv-b", dest: "solution-field.jpg", w: 1200, h: 1500 },
  { gen: "w2-a", dest: "solution-compliance.jpg", w: 1200, h: 1500 },
  { gen: "prs-b", dest: "solution-landlords.jpg", w: 1200, h: 1500 },
  { gen: "q-plat-b", dest: "solution-partners.jpg", w: 1200, h: 1500 },

  /* Fourth showcase slot on three platform pages. Each page had the same coded
     mockup repeated down it; the strongest three slots now carry a distinct
     real product screen and the fourth carries a photograph instead — which
     breaks the repetition and puts people on pages that were entirely UI. */
  /* "Condition and lifecycle, kept with the component" — the building fabric
     itself, not a person at a desk. Sash windows, roof tiles, brickwork and a
     downpipe are literally the components that carry an age, an expected life
     and a replacement date, so the photograph argues the same point the copy
     does. An interior of an empty kitchen was the obvious alternative and was
     rejected: it read as a derelict void rather than a home partway through
     its life. */
  { gen: "lc-ext-b", dest: "feature-lifecycle.jpg", w: 1400, h: 1050 },
  { gen: "w2-b", dest: "feature-answers.jpg", w: 1400, h: 1050 },
  { gen: "p-rep-a", dest: "feature-understand.jpg", w: 1400, h: 1050 },
];

/* Lift only what is genuinely too dark to read, and only part-way. */
const FLOOR = 92;
const TARGET = 104;

const meanOf = async (input) => {
  const s = await sharp(input).stats();
  return s.channels.slice(0, 3).reduce((a, c) => a + c.mean, 0) / 3;
};

fs.mkdirSync(ARCHIVE, { recursive: true });

for (const { gen, dest, w, h } of PICKS) {
  const src = path.join(GEN, `${gen}.png`);
  const live = path.join(DIR, dest);
  const backup = path.join(BACKUP, dest);

  for (const [from, label] of [
    [live, "live"],
    [backup, "backup"],
  ]) {
    if (fs.existsSync(from)) fs.renameSync(from, path.join(ARCHIVE, `${label}-${dest}`));
  }

  const before = await meanOf(src);
  let pipe = sharp(src).resize(w, h, { fit: "cover", position: "attention" });
  if (before < FLOOR) {
    const boost = Math.min(TARGET / before, 1.45);
    pipe = pipe.modulate({ brightness: boost, saturation: 1.03 });
  }

  const buf = await pipe.jpeg({ quality: 88, mozjpeg: true }).toBuffer();
  fs.writeFileSync(live, buf);
  fs.writeFileSync(backup, buf);

  const after = await meanOf(buf);
  console.log(
    `${dest.padEnd(24)} <- ${gen.padEnd(12)} ${before.toFixed(1).padStart(5)} -> ${after.toFixed(1).padStart(5)}  ${(buf.length / 1024).toFixed(0)}kb`,
  );
}
