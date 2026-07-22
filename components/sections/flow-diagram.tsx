import {
  BarChart3,
  CheckCircle2,
  ClipboardList,
  CloudUpload,
  WifiOff,
} from "lucide-react";
import { Container, cn } from "@/components/ui";
import { stages } from "@/lib/site";

const stageIcons = [ClipboardList, WifiOff, CloudUpload, CheckCircle2, BarChart3];

/* The survey-to-report flow, drawn as a connected diagram rather than a flat
   numbered grid. Hand-coded so it inherits the theme tokens, stays crisp at any
   size, and animates via the existing `.reveal` utility (which is already
   disabled under prefers-reduced-motion in globals.css). */
export function FlowDiagram() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-balance">
            How Haven Beacon works
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Capture it once. Check it properly. Report with confidence. Every survey,
            inspection or site update follows the same simple route — from work carried
            out on site to information your team can use with confidence.
          </p>
        </div>

        <div className="relative mt-16">
          {/* connector rail — runs between the first and last node centres */}
          <div
            aria-hidden
            className="absolute left-[10%] right-[10%] top-8 hidden h-0.5 rounded-full lg:block"
            style={{
              background:
                "linear-gradient(to right, color-mix(in oklch, var(--primary) 22%, transparent), var(--primary) 22%, var(--primary) 78%, color-mix(in oklch, var(--primary) 22%, transparent))",
            }}
          />

          <ol className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage, i) => {
              const Icon = stageIcons[i];
              const isCapture = stage.key === "capture";
              return (
                <li
                  key={stage.key}
                  className="reveal relative flex flex-col items-center gap-4 text-center"
                  style={{ animationDelay: `${80 + i * 90}ms` }}
                >
                  {/* node */}
                  <div className="relative">
                    <span
                      className={cn(
                        "relative z-10 grid size-16 place-items-center rounded-2xl border bg-card",
                        "shadow-[0_8px_24px_-8px_rgba(16,24,40,0.18)]",
                        isCapture
                          ? "border-primary/40 text-primary"
                          : "border-border text-primary",
                      )}
                    >
                      <Icon className="size-6" />
                    </span>
                    {/* step number */}
                    <span className="absolute -right-1.5 -top-1.5 z-20 grid size-6 place-items-center rounded-full bg-primary font-mono text-[11px] font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    {isCapture && (
                      <span
                        aria-hidden
                        className="absolute inset-0 -z-0 rounded-2xl blur-lg"
                        style={{
                          background:
                            "color-mix(in oklch, var(--primary) 30%, transparent)",
                        }}
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold">{stage.title}</h3>
                    {isCapture && (
                      <span className="mx-auto inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                        <WifiOff className="size-3" />
                        Works with no signal
                      </span>
                    )}
                    <p className="text-sm text-muted-foreground text-balance">
                      {stage.blurb}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="mt-14 text-center text-base font-medium text-foreground/80">
          One connected flow from site visit to trusted answer.
        </p>
      </Container>
    </section>
  );
}
