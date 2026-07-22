"use client"

import * as React from "react"
import {
  AlertTriangle,
  CheckCircle2,
  Dot,
  Info,
  XCircle,
  type LucideIcon,
} from "lucide-react"

import { Badge } from "../ui/badge"
import { cn } from "../../lib/utils"

type Tone = "success" | "danger" | "warning" | "info" | "neutral"

type BadgeVariant = React.ComponentProps<typeof Badge>["variant"]

export type StatusDescriptor = {
  /** Badge semantic variant (maps to the CVD-safe palette). */
  variant: BadgeVariant
  icon: LucideIcon
  /** Display label; falls back to the status key when omitted. */
  label?: React.ReactNode
}

const TONE_DEFAULT: Record<Tone, StatusDescriptor> = {
  success: { variant: "success", icon: CheckCircle2, label: "ok" },
  danger: { variant: "danger", icon: XCircle },
  warning: { variant: "warning", icon: AlertTriangle },
  info: { variant: "info", icon: Info },
  neutral: { variant: "secondary", icon: Dot },
}

/**
 * StatusBadge (DESIGN.md §5.6 / §8) — maps a status string to a
 * `{ variant, icon, label }` descriptor and renders a Badge with a Lucide
 * icon AND text. Never colour alone (WCAG 1.4.1).
 *
 * Provide a custom `map` to extend/override the defaults (keyed by status).
 */
export function StatusBadge({
  status,
  map,
  label,
  className,
}: {
  status: string
  /** Override map: status key → descriptor. Falls back to the tone defaults. */
  map?: Record<string, StatusDescriptor>
  /** Explicit label override (wins over map/default/status). */
  label?: React.ReactNode
  className?: string
}) {
  const key = status?.toLowerCase?.() ?? ""
  const descriptor =
    map?.[status] ??
    map?.[key] ??
    TONE_DEFAULT[key as Tone] ??
    TONE_DEFAULT.neutral

  const Icon = descriptor.icon
  const text = label ?? descriptor.label ?? status

  return (
    <Badge variant={descriptor.variant} className={cn("capitalize", className)}>
      <Icon aria-hidden />
      {text}
    </Badge>
  )
}

export { TONE_DEFAULT as statusToneDefaults }
