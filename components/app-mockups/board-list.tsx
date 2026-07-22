"use client";

/* The product's /board screen — every assignment by property, surveyor and
   progress. The manager's view rather than the surveyor's: who has what, how
   far through they are, and what has come back to sync.

   Figures are invented; the StatGroup totals match the rows below it. */

import { RefreshCw } from "lucide-react";
import { PageHeader } from "@/components/haven/components/patterns/page-header";
import { Section } from "@/components/haven/components/patterns/section";
import { StatGroup } from "@/components/haven/components/patterns/stat-group";
import { DataTable } from "@/components/haven/components/patterns/data-table";
import { ViewSegments } from "@/components/haven/components/patterns/view-segments";
import { Badge } from "@/components/haven/components/ui/badge";
import { Button } from "@/components/haven/components/ui/button";
import { AppShellMockup } from "./shell";

const STATUS: Record<string, "success" | "info" | "warning" | "secondary"> = {
  Accepted: "success",
  "In progress": "warning",
  Assigned: "info",
  "No access": "secondary",
};

const ROWS = [
  { property: "Flat 12, Kestrel House", surveyor: "Jade Okafor", squad: "North", status: "In progress", progress: "62%", synced: "4 min ago" },
  { property: "Flat 4, Heron Point", surveyor: "Tom Brennan", squad: "North", status: "Accepted", progress: "100%", synced: "22 min ago" },
  { property: "Flat 26, Swift Court", surveyor: "Priya Raman", squad: "South", status: "Accepted", progress: "100%", synced: "1 hr ago" },
  { property: "Flat 9, Wren Lodge", surveyor: "Callum Reid", squad: "South", status: "In progress", progress: "38%", synced: "2 hr ago" },
  { property: "Flat 31, Linnet Gardens", surveyor: "Aisha Nuru", squad: "West", status: "Assigned", progress: "—", synced: "Not started" },
  { property: "Flat 18, Kestrel House", surveyor: "Jade Okafor", squad: "North", status: "No access", progress: "—", synced: "Yesterday" },
  { property: "Flat 2, Heron Point", surveyor: "Tom Brennan", squad: "North", status: "Assigned", progress: "—", synced: "Not started" },
];

export function BoardListMockup() {
  return (
    <AppShellMockup active="Board">
      <div className="flex flex-col gap-8">
        <PageHeader
          title="Board"
          subtitle="Every survey assignment by property, surveyor, squad and progress."
          actions={
            <Button variant="outline" size="sm">
              <RefreshCw className="size-4" />
              Refresh from server
            </Button>
          }
        />

        <StatGroup
          items={[
            { label: "Assigned", value: 581 },
            { label: "In progress", value: 34 },
            { label: "Awaiting QA", value: 23 },
            { label: "Accepted", value: 518 },
            { label: "No access", value: 29 },
          ]}
        />

        <Section title="Assignments">
          <ViewSegments
            label="Filter by status"
            value="all"
            segments={[
              { id: "all", label: "All" },
              { id: "progress", label: "In progress" },
              { id: "qa", label: "Awaiting QA" },
              { id: "accepted", label: "Accepted" },
              { id: "noaccess", label: "No access" },
            ]}
          />
          <div className="mt-4">
            <DataTable
              rows={ROWS}
              columns={[
                {
                  key: "property",
                  header: "Property",
                  cell: (r) => <span className="font-medium text-foreground">{r.property}</span>,
                },
                { key: "surveyor", header: "Surveyor" },
                { key: "squad", header: "Squad" },
                {
                  key: "status",
                  header: "Status",
                  cell: (r) => <Badge variant={STATUS[r.status]}>{r.status}</Badge>,
                },
                {
                  key: "progress",
                  header: "Progress",
                  align: "end",
                  cell: (r) => <span className="tabular-nums">{r.progress}</span>,
                },
                {
                  key: "synced",
                  header: "Last synced",
                  cell: (r) => <span className="text-muted-foreground">{r.synced}</span>,
                },
              ]}
            />
          </div>
        </Section>
      </div>
    </AppShellMockup>
  );
}
