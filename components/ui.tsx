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
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
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

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-[transform,opacity,background-color,border-color,box-shadow] duration-150 ease-[var(--ease-out)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:active:scale-100";

const buttonVariants = {
  primary:
    "bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:opacity-95",
  secondary:
    "border border-border bg-card text-foreground hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
};

const buttonSizes = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[15px]",
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
        "rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-[transform,box-shadow,border-color] duration-200 ease-[var(--ease-out)]",
        "hover:[@media(hover:hover)]:-translate-y-0.5 hover:[@media(hover:hover)]:shadow-[0_8px_30px_rgba(16,24,40,0.07)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start",
        className,
      )}
    >
      {/* eyebrow intentionally not rendered — removed the decorative dot/label per brand feedback */}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground text-balance">{description}</p>
      )}
    </div>
  );
}
