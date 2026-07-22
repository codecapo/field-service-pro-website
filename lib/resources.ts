import type { Resource } from "@/lib/resources-types";
import { awaabsLawReadiness } from "@/lib/resources/awaabs-law-readiness";
import { decentHomesReadiness } from "@/lib/resources/decent-homes-readiness";
import { stockConditionSurveyPlaybook } from "@/lib/resources/stock-condition-survey-playbook";
import { hhsrsFieldReference } from "@/lib/resources/hhsrs-field-reference";
import { rentersRightsActReadiness } from "@/lib/resources/renters-rights-act-readiness";

export { resourceCategories } from "@/lib/resources-types";
export type { Resource, ResourceCategory } from "@/lib/resources-types";



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
  rentersRightsActReadiness,
  complianceReadinessChecklist,
  glossary,
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function resourcesByCategory(category: Resource["category"]): Resource[] {
  return resources.filter((r) => r.category === category);
}
