import { cn } from "@/components/ui";
import { LivePhone, ServicesScreen } from "@/components/phone";

/* Untitled-UI style hero visual: a single phone with the app screen inside,
   floating over a soft radial halo. Static — no competing dashboard panel. */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex justify-center lg:justify-end", className)}>
      {/* soft halo behind the phone */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[560px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--primary) 18%, transparent) 0%, transparent 62%)",
        }}
      />
      <LivePhone badges path="/surveys" fallback={<ServicesScreen />} />
    </div>
  );
}
