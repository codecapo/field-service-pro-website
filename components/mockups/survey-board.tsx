import { Camera, Check } from "lucide-react";
import { cn } from "@/components/ui";

const caps = "text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground";
const pill = "rounded-full px-2 py-0.5 text-[11px] font-medium";
const tone = {
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/12 text-danger",
  primary: "bg-primary/10 text-primary",
} as const;

const intelligence = [
  "2 bed",
  "1 kitchen",
  "2 baths",
  "Mains gas",
  "Door entry",
  "No adaptations",
];

const components = [
  { name: "Kitchen 1", cond: "Fair", t: "warning", life: "6 yrs" },
  { name: "Bathroom 1", cond: "Good", t: "success", life: "9 yrs" },
  { name: "Bathroom 2", cond: "Poor", t: "danger", life: "2 yrs" },
  { name: "Boiler 1", cond: "Fair", t: "warning", life: "5 yrs" },
] as const;

const issues = [
  { id: "ISS-0042", type: "HHSRS · Category 1", loc: "Bathroom 2 — damp & mould" },
  { id: "ISS-0043", type: "Urgent review", loc: "Kitchen — CO alarm missing" },
] as const;

export function SurveyBoard({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full w-full flex-col bg-card", className)}>
      {/* top bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-3">
        <span className="text-[15px] font-semibold">Survey · 12 Vicarage Lane</span>
        <span className="text-xs text-muted-foreground">Stock condition · 2026</span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
        {/* survey header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] text-muted-foreground">
              UPRN 100023001 · P0001772001
            </p>
            <p className="mt-1 text-sm">
              Surveyor <span className="font-medium">Tomas Nowak</span> · submitted 14 Jun 2026
            </p>
          </div>
          <span className={cn(pill, tone.success, "inline-flex items-center gap-1")}>
            <Check className="size-3" strokeWidth={3} /> Accepted
          </span>
        </div>

        {/* stock intelligence */}
        <div>
          <p className={caps}>Stock intelligence</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {intelligence.map((chip) => (
              <span
                key={chip}
                className="rounded-md border border-border bg-muted/50 px-2 py-1 text-[11px] text-foreground"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* components */}
        <div>
          <div className="flex items-center justify-between">
            <p className={caps}>Components</p>
            <span className="text-xs font-medium text-primary">4 records</span>
          </div>
          <div className="mt-2 divide-y divide-border rounded-xl border border-border">
            {components.map((c) => (
              <div key={c.name} className="flex items-center justify-between px-3 py-2.5">
                <span className="text-sm font-medium">{c.name}</span>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs tabular-nums text-muted-foreground">{c.life}</span>
                  <span className={cn(pill, tone[c.t])}>{c.cond}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* hhsrs issues */}
        <div>
          <p className={caps}>HHSRS issues</p>
          <div className="mt-2 flex flex-col gap-2">
            {issues.map((i) => (
              <div
                key={i.id}
                className="rounded-xl border border-danger/30 bg-danger/5 p-3"
              >
                <div className="flex items-center justify-between">
                  <span className={cn(pill, tone.danger)}>{i.type}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{i.id}</span>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">{i.loc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* footer */}
        <div className="flex items-center gap-2 rounded-lg bg-success/8 px-3 py-2 text-[11px] text-success">
          <Camera className="size-3.5" /> 7 photos captured · PDF & structured export reconciled
        </div>
      </div>
    </div>
  );
}
