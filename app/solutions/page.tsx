import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  HardHat,
  KeyRound,
  ShieldCheck,
  Check,
} from "lucide-react";
import {
  Button,
  Card,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CtaSection } from "@/components/sections/cta";
import { PhotoPanel } from "@/components/media";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Built for anyone accountable for housing — councils, housing associations, contractors and private landlords. Capture surveys and inspections on the ground, then bring the evidence, actions and reporting back together in one clear flow.",
};

const teams = [
  {
    key: "asset",
    photo: { src: "/images/solution-asset.jpg", alt: "A council housing block on a quiet residential street." },
    icon: Building2,
    title: "Stock condition and asset teams",
    lead: "Understand what is in your homes, what condition it is in, what evidence exists and what needs attention. Haven helps teams capture stock condition information on site — components, photos, notes, issues and follow-up actions — and, once reviewed, use it to support reporting, planning and future investment decisions.",
    helps: [
      "Stock condition surveys",
      "Component condition and lifecycle information",
      "HHSRS and Decent Homes observations",
      "Evidence captured against the right property, room or component",
      "Clearer reporting on progress, gaps and exceptions",
    ],
  },
  {
    key: "field",
    photo: { src: "/images/solution-field.jpg", alt: "A surveyor recording a reading on a communal staircase." },
    icon: ClipboardCheck,
    title: "Field operations and inspections",
    lead: "Give teams a simpler way to capture what they find on site and report it back clearly. Haven supports wider inspection activity where teams need evidence, consistency and quick follow-up — from monthly housing inspections to fire safety actions and communal area checks.",
    helps: [
      "Monthly housing inspections",
      "Fire safety actions and follow-ups",
      "Estate, block and communal checks",
      "Damp and mould visits",
      "Before-and-after repairs evidence",
      "Photos, notes and actions linked to the right record",
    ],
  },
  {
    key: "compliance",
    photo: { src: "/images/solution-compliance.jpg", alt: "A compliance lead in a bright, open office." },
    icon: ShieldCheck,
    title: "Compliance and assurance teams",
    lead: "See the evidence and exceptions behind the reported position. Haven helps teams make missing information, unresolved issues and follow-up actions visible, so compliance and assurance reporting is not just a number on a dashboard.",
    helps: [
      "Evidence attached to the right property, block or action",
      "Missing or incomplete records made visible",
      "Review before reporting",
      "Clear exceptions and next steps",
      "Outputs that support wider reporting and Power BI",
    ],
  },
  {
    key: "landlords",
    photo: { src: "/images/solution-landlords.jpg", alt: "A terrace of privately let Victorian houses." },
    icon: KeyRound,
    title: "Private landlords",
    lead: "A let property carries eight to twelve separate legal obligations, each on its own clock — gas annually, EICR every five years, EPC every ten, deposit protection within thirty days, Right to Rent before the tenancy starts. Haven runs each one as a survey pack on the same engine used in social housing: complete the pack, the evidence is captured against the property, and the record flags what is due, expiring or missing before it becomes a problem.",
    helps: [
      "Gas safety, EICR, EPC, smoke and CO alarms, Legionella",
      "Deposit protection, Right to Rent and tenancy documents",
      "Advance flags before a certificate expires",
      "Every certificate held against the right property and tenancy",
      "An evidence pack for a council, lender or insurer on request",
      "Unknowns shown as exceptions, not counted as compliant",
    ],
  },
  {
    key: "partners",
    photo: { src: "/images/solution-partners.jpg", alt: "A visiting surveyor walking up to a block to start a round of visits." },
    icon: HardHat,
    title: "Contractors and survey partners",
    lead: "Let external teams work in Haven without losing control of the record. Surveyors and partners can be assigned only the work they need to complete, capture information on site, add evidence and submit it for review before it becomes part of the reporting position.",
    helps: [
      "Assigned survey batches",
      "Restricted access to relevant properties only",
      "Offline capture where signal is poor",
      "Photos and evidence attached to submissions",
      "Review before information is accepted",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="flex max-w-2xl flex-col gap-5">
            <p className="text-sm font-semibold text-primary">Solutions</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              Built for housing teams who need clearer answers
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Haven helps teams capture surveys, inspections and site updates on the
              ground — then bring the evidence, actions and reporting back together in
              one clear flow. Whether you manage stock condition, fire safety follow-ups,
              monthly inspections, damp and mould visits, compliance evidence or
              contractor returns, Haven helps reduce chasing, keep records connected and
              get teams to the answer faster.
            </p>
            <p className="text-muted-foreground text-balance">
              The aim is simple: less time searching for information, more time acting on
              it.
            </p>
          </div>
        </Container>
      </header>

      <Section>
        <div className="flex flex-col gap-6">
          {teams.map((t) => {
            const Icon = t.icon;
            return (
              <Card
                key={t.key}
                id={t.key}
                className="grid scroll-mt-24 gap-6 md:items-center lg:grid-cols-[260px_1.1fr_1fr]"
              >
                {/* Its own photography — alternate frames from the same shoots
                    as the homepage row, so the pages look related without
                    sharing a single file. No image on this site appears twice;
                    scripts/check-image-usage.mjs enforces it.

                    Shown at every width, but reshaped rather than hidden: a
                    letterbox banner above the copy on small screens, the tall
                    side column once there is room for three tracks. Hiding it
                    on mobile would take the photography away from the readers
                    most likely to be meeting the brand for the first time. */}
                <PhotoPanel
                  src={t.photo.src}
                  alt={t.photo.alt}
                  width={1000}
                  height={1250}
                  scrim={false}
                  className="aspect-[16/9] rounded-xl lg:aspect-[4/5]"
                />
                <div className="flex flex-col gap-4">
                  <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight">{t.title}</h2>
                  <p className="text-sm text-muted-foreground">{t.lead}</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/40 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Helps with
                  </p>
                  <ul className="mt-4 flex flex-col gap-3">
                    {t.helps.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={3} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section className="!pt-0">
        <Card className="flex flex-col items-center gap-4 bg-gradient-to-br from-primary/[0.06] to-card py-12 text-center">
          <SectionHeading
            title="Not sure where Haven fits?"
            description="If your team captures surveys, inspections, evidence or actions on site, Haven can help bring that information back clearly. We can walk through your process and show how Haven could support the way your team works today — starting with the fieldwork, evidence and reporting points that take the most time."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">
              Book a demo <ArrowRight className="size-4" />
            </Button>
            <Button href="/platform/surveys" variant="secondary">
              Explore field operations
            </Button>
          </div>
        </Card>
      </Section>

      <CtaSection />
    </>
  );
}
