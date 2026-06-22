import Link from "next/link";
import { cn } from "@/components/ui";

/* Haven AMS — mark: a house sheltered inside a ring (a "safe haven"),
   the ring in brand primary, the home in deep navy. Theme-aware via
   CSS variables. */
export function HavenMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="6 6 36 36"
      className={className}
      fill="none"
      aria-hidden
    >
      {/* the safe-haven ring */}
      <circle cx="24" cy="24" r="16.5" stroke="var(--primary)" strokeWidth="3" />
      {/* the home, sheltered fully inside the ring */}
      <path
        d="M18.5 34 L18.5 22.5 L15 22.5 L24 14 L33 22.5 L29.5 22.5 L29.5 34 Z"
        stroke="var(--foreground)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* window */}
      <g fill="var(--foreground)">
        <rect x="20.6" y="24.8" width="2.8" height="2.8" rx="0.5" />
        <rect x="24.6" y="24.8" width="2.8" height="2.8" rx="0.5" />
        <rect x="20.6" y="28.8" width="2.8" height="2.8" rx="0.5" />
        <rect x="24.6" y="28.8" width="2.8" height="2.8" rx="0.5" />
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
      <HavenMark className="size-8 shrink-0" />
      <span className="text-[15px] font-semibold tracking-tight text-foreground">
        Haven<span className="font-medium text-muted-foreground">AMS</span>
      </span>
    </Link>
  );
}
