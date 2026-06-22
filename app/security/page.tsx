import type { Metadata } from "next";
import {
  Fingerprint,
  GitMerge,
  History,
  KeyRound,
  Lock,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import {
  Badge,
  Card,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Security & data governance",
  description:
    "Named-user access, no silent overwrite, full audit trails and evidence-led data governance — security built into the survey flow, not bolted on.",
};

const pillars = [
  {
    icon: UserCheck,
    title: "Named-user, least-privilege access",
    body: "No shared accounts. Five roles with per-role landing pages and route guards. External supplier surveyors are scoped to only their assigned properties — they never see the rest of the portfolio.",
  },
  {
    icon: KeyRound,
    title: "SSO/MFA-ready authentication",
    body: "Designed to wire into single sign-on, multi-factor authentication and remote revocation. Offline sign-in uses a cached identity so field work continues without a connection.",
  },
  {
    icon: GitMerge,
    title: "No silent overwrite",
    body: "Every sync compares the pre-loaded master version against the server. Mismatches are blocked and logged as conflicts rather than overwriting either side — your master record is never quietly destroyed.",
  },
  {
    icon: ShieldCheck,
    title: "Maker-checker QA gate",
    body: "Surveys are point-in-time snapshots. They only promote to the live record after an independent reviewer accepts them, with comments and a full audit of every decision.",
  },
  {
    icon: History,
    title: "End-to-end audit trail",
    body: "Capture, photos, QA decisions and sync events are all attributed to the named user, with timestamps and device. Sync completeness distinguishes response, photo, partial and failed.",
  },
  {
    icon: Fingerprint,
    title: "Evidence-led data confidence",
    body: "Photos are bound to the exact question, component or issue — never a loose gallery. Provenance (surveyor, device, schema and question-set version) travels with the data.",
  },
];

const governance = [
  "Property is the asset — Property → Components → Issues, with stable keys throughout",
  "Survey snapshot is distinct from the live record; promotion is a controlled step",
  "Structured before narrative — typed records with controlled codes, not free text",
  "Compliance 'unknown' surfaces as an exception, never a false-green default",
  "One accepted source produces both the PDF and the structured export",
  "Conflict-control model designed to reconcile with external systems, not overwrite them",
];

export default function SecurityPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="flex max-w-2xl flex-col gap-5">
            <Badge>
              <span className="size-1.5 rounded-full bg-primary" />
              Security & governance
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              Trust isn't a feature here — it's the architecture
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              The same decisions that make field data reliable also make it secure:
              named-user attribution, no silent overwrite, and an audit trail on
              every action.
            </p>
          </div>
        </Container>
      </header>

      <Section>
        <SectionHeading
          eyebrow="Controls"
          title="Security built into the flow"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <Card key={p.title} className="flex flex-col gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <p.icon className="size-5" />
              </span>
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-muted/30 py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-4">
              <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <Lock className="size-5" />
              </span>
              <SectionHeading
                align="left"
                eyebrow="Data governance"
                title="Principles that keep the record honest"
                description="The model is designed so the data can be trusted long after the survey is filed."
              />
            </div>
            <ul className="flex flex-col gap-3">
              {governance.map((g) => (
                <li
                  key={g}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm"
                >
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Bring security questions to the demo"
        description="We'll walk your information governance team through access, audit and conflict control in detail."
      />
    </>
  );
}
