# Design System — Newham SCS / AMS

A Stripe-Dashboard-grade design language for this app. Grounded in real Stripe
Dashboard captures: customer detail, "More" launcher, Home overview grid,
Transactions table, Customers list, and a Product detail page. This doc is the
single source of truth for tokens and component recipes, and maps directly onto
`app/globals.css` (CSS variables → Tailwind v4 `@theme`) so the frontend applies it as-is.

> **Principles:** restraint over decoration · navy text on white surfaces ·
> one accent (indigo) used sparingly · hairline dividers + soft shadows, never
> heavy borders · 8px spacing grid · data-dense but breathing · crisp, fast motion.

---

## 1. Color

Stripe's light palette. Hex is authoritative; our CSS var name is in the last column.

### Neutrals (cool gray ramp)
| Token | Hex | Use | CSS var |
| --- | --- | --- | --- |
| `gray-0` | `#FFFFFF` | card / sidebar surfaces | `--card`, `--sidebar` |
| `canvas` | `#F5F7FA` | app background behind the panel | `--background` |
| `gray-50` | `#F7FAFC` | subtle fills, table header, hover | `--muted` |
| `gray-100` | `#EBEEF1` | row hover, chips | — |
| `border` | `#E3E8EE` | hairline dividers & borders | `--border`, `--input` |
| `gray-300` | `#C1C9D2` | disabled, faint icons | — |
| `text-tertiary` | `#8792A2` | placeholders, meta | — |
| `text-secondary` | `#697386` | secondary text, labels | `--muted-foreground` |
| `text-strong` | `#3C4257` | nav items, body strong | `--secondary-foreground` |
| `ink` | `#1A1F36` | headings / primary text | `--foreground` |
| `ink-navy` | `#0A2540` | darkest navy (brand marks) | — |

### Brand / interactive (indigo)
| Token | Hex | Use |
| --- | --- | --- |
| `primary` | `#635BFF` | primary buttons, active nav, focus ring (Stripe blurple) |
| `link` | `#5469D4` | text links ("Create", "View all", "Edit", tabs) |
| `primary-hover` | `#4B45D6` | primary button hover (darken ~10%) |
| `primary-50` | `#F4F3FF` | active-nav tint, selected row |

### Status (soft pill = light bg + saturated text)
| Status | Bg | Text | Use |
| --- | --- | --- | --- |
| success | `#CBF4C9` | `#0E6245` | "Active", "Succeeded" |
| info | `#D6E0FF` | `#3A4ED5` | "Default", informational |
| warning | `#F8E5B9` | `#983705` | pending, attention |
| danger | `#FDE2E4` | `#B3093C` | failed, error, rejected |
| neutral | `#E3E8EE` | `#3C4257` | generic / muted |

> Our `Badge` variants `success/info/warning/danger` (components/ui/badge.tsx)
> implement these — prefer them over ad-hoc `bg-*-100` classes.

---

## 2. Typography

**Font:** Inter (free Söhne substitute), `--font-sans`. Features `"cv11","ss01"`.
**Mono:** Geist Mono — for IDs (`cus_HwySSSrWEuVeTp`, UPRNs, issue IDs).

| Role | Size / line-height | Weight | Tracking | Color | Example |
| --- | --- | --- | --- | --- | --- |
| Page title | 28 / 34 | 700 | -0.02em | ink | "Jane Diaz" |
| Section header | 15 / 20 | 600 | -0.01em | ink | "Subscriptions", "Payments" |
| Body | 14 / 20 | 400 | 0 | ink / text-strong | table cells, details |
| Body strong | 14 / 20 | 500 | 0 | ink | emphasised values |
| Secondary | 14 / 20 | 400 | 0 | text-secondary | email, descriptions |
| **Label (caps)** | 11 / 16 | 600 | 0.06em · UPPERCASE | text-secondary | "AMOUNT", "DESCRIPTION", "DATE" |
| Stat label | 13 / 16 | 400 | 0 | text-secondary | "Spent", "MRR" |
| Nav item | 14 / 20 | 400 (500 active) | 0 | text-strong | "Customers" |
| Link | 14 / 20 | 500 | 0 | link | "View all", "Create" |
| Small / meta | 12 / 16 | 400 | 0 | text-secondary | timestamps |

Caps-label recipe: `text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground`.

---

## 3. Spacing, radius, elevation

