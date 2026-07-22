"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

/**
 * Pagination (DESIGN.md §5.8) — "Showing X–Y of N" range left, Prev/Next
 * secondary buttons right with disabled states and `aria-label`s.
 */
export function Pagination({
  page,
  total,
  pageSize,
  onPageChange,
  itemLabel = "items",
  className,
}: {
  /** 1-based current page. */
  page: number
  /** Total number of items across all pages. */
  total: number
  pageSize: number
  onPageChange?: (page: number) => void
  /** Plural noun for the range summary ("items", "surveys", …). */
  itemLabel?: string
  className?: string
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1
  const end = Math.min(page * pageSize, total)
  const canPrev = page > 1
  const canNext = page < totalPages

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-3",
        className
      )}
    >
      <p className="text-sm text-muted-foreground tabular-nums">
        Showing {start}–{end} of {total} {itemLabel}
      </p>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          aria-label="Previous page"
          disabled={!canPrev}
          onClick={() => canPrev && onPageChange?.(page - 1)}
        >
          <ChevronLeft data-icon="inline-start" />
          Previous
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          aria-label="Next page"
          disabled={!canNext}
          onClick={() => canNext && onPageChange?.(page + 1)}
        >
          Next
          <ChevronRight data-icon="inline-end" />
        </Button>
      </div>
    </div>
  )
}
