"use client"

import * as React from "react"
import type { LucideIcon } from "lucide-react"

import { cn } from "../../lib/utils"

/**
 * EmptyState (DESIGN.md §5.13) — dashed-border box with a centered muted
 * message, optional icon and action. `role="status"` so assistive tech
 * announces it when it replaces loaded content.
 */
export function EmptyState({
  icon: Icon,
  title,
  message,
  action,
  className,
}: {
  icon?: LucideIcon
  title?: React.ReactNode
  message?: React.ReactNode
  /** Optional small action button/link. */
  action?: React.ReactNode
  className?: string
}) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border p-8 text-center",
        className
      )}
    >
      {Icon && (
        <Icon aria-hidden className="size-6 text-muted-foreground/70" />
      )}
      {title && (
        <p className="text-sm font-medium text-foreground">{title}</p>
      )}
      {message && (
        <p className="max-w-sm text-sm text-muted-foreground">{message}</p>
      )}
      {action && <div className="mt-1">{action}</div>}
    </div>
  )
}
