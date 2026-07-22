"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { cn } from "../../lib/utils"

export type ViewSegment = {
  id: string
  label: React.ReactNode
}

/**
 * ViewSegments (DESIGN.md §5.5) — segmented saved-views as a `role="tablist"`.
 * The selected pill gets a primary outline; views beyond `maxVisible` collapse
 * into a `•••` overflow menu.
 */
export function ViewSegments({
  segments,
  value,
  onValueChange,
  maxVisible = 5,
  label = "Saved views",
  className,
}: {
  segments: ViewSegment[]
  value: string
  onValueChange?: (id: string) => void
  /** Number of segments shown before collapsing into the overflow menu. */
  maxVisible?: number
  label?: string
  className?: string
}) {
  const visible = segments.slice(0, maxVisible)
  const overflow = segments.slice(maxVisible)
  const overflowActive = overflow.some((s) => s.id === value)

  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn("flex flex-wrap items-center gap-1", className)}
    >
      {visible.map((seg) => {
        const selected = seg.id === value
        return (
          <button
            key={seg.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onValueChange?.(seg.id)}
            className={cn(
              "inline-flex h-8 items-center rounded-md px-3 text-sm whitespace-nowrap outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
              selected
                ? "border border-primary bg-primary-50 font-medium text-foreground"
                : "border border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {seg.label}
          </button>
        )
      })}

      {overflow.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="More views"
            className={cn(
              "inline-flex size-8 items-center justify-center rounded-md outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:size-4",
              overflowActive
                ? "border border-primary bg-primary-50 text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <MoreHorizontal aria-hidden />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {overflow.map((seg) => (
              <DropdownMenuItem
                key={seg.id}
                onClick={() => onValueChange?.(seg.id)}
              >
                {seg.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}
