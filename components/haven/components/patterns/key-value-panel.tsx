"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

export type KeyValueRow = {
  label: React.ReactNode
  value?: React.ReactNode
  /** When set, a hover/focus-reveal copy button copies this text to the clipboard. */
  copy?: string
}

/**
 * KeyValuePanel (DESIGN.md §5.14) — Details/Metadata rows of `label` over
 * `value`. Empty/blank values render an em dash in tertiary colour. Rows with a
 * `copy` value show a copy button on hover/focus.
 */
export function KeyValuePanel({
  rows,
  className,
}: {
  rows: KeyValueRow[]
  className?: string
}) {
  return (
    <dl className={cn("flex flex-col gap-3", className)}>
      {rows.map((row, i) => {
        const empty =
          row.value === undefined || row.value === null || row.value === ""
        return (
          <div key={i} className="group flex flex-col gap-0.5">
            <dt className="text-[13px] leading-4 text-muted-foreground">
              {row.label}
            </dt>
            <dd
              className={cn(
                "flex items-center gap-1 text-sm",
                empty ? "text-muted-foreground/60" : "text-foreground"
              )}
            >
              <span className="min-w-0">{empty ? "—" : row.value}</span>
              {row.copy && !empty ? (
                <CopyButton
                  value={row.copy}
                  className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                />
              ) : null}
            </dd>
          </div>
        )
      })}
    </dl>
  )
}

/**
 * CopyButton — a ghost icon button that copies `value` to the clipboard and
 * flips to a transient "copied" check. Shared by CopyId and KeyValuePanel rows.
 */
export function CopyButton({
  value,
  label = "Copy",
  className,
}: {
  value: string
  label?: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  React.useEffect(() => () => clearTimeout(timer.current), [])

  const onCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard unavailable (e.g. insecure context) — fail silently.
    }
  }, [value])

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-xs"
      aria-label={copied ? "Copied" : label}
      onClick={onCopy}
      className={cn("text-muted-foreground hover:text-foreground", className)}
    >
      {copied ? (
        <Check aria-hidden className="text-success" />
      ) : (
        <Copy aria-hidden />
      )}
    </Button>
  )
}

/**
 * CopyId (DESIGN.md §5.14) — a mono chip showing an id with a copy button.
 * Copies to the clipboard and flips to a transient "copied" check state.
 */
export function CopyId({
  value,
  display,
  className,
}: {
  value: string
  /** Optional shortened display text (defaults to the full value). */
  display?: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md bg-muted py-0.5 pr-0.5 pl-1.5",
        className
      )}
    >
      <code className="font-mono text-xs text-foreground">
        {display ?? value}
      </code>
      <CopyButton value={value} />
    </span>
  )
}
