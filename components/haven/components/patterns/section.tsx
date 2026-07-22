"use client"

import * as React from "react"

import { cn } from "../../lib/utils"

/**
 * Section (DESIGN.md §5.23) — a titled content block, not always a card.
 * Header (15/600 + optional action slot) then children, with the 32px gap
 * rhythm applied by stacking `<Section>`s inside a `space-y-8` container.
 */
export function Section({
  title,
  description,
  action,
  children,
  className,
  headingLevel: Heading = "h2",
}: {
  title?: React.ReactNode
  description?: React.ReactNode
  /** Right-aligned action slot (e.g. `+` button or `View all` link). */
  action?: React.ReactNode
  children: React.ReactNode
  className?: string
  headingLevel?: "h2" | "h3" | "h4"
}) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      {(title || action) && (
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            {title && (
              <Heading className="text-[15px] leading-5 font-semibold tracking-tight text-foreground">
                {title}
              </Heading>
            )}
            {description && (
              <p className="mt-0.5 text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
          {action && (
            <div className="flex shrink-0 items-center gap-2">{action}</div>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
