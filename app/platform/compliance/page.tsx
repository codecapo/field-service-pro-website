import type { Metadata } from "next";
import {
  AlertTriangle,
  Clock,
  FileCheck2,
  Gauge,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { ComplianceBoard } from "@/components/mockups";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Evidence-led compliance with a controlled denominator: programme status derived from applicability, evidence and validity — unknowns surface as exceptions, never false-green. Certificate drill-through in two or three clicks.",
};

export default function CompliancePage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <Badge>
                <span className="size-1.5 rounded-full bg-primary" />
                Platform · Compliance
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                Evidence-led compliance, not a comforting green tick
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Every programme — gas, electrical, fire, asbestos, lifts and water —
                in one view. Status is derived from applicability, evidence and
                validity, so a missing certificate shows as a missing certificate, and
                an unknown shows as an exception to resolve.
              </p>
            </div>

            <ScaledBrowser url="app.havenams.com/compliance">
              <ComplianceBoard />
            </ScaledBrowser>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        status="live"
        eyebrow="Controlled denominator"
        title="The denominator you can actually trust"
        description="Compliance status is computed from applicability, certificate presence, validity and assurance outcome — never assumed. Where applicability is unknown, it surfaces as an exception rather than quietly counting as compliant."
        points={[
          {
            icon: ShieldCheck,
            title: "Derived, not declared",
            body: "Valid, due, expired and missing are calculated from evidence and dates — not typed into a spreadsheet.",
          },
          {
            icon: AlertTriangle,
            title: "Unknown is an exception",
            body: "Properties with unknown applicability are flagged for resolution, so the denominator is honest.",
          },
          {
            icon: Gauge,
            title: "Every programme, one view",
            body: "Gas (LGSR), EICR, FRA, asbestos, lifts (LOLER) and water (Legionella) side by side, all stock.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/compliance">
            <ComplianceBoard />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        status="live"
        eyebrow="Evidence & certificates"
        title="From dashboard to certificate in two or three clicks"
        description="Every status traces straight to its evidence. Certificates are typed records with issue, expiry and validity, linked to the correct asset and programme — so an auditor's question is two or three clicks from an answer, not a folder hunt."
        points={[
          {
            icon: FileCheck2,
            title: "Typed certificates",
            body: "Issue date, expiry and validity captured as structured fields, not loose PDFs.",
          },
          {
            icon: KeyRound,
            title: "Linked to the asset",
            body: "Evidence binds to the right property, block, component and programme — always traceable.",
          },
          {
            icon: ShieldCheck,
            title: "Drill-through, not digging",
            body: "Dashboard → asset → certificate in a couple of clicks; minimal-click access to the proof.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/compliance/eicr">
            <DashboardPanel />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        status="live"
        eyebrow="Cycles & KPIs"
        title="Statutory dates, internal targets and breach — kept distinct"
        description="The statutory date, your internal target, the warning period and an actual breach are different things. They are tracked separately, so a programme that is past target but not yet breached never hides in the same number as one in breach."
        points={[
          {
            icon: Clock,
            title: "Target vs breach",
            body: "Distinguish compliant-but-outside-target, target-overdue and in-breach as separate KPI categories.",
          },
          {
            icon: KeyRound,
            title: "Coordinated access",
            body: "Difficult-to-access properties are flagged so any team booking a visit can bring forward other due work.",
          },
          {
            icon: AlertTriangle,
            title: "Buffers, not surprises",
            body: "Internal targets sit ahead of statutory dates, giving a warning period before anything is at risk.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/compliance">
            <ComplianceBoard />
          </ScaledBrowser>
        }
      />

      <CtaSection
        title="Stop trusting a false-green dashboard"
        description="See compliance derived from real evidence — with every unknown surfaced as an exception, on your own stock."
      />
    </>
  );
}
