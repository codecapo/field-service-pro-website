import type { Resource } from "@/lib/resources-types";
import { awaabsLawReadiness } from "@/lib/resources/awaabs-law-readiness";
import { decentHomesReadiness } from "@/lib/resources/decent-homes-readiness";
import { stockConditionSurveyPlaybook } from "@/lib/resources/stock-condition-survey-playbook";
import { hhsrsFieldReference } from "@/lib/resources/hhsrs-field-reference";

export { resourceCategories } from "@/lib/resources-types";
export type { Resource, ResourceCategory } from "@/lib/resources-types";

/* ── Templates & tools: Survey data dictionary (the §10 export tables) ── */
const surveyDataDictionary: Resource = {
  slug: "survey-data-dictionary",
  title: "Survey data dictionary: the eight structured export tables",
  summary:
    "The stable-key, referentially-joined tables every accepted survey produces — the schema behind a Power BI-ready feed.",
  category: "tools",
  kind: "reference",
  readTime: "6 min read",
  updated: "June 2026",
  blocks: [
    {
      type: "paragraph",
      text: "A stock condition survey is only as useful as the data it leaves behind. ClearView AMS emits every accepted survey as eight flat tables with stable string keys, so the same record reconciles across the PDF report and the structured export — and loads cleanly into a warehouse or BI tool with no manual interpretation.",
    },
    {
      type: "callout",
      tone: "info",
      title: "One source, two outputs",
      body: "The PDF report and this export are generated from the same accepted record. Every issue ID in the report matches its export row — there is no second, divergent copy of the truth.",
    },
    { type: "heading", id: "the-tables", text: "The eight tables" },
    {
      type: "table",
      caption: "Each table is keyed by a stable string ID and joins on the keys below.",
      columns: ["Table", "Grain / primary key", "Representative fields", "Joins on"],
      rows: [
        ["property_survey", "One row per survey · surveyId", "uprn, propertyReference, surveyorId, schemaVersion, questionSetVersion, status, startedAt, submittedAt, intelligence summary", "surveyId"],
        ["access_attempt", "One row per access attempt", "surveyId, outcome (gained / no_access), reasonCode, attemptedAt, surveyor", "surveyId"],
        ["component_observation", "One row per component instance · componentRecordId", "surveyId, componentType, instanceLabel, conditionRating, remainingLifeYears, renewalYear, unableToAssessReason", "surveyId, componentRecordId"],
        ["issue_record", "One row per issue · issueId", "surveyId, uprn, propertyReference, issueType, hazardCategory (Cat 1/2), location, action, priority, reasonCode, componentRecordId, questionId", "surveyId, issueId, componentRecordId"],
        ["photo_evidence", "One row per photo · photoId", "parentEntityType, parentEntityId, capturedAt, uploadedAt, user, device, caption", "photoId, parentEntityId"],
        ["qa_event", "One row per QA decision", "surveyId, decision (accept / reject), comment, reviewer, decidedAt", "surveyId"],
        ["sync_event", "One row per sync event", "surveyId, type (response / photo / partial / failed / conflict), occurredAt", "surveyId"],
        ["lookup_version", "One row per controlled vocabulary version", "lookupVersionId, schemaVersion, questionSetVersion, lookups", "lookupVersionId"],
      ],
    },
    { type: "heading", id: "why-stable-keys", text: "Why stable keys matter" },
    {
      type: "paragraph",
      text: "Stable string identifiers mean a component, issue or photo can be traced from capture, through QA, into the report and the export, and onward into a warehouse — without re-keying or fuzzy matching. It is the difference between a data dump and a feed you can build dashboards on.",
    },
    {
      type: "bullets",
      items: [
        "issue_record.componentRecordId links each defect to the exact component it was found on.",
        "issue_record.questionId links a defect back to the question that raised it (e.g. a missing CO alarm).",
        "photo_evidence.parentEntityId binds every photo to its question, component, issue or access event — never a loose gallery.",
        "lookup_version pins the controlled vocabularies that were valid at survey time, so historic records stay interpretable.",
      ],
    },
    {
      type: "callout",
      tone: "success",
      title: "Power BI / warehouse ready",
      body: "Exported as an XLSX workbook (a sheet per table) and per-table CSV. Referential joins are preserved, so it lands in a data warehouse without manual interpretation.",
    },
  ],
  sources: [
    { label: "Stock condition data and asset management good practice", publisher: "Chartered Institute of Housing", url: "https://www.cih.org" },
    { label: "Regulatory reporting and data quality expectations", publisher: "Regulator of Social Housing (GOV.UK)", url: "https://www.gov.uk/government/organisations/regulator-of-social-housing" },
  ],
};

