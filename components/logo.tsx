import Link from "next/link";
import { cn } from "@/components/ui";

/* Haven AMS — mark: a house sheltered inside a ring (a "safe haven"),
   the ring in brand primary, the home in deep navy. Theme-aware via
   CSS variables. */
export function HavenMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="6 4 36 37"
      className={className}
      fill="none"
      aria-hidden
    >
      {/* the safe-haven ring — an open arc, broken at the base */}
      <path
        d="M14.8 35.1 A 16 16 0 1 1 33.2 35.1"
        stroke="var(--primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* the home, breaking through the open base of the ring */}
      <path
        d="M18.5 39 L18.5 21.5 L15 21.5 L24 13 L33 21.5 L29.5 21.5 L29.5 39 Z"
        stroke="var(--foreground)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* window */}
      <g fill="var(--foreground)">
        <rect x="20.6" y="26.2" width="2.8" height="2.8" rx="0.5" />
        <rect x="24.6" y="26.2" width="2.8" height="2.8" rx="0.5" />
        <rect x="20.6" y="30.2" width="2.8" height="2.8" rx="0.5" />
        <rect x="24.6" y="30.2" width="2.8" height="2.8" rx="0.5" />
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2", className)}
      aria-label="Haven AMS — home"
    >
      <HavenMark className="size-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-semibold tracking-tight text-foreground">
          Haven
        </span>
        <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
          Asset Management System
        </span>
      </span>
    </Link>
  );
}
