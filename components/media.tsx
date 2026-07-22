import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { cn } from "@/components/ui";
import { BrowserFrame } from "@/components/browser-frame";

/* Media primitives. Server components — `hasAsset` reads the filesystem at
   build time so a slot can fall back to a coded mockup until the real asset
   lands in public/. Drop the file in and the page picks it up on next build;
   no code change needed. */

export function hasAsset(src: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

/* A framed photograph with a soft brand scrim at the base — used for the hero
   and any inline editorial image. */
export function PhotoPanel({
  src,
  alt,
  width,
  height,
  priority,
  className,
  scrim = true,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  scrim?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted ring-1 ring-border",
        "shadow-[0_24px_60px_-16px_rgba(16,24,40,0.22)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 46vw, 92vw"
        className="h-full w-full object-cover"
      />
      {scrim && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklch, var(--primary) 26%, transparent) 0%, transparent 42%)",
          }}
        />
      )}
    </div>
  );
}

/* Full-bleed photographic band with a heavy brand overlay so white text stays
   legible. Children render above the overlay. */
export function PhotoBand({
  src,
  alt,
  children,
  className,
  overlay = 0.82,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
  /* 0–1: strength of the ink wash over the photo */
  overlay?: number;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden", className)}>
      {/* Darkened at source so the wash can stay light — a heavy coloured
          overlay on a bright photo goes muddy rather than moody. */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="-z-20 object-cover brightness-[0.55]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          /* Ink, not brand colour — a saturated wash over photography is the
             single loudest "templated" signal. */
          background: `linear-gradient(100deg, color-mix(in srgb, var(--ink) ${Math.round(
            overlay * 100,
          )}%, transparent) 0%, color-mix(in srgb, var(--ink) ${Math.round(
            overlay * 74,
          )}%, transparent) 58%, color-mix(in srgb, var(--ink) ${Math.round(
            overlay * 42,
          )}%, transparent) 100%)`,
        }}
      />
      {/* The gradient above thins to ~42% ink on the right, which is fine while
          the copy occupies the left third. On a phone the copy runs full width
          and its right edge lands on the brightest part of the photograph, so
          narrow screens get an additional flat wash to hold contrast. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 md:hidden"
        style={{
          background: `color-mix(in srgb, var(--ink) ${Math.round(overlay * 45)}%, transparent)`,
        }}
      />
      {children}
    </section>
  );
}

/* A product screenshot inside browser chrome. Renders the real screenshot when
   present in public/, otherwise the coded mockup passed as `fallback`. */
export function ScreenshotSlot({
  src,
  alt,
  url,
  fallback,
  className,
}: {
  src: string;
  alt: string;
  url?: string;
  fallback: React.ReactNode;
  className?: string;
}) {
  if (!hasAsset(src)) {
    return <>{fallback}</>;
  }
  return (
    <BrowserFrame url={url} className={className}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1119}
        sizes="(min-width: 1024px) 62vw, 92vw"
        className="h-full w-full object-cover object-top"
      />
    </BrowserFrame>
  );
}
