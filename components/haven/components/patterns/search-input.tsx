"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { cn } from "../../lib/utils"

/**
 * SearchInput (DESIGN.md §5.11) — `bg-muted` field with a leading search icon
 * that lifts to white + focus ring on focus. `type="search"` /
 * `role="searchbox"`; the visible-less label comes from `aria-label`.
 */
export function SearchInput({
  value,
  onValueChange,
  placeholder = "Search",
  label = "Search",
  className,
  ...props
}: {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  /** Accessible label (no visible label in this pattern). */
  label?: string
  className?: string
} & Omit<
  React.ComponentProps<"input">,
  "value" | "onChange" | "type" | "className"
>) {
  return (
    <div className={cn("relative", className)}>
      <Search
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground/70"
      />
      <input
        type="search"
        role="searchbox"
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValueChange?.(e.target.value)}
        className="h-9 w-full rounded-md border border-transparent bg-muted pr-2.5 pl-8 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:bg-card focus-visible:ring-3 focus-visible:ring-ring/50"
        {...props}
      />
    </div>
  )
}
