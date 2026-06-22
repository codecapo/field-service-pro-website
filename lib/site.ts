export const site = {
  name: "Haven AMS",
  tagline: "The offline-first asset management platform for social housing.",
  appUrl: "https://app.havenams.com",
  email: "hello@havenams.com",
};

export const nav = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Security", href: "/security" },
];

/* Main app surfaces — each gets its own page; surfaced in the Platform mega-menu. */
export const platformSurfaces = [
  {
    label: "Field operations",
    href: "/platform/surveys",
    icon: "surveys",
    description: "Stock condition surveys today — and any inspection the same offline engine runs.",
  },
  {
    label: "Asset register",
    href: "/platform/asset-register",
    icon: "assets",
    description: "Property, block and component as durable, effective-dated records.",
  },
  {
    label: "Compliance",
    href: "/platform/compliance",
    icon: "compliance",
    description: "Evidence-led programmes, certificate drill-through and a controlled denominator.",
  },
  {
    label: "Reporting & analytics",
    href: "/platform/reporting",
    icon: "reporting",
    description: "Dashboards, the No Access report and Power BI–ready, reconciled feeds.",
  },
] as const;

/* ── The survey-to-AMS flow (staged flow, mirrors the product) ── */
export const stages = [
  {
    key: "assign",
    title: "Assign",
    blurb:
      "Managers assign survey batches to named users. External surveyors see only their properties — nothing else.",
  },
  {
    key: "preload",
    title: "Pre-load",
    blurb:
      "Packs download to the device with a checksum and version. Property data, lookups and routing logic — ready for offline.",
  },
  {
    key: "capture",
    title: "Capture offline",
    blurb:
      "Full capture with no signal: components, HHSRS issues, photos. Everything survives an app restart on-device.",
  },
  {
    key: "sync",
    title: "Sync",
    blurb:
      "Reconnect and the queue drains automatically. Master-version conflicts are blocked and logged — never silently overwritten.",
  },
  {
    key: "qa",
    title: "QA gate",
    blurb:
      "A reviewer accepts or rejects with comments. Nothing reaches the live record until it passes the gate.",
  },
  {
    key: "output",
    title: "Output",
    blurb:
      "One accepted source produces the PDF report and the structured export — and the IDs reconcile across both.",
  },
] as const;

/* ── The differentiators: what legacy AMS platforms don't do ── */
export const differentiators = [
  {
    title: "Truly offline-first, not a sync-when-you-can bolt-on",
    body: "The device is the source of truth. Surveyors capture in basements, stairwells and dead-signal estates and lose nothing — drafts and photos persist across restarts. Most housing AMS mobile apps assume a connection and fail where the work actually happens.",
    others: "Online-only forms, or mobile apps that drop data when the signal dies.",
  },
  {
    title: "No silent overwrite of the master record",
    body: "Every push compares the master version it pre-loaded against the server. If the master moved, the change is blocked and logged as a conflict — not clobbered. Field data and back-office data can never quietly destroy each other.",
    others: "Last-write-wins syncs that overwrite — or lose — whichever update lands last.",
  },
  {
    title: "One source → a PDF and structured data that reconcile",
    body: "The report and the data export are generated from the same accepted record, so every issue ID in the PDF matches the export row. No re-keying, no parallel spreadsheets, BI-ready on day one.",
    others: "A PDF for the auditor and a separate data dump that never quite ties up.",
  },
  {
    title: "Evidence-led and structured before narrative",
    body: "Issues are typed records — HHSRS Category 1/2, controlled reason codes, a linked component, photos bound to the exact question or defect — with named-user attribution on every action. Not a free-text box and a loose photo gallery.",
    others: "Free-text notes, untagged photo folders, no audit of who recorded what.",
  },
  {
    title: "A QA gate between the field and the live record",
    body: "Surveys are point-in-time snapshots. They only update the live record after a reviewer accepts them — a true maker-checker step with a full audit trail. Rejections go straight back to the surveyor, editable again.",
    others: "Field edits that hit the master immediately, with no review and no trail.",
  },
  {
    title: "Compliance 'unknown' is an exception, never false-green",
    body: "Programme status is derived from applicability, evidence and validity. Where applicability is unknown it surfaces as an exception that needs resolving — it never shows green by default. You see the real denominator, not a comforting dashboard.",
    others: "Dashboards that count missing data as compliant and turn the gap green.",
  },
] as const;

