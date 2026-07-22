import Link from "next/link";
import { cn } from "@/components/ui";

/* Haven Beacon — Signal.

   The beacon reduced to what it does: broadcast. The mast was scaffolding — it
   held the light up but said nothing, and it was the first thing to silt up at
   small sizes. What is left is the source and the arcs leaving it.

   Two variants carry the product split. Hub keeps both arc pairs, radiating
   each way: the place everything reports to. Field is one arc over a pin: a
   single surveyor, somewhere specific. Five shapes and three respectively,
   which is why both still read at 20px.

   Theme-aware via CSS variables — the source takes --foreground so the Logo
   component can rebind it for dark surfaces without a second copy of the SVG. */
export function HavenMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <g stroke="var(--primary)" strokeWidth="3.4" strokeLinecap="round">
        <path d="M13.4 12.6 A 15 15 0 0 0 13.4 33.4" />
        <path d="M34.6 12.6 A 15 15 0 0 1 34.6 33.4" />
        <path d="M18.4 18.2 A 8.4 8.4 0 0 0 18.4 27.8" />
        <path d="M29.6 18.2 A 8.4 8.4 0 0 1 29.6 27.8" />
      </g>
      <circle cx="24" cy="23" r="4.4" fill="var(--primary)" />
    </svg>
  );
}

/* Field — one arc pair over a pin. The single surveyor, somewhere specific,
   against Hub's two pairs receiving from every direction. */
export function HavenFieldMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <g stroke="var(--primary)" strokeWidth="3.4" strokeLinecap="round">
        <path d="M15.6 13.8 A 13 13 0 0 0 15.6 32.2" />
        <path d="M32.4 13.8 A 13 13 0 0 1 32.4 32.2" />
      </g>
      <path
        d="M24 15.5 c-4.2 0-7.6 3.3-7.6 7.4 0 5.3 6.3 10.4 7.3 11.2 a0.5 0.5 0 0 0 0.6 0 c1-0.8 7.3-5.9 7.3-11.2 0-4.1-3.4-7.4-7.6-7.4Z"
        fill="var(--foreground)"
      />
      <circle cx="24" cy="22.6" r="3" fill="var(--primary)" />
    </svg>
  );
}

export function Logo({
  className,
  tone,
}: {
  className?: string;
  /** "light" for use on dark surfaces. The mark reads --foreground, so we
   *  simply rebind that variable locally rather than duplicating the SVG. */
  tone?: "light";
}) {
  const light = tone === "light";
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2", className)}
      aria-label="Haven Beacon — home"
      style={
        light
          ? ({
              "--foreground": "var(--ink-foreground)",
              "--primary": "var(--primary-on-ink)",
            } as React.CSSProperties)
          : undefined
      }
    >
      <HavenMark className="size-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[17px] font-medium tracking-tight",
            light ? "text-ink-foreground" : "text-foreground",
          )}
        >
          Haven Beacon
        </span>
        <span
          className={cn(
            "mt-1 text-[8px] font-medium uppercase tracking-[0.1em]",
            light ? "text-ink-foreground/60" : "text-muted-foreground",
          )}
        >
          Stock condition &amp; compliance
        </span>
      </span>
    </Link>
  );
}
