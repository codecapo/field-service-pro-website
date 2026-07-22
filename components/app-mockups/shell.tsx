import {
  AlertTriangle,
  Bell,
  Building2,
  ChevronDown,
  CircleQuestionMark,
  ClipboardList,
  Cloud,
  Download,
  DoorOpen,
  LayoutGrid,
  ListChecks,
  LogOut,
  PanelLeftClose,
  Rocket,
  Search,
  Settings,
  SlidersHorizontal,
  SquareCheckBig,
  TrendingUp,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/components/ui";

/* A static stand-in for the product's AppShell.

   The real one (apps/office/components/app-shell.tsx) is wired to session,
   routing and role-based nav filtering, none of which can follow the components
   into a marketing site. The chrome itself is just a list, so it is reproduced
   here — but the nav content below is copied verbatim from the product's
   lib/nav.ts (labels, grouping and order), so a screen shown here has the same
   information architecture a visitor would meet in the app. */

type Item = { label: string; icon: LucideIcon };

const NAV: { heading: string; items: Item[] }[] = [
  {
    heading: "Surveying",
    items: [
      { label: "My Surveys", icon: ClipboardList },
      { label: "Survey Builder", icon: SlidersHorizontal },
      { label: "QA Review", icon: SquareCheckBig },
      { label: "Manage", icon: Users },
      { label: "Board", icon: LayoutGrid },
    ],
  },
  {
    heading: "Assets & Issues",
    items: [
      { label: "Portfolio Management", icon: Building2 },
      { label: "Onboarding", icon: Rocket },
      { label: "HHSRS & Issues", icon: AlertTriangle },
    ],
  },
  {
    heading: "Reporting",
    items: [
      { label: "Dashboard", icon: TrendingUp },
      { label: "Reports", icon: ClipboardList },
      { label: "No Access", icon: DoorOpen },
      { label: "Approval", icon: ListChecks },
      { label: "Outputs", icon: Download },
    ],
  },
  { heading: "Settings", items: [{ label: "Admin", icon: Settings }] },
];

export function AppShellMockup({
  active,
  children,
}: {
  /* Label of the nav item to render as current. */
  active: string;
  children: React.ReactNode;
}) {
  return (
    /* `haven-app` scopes the product design tokens to this subtree — see
       app/haven-app.css. Without it the vendored components inherit the
       marketing site's warm palette and stop looking like the product. */
    <div className="haven-app flex h-full w-full bg-background text-foreground">
      <aside className="flex w-[228px] shrink-0 flex-col border-r border-border bg-sidebar">
        <div className="flex items-center gap-2.5 px-5 py-4">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ClipboardList className="size-4" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Haven <span className="text-primary">Hub</span>
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-5 overflow-hidden px-3 pt-2">
          {NAV.map((group) => (
            <div key={group.heading} className="flex flex-col gap-0.5">
              <p className="px-2 pb-1 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                {group.heading}
              </p>
              {group.items.map((item) => {
                const current = item.label === active;
                return (
                  <span
                    key={item.label}
                    className={cn(
                      "flex items-center gap-2.5 rounded-md px-2 py-[7px] text-[13px]",
                      current
                        ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                        : "text-sidebar-foreground",
                    )}
                  >
                    <item.icon className="size-4 shrink-0" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="mt-auto border-t border-border">
          <span className="flex items-center gap-2.5 px-5 py-3 text-[13px] text-sidebar-foreground">
            <PanelLeftClose className="size-4" />
            Collapse
          </span>
          <div className="flex items-center gap-2.5 border-t border-border px-5 py-3">
            <span className="flex size-7 items-center justify-center rounded-full bg-muted text-[11px] font-semibold text-muted-foreground">
              JO
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-medium">Jade Okafor</span>
              <span className="block truncate text-[11px] text-muted-foreground">
                Survey Manager
              </span>
            </span>
            <LogOut className="size-4 text-muted-foreground" />
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[52px] shrink-0 items-center gap-4 border-b border-border px-6">
          <div className="mx-auto flex h-8 w-[420px] items-center gap-2 rounded-md border border-border px-3">
            <Search className="size-3.5 text-muted-foreground" />
            <span className="text-[13px] text-muted-foreground">
              Search surveys, UPRN, address, issue…
            </span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Wifi className="size-4 text-success" />
            <span className="flex items-center gap-1.5 rounded-md border border-border px-2 py-1 text-[12px]">
              <Cloud className="size-3.5" />
              Synced
            </span>
            <Bell className="size-4" />
            <CircleQuestionMark className="size-4" />
            <span className="flex size-7 items-center justify-center rounded-full bg-muted text-[11px] font-semibold">
              JO
            </span>
            <ChevronDown className="size-3.5" />
          </div>
        </header>

        <main className="min-w-0 flex-1 overflow-hidden px-8 py-6">{children}</main>
      </div>
    </div>
  );
}
