import { Leaf, ShieldAlert, Wrench } from "lucide-react";
import { cn } from "@/components/ui";

const caps = "text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground";

const voidStages = [
  { stage: "Keys", count: 6, age: "avg 2d" },
  { stage: "Inspection", count: 4, age: "avg 4d" },
  { stage: "Works", count: 9, age: "avg 11d" },
  { stage: "Compliance", count: 3, age: "avg 6d" },
  { stage: "Ready-to-let", count: 5, age: "avg 3d" },
];

const epcBands = [
  { band: "A", count: 2, pct: 4, bar: "bg-success" },
  { band: "B", count: 9, pct: 14, bar: "bg-success" },
  { band: "C", count: 31, pct: 48, bar: "bg-primary" },
  { band: "D", count: 22, pct: 34, bar: "bg-warning" },
  { band: "E", count: 7, pct: 11, bar: "bg-warning" },
  { band: "F", count: 2, pct: 4, bar: "bg-danger" },
  { band: "G", count: 1, pct: 2, bar: "bg-danger" },
];

const riskCards = [
  { label: "Disrepair", value: 14, tone: "warning" as const },
  { label: "Complaints", value: 9, tone: "neutral" as const },
  { label: "Ombudsman", value: 2, tone: "danger" as const },
  { label: "Damp & mould", value: 31, tone: "warning" as const },
];

const toneText: Record<string, string> = {
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
  neutral: "text-foreground",
};

export function StrategyBoard({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full w-full flex-col bg-card", className)}>
      {/* top bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-3">
        <h2 className="text-[15px] font-semibold">Strategy &amp; risk</h2>
        <span className="text-[11px] text-muted-foreground">Portfolio · 64 dwellings</span>
      </div>

      {/* content fills the frame */}
      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
        {/* Void turnaround */}
        <section>
          <div className="flex items-center gap-2">
            <Wrench className="size-3.5 text-muted-foreground" />
            <span className={caps}>Void turnaround</span>
          </div>
          <div className="mt-2 grid grid-cols-5 gap-2">
            {voidStages.map((s) => (
              <div key={s.stage} className="rounded-xl border border-border p-3">
                <div className="text-xl font-semibold tabular-nums">{s.count}</div>
                <div className="mt-0.5 truncate text-[11px] font-medium">{s.stage}</div>
                <div className="text-[10px] text-muted-foreground tabular-nums">{s.age}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Retrofit · EPC bands */}
        <section>
          <div className="flex items-center gap-2">
            <Leaf className="size-3.5 text-muted-foreground" />
            <span className={caps}>Retrofit · EPC bands</span>
          </div>
          <div className="mt-2 space-y-1.5">
            {epcBands.map((b) => (
              <div key={b.band} className="flex items-center gap-3">
                <span className="w-3 text-[11px] font-semibold tabular-nums">{b.band}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className={cn("h-full rounded-full", b.bar)} style={{ width: `${b.pct}%` }} />
                </div>
                <span className="w-6 text-right text-[11px] text-muted-foreground tabular-nums">
                  {b.count}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Resident risk */}
        <section>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldAlert className="size-3.5 text-muted-foreground" />
              <span className={caps}>Resident risk</span>
            </div>
            <span className="rounded-full bg-success/12 px-2 py-0.5 text-[11px] font-medium text-success">
              NPV option-appraisal data: ready
            </span>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {riskCards.map((r) => (
              <div key={r.label} className="rounded-xl border border-border p-3">
                <div className={cn("text-xl font-semibold tabular-nums", toneText[r.tone])}>
                  {r.value}
                </div>
                <div className="mt-0.5 truncate text-[11px] text-muted-foreground">{r.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
