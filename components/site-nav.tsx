"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeftRight,
  BarChart3,
  Building2,
  ChevronDown,
  ClipboardList,
  Handshake,
  Menu,
  ShieldCheck,
  TrendingUp,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Button, cn } from "@/components/ui";
import { nav, platformSurfaces } from "@/lib/site";

const surfaceIcons: Record<string, LucideIcon> = {
  surveys: ClipboardList,
  assets: Building2,
  compliance: ShieldCheck,
  reporting: BarChart3,
  repairs: Wrench,
  movement: ArrowLeftRight,
  delegated: Handshake,
  strategy: TrendingUp,
};

export function SiteNav() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [platformOpen, setPlatformOpen] = useState(false); // desktop mega-menu
  const [mobilePlatform, setMobilePlatform] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setPlatformOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors",
        scrolled || platformOpen
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {nav.map((item) =>
            item.label === "Platform" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setPlatformOpen(true)}
                onMouseLeave={() => setPlatformOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setPlatformOpen((v) => !v)}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname.startsWith("/platform")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-expanded={platformOpen}
                >
                  Platform
                  <ChevronDown className={cn("size-3.5 transition-transform", platformOpen && "rotate-180")} />
                </button>

                {platformOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-[560px] overflow-hidden rounded-2xl border border-border bg-card shadow-[0_16px_40px_rgba(16,24,40,0.12)]">
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {platformSurfaces.map((s) => {
                          const Icon = surfaceIcons[s.icon];
                          return (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                            >
                              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                                <Icon className="size-4.5" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold">{s.label}</span>
                                <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                  {s.description}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <Link
                        href="/platform"
                        className="flex items-center justify-between border-t border-border bg-muted/40 px-5 py-3 text-sm font-medium hover:bg-muted"
                      >
                        Platform overview
                        <span className="text-primary">See the whole spine →</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button href="/contact" variant="primary" size="md">
            Book a demo
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden grid size-10 place-items-center rounded-lg hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) =>
              item.label === "Platform" ? (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setMobilePlatform((v) => !v)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                    aria-expanded={mobilePlatform}
                  >
                    Platform
                    <ChevronDown className={cn("size-4 transition-transform", mobilePlatform && "rotate-180")} />
                  </button>
                  {mobilePlatform && (
                    <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                      <Link href="/platform" className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                        Overview
                      </Link>
                      {platformSurfaces.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-2 flex flex-col gap-2">
              <Button href="/contact" variant="primary" size="md">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
