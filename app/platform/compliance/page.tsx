import type { Metadata } from "next";
import {
  AlertTriangle,
  DoorClosed,
  Droplets,
  FileCheck2,
  Gauge,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import { Button, Container } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { ComplianceBoard } from "@/components/mockups";
import { PhoneFrame, ServicesScreen } from "@/components/phone";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "See the evidence behind the status. Haven helps housing teams understand the evidence, exceptions and actions behind their compliance position — what is captured, what is missing, and what needs to happen next.",
};

export default function CompliancePage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-5">
              <p className="text-sm font-semibold text-primary">Compliance</p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                See the evidence behind the status
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Haven helps housing teams understand the evidence, exceptions and actions
                behind their compliance position. Instead of relying on a status alone,
                teams can see what evidence has been captured, what is missing, what needs
                review and what needs to happen next.
              </p>
              <p className="text-muted-foreground text-balance">
                From field checks and inspection evidence to certificates, exceptions and
                follow-up actions, Haven gives teams a clearer way to manage compliance
                information and report with confidence.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">Book a compliance demo</Button>
                <Button href="/platform/surveys" variant="secondary" size="lg">
                  Explore field operations
                </Button>
              </div>
            </div>

            <ScaledBrowser url="app.havenams.com/compliance">
              <ComplianceBoard />
            </ScaledBrowser>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        eyebrow="Know what is evidenced, missing or unresolved"
        title="Compliance reporting should not hide uncertainty"
        description="Haven helps teams separate what is evidenced from what still needs attention, so missing information, unclear applicability and unresolved actions are visible rather than buried."
        points={[
          {
            icon: FileCheck2,
            title: "Evidence attached to the record",
            body: "Certificates, photos, notes and inspection outcomes stay linked to the right property, block, component, programme or action.",
          },
          {
            icon: AlertTriangle,
            title: "Exceptions are clear",
            body: "Missing evidence, incomplete checks, failed observations and unresolved issues are flagged so teams know what needs review.",
          },
          {
            icon: Gauge,
            title: "Context behind the number",
            body: "See why a record is showing as complete, outstanding, missing, expired or needing action.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/compliance">
            <ComplianceBoard />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        eyebrow="Compliance starts on site"
        title="Many compliance risks are first seen during a visit"
        description="Haven helps teams capture those observations at the point they are found, with photos, notes and actions linked to the right record — so the check is logged where the work happens."
        points={[
          {
            icon: ShieldCheck,
            title: "Alarms and fire doors",
            body: "Smoke, heat and CO alarms, fire doors and self-closers — recorded against the right property or block.",
          },
          {
            icon: Droplets,
            title: "Damp and mould",
            body: "Observations, severity, photos and follow-up requirements captured in one place.",
          },
          {
            icon: DoorClosed,
            title: "HHSRS and Decent Homes",
            body: "HHSRS hazards and Decent Homes observations captured with the evidence and follow-up actions behind them.",
          },
        ]}
        visual={
          <div className="flex justify-center">
            <PhoneFrame>
              <ServicesScreen />
            </PhoneFrame>
          </div>
        }
      />

      <FeatureShowcase
        eyebrow="From question to evidence in fewer clicks"
        title="Clearer answers, fewer manual checks"
        description="When someone asks about a property, block or programme, teams should not have to search folders, spreadsheets and inboxes. Haven brings the information together so users can move from the reported position to the evidence, exception or action behind it."
        points={[
          {
            icon: KeyRound,
            title: "Fewer manual checks",
            body: "Move from the reported position to the evidence behind it without digging through folders.",
          },
          {
            icon: FileCheck2,
            title: "Linked to the right place",
            body: "The certificate, photo, note or action sits with the property, block, inspection or programme it supports.",
          },
          {
            icon: AlertTriangle,
            title: "More confidence in the position",
            body: "Report a position you can explain, with the exceptions and context visible.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/compliance">
            <DashboardPanel />
          </ScaledBrowser>
        }
      />

      <CtaSection
        title="See the evidence behind the status"
        description="We'll show how field checks, certificates, exceptions and actions come together so your team can report compliance with confidence."
      />
    </>
  );
}
