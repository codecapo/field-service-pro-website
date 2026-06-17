import type { Resource } from "@/lib/resources-types";

export const hhsrsFieldReference: Resource = {
  slug: "hhsrs-field-reference",
  title: "HHSRS in the field: a Category 1 and Category 2 quick reference",
  summary:
    "A practical reference to the Housing Health and Safety Rating System for surveyors and asset teams — the 29 hazards, how categories work, and how to record evidence that stands up.",
  category: "practical",
  kind: "article",
  readTime: "16 min read",
  updated: "June 2026",
  legalNote: true,
  blocks: [
    {
      type: "paragraph",
      text: "The Housing Health and Safety Rating System (HHSRS) is the risk-based framework used in England and Wales to judge whether a home is safe to live in. It does not ask whether a property meets a fixed checklist of features; it asks a more demanding question — what is the likelihood that something in this dwelling will cause harm to an occupant, and how serious would that harm be? For social landlords, HHSRS is no longer a tool that only environmental health officers reach for. It sits at the centre of stock condition surveys, the Decent Homes Standard, the response to damp and mould, and the evidence a landlord must be able to produce when a regulator, an ombudsman or a court asks how a hazard was identified and what was done about it.",
    },
    {
      type: "paragraph",
      text: "This reference is written for the people who actually carry HHSRS into the field: surveyors recording conditions on site, and the asset and compliance teams who have to turn those records into a defensible, portfolio-wide picture of risk. It explains what the system is, how the two hazard categories work, what the 29 hazards are, and — most importantly for day-to-day practice — how to capture HHSRS findings as structured, evidenced records rather than loose notes that fall apart under scrutiny.",
    },
    {
      type: "keytakeaways",
      items: [
        "HHSRS is risk-based: it scores the likelihood and severity of harm from a hazard, not the mere presence of a defect.",
        "There are 29 hazards arranged into four groups; any of them can be rated Category 1 (more serious) or Category 2 (less serious).",
        "A Category 1 hazard carries a duty to act — it should never sit unaddressed in your data.",
        "One hazard can generate several distinct issue records, each tracked to closure with its own evidence.",
        "Defensible HHSRS evidence means location, linked component, controlled reason codes, photographs, the named assessor, and a recorded action and priority.",
        "Exact scoring bands belong in the official operating guidance — use it for the arithmetic, and use disciplined records for everything else.",
      ],
    },
    {
      type: "heading",
      id: "what-hhsrs-is",
      text: "What HHSRS is and why it exists",
    },
    {
      type: "paragraph",
      text: "HHSRS was introduced under the Housing Act 2004 and replaced the older fitness standard, which judged homes against a pass-or-fail list of basic requirements. The problem with a fixed list is that it treats every defect the same and ignores who is exposed to it. A steep, poorly lit staircase is a minor inconvenience to a fit adult and a potentially fatal hazard to an elderly resident. HHSRS was designed to capture exactly that distinction: it assesses the risk a hazard poses, taking account of the most vulnerable group likely to be affected, rather than simply noting that a feature is present or absent.",
    },
    {
      type: "paragraph",
      text: "The system works by evaluating each potential hazard in a dwelling and producing a hazard rating. That rating reflects two things: how likely it is that an occurrence will happen over a defined period, and the range and seriousness of the harms that could result if it does. The output is a score that falls into a band, and those bands determine whether the hazard is a Category 1 or a Category 2 hazard. The framework is deliberately general — it can be applied to any residential building, of any age or construction — which is why it has endured as the common language of housing condition across enforcement, asset management and regulation.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Use the operating guidance for scoring",
      body: "The precise way hazard scores are calculated, and the score ranges that define each band and category, are set out in the official HHSRS operating guidance. This reference explains the concepts and good recording practice; for the actual arithmetic and band boundaries, always work from the current published guidance.",
    },
    {
      type: "heading",
      id: "categories",
      text: "Category 1 and Category 2 hazards",
    },
    {
      type: "paragraph",
      text: "Every hazard assessed under HHSRS resolves into a band, and those bands are split into two categories. Category 1 hazards are the most serious — the highest-scoring bands — and they are the ones that attract a legal duty for the relevant authority to take action. Category 2 hazards are less serious; action on them is more discretionary, but for a social landlord the word discretionary is misleading. A Category 2 damp and mould hazard that is left to deteriorate becomes a Category 1 hazard, a complaint, and eventually an enforcement or ombudsman matter. Treating Category 2 as a polite synonym for ignore is one of the most expensive mistakes a landlord can make.",
    },
    {
      type: "paragraph",
      text: "It is worth being clear about a common misconception: the category is a property of the hazard rating, not of the hazard type. There is no such thing as a hazard that is always Category 1. Excess cold, falls on stairs, fire, damp and mould — any of these can be Category 1 in one home and Category 2 in another, depending on the severity of the defect and the vulnerability of the people exposed to it. That is why the assessment has to be made on site, against the actual conditions and the actual occupants, and recorded with enough context to justify the rating later.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Category 2 is not a synonym for safe",
      body: "A Category 2 rating means lower current risk, not no risk and not no action. The most defensible approach is to record every hazard with its category, action and priority, and to track Category 2 hazards over time so deterioration is caught before it becomes a Category 1 problem.",
    },
    {
      type: "heading",
      id: "the-29-hazards",
      text: "The 29 hazards and their four groups",
    },
    {
      type: "paragraph",
      text: "HHSRS recognises 29 distinct hazards, organised into four groups according to the type of harm they threaten. A field reference is most useful when surveyors can recognise which group a problem belongs to, because that shapes the evidence they should gather. The table below lists the four groups with representative hazards from each; it is a memory aid, not a substitute for the full descriptions in the operating guidance.",
    },
    {
      type: "table",
      caption: "The four HHSRS hazard groups with representative hazards.",
      columns: ["Hazard group", "Representative hazards"],
      rows: [
        [
          "Physiological requirements",
          "Damp and mould growth; excess cold; excess heat; asbestos and manufactured mineral fibres; carbon monoxide and fuel combustion products; lead; radiation; uncombusted fuel gas; volatile organic compounds",
        ],
        [
          "Psychological requirements",
          "Crowding and space; entry by intruders; lighting; noise",
        ],
        [
          "Protection against infection",
          "Domestic hygiene, pests and refuse; food safety; personal hygiene, sanitation and drainage; water supply",
        ],
        [
          "Protection against accidents",
          "Falls associated with baths; falls on the level; falls on stairs and steps; falls between levels; electrical hazards; fire; flames and hot surfaces; collision and entrapment; explosions; position and operability of amenities; structural collapse and falling elements",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "Knowing the groups matters because the evidence that proves each kind of hazard is different. A falls hazard is demonstrated with measurements, photographs of the defect and notes on the people exposed. An excess cold hazard draws on the heating system, insulation and the building fabric. A damp and mould hazard needs photographs of the affected surfaces, an indication of extent and location, and a record of the likely cause. Recognising the group at the point of capture tells the surveyor what to photograph and what to write down before they leave the property.",
    },
    {
      type: "heading",
      id: "how-assessment-works",
      text: "How an HHSRS assessment works",
    },
    {
      type: "paragraph",
      text: "An HHSRS assessment follows a consistent logic even though the detail varies by hazard. First, the assessor identifies whether a hazard is present and what deficiency is causing it. Second, they judge the likelihood of an occurrence — the chance that, over a defined period, the hazard will actually cause harm to a member of the most vulnerable group. Third, they judge the spread of possible outcomes, from minor harm through to extreme harm, because a single hazard can produce a wide range of results. Combining likelihood and the spread of harms produces a numerical hazard score, and that score falls into one of a series of bands.",
    },
    {
      type: "paragraph",
      text: "The bands run on a lettered scale, with the highest scores at the top. The most serious bands fall into Category 1; the remainder fall into Category 2. The crucial point for field practice is that the rating is not a matter of taste — it is a structured judgement that someone else must be able to follow. That is only possible if the surveyor records the deficiency, the location, the likely cause, the people exposed and the evidence behind the judgement. A score with no supporting record is impossible to defend and impossible to act on with confidence.",
    },
    {
      type: "heading",
      id: "duty-to-act",
      text: "The duty to act on Category 1 hazards",
    },
    {
      type: "paragraph",
      text: "Where a Category 1 hazard exists, the relevant authority has a duty to take appropriate enforcement action, and a responsible social landlord should treat the identification of a Category 1 hazard in its own stock as a trigger for immediate attention rather than a finding to be filed. In practice that means the moment a Category 1 hazard is recorded, it should be visible to the people who can authorise a remedy, attached to a clear action and priority, and tracked until it is resolved with evidence. A Category 1 hazard that is captured but never surfaced to a decision-maker is arguably worse than one that was never recorded, because the organisation now has documented knowledge of a serious risk and no demonstrable response.",
    },
    {
      type: "paragraph",
      text: "This is where the quality of the data model matters as much as the quality of the survey. If hazards live as free text in a report, they cannot be counted, prioritised or chased. If they live as structured records with a category, an owner, an action and a due date, they can be reported on, escalated and closed. The difference between those two states is the difference between knowing your risk and merely having looked at it once.",
    },
    {
      type: "heading",
      id: "one-hazard-many-issues",
      text: "One hazard, several issues",
    },
    {
      type: "paragraph",
      text: "A single HHSRS hazard frequently gives rise to more than one piece of remedial work, and good practice is to record each as its own issue rather than collapsing them into a single line. Consider serious damp and mould in a flat: the hazard might require an investigation of a failed gutter, treatment of the affected internal surfaces, an improvement to ventilation, and a follow-up inspection. Each of those is a distinct action, with its own trade, its own timescale and its own closure evidence. Forcing them into one record loses the detail that proves the landlord addressed the whole hazard rather than just the most visible symptom.",
    },
    {
      type: "paragraph",
      text: "Capturing hazards at the issue level — each with a unique identifier, a type, a location, a linked component where relevant, and its own evidence — also makes the property-level picture honest. A property does not have a damp problem solved simply because someone wiped down a wall; it is solved when every linked issue is closed with evidence. Modelling hazards as collections of issues is what allows a category to remain open until all of its remedial work is genuinely complete.",
    },
    {
      type: "heading",
      id: "defensible-evidence",
      text: "Recording defensible HHSRS evidence",
    },
    {
      type: "paragraph",
      text: "The value of an HHSRS finding is only as good as the evidence behind it. Months or years later, when a complaint or claim arrives, the organisation has to be able to show not just what was found but who found it, when, where, and what happened next. A defensible HHSRS record captures the following:",
    },
    {
      type: "bullets",
      items: [
        "A unique issue identifier so the hazard can be referenced consistently across reports, works orders and exports.",
        "The hazard type and its category, with a controlled reason code rather than free text, so findings are comparable across surveyors and over time.",
        "The precise location and, where relevant, the specific component the hazard is linked to — a named room, a named element, not just the address.",
        "Photographs bound to that exact issue, captured on site, rather than a loose gallery that cannot be tied back to the finding.",
        "The named assessor, the device and the timestamp, so the record is attributable and the chain of custody is intact.",
        "A clear recommended action and a priority, so the finding leads to work rather than sitting inert in a file.",
      ],
    },
    {
      type: "paragraph",
      text: "Controlled reason codes deserve particular emphasis. When surveyors are free to type whatever they like, the same hazard is described five different ways by five different people, and the data cannot be aggregated or trusted. A controlled vocabulary — a fixed set of urgent-review and hazard reasons — turns subjective observations into comparable, reportable structured data. It is the single most effective discipline for making field findings usable at portfolio scale.",
    },
    {
      type: "heading",
      id: "damp-and-mould",
      text: "Damp and mould as a hazard",
    },
    {
      type: "paragraph",
      text: "Damp and mould growth is one of the 29 hazards in the physiological group, and it has become the most scrutinised of them all. The reasons are well known: the health consequences of prolonged exposure can be severe, and the expectation on landlords to identify, investigate and remedy damp and mould has been sharpened considerably in recent years. From an HHSRS perspective, damp and mould is assessed like any other hazard — by likelihood and severity of harm to the most vulnerable occupant — but the recording bar is now higher because the consequences of a weak record are higher.",
    },
    {
      type: "paragraph",
      text: "In the field, that means treating any observed damp or mould as a finding to be captured immediately, with photographs, an indication of extent and location, a view on the likely cause, and an action. It also means not waiting for the problem to be obvious before recording it. A surveyor who notes early signs and logs them as a tracked issue gives the organisation the chance to intervene before the hazard escalates — and gives it the evidence to show it acted promptly if questions are asked later.",
    },
    {
      type: "heading",
      id: "connections",
      text: "How HHSRS connects to Awaab's Law and the Decent Homes Standard",
    },
    {
      type: "paragraph",
      text: "HHSRS does not operate in isolation. The Decent Homes Standard uses the absence of Category 1 hazards as one of its core criteria, so a property with an unresolved Category 1 hazard cannot be considered decent. The strengthened obligations around damp and mould place specific expectations on landlords to investigate and act within defined timescales, and those obligations lean directly on HHSRS-style assessment to judge how serious a problem is. In each case, the common thread is evidence: the ability to show what was found, how serious it was, and what was done.",
    },
    {
      type: "paragraph",
      text: "Because these regimes overlap, the same well-structured HHSRS record can serve all of them. A hazard captured once, with its category, location, evidence and remedial actions, simultaneously feeds the Decent Homes assessment, the damp and mould response and any regulatory reporting. The alternative — capturing the same problem separately for each obligation — multiplies effort and multiplies the risk that the versions disagree.",
    },
    {
      type: "heading",
      id: "assess-record-act-close",
      text: "Assess, record, act, evidence closure",
    },
    {
      type: "paragraph",
      text: "A reliable HHSRS workflow can be reduced to four disciplined steps, each of which leaves a trace:",
    },
    {
      type: "steps",
      items: [
        {
          title: "Assess",
          body: "Identify the hazard and the deficiency causing it, consider the most vulnerable group exposed, and form a view of likelihood and severity using the operating guidance for the scoring.",
        },
        {
          title: "Record",
          body: "Create a structured issue with a unique identifier, the hazard type and category, a controlled reason code, the precise location and linked component, photographs and the named assessor — captured on site, working offline if necessary.",
        },
        {
          title: "Act",
          body: "Attach a clear recommended action and a priority, and make Category 1 hazards immediately visible to the people who can authorise a remedy. Break a single hazard into separate issues where it requires separate works.",
        },
        {
          title: "Evidence closure",
          body: "Track each issue to completion, attach closure evidence, and keep the hazard category open until every linked issue is genuinely resolved — so the record shows not just identification but resolution.",
        },
      ],
    },
    {
      type: "heading",
      id: "common-pitfalls",
      text: "Common assessment pitfalls",
    },
    {
      type: "paragraph",
      text: "Experienced teams see the same mistakes repeatedly. Avoiding them is largely a matter of discipline at the point of capture:",
    },
    {
      type: "bullets",
      items: [
        "Treating Category 2 as no action required, and so allowing deteriorating hazards to slip into Category 1 unnoticed.",
        "Recording hazards as free text, which makes them impossible to count, compare or report on across the portfolio.",
        "Capturing a single line for a hazard that actually requires several distinct remedial actions, losing the detail that proves it was fully addressed.",
        "Photographing conditions into a loose gallery that cannot be tied back to the specific issue it evidences.",
        "Assessing the hazard against an average occupant rather than the most vulnerable group likely to be affected.",
        "Losing field data when the device is offline, so the survey has to be repeated or the record is incomplete.",
      ],
    },
    {
      type: "callout",
      tone: "success",
      title: "Capture once, defend forever",
      body: "Every one of these pitfalls is a recording problem, not a knowledge problem. Surveyors usually see the hazard correctly; what fails is the record. Structured, attributable, evidence-rich capture at the point of inspection is what turns a good eye into a defensible audit trail.",
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
          q: "Is HHSRS a pass-or-fail standard?",
          a: "No. HHSRS is risk-based. It assesses the likelihood and severity of harm from each hazard and produces a rating, rather than checking a property against a fixed list of required features.",
        },
        {
          q: "What is the difference between Category 1 and Category 2?",
          a: "Category 1 hazards are the most serious — the highest-scoring bands — and attract a duty to act. Category 2 hazards are less serious and action is more discretionary, but they should still be recorded, prioritised and monitored for deterioration.",
        },
        {
          q: "Can the same hazard type be Category 1 in one home and Category 2 in another?",
          a: "Yes. The category reflects the hazard rating in that specific property, taking account of the severity of the defect and the vulnerability of the occupants, not the hazard type in the abstract.",
        },
        {
          q: "How many hazards does HHSRS cover?",
          a: "There are 29 hazards arranged into four groups: physiological requirements, psychological requirements, protection against infection, and protection against accidents.",
        },
        {
          q: "Where do the exact scores and band boundaries come from?",
          a: "From the official HHSRS operating guidance. This reference explains the concepts and good recording practice; the published guidance sets out the scoring method and the score ranges for each band and category.",
        },
      ],
    },
    {
      type: "heading",
      id: "how-field-service-pro-helps",
      text: "How ClearView AMS helps",
    },
    {
      type: "paragraph",
      text: "ClearView AMS is built around the issue-level model that defensible HHSRS practice demands. Every hazard is captured as a structured issue record with a unique identifier, a hazard type, a Category 1 or Category 2 rating, a controlled urgent-review reason code, a link to the specific component it affects, and its own photographs — bound to that issue rather than dropped into a loose gallery. One hazard can spawn several issues, each with its own action and priority, so a category stays honestly open until all of its remedial work is closed with evidence.",
    },
    {
      type: "paragraph",
      text: "Because capture happens fully offline, surveyors record hazards reliably in basements, stairwells and signal-dead estates without losing data, and every action is attributed to the named user with a timestamp and device. A property-level HHSRS summary rolls the issues up so Category 1 and Category 2 counts are visible at a glance, and the same accepted record produces both the inspection report and the structured export — so the hazards a regulator or ombudsman sees in the data reconcile exactly with the ones in the report. The result is HHSRS evidence that holds up: captured once, attributable, and ready to defend.",
    },
  ],
  sources: [
    {
      label: "Housing Health and Safety Rating System (HHSRS) operating guidance",
      publisher: "GOV.UK (Ministry of Housing, Communities & Local Government)",
      url: "https://www.gov.uk/government/publications/hhsrs-operating-guidance-housing-act-2004-guidance-about-inspections-and-assessment-of-hazards-given-under-section-9",
    },
    {
      label: "Housing health and safety rating system: guidance for landlords and property-related professionals",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/government/publications/housing-health-and-safety-rating-system-guidance-for-landlords-and-property-related-professionals",
    },
    {
      label: "Housing Act 2004",
      publisher: "legislation.gov.uk",
      url: "https://www.legislation.gov.uk/ukpga/2004/34/contents",
    },
    {
      label: "Building Research Establishment (HHSRS research and guidance)",
      publisher: "BRE",
      url: "https://bregroup.com/",
    },
    {
      label: "Regulator of Social Housing",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/government/organisations/regulator-of-social-housing",
    },
    {
      label: "Understanding the Health and Safety Rating System",
      publisher: "Chartered Institute of Environmental Health (CIEH)",
      url: "https://www.cieh.org/",
    },
    {
      label: "Damp and mould: understanding and addressing the health risks for rented housing",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/government/publications/damp-and-mould-understanding-and-addressing-the-health-risks-for-rented-housing",
    },
  ],
};
