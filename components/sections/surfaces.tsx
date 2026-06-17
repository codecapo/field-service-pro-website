import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  ClipboardList,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Card, Container, SectionHeading, cn } from "@/components/ui";
import { platformSurfaces } from "@/lib/site";

const surfaceIcons: Record<string, LucideIcon> = {
  surveys: ClipboardList,
  assets: Building2,
  compliance: ShieldCheck,
  reporting: BarChart3,
};

export function SurfacesSection({
  tinted,
  eyebrow = "Explore by surface",
  title = "Four surfaces, one platform",
  description = "Every main area of the app has its own home — dive into the one that matters to your team.",
}: {
  tinted?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className={cn("py-20 md:py-28", tinted && "border-y border-border bg-muted/30")}>
      <Container>
        <SectionHeading align="left" eyebrow={eyebrow} title={title} description={description} className="mb-10 max-w-3xl" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platformSurfaces.map((s) => {
            const Icon = surfaceIcons[s.icon];
            return (
              <Link key={s.href} href={s.href} className="group">
                <Card className="flex h-full flex-col gap-3">
                  <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-semibold">{s.label}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary">
                    Explore <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
