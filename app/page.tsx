import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  CloudOff,
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
  Badge,
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
      <SpineSection />
      <DifferentiatorsSection />
      <ComparisonSection />
      <FeatureBento />
      <PlatformShowcase />
      <SurfacesSection
        tinted
        eyebrow="The full platform"
        title="Explore every surface of the AMS"
        description="From offline field capture to the live asset register, evidence-led compliance and day-one reporting — every main surface, built on one spine."
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
            <div className="reveal">
              <Badge>
                <span className="size-1.5 rounded-full bg-primary" />
                Offline-first asset management
              </Badge>
            </div>
            <h1
              className="reveal text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl text-balance"
              style={{ animationDelay: "60ms" }}
            >
              The field is where housing data{" "}
              <span className="text-primary">breaks down.</span> We fixed that.
            </h1>
            <p
              className="reveal max-w-xl text-lg text-muted-foreground text-balance"
              style={{ animationDelay: "120ms" }}
            >
              Field Service Pro captures stock condition surveys fully offline,
              never overwrites the master record, and turns every survey into
              evidence-led data your whole organisation can trust.
            </p>
            <div className="reveal flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "180ms" }}>
              <Button href="/contact" size="lg">
                Book a demo
                <ArrowRight className="size-4" />
              </Button>
              <Button href="/platform" variant="secondary" size="lg">
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
    "HHSRS & Decent Homes",
    "Evidence-led compliance",
    "Poor-network field teams",
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
  const problems = [
    {
      icon: CloudOff,
      title: "Apps that die without signal",
      body: "Surveyors work in basements and stairwells. Online-only tools lose data exactly where the work happens.",
    },
    {
      icon: GitMerge,
      title: "Silent overwrites",
      body: "Field updates and back-office edits clobber each other. Nobody can trust which version of the truth survived.",
    },
    {
      icon: Database,
      title: "PDFs that don't match the data",
      body: "A report for the auditor and a spreadsheet for the analyst — generated separately, reconciled never.",
    },
    {
      icon: ShieldCheck,
      title: "Dashboards that go false-green",
      body: "Missing data counts as compliant. The denominator is wrong, so the safety picture is wrong.",
    },
  ];
  return (
    <Section>
      <SectionHeading
        eyebrow="The problem"
        title="Most asset management starts where the data is already broken"
        description="By the time a survey reaches the back office, it has passed through the weakest link in the chain — the field."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p) => (
          <Card key={p.title} className="flex flex-col gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-danger/10 text-danger">
              <p.icon className="size-5" />
            </span>
            <h3 className="text-base font-semibold">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────── The survey-to-AMS spine ─────────────────── */
function SpineSection() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="One controlled spine, field to source of truth"
          description="Every survey follows the same evidence-led path — and nothing reaches the live record until it has earned its place there."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
      </Container>
    </section>
  );
}

/* ───────────────── Differentiators (USPs) ───────────────── */
function DifferentiatorsSection() {
  return (
    <Section id="why">
      <SectionHeading
        eyebrow="Why we're different"
        title="The guarantees you won't find elsewhere"
        description="Six design decisions that make field data trustworthy by default — and the shortcuts most platforms take instead."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {differentiators.map((d, i) => (
          <Card key={d.title} className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 font-mono text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold leading-snug">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.body}</p>
              </div>
            </div>
            <div className="mt-auto flex items-start gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2.5">
              <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Others
              </span>
              <span className="text-xs text-muted-foreground">{d.others}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────── Feature bento ─────────────────────── */
function FeatureBento() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="The platform"
          title="Everything the survey-to-AMS spine needs"
          description="A complete capture-to-output toolchain, with the asset register and compliance layers built on the same foundation."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {/* large: offline capture */}
          <Card className="md:col-span-4 flex flex-col justify-between gap-6 overflow-hidden">
            <div className="flex flex-col gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <ClipboardCheck className="size-5" />
              </span>
              <h3 className="text-xl font-semibold">Offline survey capture</h3>
              <p className="max-w-md text-sm text-muted-foreground">
                A template-driven engine that runs fully offline — conditional
                routing, count-driven components, required-vs-observed prompts and
                submit-time validation, all on-device.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Conditional routing", "Count-driven components", "On-device drafts", "Validation gate"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </Card>

          {/* photos */}
          <Card className="md:col-span-2 flex flex-col gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <Camera className="size-5" />
            </span>
            <h3 className="text-lg font-semibold">Evidence & photos</h3>
            <p className="text-sm text-muted-foreground">
              Photos bound to the exact question, component or issue — with user,
              device and timestamps that travel everywhere.
            </p>
          </Card>

          {/* sync */}
          <Card className="md:col-span-2 flex flex-col gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <GitMerge className="size-5" />
            </span>
            <h3 className="text-lg font-semibold">Conflict-controlled sync</h3>
            <p className="text-sm text-muted-foreground">
              A retry queue that drains on reconnect and blocks any push that would
              overwrite a changed master.
            </p>
          </Card>

          {/* qa */}
          <Card className="md:col-span-2 flex flex-col gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </span>
            <h3 className="text-lg font-semibold">QA & maker-checker</h3>
            <p className="text-sm text-muted-foreground">
              Accept or reject with comments. Nothing updates the live record until
              it passes the gate — fully audited.
            </p>
          </Card>

          {/* outputs */}
          <Card className="md:col-span-2 flex flex-col gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <Layers className="size-5" />
            </span>
            <h3 className="text-lg font-semibold">Reports & exports</h3>
            <p className="text-sm text-muted-foreground">
              A PDF report and an eight-table, stable-key export from one source —
              Power BI-ready and always reconciled.
            </p>
          </Card>

          {/* access */}
          <Card className="md:col-span-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Lock className="size-5" />
              </span>
              <h3 className="text-lg font-semibold">Access control & audit</h3>
              <p className="max-w-md text-sm text-muted-foreground">
                Named-user, least-privilege roles. External surveyors see only their
                assigned properties, and every action is attributed.
              </p>
            </div>
            <Link
              href="/platform"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
            >
              See all modules <ArrowRight className="size-4" />
            </Link>
          </Card>
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
            url="app.fieldservicepro.example/overview"
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
          <ScaledBrowser url="app.fieldservicepro.example/compliance">
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
          <ScaledBrowser url="app.fieldservicepro.example/properties/100023001">
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
