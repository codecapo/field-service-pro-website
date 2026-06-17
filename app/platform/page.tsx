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
import { modules, stages } from "@/lib/site";

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
                A controlled spine from the field to the source of truth
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Each module does one job well — and together they guarantee that
                every survey is captured offline, evidenced, reviewed and reconciled
                before it ever touches the live record.
              </p>
            </div>

            <FeatureComposite
              url="app.fieldservicepro.example/overview"
              screen={<ServicesScreen />}
              browserWidth={740}
            >
              <DashboardPanel />
            </FeatureComposite>
          </div>

          {/* spine strip */}
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
          title="The survey-to-output spine, in seven modules"
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
      <CtaSection
        title="Want the deep dive?"
        description="We'll walk your team through the spine end-to-end on a real batch of your stock."
      />
    </>
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
    sync: { url: "app.fieldservicepro.example/overview", node: <DashboardPanel /> },
    outputs: { url: "app.fieldservicepro.example/reporting", node: <DashboardPanel /> },
    access: { url: "app.fieldservicepro.example/properties/100023001", node: <AssetRegister /> },
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
