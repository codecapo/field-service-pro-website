import type { Resource } from "@/lib/resources-types";

export const stockConditionSurveyPlaybook: Resource = {
  slug: "stock-condition-survey-playbook",
  title: "Stock condition surveys done right: an offline-first field playbook",
  summary:
    "A practitioner's guide to running stock condition surveys that produce trustworthy, evidence-led data — from pre-load to QA to reconciled outputs.",
  category: "practical",
  kind: "article",
  readTime: "16 min read",
  updated: "June 2026",
  legalNote: false,
  blocks: [
    {
      type: "paragraph",
      text: "A stock condition survey is only as good as the data it leaves behind. Done well, it becomes the foundation for everything that follows — decency assessments, compliance programmes, planned investment, option appraisal and the daily decisions that keep residents safe. Done badly, it produces a folder of PDFs that nobody trusts, a spreadsheet that contradicts the last one, and a field team that quietly works around the system. The difference is rarely the surveyor's eye for a worn worktop. It is the discipline of the process around them.",
    },
    {
      type: "paragraph",
      text: "This playbook sets out how to run surveys that hold up: how to model the asset, prepare the field, capture evidence that proves what was seen, and move that evidence into a single source of truth without losing or corrupting it on the way. It is written for surveyors, survey managers and asset leads who have to answer the question every regulator, auditor and resident eventually asks — how do you know?",
    },
    {
      type: "keytakeaways",
      items: [
        "Treat the property as the asset: Property → Components → Issues, joined by stable keys that never change.",
        "Capture must work fully offline. Field data is lost where the signal is weakest — basements, stairwells and dead-signal estates.",
        "Structure before narrative: typed records with controlled codes beat free text every time.",
        "Evidence must be bound to the exact thing it evidences — the component, the issue, the question — with timestamps and a named user.",
        "Nothing should update the live record until it passes a quality gate, and nothing should silently overwrite the master.",
      ],
    },
    {
      type: "heading",
      id: "why-stock-condition-data-is-the-foundation",
      text: "Why stock condition data is the foundation",
    },
    {
      type: "paragraph",
      text: "Almost every strategic question a social landlord faces is, underneath, a data question. Is the home decent? Are the statutory hazards under control? What needs replacing, and when, and at what cost? Can we afford to hold this block, or should we invest, regenerate or dispose? None of these can be answered credibly without an accurate, current, evidence-backed picture of the physical stock — and that picture comes from the survey.",
    },
    {
      type: "paragraph",
      text: "The problem is that survey data is generated at the weakest point in the chain. By the time it reaches the asset register it has passed through a tablet in a cold flat, a patchy mobile connection, a sync process and a hand-off to the back office. Each step is an opportunity to lose, duplicate or distort what was actually observed. A good survey process is, in large part, the engineering that closes those gaps.",
    },
    {
      type: "callout",
      tone: "info",
      title: "The test that matters",
      body: "For any figure in your stock picture, you should be able to trace it back to who recorded it, when, where, and with what evidence. If you cannot, it is an assertion, not a fact — and assertions do not survive an inspection.",
    },
    {
      type: "heading",
      id: "the-property-as-asset-model",
      text: "Model the property as the asset",
    },
    {
      type: "paragraph",
      text: "The most important decision you make is structural, not procedural: how you model what you are surveying. The model that scales is a hierarchy — the Property is the asset, Components sit beneath it (kitchens, bathrooms, boilers, windows, roofs, fire doors), and Issues sit against the property or a specific component (a defect, a hazard, an action). Each level is a record in its own right, with a stable identifier that never changes for the life of the asset.",
    },
    {
      type: "paragraph",
      text: "Stable keys are what make the data trustworthy over time. A property keyed by its UPRN, a component by a durable record id, an issue by a unique issue id — these let you join survey to survey, reconcile a report against an export, and follow a hazard from the moment it was raised to the moment it was closed with evidence. When keys are stable, the same kitchen surveyed in 2023 and 2026 is recognisably the same kitchen, and you can see how its condition has changed rather than guessing.",
    },
    {
      type: "bullets",
      items: [
        "Property — the dwelling, identified by UPRN and a property reference, carrying address, block, estate and tenure.",
        "Component — a surveyable element (Kitchen 1, Bathroom 2, Boiler 1), with condition, remaining life and renewal year.",
        "Issue — a defect, hazard or required action, with a unique id, type, location and a link to the component it concerns.",
        "Evidence — photographs and notes, each bound to the property, component, issue or question it supports.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Counts drive child records",
      body: "When the surveyor records 'Bathrooms = 2', the system should create Bathroom 1 and Bathroom 2 automatically. Component instances should follow from the facts captured on site, not from a form the office filled in beforehand.",
    },
    {
      type: "heading",
      id: "preparing-and-pre-loading-the-survey-pack",
      text: "Prepare and pre-load the survey pack",
    },
    {
      type: "paragraph",
      text: "A survey that begins with a blank form wastes the surveyor's time and invites error. Before anyone goes on site, each assigned property should be pre-loaded as a pack: the address and UPRN, the existing component list where it is known, the controlled lookups and validation rules, the question set and its routing logic, and — crucially — a checksum and version so the device knows exactly which pack it holds.",
    },
    {
      type: "paragraph",
      text: "Pre-loading does two things. It lets the surveyor work entirely offline once they leave the office, and it sets up revalidation rather than re-keying. Where a prior accepted survey exists, seed it: pre-fill the bedroom, floor and component counts and the previously recorded condition, so the surveyor confirms and corrects rather than starting from nothing. Revalidation is faster, more consistent, and produces a visible history of change.",
    },
    {
      type: "bullets",
      items: [
        "Pack contents: property identity, existing components, lookups, routing logic, validation rules, pack version and checksum.",
        "Readiness state: every assigned property should show 'ready offline', with the pack version and the time it was last downloaded.",
        "Prior-survey seeding: pre-fill known facts so the visit is a revalidation, not a cold capture.",
        "Selective pre-load at scale: download only the assigned batch, not the whole portfolio.",
      ],
    },
    {
      type: "heading",
      id: "managing-access",
      text: "Manage and evidence access",
    },
    {
      type: "paragraph",
      text: "Access is the single biggest cause of incomplete programmes, and the access story is itself data that matters. Every attempt should be recorded — the date and time, the outcome, and a controlled reason where access was not gained (no answer, refused, unsafe, appointment not kept). A property that repeatedly cannot be accessed is not a gap to be quietly ignored; it is a risk to be surfaced, escalated and, in time, treated as a durable property-level flag that other services can see.",
    },
    {
      type: "paragraph",
      text: "Recording access properly also protects the organisation. When you can show three documented attempts with reasons, you can demonstrate that the failure to survey was not a failure of effort. That evidence is as important as the survey itself.",
    },
    {
      type: "heading",
      id: "why-offline-first-is-non-negotiable",
      text: "Why offline-first is non-negotiable",
    },
    {
      type: "paragraph",
      text: "Surveys happen where the signal is worst. Basements, plant rooms, communal stairwells, the back bedrooms of mid-rise blocks, rural estates — these are precisely the places an online-only tool fails. When a form depends on a live connection, the surveyor faces a choice between waiting, losing work, or writing it on paper to type up later. All three corrupt the data.",
    },
    {
      type: "paragraph",
      text: "An offline-first tool treats the device as the source of truth during fieldwork. The surveyor opens the pack, answers questions, captures components, takes photographs and saves drafts with no connection at all. Everything persists on the device across closing and reopening the app — so a dropped phone, a flat battery or a day that runs long does not erase a morning's work. Only when a connection returns does the device sync, and even then it does so carefully.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "The hidden cost of 'sync when you can'",
      body: "Many systems marketed as 'mobile' are really online forms with a thin cache. They look fine in a demo with full Wi-Fi and fail in a tower-block stairwell. Test any tool where the work actually happens before you trust it.",
    },
    {
      type: "heading",
      id: "capturing-components",
      text: "Capture components consistently",
    },
    {
      type: "paragraph",
      text: "Component capture is where consistency is won or lost. For each component instance, record a condition rating from a controlled scale, an observed remaining life in years, and an estimated renewal year. The controlled scale is what makes one surveyor's 'fair' mean the same as another's — free-text condition notes cannot be aggregated, ranked or trusted across a portfolio.",
    },
    {
      type: "table",
      caption: "An example controlled condition scale",
      columns: ["Rating", "Meaning", "Typical action"],
      rows: [
        ["Good", "Sound, well within its service life", "Monitor at next survey"],
        ["Fair", "Functional, showing age or wear", "Plan for the medium term"],
        ["Poor", "Nearing end of life or partially defective", "Schedule renewal soon"],
        ["Defective / replace", "Failed or unsafe; renewal required", "Raise for early works"],
        ["Unable to assess", "Could not be inspected", "Record reason; re-attempt"],
      ],
    },
    {
      type: "paragraph",
      text: "Where a component cannot be assessed — no access to the loft, a boarded-up room, a boiler behind a locked cupboard — capture that explicitly with a reason, rather than leaving the field blank. A blank looks like an oversight; a recorded 'unable to assess, no access' is honest data that can be acted on.",
    },
    {
      type: "heading",
      id: "the-required-vs-observed-principle",
      text: "Use the required-vs-observed principle",
    },
    {
      type: "paragraph",
      text: "Some checks have an expected answer, and the survey should know it. A carbon monoxide alarm should be present and working where there is a combustion appliance. A smoke alarm should be fitted. A fire door's self-closer should function. When the observed answer does not match the expected one, the tool should prompt the surveyor immediately — and offer to raise a pre-filled issue then and there, linked to the question that triggered it.",
    },
    {
      type: "paragraph",
      text: "This turns the survey from a passive record into an active safety net. The defect is captured at the moment it is observed, with the right type and a controlled reason, and it is deduplicated so the same prompt does not create three copies. The surveyor does not have to remember to log it later, when the detail has faded.",
    },
    {
      type: "heading",
      id: "photographic-evidence-done-right",
      text: "Get photographic evidence right",
    },
    {
      type: "paragraph",
      text: "Photographs are the strongest evidence a survey produces, and the easiest to render useless. A loose gallery of images with no context proves nothing six months later. Every photo should be bound to the specific thing it evidences — the question, the component, the issue or the access attempt — and should carry the time it was captured, the time it was uploaded, the named user and the device.",
    },
    {
      type: "bullets",
      items: [
        "Bind each image to a parent record, never a generic album.",
        "Stamp captured and uploaded timestamps, the user and the device.",
        "Downscale on capture so images sync efficiently over poor networks.",
        "Carry the photo through to the report, beside the record it supports.",
      ],
    },
    {
      type: "heading",
      id: "structured-before-narrative",
      text: "Structure before narrative",
    },
    {
      type: "paragraph",
      text: "The instinct to 'just write it in the notes' is the enemy of trustworthy data. A hazard captured as a typed issue — with a category, a location, a linked component, a priority and a controlled reason code — can be counted, sorted, reported and tracked to closure. The same hazard described in a free-text box can only be read. Structure first, then add narrative where it adds colour the structure cannot.",
    },
    {
      type: "paragraph",
      text: "This matters most for hazards. One physical problem — persistent damp on a north wall — might generate several distinct issues: the damp and mould hazard itself, a defective extractor fan, and a failed window seal. Each is a separate record with its own id, because each has its own remedy and its own evidence of closure. Collapsing them into one note loses that resolution.",
    },
    {
      type: "heading",
      id: "sync-discipline-and-no-silent-overwrite",
      text: "Sync with discipline — and never overwrite silently",
    },
    {
      type: "paragraph",
      text: "When the connection returns, the queue of captured work should drain automatically, with retries for anything that fails and a visible record of what is pending. But syncing is not just uploading — it is reconciling field data against a master record that may have moved on. If the back office changed the property's master since the pack was pre-loaded, blindly pushing the survey would overwrite that change.",
    },
    {
      type: "paragraph",
      text: "The safe pattern compares the master version the device pre-loaded against the current server version. If they differ, the push is blocked and logged as a conflict for someone to resolve — not silently applied in either direction. Field data and back-office data can disagree, but they should never quietly destroy one another.",
    },
    {
      type: "callout",
      tone: "success",
      title: "Make pending and failed visible",
      body: "Surveyors and managers should both be able to see what has synced, what is queued and what has failed, broken down by responses and photos. Invisible queues are where data quietly goes missing.",
    },
    {
      type: "heading",
      id: "quality-assurance-before-the-live-record",
      text: "Put a quality gate before the live record",
    },
    {
      type: "paragraph",
      text: "A submitted survey is a point-in-time snapshot, not the truth. Before it updates the live asset record it should pass an explicit quality gate: an independent reviewer reads the property facts, components and issues, checks the evidence, and either accepts the survey or rejects it with comments. Acceptance promotes it to the source that feeds reports and exports; rejection returns it to the surveyor, editable again, with a clear note of what needs fixing.",
    },
    {
      type: "paragraph",
      text: "This maker-checker step is the difference between a system you can certify and one you cannot. Every decision is attributed and audited, so you can always show who accepted what, and why. It also protects the surveyor: once a survey is accepted, it is a shared decision, not a lone judgement.",
    },
    {
      type: "heading",
      id: "outputs-that-reconcile",
      text: "Produce outputs that reconcile",
    },
    {
      type: "paragraph",
      text: "Most disputes about data are really disputes about two outputs that do not agree — a PDF report says one thing and the spreadsheet says another, because they were produced separately. The fix is to generate both from the same accepted source, so that every issue id in the report matches a row in the export. When the PDF and the structured data reconcile by construction, the argument disappears.",
    },
    {
      type: "table",
      caption: "From survey step to output",
      columns: ["Survey step", "What it produces", "Where it lands"],
      rows: [
        ["Property intelligence", "One-row stock facts", "Property summary + export"],
        ["Components", "Condition, remaining life, renewal year", "Component records + planned investment"],
        ["Issues / HHSRS", "Typed issues with ids and reason codes", "Issue register + HHSRS summary"],
        ["Photos", "Parent-linked, timestamped evidence", "Report sections + evidence store"],
        ["Review & accept", "QA-accepted snapshot", "Live record + PDF + structured export"],
      ],
    },
    {
      type: "heading",
      id: "the-end-to-end-survey-sequence",
      text: "The end-to-end survey sequence",
    },
    {
      type: "steps",
      items: [
        {
          title: "Assign and pre-load",
          body: "Allocate the batch, pre-load each pack offline with a version and checksum, and seed prior-survey facts where they exist.",
        },
        {
          title: "Record access",
          body: "Log each attempt and outcome with a controlled reason; surface repeated no-access as a flag.",
        },
        {
          title: "Capture intelligence and components",
          body: "Confirm property facts, let counts create component instances, and rate condition, remaining life and renewal year against controlled scales.",
        },
        {
          title: "Run safety checks",
          body: "Apply required-vs-observed prompts for alarms and fire doors, raising linked issues on mismatch.",
        },
        {
          title: "Log issues and evidence",
          body: "Capture each defect as a typed issue with photos bound to the exact record, and the HHSRS category where relevant.",
        },
        {
          title: "Validate and submit",
          body: "Let offline validation block incomplete or invalid submissions, then submit for QA.",
        },
        {
          title: "Sync and reconcile",
          body: "Drain the queue on reconnect; block and log conflicts rather than overwriting the master.",
        },
        {
          title: "Review, accept and output",
          body: "Accept at the QA gate, promote to the live record, and generate a PDF and structured export that reconcile.",
        },
      ],
    },
    {
      type: "heading",
      id: "scaling-to-thousands-of-properties",
      text: "Scale to thousands of properties",
    },
    {
      type: "paragraph",
      text: "A process that works for a demo of three flats can collapse at portfolio scale. Scaling needs server-side pagination and virtualised lists so a surveyor's device is never asked to hold the whole portfolio, faceted search by UPRN, address and issue, and selective pre-load so packs download in assigned batches. The data model — stable keys, typed records, a controlled question set — is what lets the same approach run across tens of thousands of homes without fragmenting.",
    },
    {
      type: "heading",
      id: "common-pitfalls",
      text: "Common pitfalls to avoid",
    },
    {
      type: "bullets",
      items: [
        "Free-text condition notes that cannot be aggregated or compared across the portfolio.",
        "Photo galleries with no link to the record they evidence.",
        "Online-only capture that loses data exactly where surveys happen.",
        "Last-write-wins sync that silently overwrites either the field or the master.",
        "Field edits hitting the master with no review and no audit trail.",
        "Reports and exports generated separately, so their numbers never quite agree.",
        "Blank fields where 'unable to assess, with a reason' was the honest answer.",
      ],
    },
    {
      type: "heading",
      id: "frequently-asked-questions",
      text: "Frequently asked questions",
    },
    {
      type: "faq",
      items: [
        {
          q: "How often should stock condition surveys be refreshed?",
          a: "Most landlords work to a rolling programme that revisits each property on a multi-year cycle, with more frequent attention to higher-risk stock and to homes where conditions or hazards have changed. The key is that the data is current enough to rely on for decency and investment decisions — and that you can show when each property was last verified.",
        },
        {
          q: "Should we use in-house surveyors or external suppliers?",
          a: "Both models work. What matters is that external suppliers are scoped to only their assigned properties, that every action is attributed to a named user, and that their submissions pass the same quality gate as internal work. The process should be identical regardless of who holds the tablet.",
        },
        {
          q: "What is the difference between a survey snapshot and the live record?",
          a: "A survey is a point-in-time observation. The live record is the durable, current truth about the asset. The survey only updates the live record after it has been accepted at the QA gate — keeping the snapshot as history while the live record reflects the accepted position.",
        },
        {
          q: "Can the same approach handle other inspection types?",
          a: "Yes. If the capture engine is driven by a versioned question set rather than hard-coded forms, the same offline, evidence-led, QA-gated process can run gas, electrical, fire-risk or damp inspections by swapping the question set.",
        },
        {
          q: "How do we keep data quality high across many surveyors?",
          a: "Controlled lookups, required-vs-observed prompts, submit-time validation and an independent QA gate do most of the work. Consistency comes from the system enforcing structure, not from hoping every surveyor remembers the same conventions.",
        },
      ],
    },
    {
      type: "heading",
      id: "how-field-service-pro-helps",
      text: "How Haven AMS helps",
    },
    {
      type: "paragraph",
      text: "Haven AMS is built around exactly this playbook. It models the property as the asset, with components and issues joined by stable keys, and pre-loads assigned packs with a checksum and version for fully offline working. Surveyors capture components, run required-vs-observed safety checks, raise typed HHSRS issues with controlled reason codes, and attach photos bound to the precise record they evidence — all with no signal and all persisting across app restarts.",
    },
    {
      type: "paragraph",
      text: "When the connection returns, the queue drains and conflicts are blocked rather than overwritten, so the master record is never silently destroyed. A QA reviewer accepts or rejects before anything reaches the live record, and the accepted source produces both a PDF report and an eight-table structured export whose ids reconcile. The result is survey data you can actually certify — captured where the work happens, evidenced at the point of observation, and trustworthy all the way to the boardroom.",
    },
  ],
  sources: [
    {
      label: "RICS Home Survey Standard and surveying guidance",
      publisher: "Royal Institution of Chartered Surveyors",
      url: "https://www.rics.org/profession-standards/rics-standards-and-guidance",
    },
    {
      label: "Housing Health and Safety Rating System (HHSRS) operating guidance",
      publisher: "GOV.UK / Ministry of Housing, Communities & Local Government",
      url: "https://www.gov.uk/government/publications/hhsrs-operating-guidance-housing-act-2004-guidance-about-inspections-and-assessment-of-hazards-given-under-section-9",
    },
    {
      label: "Decent Homes Standard: guidance for social landlords",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/guidance/decent-homes-standard-review",
    },
    {
      label: "Stock condition and asset management resources",
      publisher: "Chartered Institute of Housing",
      url: "https://www.cih.org/",
    },
    {
      label: "Regulatory standards for social housing",
      publisher: "Regulator of Social Housing (GOV.UK)",
      url: "https://www.gov.uk/government/organisations/regulator-of-social-housing",
    },
    {
      label: "UPRN: the Unique Property Reference Number",
      publisher: "GeoPlace / Ordnance Survey",
      url: "https://www.geoplace.co.uk/addresses-streets/location-data/the-uprn",
    },
  ],
};
