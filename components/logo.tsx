import Link from "next/link";
import { cn } from "@/components/ui";

/* Haven AMS — mark: a magnifying glass over a building (a "clear view"
   of the property / asset). */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Haven AMS — home"
    >
      <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {/* lens */}
          <circle cx="10" cy="10" r="7" />
          {/* handle */}
          <path d="M15 15 L19.7 19.7" />
          {/* building inside the lens */}
          <path d="M6.8 13 V9.8 L10 7.1 L13.2 9.8 V13" />
          {/* door */}
          <path d="M9 13 V11.1 H11 V13" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-foreground">
        Haven<span className="font-medium text-muted-foreground">AMS</span>
      </span>
    </Link>
  );
}
