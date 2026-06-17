import type { Metadata } from "next";
import {
  AlertTriangle,
  Calculator,
  DoorClosed,
  Leaf,
  Recycle,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { StrategyBoard } from "@/components/mockups/strategy-board";

export const metadata: Metadata = {
  title: "Strategy & risk",
  description:
    "Net-zero readiness, controlled void turnaround, disrepair risk and NPV-grade data for option appraisal — strategy built on evidence, not guesswork.",
};

export default function StrategyPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <Badge>
                <span className="size-1.5 rounded-full bg-primary" />
                Platform · Strategy &amp; risk
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                The strategic view — voids, retrofit and risk on one record
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Net-zero readiness, controlled void turnaround, disrepair risk and
                NPV-grade data for option appraisal — all drawn from the same live
                asset record, so strategy rests on evidence rather than guesswork.
              </p>
            </div>

            <ScaledBrowser url="app.clearviewams.com/strategy">
              <StrategyBoard />
            </ScaledBrowser>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        status="live"
        eyebrow="Voids"
        title="Void turnaround, controlled"
        description="A controlled void model — not a generic flag — with stage ageing, blockers and pre-relet compliance, so empty homes are turned around without slipping out of their programmes."
        points={[
          {
            icon: DoorClosed,
            title: "Controlled classification",
            body: "True relet, major works, decant, disposal, legal or provider-managed — each routed differently, never a single generic 'void' flag.",
          },
          {
            icon: AlertTriangle,
            title: "Stage ageing & blockers",
            body: "The full void pathway from keys to ready-to-let, with day-ageing per stage and the blockers holding each home up.",
          },
          {
            icon: ShieldAlert,
            title: "Pre-relet compliance, protected programmes",
            body: "Pre-relet compliance checks built in; a void never auto-removes a property from a programme without an approved applicability change.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.clearviewams.com/strategy">
            <StrategyBoard />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        status="live"
        eyebrow="Net zero"
        title="Retrofit and energy intelligence"
        description="Energy and retrofit data held against every property, so you can target the right homes for the right measures and report carbon progress with confidence."
        points={[
          {
            icon: Leaf,
            title: "Energy & retrofit fields",
            body: "EPC, heating type, insulation, solar PV, external wall and MVHR captured as controlled, reportable fields.",
          },
          {
            icon: Recycle,
            title: "Candidate grouping by EPC band",
            body: "Group retrofit candidates by EPC band and heating type to plan programmes and funding bids.",
          },
          {
            icon: TrendingUp,
            title: "Carbon & suitability signals",
            body: "Retrofit-suitability and carbon-need signals derived from the same live record that drives investment.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.clearviewams.com/overview">
            <DashboardPanel />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        status="live"
        eyebrow="Risk & appraisal"
        title="Resident risk and NPV-grade data"
        description="Link disrepair, complaints and Ombudsman cases to the asset, and export the full picture as option-appraisal data — so hold, invest, dispose or regenerate decisions are evidenced."
        points={[
          {
            icon: ShieldAlert,
            title: "Resident-risk linkage",
            body: "Disrepair, complaints, Ombudsman, damp & mould and repeat repairs linked to the property and its components.",
          },
          {
            icon: AlertTriangle,
            title: "High-risk property reporting",
            body: "Rank by combined risk signals and export an evidence pack for the homes that need attention first.",
          },
          {
            icon: Calculator,
            title: "NPV / option-appraisal data",
            body: "Capture and export the inputs for hold, invest, dispose or regenerate appraisals — income, spend, lifecycle, compliance and risk in one feed.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.clearviewams.com/strategy">
            <StrategyBoard />
          </ScaledBrowser>
        }
      />

      <CtaSection
        title="Plan with evidence, not guesswork"
        description="See how voids, retrofit and risk roll up from the live asset record into a strategy you can defend."
      />
    </>
  );
}
