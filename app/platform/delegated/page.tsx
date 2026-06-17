import type { Metadata } from "next";
import { Building2, Handshake, Lock, RefreshCw, ShieldCheck, Users } from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { DelegatedBoard } from "@/components/mockups/delegated-board";

export const metadata: Metadata = {
  title: "Delegated management",
  description:
    "Restricted partner environments with Newham assurance — PFI, TMO and managing-agent stock governed by RBAC, with accept/reject submissions and source-of-truth contact integration.",
};

export default function DelegatedPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <Badge>
                <span className="size-1.5 rounded-full bg-primary" />
                Platform · Delegated management
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                Delegated stock, assured — without losing control
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Give PFI, TMO and managing-agent partners their own restricted
                environment, while Newham retains assurance over every workstream and
                governs contact data from its source of truth.
              </p>
            </div>

            <ScaledBrowser url="app.clearviewams.com/assurance">
              <DelegatedBoard />
            </ScaledBrowser>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        status="live"
        eyebrow="Partner environments"
        title="Restricted environments, shaped by RBAC"
        description="Partners only ever see — and only ever touch — the stock they manage. Access is scoped by portfolio and management category, with Newham assurance retained at block level."
        points={[
          {
            icon: Lock,
            title: "Scoped by portfolio & management category",
            body: "PFI, TMO and managing-agent partners are partitioned to their own stock by role-based access — never the wider portfolio.",
          },
          {
            icon: Building2,
            title: "Evidence limited to managed stock",
            body: "Partner evidence and certificate uploads are restricted to the properties and blocks they actually manage.",
          },
          {
            icon: ShieldCheck,
            title: "Block-level assurance retained",
            body: "In mixed-tenure blocks, Newham keeps assurance over communal and block-level duties even where a unit isn't owned.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.clearviewams.com/assurance">
            <DelegatedBoard />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        status="live"
        eyebrow="Assurance"
        title="Accept or reject every partner submission"
        description="Delegated evidence doesn't update the live record until Newham accepts it. The same maker-checker gate behind the survey QA flow assures delegated stock — with a full audit trail."
        points={[
          {
            icon: ShieldCheck,
            title: "Pending-assurance accept/reject",
            body: "Partner submissions land as pending-assurance; a Newham reviewer accepts or rejects with comments before anything is trusted.",
          },
          {
            icon: Users,
            title: "Central assurance dashboard",
            body: "Delegated-stock assurance by workstream — gas, EICR, FRA, HHSRS, SCS, asbestos, lifts, damp and repairs — in one view.",
          },
          {
            icon: Handshake,
            title: "One assurance model",
            body: "The maker-checker pattern that gates surveys generalises directly to delegated evidence, so governance stays consistent.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.clearviewams.com/overview">
            <DashboardPanel />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        status="live"
        eyebrow="Integrations"
        title="Contact data, governed from its source"
        description="Resident and contact details are displayed from the CRM/Northgate source of truth — the AMS shows them, it doesn't master them — with controlled write-back and conflict reporting."
        points={[
          {
            icon: RefreshCw,
            title: "Source-of-truth display",
            body: "Contact details surface from CRM / Northgate so teams see one consistent record, not a stale local copy.",
          },
          {
            icon: ShieldCheck,
            title: "Controlled write-back",
            body: "Update requests write back through a controlled path with a conflict report and full audit — never a silent overwrite.",
          },
          {
            icon: Lock,
            title: "Displays, never masters",
            body: "The AMS is explicit about what it owns: it displays externally-mastered data and reconciles, rather than competing for the truth.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.clearviewams.com/assurance">
            <DelegatedBoard />
          </ScaledBrowser>
        }
      />

      <CtaSection
        title="Assure delegated stock without losing control"
        description="See how partner environments, assurance and governed integrations keep mixed-tenure stock trustworthy end to end."
      />
    </>
  );
}
