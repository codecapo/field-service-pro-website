import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/components/ui";

const frame = "flex h-full w-full flex-col bg-card";
const caps = "text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground";

/* ── Evidence-led compliance board ── */
const programmes = [
  { name: "Gas safety (LGSR)", pct: 98, valid: 1142, due: 24, missing: 0, tone: "success" },
  { name: "Electrical (EICR)", pct: 96, valid: 1118, due: 41, missing: 2, tone: "success" },
  { name: "Fire risk (FRA)", pct: 91, valid: 612, due: 48, missing: 6, tone: "warning" },
  { name: "Asbestos re-inspection", pct: 88, valid: 540, due: 62, missing: 9, tone: "warning" },
  { name: "Lifts (LOLER)", pct: 100, valid: 86, due: 0, missing: 0, tone: "success" },
  { name: "Water (Legionella)", pct: 94, valid: 430, due: 22, missing: 3, tone: "success" },
] as const;

const barTone: Record<string, string> = {
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};
const pillTone: Record<string, string> = {
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/12 text-danger",
};

export function ComplianceBoard({ className }: { className?: string }) {
  return (
    <div className={cn(frame, className)}>
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <span className="text-[15px] font-semibold">Compliance overview</span>
        <span className="text-xs text-muted-foreground">Live · all stock</span>
      </div>

      {/* denominator */}
      <div className="grid grid-cols-2 gap-px border-b border-border bg-border sm:grid-cols-4">
        {[
          { k: "Required", v: "1,180" },
          { k: "Externally managed", v: "42" },
          { k: "Pending review", v: "7" },
          { k: "Unknown", v: "0", note: true },
        ].map((d) => (
          <div key={d.k} className="bg-card px-4 py-3">
            <p className={caps}>{d.k}</p>
            <p className={cn("mt-1 text-lg font-semibold tabular-nums", d.note && "text-success")}>{d.v}</p>
            {d.note && <p className="text-[10px] text-success">exceptions, not green</p>}
          </div>
        ))}
      </div>

      {/* programmes */}
      <div className="flex flex-1 flex-col justify-around divide-y divide-border">
        {programmes.map((p) => (
          <div key={p.name} className="flex items-center gap-3 px-5 py-2.5">
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="truncate text-sm font-medium">{p.name}</p>
                <span className="ml-2 text-xs tabular-nums text-muted-foreground">{p.pct}%</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className={cn("h-full rounded-full", barTone[p.tone])} style={{ width: `${p.pct}%` }} />
              </div>
            </div>
            <span
              className={cn(
                "hidden shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium sm:inline-flex",
                p.missing > 0 ? pillTone.warning : pillTone.success,
              )}
            >
              {p.missing > 0 ? `${p.missing} missing` : "Compliant"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Live asset register: portfolio → block → property → component ── */
const components = [
  { name: "Kitchen 1", cond: "Fair", life: "6 yrs", tone: "warning" },
  { name: "Bathroom 1", cond: "Good", life: "9 yrs", tone: "success" },
  { name: "Bathroom 2", cond: "Poor", life: "2 yrs", tone: "danger" },
  { name: "Boiler 1", cond: "Fair", life: "5 yrs", tone: "warning" },
  { name: "Fire door 1", cond: "Good", life: "—", tone: "success" },
] as const;

export function AssetRegister({ className }: { className?: string }) {
  return (
    <div className={cn(frame, className)}>
      {/* breadcrumb */}
      <div className="flex items-center gap-1.5 border-b border-border px-5 py-3 text-xs text-muted-foreground">
        <span>Portfolio</span>
        <ChevronRight className="size-3" />
        <span>Stratford</span>
        <ChevronRight className="size-3" />
        <span>Vicarage Court</span>
        <ChevronRight className="size-3" />
        <span className="font-medium text-foreground">12 Vicarage Lane</span>
      </div>

      {/* property header */}
      <div className="flex items-start justify-between gap-3 px-5 py-4">
        <div>
          <p className="text-[15px] font-semibold">12 Vicarage Lane</p>
          <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">UPRN 100023001 · P0001772001</p>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">Secure tenancy</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-success/12 px-2 py-0.5 text-[11px] font-medium text-success">
            <Check className="size-3" strokeWidth={3} /> Decent · HHSRS clear
          </span>
        </div>
      </div>

      {/* components */}
      <div className="flex flex-1 flex-col px-5 pb-4">
        <div className="flex items-center justify-between">
          <p className={caps}>Components</p>
          <span className="text-xs font-medium text-primary">5 records</span>
        </div>
        <div className="mt-2 flex flex-1 flex-col justify-around divide-y divide-border rounded-xl border border-border">
          {components.map((c) => (
            <div key={c.name} className="flex items-center gap-3 px-3 py-2.5">
              <span className="min-w-0 flex-1 truncate text-sm font-medium">{c.name}</span>
              <span className="text-xs tabular-nums text-muted-foreground">{c.life}</span>
              <span className={cn("shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium", pillTone[c.tone])}>
                {c.cond}
              </span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
