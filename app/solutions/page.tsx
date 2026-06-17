import type { Metadata } from "next";
import { ArrowRight, Building2, HardHat, ShieldCheck, Home } from "lucide-react";
import {
  Badge,
  Button,
  Card,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CtaSection } from "@/components/sections/cta";
import { personas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "How ClearView AMS serves local authorities, housing associations, supplier surveyors and compliance teams — each with the same trustworthy field data.",
};

const icons = {
  councils: Building2,
  has: Home,
  suppliers: HardHat,
  compliance: ShieldCheck,
} as const;

const detail: Record<string, string[]> = {
  councils: [
    "Replace spreadsheet-led stock data with a controlled, evidence-led pipeline",
    "Feed a single source of truth without overwriting your existing master",
    "Stable-key exports that load cleanly into your warehouse or BI tool",
  ],
  has: [
    "Issue-level HHSRS with Category 1/2 and controlled reason codes",
    "Decent Homes and damp/mould captured as structured, photo-evidenced records",
    "Mixed-tenure and delegated stock handled with per-scope access",
  ],
  suppliers: [
    "Capture everything offline in dead-signal estates — nothing is lost",
    "Restricted to your assigned batch; drafts and photos survive restarts",
    "Installable PWA — no app store, no managed-device rollout",
  ],
  compliance: [
    "A controlled denominator where unknowns are exceptions, not false-green",
    "Maker-checker approval and full audit on every protected change",
    "Accept/reject assurance workflow for partner and supplier submissions",
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="flex max-w-2xl flex-col gap-5">
            <Badge>
              <span className="size-1.5 rounded-full bg-primary" />
              Solutions
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              Trustworthy field data for every team that depends on it
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              The same offline-first, evidence-led spine — shaped to how each part
              of your organisation actually works.
            </p>
          </div>
        </Container>
      </header>

      <Section>
        <div className="flex flex-col gap-6">
          {personas.map((p) => {
            const Icon = icons[p.key as keyof typeof icons];
            return (
              <Card
                key={p.key}
                id={p.key}
                className="grid scroll-mt-24 gap-6 md:grid-cols-[1.1fr_1fr] md:items-center"
              >
                <div className="flex flex-col gap-4">
                  <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight">{p.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/80">The pain: </span>
                    {p.pain}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-primary">The shift: </span>
                    {p.gain}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-muted/40 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    What you get
                  </p>
                  <ul className="mt-4 flex flex-col gap-3">
                    {detail[p.key].map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm">
                        <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" />
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
            title="Not sure where you fit?"
            description="If your teams capture condition, compliance or inspection data in the field, the spine applies. Let's map it to your operating model."
          />
          <Button href="/contact">
            Talk to us <ArrowRight className="size-4" />
          </Button>
        </Card>
      </Section>

      <CtaSection />
    </>
  );
}
