import { AlertTriangle, ArrowUpRight, Search } from "lucide-react";
import { cn } from "@/components/ui";

const caps = "text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground";

const pill: Record<string, string> = {
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/12 text-danger",
  primary: "bg-primary/10 text-primary",
  neutral: "bg-muted text-muted-foreground",
};

const metrics = [
  { label: "Open jobs", value: "142", delta: "+8", tone: "up" },
  { label: "Repair spend YTD", value: "£1.84m", delta: "+4.1%", tone: "up" },
  { label: "Repeat-failure flags", value: "23", delta: "+5", tone: "down", danger: true },
  { label: "Planned programme", value: "£4.2m", delta: "FY25/26", tone: "flat" },
];

const jobs = [
  { ref: "SOR-4821", addr: "12 Vicarage Lane", trade: "Plumbing", cost: "£2,140", status: "Completed", tone: "success", repeat: false },
  { ref: "SOR-4830", addr: "Flat 4, Romford Rd", trade: "Electrical", cost: "£3,980", status: "In progress", tone: "warning", repeat: true },
  { ref: "SOR-4844", addr: "27 Plashet Grove", trade: "Heating", cost: "£1,260", status: "No access", tone: "neutral", repeat: false },
  { ref: "SOR-4851", addr: "Flat 11, Katherine Ct", trade: "Roofing", cost: "£5,410", status: "In progress", tone: "warning", repeat: false },
  { ref: "SOR-4862", addr: "3 Shrewsbury Rd", trade: "Damp & mould", cost: "£2,675", status: "Completed", tone: "success", repeat: true },
];

export function RepairsBoard({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full w-full flex-col bg-card", className)}>
      {/* top bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-3">
        <span className="text-[15px] font-semibold">Repairs &amp; investment</span>
        <div className="hidden items-center gap-2 rounded-md bg-muted px-2.5 py-1.5 text-xs text-muted-foreground sm:flex">
          <Search className="size-3.5" /> Search jobs…
        </div>
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col p-5">
        {/* metric cards */}
        <div className="grid shrink-0 grid-cols-2 gap-3 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-border p-3">
              <p className="truncate text-[11px] text-muted-foreground">{m.label}</p>
              <div className="mt-1 flex items-end justify-between gap-2">
                <span className={cn("text-xl font-semibold tabular-nums", m.danger && "text-danger")}>
                  {m.value}
                </span>
                <span
                  className={cn(
                    "text-[11px] font-medium",
                    m.tone === "up" ? "text-success" : m.tone === "down" ? "text-danger" : "text-muted-foreground",
                  )}
                >
                  {m.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* jobs list */}
        <div className="mt-4 flex min-h-0 flex-1 flex-col">
          <div className="flex shrink-0 items-center justify-between">
            <p className={caps}>High-cost &amp; recent jobs</p>
            <span className="text-xs font-medium text-primary">View all</span>
          </div>
          <div className="flex flex-1 flex-col justify-around divide-y divide-border">
            {jobs.map((j) => (
              <div key={j.ref} className="flex items-center justify-between gap-3 py-2.5">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-medium">{j.addr}</p>
                    {j.repeat && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-danger/12 px-1.5 py-0.5 text-[10px] font-medium text-danger">
                        <AlertTriangle className="size-2.5" /> repeat failure
                      </span>
                    )}
                  </div>
                  <p className="truncate text-[11px] text-muted-foreground">
                    <span className="font-mono">{j.ref}</span> · {j.trade}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-sm font-medium tabular-nums">{j.cost}</span>
                  <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-medium", pill[j.tone])}>
                    {j.status}
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
