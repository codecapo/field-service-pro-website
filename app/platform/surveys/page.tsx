import type { Metadata } from "next";
import {
  Camera,
  CalendarCheck,
  ClipboardCheck,
  Droplets,
  Flame,
  GitMerge,
  Hammer,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  WifiOff,
} from "lucide-react";
import { Button, Card, Container, Section, SectionHeading } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { FeatureComposite } from "@/components/feature-composite";
import { DashboardPanel } from "@/components/dashboard-panel";
import { PhoneFrame, LivePhone, ServicesScreen, KitchenScreen, IssuesScreen } from "@/components/phone";

export const metadata: Metadata = {
  title: "Field operations",
  description:
    "Haven helps housing teams capture surveys, inspections and site updates where the work happens — then bring that information back clearly for review, reporting and action.",
};

export default function SurveysPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-5">
              <p className="text-sm font-semibold text-primary">Field operations</p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                From site visit to trusted answer
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Haven helps housing teams capture surveys, inspections and site updates
                where the work happens — then bring that information back clearly for
                review, reporting and action.
              </p>
              <p className="text-muted-foreground text-balance">
                It starts with stock condition surveys, which are live and ready to demo.
                The same approach can support fire safety checks, monthly housing
                inspections, damp and mould visits, follow-up actions and
                before-and-after repairs evidence.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Book a field operations demo
                </Button>
                <Button href="/" variant="secondary" size="lg">
                  See how Haven works
                </Button>
              </div>
            </div>
            <FeatureComposite url="app.havenams.com/surveys" screen={<ServicesScreen />}>
              <DashboardPanel />
            </FeatureComposite>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        eyebrow="Capture on site"
        title="Work where the work happens"
        description="Surveyors and inspectors often work in stairwells, basements, blocks, estates and homes where the connection is unreliable. Haven is built for that reality — capture inspections, photos, notes, issues and follow-up actions on site, even when signal is poor."
        points={[
          { icon: WifiOff, title: "Even with poor signal", body: "The work stays on the device and syncs back into Haven when the connection returns." },
          { icon: ClipboardCheck, title: "Surveys and inspections", body: "Condition, components, issues, photos and notes — captured in one place on site." },
          { icon: ShieldCheck, title: "Nothing lost", body: "Drafts and evidence survive an app restart, so a dropped connection never loses the visit." },
        ]}
        visual={
          <div className="flex justify-center">
            <LivePhone badges path="/surveys" fallback={<ServicesScreen />} />
          </div>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        eyebrow="Keep evidence with the work"
        title="Evidence stays with the record it belongs to"
        description="Photos, notes and issues should not sit in separate folders or email trails. Haven keeps the evidence attached to the right property, inspection, question or action — so teams can see what was found, who captured it, when, and what needs to happen next."
        points={[
          { icon: Camera, title: "Linked, not loose", body: "Each photo and note attaches to the property, inspection, question or action." },
          { icon: ClipboardCheck, title: "Who and when", body: "Captured-by and captured-at travel with every record." },
          { icon: Send, title: "Easier to stand behind", body: "The position is easier to review, easier to report and easier to defend." },
        ]}
        visual={
          <div className="flex justify-center">
            <PhoneFrame>
              <KitchenScreen />
            </PhoneFrame>
          </div>
        }
      />

      <FeatureShowcase
        eyebrow="Review before reporting"
        title="Not every update should go straight live"
        description="Haven gives teams a clear review step before information is used for reporting. Submissions can be checked, accepted, returned or flagged for further action — so teams report from information that has been reviewed, not just submitted."
        points={[
          { icon: ShieldCheck, title: "A clear review step", body: "Check the submission, manage comments and handle exceptions before it is used." },
          { icon: GitMerge, title: "Safe handover", body: "Field updates come back into the record without quietly overwriting it." },
          { icon: Send, title: "Report with confidence", body: "Only reviewed, accepted information feeds the reporting position." },
        ]}
        visual={
          <div className="flex justify-center">
            <PhoneFrame>
              <IssuesScreen />
            </PhoneFrame>
          </div>
        }
      />

      <InspectionTypes />

      <CtaSection
        title="See Haven working on site"
        description="We'll show how a survey or inspection is assigned, captured on site, synced safely, reviewed and turned into clear outputs your team can use."
      />
    </>
  );
}

/* ─────────────── One field approach. Many housing jobs. ─────────────── */
const inspectionTypes = [
  {
    icon: ClipboardCheck,
    title: "Stock condition surveys",
    status: "live" as const,
    body: "Capture property, room, component, condition, HHSRS observations, Decent Homes checks, photos, issues and notes on site.",
  },
  {
    icon: Flame,
    title: "Fire safety actions and inspections",
    status: "next" as const,
    body: "Record fire safety checks, observations, actions and evidence against the right property, block or communal area.",
  },
  {
    icon: CalendarCheck,
    title: "Monthly housing inspections",
    status: "next" as const,
    body: "Capture routine estate, block and communal checks in a consistent way, with clear evidence and follow-up actions.",
  },
  {
    icon: Droplets,
    title: "Damp and mould visits",
    status: "next" as const,
    body: "Record observations, severity, photos, actions and follow-up requirements in one place.",
  },
  {
    icon: Hammer,
    title: "Before-and-after repairs evidence",
    status: "next" as const,
    body: "Capture evidence before and after works, so teams can see what was reported, what was completed and what still needs attention.",
  },
  {
    icon: SlidersHorizontal,
    title: "Other inspection types",
    status: "next" as const,
    body: "Haven can be shaped around different fieldwork processes without turning every change into a long system rebuild.",
  },
];

const typeStatusLabel: Record<"live" | "next", string> = {
  live: "Available now",
  next: "Designed to support next",
};

function InspectionTypes() {
  return (
    <Section className="border-t border-border bg-muted/30">
      <SectionHeading
        title="One field approach. Many housing jobs."
        description="Haven is starting with stock condition because understanding homes is the foundation for good asset management, compliance and investment planning. But the need is wider — capture the right information, keep evidence attached, review it properly, and report from a clear position."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {inspectionTypes.map((t) => (
          <Card key={t.title} className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <t.icon className="size-5" />
              </span>
              <span
                className={
                  t.status === "live"
                    ? "rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 text-[11px] font-semibold text-success"
                    : "rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground"
                }
              >
                {typeStatusLabel[t.status]}
              </span>
            </div>
            <h3 className="text-base font-semibold">{t.title}</h3>
            <p className="text-sm text-muted-foreground">{t.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
