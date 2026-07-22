"use client";

/* The product's /dashboard screen — portfolio-wide position.

   Built from the real vendored components (see components/haven). All figures
   are invented but internally consistent: the surveyor rows sum to the headline
   counts, so nothing contradicts itself under a screenshot. */

import { PageHeader } from "@/components/haven/components/patterns/page-header";
import { Section } from "@/components/haven/components/patterns/section";
import { MetricCard } from "@/components/haven/components/patterns/metric-card";
import { DataTable } from "@/components/haven/components/patterns/data-table";
import { Badge } from "@/components/haven/components/ui/badge";
import { AppShellMockup } from "./shell";

const SURVEYORS = [
  { surveyor: "Jade Okafor", assigned: 148, submitted: 141, accepted: 132, noAccess: 7 },
  { surveyor: "Tom Brennan", assigned: 132, submitted: 126, accepted: 119, noAccess: 6 },
  { surveyor: "Priya Raman", assigned: 121, submitted: 118, accepted: 112, noAccess: 3 },
  { surveyor: "Callum Reid", assigned: 96, submitted: 88, accepted: 81, noAccess: 8 },
  { surveyor: "Aisha Nuru", assigned: 84, submitted: 79, accepted: 74, noAccess: 5 },
];

const TOTALS = SURVEYORS.reduce(
  (a, r) => ({
    assigned: a.assigned + r.assigned,
    submitted: a.submitted + r.submitted,
    accepted: a.accepted + r.accepted,
    noAccess: a.noAccess + r.noAccess,
  }),
  { assigned: 0, submitted: 0, accepted: 0, noAccess: 0 },
);

/* Cat 1 counts sum to the "HHSRS Category 1 open" headline above. */
const BLOCKS = [
  { block: "Kestrel House", properties: 48, cat1: 3, overdue: 4, risk: "High" },
  { block: "Heron Point", properties: 36, cat1: 2, overdue: 3, risk: "High" },
  { block: "Swift Court", properties: 52, cat1: 1, overdue: 2, risk: "Medium" },
  { block: "Wren Lodge", properties: 24, cat1: 1, overdue: 1, risk: "Medium" },
  { block: "Linnet Gardens", properties: 41, cat1: 0, overdue: 0, risk: "Low" },
];

const num = (n: number) => n.toLocaleString("en-GB");

export function DashboardMockup() {
  return (
    <AppShellMockup active="Dashboard">
      <div className="flex flex-col gap-8">
        <PageHeader
          title="Dashboard"
          subtitle="Live compliance and survey intelligence across the portfolio."
        />

        <div className="grid grid-cols-4 gap-4">
          <MetricCard
            title="Surveys accepted"
            value={num(TOTALS.accepted)}
            delta={{ label: "+12.4%", direction: "up" }}
            points={[280, 300, 318, 340, 372, 395, 430, 468, 502, 518]}
            updatedLabel="Updated 4 min ago"
          />
          <MetricCard
            title="Decent Homes compliant"
            value="94.2%"
            delta={{ label: "+1.8%", direction: "up" }}
            points={[89, 90, 90.4, 91.2, 91.8, 92.6, 93.1, 93.6, 94, 94.2]}
            updatedLabel="Updated 4 min ago"
          />
          <MetricCard
            title="HHSRS Category 1 open"
            value="7"
            delta={{ label: "−3", direction: "down" }}
            points={[18, 17, 15, 14, 13, 11, 10, 9, 8, 7]}
            updatedLabel="Updated 4 min ago"
          />
          <MetricCard
            title="Awaiting QA"
            value="23"
            delta={{ label: "1.2d average", direction: "neutral" }}
            points={[31, 29, 30, 27, 26, 28, 25, 24, 24, 23]}
            updatedLabel="Updated 4 min ago"
          />
        </div>

        <Section
          title="Surveyor throughput"
          description="Assignments, submissions and no-access outcomes for the current programme."
        >
          <DataTable
            rows={SURVEYORS}
            columns={[
              {
                key: "surveyor",
                header: "Surveyor",
                cell: (r) => <span className="font-medium text-foreground">{r.surveyor}</span>,
              },
              {
                key: "assigned",
                header: "Assigned",
                align: "end",
                cell: (r) => <span className="tabular-nums">{r.assigned}</span>,
              },
              {
                key: "submitted",
                header: "Submitted",
                align: "end",
                cell: (r) => <span className="tabular-nums">{r.submitted}</span>,
              },
              {
                key: "accepted",
                header: "Accepted",
                align: "end",
                cell: (r) => <span className="tabular-nums">{r.accepted}</span>,
              },
              {
                key: "noAccess",
                header: "No access",
                align: "end",
                cell: (r) => <span className="tabular-nums">{r.noAccess}</span>,
              },
            ]}
          />
        </Section>

        {/* The real dashboard carries a block-risk section below throughput. */}
        <Section
          title="Blocks needing attention"
          description="Ranked by open Category 1 hazards and overdue compliance programmes."
        >
          <DataTable
            rows={BLOCKS}
            columns={[
              {
                key: "block",
                header: "Block",
                cell: (r) => <span className="font-medium text-foreground">{r.block}</span>,
              },
              { key: "properties", header: "Properties", align: "end" },
              {
                key: "cat1",
                header: "Cat 1 open",
                align: "end",
                cell: (r) => (
                  <span className={r.cat1 > 0 ? "font-medium text-danger" : "text-muted-foreground"}>
                    {r.cat1}
                  </span>
                ),
              },
              { key: "overdue", header: "Overdue programmes", align: "end" },
              {
                key: "risk",
                header: "Risk",
                cell: (r) => (
                  <Badge variant={r.risk === "High" ? "danger" : r.risk === "Medium" ? "warning" : "success"}>
                    {r.risk}
                  </Badge>
                ),
              },
            ]}
          />
        </Section>
      </div>
    </AppShellMockup>
  );
}
