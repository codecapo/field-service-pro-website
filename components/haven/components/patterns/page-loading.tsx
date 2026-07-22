import { Loader2, type LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

// Single loading idiom for full-page/section data fetches. Centres in a fixed
// height so the layout doesn't jump when content arrives, and exposes a
// `role="status"` + sr-only label so screen readers announce the wait (the
// ad-hoc spinners it replaces were silent to AT). Pass a domain icon to keep
// the brand's gentle pulse; the default Loader2 spins.
export function PageLoading({
  icon: Icon = Loader2,
  label = "Loading…",
  className,
}: {
  icon?: LucideIcon
  label?: string
  className?: string
}) {
  const spin = Icon === Loader2
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn("flex h-64 items-center justify-center", className)}
    >
      <Icon
        aria-hidden
        className={cn("size-6 text-muted-foreground", spin ? "animate-spin" : "animate-pulse")}
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}
