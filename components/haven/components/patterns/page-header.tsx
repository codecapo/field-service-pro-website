"use client"

import * as React from "react"

import { cn } from "../../lib/utils"
import { Breadcrumb, type BreadcrumbItem } from "./breadcrumb"

/**
 * PageHeader (DESIGN.md §5.3) — both the list and object variants.
 *
 * - List: `title` (28/700) left, `actions` slot right.
 * - Object: pass `breadcrumb` items, an optional `icon` (icon-tile slot) and a
 *   `status` badge that render inline beside the title.
 */
export function PageHeader({
  title,
  subtitle,
  breadcrumb,
  icon,
  status,
  actions,
  children,
  className,
}: {
  title: React.ReactNode
  subtitle?: React.ReactNode
  breadcrumb?: BreadcrumbItem[]
  /** Object variant: leading icon-tile (e.g. `<IconTile … />`). */
  icon?: React.ReactNode
  /** Object variant: status badge node (e.g. `<StatusBadge … />`). */
  status?: React.ReactNode
  /** Right-aligned actions slot (buttons). */
  actions?: React.ReactNode
  /** Optional content under the header row (e.g. a StatGroup). */
  children?: React.ReactNode
  className?: string
}) {
  return (
    <header className={cn("flex flex-col gap-4", className)}>
      {breadcrumb && breadcrumb.length > 0 && <Breadcrumb items={breadcrumb} />}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          {icon && <div className="shrink-0">{icon}</div>}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-[28px] leading-[34px] font-bold tracking-tight text-foreground">
                {title}
              </h1>
              {status}
            </div>
            {subtitle && (
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        {actions && (
          <div className="flex shrink-0 items-center gap-2">{actions}</div>
        )}
      </div>
      {children}
    </header>
  )
}