**Grid:** 8px base (use 4/8/12/16/20/24/32/40). Tailwind `gap-2/3/4/5/6/8/10`.
- Sidebar width **256px** (`w-64`); collapsed 64px.
- Section vertical gap **32px** (`space-y-8`); within-section **16px**.
- Table row height **44px**; cell padding `px-3 py-2.5`.
- Card / panel padding **20–24px** (`p-5`/`p-6`).

**Radius** (`--radius: 8px`):
| Token | px | Use |
| --- | --- | --- |
| `rounded-md` | 6 | buttons, inputs, badges, icon buttons |
| `rounded-lg` | 8 | cards, menus, tables |
| `rounded-xl` | 12 | the app frame panel |
| `rounded-full` | — | avatars, status dots |

**Elevation** (Untitled-UI soft scale — in `@theme`):
| Token | Value | Use |
| --- | --- | --- |
| `shadow-xs` | `0 1px 2px rgba(16,24,40,.05)` | buttons, inputs |
| `shadow-sm` | `0 1px 3px rgba(16,24,40,.1), 0 1px 2px -1px rgba(16,24,40,.06)` | cards, sections |
| `shadow-lg` | `0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03)` | menus, popovers |
| `shadow-frame` | `0 16px 40px rgba(16,24,40,.12)` | the floating app panel |

**Borders:** hairline `1px solid var(--border)`. Prefer dividers + whitespace
over boxing every element (Stripe rarely outlines cards — it uses shadow + space).

**Focus ring:** `0 0 0 3px rgba(99,91,255,.16)` + `border-color: primary`.

---

## 4. Layout

There are **two valid Stripe layouts**; pick per surface:
- **A — Floating frame** (`img.png`): app sits in a rounded white panel on the canvas. Good for focused/marketing or a polished desktop shell.
- **B — Full-bleed inner dashboard** (`img2`): sidebar + content fill the viewport, hairline dividers, no outer panel. **Default for this app** (data-dense, mobile-friendly). The screenshots below describe both; differences are called out.

### App frame (variant A only)
The whole app is a **white rounded panel floating on the `canvas`** with `shadow-frame`:
```
canvas (#F5F7FA, full viewport)
  └─ panel: bg-white, rounded-xl, shadow-frame, overflow-hidden, inset margin ~16px
       ├─ sidebar (256px, white, right hairline border)
       └─ content column
            ├─ topbar (h-56px, white, bottom hairline)
            └─ scroll area (canvas tint or white)
```
On mobile the frame is full-bleed; sidebar becomes a drawer.

### Sidebar (256px)
- Org switcher at top: square avatar/logo (24–28px, rounded, first-letter or icon) + name (15/600 ink) + chevron. Padding 16px.
- **Grouped nav** with **caps section labels** (`text-[11px] font-semibold uppercase tracking-[0.06em] text-tertiary`, e.g. "Shortcuts", "Products"); 16–24px gap between groups. Small top group needs no label.
- Nav item: `h-9 px-2.5 rounded-md gap-2.5`, **line icon 18–20px** (text-secondary), label 14px text-strong.
  - **hover:** `bg-gray-50`. **active:** text+icon `primary`, weight 500 (+ optional `primary-50` bg / leading dot).
- **Expandable items** (e.g. Payments, Billing, Reporting) show a trailing chevron and disclose sub-items; "More" (`•••`) holds overflow → opens the launcher flyout (§5).
- Map for our app: top group = role lanes (Home, Surveys/Assets, QA, Manage); "Shortcuts" = pinned items; "Products"-style group = AMS modules (Properties, Components, Compliance, Programmes, Reporting).

### Topbar (56px)
- Left: search field — borderless, leading 16px search icon, placeholder text-tertiary, `bg-gray-50 rounded-md h-9 max-w-md` (focus ring on focus).
- Right cluster (gap-3, icons 18–20px text-secondary, hover ink, each `size-8 rounded-md hover:bg-gray-50`):
  apps-grid · help `?` · **bell** (w/ blue dot when unread) · settings gear · **circular primary `+`** (`size-8 rounded-full bg-primary text-white shadow-xs` — global "create") · optional **toggle** (Stripe "Test mode"; ours = "Simulate offline") · optional **Setup-guide pill** (§5).
- Bottom hairline under the bar.

Content max width ~1100–1200px, centered, `px-6 md:px-8 py-6`. Three page archetypes:

