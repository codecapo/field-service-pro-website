import { ArrowLeftRight, Check, X } from "lucide-react";
import { cn } from "@/components/ui";

const partners = [
  { name: "PFI – Lansbury", units: "1,240", status: "Assured", tone: "success" },
  { name: "TMO – Carpenters", units: "820", status: "Pending", tone: "warning" },
  { name: "Managing agent – East Ham", units: "310", status: "Assured", tone: "success" },
] as const;

const submissions = [
  { partner: "Lansbury PFI", stream: "Gas", date: "16 Jun" },
  { partner: "Carpenters TMO", stream: "EICR", date: "15 Jun" },
  { partner: "Carpenters TMO", stream: "FRA", date: "14 Jun" },
  { partner: "East Ham MA", stream: "Damp", date: "12 Jun" },
] as const;

const pill: Record<string, string> = {
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/12 text-danger",
  primary: "bg-primary/10 text-primary",
  neutral: "bg-muted text-muted-foreground",
};

const caps = "text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground";

export function DelegatedBoard({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full w-full flex-col bg-card", className)}>
      <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-3">
        <span className="text-[15px] font-semibold">Delegated assurance</span>
        <span className="text-xs text-muted-foreground">3 partners · 2,370 units</span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
        {/* Managed stock by partner */}
        <div>
          <p className={caps}>Managed stock by partner</p>
          <div className="mt-2 grid grid-cols-3 gap-3">
            {partners.map((p) => (
              <div key={p.name} className="rounded-xl border border-border p-3">
                <p className="text-xs font-medium leading-snug">{p.name}</p>
                <p className="mt-1 text-lg font-semibold tabular-nums">{p.units}</p>
                <span className="text-[11px] text-muted-foreground">units</span>
                <span
                  className={cn(
                    "mt-2 inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium",
                    pill[p.tone],
                  )}
                >
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Submissions awaiting assurance */}
        <div>
          <p className={caps}>Submissions awaiting assurance</p>
          <div className="mt-1 divide-y divide-border">
            {submissions.map((s, i) => (
              <div key={i} className="flex items-center justify-between py-2.5">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{s.partner}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {s.stream} · submitted {s.date}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
                      pill.success,
                    )}
                  >
                    <Check className="size-3" strokeWidth={3} /> Accept
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
                      pill.neutral,
                    )}
                  >
                    <X className="size-3" strokeWidth={3} /> Reject
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration footer */}
        <div className="flex items-center justify-between rounded-xl border border-border bg-muted/40 px-3 py-2.5">
          <span className="inline-flex items-center gap-2 text-[11px] text-muted-foreground">
            <ArrowLeftRight className="size-3.5" />
            CRM / Northgate sync · last 14:20
          </span>
          <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-medium", pill.warning)}>
            2 conflicts flagged
          </span>
        </div>
      </div>
    </div>
  );
}
