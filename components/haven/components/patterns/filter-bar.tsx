"use client"

import * as React from "react"
import { Plus } from "lucide-react"

import { cn } from "../../lib/utils"

/**
 * FilterChip (DESIGN.md §5.10) — a dashed pill with a leading `+` that becomes
 * a solid pill when active (showing the chosen value). A real `<button>`, so
 * it's keyboard-operable with the standard focus ring.
 */
export function FilterChip({
  label,
  value,
  active,
  onClick,
  className,
  ...props
}: {
  label: React.ReactNode
  /** When active, the selected value shown after the label. */
  value?: React.ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
} & Omit<React.ComponentProps<"button">, "value" | "onClick">) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex h-8 items-center gap-1 rounded-full px-2.5 text-sm whitespace-nowrap outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
        active
          ? "border border-border bg-card text-foreground shadow-xs"
          : "border border-dashed border-border text-muted-foreground hover:bg-muted hover:text-foreground",
        className
      )}
      {...props}
    >
      {!active && <Plus aria-hidden className="size-3.5" />}
      <span>{label}</span>
      {active && value != null && (
        <span className="font-medium text-foreground">{value}</span>
      )}
    </button>
  )
}

/**
 * FilterBar (DESIGN.md §5.10) — filter chips on the left, actions on the right.
 */
export function FilterBar({
  children,
  actions,
  className,
}: {
  /** Filter chips. */
  children: React.ReactNode
  /** Right-aligned actions (e.g. Export, Edit columns). */
  actions?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-2",
        className
      )}
    >
      <div className="flex flex-wrap items-center gap-2">{children}</div>
      {actions && (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      )}
    </div>
  )
}
