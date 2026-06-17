import { Check, Minus, X } from "lucide-react";
import { Container, SectionHeading, cn } from "@/components/ui";
import { comparison } from "@/lib/site";

function Cell({ value, highlight }: { value: boolean | "partial"; highlight?: boolean }) {
  if (value === true) {
    return (
      <span
        className={cn(
          "inline-grid size-6 place-items-center rounded-full",
          highlight ? "bg-primary text-primary-foreground" : "bg-success/15 text-success",
        )}
      >
        <Check className="size-3.5" strokeWidth={3} />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-grid size-6 place-items-center rounded-full bg-warning/15 text-warning">
        <Minus className="size-3.5" strokeWidth={3} />
      </span>
    );
  }
  return (
    <span className="inline-grid size-6 place-items-center rounded-full bg-muted text-muted-foreground/60">
      <X className="size-3.5" strokeWidth={3} />
    </span>
  );
}

export function ComparisonSection() {
  return (
    <section id="compare" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How we compare"
          title="What legacy asset management platforms don't do"
          description="The capabilities that decide whether field data is trustworthy — and where most platforms quietly fall short."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-sm font-medium text-muted-foreground">
                    Capability
                  </th>
                  {comparison.columns.map((col, i) => (
                    <th
                      key={col}
                      className={cn(
                        "p-4 text-center text-sm font-semibold",
                        i === 0 ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {i === 0 ? (
                        <span className="inline-flex flex-col items-center gap-1">
                          {col}
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                            Us
                          </span>
                        </span>
                      ) : (
                        col
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, ri) => (
                  <tr
                    key={row.capability}
                    className={cn(
                      "border-b border-border last:border-0",
                      ri % 2 === 1 && "bg-muted/30",
                    )}
                  >
                    <td className="p-4 text-sm font-medium">{row.capability}</td>
                    {row.values.map((v, vi) => (
                      <td
                        key={vi}
                        className={cn(
                          "p-4 text-center",
                          vi === 0 && "bg-primary/[0.04]",
                        )}
                      >
                        <div className="flex justify-center">
                          <Cell value={v} highlight={vi === 0} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-grid size-4 place-items-center rounded-full bg-success/15 text-success">
              <Check className="size-2.5" strokeWidth={3} />
            </span>
            Full support
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-grid size-4 place-items-center rounded-full bg-warning/15 text-warning">
              <Minus className="size-2.5" strokeWidth={3} />
            </span>
            Partial / add-on
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-grid size-4 place-items-center rounded-full bg-muted text-muted-foreground/60">
              <X className="size-2.5" strokeWidth={3} />
            </span>
            Not supported
          </span>
        </div>
      </Container>
    </section>
  );
}
