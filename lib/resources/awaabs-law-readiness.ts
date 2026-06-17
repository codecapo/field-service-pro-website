import type { Resource } from "@/lib/resources-types";

export const awaabsLawReadiness: Resource = {
  slug: "awaabs-law-readiness",
  title: "Awaab's Law: a readiness guide for social landlords",
  summary:
    "What the damp-and-mould duty asks of social landlords in practice — and the asset data, evidence and record-keeping you need to meet it with confidence.",
  category: "regulatory",
  kind: "article",
  readTime: "15 min read",
  updated: "June 2026",
  legalNote: true,
  blocks: [
    {
      type: "paragraph",
      text: "Awaab's Law changed the conversation in social housing from 'did we get round to it?' to 'can we prove what we found, when we found it, and what we did about it?'. Named after Awaab Ishak, the two-year-old who died after prolonged exposure to mould in his family's home, the duty turns long-standing expectations about damp and mould into enforceable obligations with prescribed timescales. For asset and compliance teams, the headline is not the law itself — it is the operational discipline it demands. You cannot respond to a hazard within a strict timeframe if you do not know your stock, cannot capture evidence reliably in the field, and cannot trust that what your surveyors recorded actually reached the record of truth.",
    },
    {
      type: "paragraph",
      text: "This guide is written for the people who have to make compliance real: heads of asset management, compliance and building-safety leads, repairs managers and the surveyors who knock on doors. It explains what the duty asks for in principle, why it is as much a data problem as a repairs problem, and what 'good evidence' looks like when a regulator, an ombudsman or a court asks you to account for a property. It deliberately avoids quoting exact statutory day-counts, because those are set out in regulations that are phased and subject to change — always confirm the current figures against the official guidance linked at the end.",
    },
    {
      type: "keytakeaways",
      items: [
        "Awaab's Law converts damp-and-mould expectations into enforceable duties with prescribed investigation and remedy timescales — treat the clock as the design constraint.",
        "Compliance is an evidence discipline: you must be able to show what was reported, what you found, what you did, and when — for every property, on demand.",
        "The duty is being extended in phases to a wider set of hazards, so build a model that generalises beyond damp and mould rather than a single-hazard workaround.",
        "Field data is the weakest link: if a survey app loses data offline, or a sync silently overwrites the master, your evidence trail breaks exactly where it matters most.",
        "Resident communication is part of the duty, not an afterthought — keep an auditable record of what you told residents and when.",
      ],
    },
    {
      type: "heading",
      id: "why-awaabs-law-exists",
      text: "Why Awaab's Law exists",
    },
    {
      type: "paragraph",
      text: "Awaab Ishak died in 2020. The coroner's conclusion that prolonged exposure to mould in his home contributed to his death exposed a pattern that many in the sector recognised: hazards reported, investigations delayed, responsibility passed between teams, and residents left living with conditions that should never have persisted. Awaab's Law, introduced through the Social Housing (Regulation) Act 2023, responds by giving the relationship between landlord and resident a backbone of enforceable timescales. Where damp and mould (and, as the duty is extended, other prescribed hazards) are identified or reported, landlords must investigate and act within set periods, and must keep residents informed.",
    },
    {
      type: "paragraph",
      text: "The significance for asset teams is that the law moves the burden of proof. It is no longer enough to have acted reasonably in general; you must be able to demonstrate, property by property, that you met the specific obligations within the specific windows. That is an evidence and records problem long before it is a repairs problem — and it is where most organisations discover that their systems were built to store outcomes, not to prove process.",
    },
    {
      type: "heading",
      id: "what-the-duty-requires",
      text: "What the duty requires in practice",
    },
    {
      type: "paragraph",
      text: "Stripped to its principles, the duty asks four things of a landlord once a relevant hazard is reported or identified. The exact timescales attached to each step are set out in regulations and are being phased in — confirm the current figures before you set internal targets — but the shape of the obligation is stable and worth designing around now.",
    },
    {
      type: "bullets",
      items: [
        "Investigate promptly. Once a hazard is reported, you must inspect and assess it within a prescribed timeframe, and produce a written summary of what you found.",
        "Communicate. You must tell the resident what the investigation found and what you intend to do, within set periods and in a form they can keep.",
        "Act within strict timescales. Where the investigation finds a hazard that poses a risk, you must begin remedial work within prescribed windows, with shorter windows for the most serious or emergency cases.",
        "Keep records. You must retain evidence of the report, the investigation, the communication and the works — sufficient to demonstrate compliance after the fact.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "The clock starts on report, not on convenience",
      body: "The prescribed timescales begin when a hazard is reported or identified — not when a job is scheduled or a contractor is free. That means your intake, triage and assignment have to be as fast and as reliable as your works. A delay in routing a report to the right surveyor is a delay against the statutory clock.",
    },
    {
      type: "heading",
      id: "damp-mould-and-beyond",
      text: "Damp, mould — and the hazards beyond",
    },
    {
      type: "paragraph",
      text: "Awaab's Law began with damp and mould because that is where the most acute harm had been demonstrated, but the duty is being extended in phases to a broader set of hazards drawn from the same risk framework that underpins the Housing Health and Safety Rating System (HHSRS). For asset teams this phasing is the single most important planning signal in the whole regime: anything you build to handle damp and mould as a special case will have to be rebuilt when the next set of hazards comes into scope.",
    },
    {
      type: "paragraph",
      text: "The pragmatic response is to model the obligation generically. Treat 'a reported hazard with a prescribed investigation window and a prescribed remedy window' as the unit of work, and make the hazard category a property of the record rather than the foundation of a separate process. A system that already captures issues as structured, typed records — each with a category, a location, a linked component and an evidence trail — extends to new hazards by adding categories, not by re-architecting.",
    },
    {
      type: "table",
      caption:
        "A conceptual view of how the duty generalises — confirm current scope and timescales against official guidance.",
      columns: ["Hazard area", "Typical trigger", "What the duty demands", "What you must be able to prove"],
      rows: [
        ["Damp and mould", "Resident report or survey finding", "Investigate, communicate, remedy within prescribed windows", "When it was reported, what was found, what was done, dates throughout"],
        ["Excess cold / heat", "Survey finding or seasonal report", "Assess risk, act on hazards within windows", "Condition evidence, link to component (e.g. heating, glazing)"],
        ["Fire and electrical safety", "Inspection or report", "Investigate, remediate to timescale", "Certificate status, defect evidence, closure"],
        ["Other prescribed hazards (phased)", "Report or programmed survey", "Same investigate-communicate-act-record pattern", "Consistent, structured, time-stamped evidence per property"],
      ],
    },
    {
      type: "heading",
      id: "the-data-problem",
      text: "Why this is a data problem first",
    },
    {
      type: "paragraph",
      text: "Most landlords can fix a damp problem. What they struggle to do is prove, across thousands of properties, that every reported hazard was investigated and remedied within the windows — and to find the gaps before a regulator does. That capability rests on three foundations that have nothing to do with repairs craft and everything to do with data.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Know your stock",
          body: "You cannot prove compliance for properties you cannot reliably list, locate and describe. A current, accurate asset register — property, block and component — is the denominator against which everything else is measured. Unknown stock is not neutral; under scrutiny it reads as uncontrolled risk.",
        },
        {
          title: "Capture evidence at source",
          body: "The proof you need is created in the field: the photo of the affected wall, the surveyor's assessment, the timestamp. If that evidence is captured unreliably — lost when there is no signal, stored in a loose photo roll, or attributed to no one — it is worth little when challenged.",
        },
        {
          title: "Protect the record of truth",
          body: "Field data and back-office data must reconcile without destroying each other. A sync that silently overwrites a changed master, or a process with no review gate, means you can never be fully sure which version of events is authoritative.",
        },
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Connection to HHSRS and Decent Homes",
      body: "Awaab's Law does not replace HHSRS or the Decent Homes Standard — it sits alongside them and draws on the same hazard thinking. A damp-and-mould case may simultaneously be an HHSRS Category 1 or 2 hazard and a Decent Homes failure. Capturing it once, as a structured issue that can be rolled up against all three frameworks, avoids the parallel spreadsheets that cause data to diverge.",
    },
    {
      type: "heading",
      id: "what-good-evidence-looks-like",
      text: "What good evidence looks like",
    },
    {
      type: "paragraph",
      text: "When you are asked to account for a property, the quality of your evidence is what determines whether you can demonstrate compliance or merely assert it. Good evidence shares a small number of characteristics, and they are worth holding every record against.",
    },
    {
      type: "bullets",
      items: [
        "Time-stamped: every report, inspection, communication and works record carries a reliable date and time, so the chain against the prescribed windows is unambiguous.",
        "Attributed: every action is tied to a named user — the surveyor who inspected, the reviewer who accepted, the person who spoke to the resident — never an anonymous account.",
        "Bound to its subject: a photo belongs to a specific issue, component or location, not to a general gallery you have to interpret later.",
        "Structured before narrative: the hazard is recorded as a typed record with a category and a controlled reason code, with free text as supporting detail rather than the primary record.",
        "Traceable to closure: an issue can be followed from report through investigation and works to verified completion, with the closure itself evidenced.",
      ],
    },
    {
      type: "table",
      caption: "Evidence types and what each one actually proves.",
      columns: ["Evidence", "What it proves", "Weakness if done badly"],
      rows: [
        ["Time-stamped inspection record", "That you investigated, and when", "Worthless if the timestamp is the upload time, not the capture time"],
        ["Photo bound to an issue", "The condition you found, at that location", "A loose photo roll proves little and is hard to defend"],
        ["Resident communication log", "That you informed the resident as required", "A phone call with no record did not happen, evidentially"],
        ["Works completion with evidence", "That the hazard was remedied", "An 'completed' status with no closure evidence invites challenge"],
        ["Named-user audit trail", "Who did what, throughout", "Shared logins make accountability impossible to demonstrate"],
      ],
    },
    {
      type: "heading",
      id: "resident-communication",
      text: "Resident communication as a duty",
    },
    {
      type: "paragraph",
      text: "It is easy to treat communication as a courtesy that sits outside the compliance record. Under Awaab's Law it is part of the duty. You must tell residents what your investigation found and what you intend to do, within set periods, and in a form they can retain. That has two practical consequences. First, the communication itself must be logged as evidence — what was said, by whom, when, and how. Second, the language matters: residents are entitled to a clear, plain-English account, not a copy of an internal job code.",
    },
    {
      type: "paragraph",
      text: "Organisations that handle this well treat the resident-facing summary as an output of the same structured record that drives the works, so the two cannot drift apart. The investigation finding that triggers the repair is the same finding that is communicated to the resident — generated once, used in both places.",
    },
    {
      type: "heading",
      id: "common-pitfalls",
      text: "Common pitfalls",
    },
    {
      type: "bullets",
      items: [
        "Single-hazard tooling: building a damp-and-mould tracker that cannot extend to the hazards coming into scope, guaranteeing a rebuild.",
        "Upload-time timestamps: recording when a photo reached the server rather than when it was taken in the home, breaking the chain against the prescribed windows.",
        "Silent data loss: field apps that drop captures when there is no signal — exactly the basements and stairwells where damp is worst.",
        "Silent overwrites: syncs that let back-office edits and field edits clobber each other, so no version of events is trustworthy.",
        "Status without evidence: marking an issue 'resolved' with nothing attached to prove the remedy or its verification.",
        "Anonymous accounts: shared logins that make it impossible to attribute an action to a named, accountable person.",
        "Parallel spreadsheets: a compliance spreadsheet maintained separately from the asset record, so the two diverge and neither can be trusted as the denominator.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "'Unknown' is not 'compliant'",
      body: "The most dangerous failure mode is a dashboard that turns green because data is missing. If a property's hazard status is unknown, it should surface as an exception that needs resolving — never default to compliant. A reassuring dashboard built on gaps is worse than no dashboard, because it hides the very risk the duty exists to address.",
    },
    {
      type: "heading",
      id: "proactive-surveying",
      text: "From reactive to proactive surveying",
    },
    {
      type: "paragraph",
      text: "Awaab's Law is triggered by reports, but an organisation that only ever responds to reports is permanently on the back foot — racing the clock from the moment a resident raises a concern. The landlords who find the regime least stressful are those whose stock condition surveying is good enough that they already know where their damp risk concentrates. A current, evidence-led picture of condition lets you treat reported hazards as confirmation of something you were already managing, rather than as a surprise that starts a frantic countdown.",
    },
    {
      type: "paragraph",
      text: "This is where Awaab's Law and routine stock condition surveying converge. The same field discipline that produces a defensible response to a single report — structured issues, bound photo evidence, named-user attribution — also produces the portfolio-level intelligence that tells you which blocks, which construction types and which components are driving damp and mould across your stock. Capture once, to a consistent standard, and the same data serves the reactive duty and the proactive programme. Capture inconsistently, and you are left with neither.",
    },
    {
      type: "callout",
      tone: "success",
      title: "The compounding benefit",
      body: "Every survey that captures damp risk as a structured, evidenced record makes the next reported hazard cheaper to handle, because you already understand the property. Good evidence is not just a defence against challenge — it is the raw material of a planned, preventative programme that reduces the number of reports in the first place.",
    },
    {
      type: "heading",
      id: "governance-and-the-burden-of-proof",
      text: "Governance and the burden of proof",
    },
    {
      type: "paragraph",
      text: "When something goes wrong — a missed window, a complaint escalated to the Ombudsman, an inspection by the regulator — the question is rarely 'did you care?'. It is 'can you show what you did?'. That shifts the centre of gravity from intentions to records, and it makes governance a first-class concern rather than a back-office formality. Three governance habits make the difference between an organisation that can account for itself and one that cannot.",
    },
    {
      type: "bullets",
      items: [
        "Protected changes: where a record that bears on safety is altered — a hazard downgraded, a programme applicability changed — the change should require a reason, evidence and an independent approval, with the old and new values retained.",
        "Audit at the right grain: the audit trail should reach the property, component and issue level, not just the system level, so you can reconstruct the history of a single hazard.",
        "Separation of duties: the person who captures a finding should not be the only person who can sign it off as resolved — a maker-checker step keeps the record honest.",
      ],
    },
    {
      type: "paragraph",
      text: "None of this is bureaucracy for its own sake. Each habit exists so that, months or years later, you can answer the only question that matters with evidence rather than recollection. Organisations that retrofit governance after a crisis find it painful; those that build it into the way field data is captured barely notice it.",
    },
    {
      type: "heading",
      id: "a-readiness-approach",
      text: "A readiness approach",
    },
    {
      type: "paragraph",
      text: "You do not need a finished asset-management transformation to be ready for Awaab's Law, but you do need the spine: reliable stock data, trustworthy field capture, and a defensible record. The following sequence prioritises the steps that most directly reduce risk.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Establish the denominator",
          body: "Confirm you can reliably list and locate every property and its key components. Treat unknown or contradictory records as exceptions to resolve, not noise to ignore.",
        },
        {
          title: "Fix field capture",
          body: "Make sure surveyors can capture hazards, photos and assessments reliably in the field — including with no signal — and that nothing is lost between the home and the record.",
        },
        {
          title: "Make hazards structured records",
          body: "Capture each hazard as a typed issue with a category, a location, a linked component, controlled reason codes and bound photo evidence, so it can be tracked to closure and rolled up across frameworks.",
        },
        {
          title: "Put a review gate before the master",
          body: "Adopt a maker-checker step so field findings are reviewed before they update the record of truth, with the decision itself audited.",
        },
        {
          title: "Instrument the clock",
          body: "Track each hazard against its prescribed investigation and remedy windows, surfacing items approaching or past their target as exceptions — and confirm those windows against current regulations.",
        },
        {
          title: "Prove it on demand",
          body: "Make sure you can produce, for any property, the full chain of report, investigation, communication and remedy — with dates and named users — as a report and as structured data.",
        },
      ],
    },
    {
      type: "heading",
      id: "faq",
      text: "Frequently asked questions",
    },
    {
      type: "faq",
      items: [
        {
          q: "Does Awaab's Law only apply to damp and mould?",
          a: "It began with damp and mould, but the duty is being extended in phases to a wider set of hazards drawn from the HHSRS framework. Plan for the broader scope now rather than building a single-hazard solution you will have to replace.",
        },
        {
          q: "What are the exact timescales we have to meet?",
          a: "The prescribed timescales for investigation, communication and remedy are set out in regulations and are phased. They change, so we deliberately do not quote day-counts here — confirm the current figures against the official GOV.UK guidance before setting internal targets.",
        },
        {
          q: "Is this a repairs problem or a data problem?",
          a: "Both, but the part organisations underestimate is the data. Most can fix a damp problem; far fewer can prove, across their whole stock, that every reported hazard was investigated and remedied within the windows. That proof depends on reliable stock data and a defensible evidence trail.",
        },
        {
          q: "What counts as adequate evidence?",
          a: "Evidence that is time-stamped at the point of capture, attributed to a named user, bound to the specific issue or component, structured rather than free-text, and traceable from report through to a verified, evidenced closure.",
        },
        {
          q: "How does this relate to the Housing Ombudsman?",
          a: "The Housing Ombudsman has been highly active on damp, mould and complaint handling, and its findings often turn on whether a landlord can evidence what it did and when. Strong, structured records are your best protection in both regulatory and complaint contexts.",
        },
      ],
    },
    {
      type: "heading",
      id: "how-field-service-pro-helps",
      text: "How Field Service Pro helps",
    },
    {
      type: "paragraph",
      text: "Field Service Pro was built around exactly the evidence discipline Awaab's Law demands. Surveys are captured offline-first, so a surveyor working in a basement flat or a dead-signal stairwell — precisely where damp is worst — loses nothing; drafts and photos persist on the device and sync when a connection returns.",
    },
    {
      type: "bullets",
      items: [
        "Evidence is bound to its subject: every photo attaches to the specific question, component or issue it evidences, with capture and upload timestamps, the named user and the device travelling with it.",
        "Hazards are structured records: issues are typed, with HHSRS Category 1/2, controlled reason codes, a linked component and a unique ID — extensible to the hazards Awaab's Law brings into scope.",
        "No silent overwrite: every sync checks the master version it pre-loaded, blocking and logging conflicts instead of clobbering the record of truth.",
        "A QA gate before the master updates: field findings are reviewed and accepted or rejected with comments before they reach the live record, and every decision is audited.",
        "One source, two outputs: the same accepted record produces both a formatted report and a structured, stable-key export — so what you show a resident, a regulator and your BI tool all reconcile.",
      ],
    },
    {
      type: "paragraph",
      text: "The result is a record you can stand behind: for any property, you can show what was reported, what was found, who found it, what you did and when — the exact account Awaab's Law asks you to be able to give.",
    },
  ],
  sources: [
    {
      label: "Social Housing (Regulation) Act 2023",
      publisher: "legislation.gov.uk",
      url: "https://www.legislation.gov.uk/ukpga/2023/36/contents",
    },
    {
      label: "Awaab's Law and damp and mould guidance",
      publisher: "GOV.UK (Ministry of Housing, Communities & Local Government)",
      url: "https://www.gov.uk/government/collections/damp-and-mould-in-social-housing",
    },
    {
      label: "Regulator of Social Housing",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/government/organisations/regulator-of-social-housing",
    },
    {
      label: "Spotlight reports on damp and mould",
      publisher: "Housing Ombudsman Service",
      url: "https://www.housing-ombudsman.org.uk/",
    },
    {
      label: "Housing Health and Safety Rating System (HHSRS) operating guidance",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/government/publications/hhsrs-operating-guidance-housing-act-2004-guidance-about-inspections-and-assessment-of-hazards-given-under-section-9",
    },
    {
      label: "Understanding damp and mould: guidance for the social and private rented sectors",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/government/publications/damp-and-mould-understanding-and-addressing-the-health-risks-for-rented-housing-providers",
    },
    {
      label: "Damp and mould resources for housing professionals",
      publisher: "Chartered Institute of Housing",
      url: "https://www.cih.org/",
    },
  ],
};
