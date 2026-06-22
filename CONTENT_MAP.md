# Content Map — mirroring the survey product on the Haven AMS site

Goal: update the marketing site so its content accurately reflects the survey
features actually built. The site is **Haven AMS** (keep that brand — the
internal product name "Haven" must not appear). It's already survey-first, so
this is **update + extend**, not a rebuild.

**Authoring mechanisms (where content lives):**
- `lib/site.ts` — typed copy arrays reused across pages: `modules`,
  `differentiators`, `comparison`, `stats`, `capabilityMap` (status-tagged),
  `faqs`, `platformSurfaces`. **Edit data here first.**
- `app/**/page.tsx` — hero + section bodies are hardcoded JSX (e.g. the surveys
  page bands).
- `components/sections/feature-showcase.tsx` — the `<FeatureShowcase>` band is
  the primary building block for feature sections.
- `lib/resources/<slug>.ts` + register in `lib/resources.ts` — long-form
  articles (tagged-union block model).
- Visuals are **hand-drawn JSX mockups** (`components/mockups/*`, `phone.tsx`),
  not screenshots — new features may need a new mockup component.

---

## 1. `/platform/surveys` — the flagship page (biggest update)

File: `app/platform/surveys/page.tsx`. Today it has 3 `FeatureShowcase` bands
(Capture offline / Evidence bound to record / Issues, HHSRS & QA gate). Proposed
band set, mapped to what we built:

| Band | Status badge | Feature it mirrors |
|---|---|---|
| Capture anything offline | live | PWA + IndexedDB, sync engine, **conflict control (no silent overwrite)**, **dead-letter reconciliation** |
| Structured surveys, no-code | live | schema-driven question sets, conditional routing, dropdowns-over-free-text, count-driven components, **Survey Builder**, **multi-survey library**, urgent-review-last |
| Evidence bound to the record | live | photo capture **+ library upload** (call-log screenshots), auto **GPS + timestamp**, **geofence** distance, quality flags, **private storage + signed URLs** |
| **No access, handled** (NEW) | live | close-out as "No access" with reason + evidence; feeds the No Access report |
| Issues, HHSRS & the QA gate | live | issue capture, HHSRS, Awaab's Law severity, submit→QA accept/reject, Kanban board |
| Complete returns, reconciled | live | reconciliation report (data + components + images), "8,000 surveys / 6,000 PDFs" problem |

**New visual needed:** a "No Access report" mockup (buckets 1/2/3+) and/or a
close-out screen — add to `components/mockups/` or a `phone.tsx` screen.

---

## 2. `lib/site.ts` — data array updates

- **`modules[]`** (the `capture` module): refresh `summary`/`points` to include
  the Survey Builder, library upload, no-access close-out, conflict control.
- **`differentiators[]`**: the 6 USPs are still accurate (offline-first, no
  silent overwrite, one-source-reconciled, evidence-first, QA gate, no
  false-green). Consider adding a 7th: **"UK-resident, per-council isolated"**
  (data foundation — see §4).
- **`stats[]`**: today's are generic ("100% offline", "0 silent overwrites", "8
  export tables", "1 source"). Add concrete proof points we can stand behind,
  e.g. **address→UPRN match via Ordnance Survey**, **per-council isolation**.
