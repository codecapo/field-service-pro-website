import { Check } from "lucide-react";
import { Container, SectionHeading, cn } from "@/components/ui";
import { comparison } from "@/lib/site";

function Cell({ value, highlight }: { value: string; highlight?: boolean }) {
  if (highlight) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        <Check className="size-3.5" strokeWidth={3} />
        {value}
      </span>
    );
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export function ComparisonSection() {
  return (
    <section id="compare" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title="A better way to handle field evidence"
          description="How Haven compares for the everyday work of capturing, checking and reporting field information."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
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
                      {col}
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
      </Container>
    </section>
  );
}
