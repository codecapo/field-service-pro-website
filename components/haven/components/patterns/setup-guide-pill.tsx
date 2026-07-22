"use client"

import * as React from "react"

import { cn } from "../../lib/utils"

/**
 * ProgressRing — a small SVG ring showing `value`/`max` completion in the
 * primary colour. Decorative; the surrounding control carries the label.
 */
function ProgressRing({
  value,
  max = 100,
  size = 16,
  strokeWidth = 2.5,
}: {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
}) {
  const pct = Math.max(0, Math.min(1, max === 0 ? 0 : value / max))
  const r = (size - strokeWidth) / 2
  const c = 2 * Math.PI * r
  const half = size / 2

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <circle
        cx={half}
        cy={half}
        r={r}
        fill="none"
        strokeWidth={strokeWidth}
        className="stroke-border"
      />
      <circle
        cx={half}
        cy={half}
        r={r}
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="stroke-primary"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct)}
        transform={`rotate(-90 ${half} ${half})`}
      />
    </svg>
  )
}

/**
 * SetupGuidePill (DESIGN.md §5.20) — a topbar pill with a circular progress
 * ring (% complete) and a label. Renders as a real `<button>`.
 */
export function SetupGuidePill({
  completed,
  total,
  label = "Setup guide",
  onClick,
  className,
}: {
  completed: number
  total: number
  label?: string
  onClick?: () => void
  className?: string
}) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100)
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${label}, ${pct}% complete`}
      className={cn(
        "inline-flex h-8 items-center gap-2 rounded-md border border-border bg-card px-3 text-sm font-medium text-foreground shadow-xs outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      <span>{label}</span>
      <span className="flex items-center gap-1 text-muted-foreground tabular-nums">
        <ProgressRing value={completed} max={total} />
        {pct}%
      </span>
    </button>
  )
}

export { ProgressRing }
