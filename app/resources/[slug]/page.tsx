import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { ResourceBlocks, tocItems } from "@/components/resource-content";
import { CtaSection } from "@/components/sections/cta";
import { getResource, resources, resourceCategories } from "@/lib/resources";

const categoryTitle = Object.fromEntries(
  resourceCategories.map((c) => [c.key, c.title]),
) as Record<string, string>;

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) return {};
  return { title: r.title, description: r.summary };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const toc = tocItems(resource.blocks);
  const related = resources.filter((r) => r.slug !== resource.slug).slice(0, 3);

  return (
    <>
      {/* header */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-14 md:py-16">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Resources
          </Link>
          <div className="mt-5 flex max-w-3xl flex-col gap-4">
            <Badge>
              <span className="size-1.5 rounded-full bg-primary" />
              {categoryTitle[resource.category]}
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl text-balance">
              {resource.title}
            </h1>
            <p className="text-lg text-muted-foreground text-balance">{resource.summary}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" /> {resource.readTime}
              </span>
              <span>Updated {resource.updated}</span>
            </div>
          </div>
        </Container>
      </header>

      {/* body */}
      <Container className="py-14 md:py-16">
        <div className={toc.length > 0 ? "gap-12 lg:grid lg:grid-cols-[220px_1fr]" : ""}>
          {/* TOC */}
          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  On this page
                </p>
                <nav className="mt-3 flex flex-col gap-2 border-l border-border">
                  {toc.map((t) => (
                    <a
                      key={t.id}
                      href={`#${t.id}`}
                      className="-ml-px border-l border-transparent pl-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {t.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* content */}
          <article
            className={`min-w-0 ${toc.length > 0 ? "max-w-2xl" : "mx-auto max-w-3xl"}`}
          >
            <ResourceBlocks blocks={resource.blocks} />

            {/* sources & attribution */}
            <div className="mt-14 border-t border-border pt-6">
              {resource.legalNote && (
                <p className="mb-3 text-xs text-muted-foreground">
                  This guide is general information, not legal advice. Regulations and
                  guidance change — verify the detail against current official
                  publications before acting.
                </p>
              )}
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Sources &amp; further reading
              </p>
              <ol className="mt-3 space-y-1.5">
                {resource.sources.map((s, i) => (
                  <li key={i} className="text-xs leading-relaxed text-muted-foreground">
                    <span className="text-muted-foreground/60">{i + 1}.</span>{" "}
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-border underline-offset-2 hover:text-foreground"
                    >
                      {s.label}
                    </a>{" "}
                    — {s.publisher}
                  </li>
                ))}
              </ol>
            </div>

            {/* related */}
            <div className="mt-12">
              <p className="text-sm font-semibold">Related resources</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/resources/${r.slug}`}
                    className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="text-xs text-primary">{categoryTitle[r.category]}</p>
                    <p className="mt-1.5 text-sm font-medium leading-snug">{r.title}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      Read <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </Container>

      <CtaSection
        title="Turn the guidance into evidence"
        description="See how ClearView AMS captures the data behind every obligation — offline, evidence-led, and reconciled end to end."
      />
    </>
  );
}
