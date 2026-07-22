"use client"

import * as React from "react"

import { cn } from "../../lib/utils"

export type Stat = {
  label: React.ReactNode
  value: React.ReactNode
}

/**
 * StatGroup (DESIGN.md §5.16) — dividerless row of label-over-value stats,
 * typically sat under a detail page title. `flex gap-8`.
 */
export function StatGroup({
  items,
  className,
}: {
  items: Stat[]
  className?: string
}) {
  return (
    <dl className={cn("flex flex-wrap gap-8", className)}>
      {items.map((stat, i) => (
        <div key={i} className="flex flex-col gap-0.5">
          <dt className="text-[13px] leading-4 text-muted-foreground">
            {stat.label}
          </dt>
          <dd className="text-[15px] leading-5 font-medium text-foreground tabular-nums">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
