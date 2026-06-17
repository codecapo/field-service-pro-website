# Field Service Pro — Website Imagery Prompts

A ready-to-use brief for generating the website's people imagery in **TikTok Symphony**
(or any image generator). The goal: AI-generated photos of real-feeling people doing
housing / asset-management work, used as backgrounds and cards — the bookedcalls.ai look,
in our brand.

Once you've generated the images, save each at the **exact filename/path** listed and
the site will pick them up when we wire the image slots in (the layout is ready for them).

---

## 0. Shared style guide (apply to EVERY prompt for cohesion)

Append this style block to every prompt so the whole set looks like one shoot, not a
random gallery:

> **Style:** candid documentary editorial photography, authentic UK social-housing
> context, natural soft daylight, shallow depth of field (f/2.0), 35mm lens look,
> true-to-life skin tones, muted contemporary colour palette with cool blue-violet
> undertones, subtle film grain, photo-real, high detail, shot on a full-frame camera.
> **Mood:** competent, calm, human, trustworthy — not corporate-stocky.
> **Diversity:** natural mix of ages, ethnicities and genders reflecting London.
> **Composition:** leave clean negative space on one side for text overlay.

**Negative / avoid (paste into the negative-prompt field):**

> text, watermark, logo, brand names, distorted hands, extra fingers, deformed faces,
> over-saturated colours, HDR, cartoon, illustration, 3d render, plastic skin,
> American suburban setting, hard-hat construction-site clichés, fisheye distortion,
> cluttered background, fake-looking stock-photo smiles.

**Global rules**
- **No on-image text or logos** — we overlay our own type in code.
- **Aspect ratios matter** — generate at (or above) the target ratio so we don't crop faces.
- **Colour:** lean cool/neutral; our brand accent is indigo-violet `#635bff`. Wardrobe
  in navy / charcoal / grey / soft blue reads best against the UI.
- **Setting:** UK mid-rise housing blocks, communal stairwells, modern flats, council
  offices — London borough feel. Tablets/phones in hand (the product is a mobile app),
  **never** show a specific app UI on the screen.
- Export **JPG, sRGB, ~82% quality**. Save to `public/images/` using the filename given.

---

## 1. Priority set (build these first)

### 1.1 Hero — primary image
- **File:** `public/images/hero-surveyor.jpg`
- **Where:** Homepage hero, right-hand side / behind the product mockup.
- **Ratio / size:** 4:5 portrait, **1200 × 1500** (min 1000 × 1250).
- **Treatment in code:** rounded-2xl, subtle ring, soft brand gradient at the base.
- **Alt text:** "Housing surveyor inspecting a flat on a tablet."
- **Prompt:**
  > A female housing surveyor in her 30s wearing a navy soft-shell jacket, standing in a
  > bright modern UK flat, holding a tablet and looking at a kitchen component, mid-task
  > and focused. Daylight from a window on the left. Clean negative space top-right.
  > _[+ shared style guide]_

### 1.2 Field band — full-bleed background
- **File:** `public/images/field-band.jpg`
- **Where:** Full-width "in the field / offline" band on the homepage.
- **Ratio / size:** 21:9 ultra-wide, **2400 × 1030** (min 2000 × 860).
- **Treatment in code:** dark brand-tinted gradient overlay (text sits on top, left-aligned).
- **Alt text:** "Surveyor working offline in a communal stairwell of a housing block."
- **Prompt:**
  > A male surveyor in his 40s in a grey fleece standing in the concrete communal
  > stairwell of a UK mid-rise housing block, checking a phone with no signal, calm and
  > methodical. Cool overcast daylight through a stairwell window. Wide environmental
  > shot, lots of room on the right for text. _[+ shared style guide]_

### 1.3 CTA band — background
- **File:** `public/images/cta-band.jpg`
- **Where:** Behind the closing call-to-action (currently a solid indigo block).
- **Ratio / size:** 16:9, **2000 × 1125**.
- **Treatment in code:** heavy indigo `#635bff` multiply overlay so white text pops.
- **Alt text:** "Asset and compliance team reviewing housing data together."
- **Prompt:**
  > Two colleagues — one woman, one man, late 30s — in a bright London council office,
  > looking together at a laptop and pointing at the screen, collaborative and positive
  > but natural (not posed). Soft daylight, glass partition behind. _[+ shared style guide]_

---

## 2. Persona cards (4 portraits — used on Home + Solutions)

All **4:5 portrait, 1000 × 1250**. Treatment: rounded-xl, brand-tinted duotone on hover.
Keep these visually consistent (same lighting, same lens) — they sit in a row.

