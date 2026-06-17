import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

const footerNav = [
  {
    heading: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Offline capture", href: "/platform#capture" },
      { label: "Sync & conflict control", href: "/platform#sync" },
      { label: "Reports & exports", href: "/platform#outputs" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Local authorities", href: "/solutions#councils" },
      { label: "Housing associations", href: "/solutions#has" },
      { label: "Supplier surveyors", href: "/solutions#suppliers" },
      { label: "Compliance teams", href: "/solutions#compliance" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "All resources", href: "/resources" },
      { label: "Awaab's Law readiness", href: "/resources/awaabs-law-readiness" },
      { label: "Stock condition playbook", href: "/resources/stock-condition-survey-playbook" },
      { label: "Glossary", href: "/resources/glossary" },
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
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
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
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
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
