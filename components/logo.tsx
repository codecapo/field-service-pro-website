import Link from "next/link";
import { cn } from "@/components/ui";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 font-semibold tracking-tight", className)}
    >
      <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <svg viewBox="0 0 24 24" className="size-4.5" fill="none" aria-hidden>
          {/* layered asset / building mark */}
          <path
            d="M12 3 4 7l8 4 8-4-8-4Z"
            fill="currentColor"
            fillOpacity="0.9"
          />
          <path
            d="M4 12l8 4 8-4M4 17l8 4 8-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
        </svg>
      </span>
      <span className="text-[15px]">Field Service Pro</span>
    </Link>
  );
}