### 2.1 Local authorities
- **File:** `public/images/persona-councils.jpg`
- **Alt:** "Local-authority asset manager at their desk."
- **Prompt:**
  > A confident Black woman in her 40s, asset manager, in a navy blazer at a tidy London
  > council office desk with two monitors (screens off / generic), looking toward camera
  > with a calm half-smile. Soft window light. _[+ shared style guide]_

### 2.2 Housing associations
- **File:** `public/images/persona-has.jpg`
- **Alt:** "Housing officer reviewing property records."
- **Prompt:**
  > A South-Asian man in his 30s, housing officer, in a light blue shirt holding a tablet
  > in a modern housing-association office, mid-conversation, approachable. Bright airy
  > daylight. _[+ shared style guide]_

### 2.3 Supplier surveyors
- **File:** `public/images/persona-suppliers.jpg`
- **Alt:** "Supplier surveyor capturing data on a tablet on site."
- **Prompt:**
  > A white man in his 30s wearing a discreet grey hi-vis gilet over a hoodie, crouched
  > beside a boiler in a UK flat, photographing a component with a rugged tablet, focused
  > and practical. Natural indoor light. _[+ shared style guide]_

### 2.4 Compliance & assurance
- **File:** `public/images/persona-compliance.jpg`
- **Alt:** "Compliance lead reviewing assurance dashboards."
- **Prompt:**
  > A woman in her 50s, compliance lead, in a charcoal jumper standing thoughtfully by a
  > window in a council office holding a coffee, considered and assured. Cool morning
  > light. _[+ shared style guide]_

---

## 3. Secondary (optional — nice to have)

### 3.1 Platform page — context image
- **File:** `public/images/platform-context.jpg`
- **Ratio / size:** 3:2, **1600 × 1067**.
- **Alt:** "Surveyor and manager reviewing a survey together on a tablet outside a block."
- **Prompt:**
  > A surveyor and an older manager standing outside a UK red-brick housing block,
  > looking at a tablet together and discussing, mid-rise estate softly blurred behind.
  > Late-afternoon golden daylight, warm but natural. _[+ shared style guide]_

### 3.2 Security page — context image
- **File:** `public/images/security-context.jpg`
- **Ratio / size:** 3:2, **1600 × 1067**.
- **Alt:** "Data governance lead working at a secure workstation."
- **Prompt:**
  > A focused man in his 40s, information-governance lead, at a clean desk in a quiet
  > office reviewing documents on a monitor (screen generic/off), composed and precise.
  > Cool even light. _[+ shared style guide]_

---

## 4. TikTok Symphony tips

- **Use a consistent "avatar" / seed** where Symphony lets you, so the same person can
  recur (e.g. the hero surveyor could reappear in the field band) — recurring faces make
  a site feel real.
- **Set the aspect ratio first**, then write the prompt — generating at the wrong ratio
  and cropping later cuts off faces.
- **Generate 3–4 variations per slot** and pick the one with the cleanest negative space
  on the text side (top-right for hero, right for the field band).
- Symphony leans toward video/avatars — for stills, use its image/avatar generation and
  export a high-res frame; upscale to at least the sizes above.
- Keep wardrobe in **navy / charcoal / grey / soft blue** across the whole set so the
  imagery harmonises with the indigo UI.
- Re-run the **negative prompt** every time — it's the single biggest quality lever
  (kills text, distorted hands, plastic skin).

---

## 5. Drop-in checklist

When images are ready:

1. Save each at its exact `public/images/<name>.jpg` path above.
2. Tell me they're in — I'll wire the image slots (hero, field band, CTA, persona cards,
   context images) with the brand-tinted overlays and `next/image`, plus `prefers-reduced-motion`
   and proper `alt` text already drafted here.
3. We'll review on the dev server and tune overlay strength for text contrast.

| Slot | File | Ratio | Size |
| --- | --- | --- | --- |
| Hero | `hero-surveyor.jpg` | 4:5 | 1200×1500 |
| Field band | `field-band.jpg` | 21:9 | 2400×1030 |
| CTA band | `cta-band.jpg` | 16:9 | 2000×1125 |
| Persona — councils | `persona-councils.jpg` | 4:5 | 1000×1250 |
| Persona — housing assocs | `persona-has.jpg` | 4:5 | 1000×1250 |
| Persona — suppliers | `persona-suppliers.jpg` | 4:5 | 1000×1250 |
| Persona — compliance | `persona-compliance.jpg` | 4:5 | 1000×1250 |
| Platform context | `platform-context.jpg` | 3:2 | 1600×1067 |
| Security context | `security-context.jpg` | 3:2 | 1600×1067 |
