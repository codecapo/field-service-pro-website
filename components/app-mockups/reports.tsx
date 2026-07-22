"use client";

/* The product's /reports screen — saved cross-domain views.

   The point of this screen is that it is the controlled alternative to a
   spreadsheet someone keeps on their own desktop: the view is saved, shared and
   derived from the accepted record, so two people asking the same question get
   the same answer. Figures are invented. */

import { FileBarChart } from "lucide-react";
import { PageHeader } from "@/components/haven/components/patterns/page-header";
import { Section } from "@/components/haven/components/patterns/section";
import { DataTable } from "@/components/haven/components/patterns/data-table";
import { Badge } from "@/components/haven/components/ui/badge";
import { cn } from "@/components/haven/lib/utils";
import { AppShellMockup } from "./shell";

const VIEWS: { category: string; items: { name: string; active?: boolean }[] }[] = [
  {
    category: "Compliance",
    items: [
      { name: "Overdue programmes" },
      { name: "Missing certificates", active: true },
      { name: "Due in 30 days" },
    ],
  },
  {
    category: "Stock condition",
    items: [
      { name: "Components past expected life" },
      { name: "Decent Homes failures" },
      { name: "Category 1 hazards open" },
    ],
  },
  { category: "Field", items: [{ name: "No access, two attempts" }, { name: "Awaiting QA" }] },
];

const ROWS = [
  { asset: "Flat 12, Kestrel House", finding: "Gas safety", detail: "Certificate not uploaded", band: "Grey" },
  { asset: "Flat 26, Swift Court", finding: "Electrical (EICR)", detail: "Certificate not uploaded", band: "Grey" },
  { asset: "Heron Point", finding: "Fire risk assessment", detail: "No current FRA on record", band: "Red" },
  { asset: "Flat 7, Heron Point", finding: "Asbestos re-inspection", detail: "Re-inspection not booked", band: "Red" },
  { asset: "Flat 19, Swift Court", finding: "Smoke and CO alarms", detail: "No access on two attempts", band: "Red" },
  { asset: "Swift Court", finding: "Fire door inspection", detail: "Evidence pending upload", band: "Grey" },
];

export function ReportsMockup() {
  return (
    <AppShellMockup active="Reports">
      <div className="flex flex-col gap-8">
        <PageHeader
          title="Reports"
          subtitle="Saved cross-domain views — the controlled alternative to parallel spreadsheets"
        />

        <div className="grid grid-cols-[280px_1fr] gap-6">
          <div className="flex flex-col gap-5">
            {VIEWS.map((group) => (
              <div key={group.category} className="flex flex-col gap-2">
                <p className="text-[11px] font-semibold tracking-[0.06em] text-muted-foreground uppercase">
                  {group.category}
                </p>
                <div className="flex flex-col gap-1.5">
                  {group.items.map((v) => (
                    <span
                      key={v.name}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm",
                        v.active
                          ? "bg-primary-50 text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      {v.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Section
            title="Missing certificates"
            description="Programmes that are in date but have no evidence attached — the false-green cases."
          >
            <DataTable
              rows={ROWS}
              columns={[
                {
                  key: "asset",
                  header: "Asset",
                  cell: (r) => <span className="font-medium text-foreground">{r.asset}</span>,
                },
                { key: "finding", header: "Finding" },
                {
                  key: "detail",
                  header: "Detail",
                  cell: (r) => <span className="text-muted-foreground">{r.detail}</span>,
                },
                {
                  key: "band",
                  header: "Status",
                  cell: (r) => (
                    <Badge variant={r.band === "Red" ? "danger" : "warning"}>{r.band}</Badge>
                  ),
                },
              ]}
              emptyState={<FileBarChart className="size-4" />}
            />
          </Section>
        </div>
      </div>
    </AppShellMockup>
  );
}
