"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/components/ui";

export type CarouselSlide = {
  key: string;
  label: string;
  caption: string;
  visual: React.ReactNode;
};

const INTERVAL = 5000;

/* Auto-advancing showcase of app surfaces. Slides are rendered on the server
   and passed in, so each one can fall back from a real screenshot to a coded
   mockup without this component knowing the difference.

   Auto-advance is suppressed under prefers-reduced-motion and while hovered or
   focused, so it never fights the reader. */
export function AppCarousel({
  slides,
  className,
}: {
  slides: CarouselSlide[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [allowAuto, setAllowAuto] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAllowAuto(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const go = useCallback(
    (n: number) => setIndex((n + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (!allowAuto || paused || slides.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(t);
  }, [allowAuto, paused, slides.length]);

  const active = slides[index];

  return (
    <div
      className={cn("flex flex-col gap-6", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {/* stage — fixed aspect so slides never jolt the layout */}
      <div
        className="relative w-full overflow-hidden rounded-xl"
        style={{ aspectRatio: "760 / 575" }}
        aria-live="polite"
      >
        {slides.map((s, i) => (
          <div
            key={s.key}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-[var(--ease-out)] motion-reduce:transition-none",
              i === index ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-hidden={i !== index}
          >
            <div className="flex h-full w-full items-center justify-center">
              {s.visual}
            </div>
          </div>
        ))}
      </div>

      {/* caption for the active slide */}
      <div className="flex min-h-11 flex-col gap-1">
        <p className="eyebrow-caps text-ink-foreground/50">
          {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          {" · "}
          {active.label}
        </p>
        <p className="text-sm text-ink-foreground/70">{active.caption}</p>
      </div>

      {/* progress rail — one segment per slide, doubles as the control */}
      <div role="tablist" aria-label="App screens" className="flex gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={i === index}
            aria-label={s.label}
            onClick={() => go(i)}
            className="group h-6 flex-1 focus-visible:outline-none"
          >
            <span
              className={cn(
                "block h-0.5 w-full rounded-full transition-colors duration-300",
                i === index
                  ? "bg-ink-foreground"
                  : "bg-white/20 group-hover:bg-white/40 group-focus-visible:bg-white/40",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