#### (a) List / index page  — e.g. Transactions, Customers
1. **Page header row:** title (28/700) + right actions (primary `+ Create…` + secondary/icon buttons).
2. **View row:** either underline **tabs** (Payments · Payouts · All activity) or **saved-view segments** (All · Top customers · …, with `•••` overflow).
3. Optional **summary count cards** row (All 35 / Failed 2 …; selected = `primary` ring).
4. **Filter bar:** `+ filter` chips (Date · Amount · Status · …) left; `Export` · `Edit columns` right. (Or a full-width search + `Filter` button.)
5. **Data table** (§5) then **pagination footer** ("Showing 1–20 of 35" + Prev/Next).

#### (b) Dashboard / overview  — e.g. Home
1. Header + a **control bar** of pill filter-chips (Date range · Daily · Compare) left; `+ Add` · `Edit` right.
2. **Responsive metric-card grid** (`grid gap-4 md:grid-cols-2 xl:grid-cols-3`) of metric cards (§5): title+info, big value, delta vs previous, sparkline, footer ("Updated …" · "More details"), empty `No data` chip.

#### (c) Object detail page  — e.g. a Survey, Property, Customer, Product
1. **Breadcrumb** (parent link in `link` color) above the title.
2. **Title block:** icon tile + name (28/700) + status badge + subtitle (price/ref); right = `Edit` + `•••`.
3. **Two columns:** left (wide) = stacked **sections** (each: header 15/600 + optional `+`/links, then table/list/empty-state); right (~340px) = **Details** key-value panel + **Metadata** panel, each with an edit pencil.
4. Lower sections: **Logs** and **Events** lists (mono method + status badge + right timestamp).

---

## 5. Component catalogue

Every component we use should match these specs. Sizes stay **compact** (Stripe is
dense). Each maps to a `components/ui/*` primitive or a composed pattern to build once.

### 5.1 Buttons  · `components/ui/button.tsx`
Height: default **32px** (`h-8`), sm **28px** (`h-7`), `rounded-md` (6px). Don't enlarge.
| Variant | Spec |
| --- | --- |
| **primary** | `bg-primary text-white shadow-xs`, hover → `primary-hover` (darken ~10%), `:active scale-[.98]`. e.g. `+ Create payment`, `Add customer`. Leading/trailing icon 16px. |
| **secondary** | `bg-white border border-border text-strong shadow-xs`, hover `bg-gray-50`. e.g. `Analyse`, `Edit`, `Export`, `Edit columns`. |
| **ghost** | transparent, hover `bg-gray-50`. Toolbar/row icons. |
| **link** | `text-link font-medium`, no underline → underline on hover. e.g. `View all`, `Create`, `Get the prompt`, `Learn more`. |
| **icon** | `size-8 rounded-md` ghost; icon 16–18px text-secondary, hover ink + `bg-gray-50`. |
| **icon-group** | segmented: `border border-border rounded-md` white, hairline dividers between 28px items (pencil / ✕ / `⋯`). |
| **circular-primary** | `size-8 rounded-full bg-primary text-white shadow-xs` — topbar global create `+`. |

### 5.2 Breadcrumb
Parent link in `link` color (14/500) above the title; ` / ` separators text-tertiary; current page omitted or text-secondary. e.g. **Products** → NFC Card.

### 5.3 Page header
- **List:** title (28/700) left; right = primary + secondary/icon buttons.
- **Object:** breadcrumb, then `icon-tile (40px) + name (28/700) + status badge + subtitle`; right = `Edit` + `•••`.
- Optional `StatGroup` under a detail title.

### 5.4 Tabs (underline)  — Payments · Payouts · All activity
Text tabs `text-sm`, gap-6, row with bottom hairline; **active** = ink + 2px `primary` underline; inactive text-secondary → hover ink.

### 5.5 Saved-view segments — All · Top customers · …
Pill buttons `h-8 px-3 rounded-md text-sm`; **selected** = `border border-primary text-ink` (or `bg-primary-50`); rest text-secondary, hover `bg-gray-50`; trailing `•••` overflow.

### 5.6 Badges / status pills  · `components/ui/badge.tsx`
`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium` (pills `rounded-full`). Soft = light bg + saturated text (§1). Variants & uses:
| Variant | Examples |
| --- | --- |
| `success` | Active · Succeeded ✓ · 200 OK |
| `danger` | Failed ✕ · Blocked ⊖ · Disputed |
| `warning` | Pending · Uncaptured · attention |
| `info` | Default · Preview |
| `neutral` | tags, counts, muted states |
Optional leading dot / trailing 12px icon (check/✕). Height ~20px.

