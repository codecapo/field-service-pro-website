import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, FileText, ListChecks, Library } from "lucide-react";
import { Badge, Card, Container, Section, SectionHeading } from "@/components/ui";
import { CtaSection } from "@/components/sections/cta";
import { resourceCategories, resources, resourcesByCategory } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, templates and a plain-English glossary for social-housing asset management — Awaab's Law, Decent Homes, HHSRS, stock condition surveys and more.",
};

const kindIcon = {
  article: BookOpen,
  reference: FileText,
  checklist: ListChecks,
  glossary: Library,
} as const;

const kindLabel = {
  article: "Guide",
  reference: "Reference",
  checklist: "Checklist",
  glossary: "Glossary",
} as const;

export default function ResourcesHub() {
  const featured = resources[0];

  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="flex max-w-2xl flex-col gap-5">
            <Badge>
              <span className="size-1.5 rounded-full bg-primary" />
              Resources
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              Knowledge for housing teams who carry the evidence burden
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Plain-English guides on the obligations shaping social housing, practical
              field playbooks, and tools you can put to work today.
            </p>
          </div>
        </Container>
      </header>

      {/* featured */}
      <Section className="!pb-0">
        <Link
          href={`/resources/${featured.slug}`}
          className="group grid gap-6 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/[0.06] to-card p-6 transition-colors hover:border-primary/40 md:grid-cols-[1.4fr_1fr] md:p-8"
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium text-primary">Featured guide</span>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{featured.title}</h2>
            <p className="text-muted-foreground">{featured.summary}</p>
            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Read the guide
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-border bg-card/60 p-8">
            <BookOpen className="size-16 text-primary/30" />
          </div>
        </Link>
      </Section>

      {/* categories */}
      {resourceCategories.map((cat) => {
        const items = resourcesByCategory(cat.key);
        if (items.length === 0) return null;
        return (
          <Section key={cat.key} className="!pb-0 last:!pb-20 md:last:!pb-28">
            <SectionHeading align="left" title={cat.title} description={cat.blurb} className="max-w-2xl" />
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items.map((r) => {
                const Icon = kindIcon[r.kind];
                return (
                  <Link key={r.slug} href={`/resources/${r.slug}`} className="group">
                    <Card className="flex h-full flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="size-4.5" />
                        </span>
                        <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                          {kindLabel[r.kind]}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold leading-snug">{r.title}</h3>
                      <p className="text-sm text-muted-foreground">{r.summary}</p>
                      <div className="mt-auto flex items-center justify-between pt-2 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3.5" /> {r.readTime}
                        </span>
                        <span className="inline-flex items-center gap-1 font-medium text-primary">
                          Read <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </Section>
        );
      })}

      <CtaSection />
    </>
  );
}
