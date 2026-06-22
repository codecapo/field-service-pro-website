import type { Metadata } from "next";
import { Camera, ClipboardCheck, GitMerge, Send, ShieldCheck, WifiOff } from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { FeatureComposite } from "@/components/feature-composite";
import { DashboardPanel } from "@/components/dashboard-panel";
import { PhoneFrame, LivePhone, ServicesScreen, KitchenScreen, IssuesScreen } from "@/components/phone";

export const metadata: Metadata = {
  title: "Surveys",
  description:
    "Offline-first stock condition survey capture — photos bound to the record, issue-level HHSRS, and a QA gate before anything touches the live master.",
};

export default function SurveysPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <Badge>
                <span className="size-1.5 rounded-full bg-primary" />
                Platform · Surveys
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                Field capture that survives the field
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Surveyors capture everything offline — components, HHSRS issues and
                photos — in basements, stairwells and dead-signal estates. Nothing is
                lost, nothing overwrites the master, and nothing reaches the live
                record until it passes QA.
              </p>
            </div>
            <FeatureComposite url="app.havenams.com/surveys" screen={<ServicesScreen />}>
              <DashboardPanel />
            </FeatureComposite>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        eyebrow="Offline capture"
        status="live"
        title="Capture anything offline"
        description="The device is the source of truth during fieldwork. Open, answer, photograph and draft with no connection — then sync when signal returns."
        points={[
          { icon: WifiOff, title: "Works with no signal", body: "A template-driven survey runs entirely on-device — no connection required to capture a thing." },
          { icon: ClipboardCheck, title: "Drafts & photos survive restart", body: "Close the app, lose battery, come back tomorrow — your in-progress survey is exactly where you left it." },
          { icon: ShieldCheck, title: "Required-vs-observed prompts", body: "A missing CO or smoke alarm raises a pre-filled issue on the spot, so safety gaps are never quietly skipped." },
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
        eyebrow="Evidence"
        status="live"
        title="Evidence bound to the record"
        description="Photos attach to the exact question, component or issue they evidence — never a loose gallery. Provenance travels with every image."
        points={[
          { icon: Camera, title: "Photos tied to the record", body: "Each photo is parent-linked to its question, component, issue or access event — traceable forever." },
          { icon: ClipboardCheck, title: "Named-user provenance", body: "Captured-at and uploaded-at timestamps, the surveyor and the device travel with every record." },
          { icon: Send, title: "Embedded in the report", body: "Photos appear in the PDF beside the record they evidence, and in the structured export by stable key." },
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
        eyebrow="HHSRS & QA"
        status="live"
        title="Issues, HHSRS & the QA gate"
        description="Every defect is a typed issue record. Surveys are point-in-time snapshots — they only update the live master after an independent reviewer accepts them."
        points={[
          { icon: ShieldCheck, title: "Issue-level HHSRS", body: "Category 1 / Category 2 hazards with controlled reason codes, linked to the component and the question that raised them." },
          { icon: GitMerge, title: "No silent overwrite", body: "Master-version conflict control blocks and logs any push that would clobber a changed record." },
          { icon: Send, title: "Maker-checker QA", body: "Accept or reject with comments. Rejections return to the surveyor editable; acceptances promote to the live record and the export." },
        ]}
        visual={
          <div className="flex justify-center">
            <PhoneFrame>
              <IssuesScreen />
            </PhoneFrame>
          </div>
        }
      />

      <CtaSection
        title="See offline capture survive the field"
        description="We'll go offline mid-survey on a real batch of your stock — and show nothing is lost, nothing is overwritten, and everything reconciles."
      />
    </>
  );
}