- **`capabilityMap[]`** — **the most important correction.** Re-status items
  that are now LIVE but likely still tagged delivery/roadmap:
  - No Access close-out + report → **live**
  - Photo library upload + signed-URL storage → **live**
  - Full-text property search → **live**
  - Asset register Excel export → **live**
  - OS address→UPRN matching + USRN/TOID enrichment → **live** (data foundation)
  - Survey Builder / multi-survey library → confirm status
  *(Verify each against reality before flipping; don't over-claim.)*
- **`faqs[]`**: add Q&As for "Does it work with no signal?", "How do you handle
  no-access properties?", "Where is our data stored?" (UK), "How do you get
  accurate UPRNs/addresses?".

---

## 3. Other platform pages — where survey features also land

- **`/platform/asset-register`** (`app/platform/asset-register/page.tsx`): add
  bands for **full-text search** (UPRN/address/postcode), **satellite map with
  pinned location**, **one-click Excel export**, and **block→unit expansion**
  (council block lists exploded into individual surveyable properties).
- **`/platform/reporting`** (`app/platform/reporting/page.tsx`): add the **No
  Access report** (properties stuck, 1/2/3+ repeat-visit buckets for escalation)
  and the **Reconciliation** completeness report. Note exports: PDF + CSV + XLSX.
- **`/platform/compliance`** (`app/platform/compliance/page.tsx`): ensure
  **HHSRS**, **Awaab's Law damp/mould severity**, and **required-vs-observed
  safety alarms** are reflected as live capture, with the audit trail.
- **`/security`** (`app/security/page.tsx`): the strongest trust update —
  **UK data residency (London)**, **per-council isolated backends** (no shared
  database between councils), private photo storage with short-lived signed
  URLs, RLS, and the maker-checker QA gate.

---

## 4. NEW story: "Data foundation" (Ordnance Survey + UK isolation)

This is a major capability we built that the site doesn't tell yet — a strong
B2B trust/differentiation story. Two homes:

1. **A section** (on `/platform/asset-register` or a small `/platform` block):
   *"An authoritative property register from messy council data"* — take a
   council's block spreadsheet, explode blocks into units, match addresses to
   **authoritative UPRNs via Ordnance Survey (Places API)**, enrich with **USRN
   (street) + TOID (building) via OS Linked Identifiers**, and add coordinates
   from **OS Open UPRN**. Confidence-labelled (verified vs unverified).
2. **`/security`**: **per-council isolated backends + UK-only data residency**.

---

## 5. New resource articles (`lib/resources/`)

Long-form, SEO + sales-enablement. Each = a `.ts` `Resource` registered in
`lib/resources.ts`:

- **"Cracking the no-access problem in stock condition surveys"** — the
  operational pain, our close-out + escalation report (1/2/3+ visits).
- **"From block list to authoritative property register"** — block explosion +
  OS UPRN matching; why postcodes/UPRNs matter; what "verified" means.
- **"Why offline-first isn't optional for field surveys"** — sync engine,
  conflict control, reconciliation; the lost-data failure mode.
- (Existing articles already cover Awaab's Law, Decent Homes, HHSRS, SCS
  playbook — link the new ones to those.)

---

## 6. Gaps & corrections to watch

- **Don't introduce "Haven"** — the site brand is Haven AMS.
- **Re-status `capabilityMap`** — several shipped features are likely still
  roadmap/delivery; that *undersells* the product. Flip to live where true.
- **No screenshots exist** (`public/` empty) — every new feature band needs a
  JSX mockup; budget for mockup components, or add real product screenshots.
- **Verify before claiming** — only mark live what genuinely is (e.g. OS
  matching is live & tested; the question-set rework is still in progress).

---

## 7. Feature → page matrix (quick reference)

| Feature built | Primary page | Data/file to edit |
|---|---|---|
| Offline capture + sync/conflict/reconciliation | /platform/surveys | page.tsx, `modules`, `stats` |
| Schema-driven surveys + Survey Builder | /platform/surveys | page.tsx, `modules` |
| Photo evidence (camera+library, GPS, signed URLs) | /platform/surveys, /security | page.tsx |
| No Access close-out + report | /platform/surveys, /platform/reporting | page.tsx (+ new mockup) |
| QA gate + Kanban board | /platform/surveys | page.tsx |
| Reconciliation completeness | /platform/reporting | page.tsx |
| Asset register + search + Excel + map | /platform/asset-register | page.tsx |
| HHSRS / Awaab's Law / alarms | /platform/compliance | `capabilityMap` |
| OS UPRN / Places / Linked Identifiers | /platform/asset-register, /security | page.tsx, new section |
| Per-council isolation + UK residency | /security | page.tsx, `differentiators` |
