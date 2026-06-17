import type { LucideIcon } from "lucide-react";
import { Container, cn } from "@/components/ui";

export const showcaseStatus = {
  live: { label: "Available now", cls: "bg-success/12 text-success" },
  delivery: { label: "In delivery", cls: "bg-warning/15 text-warning" },
  roadmap: { label: "On the roadmap", cls: "bg-muted text-muted-foreground" },
} as const;

export type ShowcasePoint = { icon: LucideIcon; title: string; body: string };

/* A text + visual feature band. `reverse` flips sides (and widens the visual
   track on the correct side); `tinted` adds the muted background + borders. */
export function FeatureShowcase({
  eyebrow,
  status,
  title,
  description,
  points,
  visual,
  reverse,
  tinted,
}: {
  eyebrow: string;
  status?: keyof typeof showcaseStatus;
  title: string;
  description: string;
  points: ShowcasePoint[];
  visual: React.ReactNode;
  reverse?: boolean;
  tinted?: boolean;
}) {
  const st = status ? showcaseStatus[status] : null;
  return (
    <section
      className={cn(
        "overflow-hidden py-20 md:py-28",
        tinted && "border-y border-border bg-muted/30",
      )}
    >
      <Container>
        <div
          className={cn(
            "grid items-center gap-10 lg:gap-14",
            reverse ? "lg:grid-cols-[1.35fr_0.65fr]" : "lg:grid-cols-[0.65fr_1.35fr]",
          )}
        >
          {/* text */}
          <div className={cn("flex flex-col gap-5", reverse && "lg:order-2")}>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-primary">{eyebrow}</span>
              {st && (
                <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-medium", st.cls)}>
                  {st.label}
                </span>
              )}
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-balance">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground text-balance">{description}</p>
            <ul className="mt-1 flex flex-col gap-4">
              {points.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold">{p.title}</p>
                    <p className="text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* visual */}
          <div className={cn("relative w-full", reverse && "lg:order-1")}>{visual}</div>
        </div>
      </Container>
    </section>
  );
}
