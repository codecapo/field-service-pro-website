import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Badge, Container, Section, SectionHeading } from "@/components/ui";
import { ComparisonSection } from "@/components/sections/comparison";
import { MockupMatrix } from "@/components/sections/mockup-matrix";
import { SurfacesSection } from "@/components/sections/surfaces";
import { CtaSection } from "@/components/sections/cta";
import { FeatureComposite } from "@/components/feature-composite";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { ComplianceBoard, AssetRegister } from "@/components/mockups";
import {
  PhoneFrame,
  ServicesScreen,
  KitchenScreen,
  IssuesScreen,
  SurveyListScreen,
} from "@/components/phone";
import { capabilityMap, capabilityStatus, modules, stages, type CapStatus } from "@/lib/site";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The complete offline-first capture-to-output toolchain: survey capture, evidence, conflict-controlled sync, HHSRS issues, QA gate, reports and access control.",
};

export default function PlatformPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <Badge>
                <span className="size-1.5 rounded-full bg-primary" />
                The platform
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                A controlled flow from the field to the source of truth
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Each module does one job well — and together they guarantee that
                every survey is captured offline, evidenced, reviewed and reconciled
                before it ever touches the live record.
              </p>
            </div>

            <FeatureComposite
              url="app.havenams.com/overview"
              screen={<ServicesScreen />}
              browserWidth={740}
            >
              <DashboardPanel />
            </FeatureComposite>
          </div>

          {/* flow strip */}
          <div className="mt-16 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {stages.map((s, i) => (
              <div
                key={s.key}
                className="rounded-xl border border-border bg-card px-4 py-3"
              >
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-sm font-semibold">{s.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </header>

      <SurfacesSection />

      <Section className="!pb-10">
        <SectionHeading
          align="left"
          eyebrow="Available today"
          title="The survey-to-output flow, in seven modules"
          description="Live and demoable now — each module does one job well, and together they guarantee every survey is captured offline, evidenced, reviewed and reconciled before it touches the live record."
          className="mb-14 max-w-3xl"
        />
        <div className="flex flex-col gap-16">
          {modules.map((m, i) => (
            <div
              key={m.key}
              id={m.key}
              className="grid scroll-mt-24 gap-8 md:grid-cols-2 md:items-center"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <span className="font-mono text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  {m.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{m.summary}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {m.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <ModuleMockup kind={m.key} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <MockupMatrix />
      <ComparisonSection />
      <CapabilityMapSection />
      <CtaSection
        title="Want the deep dive?"
        description="We'll walk your team through the flow end-to-end on a real batch of your stock."
      />
    </>
  );
}

/* ── Capability map: the full inventory, with honest status tags ── */
const statusPill: Record<CapStatus, string> = {
  live: "bg-success/12 text-success",
  delivery: "bg-warning/15 text-warning",
  roadmap: "bg-muted text-muted-foreground border border-border",
};

function CapabilityMapSection() {
  return (
    <Section className="border-t border-border bg-muted/30">
      <SectionHeading
        eyebrow="Honest by default"
        title="Every capability, with its real status"
        description="We tell you what's live, what's in delivery and what's on the roadmap — the same clarity we put behind every number we report. No false-green here either."
      />
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
        {(Object.keys(capabilityStatus) as CapStatus[]).map((s) => (
          <span key={s} className="inline-flex items-center gap-1.5">
            <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${statusPill[s]}`}>
              {capabilityStatus[s].label}
            </span>
          </span>
        ))}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilityMap.map((group) => (
          <div
            key={group.group}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold">{group.group}</h3>
              <p className="text-sm text-muted-foreground">{group.intro}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li key={item.title} className="flex items-start justify-between gap-3 text-sm">
                  <span className="text-foreground/80">{item.title}</span>
                  <span
                    className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusPill[item.status]}`}
                  >
                    {capabilityStatus[item.status].label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* Per-module visual: a phone for field-facing modules, a to-scale tablet
   browser (bleeding off the outer edge with a fade) for back-office modules. */
function ModuleMockup({ kind }: { kind: string }) {
  const phone: Record<string, React.ReactNode> = {
    capture: <ServicesScreen />,
    evidence: <KitchenScreen />,
    issues: <IssuesScreen />,
    qa: <SurveyListScreen />,
  };
  const browser: Record<string, { url: string; node: React.ReactNode }> = {
    sync: { url: "app.havenams.com/overview", node: <DashboardPanel /> },
    outputs: { url: "app.havenams.com/reporting", node: <DashboardPanel /> },
    access: { url: "app.havenams.com/properties/100023001", node: <AssetRegister /> },
  };

  if (phone[kind]) {
    return (
      <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/[0.07] to-card">
        <div className="scale-[0.58]">
          <PhoneFrame>{phone[kind]}</PhoneFrame>
        </div>
      </div>
    );
  }

  const b = browser[kind] ?? browser.sync;
  return <ScaledBrowser url={b.url}>{b.node}</ScaledBrowser>;
}
