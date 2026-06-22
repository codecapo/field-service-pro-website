import Link from "next/link";
import { Logo } from "@/components/logo";
import { platformSurfaces, site } from "@/lib/site";

const footerNav = [
  {
    heading: "Platform",
    links: [...platformSurfaces.map((s) => ({ label: s.label, href: s.href }))],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Stock condition & asset teams", href: "/solutions#asset" },
      { label: "Field operations & inspections", href: "/solutions#field" },
      { label: "Compliance & assurance", href: "/solutions#compliance" },
      { label: "Contractors & partners", href: "/solutions#partners" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Security", href: "/security" },
      { label: "Book a demo", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4 max-w-xs">
            <Logo />
            <p className="text-sm text-muted-foreground">{site.tagline}</p>
          </div>
          {footerNav.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <p className="text-sm font-semibold">{col.heading}</p>
              {col.links.map((l) => (
                <Link
                  key={l.label + l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name} T/A Epic Software Labs. All rights reserved.</p>
          <p>
            Built offline-first for social housing.{" "}
            <a href={`mailto:${site.email}`} className="hover:text-foreground">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
