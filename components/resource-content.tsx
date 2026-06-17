import { Check, Info, Lightbulb, ListChecks, Square, TriangleAlert } from "lucide-react";
import { cn } from "@/components/ui";
import type { Block } from "@/lib/resources-types";

export function tocItems(blocks: Block[]) {
  return blocks
    .filter((b): b is Extract<Block, { type: "heading" }> => b.type === "heading")
    .map((b) => ({ id: b.id, text: b.text }));
}

const calloutTone = {
  info: { wrap: "border-primary/30 bg-primary/5", icon: "text-primary", Icon: Info },
  warning: { wrap: "border-warning/30 bg-warning/5", icon: "text-warning", Icon: TriangleAlert },
  success: { wrap: "border-success/30 bg-success/5", icon: "text-success", Icon: Check },
} as const;

export function ResourceBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          id={block.id}
          className="scroll-mt-24 mt-12 text-2xl font-semibold tracking-tight first:mt-0"
        >
          {block.text}
        </h2>
      );

    case "paragraph":
      return <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{block.text}</p>;

    case "bullets":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="mt-5 space-y-4">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-4">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 font-mono text-xs font-semibold text-primary">
                {i + 1}
              </span>
              <div>
                <p className="text-[15px] font-semibold">{it.title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "callout": {
      const t = calloutTone[block.tone ?? "info"];
      return (
        <div className={cn("mt-6 flex gap-3 rounded-xl border p-4", t.wrap)}>
          <t.Icon className={cn("mt-0.5 size-5 shrink-0", t.icon)} />
          <div>
            {block.title && <p className="text-sm font-semibold">{block.title}</p>}
            <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">{block.body}</p>
          </div>
        </div>
      );
    }

    case "keytakeaways":
      return (
        <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-5">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <Lightbulb className="size-4 text-primary" /> Key takeaways
          </p>
          <ul className="mt-3 space-y-2">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-2.5 text-[14px] text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "table":
      return (
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  {block.columns.map((c) => (
                    <th key={c} className="p-3 font-semibold">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border last:border-0">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={cn("p-3 align-top text-muted-foreground", ci === 0 && "font-medium text-foreground")}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <p className="border-t border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
              {block.caption}
            </p>
          )}
        </div>
      );

    case "faq":
      return (
        <dl className="mt-6 divide-y divide-border rounded-xl border border-border">
          {block.items.map((it, i) => (
            <div key={i} className="p-4">
              <dt className="text-[15px] font-semibold">{it.q}</dt>
              <dd className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{it.a}</dd>
            </div>
          ))}
        </dl>
      );

    case "checklist":
      return (
        <div className="mt-6 space-y-5">
          {block.groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-border bg-card p-5">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <ListChecks className="size-4 text-primary" /> {g.title}
              </p>
              <ul className="mt-3 space-y-2.5">
                {g.items.map((it, i) => (
                  <li key={i} className="flex gap-2.5 text-[14px] text-muted-foreground">
                    <Square className="mt-0.5 size-4 shrink-0 text-muted-foreground/50" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "glossary":
      return (
        <dl className="mt-6 divide-y divide-border rounded-xl border border-border">
          {block.items.map((it) => (
            <div key={it.term} className="grid gap-1 p-4 sm:grid-cols-[200px_1fr] sm:gap-4">
              <dt className="text-[15px] font-semibold">{it.term}</dt>
              <dd className="text-[14px] leading-relaxed text-muted-foreground">{it.definition}</dd>
            </div>
          ))}
        </dl>
      );
  }
}
