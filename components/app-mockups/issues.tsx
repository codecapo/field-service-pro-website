"use client";

/* The product's /issues screen — HHSRS hazards and repair issues.

   Issue-level closure tracking rather than a hazard-level tick: each issue has
   an owner, a due date and closure evidence, and a hazard category stays open
   until every issue linked to it is closed. Figures are invented but consistent
   — the table's open rows agree with the headline counts. */

import { PageHeader } from "@/components/haven/components/patterns/page-header";
import { Section } from "@/components/haven/components/patterns/section";
import { MetricCard } from "@/components/haven/components/patterns/metric-card";
import { DataTable } from "@/components/haven/components/patterns/data-table";
import { Badge } from "@/components/haven/components/ui/badge";
import { AppShellMockup } from "./shell";

const ISSUES = [
  { issue: "Damp and mould to bedroom ceiling", property: "Flat 12, Kestrel House", owner: "Repairs — North", due: "12 Aug 2026", status: "Open", cat: "Cat 1" },
  { issue: "Excess cold — single glazing", property: "Flat 12, Kestrel House", owner: "Planned works", due: "30 Sep 2026", status: "In progress", cat: "Cat 2" },
  { issue: "Missing stair handrail", property: "Heron Point", owner: "Repairs — North", due: "04 Aug 2026", status: "Overdue", cat: "Cat 1" },
  { issue: "Damaged fire door, flat entrance", property: "Flat 7, Heron Point", owner: "Compliance", due: "18 Aug 2026", status: "Open", cat: "Cat 1" },
  { issue: "Loose kitchen socket", property: "Flat 26, Swift Court", owner: "Repairs — South", due: "27 Aug 2026", status: "In progress", cat: "Cat 2" },
  { issue: "Slip risk, communal entrance", property: "Wren Lodge", owner: "Estates", due: "09 Sep 2026", status: "Open", cat: "Cat 2" },
];

const STATUS: Record<string, "danger" | "warning" | "info"> = {
  Overdue: "danger",
  Open: "info",
  "In progress": "warning",
};

export function IssuesMockup() {
  return (
    <AppShellMockup active="HHSRS & Issues">
      <div className="flex flex-col gap-8">
        <PageHeader
          title="HHSRS & issues"
          subtitle="Issue closure tracking — owner, due date and evidence; a category stays open until every linked issue is cleared."
        />

        <div className="grid grid-cols-5 gap-4">
          <MetricCard title="Open issues" value="6" />
          <MetricCard title="Overdue" value="1" delta={{ label: "overdue", direction: "down" }} />
          <MetricCard title="Cat 1 open" value="3" delta={{ label: "urgent", direction: "down" }} />
          <MetricCard title="Properties w/ Cat 1" value="3" />
          <MetricCard title="Issue types" value="6" />
        </div>

        <Section title="Open issues">
          <DataTable
            rows={ISSUES}
            columns={[
              {
                key: "issue",
                header: "Issue",
                cell: (r) => <span className="font-medium text-foreground">{r.issue}</span>,
              },
              {
                key: "cat",
                header: "Band",
                cell: (r) => (
                  <Badge variant={r.cat === "Cat 1" ? "danger" : "warning"}>{r.cat}</Badge>
                ),
              },
              { key: "property", header: "Property" },
              { key: "owner", header: "Owner" },
              { key: "due", header: "Due" },
              {
                key: "status",
                header: "Status",
                cell: (r) => <Badge variant={STATUS[r.status]}>{r.status}</Badge>,
              },
            ]}
          />
        </Section>
      </div>
    </AppShellMockup>
  );
}
