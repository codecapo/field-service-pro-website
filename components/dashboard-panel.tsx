import {
  ArrowUpRight,
  BarChart3,
  Building2,
  ClipboardList,
  Home,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn } from "@/components/ui";

/* A wide, Stripe/Untitled-grade app dashboard used as the hero backdrop.
   Follows DESIGN.md: 256-ish sidebar, caps labels, metric cards, sparklines,
   hairline dividers, soft frame shadow, indigo accent. */
export function DashboardPanel({ className }: { className?: string }) {
  return (
    <div className={cn("h-full w-full bg-card", className)}>
      <div className="flex h-full">
        {/* sidebar */}
        <aside className="hidden w-48 shrink-0 flex-col border-r border-border bg-muted/30 p-3 md:flex">
          <div className="flex items-center gap-2 px-1.5 py-1.5">
            <span className="grid size-6 place-items-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground">
              N
            </span>
            <span className="text-sm font-semibold">Haven AMS</span>
          </div>
          <nav className="mt-4 flex flex-col gap-0.5">
            <NavItem icon={Home} label="Home" active />
            <NavItem icon={ClipboardList} label="Surveys" />
            <NavItem icon={Building2} label="Properties" />
            <NavItem icon={ShieldCheck} label="Compliance" />
            <NavItem icon={BarChart3} label="Reporting" />
            <NavItem icon={Users} label="Users" />
          </nav>
        </aside>

        {/* main */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* top bar */}
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-5 py-3">
            <span className="text-[15px] font-semibold">Asset overview</span>
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-md bg-muted px-2.5 py-1.5 text-xs text-muted-foreground sm:flex">
                <Search className="size-3.5" /> Search properties…
              </div>
              <div className="hidden items-center rounded-md border border-border text-[11px] font-medium text-muted-foreground lg:flex">
                <span className="rounded-l-md bg-muted px-2 py-1.5 text-foreground">12 months</span>
                <span className="border-l border-border px-2 py-1.5">30 days</span>
                <span className="border-l border-border px-2 py-1.5">7 days</span>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5">
            {/* metric cards */}
            <div className="grid shrink-0 grid-cols-2 gap-3 lg:grid-cols-4">
              <Metric label="Surveys accepted" value="1,284" delta="+12.4%" spark="up" tone="primary" />
              <Metric label="Decent Homes compliant" value="94.2%" delta="+1.8%" spark="up" tone="success" />
              <Metric label="HHSRS Cat 1 open" value="7" delta="−3" spark="down" tone="danger" />
              <Metric label="Awaiting QA" value="23" delta="1.2d avg" spark="flat" tone="muted" />
            </div>

            {/* big chart */}
            <div className="mt-4 flex flex-1 flex-col rounded-xl border border-border p-4">
              <div className="flex shrink-0 items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
                    Surveys synced
                  </p>
                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-2xl font-semibold tracking-tight tabular-nums">7,940</span>
                    <span className="mb-1 inline-flex items-center gap-0.5 text-xs font-medium text-success">
                      <ArrowUpRight className="size-3" /> 9.1%
                    </span>
                  </div>
                </div>
                <div className="hidden gap-4 sm:flex">
                  <Legend color="var(--primary)" label="This year" />
                  <Legend color="var(--muted-foreground)" label="Last year" />
                </div>
              </div>
              <div className="mt-4 min-h-20 flex-1">
                <AreaChart className="h-full w-full" />
              </div>
              <div className="mt-2 flex shrink-0 justify-between text-[10px] text-muted-foreground">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  active,
}: {
  icon: typeof Home;
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex h-8 items-center gap-2.5 rounded-md px-2.5 text-sm",
        active ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground",
      )}
    >
      <Icon className="size-4" />
      {label}
    </span>
  );
}

function Metric({
  label,
  value,
  delta,
  spark,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  spark: "up" | "down" | "flat";
  tone: "primary" | "success" | "danger" | "muted";
}) {
  const valueColor = tone === "danger" ? "text-danger" : "text-foreground";
  const deltaColor =
    spark === "up" ? "text-success" : spark === "down" ? "text-danger" : "text-muted-foreground";
  const line =
    spark === "up"
      ? "M0 17 L12 13 L24 14 L36 8 L48 9 L60 3"
      : spark === "down"
        ? "M0 5 L12 7 L24 6 L36 11 L48 10 L60 16"
        : "M0 10 L12 9 L24 11 L36 9 L48 10 L60 9";
  const stroke =
    tone === "danger" ? "var(--danger)" : tone === "success" ? "var(--success)" : tone === "primary" ? "var(--primary)" : "var(--muted-foreground)";
  return (
    <div className="rounded-xl border border-border p-3">
      <p className="truncate text-[11px] text-muted-foreground">{label}</p>
      <div className="mt-1 flex items-end justify-between gap-2">
        <span className={cn("text-xl font-semibold tabular-nums", valueColor)}>{value}</span>
        <span className={cn("text-[11px] font-medium", deltaColor)}>{delta}</span>
      </div>
      <svg viewBox="0 0 60 18" className="mt-2 h-4 w-full" preserveAspectRatio="none" aria-hidden>
        <path d={line} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
      <span className="size-2 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

function AreaChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 150" className={cn("w-full", className)} preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* faint gridlines */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="0" x2="640" y1={i * 38 + 6} y2={i * 38 + 6} stroke="var(--border)" strokeWidth="1" />
      ))}
      {/* last year (muted) */}
      <path
        d="M0 110 L58 104 L116 108 L174 96 L232 100 L290 88 L348 92 L406 80 L464 84 L522 72 L580 76 L640 66"
        fill="none"
        stroke="var(--muted-foreground)"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* this year */}
      <path d="M0 120 L58 112 L116 116 L174 92 L232 98 L290 70 L348 76 L406 52 L464 58 L522 34 L580 40 L640 18 L640 150 L0 150 Z" fill="url(#area-fill)" />
      <path
        d="M0 120 L58 112 L116 116 L174 92 L232 98 L290 70 L348 76 L406 52 L464 58 L522 34 L580 40 L640 18"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
