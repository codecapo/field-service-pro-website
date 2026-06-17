import { cn } from "@/components/ui";
import { PhoneFrame } from "@/components/phone";
import { BrowserFrame } from "@/components/browser-frame";

/* A to-scale desktop browser with a static phone overlapping in front.
   - The browser is in-flow so it defines the height; the phone is absolutely
     bottom-anchored so its bottom is flush with the browser's bottom.
   - `reverse` mirrors the layout (phone on the right, browser bleeds left) for
     alternating feature bands. On mobile it stacks as a plain browser. */
export function FeatureComposite({
  url,
  screen,
  children,
  reverse = false,
  browserWidth = 740,
  className,
}: {
  url: string;
  screen: React.ReactNode;
  children: React.ReactNode;
  reverse?: boolean;
  browserWidth?: number;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* mobile: plain full-width browser, no overlay */}
      <div className="sm:hidden">
        <BrowserFrame url={url}>{children}</BrowserFrame>
      </div>

      {/* sm+ : browser defines height; phone bottom-flush, overlapping the inner edge */}
      <div className="relative hidden sm:block">
        <div
          className={cn(reverse ? "ml-auto -mr-[14%]" : "-mr-[14%] ml-[14%]")}
          style={{ width: browserWidth, maxWidth: "none" }}
        >
          <BrowserFrame url={url}>{children}</BrowserFrame>
        </div>
        <div
          className={cn(
            "absolute bottom-0 z-10 scale-[0.56]",
            reverse ? "right-0 origin-bottom-right" : "left-0 origin-bottom-left",
          )}
        >
          <PhoneFrame badges>{screen}</PhoneFrame>
        </div>
      </div>
    </div>
  );
}
