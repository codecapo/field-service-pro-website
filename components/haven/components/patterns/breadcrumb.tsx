"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "../../lib/utils"

export type BreadcrumbItem = {
  label: string
  href?: string
}

/**
 * Breadcrumb (DESIGN.md §5.2) — parent links in `link` colour with `/`
 * separators above a page title. The final item is the current page and
 * gets `aria-current="page"` (rendered as plain text even if it has an href).
 */
export function Breadcrumb({
  items,
  className,
}: {
  items: BreadcrumbItem[]
  className?: string
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="font-medium text-link hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(
                    isLast ? "text-muted-foreground" : "font-medium text-link"
                  )}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden className="text-muted-foreground/60">
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