### 5.7 Data table  · `components/ui/table.tsx` (+ compose `DataTable`)
- **Header:** sentence-case labels (13/500 text-secondary) — *or* caps-label per §2; bottom hairline; optional leading **checkbox** column.
- **Rows:** 44–48px, bottom hairline `border-border`, **hover `bg-gray-50`**; first cell bold ink (primary identifier); trailing `⋯` ghost overflow.
- **Cell types:** money = bold ink + currency text-secondary, `tabular-nums`; status pill inline; ids/cards = mono + brand badge + `•••• 4242`; date = text-secondary; empty = `—` text-tertiary.
- **Selection:** checking rows reveals a bulk-action bar.
- No outer border — section whitespace frames it.

### 5.8 Pagination
Footer row: "Showing 1–20 of 35 items" (text-secondary) left; `Previous`/`Next` secondary buttons (or `‹ ›` icon buttons) right.

### 5.9 Summary count cards
Row of cards: label (13 text-secondary) + big count (20/600 ink); clickable; **selected** = `ring-1 ring-primary rounded-lg`. (All 35 · Failed 2 …)

### 5.10 Filter bar
- **Add-filter chips:** `h-8 px-2.5 rounded-full border border-dashed border-border text-sm text-secondary` with leading `+` (Date · Amount · Status · More filters). Active filter → solid border + value.
- Right-side actions: `Export`, `Edit columns` secondary buttons.
- **Control-bar variant** (dashboard): solid pill chips `Date range | Last 7 days ▾`, value in `link` color.

### 5.11 Search input
`h-9 rounded-md bg-gray-50 border border-transparent pl-8 text-sm`, leading 16px search icon text-tertiary, placeholder text-tertiary; focus → white + ring. Full-width list search may add a `Filter` button + columns icon.

### 5.12 Metric card
`Card` (white, border, `shadow-sm`, `rounded-lg`, p-5): header = title (14/500) + info `ⓘ` (tooltip) + export icon; **value** (24/700 ink) + delta ("£0.00 previous period", text-secondary); **sparkline** (1.5px `primary` line, faint axis labels); footer = "Updated 21s ago" (text-tertiary) + `More details` link. **Empty:** dashed-border inner area + centered `No data` chip (`bg-gray-50 text-secondary rounded px-2 py-1`).

### 5.13 Empty state
Dashed-border rounded box (`border border-dashed border-border rounded-lg p-8`), centered text-secondary message ("No trials", "No features", "No metadata"); optional small action button.

### 5.14 Detail key-value panel (Details / Metadata)
Section header (15/600) + edit pencil (icon button). Rows: `label` (13 text-secondary) over/left of `value` (14 ink). Long/empty → `—`. Copyable id = `font-mono text-xs bg-gray-50 rounded px-1.5` + copy icon. `View more ▾` disclosure for overflow. Metadata empty → dashed `No metadata` box.

### 5.15 Logs / Events rows
List rows (hairline divider): left = mono method/text (`POST /v1/products` or event sentence) + status badge (`200 OK` success); right = timestamp (text-secondary, `tabular-nums`).

### 5.16 Stat group
`flex gap-8`; each = label (13 text-secondary) over value (14–15/500 ink). Dividerless.

### 5.17 Inputs · selects · textarea · switch  · `components/ui/*`
- Input/textarea: `h-9 rounded-md border border-border bg-white px-2.5 text-sm`, placeholder text-tertiary, focus ring (§3).
- Select (Base UI): trigger like input; popup `shadow-lg rounded-lg`, origin-aware, `onValueChange` gives `string|null`.
- Switch: track 36×20, `bg-gray-300` → `bg-primary` on; 150ms.

### 5.18 Launcher flyout (mega-menu) — sidebar "More"
Panel beside the sidebar (`shadow-lg`/overlay): header link "Do more with …" + `✕`; **grouped sections** (caps labels) of **app-icon tiles** (§5.19).

### 5.19 App-icon tile
Row: **colorful rounded-square icon 40px** (`rounded-lg`, per-module hue) + title (15/600 ink) + description (13 text-secondary). Hover `bg-gray-50 rounded-lg`. Use for module launchers & onboarding cards.

### 5.20 Setup-guide pill
Topbar pill: `h-8 px-3 rounded-md border border-border` + label + **circular progress ring** (`primary`, conic/SVG, 16px) showing % complete.

### 5.21 Toggle (labelled, "Test mode")
Inline label + switch in the topbar; ours = "Simulate offline" (already in the avatar menu — may also surface here).

