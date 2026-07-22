import { candidates, signalSystem } from "@/components/logo-lab";

/* Internal comparison page for brand marks. Not linked and not indexed.
   Each candidate is shown at the three sizes that matter — 36px is what the
   header actually uses, 20px is the favicon floor, 96px is for judging the
   drawing — and on both the light page surface and the dark ink surface the
   hero uses, because a mark that only works on one is not finished. */

export const metadata = { robots: { index: false, follow: false } };

export default function LogoLab() {
  return (
    <main className="min-h-screen bg-background px-10 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Brand mark candidates</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        36px is the size the header renders. If a mark fails there, it fails.
      </p>

      {/* the chosen direction, shown first and on its own */}
      <section className="mt-10 rounded-2xl border-2 border-primary/40 bg-card p-8">
        <p className="text-sm font-semibold">Signal — the chosen direction</p>
        <p className="mt-1 max-w-2xl text-xs text-muted-foreground">
          The beacon reduced to what it does: broadcast. The mast was scaffolding — it held
          the light up but said nothing.
        </p>
        <div className="mt-7 grid gap-8 md:grid-cols-3">
          {signalSystem.map(({ id, label, note, Mark }) => (
            <div key={id} className="flex flex-col gap-4">
              <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-xs text-muted-foreground">{note}</p>
              </div>
              <div className="flex items-end gap-6">
                <Mark className="size-20 shrink-0" />
                <Mark className="size-9 shrink-0" />
                <Mark className="size-5 shrink-0" />
              </div>
              <div
                className="flex items-end gap-6 rounded-xl bg-ink p-5"
                style={{ ["--foreground" as string]: "var(--ink-foreground)" }}
              >
                <Mark className="size-14 shrink-0" />
                <Mark className="size-9 shrink-0" />
                <Mark className="size-5 shrink-0" />
              </div>
              <div className="flex items-center gap-2">
                <Mark className="size-9 shrink-0" />
                <span className="flex flex-col leading-none">
                  <span className="text-[17px] font-medium tracking-tight">Haven Beacon</span>
                  <span className="mt-1 text-[8px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
                    Stock condition &amp; compliance
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-14 text-sm font-semibold">Earlier explorations</p>
      <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {candidates.map(({ id, label, note, Mark }) => (
          <div key={id} className="flex flex-col gap-5 bg-card p-7">
            <div>
              <p className="text-sm font-semibold">{label}</p>
              <p className="text-xs text-muted-foreground">{note}</p>
            </div>

            <div className="flex items-end gap-8">
              <Mark className="size-24 shrink-0" />
              <Mark className="size-9 shrink-0" />
              <Mark className="size-5 shrink-0" />
            </div>

            {/* the same mark on the hero's ink surface */}
            <div
              className="flex items-end gap-8 rounded-xl bg-ink p-5"
              style={{ ["--foreground" as string]: "var(--ink-foreground)" }}
            >
              <Mark className="size-16 shrink-0" />
              <Mark className="size-9 shrink-0" />
              <Mark className="size-5 shrink-0" />
            </div>

            {/* lock-up, as it appears beside the wordmark */}
            <div className="flex items-center gap-2">
              <Mark className="size-9 shrink-0" />
              <span className="flex flex-col leading-none">
                <span className="text-[17px] font-medium tracking-tight">Haven Beacon</span>
                <span className="mt-1 text-[8px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
                  Stock condition &amp; compliance
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
