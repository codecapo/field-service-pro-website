import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { ComplianceBoard, AssetRegister } from "@/components/mockups";
import { SurveyBoard } from "@/components/mockups/survey-board";

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
    ref: "Live",
    url: "app.havenams.com/surveys/100023001",
    blurb: "The offline-first capture flow — photos, components and issue-level HHSRS.",
    features: ["Offline capture", "Count-driven components", "HHSRS Cat 1/2", "No-access close-out"],
    node: <SurveyBoard />,
    href: "/platform/surveys",
  },
  {
    group: "Asset register & search",
    ref: "Live",
    url: "app.havenams.com/assets/5071190",
    blurb: "A live property, block & component register, keyed on UPRN.",
    features: ["Full-text search", "UPRN-keyed records", "Block → unit", "Excel export"],
    node: <AssetRegister />,
    href: "/platform/asset-register",
  },
  {
    group: "Compliance & safety capture",
    ref: "Live",
    url: "app.havenams.com/compliance",
    blurb: "Evidence-led capture of the regulated risks — never false-green.",
    features: ["HHSRS Cat 1/2", "Awaab's Law damp/mould", "Required-vs-observed alarms", "Audit trail"],
    node: <ComplianceBoard />,
    href: "/platform/compliance",
  },
  {
    group: "Reporting & outputs",
    ref: "Live",
    url: "app.havenams.com/reporting",
    blurb: "One accepted source → reports and BI-ready data that reconcile.",
    features: ["No Access report", "Reconciliation", "PDF + CSV + XLSX", "Power BI–ready"],
    node: <DashboardPanel />,
    href: "/platform/reporting",
  },
];

export function MockupMatrix() {
  return (
    <section id="surfaces" className="border-t border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="The platform"
          title="See it work"
          description="One platform, one data model — the surfaces that are live today."
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
