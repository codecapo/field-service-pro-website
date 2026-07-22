"use client";

/* The product's /compliance screen — programme requirements across the stock.

   Keeps the product's actual assurance vocabulary (Green / Grey / Red / Not
   required) and its rule that status is derived from due dates and evidence
   flags rather than set by hand, because that distinction is the point of the
   screen. Figures are invented; the six metrics sum to the stated total. */

import { ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/haven/components/patterns/page-header";
import { Section } from "@/components/haven/components/patterns/section";
import { Callout } from "@/components/haven/components/patterns/callout";
import { MetricCard } from "@/components/haven/components/patterns/metric-card";
import { DataTable } from "@/components/haven/components/patterns/data-table";
import { ViewSegments } from "@/components/haven/components/patterns/view-segments";
import { Badge } from "@/components/haven/components/ui/badge";
import { AppShellMockup } from "./shell";

const METRICS = [
  { title: "Total requirements", value: "8,412" },
  { title: "Green", value: "7,689" },
  { title: "Grey", value: "418" },
  { title: "Red", value: "142" },
  { title: "Not required", value: "163" },
  { title: "Due in 30 days", value: "296" },
];

const STATE: Record<string, { variant: "success" | "warning" | "danger" | "secondary" }> = {
  Green: { variant: "success" },
  Grey: { variant: "warning" },
  Red: { variant: "danger" },
  "Not required": { variant: "secondary" },
};

const ROWS = [
  {
    asset: "Kestrel House",
    block: "Kestrel House",
    programme: "Fire risk assessment",
    status: "Red",
    due: "02 Jul 2026",
    reason: "Overdue — no current FRA on record",
  },
  {
    asset: "Flat 12, Kestrel House",
    block: "Kestrel House",
    programme: "Gas safety (LGSR)",
    status: "Green",
    due: "18 Mar 2027",
    reason: "Certificate on file",
  },
  {
    asset: "Flat 26, Swift Court",
    block: "Swift Court",
    programme: "Electrical (EICR)",
    status: "Grey",
    due: "11 Nov 2026",
    reason: "In date, certificate not uploaded",
  },
  {
    asset: "Heron Point",
    block: "Heron Point",
    programme: "Water hygiene",
    status: "Green",
    due: "04 Feb 2027",
    reason: "Certificate on file",
  },
  {
    asset: "Flat 7, Heron Point",
    block: "Heron Point",
    programme: "Asbestos re-inspection",
    status: "Red",
    due: "22 May 2026",
    reason: "Overdue — re-inspection not booked",
  },
  {
    asset: "Wren Lodge",
    block: "Wren Lodge",
    programme: "Lift (LOLER)",
    status: "Not required",
    due: "—",
    reason: "No lift installed",
  },
  {
    asset: "Swift Court",
    block: "Swift Court",
    programme: "Fire door inspection",
    status: "Grey",
    due: "29 Aug 2026",
    reason: "In date, evidence pending upload",
  },
  {
    asset: "Flat 3, Linnet Gardens",
    block: "Linnet Gardens",
    programme: "Gas safety (LGSR)",
    status: "Green",
    due: "07 Jan 2027",
    reason: "Certificate on file",
  },
  {
    asset: "Linnet Gardens",
    block: "Linnet Gardens",
    programme: "Communal electrical",
    status: "Green",
    due: "13 Sep 2027",
    reason: "Certificate on file",
  },
  {
    asset: "Flat 19, Swift Court",
    block: "Swift Court",
    programme: "Smoke and CO alarms",
    status: "Red",
    due: "16 Jun 2026",
    reason: "Overdue — no access on two attempts",
  },
  {
    asset: "Heron Point",
    block: "Heron Point",
    programme: "Fire risk assessment",
    status: "Green",
    due: "21 Apr 2027",
    reason: "Certificate on file",
  },
];

export function ComplianceMockup() {
  return (
    <AppShellMockup active="HHSRS & Issues">
      <div className="flex flex-col gap-6">
        <PageHeader
          title="Compliance"
          subtitle="8,412 programme requirements across the portfolio · as at 22/07/2026"
        />

        <Callout variant="info" icon={ShieldCheck}>
          Status is derived from the register&apos;s due dates and evidence flags — never set by
          hand. <strong>Grey</strong> (in date, no certificate) and <strong>Red</strong>{" "}
          (overdue/missing) surface as exceptions; evidence never overrides an overdue date.
        </Callout>

        <div className="grid grid-cols-6 gap-4">
          {METRICS.map((m) => (
            <MetricCard key={m.title} title={m.title} value={m.value} />
          ))}
        </div>

        <Section title="Programme requirements">
          <ViewSegments
            label="Filter by status"
            value="all"
            segments={[
              { id: "all", label: "All" },
              { id: "red", label: "Red" },
              { id: "grey", label: "Grey" },
              { id: "green", label: "Green" },
              { id: "not_required", label: "Not required" },
            ]}
          />
          <div className="mt-4">
            <DataTable
              rows={ROWS}
              columns={[
                {
                  key: "asset",
                  header: "Asset",
                  cell: (r) => <span className="font-medium text-foreground">{r.asset}</span>,
                },
                { key: "block", header: "Block" },
                { key: "programme", header: "Programme" },
                {
                  key: "status",
                  header: "Status",
                  cell: (r) => (
                    <Badge variant={STATE[r.status].variant}>{r.status}</Badge>
                  ),
                },
                { key: "due", header: "Due" },
                {
                  key: "reason",
                  header: "Reason",
                  cell: (r) => (
                    <span className="text-muted-foreground">{r.reason}</span>
                  ),
                },
              ]}
            />
          </div>
        </Section>
      </div>
    </AppShellMockup>
  );
}
