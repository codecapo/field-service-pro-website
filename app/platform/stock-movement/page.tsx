import type { Metadata } from "next";
import { ArrowLeftRight, CalendarClock, Home, FileText, ScrollText, Scale } from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { StockMovementBoard } from "@/components/mockups/stock-movement-board";

export const metadata: Metadata = {
  title: "Stock movement",
  description:
    "Effective-dated stock movement, the Right to Buy pipeline and leasehold obligations — reconciled monthly and kept in step with every compliance programme.",
};

export default function StockMovementPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <Badge>
                <span className="size-1.5 rounded-full bg-primary" />
                Platform · Stock movement
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                Stock that always reconciles, as at any date
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Every addition, removal and transfer is captured with an effective
                date — so the register reconciles month on month, the Right to Buy
                pipeline stays current, and leasehold obligations are never out of step
                with the programmes that depend on them.
              </p>
            </div>
            <ScaledBrowser url="app.clearviewams.com/movement">
              <StockMovementBoard />
            </ScaledBrowser>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        status="live"
        eyebrow="Monthly reconciliation"
        title="Effective-dated movement, reconciled every month"
        description="A controlled ledger of opening and closing balances — so you can report the portfolio exactly as it stood on any past date, and every movement triggers the right downstream review."
        points={[
          {
            icon: ArrowLeftRight,
            title: "Opening → closing, fully accounted",
            body: "Additions, removals and transfers reconcile to a gross and net movement with reason and evidence.",
          },
          {
            icon: CalendarClock,
            title: "Effective dating for as-at reporting",
            body: "Each movement records when it became true, so the register can be reported as at any month-end.",
          },
          {
            icon: FileText,
            title: "Programme impact review",
            body: "Movements automatically flag a gas, EICR, SCS or FRA applicability review — nothing slips the denominator.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.clearviewams.com/movement">
            <StockMovementBoard />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        status="live"
        eyebrow="Right to Buy"
        title="The RTB pipeline and Section 125, end to end"
        description="Track every application through to completion, with the works intelligence the estimate depends on — and a clean hand-off to tenure and programme applicability when a sale completes."
        points={[
          {
            icon: Home,
            title: "Status per property and block",
            body: "Application → S125 review → S125 issued → pending completion → completed, withdrawn or refused.",
          },
          {
            icon: ScrollText,
            title: "Works relevant to S125 estimates",
            body: "Surface the planned, FRA and block works that feed a defensible Section 125 estimate.",
          },
          {
            icon: ArrowLeftRight,
            title: "Completion updates tenure & programmes",
            body: "A completed sale updates tenure and recalculates programme applicability across the asset.",
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
        eyebrow="Leasehold"
        title="Section 20 and leasehold recharge, by the block"
        description="Know where leaseholders sit, what is rechargeable, and whether major works can proceed — with the consultation trail held against the block."
        points={[
          {
            icon: Scale,
            title: "Rechargeable-works flag & apportionment",
            body: "Leaseholder presence and cost apportionment held per block, ready for recharge.",
          },
          {
            icon: FileText,
            title: "Section 20 consultation status",
            body: "Consultation stage and supporting documents tracked against the works they relate to.",
          },
          {
            icon: ScrollText,
            title: "Can-works-proceed view",
            body: "A single view of leaseholder impact so major works are never held up by a missing step.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.clearviewams.com/movement">
            <StockMovementBoard />
          </ScaledBrowser>
        }
      />

      <CtaSection
        title="Keep movement reconciled with every programme"
        description="See effective-dated stock movement, the RTB pipeline and leasehold recharge working together on your portfolio."
      />
    </>
  );
}