/* ── Comparison table vs the field ── */
export const comparison = {
  columns: ["Haven AMS", "Legacy housing AMS", "Generic CMMS / inspection apps"],
  rows: [
    {
      capability: "Full offline field capture (no signal)",
      values: [true, "partial", "partial"],
    },
    {
      capability: "Survives app restart on-device",
      values: [true, false, "partial"],
    },
    {
      capability: "No-silent-overwrite conflict control",
      values: [true, false, false],
    },
    {
      capability: "PDF + structured export from one source",
      values: [true, "partial", false],
    },
    {
      capability: "Issue-level HHSRS (Cat 1/2, reason codes)",
      values: [true, "partial", false],
    },
    {
      capability: "QA accept/reject gate before live update",
      values: [true, "partial", false],
    },
    {
      capability: "Named-user audit on every action",
      values: [true, "partial", "partial"],
    },
    {
      capability: "Template engine for any inspection type",
      values: [true, false, "partial"],
    },
    {
      capability: "Evidence-led compliance denominator",
      values: [true, "partial", false],
    },
    {
      capability: "Installable PWA — no app store",
      values: [true, false, false],
    },
  ] as { capability: string; values: (boolean | "partial")[] }[],
};

/* ── Platform modules / feature areas ── */
export const modules = [
  {
    key: "capture",
    title: "Offline survey capture",
    summary:
      "A template-driven survey engine that runs fully offline. Conditional routing, count-driven components, required-vs-observed prompts and submit-time validation.",
    points: [
      "Versioned question sets — swap the JSON to run gas, EICR, FRA or damp inspections",
      "Counts drive child records (Bathrooms = 2 → Bathroom 1 & 2, automatically)",
      "Required-vs-observed logic raises a pre-filled issue in one tap",
      "Submit-time validation blocks incomplete or invalid surveys before QA",
    ],
  },
  {
    key: "evidence",
    title: "Evidence & photos",
    summary:
      "Photos are bound to a specific question, component, issue or access event — never a loose gallery. Captured and uploaded timestamps, user, device and caption travel with every image.",
    points: [
      "Downscaled on capture, queued, and shown as pending thumbnails",
      "Uploaded to secure blob storage on sync, stamped with upload time",
      "Embedded in the PDF beside the record they evidence",
      "Parent-linked so evidence is always traceable to its source",
    ],
  },
  {
    key: "sync",
    title: "Poor-network sync & conflict control",
    summary:
      "A robust queue with retry and resume that drains automatically when you reconnect — with a no-silent-overwrite guarantee at its core.",
    points: [
      "Master-version compare blocks pushes that would overwrite changed data",
      "Every conflict is logged as an auditable sync event",
      "Pending and failed items surfaced to surveyors and managers",
      "Sync completeness distinguishes response, photo, partial and failed",
    ],
  },
  {
    key: "issues",
    title: "HHSRS & issue-level records",
    summary:
      "A property-level HHSRS summary plus individual issue records with unique IDs. One hazard can spawn several issues, each independently tracked.",
    points: [
      "Category 1 / Category 2 hazards with controlled urgent-review reason codes",
      "Issues link to a component instance and the question that raised them",
      "Repair, HHSRS, urgent, damp/mould, access and data-quality types",
      "Category roll-up on the review step and in the report",
    ],
  },
  {
    key: "qa",
    title: "QA & maker-checker",
    summary:
      "An explicit quality gate between field and master. Submit → review → accept or reject with comments, fully audited, with no silent overwrite of the live record.",
    points: [
      "Read-only QA review with HHSRS highlighted",
      "Accept promotes to the export/report source; reject returns it editable",
      "Every decision recorded as a QA event with attribution",
      "Reusable as an assurance gate for delegated partner submissions",
    ],
  },
  {
    key: "outputs",
    title: "Reports & structured outputs",
    summary:
      "A formatted PDF report and a structured, stable-key export — both generated from the same accepted data so they always reconcile.",
    points: [
      "Eight-table export (XLSX sheet-per-table + per-table CSV)",
      "Referential joins by survey, issue, component and photo IDs",
      "Power BI / data-warehouse ready, no manual interpretation",
      "PDF embeds photos and the HHSRS summary per section",
    ],
  },
  {
    key: "access",
    title: "Access control & audit",
    summary:
      "Named-user, least-privilege roles with per-scope restriction. External surveyors see only their assigned properties; every action is attributed.",
    points: [
      "Five roles with per-role landing pages and route guards",
      "External supplier surveyors scoped to assigned properties only",
      "Offline sign-in via cached identity; SSO/MFA-ready",
      "Audit trail across capture, photo, QA and sync events",
    ],
  },
] as const;

