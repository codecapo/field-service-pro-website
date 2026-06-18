import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { ComplianceBoard, AssetRegister } from "@/components/mockups";
import { SurveyBoard } from "@/components/mockups/survey-board";
import { RepairsBoard } from "@/components/mockups/repairs-board";
import { StockMovementBoard } from "@/components/mockups/stock-movement-board";
import { DelegatedBoard } from "@/components/mockups/delegated-board";
import { StrategyBoard } from "@/components/mockups/strategy-board";

const entries: {
  group: string;
  ref: string;
  url: string;
  blurb: string;
  features: string[];
  node: React.ReactNode;
  href?: string;
}[] = [
  {
    group: "Stock condition surveys",
    ref: "§12–14",
    url: "app.clearviewams.com/surveys/100023001",
    blurb: "The offline-first capture spine — photos, components and issue-level HHSRS.",
    features: ["Offline capture", "Count-driven components", "HHSRS Cat 1/2", "Stock intelligence"],
    node: <SurveyBoard />,
    href: "/platform/surveys",
  },
  {
    group: "Asset register & hierarchy",
    ref: "§5–7, §19",
    url: "app.clearviewams.com/properties/100023001",
    blurb: "A live, effective-dated register of property, block and component.",
    features: ["Property → block → component", "Lifecycle data", "Classification", "Snapshot vs live"],
    node: <AssetRegister />,
    href: "/platform/asset-register",
  },
  {
    group: "Evidence-led compliance",
    ref: "§8–11",
    url: "app.clearviewams.com/compliance",
    blurb: "A controlled denominator and certificate drill-through — never false-green.",
    features: ["Applicability + evidence", "Certificate store", "KPI cycles", "Unknown = exception"],
    node: <ComplianceBoard />,
    href: "/platform/compliance",
  },
  {
    group: "Repairs, warranty & investment",
    ref: "§15–17",
    url: "app.clearviewams.com/repairs",
    blurb: "Demand and spend joined to the asset, feeding planned investment.",
    features: ["Repairs feed (SOR, cost)", "Repeat-failure flags", "Warranty", "Lifecycle → programme"],
    node: <RepairsBoard />,
    href: "/platform/repairs",
  },
  {
    group: "Stock movement, tenure & leasehold",
    ref: "§18, §20–21",
    url: "app.clearviewams.com/movement",
    blurb: "Effective-dated movement, the RTB pipeline and leasehold obligations.",
    features: ["Monthly reconciliation", "RTB & Section 125", "Section 20 recharge", "Programme impact"],
    node: <StockMovementBoard />,
    href: "/platform/stock-movement",
  },
  {
    group: "Delegated management & integrations",
    ref: "§22–23",
    url: "app.clearviewams.com/assurance",
    blurb: "Restricted partner environments with landlord assurance, and governed contacts.",
    features: ["RBAC by portfolio", "Partner evidence", "Accept/reject assurance", "CRM / Northgate sync"],
    node: <DelegatedBoard />,
    href: "/platform/delegated",
  },
  {
    group: "Strategy, sustainability & risk",
    ref: "§24–25, §30–31",
    url: "app.clearviewams.com/strategy",
    blurb: "Net-zero readiness, void turnaround, disrepair risk and NPV-grade data.",
    features: ["Void turnaround", "EPC / retrofit", "Disrepair & Ombudsman", "NPV readiness"],
    node: <StrategyBoard />,
    href: "/platform/strategy",
  },
  {
    group: "Data, governance & reporting",
    ref: "§4A, §26–29",
    url: "app.clearviewams.com/reporting",
    blurb: "A single source of truth with audit, maker-checker control and day-one reporting.",
    features: ["Named-user RBAC + audit", "No silent overwrite", "Stable-key BI feeds", "Saved views"],
    node: <DashboardPanel />,
    href: "/platform/reporting",
  },
];

export function MockupMatrix() {
  return (
    <section id="surfaces" className="border-t border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="The full platform"
          title="Every requirement of a modern AMS — see it work"
          description="Mapped to the Asset Management Systems requirements (§4A–§31). One platform, one data model, every surface built out."
        />

        <div className="mt-14 grid gap-x-10 gap-y-14 lg:grid-cols-2">
          {entries.map((e) => {
            const inner = (
              <>
                <ScaledBrowser
                  url={e.url}
                  className={
                    e.href
                      ? "transition-shadow duration-200 group-hover:shadow-[0_28px_64px_-12px_rgba(16,24,40,0.28)]"
                      : undefined
                  }
                >
                  {e.node}
                </ScaledBrowser>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold">{e.group}</h3>
                    <span className="rounded-full border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {e.ref}
                    </span>
                    {e.href && (
                      <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Explore
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{e.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );
            return e.href ? (
              <Link key={e.group} href={e.href} className="group flex flex-col gap-4">
                {inner}
              </Link>
            ) : (
              <div key={e.group} className="flex flex-col gap-4">
                {inner}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