/* ── Templates & tools: RBAC role matrix (the 5 named roles) ── */
const rbacRoleMatrix: Resource = {
  slug: "rbac-role-matrix",
  title: "RBAC role matrix: named-user, least-privilege access",
  summary:
    "Five roles with per-role landing pages and per-scope restriction — the access model that keeps external surveyors to their own batch.",
  category: "tools",
  kind: "reference",
  readTime: "5 min read",
  updated: "June 2026",
  blocks: [
    {
      type: "paragraph",
      text: "Access is named-user and least-privilege: no shared accounts, every action attributed, and external surveyors restricted to only the properties assigned to them. Each role lands on the area relevant to its job and is guarded from the rest.",
    },
    { type: "heading", id: "the-roles", text: "The role matrix" },
    {
      type: "table",
      columns: ["Role", "Lands on", "Can", "Scope / cannot"],
      rows: [
        ["System administrator", "Admin", "Manage users and roles; see the role matrix", "Governs access; not a field capture role"],
        ["Survey manager", "Manage", "Assign survey batches, pre-load packs, monitor sync", "Cannot accept their own surveys through QA"],
        ["Newham (internal) surveyor", "Surveys", "Capture assigned surveys, photos, issues offline", "Sees only assigned properties"],
        ["External supplier surveyor", "Surveys", "Capture assigned surveys offline", "Restricted to an allow-list of assigned UPRNs only — never the wider portfolio"],
        ["QA reviewer", "QA", "Accept / reject submitted surveys with comments", "Read-only on capture; decisions are audited"],
      ],
    },
    { type: "heading", id: "principles", text: "The principles behind it" },
    {
      type: "bullets",
      items: [
        "Named users, not shared logins — every capture, photo, QA decision and sync event is attributed.",
        "Least privilege — each role sees only the lanes its job requires; wrong-role deep links are blocked.",
        "Per-scope restriction — external surveyors are scoped to an explicit UPRN allow-list.",
        "Offline identity — sign-in works from a cached identity so field work continues with no signal.",
        "SSO/MFA-ready — built to wire into single sign-on, multi-factor auth and remote revocation for production.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Maker-checker by design",
      body: "The QA reviewer role is the maker-checker gate: a survey only updates the live record after an independent reviewer accepts it — the same shape that generalises to delegated-partner assurance.",
    },
  ],
  sources: [
    { label: "Data protection by design and default", publisher: "Information Commissioner's Office", url: "https://ico.org.uk" },
    { label: "Access control guidance", publisher: "National Cyber Security Centre", url: "https://www.ncsc.gov.uk" },
  ],
};

/* ── Templates & tools: Compliance readiness checklist ── */
const complianceReadinessChecklist: Resource = {
  slug: "compliance-readiness-checklist",
  title: "Compliance & stock-data readiness checklist",
  summary:
    "A practical self-assessment across stock data, evidence, the compliance denominator, field capability and governance.",
  category: "tools",
  kind: "checklist",
  readTime: "4 min read",
  updated: "June 2026",
  blocks: [
    {
      type: "paragraph",
      text: "Use this checklist to pressure-test how ready your stock data and evidence really are — before a regulator, an Ombudsman case, or an Awaab's Law timescale forces the question. If you cannot tick an item with confidence, it is a gap worth closing.",
    },
    {
      type: "checklist",
      groups: [
        {
          title: "Stock data foundations",
          items: [
            "Every property has a unique, current identifier (UPRN) and address",
            "You hold a current stock condition picture, not a stale spreadsheet",
            "Components are recorded against the correct parent property",
            "Condition, remaining life and renewal year are captured per component",
          ],
        },
        {
          title: "Evidence & audit",
          items: [
            "Photos are tied to the exact question, component or issue — not a loose folder",
            "Every record carries who captured it, when, and on what device",
            "Issues have unique IDs and can be traced to closure with evidence",
            "There is an audit trail across capture, QA and sync",
          ],
        },
        {
          title: "Compliance denominator",
          items: [
            "You know which programmes apply to each property (and why)",
            "'Unknown' applicability surfaces as an exception, not a green tick",
            "HHSRS Category 1 hazards are tracked distinctly and acted on",
            "Damp & mould cases are linked to actions and evidence",
          ],
        },
        {
          title: "Field capability",
          items: [
            "Surveyors can capture fully offline in poor-signal estates",
            "Drafts and photos survive an app restart with no data loss",
            "Field updates never silently overwrite the master record",
            "External / supplier surveyors are scoped to their assigned stock only",
          ],
        },
        {
          title: "Governance & reporting",
          items: [
            "A QA gate sits between field capture and the live record",
            "Protected changes require a reason, evidence and independent approval",
            "Data exports cleanly to your warehouse or BI tool with stable keys",
            "Reports and structured data reconcile on the same identifiers",
          ],
        },
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Mind the false-green",
      body: "A compliance dashboard that counts missing data as compliant is the most dangerous artefact in asset management. Treat every unknown as an exception until it is evidenced.",
    },
  ],
  sources: [
    { label: "Consumer standards and tenant satisfaction measures", publisher: "Regulator of Social Housing (GOV.UK)", url: "https://www.gov.uk/government/organisations/regulator-of-social-housing" },
    { label: "Spotlight reports on damp, mould and record-keeping", publisher: "Housing Ombudsman Service", url: "https://www.housing-ombudsman.org.uk" },
  ],
};

/* ── Glossary & insights: Glossary ── */
const glossary: Resource = {
  slug: "glossary",
  title: "Social housing asset management glossary",
  summary:
    "The vocabulary of stock condition, compliance and asset management — defined in plain English.",
  category: "glossary",
  kind: "glossary",
  readTime: "7 min read",
  updated: "June 2026",
  blocks: [
    {
      type: "paragraph",
      text: "A plain-English reference for the terms that recur across stock condition surveys, compliance and asset management. Where a term has a precise statutory meaning, treat this as an explanation, not a legal definition.",
    },
    {
      type: "glossary",
      items: [
        { term: "UPRN", definition: "Unique Property Reference Number — the stable, official identifier for an addressable location in Great Britain. The anchor key for joining property data across systems." },
        { term: "Stock condition survey (SCS)", definition: "A structured inspection of a property's components and condition, used to plan investment and evidence decency and safety." },
        { term: "HHSRS", definition: "Housing Health and Safety Rating System — the risk-based approach under the Housing Act 2004 for assessing hazards in residential property." },
        { term: "Category 1 / Category 2 hazard", definition: "HHSRS hazard severity bands. Category 1 hazards are the more serious; landlords have a duty to act on them. Category 2 are less serious but may still warrant action." },
        { term: "Decent Homes Standard", definition: "The minimum standard social homes are expected to meet — covering the statutory minimum (hazards), state of repair, modern facilities, and thermal comfort." },
        { term: "Awaab's Law", definition: "Provisions requiring social landlords to investigate and act on certain hazards, notably damp and mould, within prescribed timescales, with proper records and resident communication." },
        { term: "Compliance denominator", definition: "The count of properties a programme applies to. A controlled denominator treats 'unknown' applicability as an exception rather than assuming compliance." },
        { term: "TSM", definition: "Tenant Satisfaction Measures — a set of measures social landlords report to the Regulator of Social Housing covering quality, safety and service." },
        { term: "SOR", definition: "Schedule of Rates — standardised codes and prices for repair tasks, used to cost and analyse repairs activity." },
        { term: "Void", definition: "An empty property between tenancies. Void management covers inspection, works, compliance checks and re-let readiness." },
        { term: "Maker-checker / QA gate", definition: "A control where work captured by one person (the maker) must be accepted by an independent reviewer (the checker) before it updates the live record." },
        { term: "No silent overwrite", definition: "A conflict-control principle: if the master record changed since a device pre-loaded it, the field update is blocked and logged rather than overwriting the master." },
        { term: "Snapshot vs live record", definition: "A survey is a point-in-time snapshot. It only updates the durable, live asset record after it is QA-accepted — keeping history distinct from current state." },
        { term: "Required-vs-observed", definition: "A capture rule where an expected answer (e.g. a working CO alarm) that is not observed prompts the surveyor to raise a linked issue." },
        { term: "PWA", definition: "Progressive Web App — an installable, offline-capable web application that runs from the home screen with no app-store distribution." },
        { term: "Effective dating", definition: "Recording when a fact became true, so the asset record can be reported 'as at' any past date — essential for stock movement and assurance." },
      ],
    },
  ],
  sources: [
    { label: "UPRN and the National Address Gazetteer", publisher: "GeoPlace / Ordnance Survey", url: "https://www.geoplace.co.uk" },
    { label: "Housing Health and Safety Rating System (HHSRS) guidance", publisher: "GOV.UK", url: "https://www.gov.uk/government/collections/housing-health-and-safety-rating-system-hhsrs-guidance" },
    { label: "Decent Homes Standard guidance", publisher: "GOV.UK", url: "https://www.gov.uk/guidance/decent-homes-standard-review" },
  ],
};

/* ── Assembled list ── */
export const resources: Resource[] = [
  awaabsLawReadiness,
  decentHomesReadiness,
  stockConditionSurveyPlaybook,
  hhsrsFieldReference,
  surveyDataDictionary,
  rbacRoleMatrix,
  complianceReadinessChecklist,
  glossary,
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function resourcesByCategory(category: Resource["category"]): Resource[] {
  return resources.filter((r) => r.category === category);
}