/* ── Full AMS capability map (grounded in the Asset Management Systems
   Requirements §4A–§31 and the POC FEATURE_TRACKER). Status mirrors the
   tracker: "live" = built today, "delivery" = foundations exist / in build,
   "roadmap" = greenfield on the platform plan. ── */
export type CapStatus = "live" | "delivery" | "roadmap";

export const capabilityStatus: Record<CapStatus, { label: string }> = {
  live: { label: "Available now" },
  delivery: { label: "In delivery" },
  roadmap: { label: "On the roadmap" },
};

export const capabilityMap: {
  group: string;
  ref: string;
  intro: string;
  items: { title: string; status: CapStatus }[];
}[] = [
  {
    group: "Stock condition surveys",
    ref: "Live",
    intro: "The offline-first capture flow — live today.",
    items: [
      { title: "Offline survey capture with photos, persists across restarts", status: "live" },
      { title: "Template-driven question sets + no-code Survey Builder (multi-survey library)", status: "live" },
      { title: "Conditional routing, count-driven components, submit-time validation", status: "live" },
      { title: "Pre-loaded packs with checksum & version; external-supplier batch access", status: "live" },
      { title: "Issue-level HHSRS — Category 1/2, controlled reason codes", status: "live" },
      { title: "No-access close-out with reason & evidence", status: "live" },
      { title: "Pre-populated revalidation from the prior accepted survey", status: "delivery" },
    ],
  },
  {
    group: "Evidence & photos",
    ref: "Live",
    intro: "Every photo bound to the record it evidences.",
    items: [
      { title: "Camera capture + library upload (e.g. call-attempt screenshots)", status: "live" },
      { title: "Auto timestamp, GPS location & geofence distance", status: "live" },
      { title: "Low-quality flagging; private storage with short-lived signed URLs", status: "live" },
      { title: "Parent-linked to a question, component, issue or access event", status: "live" },
    ],
  },
  {
    group: "Asset register & search",
    ref: "Live",
    intro: "A live property, block & component register with authoritative addresses.",
    items: [
      { title: "Property, block & component records (units linked to their block)", status: "live" },
      { title: "Full-text search by address, UPRN, postcode or reference", status: "live" },
      { title: "UPRN-keyed properties with map coordinates from OS Open UPRN", status: "live" },
      { title: "Council block lists exploded into individual surveyable units", status: "live" },
      { title: "Map per property; one-click Excel (.xlsx) export", status: "live" },
      { title: "Confidence labelling (verified vs unverified records)", status: "live" },
      { title: "USRN (street) + TOID (building) identifiers carried through to export", status: "delivery" },
    ],
  },
  {
    group: "Compliance & safety capture",
    ref: "Live",
    intro: "Evidence-led capture of the regulated risks — never false-green.",
    items: [
      { title: "HHSRS Category 1/2 hazards with controlled reason codes", status: "live" },
      { title: "Awaab's Law damp & mould severity grading", status: "live" },
      { title: "Required-vs-observed safety alarms (a shortfall raises an issue)", status: "live" },
      { title: "Certificate / evidence document store linked to the asset", status: "delivery" },
    ],
  },
  {
    group: "QA, sync & assurance",
    ref: "Live",
    intro: "A maker-checker gate and a no-silent-overwrite sync.",
    items: [
      { title: "Submit → QA accept/reject with comments, fully audited", status: "live" },
      { title: "No-silent-overwrite conflict control (master-version compare)", status: "live" },
      { title: "Offline queue with retry; dead-lettered items surfaced for action", status: "live" },
      { title: "Reconciliation report — every survey returns data + components + images", status: "live" },
      { title: "Named-user RBAC, least-privilege, per-scope restriction", status: "live" },
      { title: "Audit trail across capture, photo, QA & sync events", status: "live" },
    ],
  },
  {
    group: "Reporting & outputs",
    ref: "Live",
    intro: "One accepted source → reports and BI-ready data that reconcile.",
    items: [
      { title: "Stable-key structured export (Power BI / warehouse ready)", status: "live" },
      { title: "PDF report + CSV + XLSX from a single accepted source", status: "live" },
      { title: "No Access report — properties stuck, 1 / 2 / 3+ repeat-visit buckets", status: "live" },
      { title: "Issues / HHSRS portfolio dashboard", status: "live" },
    ],
  },
  {
    group: "Data residency & isolation",
    ref: "Live",
    intro: "UK-resident, and isolated per council.",
    items: [
      { title: "Dedicated UK-region instance per council — no shared tenancy", status: "live" },
      { title: "UK data residency — Supabase London (eu-west-2)", status: "live" },
      { title: "Private photo storage; row-level security; signed-URL reads", status: "live" },
    ],
  },
];

