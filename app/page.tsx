import {
  ArrowRight,
  AlertTriangle,
  BarChart3,
  Building2,
  Camera,
  ClipboardCheck,
  FileCheck2,
  GitMerge,
  Layers,
  Monitor,
  ShieldCheck,
  Smartphone,
  WifiOff,
} from "lucide-react";
import { Button, Container, Section, SectionHeading } from "@/components/ui";
import { AppCarousel, type CarouselSlide } from "@/components/sections/app-carousel";
import {
  KitchenScreen,
  IssuesScreen,
  SurveyListScreen,
} from "@/components/phone";
import { PhotoBand, PhotoPanel } from "@/components/media";
import { FeatureComposite } from "@/components/feature-composite";
import { ScaledBrowser } from "@/components/browser-frame";
import { BoardDetailMockup } from "@/components/app-mockups/board-detail";
import { DashboardMockup } from "@/components/app-mockups/dashboard";
import { ComplianceMockup } from "@/components/app-mockups/compliance";
import { AssetRegisterMockup } from "@/components/app-mockups/asset-register";
import { QaReviewMockup } from "@/components/app-mockups/qa-review";
import { PhoneFrame, ServicesScreen } from "@/components/phone";
import { ComparisonSection } from "@/components/sections/comparison";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { FlowDiagram } from "@/components/sections/flow-diagram";
import { FaqSection } from "@/components/sections/faq";
import { apps, differentiators, personas, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBand />
      <ProblemSection />
      <FlowDiagram />
      <DifferentiatorsSection />
      <FieldBand />
      <ComparisonSection />
      <PlatformShowcase />
      <AppsSection />
      <RolesSection />
      <StatsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}

/* A phone screen sized to the shared carousel stage. The frame is a fixed
   336px design width, scaled to the stage height via container queries so it
   sits alongside the browser slides without changing the stage aspect. */
function PhoneSlide({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full [container-type:size]">
      <div
        className="absolute left-1/2 top-1/2 w-[336px]"
        style={{ transform: "translate(-50%, -50%) scale(calc(100cqh / 720px))" }}
      >
        <PhoneFrame>{children}</PhoneFrame>
      </div>
    </div>
  );
}

/* Each slide falls back to its coded mockup until a real capture is dropped
   into public/images/screens/<key>.png — then it swaps automatically. */
const heroSlides: CarouselSlide[] = [
  {
    key: "overview",
    label: "Portfolio overview",
    caption: "Surveys accepted, Decent Homes position and HHSRS counts across the stock.",
    visual: (
      <ScaledBrowser url="hub.havenbeacon.com/dashboard" designWidth={1440}>
        <DashboardMockup />
      </ScaledBrowser>
    ),
  },
  {
    key: "compliance",
    label: "Compliance programmes",
    caption: "Every programme with what is evidenced, what is missing and what needs review.",
    visual: (
      <ScaledBrowser url="hub.havenbeacon.com/compliance" designWidth={1440}>
        <ComplianceMockup />
      </ScaledBrowser>
    ),
  },
  {
    key: "asset-register",
    label: "Property & components",
    caption: "Portfolio to block to property to the exact component and its condition.",
    visual: (
      <ScaledBrowser url="hub.havenbeacon.com/assets/100023336591" designWidth={1440}>
        <AssetRegisterMockup />
      </ScaledBrowser>
    ),
  },
  {
    key: "survey-board",
    label: "Survey manager",
    caption: "Assignments, pack readiness and sync status across every surveyor.",
    visual: (
      <ScaledBrowser url="hub.havenbeacon.com/board/B00214-26" designWidth={1440}>
        <BoardDetailMockup />
      </ScaledBrowser>
    ),
  },
  {
    key: "field-surveys",
    label: "HB Field — my surveys",
    caption: "Assigned packs pre-loaded to the device and ready to work offline.",
    visual: (
      <PhoneSlide>
        <SurveyListScreen />
      </PhoneSlide>
    ),
  },
  {
    key: "field-services",
    label: "HB Field — services & safety",
    caption: "Required-vs-observed checks raise an issue the moment something falls short.",
    visual: (
      <PhoneSlide>
        <ServicesScreen />
      </PhoneSlide>
    ),
  },
  {
    key: "field-kitchen",
    label: "HB Field — component condition",
    caption: "Condition, age and defects captured against each component on site.",
    visual: (
      <PhoneSlide>
        <KitchenScreen />
      </PhoneSlide>
    ),
  },
  {
    key: "field-issues",
    label: "HB Field — issues & hazards",
    caption: "HHSRS hazards, repairs and damp raised as typed records with photo evidence.",
    visual: (
      <PhoneSlide>
        <IssuesScreen />
      </PhoneSlide>
    ),
  },
];

