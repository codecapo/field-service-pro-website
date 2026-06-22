import type { Metadata } from "next";
import {
  BarChart3,
  Database,
  FileSpreadsheet,
  Filter,
  Gauge,
  LineChart,
  Table2,
} from "lucide-react";
import { Button, Container } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";

export const metadata: Metadata = {
  title: "Reporting & insights",
  description:
    "Get to the answer faster. Haven turns surveys, inspections and site updates into clear reporting — see what is done, what needs review, what needs action and the evidence behind the position, without chasing spreadsheets.",
};

export default function ReportingPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-5">
              <p className="text-sm font-semibold text-primary">Reporting &amp; insights</p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                Get to the answer faster
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Haven helps housing teams turn surveys, inspections and site updates into
                clear reporting your team can actually use. See what has been completed,
                what is waiting for review, what needs action and what evidence sits
                behind the position — without chasing spreadsheets, folders or separate
                reports.
              </p>
              <p className="text-muted-foreground text-balance">
                From day-to-day operational views to management reporting, Haven keeps the
                work, evidence and outputs connected so teams can move from question to
                answer with confidence.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">Book a reporting demo</Button>
                <Button href="/" variant="secondary" size="lg">See how Haven works</Button>
              </div>
            </div>

            <ScaledBrowser url="app.havenams.com/reporting">
              <DashboardPanel />
            </ScaledBrowser>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        eyebrow="Clear views for different teams"
        title="Different teams need different answers"
        description="Asset teams may need survey progress, component condition and evidence gaps. Managers may need to see what is overdue, what needs review and what has changed. Assurance teams may need the context behind the reported position. Haven gives each team a simple view of what matters."
        points={[
          {
            icon: Gauge,
            title: "Operational views",
            body: "Survey progress, issues raised on site, evidence captured and what needs attention.",
          },
          {
            icon: Filter,
            title: "Management views",
            body: "What is overdue, what is waiting for review and what has changed over time.",
          },
          {
            icon: BarChart3,
            title: "Assurance views",
            body: "The context behind the reported position, with exceptions made visible.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/reporting">
            <DashboardPanel />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        eyebrow="Reports with the evidence behind them"
        title="A report should help you understand the number"
        description="Haven links reporting back to the accepted survey, inspection, evidence and review position, so users can see where a figure came from and what still needs attention — and spend less time explaining differences between reports."
        points={[
          {
            icon: LineChart,
            title: "Behind every number",
            body: "Move from a reported figure back to the survey, inspection, photo or action behind it.",
          },
          {
            icon: Database,
            title: "One reviewed basis",
            body: "Reporting draws on accepted, reviewed information — not raw, unchecked submissions.",
          },
          {
            icon: Gauge,
            title: "Less time explaining",
            body: "Spend less time reconciling reports and more time acting on the information.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/reporting">
            <DashboardPanel />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        eyebrow="Outputs that line up"
        title="Dashboards, reports and exports that tell the same story"
        description="Haven uses the accepted record as the basis for reporting, so the information in dashboards, downloaded into spreadsheets or shared in reports stays aligned. Some teams work directly in Haven; others want clean exports — Haven supports both."
        points={[
          {
            icon: Table2,
            title: "Aligned outputs",
            body: "Dashboards, downloads and shared reports come from the same reviewed information.",
          },
          {
            icon: FileSpreadsheet,
            title: "Power BI-ready exports",
            body: "Clean exports for Power BI, reporting packs and wider analysis.",
          },
          {
            icon: Filter,
            title: "Less reconciliation",
            body: "Reduce the time spent checking different versions before teams can act.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/reporting">
            <DashboardPanel />
          </ScaledBrowser>
        }
      />

      <CtaSection
        title="See the answer behind the number"
        description="We'll show how Haven turns surveys and inspections into clear reporting — with the evidence and exceptions behind every figure."
      />
    </>
  );
}