/* ── Solutions / personas ── */
export const personas = [
  {
    key: "councils",
    title: "Local authorities",
    pain: "Stock data scattered across spreadsheets and legacy systems, with no confidence in the compliance denominator.",
    gain: "A single, evidence-led source of truth — and a controlled survey pipeline that feeds it without overwriting the master.",
  },
  {
    key: "has",
    title: "Housing associations",
    pain: "Decent Homes, HHSRS and damp/mould obligations to evidence, often across mixed-tenure and delegated stock.",
    gain: "Issue-level HHSRS, photo evidence and a QA gate that makes every claim auditable and every gap visible.",
  },
  {
    key: "suppliers",
    title: "Supplier surveyors",
    pain: "Field teams working in dead-signal estates with apps that lose data the moment the connection drops.",
    gain: "Capture everything offline, restricted to your assigned batch, with drafts and photos that survive any restart.",
  },
  {
    key: "compliance",
    title: "Compliance & assurance",
    pain: "Dashboards that show green because data is missing, not because the building is safe.",
    gain: "A controlled denominator where unknowns are exceptions, with maker-checker approval on every protected change.",
  },
] as const;

/* ── FAQ ── */
export const faqs = [
  {
    q: "Does it really work with no signal?",
    a: "Yes. The device's local database is the source of truth during fieldwork. Surveyors open, answer, photograph and draft entirely offline; everything persists across closing and reopening the app, and syncs when a connection returns.",
  },
  {
    q: "How do you stop field data and back-office data overwriting each other?",
    a: "Every sync compares the master version the device pre-loaded against the current server version. If the master changed, the push is blocked and logged as a conflict for review — it is never silently overwritten in either direction.",
  },
  {
    q: "Can we use it for inspections other than stock condition surveys?",
    a: "Stock condition surveys are live and demo-ready today. The capture engine is template-driven from a versioned question set, so the same offline, evidence-led, QA-gated pipeline extends to other inspection types — fire risk assessments, monthly housing inspections and before-and-after repair records are on the roadmap. One engine, configured per inspection, rather than a rigid form you wait months to change.",
  },
  {
    q: "How does it fit alongside our existing AMS or CRM?",
    a: "Haven AMS is built to feed a single source of truth. It exports stable-key, referentially-joined data that loads cleanly into a warehouse or BI tool, and its conflict-control model is designed to reconcile against external systems rather than overwrite them.",
  },
  {
    q: "Is it installable without an app store?",
    a: "Yes. It's an installable progressive web app. Field teams add it to the home screen and it runs offline — no store submission, no managed-device rollout required.",
  },
  {
    q: "What about authentication and access control?",
    a: "Access is named-user and least-privilege, with per-scope restriction so external surveyors only ever see their assigned properties. It's built to wire into SSO/MFA and remote revocation for production deployments.",
  },
  {
    q: "Where is our data stored?",
    a: "Every council runs on its own dedicated UK-region instance — no shared tenancy and no shared database between councils. Data resides in the Supabase London region (eu-west-2), photos sit in private storage read only through short-lived signed URLs, and row-level security scopes every query.",
  },
  {
    q: "Can we ask Haven questions about our data?",
    a: "Today you reach the answer in a few clicks — role-based dashboards, the No Access report and reconciled exports give you the number with the exceptions and context behind it. A natural-language assistant that answers questions directly from your assured data is on our roadmap.",
  },
];

export const stats = [
  { value: "100%", label: "Field capture works offline" },
  { value: "0", label: "Silent overwrites of the master record" },
  { value: "8", label: "Stable-key tables in every structured export" },
  { value: "1", label: "Source behind both the PDF and the data" },
];

