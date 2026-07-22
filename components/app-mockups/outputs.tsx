"use client";

/* The product's /outputs screen — the PDF report and the structured export.

   The load-bearing claim here is reconciliation: both artefacts are generated
   from the same accepted record, so an issue ID printed in the report appears
   verbatim in the export. That is the difference between a data dump and a feed
   someone can build a dashboard on, and it is why the callout stays. */

import { FileDown, FileText, Sheet } from "lucide-react";
import { PageHeader } from "@/components/haven/components/patterns/page-header";
import { Section } from "@/components/haven/components/patterns/section";
import { Callout } from "@/components/haven/components/patterns/callout";
import { Badge } from "@/components/haven/components/ui/badge";
import { Button } from "@/components/haven/components/ui/button";
import { AppShellMockup } from "./shell";

const ACCEPTED = [
  { property: "Flat 12, Kestrel House", ref: "B00214/26", accepted: "22 Jul 2026", size: "14 components · 31 photos" },
  { property: "Flat 4, Heron Point", ref: "B00219/26", accepted: "22 Jul 2026", size: "12 components · 24 photos" },
  { property: "Flat 26, Swift Court", ref: "B00221/26", accepted: "21 Jul 2026", size: "15 components · 38 photos" },
  { property: "Flat 9, Wren Lodge", ref: "B00223/26", accepted: "21 Jul 2026", size: "11 components · 19 photos" },
  { property: "Flat 31, Linnet Gardens", ref: "B00226/26", accepted: "20 Jul 2026", size: "13 components · 27 photos" },
];

export function OutputsMockup() {
  return (
    <AppShellMockup active="Outputs">
      <div className="flex flex-col gap-6">
        <PageHeader
          title="Outputs"
          subtitle="Professional PDF reports and structured data exports for completed surveys."
          actions={
            <Button size="sm">
              <FileDown className="size-4" />
              Export all accepted (XLSX)
            </Button>
          }
        />

        <Callout variant="neutral">
          Every PDF report and its matching data export are generated from the same accepted
          survey record, so they reconcile exactly — an issue ID printed on the report appears
          verbatim in the <span className="font-medium">issue_record</span> sheet.
        </Callout>

        <Section title={`Accepted (${ACCEPTED.length})`}>
          <div className="flex flex-col gap-3">
            {ACCEPTED.map((r) => (
              <div
                key={r.ref}
                className="flex items-center gap-4 rounded-lg border border-border px-4 py-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">{r.property}</p>
                  <p className="text-[13px] text-muted-foreground">
                    {r.ref} · accepted {r.accepted} · {r.size}
                  </p>
                </div>
                <Badge variant="success">Accepted</Badge>
                <Button size="sm" variant="outline">
                  <FileText className="size-4" />
                  PDF
                </Button>
                <Button size="sm" variant="outline">
                  <Sheet className="size-4" />
                  Data
                </Button>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </AppShellMockup>
  );
}
