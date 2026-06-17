import type { Metadata } from "next";
import {
  Boxes,
  PoundSterling,
  Repeat,
  ShieldCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { RepairsBoard } from "@/components/mockups/repairs-board";

export const metadata: Metadata = {
  title: "Repairs & investment",
  description:
    "Repairs demand and spend joined to the asset: a repairs feed with cost, trade, SOR and contractor; repeat-failure flagging; warranty intelligence; and lifecycle data that feeds planned investment.",
};

export default function RepairsPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <Badge>
                <span className="size-1.5 rounded-full bg-primary" />
                Platform · Repairs
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                Repair spend, turned into investment intelligence
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Every job — cost, trade, SOR code, contractor and completion — joined
                to the exact component it was raised against. Aggregate it by property,
                block and portfolio, flag the repeat failures, and let it feed the
                planned investment programme instead of disappearing into a backlog.
              </p>
            </div>

            <ScaledBrowser url="app.fieldservicepro.example/repairs">
              <RepairsBoard />
            </ScaledBrowser>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        status="live"
        eyebrow="Demand & spend"
        title="A repairs feed joined to the asset"
        description="Repairs are captured against the component they fix, not a free-text address — so demand and spend roll up cleanly from component to property to block to portfolio, ready for the high-cost dashboards that drive decisions."
        points={[
          {
            icon: Wrench,
            title: "Every job, structured",
            body: "Count, cost, trade, SOR / job code, contractor, status and completion captured as typed fields.",
          },
          {
            icon: Boxes,
            title: "Aggregated at every level",
            body: "Spend and demand roll up by component, property, block and portfolio via stable keys.",
          },
          {
            icon: PoundSterling,
            title: "High-cost dashboards + BI export",
            body: "Surface the costliest properties and blocks, and feed the same figures to your warehouse.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.fieldservicepro.example/repairs">
            <RepairsBoard />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        status="live"
        eyebrow="Repeat failure & warranty"
        title="Reactive today, renewal tomorrow"
        description="When the same component keeps failing, that is a renewal signal, not another job ticket. Repeat-failure flagging separates reactive churn from genuine renewal need — and warranty intelligence makes sure in-warranty work goes back to the contractor who installed it."
        points={[
          {
            icon: Repeat,
            title: "Repeat-failure flagging",
            body: "Components with recurring jobs are flagged, turning reactive churn into a reactive-vs-renewal signal.",
          },
          {
            icon: ShieldCheck,
            title: "Warranty-aware routing",
            body: "Installer, contractor, manufacturer and expiry held per component, so in-warranty work routes correctly.",
          },
          {
            icon: TrendingUp,
            title: "Cost-avoidance, day one",
            body: "Defect-liability intelligence stops you paying for work a warranty should cover.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.fieldservicepro.example/overview">
            <DashboardPanel />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        status="live"
        eyebrow="Planned investment"
        title="Feeds the lifecycle and the capital programme"
        description="Condition, observed remaining life, replacement year and unit cost live on the component register, so the repairs picture feeds planned investment directly — through a need lifecycle that keeps the original survey history intact."
        points={[
          {
            icon: Boxes,
            title: "Lifecycle on every component",
            body: "Install date, remaining life, replacement year, unit cost and programme year held on the register.",
          },
          {
            icon: TrendingUp,
            title: "Need lifecycle, end to end",
            body: "Observed → validated → proposed → approved → live works → completed → post-completion update.",
          },
          {
            icon: Wrench,
            title: "History preserved",
            body: "Completed works reset the lifecycle while keeping the original survey snapshot intact.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.fieldservicepro.example/repairs">
            <RepairsBoard />
          </ScaledBrowser>
        }
      />

      <CtaSection
        title="Turn repair spend into investment intelligence"
        description="See demand, repeat failures and lifecycle need joined to the asset — on your own stock."
      />
    </>
  );
}
