import type { Resource } from "@/lib/resources-types";

export const decentHomesReadiness: Resource = {
  slug: "decent-homes-readiness",
  title: "The Decent Homes Standard: a readiness guide for social landlords",
  summary:
    "What the Decent Homes Standard asks of you, how the bar is being raised, and the evidence-led stock picture you need to prove decency with confidence.",
  category: "regulatory",
  kind: "article",
  readTime: "15 min read",
  updated: "June 2026",
  legalNote: true,
  blocks: [
    {
      type: "paragraph",
      text: "The Decent Homes Standard is the benchmark that defines whether a social home is fit to let and live in. For most landlords it is also the single hardest thing to evidence at scale, because decency is not one fact about a property — it is a judgement assembled from the condition of the building, the safety of the dwelling, the age and adequacy of its key components, and how warm it is to live in. A home is either decent or it is not, and the regulator, residents and members all expect you to know which, for every property, and to be able to show your working.",
    },
    {
      type: "paragraph",
      text: "This guide explains what the standard is built from, the direction in which the bar is being raised, and — most importantly — the data and evidence you need to demonstrate decency rather than merely assert it. The through-line is simple: decency is a data problem before it is a works problem. If your stock picture is incomplete, out of date, or held in spreadsheets that disagree with each other, you cannot prove the homes are decent, and you cannot target the investment that would make them so.",
    },
    {
      type: "keytakeaways",
      items: [
        "Decency is a composite judgement — it fails if any one of the four criteria fails, so partial data gives you a false sense of compliance.",
        "You cannot evidence decency without an accurate, current, property-level stock picture backed by survey evidence.",
        "The standard is being reviewed and strengthened; prepare for a higher bar rather than waiting for the final wording.",
        "Decent Homes overlaps with HHSRS, damp and mould, and thermal comfort — the same survey evidence serves all of them.",
        "Failure reasons must be tracked to a remedy with evidence, not just counted, so a category stays open until it is genuinely closed.",
        "Treat 'unknown' as a failure to investigate, never as a quiet pass.",
      ],
    },
    {
      type: "heading",
      id: "what-is-decent-homes",
      text: "What the Decent Homes Standard actually is",
    },
    {
      type: "paragraph",
      text: "The Decent Homes Standard is a minimum quality threshold for social housing. It is deliberately a floor, not an aspiration: a decent home is one that meets a basic statutory minimum for safety, is in a reasonable state of repair, has reasonably modern facilities and services, and provides a reasonable degree of thermal comfort. A home must satisfy all four criteria to be decent. Fail any single one and the property is non-decent, regardless of how well it performs against the others.",
    },
    {
      type: "paragraph",
      text: "That all-or-nothing logic matters enormously for how you manage data. It means a property with an excellent kitchen, sound roof and efficient heating is still non-decent if it contains a serious hazard, and a beautifully warm flat is still non-decent if its bathroom is well beyond its useful life and lacks reasonably modern facilities. Decency cannot be inferred from a single strong signal; it has to be assembled from evidence against each criterion, for each dwelling.",
    },
    {
      type: "heading",
      id: "the-four-criteria",
      text: "The four criteria, and what evidences each",
    },
    {
      type: "paragraph",
      text: "The four criteria each draw on different evidence, captured at different points and sometimes by different teams. The table below sets out the criteria conceptually and the kind of evidence that demonstrates each. The detail of thresholds and definitions sits in current government guidance, which you should always read alongside this summary.",
    },
    {
      type: "table",
      caption: "The four decency criteria and the evidence that supports them",
      columns: ["Criterion", "What it asks", "Evidence that demonstrates it"],
      rows: [
        [
          "Statutory minimum for housing (free of serious hazards)",
          "The home must not contain a serious, hazard-level risk to health and safety.",
          "HHSRS assessment outcomes, hazard records with category, photographs, and remedy evidence.",
        ],
        [
          "Reasonable state of repair",
          "Key building and dwelling components must not be old and in poor condition together.",
          "Component-level condition ratings, age/installed dates, and observed remaining life from survey.",
        ],
        [
          "Reasonably modern facilities and services",
          "Kitchens, bathrooms and common services should not be both dated and inadequate.",
          "Component records for kitchens, bathrooms, services and layout, with age and adequacy notes.",
        ],
        [
          "Reasonable degree of thermal comfort",
          "The home should have effective heating and effective insulation.",
          "Heating type and condition, insulation measures, and energy data captured at survey.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "Read the table as a data specification, not just a policy summary. Each criterion implies records you must hold at the property and component level, each record must carry a date and a source so you know how current and how reliable it is, and each must be capable of being rolled up across the portfolio for reporting. If any of those records is missing, the criterion cannot be evidenced — and an unevidenced criterion is a non-decent risk, not a pass.",
    },
    {
      type: "heading",
      id: "statutory-minimum-hhsrs",
      text: "Criterion one: free of serious hazards",
    },
    {
      type: "paragraph",
      text: "The first criterion ties decency directly to the Housing Health and Safety Rating System (HHSRS). A home that contains a serious, category-level hazard fails the statutory minimum and is therefore non-decent until the hazard is remedied. This is the criterion most likely to move a property from decent to non-decent overnight, because hazards such as serious damp and mould, excess cold, falls, fire and electrical risks can emerge or worsen between surveys.",
    },
    {
      type: "paragraph",
      text: "Practically, this means your hazard data has to be live, not historic. A hazard recorded at survey, a hazard reported through repairs, and a hazard raised through a complaint all bear on the same decency judgement, and they need to converge on the property record rather than sitting in separate systems. It also means a hazard category should remain open until every linked issue is closed with evidence — closing the job is not the same as closing the hazard.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Hazards make decency time-sensitive",
      body: "Because a single serious hazard makes a home non-decent, decency is not a point-in-time survey result you can rely on for years. Build a process that captures hazards continuously and re-tests decency whenever a hazard is opened or closed.",
    },
    {
      type: "heading",
      id: "reasonable-repair",
      text: "Criterion two: a reasonable state of repair",
    },
    {
      type: "paragraph",
      text: "The repair criterion looks at whether key components of the building and the dwelling are old and, at the same time, in poor condition. The combination matters: an old component that is still performing well is not a failure, and a newer component in poor condition is a repair priority but assessed differently. To evidence this criterion you need, for each relevant component, both its age or installed date and a current condition rating — and ideally an observed remaining life so you can plan rather than react.",
    },
    {
      type: "bullets",
      items: [
        "Capture components as discrete records — roof, structure, windows, external doors, kitchen, bathroom, heating and electrics — not as a single free-text property note.",
        "Record a condition rating against a controlled scale so ratings are comparable across surveyors and over time.",
        "Hold installed dates or best-estimate ages so the 'old and in poor condition' test can actually be run.",
        "Capture observed remaining life and an estimated renewal year to turn condition data into a planned investment pipeline.",
      ],
    },
    {
      type: "heading",
      id: "modern-facilities",
      text: "Criterion three: reasonably modern facilities and services",
    },
    {
      type: "paragraph",
      text: "The facilities criterion considers whether the home has reasonably modern kitchens, bathrooms and common services, judged on age and adequacy together. As with repair, the test is about the combination of dated and inadequate — a slightly older kitchen that is well laid out and functional is treated differently from one that is both ageing and poorly configured. This is where consistent component capture pays off: if every kitchen and bathroom is a structured record with an age and an adequacy assessment, the criterion can be evaluated automatically across the stock rather than re-interpreted by hand.",
    },
    {
      type: "paragraph",
      text: "It is also where the parent-child structure of your data becomes important. A property may have more than one kitchen or bathroom, and each instance should be its own record so that 'Bathroom 1' and 'Bathroom 2' can carry different ages, conditions and renewal plans. Flattening multiple components into one summary line loses exactly the detail the criterion needs.",
    },
    {
      type: "heading",
      id: "thermal-comfort",
      text: "Criterion four: a reasonable degree of thermal comfort",
    },
    {
      type: "paragraph",
      text: "The thermal comfort criterion asks whether the home has both effective heating and effective insulation. This criterion increasingly sits at the intersection of decency, energy efficiency and the move toward warmer, lower-carbon homes. To evidence it you need the heating type and its condition, the insulation measures present, and supporting energy information captured at survey time. Because thermal comfort connects to retrofit and net-zero programmes, the same data you collect for decency feeds your wider energy strategy — provided it is captured in a structured, reusable way rather than as narrative.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Collect once, use many times",
      body: "Heating, insulation and energy data captured for the thermal-comfort criterion also serves retrofit targeting, fuel-poverty work and carbon reporting. Capturing it as structured fields at survey avoids re-surveying the same homes for each programme.",
    },
    {
      type: "heading",
      id: "the-direction-of-travel",
      text: "The direction of travel: a higher bar",
    },
    {
      type: "paragraph",
      text: "The Decent Homes Standard has been under review, with a clear policy direction toward a strengthened standard for both social and, in time, privately rented homes. While the precise final criteria, thresholds and timetable should always be confirmed against current government consultation and regulations, the direction of travel is consistent: a higher, more explicit bar, with particular attention to hazards such as damp and mould, to the condition of safety-critical components, and to thermal comfort and energy performance. The sensible planning assumption is that the standard will become more demanding and more closely scrutinised, not less.",
    },
    {
      type: "paragraph",
      text: "The risk in waiting for the final wording is that the underlying data work takes far longer than the drafting. Whatever the exact thresholds turn out to be, you will need a current, evidence-backed, property-level picture to apply them. Landlords who build that foundation now will be able to absorb a strengthened standard as a re-run of their decency logic against existing data; those who wait will face a strengthened standard and a data gap at the same time.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Verify the current standard",
      body: "This guide describes the standard conceptually and the direction of reform. Always confirm the criteria, thresholds and timetable that apply to you against the current GOV.UK guidance and any in-force regulations before making compliance decisions.",
    },
    {
      type: "heading",
      id: "the-data-problem",
      text: "Why decency is a data problem first",
    },
    {
      type: "paragraph",
      text: "Most landlords do not fail decency because they refuse to invest; they struggle because they cannot reliably say which homes are non-decent and why. Stock data is often spread across legacy systems, contractor spreadsheets and historic surveys of varying age and quality. Two sources disagree, nobody is sure which is right, and the safest assumption — that a missing or stale record means a potential failure — is precisely the assumption that gets lost when data is merged without discipline.",
    },
    {
      type: "paragraph",
      text: "A trustworthy decency picture has three properties. It is current, so the condition reflects the home as it is now, not as it was at the last survey years ago. It is complete, so every property and every relevant component has a record and an unknown is visibly an unknown. And it is evidenced, so every condition rating and hazard can be traced to a survey, a photograph, a named surveyor and a date. Without those three properties, a decency report is a guess with a number on it.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Unknown is not decent",
      body: "If a property's data is missing or out of date, the honest position is 'not yet evidenced', which should surface as an exception to investigate — never quietly counted as decent. A dashboard that turns missing data green is the most dangerous report you can run.",
    },
    {
      type: "heading",
      id: "surveys-underpin-decency",
      text: "How stock condition surveys underpin decency",
    },
    {
      type: "paragraph",
      text: "The stock condition survey is where the decency evidence is born. A good survey captures the property identity, the components and their condition and age, the hazards present, and the heating and energy picture — all in one controlled visit. The quality of that capture determines the quality of every decency judgement, planned investment decision and regulatory return that follows. If the survey is structured, photo-evidenced and validated on site, decency reporting becomes a query over reliable data; if the survey is free text and loose photos, every report becomes an act of interpretation.",
    },
    {
      type: "bullets",
      items: [
        "Capture against a controlled question set so every surveyor records the same fields the same way.",
        "Bind photographs to the specific component or hazard they evidence, not to a general gallery.",
        "Validate completeness on site so missing required fields are caught before the surveyor leaves.",
        "Record who surveyed, on what device and when, so the evidence is attributable and auditable.",
        "Treat the survey as a point-in-time snapshot that updates the live record only after review.",
      ],
    },
    {
      type: "heading",
      id: "tracking-failures",
      text: "Tracking failures to remedy, with evidence",
    },
    {
      type: "paragraph",
      text: "Counting non-decent homes is the easy part. The harder discipline is tracking why each home fails and managing each failure reason through to an evidenced remedy. A property may be non-decent for more than one reason, and each reason needs an owner, a planned action and closure evidence. Decency should only flip back to decent when every contributing failure has been genuinely resolved and the resolution has been recorded — not when a work order is marked complete in a separate system.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Record the failure reason",
          body: "Capture the specific criterion that failed and the underlying defect or hazard, linked to the component it concerns.",
        },
        {
          title: "Assign and plan the remedy",
          body: "Give the failure an owner, a priority and a planned action, so it enters a managed pipeline rather than a list.",
        },
        {
          title: "Evidence the resolution",
          body: "On completion, attach the evidence — photographs, a post-works check, a re-survey — that proves the criterion is now met.",
        },
        {
          title: "Re-test decency",
          body: "Re-run the decency judgement for the property once all contributing failures are closed with evidence, and update the live record.",
        },
      ],
    },
    {
      type: "heading",
      id: "hhsrs-damp-energy-link",
      text: "The overlap with HHSRS, damp and mould, and energy",
    },
    {
      type: "paragraph",
      text: "Decency does not sit in isolation. The hazard criterion is HHSRS by another name; damp and mould obligations, including the heightened expectations around timely action, bear directly on the hazard and repair criteria; and thermal comfort connects decency to energy efficiency and retrofit. The practical lesson is that these should not be four separate data-collection exercises. One well-designed survey can capture the evidence that serves decency, HHSRS, damp and mould tracking and energy programmes at once, provided the data is structured so each programme can read what it needs.",
    },
    {
      type: "paragraph",
      text: "This shared-evidence approach also protects you when obligations tighten. If damp and mould expectations rise, or the energy bar moves, you are extending an existing structured dataset rather than commissioning a new survey programme. The cost of keeping decency current falls dramatically when the evidence is captured once, cleanly, and reused.",
    },
    {
      type: "heading",
      id: "reporting-and-assurance",
      text: "Reporting and assurance to the Regulator",
    },
    {
      type: "paragraph",
      text: "Under the strengthened consumer regulation regime, the Regulator of Social Housing expects landlords to have an accurate, up-to-date understanding of the condition of their stock and to act on it. Decency reporting is therefore not only an internal management metric; it is part of demonstrating that you know your homes and are meeting the standards residents are entitled to expect. That raises the bar on data quality: the numbers you report need to be defensible, traceable to evidence, and consistent between the figure on the board report and the records behind it.",
    },
    {
      type: "bullets",
      items: [
        "Make sure the decency figure on a report reconciles exactly with the property-level records behind it.",
        "Be able to show the evidence — survey, photographs, hazard records — for any property on request.",
        "Surface data gaps and stale surveys as named exceptions, so assurance is honest about what is not yet known.",
        "Keep an audit trail of changes to decency status, including who changed it and on what evidence.",
      ],
    },
    {
      type: "heading",
      id: "a-readiness-approach",
      text: "A practical readiness approach",
    },
    {
      type: "paragraph",
      text: "Getting ready for a current and strengthening standard is a sequence, not a single project. The aim is to move from a fragmented, partly-unknown stock picture to a current, evidenced and reportable one, and then to keep it that way.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Establish the data baseline",
          body: "Bring stock data into one place, identify gaps and stale surveys, and treat every unknown as an exception to clear.",
        },
        {
          title: "Re-survey to a controlled standard",
          body: "Run evidence-led stock condition surveys against a controlled question set, prioritising the oldest and least-known stock.",
        },
        {
          title: "Run the decency logic",
          body: "Apply the four criteria to the evidenced data so you know which homes are decent, which are not, and why.",
        },
        {
          title: "Plan and evidence remedies",
          body: "Turn failure reasons into a planned investment pipeline, and capture closure evidence as works complete.",
        },
        {
          title: "Keep it current",
          body: "Feed hazards from repairs and complaints back into the record continuously, and re-test decency when things change.",
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
          q: "Can a home be non-decent even if it looks fine?",
          a: "Yes. A property can fail on a single criterion — for example a serious hazard or a heating system that no longer provides reasonable thermal comfort — while appearing presentable. Decency is a composite test, so visual impressions are not evidence.",
        },
        {
          q: "How current does our stock data need to be?",
          a: "Current enough that you would defend it to the Regulator and to residents. Because hazards can change a home's status at any time, decency relies on a live picture, not only on periodic surveys. Stale or missing data should be treated as a gap to close.",
        },
        {
          q: "Should we wait for the updated standard before acting?",
          a: "No. Whatever the final criteria and timetable, you will need an accurate, evidenced, property-level dataset to apply them. Building that foundation now means a strengthened standard becomes a re-run of your decency logic rather than a fresh data crisis.",
        },
        {
          q: "How does decency relate to HHSRS and damp and mould work?",
          a: "They overlap heavily. The hazard criterion is effectively HHSRS, and damp and mould bear on both the hazard and repair criteria. One well-structured survey can evidence all of them at once, which is far more efficient than separate exercises.",
        },
        {
          q: "What is the single biggest mistake landlords make?",
          a: "Treating missing data as a pass. Counting unknown properties as decent produces a comforting but false figure. The safer and more defensible approach is to surface unknowns as exceptions and investigate them.",
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
      text: "ClearView AMS is built around the exact evidence the Decent Homes Standard demands. Stock condition surveys are captured against a controlled question set, fully offline, with photographs bound to the specific component or hazard they evidence and every action attributed to a named surveyor with a timestamp. The data model treats the property as the asset, with components beneath it and issues beneath those, so each kitchen, bathroom, roof and heating system is a discrete record carrying its own age, condition and renewal plan — exactly the structure the repair and facilities criteria need.",
    },
    {
      type: "paragraph",
      text: "Because condition and lifecycle data are captured as structured fields, they feed planned investment directly: observed remaining life and estimated renewal years turn a decency assessment into a costed programme. Hazards are recorded as issue-level records with categories and reason codes, so the statutory-minimum criterion is evidenced and a category can be kept open until every linked issue is closed. A quality-assurance gate means survey snapshots only update the live record after review, and a no-silent-overwrite control means field data and back-office data can never quietly destroy each other — so the decency picture you report stays trustworthy.",
    },
    {
      type: "paragraph",
      text: "Finally, the same accepted data drives both the human-readable report and a structured export with stable keys, so the decency figure on a board paper reconciles with the records behind it and loads cleanly into your wider reporting. Decency stops being an annual scramble and becomes a query over evidence you can stand behind.",
    },
  ],
  sources: [
    {
      label: "A decent home: definition and guidance",
      publisher: "GOV.UK (Ministry of Housing, Communities & Local Government)",
      url: "https://www.gov.uk/government/publications/a-decent-home-definition-and-guidance",
    },
    {
      label: "Decent Homes Standard review and consultation",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/government/consultations",
    },
    {
      label: "Housing Health and Safety Rating System (HHSRS) operating guidance",
      publisher: "GOV.UK",
      url: "https://www.gov.uk/government/publications/hhsrs-operating-guidance-housing-act-2004-guidance-about-inspections-and-assessment-of-hazards-given-under-section-9",
    },
    {
      label: "Regulator of Social Housing: consumer standards",
      publisher: "Regulator of Social Housing (GOV.UK)",
      url: "https://www.gov.uk/government/organisations/regulator-of-social-housing",
    },
    {
      label: "Housing Act 2004",
      publisher: "legislation.gov.uk",
      url: "https://www.legislation.gov.uk/ukpga/2004/34/contents",
    },
    {
      label: "Social Housing (Regulation) Act 2023",
      publisher: "legislation.gov.uk",
      url: "https://www.legislation.gov.uk/ukpga/2023/36/contents",
    },
    {
      label: "Understanding the Decent Homes Standard",
      publisher: "Chartered Institute of Housing",
      url: "https://www.cih.org",
    },
  ],
};
