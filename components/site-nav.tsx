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
import { nav, platformSurfaces, resourceSurfaces } from "@/lib/site";

const surfaceIcons: Record<string, LucideIcon> = {
  surveys: ClipboardList,
  assets: Building2,
  compliance: ShieldCheck,
  reporting: BarChart3,
  repairs: Wrench,
  movement: ArrowLeftRight,
  delegated: Handshake,
  strategy: TrendingUp,
  shield: ShieldCheck,
};

/* Every dropdown in the header, keyed by the `menu` field on a nav item. Adding
   a menu is a data change here plus one line in `nav` — the rendering below is
   generic, so there is no per-menu branch to keep in sync. */
const MENUS: Record<string, readonly { label: string; href: string; icon: string; description: string }[]> = {
  platform: platformSurfaces,
  resources: resourceSurfaces,
};

export function SiteNav() {
  const [open, setOpen] = useState(false); // mobile drawer
  /* Which mega-menu is open, by name — null when none is. */
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* The homepage opens on a dark, full-bleed hero, so the bar floats over it
     in light tone until the first scroll. Every other route keeps the solid
     sticky bar. */
  const overHero = pathname === "/" && !scrolled && !openMenu && !open;

  return (
    <header
      className={cn(
        "z-50 transition-colors",
        pathname === "/" ? "fixed inset-x-0 top-0" : "sticky top-0",
        scrolled || openMenu
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Logo tone={overHero ? "light" : undefined} />

        <div className="hidden md:flex items-center gap-1">
          {nav.map((item) =>
            "menu" in item && MENUS[item.menu] ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.menu)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenMenu((v) => (v === item.menu ? null : item.menu))}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    overHero
                      ? "text-ink-foreground/80 hover:text-ink-foreground"
                      : pathname.startsWith(item.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-expanded={openMenu === item.menu}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform",
                      openMenu === item.menu && "rotate-180",
                    )}
                  />
                </button>

                {openMenu === item.menu && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-[560px] overflow-hidden rounded-2xl border border-border bg-card shadow-[0_16px_40px_rgba(16,24,40,0.12)]">
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {MENUS[item.menu].map((s) => {
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
                      {"hub" in item && (
                        <Link
                          href={item.href}
                          className="flex items-center justify-between border-t border-border bg-muted/40 px-5 py-3 text-sm font-medium hover:bg-muted"
                        >
                          {item.hub}
                          <ChevronDown className="size-3.5 -rotate-90" />
                        </Link>
                      )}
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
                  overHero
                    ? "text-ink-foreground/80 hover:text-ink-foreground"
                    : pathname === item.href
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
          <Button
            href="/contact"
            variant={overHero ? "secondary" : "primary"}
            size="md"
            className={
              overHero
                ? "!border-white/30 !bg-white/10 !text-ink-foreground backdrop-blur-sm hover:!bg-white/20"
                : undefined
            }
          >
            Book a demo
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "md:hidden grid size-10 place-items-center rounded-lg hover:bg-muted",
            overHero && "text-ink-foreground hover:bg-white/10",
          )}
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
              "menu" in item && MENUS[item.menu] ? (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setMobileMenu((v) => (v === item.menu ? null : item.menu))}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                    aria-expanded={mobileMenu === item.menu}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform",
                        mobileMenu === item.menu && "rotate-180",
                      )}
                    />
                  </button>
                  {mobileMenu === item.menu && (
                    <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                      {MENUS[item.menu].map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          {s.label}
                        </Link>
                      ))}
                      {"hub" in item && (
                        <Link
                          href={item.href}
                          className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                        >
                          {item.hub}
                        </Link>
                      )}
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
