"use client";

/* The product's /assets/[uprn] screen — one property, down to the component.

   Mirrors the real page's section order (classification, then components, then
   survey history), which is the drill-down the marketing copy promises:
   portfolio → block → property → component and its condition. */

import { PageHeader } from "@/components/haven/components/patterns/page-header";
import { Section } from "@/components/haven/components/patterns/section";
import { KeyValuePanel } from "@/components/haven/components/patterns/key-value-panel";
import { DataTable } from "@/components/haven/components/patterns/data-table";
import { Badge } from "@/components/haven/components/ui/badge";
import { AppShellMockup } from "./shell";

const CONDITION: Record<string, "success" | "warning" | "danger"> = {
  Good: "success",
  Fair: "warning",
  Poor: "danger",
};

const COMPONENTS = [
  {
    component: "Kitchen — units and worktop",
    installed: "2014",
    life: "20 yrs",
    condition: "Fair",
    replace: "2034",
  },
  {
    component: "Boiler — combi, gas",
    installed: "2019",
    life: "15 yrs",
    condition: "Good",
    replace: "2034",
  },
  {
    component: "Bathroom — suite",
    installed: "2011",
    life: "25 yrs",
    condition: "Fair",
    replace: "2036",
  },
  {
    component: "Windows — uPVC double glazed",
    installed: "2008",
    life: "30 yrs",
    condition: "Poor",
    replace: "2027",
  },
  {
    component: "Electrics — consumer unit",
    installed: "2019",
    life: "30 yrs",
    condition: "Good",
    replace: "2049",
  },
  {
    component: "Roof covering — pitched tile",
    installed: "1998",
    life: "60 yrs",
    condition: "Fair",
    replace: "2058",
  },
];

const SURVEYS = [
  { survey: "Stock condition survey", status: "Accepted", submitted: "22 Jul 2026" },
  { survey: "HHSRS inspection", status: "Accepted", submitted: "14 Mar 2026" },
  { survey: "Stock condition survey", status: "Superseded", submitted: "09 Jun 2021" },
];

export function AssetRegisterMockup() {
  return (
    <AppShellMockup active="Portfolio Management">
      <div className="flex flex-col gap-8">
        <PageHeader
          breadcrumb={[
            { label: "Portfolio Management", href: "#" },
            { label: "Kestrel House", href: "#" },
            { label: "Flat 12" },
          ]}
          title="Flat 12, Kestrel House, Harrow Road"
          subtitle="W9 3RT · UPRN 100023336591"
          status={<Badge variant="success">Surveyed</Badge>}
        />

        <Section title="Classification">
          <div className="grid grid-cols-3 gap-x-10">
            <KeyValuePanel
              rows={[
                { label: "Portfolio", value: "North West portfolio" },
                { label: "Block", value: "Kestrel House" },
                { label: "Archetype", value: "Low-rise flat, 1960–1975" },
              ]}
            />
            <KeyValuePanel
              rows={[
                { label: "Tenure", value: "GENERAL NEEDS" },
                { label: "Bedrooms", value: "2" },
                { label: "Floor area", value: "61 m²" },
              ]}
            />
            <KeyValuePanel
              rows={[
                { label: "Decent Homes", value: "Compliant" },
                { label: "EPC", value: "C (72)" },
                { label: "Last surveyed", value: "22 Jul 2026" },
              ]}
            />
          </div>
        </Section>

        <Section title={`Components (${COMPONENTS.length})`}>
          <DataTable
            rows={COMPONENTS}
            columns={[
              {
                key: "component",
                header: "Component",
                cell: (r) => (
                  <span className="font-medium text-foreground">{r.component}</span>
                ),
              },
              { key: "installed", header: "Installed" },
              { key: "life", header: "Expected life" },
              {
                key: "condition",
                header: "Condition",
                cell: (r) => (
                  <Badge variant={CONDITION[r.condition]}>{r.condition}</Badge>
                ),
              },
              { key: "replace", header: "Replacement due" },
            ]}
          />
        </Section>

        <Section title={`Survey history (${SURVEYS.length})`}>
          <DataTable
            rows={SURVEYS}
            columns={[
              {
                key: "survey",
                header: "Survey",
                cell: (r) => (
                  <span className="font-medium text-foreground">{r.survey}</span>
                ),
              },
              {
                key: "status",
                header: "Status",
                cell: (r) => (
                  <Badge variant={r.status === "Accepted" ? "success" : "secondary"}>
                    {r.status}
                  </Badge>
                ),
              },
              { key: "submitted", header: "Submitted" },
            ]}
          />
        </Section>
      </div>
    </AppShellMockup>
  );
}
