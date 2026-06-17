import { ArrowLeftRight, ArrowRight } from "lucide-react";
import { cn } from "@/components/ui";

const caps = "text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground";

const reconciliation = [
  { label: "Opening", value: "12,480", tone: "foreground" },
  { label: "Additions", value: "+42", tone: "success" },
  { label: "Removals", value: "−18", tone: "danger" },
  { label: "Transfers", value: "6", tone: "foreground" },
  { label: "Closing", value: "12,504", tone: "foreground" },
] as const;

const pipeline = [
  { label: "Application", value: 24 },
  { label: "S125 review", value: 11 },
  { label: "S125 issued", value: 7 },
  { label: "Completed", value: 5 },
] as const;

const movements = [
  { addr: "Flat 6, Maryland Point", ref: "E15 1AB", type: "Acquisition", sign: "+", reason: "New-build handover", date: "31 May 2026", status: "Approved", tone: "success" },
  { addr: "14 Sebert Road", ref: "E7 0NQ", type: "Disposal", sign: "−", reason: "RTB completion", date: "28 May 2026", status: "Approved", tone: "success" },
  { addr: "Flat 2, Carpenters Estate", ref: "E15 2DZ", type: "Transfer", sign: "", reason: "Management → TMO", date: "24 May 2026", status: "Pending", tone: "warning" },
  { addr: "9 Henniker Road", ref: "E15 1JY", type: "Disposal", sign: "−", reason: "Demolition programme", date: "20 May 2026", status: "Pending", tone: "warning" },
] as const;

const valueTone: Record<string, string> = {
  foreground: "text-foreground",
  success: "text-success",
  danger: "text-danger",
};
const pillTone: Record<string, string> = {
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
};
const signTone: Record<string, string> = {
  "+": "text-success",
  "−": "text-danger",
  "": "text-muted-foreground",
};

export function StockMovementBoard({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full w-full flex-col bg-card", className)}>
      <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-3">
        <span className="text-[15px] font-semibold">Stock movement</span>
        <span className="text-xs text-muted-foreground">As at 31 May 2026 · all stock</span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        {/* monthly reconciliation */}
        <div>
          <div className="flex items-center justify-between">
            <p className={caps}>Monthly reconciliation</p>
            <span className="text-[11px] text-muted-foreground">effective 31 May 2026</span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {reconciliation.map((r) => (
              <div key={r.label} className="rounded-xl border border-border p-3">
                <p className="text-[11px] text-muted-foreground">{r.label}</p>
                <p className={cn("mt-1 text-lg font-semibold tabular-nums", valueTone[r.tone])}>{r.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RTB pipeline */}
        <div>
          <p className={caps}>RTB pipeline</p>
          <div className="mt-2 flex items-stretch gap-2">
            {pipeline.map((s, i) => (
              <div key={s.label} className="flex flex-1 items-center gap-2">
                <div className="flex-1 rounded-xl border border-border p-3 text-center">
                  <p className="text-lg font-semibold tabular-nums">{s.value}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{s.label}</p>
                </div>
                {i < pipeline.length - 1 && (
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* recent movements */}
        <div className="flex flex-1 flex-col">
          <p className={caps}>Recent movements</p>
          <div className="mt-1 flex flex-1 flex-col justify-around divide-y divide-border">
            {movements.map((m) => (
              <div key={m.addr} className="flex items-center justify-between gap-3 py-2.5">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{m.addr}</p>
                  <p className="truncate font-mono text-[11px] text-muted-foreground">
                    {m.ref} · {m.reason}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-xs font-medium">
                    <ArrowLeftRight className="size-3 text-muted-foreground/60" />
                    <span className={signTone[m.sign]}>{m.sign}</span>
                    {m.type}
                  </span>
                  <span className="hidden text-[11px] tabular-nums text-muted-foreground sm:inline">
                    {m.date}
                  </span>
                  <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-medium", pillTone[m.tone])}>
                    {m.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
