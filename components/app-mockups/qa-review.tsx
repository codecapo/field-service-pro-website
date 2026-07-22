"use client";

/* The product's /qa screen — the review gate between a captured survey and the
   accepted record.

   This is the step the marketing copy leans on ("get checked, and feed the
   reporting position"), so the queue, the hazard counts and the accept/reject
   outcome all need to be visible. Figures are invented; the StatGroup totals
   agree with the queue below. */

import { RefreshCw, Search } from "lucide-react";
import { PageHeader } from "@/components/haven/components/patterns/page-header";
import { StatGroup } from "@/components/haven/components/patterns/stat-group";
import { DataTable } from "@/components/haven/components/patterns/data-table";
import { Badge } from "@/components/haven/components/ui/badge";
import { Button } from "@/components/haven/components/ui/button";
import { AppShellMockup } from "./shell";

const QUEUE = [
  {
    property: "Flat 12, Kestrel House",
    reference: "B00214/26",
    surveyor: "Jade Okafor",
    submitted: "22 Jul 2026",
    hazards: 2,
    counts: "14 components · 31 photos",
  },
  {
    property: "Flat 4, Heron Point",
    reference: "B00219/26",
    surveyor: "Tom Brennan",
    submitted: "22 Jul 2026",
    hazards: 1,
    counts: "12 components · 24 photos",
  },
  {
    property: "Flat 26, Swift Court",
    reference: "B00221/26",
    surveyor: "Priya Raman",
    submitted: "21 Jul 2026",
    hazards: 0,
    counts: "15 components · 38 photos",
  },
  {
    property: "Flat 9, Wren Lodge",
    reference: "B00223/26",
    surveyor: "Callum Reid",
    submitted: "21 Jul 2026",
    hazards: 3,
    counts: "11 components · 19 photos",
  },
  {
    property: "Flat 31, Linnet Gardens",
    reference: "B00226/26",
    surveyor: "Aisha Nuru",
    submitted: "20 Jul 2026",
    hazards: 0,
    counts: "13 components · 27 photos",
  },
  {
    property: "Flat 18, Kestrel House",
    reference: "B00229/26",
    surveyor: "Jade Okafor",
    submitted: "20 Jul 2026",
    hazards: 1,
    counts: "14 components · 22 photos",
  },
  {
    property: "Flat 2, Heron Point",
    reference: "B00231/26",
    surveyor: "Tom Brennan",
    submitted: "19 Jul 2026",
    hazards: 0,
    counts: "12 components · 30 photos",
  },
  {
    property: "Flat 44, Swift Court",
    reference: "B00234/26",
    surveyor: "Priya Raman",
    submitted: "19 Jul 2026",
    hazards: 2,
    counts: "15 components · 26 photos",
  },
];

export function QaReviewMockup() {
  return (
    <AppShellMockup active="QA Review">
      <div className="flex flex-col gap-8">
        <PageHeader
          title="QA Review"
          subtitle="23 surveys awaiting review"
          actions={
            <Button variant="outline" size="sm">
              <RefreshCw className="size-4" />
              Refresh from server
            </Button>
          }
        />

        <StatGroup
          items={[
            { label: "Awaiting QA", value: 23 },
            { label: "Accepted", value: 518 },
            { label: "Rejected", value: 14 },
            { label: "No access", value: 29 },
          ]}
        />

        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <div className="flex h-9 items-center rounded-md border border-border pl-8 text-sm text-muted-foreground">
            Filter by address, postcode, reference or UPRN…
          </div>
        </div>

        <DataTable
          rows={QUEUE}
          columns={[
            {
              key: "property",
              header: "Property",
              cell: (r) => <span className="font-medium text-foreground">{r.property}</span>,
            },
            { key: "reference", header: "Reference" },
            { key: "surveyor", header: "Surveyor" },
            { key: "submitted", header: "Submitted" },
            {
              key: "hazards",
              header: "Hazards",
              cell: (r) =>
                r.hazards > 0 ? (
                  <Badge variant="danger">{r.hazards} open</Badge>
                ) : (
                  <span className="text-muted-foreground">None</span>
                ),
            },
            {
              key: "counts",
              header: "Counts",
              cell: (r) => <span className="text-muted-foreground">{r.counts}</span>,
            },
          ]}
        />
      </div>
    </AppShellMockup>
  );
}
