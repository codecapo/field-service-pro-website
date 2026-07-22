"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import { Card } from "../ui/card"
import { cn } from "../../lib/utils"
import { InfoTip } from "./icon-tile"

/**
 * Sparkline — a tiny inline SVG trend line drawn in `stroke-primary`.
 * Decorative by default (`aria-hidden`); pass a `label` to expose a summary.
 */
export function Sparkline({
  points,
  width = 120,
  height = 32,
  label,
  className,
}: {
  points: number[]
  width?: number
  height?: number
  label?: string
  className?: string
}) {
  if (points.length < 2) return null

  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  const stepX = width / (points.length - 1)
  // Inset 1px so the 1.5px stroke doesn't clip at the top/bottom edges.
  const pad = 1.5
  const usableH = height - pad * 2

  const d = points
    .map((p, i) => {
      const x = i * stepX
      const y = pad + usableH - ((p - min) / range) * usableH
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(" ")

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="none"
      preserveAspectRatio="none"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("overflow-visible", className)}
    >
      <path
        d={d}
        className="stroke-primary"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/**
 * MetricCard (DESIGN.md §5.12) — title + InfoTip, big value, delta, optional
 * sparkline, and a footer with an "Updated …" note + "More details" link.
 * Empty data → centered "No data" chip.
 */
export function MetricCard({
  title,
  info,
  value,
  delta,
  points,
  updatedLabel,
  detailsHref,
  empty,
  className,
}: {
  title: React.ReactNode
  /** Optional InfoTip content beside the title. */
  info?: React.ReactNode
  value?: React.ReactNode
  /** Change vs previous period. `direction` drives icon + colour + text. */
  delta?: { label: React.ReactNode; direction?: "up" | "down" | "neutral" }
  /** Sparkline data; omit/short → no sparkline. */
  points?: number[]
  /** Footer note, e.g. "Updated 21s ago". */
  updatedLabel?: React.ReactNode
  /** When set, renders a "More details" link in the footer. */
  detailsHref?: string
  /** Force the empty "No data" state. */
  empty?: boolean
  className?: string
}) {
  const isEmpty = empty || value === undefined || value === null
  const dir = delta?.direction ?? "neutral"

  return (
    <Card className={cn("gap-0 p-5", className)}>
      <div className="flex items-center gap-1.5">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        {info && <InfoTip content={info} label={`About ${title}`} />}
      </div>

      {isEmpty ? (
        <div className="mt-3 flex items-center justify-center rounded-md border border-dashed border-border py-8">
          <span className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground">
            No data
          </span>
        </div>
      ) : (
        <>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-foreground tabular-nums">
              {value}
            </span>
            {delta && (
              <span
                className={cn(
                  "inline-flex items-center gap-0.5 text-xs font-medium",
                  dir === "up" && "text-success",
                  dir === "down" && "text-danger",
                  dir === "neutral" && "text-muted-foreground"
                )}
              >
                {dir === "up" && (
                  <ArrowUpRight aria-hidden className="size-3.5" />
                )}
                {dir === "down" && (
                  <ArrowDownRight aria-hidden className="size-3.5" />
                )}
                {delta.label}
              </span>
            )}
          </div>

          {points && points.length >= 2 && (
            <div className="mt-3">
              <Sparkline points={points} className="w-full" />
            </div>
          )}
        </>
      )}

      {(updatedLabel || detailsHref) && (
        <div className="mt-4 flex items-center justify-between gap-2 text-xs">
          {updatedLabel ? (
            <span className="text-muted-foreground/70">{updatedLabel}</span>
          ) : (
            <span />
          )}
          {detailsHref && (
            <Link
              href={detailsHref}
              className="font-medium text-link hover:underline"
            >
              More details
            </Link>
          )}
        </div>
      )}
    </Card>
  )
}
