"use client"

import * as React from "react"
import { Tooltip } from "@base-ui/react/tooltip"
import { Info, type LucideIcon } from "lucide-react"

import { cn } from "../../lib/utils"

type TileTone = "neutral" | "primary" | "success" | "warning" | "danger" | "info"

const TONE_STYLES: Record<TileTone, string> = {
  neutral: "bg-muted text-muted-foreground",
  primary: "bg-primary-50 text-primary",
  success: "bg-success-bg text-success",
  warning: "bg-warning-bg text-warning",
  danger: "bg-danger-bg text-danger",
  info: "bg-info-bg text-info",
}

const SIZE_STYLES = {
  sm: "size-8 rounded-md [&_svg]:size-4",
  md: "size-10 rounded-lg [&_svg]:size-5",
  lg: "size-12 rounded-lg [&_svg]:size-6",
}

/**
 * IconTile (DESIGN.md §5.25 / §5.19) — a tinted rounded-square holding a line
 * icon, used for object/module marks and app-tile launchers.
 */
export function IconTile({
  icon: Icon,
  tone = "neutral",
  size = "md",
  className,
  label,
}: {
  icon: LucideIcon
  tone?: TileTone
  size?: keyof typeof SIZE_STYLES
  className?: string
  /** Accessible label when the tile conveys meaning on its own. */
  label?: string
}) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        TONE_STYLES[tone],
        SIZE_STYLES[size],
        className
      )}
    >
      <Icon />
    </span>
  )
}

/**
 * InfoTip (DESIGN.md §5.25) — an info icon with an accessible tooltip.
 * Uses the Base UI tooltip (keyboard + hover/focus triggered, focus ring).
 */
export function InfoTip({
  content,
  label = "More information",
  className,
}: {
  content: React.ReactNode
  /** Accessible name for the trigger button. */
  label?: string
  className?: string
}) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger
          aria-label={label}
          className={cn(
            "inline-flex size-4 items-center justify-center rounded-full text-muted-foreground/70 outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:size-3.5",
            className
          )}
        >
          <Info aria-hidden />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={6} className="z-50">
            <Tooltip.Popup className="max-w-xs origin-(--transform-origin) rounded-md bg-popover px-2.5 py-1.5 text-xs text-popover-foreground shadow-lg ring-1 ring-foreground/10 transition-[transform,opacity] data-open:scale-100 data-open:opacity-100 data-closed:scale-95 data-closed:opacity-0">
              {content}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
