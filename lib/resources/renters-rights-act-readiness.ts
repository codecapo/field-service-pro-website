import type { Resource } from "@/lib/resources-types";

/* Industry explainer for the private rented sector.

   Deliberately about the obligations, not about how Haven implements them —
   the resources hub replaced two product-internals pieces (an RBAC role matrix
   and an export-schema dictionary) that told competitors how the product works
   and told nobody what they were searching for.

   Dates, thresholds and penalties here are stated as at July 2026 and will
   move as secondary legislation lands. `legalNote` renders the "general
   guidance, not legal advice" line — mandatory on anything of this kind. */
export const rentersRightsActReadiness: Resource = {
  slug: "renters-rights-act-readiness",
  title: "The Renters' Rights Act: a readiness guide for private landlords",
  summary:
    "What changed on 1 May 2026, what the PRS Database will ask of you, and the evidence a landlord needs to hold to let legally and keep possession routes open.",
  category: "regulatory",
  kind: "article",
  readTime: "11 min read",
  updated: "July 2026",
  legalNote: true,
  blocks: [
    {
      type: "paragraph",
      text: "For most of the last thirty years, private-landlord compliance was a loose collection of certificates. Renewal dates lived in a spreadsheet, evidence lived in an inbox, and nobody checked unless something went wrong. The Renters' Rights Act 2025 ends that arrangement. Compliance is becoming registered, evidenced and enforceable — and the practical consequence for a landlord is that the paperwork is no longer paperwork. It is the thing that determines whether you can let a property at all.",
    },
    {
      type: "keytakeaways",
      items: [
        "Section 21 is gone. Possession runs solely through Section 8 grounds, and prerequisite documents you cannot evidence can undermine a claim.",
        "Civil penalties are two-tier: up to £7,000 for a breach, up to £40,000 for an offence. A breach becomes an offence if it continues 28 days after a penalty, or repeats within five years.",
        "Rent repayment orders now run to 24 months, doubled from 12.",
        "From late 2026 the PRS Database begins rolling out. An unregistered landlord cannot let legally, and cannot obtain possession except on anti-social-behaviour grounds.",
        "Councils gained enhanced investigatory powers on 27 December 2025 and keep the penalty income, ring-fenced for enforcement. Expect proactive activity, not complaint-led only.",
      ],
    },

    { type: "heading", id: "what-changed", text: "What changed on 1 May 2026" },
    {
      type: "paragraph",
      text: "Phase 1 of the Act commenced on 1 May 2026 and applied to existing tenancies as well as new ones. The headline is the abolition of Section 21, but the operational changes around it matter just as much day to day.",
    },
    {
      type: "bullets",
      items: [
        "All tenancies are periodic. Fixed terms no longer survive, and possession runs solely through Section 8 grounds.",
        "Ground 1 and 1A (moving in, or intending to sell) require four months' notice and cannot take effect during the first twelve months of a tenancy.",
        "Ground 8 (rent arrears) rose to a three-month threshold with four weeks' notice.",
        "Rent may be increased once per twelve months, by Section 13 notice on Form 4A with two months' notice. Contractual rent-review clauses are void, the tribunal cannot set a rent higher than the landlord proposed, and increases are not backdated.",
        "No more than one month's rent may be taken in advance before a tenancy starts, and rental bidding is banned — the advertised rent cannot be exceeded by invited offers.",
        "Tenants may request a pet, which cannot be unreasonably refused. Discrimination against families or benefit recipients is prohibited.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "The How to Rent guide no longer exists",
      body: "It was withdrawn on 1 May 2026. New tenancies require a Written Statement of Terms; existing tenancies required the Renters' Rights Act Information Sheet 2026 to be served by 31 May 2026. Serving the withdrawn guide does not discharge the duty — and being unable to evidence that the correct document was served is its own exposure.",
    },

    { type: "heading", id: "the-obligations", text: "The obligations, and what evidences each" },
    {
      type: "paragraph",
      text: "A single let property carries roughly eight to twelve distinct legal obligations. They are easy to lose track of because they do not share a clock: some are asset-linked and periodic, some are triggered by the tenancy, and some depend entirely on which council the property sits in.",
    },
    {
      type: "table",
      caption: "Always-on obligations for a let property in England, as at July 2026.",
      columns: ["Obligation", "Cadence or trigger", "What evidences it", "Maximum exposure"],
      rows: [
        ["Gas safety", "Annually; to the tenant within 28 days, and to new tenants before move-in", "Gas Safety Record (LGSR / CP12)", "Criminal — unlimited fine or imprisonment"],
        ["Electrical (EICR)", "At least every five years; remedial works within 28 days", "Satisfactory EICR plus remedial evidence", "Civil penalty up to £30,000"],
        ["Energy (EPC / MEES)", "EPC valid ten years; floor is band E now, band C from 1 Oct 2030", "Valid EPC at the required band, or an exemption-register entry", "Up to £5,000, rising to £30,000 on reform"],
        ["Smoke and CO alarms", "Working check at the start of every tenancy; repair on report", "Dated install and test record", "Civil penalty up to £5,000"],
        ["Legionella", "Risk assessment, reviewed roughly two-yearly or on change", "Legionella risk assessment — no certificate exists", "Prosecution under HSWA where harm results"],
        ["Right to Rent", "Before the tenancy; follow-ups for time-limited status", "Check record and retained copies, or share-code result", "£10,000 per occupier, £20,000 repeat; criminal if knowing"],
        ["Deposit protection", "Protect and serve prescribed information within 30 days", "Scheme certificate and prescribed information", "Court order of one to three times the deposit"],
        ["Tenancy documents", "Written Statement for new lets; Information Sheet for existing", "Record that the correct document was served", "Up to £7,000, rising to £40,000"],
        ["Fire safety (HMO / communal)", "Ongoing", "Fire risk assessment; furnishings compliance", "Enforcement or prohibition; unlimited fine"],
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Licensing is the one that varies",
      body: "Mandatory HMO licensing applies broadly at five or more occupiers forming two or more households. Beyond that, additional and selective licensing schemes are defined council by council, with their own boundaries, fees, durations and conditions — and they change frequently. Operating unlicensed carries a civil penalty of up to £40,000, raised from £30,000 on 1 May 2026, plus a rent repayment order of up to 24 months.",
    },

    { type: "heading", id: "unknown-is-not-compliant", text: "\"I think so\" is not evidence" },
    {
      type: "paragraph",
      text: "The most common failure is not a landlord who knows they are non-compliant. It is a landlord who believes they are compliant and cannot prove it — the certificate is in an email somewhere, the alarm was tested but not recorded, the deposit was protected but the prescribed information was never served. Under a penalty regime that now reaches £40,000 and 24 months of rent, the gap between compliant and evidenced is the entire risk.",
    },
    {
      type: "bullets",
      items: [
        "Treat an obligation with no evidence as unknown, not as satisfied. A portfolio view that counts unknowns as green is worse than no view at all.",
        "Record the date evidence was served or tested, not just that it exists — several duties are about timing, and the timing is what gets challenged.",
        "Keep evidence attached to the property and the tenancy it relates to. A certificate that cannot be tied to the right let is hard to rely on.",
        "Retain for the statutory period, not indefinitely and not until the tenancy ends. Right to Rent copies, for example, run to the tenancy plus twelve months.",
      ],
    },

    { type: "heading", id: "whats-coming", text: "What is coming, and when" },
    {
      type: "table",
      caption: "Roadmap items. Timings depend on secondary legislation and should be treated as indicative.",
      columns: ["Change", "Expected", "What it means in practice"],
      rows: [
        ["PRS Database", "Regional roll-out from late 2026, wider in 2027", "Register yourself and each property, with compliance information. Without registration you cannot let legally, or obtain possession except on anti-social-behaviour grounds."],
        ["PRS Landlord Ombudsman", "Standing up from late 2026; membership expected around 2028", "A mandatory redress scheme. Complaints and the records behind them need to be retrievable."],
        ["MEES — EPC C", "All tenancies by 1 Oct 2030", "A dual metric on the new Home Energy Model, with a £10,000 cost cap; qualifying spend counts from 1 Oct 2025."],
        ["Awaab's Law extended to the PRS", "Consultation pending", "Time-bound hazard remediation clocks, as already applied in social housing."],
        ["Reformed Decent Homes Standard", "By 2035", "Five criteria including a new damp-and-mould criterion, on a condition-based, HHSRS Category 1-free baseline."],
      ],
    },

    { type: "heading", id: "what-to-do-now", text: "Where to start" },
    {
      type: "steps",
      items: [
        {
          title: "Build the list before you build the process",
          body: "For each property, write down which of the obligations above actually apply. Applicability is doing real work here — a property with no gas supply has no LGSR duty, and recording that as not-applicable is different from recording it as missing.",
        },
        {
          title: "Find the evidence, and date it",
          body: "For every applicable obligation, locate the artefact and record when it was issued, served or tested, and when it expires. Anything you cannot find is an unknown, and unknowns are where penalties come from.",
        },
        {
          title: "Check the tenancy-triggered duties separately",
          body: "Deposit protection, prescribed information, Right to Rent and the Written Statement or Information Sheet are triggered by the tenancy rather than the calendar. They are the easiest to miss on a mid-tenancy review because nothing expires to remind you.",
        },
        {
          title: "Confirm the licensing position council by council",
          body: "Check mandatory HMO thresholds, then check whether the property sits inside an additional or selective scheme. This is per-council and changes, so a portfolio spanning several authorities needs checking per property, not once.",
        },
        {
          title: "Get ahead of registration",
          body: "The PRS Database will ask for the same evidence you should already hold. A landlord who has the register and the certificates in order will find registration administrative; a landlord who does not will find it a deadline.",
        },
      ],
    },
    {
      type: "faq",
      items: [
        {
          q: "Does the Act apply to tenancies that started before 1 May 2026?",
          a: "Yes. Phase 1 converted existing assured shorthold tenancies to periodic tenancies as well as applying to new lets, which is why the Information Sheet had to be served to existing tenants by 31 May 2026.",
        },
        {
          q: "What is the difference between a breach and an offence?",
          a: "A breach attracts a civil penalty of up to £7,000. It becomes an offence — up to £40,000 — if it continues 28 days after a penalty is imposed, or if it repeats within five years. Councils may impose these as an alternative to prosecution.",
        },
        {
          q: "Can I still recover possession?",
          a: "Yes, but only on Section 8 grounds, and several grounds now carry longer notice periods and restrictions on when they can take effect. Prerequisite documents you cannot evidence may undermine a possession claim, which is a change in how much the record matters.",
        },
        {
          q: "Does this apply outside England?",
          a: "This guide covers England. Wales, Scotland and Northern Ireland operate materially different regimes, with their own registration and licensing requirements.",
        },
      ],
    },
  ],
  sources: [
    { label: "Renters' Rights Act 2025", publisher: "UK Parliament", url: "https://www.legislation.gov.uk" },
    { label: "Guidance for landlords and tenants", publisher: "Ministry of Housing, Communities & Local Government", url: "https://www.gov.uk" },
    { label: "Gas Safety (Installation and Use) Regulations 1998", publisher: "Health and Safety Executive", url: "https://www.hse.gov.uk" },
    { label: "Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020", publisher: "legislation.gov.uk", url: "https://www.legislation.gov.uk" },
  ],
};
