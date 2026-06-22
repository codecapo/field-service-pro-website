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
import { Badge, Container } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";

export const metadata: Metadata = {
  title: "Reporting & analytics",
  description:
    "Role-based dashboards, a day-one report library and stable-key, Power BI–ready feeds — every figure drawn from the same accepted source, so reports and data always reconcile.",
};

export default function ReportingPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <Badge>
                <span className="size-1.5 rounded-full bg-primary" />
                Platform · Reporting
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                Every report from a single source of truth
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Role-based dashboards, a day-one report library and warehouse-ready
                feeds — all drawn from the same QA-accepted data, so the figures on a
                board, in a PDF and in an export always reconcile.
              </p>
            </div>
            <ScaledBrowser url="app.havenams.com/reporting">
              <DashboardPanel />
            </ScaledBrowser>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        status="live"
        eyebrow="Dashboards"
        title="Role-based dashboards, from day one"
        description="Every team lands on the view that matters to them, with traffic-light status that tells the truth — unknowns surface as exceptions, never false-green."
        points={[
          {
            icon: Gauge,
            title: "Status at a glance",
            body: "Traffic-light status by role across stock intelligence, compliance and HHSRS — no digging required.",
          },
          {
            icon: BarChart3,
            title: "The metrics that drive decisions",
            body: "Decent Homes, HHSRS Category 1/2, no-access, repairs spend and void turnaround, all in one place.",
          },
          {
            icon: LineChart,
            title: "Trends, not snapshots",
            body: "Track surveys synced, coverage and compliance over time so you can see direction, not just a number.",
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
        status="live"
        eyebrow="Report library"
        title="A library of reports — and the freedom to build your own"
        description="Ship with the reports a social landlord actually needs, then let super-users compose their own saved views without waiting on a data team."
        points={[
          {
            icon: Table2,
            title: "Day-one report library",
            body: "Stock intelligence, evidence-led compliance, denominator, HHSRS/Decent Homes, repairs spend and more, ready to run.",
          },
          {
            icon: Filter,
            title: "Super-user saved views",
            body: "Filter, slice and save ad-hoc views — gas-required-no-cert, high-spend blocks — and share them across the team.",
          },
          {
            icon: Database,
            title: "Permissioned by design",
            body: "Every view respects role and scope, so partners and teams only ever see the stock they're entitled to.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/reporting/decent-homes">
            <DashboardPanel />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        status="live"
        eyebrow="Data feeds"
        title="Power BI–ready, and always reconciled"
        description="Export stable-key, referentially-joined data that loads cleanly into your warehouse — no manual interpretation, no parallel spreadsheets."
        points={[
          {
            icon: FileSpreadsheet,
            title: "Eight stable-key tables",
            body: "Property, components, issues, photos, QA and sync events export as joined tables (XLSX + CSV).",
          },
          {
            icon: Database,
            title: "Warehouse & BI ready",
            body: "Referential joins are preserved, so the feed lands in Power BI or a data warehouse without rework.",
          },
          {
            icon: BarChart3,
            title: "Reports and data agree",
            body: "The PDF report and the export are generated from the same accepted record, so every ID and figure reconciles.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/reporting/exports">
            <DashboardPanel />
          </ScaledBrowser>
        }
      />

      <CtaSection
        title="One source of truth, every report"
        description="See dashboards, the report library and the warehouse feed running on a real batch of your stock."
      />
    </>
  );
}
