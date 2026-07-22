import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("container-page", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  id,
  /** "default" keeps the original rhythm (sub-pages); "spacious" is the
   *  airier homepage rhythm. Kept as a prop rather than a className override
   *  so the two py-* utilities can't collide unpredictably. */
  space = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  space?: "default" | "spacious";
}) {
  return (
    <section
      id={id}
      className={cn(
        space === "spacious" ? "py-28 md:py-40" : "py-20 md:py-28",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
} & ComponentProps<typeof Link>;

/* Pill buttons, small tracked label text — the premium convention. */
const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.01em] transition-[transform,opacity,background-color,border-color,box-shadow] duration-150 ease-[var(--ease-out)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:active:scale-100";

const buttonVariants = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "border border-border bg-card text-foreground hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
};

const buttonSizes = {
  md: "h-10 px-5 text-[13px]",
  lg: "h-12 px-7 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Card({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-2xl border border-border bg-card p-7 transition-[border-color] duration-200 ease-[var(--ease-out)]",
        "hover:[@media(hover:hover)]:border-primary/30",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  /** Tracked caps, no dot, no colour fill — the premium treatment, not the
   *  decorative coloured dot the brand feedback rejected. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <span className="eyebrow-caps text-muted-foreground">{eyebrow}</span>
      )}
      <h2 className="type-h2 text-balance">{title}</h2>
      {description && (
        <p className="type-body text-muted-foreground text-balance">{description}</p>
      )}
    </div>
  );
}