### 5.22 Banner / callout
Full-width strip `bg-gray-50 rounded-lg px-4 py-2.5`: leading hint icon (💡) + text (14) + right `link` action + `✕` dismiss. For tips / promos / sync notices.

### 5.23 Card & Section containers  · `components/ui/card.tsx`
- **Card:** white, `border border-border`, `shadow-sm`, `rounded-xl`, padding 20–24px.
- **Section:** not always a card — header (15/600 + action links/`+`) then content, 32px gap. Stripe boxes sparingly; prefer dividers + whitespace.

### 5.24 Dropdown / overflow menu  · `components/ui/dropdown-menu.tsx`
`⋯` trigger → menu `shadow-lg rounded-lg p-1`, items `h-8 px-2 rounded-md text-sm hover:bg-gray-50`; destructive in `danger`. Base UI: `GroupLabel` only inside `Group`.

### 5.25 Avatar / icon tile / info tooltip
- Avatar: `size-8 rounded-full`, initials fallback on `gray-100`.
- Icon tile: `size-10 rounded-lg` tinted bg for object/module marks.
- Info `ⓘ`: 14px text-tertiary, hover ink → tooltip (`shadow-lg`, 125ms, origin-aware).

---

## 6. Motion (crisp & fast)
- Easing token `--ease-out: cubic-bezier(.23,1,.32,1)`; durations 120–200ms.
- Buttons `transition-transform 160ms`, `:active scale-[.98]`.
- Menus/selects 150–200ms ease-out, origin-aware (`transform-origin: var(--transform-origin)`), enter `scale(.96)+opacity` (never `scale(0)`).
- Row/tab hover: `transition-colors 120ms`.
- Honour `prefers-reduced-motion` (opacity only).
- Never animate keyboard-driven / high-frequency actions.

---

## 7. Codebase mapping
- Tokens live in `app/globals.css` (`:root` vars + `@theme` shadows). Update **there**, not per-component.
- Primitives (exist): `components/ui/{button,card,badge,input,select,table,dropdown-menu,switch,tabs,...}.tsx` (Base UI — no `asChild`; `Select onValueChange` is `string|null`; `GroupLabel` only inside `Group`).
- App frame + sidebar + topbar: `components/app-shell.tsx`.
- **Composed components to build once** (in `components/patterns/`) and reuse across `/surveys`, `/qa`, `/manage`, `/admin`, `/assets`:
  `PageHeader` (list + object variants, §5.3) · `Breadcrumb` (5.2) · `UnderlineTabs` (5.4) · `ViewSegments` (5.5) · `StatusBadge` map (5.6) · `DataTable` + cell renderers + bulk bar + `Pagination` (5.7–5.8) · `CountCards` (5.9) · `FilterBar`/`FilterChip` (5.10) · `SearchInput` (5.11) · `MetricCard` + `Sparkline` + `NoData` (5.12) · `EmptyState` (5.13) · `KeyValuePanel` + `CopyId` (5.14) · `LogList`/`EventList` (5.15) · `StatGroup` (5.16) · `Launcher`/`AppTile` (5.18–5.19) · `SetupGuidePill` (5.20) · `Callout` (5.22) · `Section` (5.23) · `IconTile`/`InfoTip` (5.25).
- These are presentational only — they read the existing Dexie/Convex data; no logic changes.

### Token deltas to match the screenshot exactly
Current `globals.css` is close; to fully match Stripe-dashboard, adjust:
1. `--background` → `#F5F7FA` (cooler canvas for the floating frame).
2. add `--link: #5469D4` and use it for text links (distinct from `--primary` buttons).
3. add `--primary-50: #F4F3FF` for active-nav/selected-row tint (wire `--sidebar-accent`).
4. ensure caps-label utility + table header style are applied (see §2/§5).
5. introduce the **app-frame** treatment in `app-shell.tsx` (panel + `shadow-frame`) on `md+`.

---

## 8. Accessibility & colour-blind palette

~8% of men have red-green colour-vision deficiency (CVD). Field surveyors use this
all day — accessible colour is a requirement, not a nicety.

**Rule 1 — never encode meaning by colour alone (WCAG 1.4.1).** Every status pairs
colour **+ icon + text** (✓ Succeeded, ✕ Failed, ⊘ Blocked, △ Warning). This is the
single biggest win and we already do it — keep it everywhere (charts get direct
labels/patterns too, not just a colour legend).

**Rule 2 — accent stays blurple `#635BFF`.** Blue/violet is distinguishable across
deutan, protan, tritan *and* greyscale. Best possible accent; no change.

