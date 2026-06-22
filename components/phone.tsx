import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BatteryMedium,
  Camera,
  Check,
  CloudOff,
  Plus,
  Send,
  ShieldCheck,
  Signal,
  WifiOff,
} from "lucide-react";
import { cn } from "@/components/ui";

/* ─────────────────────────────────────────────────────────────
   Static (non-interactive) iPhone mockup. PhoneFrame supplies the
   bezel, Dynamic Island and status bar; drop any *Screen below it.
   Screens are plain, reusable visuals — use them anywhere.
   ───────────────────────────────────────────────────────────── */

export function PhoneFrame({
  children,
  src,
  badges = false,
  className,
}: {
  children?: React.ReactNode;
  /** When set, the screen shows a live iframe (the real field PWA) instead of children. */
  src?: string;
  badges?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {badges && (
        <>
          <div className="absolute -left-4 top-24 z-30 hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-lg sm:flex">
            <WifiOff className="size-4 text-warning" />
            <div className="text-left">
              <p className="text-xs font-semibold leading-none">Working offline</p>
              <p className="mt-1 text-[11px] leading-none text-muted-foreground">Saved on device</p>
            </div>
          </div>
          <div className="absolute -right-4 bottom-28 z-30 hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-lg sm:flex">
            <ShieldCheck className="size-4 text-success" />
            <div className="text-left">
              <p className="text-xs font-semibold leading-none">No silent overwrite</p>
              <p className="mt-1 text-[11px] leading-none text-muted-foreground">Master version checked</p>
            </div>
          </div>
        </>
      )}

      <div className="relative z-10 mx-auto w-[290px] sm:w-[320px] md:w-[336px]">
        <div className="relative rounded-[3rem] bg-neutral-900 p-[11px] shadow-2xl ring-1 ring-black/10">
          <span className="absolute -left-[2px] top-[120px] h-7 w-[3px] rounded-l-sm bg-neutral-700" />
          <span className="absolute -left-[2px] top-[162px] h-12 w-[3px] rounded-l-sm bg-neutral-700" />
          <span className="absolute -left-[2px] top-[220px] h-12 w-[3px] rounded-l-sm bg-neutral-700" />
          <span className="absolute -right-[2px] top-[188px] h-16 w-[3px] rounded-r-sm bg-neutral-700" />

          <div className="relative flex aspect-[393/852] flex-col overflow-hidden rounded-[2.3rem] bg-background">
            {/* dynamic island */}
            <div className="absolute left-1/2 top-2.5 z-30 h-[26px] w-[86px] -translate-x-1/2 rounded-full bg-black" />
            {/* status bar */}
            <div className="flex shrink-0 items-center justify-between px-6 pb-1 pt-3 text-[11px] font-semibold">
              <span className="tabular-nums">9:41</span>
              <div className="flex items-center gap-1.5">
                <WifiOff className="size-3.5 text-warning" />
                <Signal className="size-3.5" />
                <BatteryMedium className="size-4" />
              </div>
            </div>
            {src ? (
              <iframe
                src={src}
                title="Haven AMS field app — live demo"
                loading="lazy"
                className="w-full flex-1 border-0 bg-background"
              />
            ) : (
              children
            )}
          </div>
        </div>
      </div>

      <div className="absolute -inset-x-8 -bottom-8 top-16 -z-0 rounded-full bg-primary/15 blur-3xl" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   LivePhone — embeds the real field PWA (a no-login DEMO build) live
   inside the phone when NEXT_PUBLIC_DEMO_APP_URL is set; otherwise it
   renders the static screen `fallback`. So prod shows the real app and
   local/CI still builds without a demo instance.
   ───────────────────────────────────────────────────────────── */
export function LivePhone({
  path = "",
  fallback,
  badges = false,
  className,
}: {
  path?: string;
  fallback: React.ReactNode;
  badges?: boolean;
  className?: string;
}) {
  const base = process.env.NEXT_PUBLIC_DEMO_APP_URL;
  if (base) {
    return <PhoneFrame src={`${base}${path}`} badges={badges} className={className} />;
  }
  return (
    <PhoneFrame badges={badges} className={className}>
      {fallback}
    </PhoneFrame>
  );
}

/* ── shared screen chrome ── */
function ScreenShell({
  title,
  step,
  children,
  nav = true,
}: {
  title: string;
  step?: string;
  children: React.ReactNode;
  nav?: boolean;
}) {
  const filled = step ? Number(step.split("/")[0]) : 0;
  const total = step ? Number(step.split("/")[1]) : 0;
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="shrink-0 border-b border-border px-4 pb-3">
        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
          <ArrowLeft className="size-3" /> All surveys
        </span>
        <div className="mt-1 flex items-center justify-between">
          <div className="min-w-0">
            <p className="truncate text-[11px] text-muted-foreground">12 Vicarage Lane</p>
            <h3 className="truncate text-sm font-semibold">{title}</h3>
          </div>
          {step && <span className="shrink-0 text-[11px] text-muted-foreground">{step}</span>}
        </div>
        {step && (
          <div className="mt-2 flex gap-1">
            {Array.from({ length: total }).map((_, i) => (
              <span key={i} className={cn("h-1 flex-1 rounded-full", i < filled ? "bg-primary" : "bg-muted")} />
            ))}
          </div>
        )}
      </div>

      <div className="min-h-0 flex-1 overflow-hidden px-4 py-3.5">{children}</div>

      {nav && (
        <div className="shrink-0 border-t border-border px-4 pb-2 pt-3">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex h-9 items-center gap-1 rounded-lg border border-border px-3 text-xs font-medium text-muted-foreground">
              <ArrowLeft className="size-3.5" /> Back
            </span>
            <span className="inline-flex h-9 items-center gap-1 rounded-lg bg-primary px-3 text-xs font-medium text-primary-foreground">
              Next <ArrowRight className="size-3.5" />
            </span>
          </div>
          <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-foreground/20" />
        </div>
      )}
    </div>
  );
}

/* ── small static field bits ── */
function Row({ label, help, children }: { label: string; help?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="truncate text-[11px] font-medium">{label}</p>
        {help && <p className="truncate text-[10px] text-muted-foreground">{help}</p>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span className={cn("relative block h-5 w-9 rounded-full", on ? "bg-primary" : "bg-muted")}>
      <span
        className={cn(
          "absolute top-0.5 size-4 rounded-full bg-white shadow",
          on ? "translate-x-[18px]" : "translate-x-0.5",
        )}
      />
    </span>
  );
}

const condTone: Record<string, string> = {
  Good: "bg-success/12 text-success border-success/30",
  Fair: "bg-warning/15 text-warning border-warning/30",
  Poor: "bg-danger/12 text-danger border-danger/30",
};
function CondPill({ value }: { value: keyof typeof condTone }) {
  return (
    <span className={cn("rounded-md border px-2 py-1 text-[11px] font-medium", condTone[value])}>{value}</span>
  );
}
function Stat({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-[11px] font-medium tabular-nums">
      {children}
    </span>
  );
}

/* ───────────────────────── Screens ───────────────────────── */

/** Services & safety — the required-vs-observed prompt (CO alarm missing). */
export function ServicesScreen() {
  return (
    <ScreenShell title="Services & safety" step="5/8">
      <div className="rounded-xl border border-border bg-card p-3">
        <div className="space-y-3.5">
          <Row label="Boiler / heating condition">
            <CondPill value="Fair" />
          </Row>
          <Row label="Electrical installation condition">
            <CondPill value="Good" />
          </Row>
          <div className="space-y-1.5">
            <Row label="CO alarm fitted & working" help="Required where combustion appliances are present.">
              <Toggle on={false} />
            </Row>
            <div className="flex flex-wrap items-center gap-2 rounded-md bg-warning/12 px-2 py-1.5 text-[11px] text-warning">
              <span className="flex items-center gap-1.5">
                <AlertTriangle className="size-3.5" /> CO alarm missing or not working
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-warning/40 px-1.5 py-0.5 font-medium">
                <Plus className="size-3" /> Raise issue
              </span>
            </div>
          </div>
          <Row label="Smoke alarm fitted & working">
            <Toggle on={true} />
          </Row>
          <Row label="Fire door self-closer functioning">
            <Toggle on={true} />
          </Row>
        </div>
      </div>
    </ScreenShell>
  );
}

/** Kitchen component capture. */
export function KitchenScreen() {
  return (
    <ScreenShell title="Kitchen" step="3/8">
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="mb-2.5 text-sm font-medium">Kitchen 1</p>
        <div className="space-y-3.5">
          <Row label="Condition">
            <CondPill value="Fair" />
          </Row>
          <Row label="Observed remaining life">
            <Stat>6 yrs</Stat>
          </Row>
          <Row label="Estimated renewal year">
            <Stat>2031</Stat>
          </Row>
          <div className="space-y-1">
            <p className="text-[11px] font-medium">Notes</p>
            <p className="rounded-md border border-border bg-background px-2 py-1.5 text-[11px] text-muted-foreground">
              Worktop edges swelling near sink.
            </p>
          </div>
          <div className="flex items-center gap-2 pt-0.5">
            <span className="grid size-11 place-items-center rounded-lg border border-dashed border-border text-muted-foreground">
              <Camera className="size-4" />
            </span>
            <span className="size-11 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10" />
            <span className="text-[11px] text-muted-foreground">1 photo · queued</span>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

/** HHSRS / issues list. */
export function IssuesScreen() {
  const issues = [
    { id: "ISS-0042", type: "HHSRS", cat: "Category 1", tone: "danger", loc: "Bathroom 2 — north wall", action: "Investigate & treat damp / mould" },
    { id: "ISS-0043", type: "Urgent review", cat: "Cat 1 concern", tone: "danger", loc: "Kitchen 1 — combustion", action: "CO alarm missing — fit immediately" },
    { id: "ISS-0044", type: "Repair", cat: "", tone: "warning", loc: "Kitchen 1 — worktop", action: "Renew worktop run" },
  ];
  return (
    <ScreenShell title="Issues & HHSRS" step="7/8">
      <div className="space-y-2.5">
        {issues.map((iss) => (
          <div
            key={iss.id}
            className={cn(
              "rounded-xl border p-3",
              iss.tone === "danger" ? "border-danger/30 bg-danger/5" : "border-warning/30 bg-warning/5",
            )}
          >
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 text-xs font-semibold",
                  iss.tone === "danger" ? "text-danger" : "text-warning",
                )}
              >
                <span className={cn("grid size-4 place-items-center rounded-full text-[10px]", iss.tone === "danger" ? "bg-danger/15" : "bg-warning/15")}>!</span>
                {iss.type}
                {iss.cat && <span className="font-normal">· {iss.cat}</span>}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">{iss.id}</span>
            </div>
            <p className="mt-1.5 text-[11px] text-muted-foreground">{iss.loc}</p>
            <p className="mt-0.5 text-xs">{iss.action}</p>
          </div>
        ))}
        <span className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-border py-2.5 text-xs font-medium text-muted-foreground">
          <Plus className="size-3.5" /> Add issue
        </span>
      </div>
    </ScreenShell>
  );
}

/** My Surveys list. */
export function SurveyListScreen() {
  const rows = [
    { addr: "12 Vicarage Lane", meta: "E15 4ES · Stratford", status: "In progress", cls: "bg-warning/15 text-warning" },
    { addr: "Flat 4, 8 Romford Road", meta: "E15 4LD · Stratford", status: "Ready offline", cls: "bg-success/12 text-success" },
    { addr: "27 Plashet Grove", meta: "E6 1AD · East Ham", status: "Ready offline", cls: "bg-success/12 text-success" },
  ];
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex shrink-0 items-center justify-between border-b border-border px-4 pb-3">
        <h3 className="text-base font-semibold">My Surveys</h3>
        <span className="inline-flex items-center gap-1 rounded-full bg-warning/15 px-2 py-1 text-[10px] font-medium text-warning">
          <CloudOff className="size-3" /> Offline
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden px-4 py-3.5">
        <p className="mb-3 text-[11px] text-muted-foreground">3 properties · pre-loaded for offline</p>
        <div className="flex flex-col gap-2.5">
          {rows.map((r) => (
            <div key={r.addr} className="rounded-xl border border-border bg-card p-3">
              <p className="truncate text-sm font-semibold">{r.addr}</p>
              <p className="truncate text-[11px] text-muted-foreground">{r.meta}</p>
              <span className={cn("mt-1.5 inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium", r.cls)}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="shrink-0 px-4 pb-2 pt-3">
        <div className="mx-auto h-1 w-28 rounded-full bg-foreground/20" />
      </div>
    </div>
  );
}
