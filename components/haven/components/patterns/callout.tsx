"use client"

import * as React from "react"
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Lightbulb,
  X,
  XCircle,
  type LucideIcon,
} from "lucide-react"

import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

type CalloutVariant = "info" | "warning" | "success" | "danger" | "neutral"

const VARIANT_STYLES: Record<
  CalloutVariant,
  { box: string; icon: LucideIcon; iconClass: string }
> = {
  info: {
    box: "bg-info-bg text-info",
    icon: Info,
    iconClass: "text-info",
  },
  warning: {
    box: "bg-warning-bg text-warning",
    icon: AlertTriangle,
    iconClass: "text-warning",
  },
  success: {
    box: "bg-success-bg text-success",
    icon: CheckCircle2,
    iconClass: "text-success",
  },
  danger: {
    box: "bg-danger-bg text-danger",
    icon: XCircle,
    iconClass: "text-danger",
  },
  neutral: {
    box: "bg-muted text-foreground",
    icon: Lightbulb,
    iconClass: "text-muted-foreground",
  },
}

/**
 * Callout / banner (DESIGN.md §5.22) — full-width soft strip with a leading
 * icon, text, an optional right-aligned link action and a dismiss button.
 * Colour is paired with an icon (WCAG 1.4.1).
 */
export function Callout({
  variant = "info",
  icon,
  title,
  children,
  action,
  onDismiss,
  className,
}: {
  variant?: CalloutVariant
  /** Override the default variant icon. */
  icon?: LucideIcon
  title?: React.ReactNode
  children?: React.ReactNode
  /** Right-aligned action node (e.g. a link button). */
  action?: React.ReactNode
  /** When provided, renders a dismiss button. */
  onDismiss?: () => void
  className?: string
}) {
  const style = VARIANT_STYLES[variant]
  const Icon = icon ?? style.icon

  return (
    <div
      className={cn(
        "flex items-start gap-2.5 rounded-lg px-4 py-2.5 text-sm",
        style.box,
        className
      )}
    >
      <Icon aria-hidden className={cn("mt-0.5 size-4 shrink-0", style.iconClass)} />
      <div className="min-w-0 flex-1 text-foreground">
        {title && <p className="font-medium">{title}</p>}
        {children && <div className={cn(title && "mt-0.5")}>{children}</div>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
      {onDismiss && (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Dismiss"
          onClick={onDismiss}
          className="-mr-1.5 -mt-0.5 shrink-0 text-foreground/70 hover:text-foreground"
        >
          <X />
        </Button>
      )}
    </div>
  )
}