**Rule 3 — CVD-safe status palette** (the green↔red pair is the risk; shift success
toward teal and danger toward vermillion so they also separate by lightness):

| Role | Icon | Text (AA) | Soft bg |
| --- | --- | --- | --- |
| success | ✓ | `#067A57` (teal-green) | `#D6F5E8` |
| danger | ✕ | `#C2410C` (vermillion) | `#FBE3DA` |
| warning | △ | `#92400E` (amber) | `#FCEFC7` |
| info | ⓘ | `#1357B0` (blue) | `#DCE9FF` |
| neutral | – | `#3C4257` | `#EBEEF1` |

**Rule 4 — data-viz uses a CVD-designed palette**, never hand-picked hues. Use in
this order and avoid red/green adjacency:
- **Okabe–Ito:** `#E69F00` `#56B4E9` `#009E73` `#F0E442` `#0072B2` `#D55E00` `#CC79A7`
- **IBM:** `#648FFF` `#785EF0` `#DC267F` `#FE6100` `#FFB000`

**Also:** text ≥ 4.5:1 contrast (AA); visible focus ring on all interactives;
HHSRS Category 1/2 must be distinguishable without colour (label + icon + the
Cat 1/Cat 2 text). **Verify** with Chrome DevTools → Rendering → "Emulate vision
deficiencies", or Coblis / Sim Daltonism.

> These status hexes supersede the brighter ones in §1 for production. They keep
> the same soft-pill style; update the `Badge` semantic variants + `--success/
> --warning/--danger` tokens together so pills, icons and charts stay consistent.
> **Done:** wired in `app/globals.css` (`--success/-bg`, `--warning/-bg`,
> `--danger/-bg`, `--info/-bg`, `--link`, `--primary-50`) + `Badge` variants.

### WCAG 2.2 AA — baked-in rules (enforced, not optional)

These are requirements every component/screen must meet. Build them into the
shared `components/patterns/*` so screens get them for free.

**Perceivable**
- **Contrast:** body/UI text ≥ 4.5:1, large text (≥24px / 18.66px bold) ≥ 3:1, UI
  components & focus indicators ≥ 3:1. Token pairs above are AA — don't hand-pick.
- **Colour not sole signal (1.4.1):** status = colour **+ icon + text**; required
  fields marked with text/`*` + `aria-required`; chart series get labels/patterns.
- **Reflow/zoom (1.4.10):** layouts work to 320px wide & 400% zoom (we're
  mobile-first); no horizontal scroll except data tables (which scroll-x intentionally).
- **Text spacing (1.4.12):** never clip on increased line/letter spacing.

**Operable**
- **Keyboard (2.1.1):** every action reachable & operable by keyboard; no traps.
  Base UI primitives handle this — keep using them, don't hand-roll.
- **Focus visible (2.4.7):** every interactive has the blue focus ring
  (`focus-visible:ring-3 ring-ring/50`); never `outline:none` without a replacement.
- **Focus not obscured (2.4.11, 2.2):** sticky header/drawer must not cover the
  focused element.
- **Target size (2.5.8, 2.2):** ≥ 24×24px min; **≥ 44×44px on touch** (give compact
  32px buttons a larger hit area / padding on mobile; survey capture controls are 44px).
- **Motion (2.3.3):** honour `prefers-reduced-motion` (done globally); no
  flashing > 3×/s.

**Understandable**
- **Labels (3.3.2 / 1.3.1):** every input has a programmatic `<label>`/`aria-label`;
  icon-only buttons require `aria-label` (e.g. `⋯`, camera, close, sidebar toggle).
- **Errors (3.3.1):** validation messages are text, tied via `aria-describedby`,
  not colour-only; offline validation surfaces a checklist (see `lib/validation.ts`).
- **Consistent nav/identification (3.2.3/3.2.4):** patterns identical across screens.

**Robust**
- **Semantic HTML + roles (4.1.2):** real `<button>`/`<a>`/`<nav>`/`<table>`/
  `<th scope>`; status via `role="status"`/`aria-live` for sync toasts; dialogs use
  Base UI (focus trap + `aria-modal`).
- **Name/role/value:** toggles expose `aria-pressed`/`aria-checked`; tabs use
  `role="tablist"`.

**PWA/offline a11y:** offline/sync state announced via `aria-live="polite"` (the
`NetworkStatus` + toasts), not colour alone.

**CI gate:** run `axe`/Lighthouse a11y on key routes; target score ≥ 95 and zero
serious violations before merge.
