import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  BarChart3,
  Boxes,
  Building2,
  FileCheck2,
  GitMerge,
  ShieldCheck,
  WifiOff,
  Camera,
  ClipboardCheck,
  Database,
  Layers,
  Lock,
} from "lucide-react";
import {
  Button,
  Card,
  Container,
  Section,
  SectionHeading,
  cn,
} from "@/components/ui";
import { HeroVisual } from "@/components/hero-visual";
import { FeatureComposite } from "@/components/feature-composite";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { ComplianceBoard, AssetRegister } from "@/components/mockups";
import { ServicesScreen } from "@/components/phone";
import { ComparisonSection } from "@/components/sections/comparison";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { SurfacesSection } from "@/components/sections/surfaces";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { differentiators, personas, stages, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBand />
      <ProblemSection />
      <FlowSection />
      <DifferentiatorsSection />
      <ComparisonSection />
      <FeatureBento />
      <PlatformShowcase />
      <SurfacesSection
        tinted
        eyebrow="The full platform"
        title="Explore every surface of the AMS"
        description="From offline field capture to the live asset register, evidence-led compliance and day-one reporting — every main surface, built on one flow."
      />
      <RolesSection />
      <StatsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent_75%)]" />
      <div className="absolute inset-0 bg-hero-glow" />
      <Container className="relative">
        <div className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <h1
              className="reveal text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl text-balance"
              style={{ animationDelay: "60ms" }}
            >
              Understand your homes. Respond faster.{" "}
              <span className="text-primary">Report with confidence.</span>
            </h1>
            <div
              className="reveal flex max-w-xl flex-col gap-4 text-balance"
              style={{ animationDelay: "120ms" }}
            >
              <p className="text-lg text-muted-foreground">
                Haven helps housing teams capture surveys, inspections and site updates
                on site, keep the evidence in one place, and give teams the clarity they
                need to act.
              </p>
              <p className="text-muted-foreground">
                From stock condition surveys to fire safety checks and monthly
                inspections, Haven keeps the work, evidence and next steps connected.
              </p>
            </div>
            <div className="reveal flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "180ms" }}>
              <Button href="/contact" size="lg">
                Book a demo
                <ArrowRight className="size-4" />
              </Button>
              <Button href="/platform/surveys" variant="secondary" size="lg">
                Explore the platform
              </Button>
            </div>
            <div
              className="reveal flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-muted-foreground"
              style={{ animationDelay: "240ms" }}
            >
              <span className="inline-flex items-center gap-1.5">
                <WifiOff className="size-4 text-primary" /> Works with no signal
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-primary" /> No silent overwrite
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FileCheck2 className="size-4 text-primary" /> PDF + data, reconciled
              </span>
            </div>
          </div>

          <HeroVisual className="reveal [animation-delay:300ms]" />
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────── Credibility band ───────────────────── */
function CredibilityBand() {
  const items = [
    "Stock condition surveys",
    "FRAs & housing inspections",
    "HHSRS & Decent Homes",
    "Evidence-led compliance",
    "Power BI–ready exports",
  ];
  return (
    <div className="border-b border-border bg-muted/40">
      <Container className="py-8">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Built for the realities of social housing asset management
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((i) => (
            <span key={i} className="text-sm font-medium text-foreground/70">
              {i}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}

/* ─────────────────────── Problem ─────────────────────── */
function ProblemSection() {
  return (
    <Section>
      <div className="mx-auto flex max-w-2xl flex-col gap-5 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
          Get to the answer faster.
        </h2>
        <p className="text-lg text-muted-foreground text-balance">
          Housing teams are being asked harder questions about homes, inspections,
          evidence and follow-up actions. Too often, the answer is buried across
          surveys, spreadsheets, photos, emails and disconnected systems.
        </p>
        <p className="text-lg text-muted-foreground text-balance">
          Haven puts the information back in your control — capturing it clearly on
          site, keeping the evidence attached, and helping your team move from
          question to answer without the usual chasing and reconciliation.
        </p>
      </div>
    </Section>
  );
}

/* ─────────────────── The survey-to-AMS flow ─────────────────── */
function FlowSection() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <SectionHeading
          title="How Haven works"
          description="Capture it once. Check it properly. Report with confidence. Every survey, inspection or site update follows the same simple route — from work carried out on site to information your team can use with confidence."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {stages.map((stage, i) => (
            <div key={stage.key} className="relative flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full border border-primary/30 bg-primary/10 font-mono text-sm font-semibold text-primary">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold">{stage.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{stage.blurb}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-base font-medium text-foreground/80">
          One connected flow from site visit to trusted answer.
        </p>
      </Container>
    </section>
  );
}

/* ───────────────── Differentiators (USPs) ───────────────── */
function DifferentiatorsSection() {
  const icons = [WifiOff, ShieldCheck, Camera, ClipboardCheck, AlertTriangle, BarChart3];
  return (
    <Section id="why">
      <SectionHeading
        title="What Haven does differently"
        description="Haven is built around the way housing teams actually work — on site, under pressure, with evidence to capture and answers needed quickly. Every update follows a clear route from fieldwork to review to reporting, so teams can trust what they are looking at and act sooner."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((d, i) => {
          const Icon = icons[i];
          return (
            <Card key={d.title} className="flex flex-col gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="text-base font-semibold leading-snug">{d.title}</h3>
              <p className="text-sm text-muted-foreground">{d.body}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

/* ─────────────── Everything you need, site visit to report ─────────────── */
const bentoCards = [
  {
    icon: ClipboardCheck,
    title: "Capture on site",
    body: "Record surveys, inspections, photos, issues and notes where the work happens — even when signal is poor.",
  },
  {
    icon: Camera,
    title: "Keep evidence attached",
    body: "Photos, comments and updates stay linked to the right property, inspection, question or action.",
  },
  {
    icon: GitMerge,
    title: "Sync safely",
    body: "Bring field updates back into Haven without losing work or quietly overwriting the record.",
  },
  {
    icon: ShieldCheck,
    title: "Review before reporting",
    body: "Check submissions, manage comments and deal with exceptions before information feeds into reports.",
  },
  {
    icon: BarChart3,
    title: "Report with confidence",
    body: "Use reviewed information for dashboards, reports and exports, so teams are not left reconciling different versions.",
  },
  {
    icon: Lock,
    title: "Control access and audit",
    body: "Give users the right access for their role, and keep a clear record of who did what and when.",
  },
];

function FeatureBento() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Everything you need from site visit to report"
          description="Haven gives housing teams a clearer way to manage surveys, inspections and site updates — from the moment work is assigned to the point it is reviewed, reported and ready to act on."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bentoCards.map((c) => (
            <Card key={c.title} className="flex flex-col gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="size-5" />
              </span>
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────── Platform showcase (illustrated AMS) ───────────────── */
function PlatformShowcase() {
  return (
    <>
      <FeatureShowcase
        eyebrow="Field operations"
        status="live"
        title="From the field to a single source of truth"
        description="Surveys captured offline sync, pass QA, and roll up into a live portfolio dashboard — the same accepted data behind every report and export."
        points={[
          { icon: WifiOff, title: "Capture offline", body: "Full survey capture with no signal; drafts and photos survive any restart." },
          { icon: GitMerge, title: "Sync without overwrite", body: "Master-version conflict control blocks and logs — it never clobbers the record." },
          { icon: BarChart3, title: "Live portfolio metrics", body: "Accepted surveys roll up into surveys-accepted, coverage and HHSRS counts." },
        ]}
        visual={
          <FeatureComposite
            url="app.havenams.com/overview"
            screen={<ServicesScreen />}
            browserWidth={740}
          >
            <DashboardPanel />
          </FeatureComposite>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        eyebrow="Evidence-led compliance"
        status="live"
        title="A controlled denominator, never a false-green dashboard"
        description="Programme status is derived from applicability, evidence and validity. Where applicability is unknown, it surfaces as an exception — not a comforting green tick."
        points={[
          { icon: ShieldCheck, title: "Every programme, one view", body: "Gas, EICR, FRA, asbestos, lifts and water — valid, due and missing at a glance." },
          { icon: FileCheck2, title: "Certificate drill-through", body: "From the dashboard to the asset to the evidence in two or three clicks." },
          { icon: Database, title: "Power BI–ready feeds", body: "Stable-key exports load cleanly into your warehouse — no manual interpretation." },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/compliance">
            <ComplianceBoard />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        eyebrow="Live asset register"
        status="live"
        title="Property, block and component as durable records"
        description="Promote the accepted survey snapshot into a live, effective-dated register — drill from portfolio to block to property to the exact component and its lifecycle."
        points={[
          { icon: Building2, title: "The full hierarchy", body: "Portfolio → block → property → component, each a first-class record." },
          { icon: Boxes, title: "Lifecycle on every component", body: "Condition, remaining life and renewal year feed planned investment." },
          { icon: Layers, title: "Snapshot vs live record", body: "History stays intact; the live master updates only after QA acceptance." },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/properties/100023001">
            <AssetRegister />
          </ScaledBrowser>
        }
      />
    </>
  );
}

/* ─────────────────────── Roles ─────────────────────── */
function RolesSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Who it's for"
        title="One platform, every part of the operating model"
        description="From the surveyor in a dead-signal stairwell to the compliance lead who has to certify the whole portfolio."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {personas.map((p) => (
          <Card key={p.key} className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <div className="flex flex-col gap-3 text-sm">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground/80">Today: </span>
                {p.pain}
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-primary">With us: </span>
                {p.gain}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button href="/solutions" variant="secondary">
          See solutions by team <ArrowRight className="size-4" />
        </Button>
      </div>
    </Section>
  );
}

/* ─────────────────────── Stats ─────────────────────── */
function StatsSection() {
  return (
    <section className="border-y border-border bg-primary/[0.03] py-16">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 text-center">
              <span className="text-4xl font-semibold tracking-tight text-primary md:text-5xl">
                {s.value}
              </span>
              <span className="text-sm text-muted-foreground text-balance">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