/* ───────────────────────── Hero ─────────────────────────
   Product-forward: the carousel is the hero. Dark ink surface keeps the
   restrained, filmic register; the screens carry the message. */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 55% at 15% 10%, color-mix(in srgb, var(--ink-soft) 90%, transparent) 0%, transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 py-28 pt-36 md:py-32 md:pt-40 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-7">
            <span
              className="reveal eyebrow-caps text-ink-foreground/60"
              style={{ animationDelay: "40ms" }}
            >
              Stock condition &amp; compliance
            </span>

            <h1
              className="reveal type-display text-ink-foreground text-balance"
              style={{ animationDelay: "100ms" }}
            >
              Understand your homes. Respond faster. Report with confidence.
            </h1>

            <p
              className="reveal type-lead text-ink-foreground/75"
              style={{ animationDelay: "160ms" }}
            >
              Haven Beacon helps housing teams capture surveys, inspections and site
              updates on site, keep the evidence in one place, and give teams the
              clarity they need to act.
            </p>

            <div
              className="reveal flex flex-col gap-3 pt-1 sm:flex-row sm:items-center"
              style={{ animationDelay: "220ms" }}
            >
              <Button href="/contact" size="lg">
                Book a demo
                <ArrowRight className="size-4" />
              </Button>
              <Button
                href="/platform/surveys"
                size="lg"
                variant="ghost"
                className="!text-ink-foreground hover:!bg-white/10"
              >
                Explore the platform
              </Button>
            </div>
          </div>

          <AppCarousel
            slides={heroSlides}
            className="reveal [animation-delay:280ms]"
          />
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
    <div className="border-b border-border">
      <Container className="flex flex-col items-center gap-6 py-10">
        <p className="eyebrow-caps text-muted-foreground">
          Built for the realities of social housing asset management
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((i) => (
            <span key={i} className="text-sm text-foreground/65">
              {i}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}

/* ─────────────────────── Problem ───────────────────────
   Editorial: one idea, lots of air, left-aligned. */
function ProblemSection() {
  return (
    <Section space="spacious">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <h2 className="type-h2 text-balance">Get to the answer faster.</h2>
        <div className="flex flex-col gap-6">
          <p className="type-lead text-foreground/80 text-balance">
            Housing teams are being asked harder questions about homes, inspections,
            evidence and follow-up actions. Too often, the answer is buried across
            surveys, spreadsheets, photos, emails and disconnected systems.
          </p>
          <p className="type-body text-muted-foreground text-balance">
            Haven Beacon puts the information back in your control — capturing it
            clearly on site, keeping the evidence attached, and helping your team move
            from question to answer without the usual chasing and reconciliation.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ───────────── What Haven Beacon does differently ─────────────
   Hairline grid rather than a wall of icon-chip cards. */
const differentiatorIcons = [
  WifiOff,
  ShieldCheck,
  Camera,
  ClipboardCheck,
  AlertTriangle,
  BarChart3,
];

function DifferentiatorsSection() {
  return (
    <Section id="why" space="spacious">
      <SectionHeading
        align="left"
        eyebrow="Why Haven Beacon"
        title="What Haven Beacon does differently"
        description="Built around the way housing teams actually work — on site, under pressure, with evidence to capture and answers needed quickly. Every update follows a clear route from fieldwork to review to reporting."
      />
      <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((d, i) => {
          const Icon = differentiatorIcons[i];
          return (
            <div
              key={d.title}
              className="reveal flex flex-col gap-3 border-t border-border pt-6"
              style={{ animationDelay: `${60 + i * 60}ms` }}
            >
              <Icon className="size-5 text-primary" strokeWidth={1.6} />
              <h3 className="type-h3 mt-1">{d.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ─────────────────── Field band (photographic) ─────────────────── */
function FieldBand() {
  return (
    <PhotoBand
      src="/images/field-band.jpg"
      alt="Surveyor working offline in a communal stairwell of a housing block."
      overlay={0.62}
    >
      <Container className="relative py-28 md:py-40">
        <div className="flex max-w-xl flex-col gap-6 text-ink-foreground">
          <span className="eyebrow-caps text-ink-foreground/60">In the field</span>
          <h2 className="type-h2 text-balance">
            Built for the stairwell, not just the office.
          </h2>
          <p className="type-body text-ink-foreground/75 text-balance">
            Fieldwork rarely happens somewhere with perfect signal. Surveyors work in
            stairwells, basements, blocks and homes where connection is unreliable.
            Haven Beacon is built for that reality — the work stays on the device and
            comes back safely when connection returns.
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 pt-6">
            {["No app store needed", "Drafts survive a restart", "Syncs when you reconnect"].map(
              (chip) => (
                <span key={chip} className="eyebrow-caps text-ink-foreground/60">
                  {chip}
                </span>
              ),
            )}
          </div>
        </div>
      </Container>
    </PhotoBand>
  );
}

/* ───────────────── Platform showcase ───────────────── */
function PlatformShowcase() {
  return (
    <>
      <FeatureShowcase
        status="live"
        title="From site visit to trusted answer"
        description="Surveys and inspections captured on site come back into Haven Beacon, get checked, and feed the reporting position — the same accepted record behind every report and export."
        points={[
          {
            icon: WifiOff,
            title: "Capture on site",
            body: "Record condition, issues, photos and notes where the work happens — even when signal is poor.",
          },
          {
            icon: GitMerge,
            title: "Sync safely",
            body: "Field updates come back without losing work or quietly overwriting the record.",
          },
          {
            icon: BarChart3,
            title: "See progress live",
            body: "Track what has been assigned, completed, synced, reviewed and accepted.",
          },
        ]}
        visual={
          <FeatureComposite
            url="hub.havenbeacon.com/qa"
            screen={<ServicesScreen />}
            browserWidth={740}
            designWidth={1440}
          >
            <QaReviewMockup />
          </FeatureComposite>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        status="live"
        title="See the evidence behind the status"
        description="Instead of relying on a status alone, teams can see what evidence has been captured, what is missing, what needs review and what needs to happen next."
        points={[
          {
            icon: FileCheck2,
            title: "Evidence attached to the record",
            body: "Certificates, photos, notes and inspection outcomes stay linked to the right property, block or programme.",
          },
          {
            icon: AlertTriangle,
            title: "Missing information made visible",
            body: "Unclear, incomplete or missing records are flagged so teams know what needs review.",
          },
          {
            icon: BarChart3,
            title: "Reporting with context",
            body: "Dashboards and exports show the position with the evidence and exceptions behind it.",
          },
        ]}
        visual={
          <ScaledBrowser url="hub.havenbeacon.com/compliance" designWidth={1440}>
            <ComplianceMockup />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        status="live"
        title="A clearer view of every home, block and component"
        description="Accepted surveys and inspections build a clearer, more reliable view of your stock — the property, the block, the components, the evidence and the latest condition in one place."
        points={[
          {
            icon: Building2,
            title: "Portfolio to property",
            body: "Move from a wider view of the stock to the individual home or block that needs attention.",
          },
          {
            icon: Layers,
            title: "Condition and remaining life",
            body: "Component information helps teams understand future renewal needs and plan work more clearly.",
          },
          {
            icon: ShieldCheck,
            title: "Reviewed before update",
            body: "Accepted surveys update the record once they have passed review, and the history is kept.",
          },
        ]}
        visual={
          <ScaledBrowser url="hub.havenbeacon.com/assets/100023336591" designWidth={1440}>
            <AssetRegisterMockup />
          </ScaledBrowser>
        }
      />
    </>
  );
}

/* ─────────────── The two apps: HB Field and HB Hub ─────────────── */
const appIcons = { field: Smartphone, hub: Monitor } as const;

function AppsSection() {
  return (
    <section className="border-t border-border py-28 md:py-40">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="The products"
          title="Two apps, one connected flow"
          description="Haven Beacon is a field app and an office app that share the same record. What the surveyor captures is what the office reviews, and what the office accepts is what the reports are built from."
        />
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="flex justify-center">
            <PhoneFrame>
              <ServicesScreen />
            </PhoneFrame>
          </div>
          <div className="grid gap-12 sm:grid-cols-2">
            {apps.map((app) => {
              const Icon = appIcons[app.key];
              return (
                <div
                  key={app.key}
                  className="flex flex-col gap-4 border-t border-border pt-6"
                >
                  <Icon className="size-5 text-primary" strokeWidth={1.6} />
                  <div>
                    <h3 className="type-h3">{app.name}</h3>
                    <p className="eyebrow-caps mt-2 text-muted-foreground">
                      {app.audience}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {app.body}
                  </p>
                  <ul className="flex flex-col gap-2.5 pt-1">
                    {app.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm">
                        <span
                          aria-hidden
                          className="mt-[0.5em] size-1 shrink-0 rounded-full bg-primary"
                        />
                        <span className="leading-relaxed text-muted-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────── Roles ─────────────────────── */
/* Place for the organisations, people for the roles — see
   scripts/install-personas.mjs for why, and for the UK-vernacular constraint. */
const personaPhotos: Record<string, { src: string; alt: string }> = {
  councils: {
    src: "/images/persona-councils.jpg",
    alt: "A post-war red brick council housing block on a residential street.",
  },
  has: {
    src: "/images/persona-has.jpg",
    alt: "A modern housing association development of mixed-tenure homes.",
  },
  suppliers: {
    src: "/images/persona-suppliers.jpg",
    alt: "Surveyor in a hi-vis vest holding a rugged tablet inside a property.",
  },
  compliance: {
    src: "/images/persona-compliance.jpg",
    alt: "Compliance lead standing in a bright housing office.",
  },
  landlords: {
    src: "/images/persona-landlords.jpg",
    alt: "A street of Victorian terraced houses of the kind let privately.",
  },
};

function RolesSection() {
  return (
    <Section space="spacious">
      <SectionHeading
        align="left"
        eyebrow="Who it's for"
        title="One platform, every part of the operating model"
        description="From the surveyor in a dead-signal stairwell to the compliance lead certifying a whole portfolio — and the private landlord with a dozen obligations per property."
      />
      {/* Five audiences: two-up on small screens, then a single row from lg so
          the set reads as one group rather than a row of four plus a straggler. */}
      <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
        {personas.map((p, i) => {
          const photo = personaPhotos[p.key];
          return (
            <div
              key={p.key}
              className="reveal flex flex-col gap-5"
              style={{ animationDelay: `${60 + i * 80}ms` }}
            >
              <PhotoPanel
                src={photo.src}
                alt={photo.alt}
                width={1000}
                height={1250}
                scrim={false}
                className="aspect-[4/5] rounded-xl"
              />
              <div className="flex flex-col gap-3">
                <h3 className="type-h3">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.pain}
                </p>
                <p className="border-t border-border pt-3 text-sm leading-relaxed text-foreground/80">
                  {p.gain}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-14">
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
    <section className="border-y border-border">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-3 border-border py-14 pr-8 sm:[&:nth-child(n+3)]:border-t lg:border-t-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-8 lg:[&:nth-child(n+3)]:border-t-0"
            >
              <span className="type-h2 text-primary">{s.value}</span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────── Final CTA ─────────────────────── */
function FinalCta() {
  return (
    <PhotoBand
      src="/images/cta-band.jpg"
      alt="Asset and compliance team reviewing housing data together."
      overlay={0.7}
    >
      <Container className="relative py-28 md:py-36">
        <div className="flex max-w-xl flex-col gap-6 text-ink-foreground">
          <h2 className="type-h2 text-balance">
            Bring your field data in from the cold.
          </h2>
          <p className="type-body text-ink-foreground/75 text-balance">
            See a survey assigned, captured on site, synced safely, reviewed and turned
            into clear outputs your team can use. No app store, no signal required.
          </p>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg" className="!bg-white !text-ink">
              Book a demo
              <ArrowRight className="size-4" />
            </Button>
            <Button
              href="/platform/surveys"
              size="lg"
              variant="ghost"
              className="!text-ink-foreground hover:!bg-white/10"
            >
              Explore the platform
            </Button>
          </div>
        </div>
      </Container>
    </PhotoBand>
  );
}
