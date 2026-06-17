/* Shared content model for the Resources hub and resource pages.
   Type-only module (no runtime deps) so guide files and lib/resources.ts
   can both import it without cycles. */

export type ResourceCategory = "regulatory" | "practical" | "tools" | "glossary";

export type ResourceKind = "article" | "reference" | "checklist" | "glossary";

/** A tagged-union content block. The [slug] renderer maps over these. */
export type Block =
  | { type: "heading"; id: string; text: string } // H2 section — also feeds the TOC
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "steps"; items: { title: string; body: string }[] }
  | {
      type: "callout";
      tone?: "info" | "warning" | "success";
      title?: string;
      body: string;
    }
  | { type: "keytakeaways"; items: string[] }
  | { type: "table"; caption?: string; columns: string[]; rows: string[][] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "checklist"; groups: { title: string; items: string[] }[] }
  | { type: "glossary"; items: { term: string; definition: string }[] };

export type Source = { label: string; publisher: string; url: string };

export type Resource = {
  slug: string;
  title: string;
  summary: string;
  category: ResourceCategory;
  kind: ResourceKind;
  /** e.g. "14 min read" */
  readTime: string;
  /** e.g. "June 2026" */
  updated: string;
  /** Show the "general guidance, not legal advice" line above sources. */
  legalNote?: boolean;
  blocks: Block[];
  sources: Source[];
};

export const resourceCategories: {
  key: ResourceCategory;
  title: string;
  blurb: string;
}[] = [
  {
    key: "regulatory",
    title: "Regulatory explainers",
    blurb:
      "Plain-English briefings on the obligations shaping social housing — what they mean and how to evidence them.",
  },
  {
    key: "practical",
    title: "Practical guides",
    blurb:
      "Field-tested playbooks for stock condition surveys, HHSRS and evidence capture that holds up to scrutiny.",
  },
  {
    key: "tools",
    title: "Templates & tools",
    blurb:
      "Reference artefacts you can put to work today — data dictionaries, role matrices and readiness checklists.",
  },
  {
    key: "glossary",
    title: "Glossary & insights",
    blurb:
      "The vocabulary of housing asset management, defined in plain English.",
  },
];
