import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";

export function CtaSection({
  title = "Bring your field data in from the cold.",
  description = "See the offline survey-to-output spine running on a real batch of your stock. No app store, no signal required.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-16 text-center md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.6) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground text-balance">
              {title}
            </h2>
            <p className="text-lg text-primary-foreground/80 text-balance">
              {description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              {/* white button — explicit indigo text so it's always legible */}
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-[15px] font-medium text-primary shadow-sm transition-[transform,opacity] duration-150 ease-[var(--ease-out)] hover:opacity-90 active:scale-[0.97]"
              >
                Book a demo
                <ArrowRight className="size-4" />
              </Link>
              {/* outline button — white text on the indigo band */}
              <Link
                href="/platform"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-transparent px-6 text-[15px] font-medium text-white transition-[transform,background-color] duration-150 ease-[var(--ease-out)] hover:bg-white/10 active:scale-[0.97]"
              >
                Explore the platform
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
