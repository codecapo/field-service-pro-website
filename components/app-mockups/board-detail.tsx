"use client";

/* Client, because the vendored product patterns are themselves "use client" and
   this passes Lucide components to them as props — functions cannot cross the
   server/client boundary. Nothing here is interactive; it is static markup that
   happens to render on the client. */

import { CircleDot, CloudUpload, ImagePlus, UserCheck } from "lucide-react";
import { PageHeader } from "@/components/haven/components/patterns/page-header";
import { KeyValuePanel } from "@/components/haven/components/patterns/key-value-panel";
import { Section } from "@/components/haven/components/patterns/section";
import { StatGroup } from "@/components/haven/components/patterns/stat-group";
import { DataTable } from "@/components/haven/components/patterns/data-table";
import { Badge } from "@/components/haven/components/ui/badge";
import { Button } from "@/components/haven/components/ui/button";
import { AppShellMockup } from "./shell";

const ISSUES = [
  {
    hazard: "Damp and mould",
    band: "Category 1",
    owner: "Repairs — North",
    due: "12 Aug 2026",
    status: "Open",
  },
  {
    hazard: "Excess cold",
    band: "Category 2",
    owner: "Planned works",
    due: "30 Sep 2026",
    status: "In progress",
  },
];

const ACTIVITY = [
  {
    icon: CloudUpload,
    text: "Survey data synced from HB Field — 31 photos, 14 components.",
    at: "22 Jul 2026, 16:04",
  },
  {
    icon: ImagePlus,
    text: "Damp and mould raised as a Category 1 hazard by Jade Okafor.",
    at: "18 Jul 2026, 11:27",
  },
  {
    icon: UserCheck,
    text: "Assigned to Jade Okafor by Priya Raman.",
    at: "14 Jul 2026, 09:12",
  },
];

/* The survey work-item detail — the product's /board/[assignmentId] screen.

   Composed from the real vendored components rather than screenshotted, so it
   restyles automatically when the product's design system changes. Every value
   below is invented: no real property, UPRN, resident or colleague appears on
   the marketing site. */

export function BoardDetailMockup() {
  return (
    <AppShellMockup active="Board">
      <div className="flex flex-col gap-8">
        <PageHeader
          breadcrumb={[{ label: "Board", href: "#" }, { label: "B00214/26" }]}
          title="Flat 12, Kestrel House, Harrow Road"
          subtitle="W9 3RT · UPRN 100023336591 · B00214/26"
          status={<Badge variant="info">Assigned</Badge>}
        >
          <StatGroup
            items={[
              { label: "Assignee", value: "Jade Okafor" },
              { label: "Squad", value: "North squad" },
              { label: "Components", value: "14" },
              { label: "Issues", value: "2" },
              { label: "Photos", value: "31" },
            ]}
          />
        </PageHeader>

        <Section title="Survey">
          <div className="flex items-center gap-3">
            <Badge variant="info">
              <CircleDot className="size-3" />
              In progress
            </Badge>
            <span className="text-sm text-muted-foreground">
              Started 14 Jul, 62% captured.
            </span>
            <Button size="sm" variant="outline">
              Open capture
            </Button>
          </div>
        </Section>

        <Section title="Property">
          {/* One section, two columns of rows — matching the product, where the
              right-hand column is a continuation rather than its own heading. */}
          <div className="grid grid-cols-2 gap-x-10">
            <KeyValuePanel
              rows={[
                { label: "Address", value: "Flat 12, Kestrel House, Harrow Road" },
                { label: "UPRN", value: "100023336591", copy: "100023336591" },
                { label: "Tenure", value: "GENERAL NEEDS" },
                { label: "Status", value: "Assigned" },
              ]}
            />
            <KeyValuePanel
              rows={[
                { label: "Postcode", value: "W9 3RT" },
                { label: "Property reference", value: "B00214/26" },
                { label: "Portfolio", value: "North West portfolio" },
                { label: "Squad", value: "North squad" },
              ]}
            />
          </div>
        </Section>

        <Section
          title="HHSRS & issues"
          description="Issue-level records with owner, due date and closure evidence; a hazard category stays open until every linked issue is closed."
        >
          <DataTable
            rows={ISSUES}
            columns={[
              { key: "hazard", header: "Hazard" },
              {
                key: "band",
                header: "Band",
                cell: (r) => (
                  <Badge variant={r.band === "Category 1" ? "danger" : "warning"}>
                    {r.band}
                  </Badge>
                ),
              },
              { key: "owner", header: "Owner" },
              { key: "due", header: "Due" },
              {
                key: "status",
                header: "Status",
                cell: (r) => <Badge variant="info">{r.status}</Badge>,
              },
            ]}
          />
        </Section>

        <Section title="Activity">
          <ol className="flex flex-col gap-3">
            {ACTIVITY.map((entry) => (
              <li key={entry.at} className="flex items-start gap-2.5">
                <entry.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm text-foreground">{entry.text}</span>
                  <span className="text-[13px] leading-4 text-muted-foreground">
                    {entry.at}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      </div>
    </AppShellMockup>
  );
}
