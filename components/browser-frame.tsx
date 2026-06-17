import { Lock } from "lucide-react";
import { cn } from "@/components/ui";

/* A realistic browser window chrome — traffic lights + address bar — wrapping
   an app screenshot. Provides the outer border, radius and frame shadow, so the
   content inside should be borderless. */
export function BrowserFrame({
  url = "app.fieldservicepro.example",
  children,
  className,
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_60px_-12px_rgba(16,24,40,0.18)]",
        className,
      )}
    >
      {/* chrome — fixed height for a deterministic frame */}
      <div className="flex h-11 items-center gap-3 border-b border-border bg-muted/40 px-3.5">
        <div className="flex shrink-0 gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ED6A5E]" />
          <span className="size-2.5 rounded-full bg-[#F4BF50]" />
          <span className="size-2.5 rounded-full bg-[#61C454]" />
        </div>
        <div className="flex flex-1 justify-center">
          <div className="inline-flex max-w-full items-center gap-1.5 truncate rounded-md border border-border bg-card px-3 py-1 text-[11px] text-muted-foreground">
            <Lock className="size-3 shrink-0" />
            <span className="truncate">{url}</span>
          </div>
        </div>
        <div className="w-10 shrink-0" />
      </div>
      {/* strict 11" tablet aspect (~1.43:1); the panel fills it */}
      <div className="aspect-[1.43] overflow-hidden">
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}

/* Renders a BrowserFrame at a fixed design width and uniformly scales the whole
   thing to fill its container — so the chrome, text and cards all stay in the
   same proportion at any display size (like a real screenshot zoomed). */
const DESIGN_W = 760; // chrome 44 + content 760/1.43 ≈ 575 total
export function ScaledBrowser({
  url,
  children,
  className,
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden [container-type:inline-size]", className)}
      style={{ aspectRatio: "760 / 575" }}
    >
      <div
        className="absolute left-0 top-0 w-[760px] origin-top-left"
        style={{ transform: "scale(calc(100cqw / 760px))" }}
      >
        <BrowserFrame url={url}>{children}</BrowserFrame>
      </div>
    </div>
  );
}
