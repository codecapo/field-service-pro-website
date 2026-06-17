import type { Metadata } from "next";
import { Boxes, Building2, GitBranch, History, Layers, ListTree } from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { AssetRegister } from "@/components/mockups";

export const metadata: Metadata = {
  title: "Asset register",
  description:
    "A live, effective-dated register of every property, block and component — drill from portfolio to component, with lifecycle and classification that QA-accepted surveys keep current.",
};

export default function AssetRegisterPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <Badge>
                <span className="size-1.5 rounded-full bg-primary" />
                Platform · Asset register
              </Badge>
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                The single source of truth for every asset you hold
              </h1>
              <p className="text-balance text-lg text-muted-foreground">
                A live, effective-dated register of property, block and component —
                not a survey snapshot and not a spreadsheet. Drill from the whole
                portfolio down to a single fire door, with lifecycle and
                classification that stay current as QA-accepted surveys flow in.
              </p>
            </div>
            <ScaledBrowser url="app.fieldservicepro.example/properties/100023001">
              <AssetRegister />
            </ScaledBrowser>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        status="live"
        eyebrow="Hierarchy"
        title="Portfolio → block → property → component"
        description="Every level of the estate is a first-class record, linked by stable keys, so you can navigate the whole structure without losing the thread."
        points={[
          {
            icon: ListTree,
            title: "Every level is a first-class record",
            body: "Portfolios, blocks, properties and individual components each hold their own attributes, history and evidence.",
          },
          {
            icon: GitBranch,
            title: "Drill-through in a couple of clicks",
            body: "Move from a portfolio view to a block, to a property, to the exact component — and back — without leaving the record.",
          },
          {
            icon: Building2,
            title: "Communal and block assets",
            body: "Shared plant, roofs, lifts and communal areas are modelled as block-level assets, not lost inside individual dwellings.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.fieldservicepro.example/properties/100023001">
            <AssetRegister />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        status="live"
        eyebrow="Lifecycle"
        title="Lifecycle data on every component"
        description="Each component carries the numbers that drive planned investment — observed condition, remaining life, renewal year and unit cost — rolled up across the portfolio."
        points={[
          {
            icon: Layers,
            title: "Condition and remaining life",
            body: "Observed condition ratings and remaining-life estimates sit on the component, ready to prioritise.",
          },
          {
            icon: Boxes,
            title: "Renewal year and unit cost",
            body: "Replacement years and unit costs turn the register into a costed forward programme, not a static inventory.",
          },
          {
            icon: GitBranch,
            title: "Feeds planned investment",
            body: "Component-level lifecycle aggregates up to block and portfolio, shaping the capital programme directly.",
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
        eyebrow="Governance"
        title="Snapshot vs live record, effective-dated"
        description="The register stays trustworthy because change is controlled: a survey is a point-in-time snapshot, and only a QA-accepted snapshot updates the live master."
        points={[
          {
            icon: History,
            title: "QA-gated promotion",
            body: "A survey snapshot promotes into the live record only after it passes the QA gate — no silent overwrites of the master.",
          },
          {
            icon: History,
            title: "History is preserved",
            body: "Every prior state is effective-dated, so you can report the register as it stood at any point in time.",
          },
          {
            icon: ListTree,
            title: "Controlled classification",
            body: "Tenure, portfolio and management category are held as controlled fields, keeping routing and reporting consistent.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.fieldservicepro.example/properties/100023001">
            <AssetRegister />
          </ScaledBrowser>
        }
      />

      <CtaSection
        title="A live register, not a stale spreadsheet"
        description="See how QA-accepted surveys keep a single, effective-dated source of truth current across your whole portfolio."
      />
    </>
  );
}
