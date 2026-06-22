import type { Metadata } from "next";
import { Boxes, Building2, Camera, History, Layers, ListTree, ShieldCheck } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { CtaSection } from "@/components/sections/cta";
import { ScaledBrowser } from "@/components/browser-frame";
import { DashboardPanel } from "@/components/dashboard-panel";
import { AssetRegister } from "@/components/mockups";

export const metadata: Metadata = {
  title: "Asset register",
  description:
    "Haven helps housing teams turn accepted surveys and inspections into a clearer, more reliable view of their stock — the property, the block, the components, the evidence and the latest condition in one place.",
};

export default function AssetRegisterPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-hero-glow" />
        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-5">
              <p className="text-sm font-semibold text-primary">Asset register</p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                A clearer view of every home, block and component
              </h1>
              <p className="text-balance text-lg text-muted-foreground">
                Haven helps housing teams turn accepted surveys and inspections into a
                clearer, more reliable view of their stock. See the property, the block,
                the components, the evidence and the latest condition in one place — so
                teams can understand what is known, what has changed and what needs
                attention.
              </p>
              <p className="text-balance text-muted-foreground">
                From stock condition surveys to wider inspections, Haven keeps the
                information connected to the right property, block or component, so the
                record becomes easier to trust and easier to use.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">Book a demo</Button>
                <Button href="/platform/surveys" variant="secondary" size="lg">
                  See field operations
                </Button>
              </div>
            </div>
            <ScaledBrowser url="app.havenams.com/properties/100023001">
              <AssetRegister />
            </ScaledBrowser>
          </div>
        </Container>
      </header>

      <FeatureShowcase
        eyebrow="Property, block and component view"
        title="See the whole picture, not just a survey file"
        description="Housing teams need to understand the whole picture — not just a survey file or a dashboard total. Haven lets users move from portfolio to block, property and component, while keeping the evidence and history connected."
        points={[
          {
            icon: ListTree,
            title: "Portfolio to property",
            body: "Move from a wider view of the stock to the individual home or block that needs attention.",
          },
          {
            icon: Boxes,
            title: "Components in context",
            body: "See kitchens, bathrooms, boilers, doors and other components against the property or block they belong to.",
          },
          {
            icon: Building2,
            title: "Communal and block areas",
            body: "Record shared spaces, communal areas and block-level assets without losing them inside individual dwelling records.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/properties/100023001">
            <AssetRegister />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        reverse
        tinted
        eyebrow="Lifecycle and condition"
        title="Condition and lifecycle, kept with the component"
        description="Accepted surveys should not sit in a file. Haven keeps condition and lifecycle information against the right component, so teams can see what was found, what evidence supports it and what may need action next."
        points={[
          {
            icon: Layers,
            title: "Condition captured on site",
            body: "Surveyors record the condition of components while they are on site.",
          },
          {
            icon: Boxes,
            title: "Renewal and remaining life",
            body: "Component information helps teams understand future renewal needs and plan work more clearly.",
          },
          {
            icon: Camera,
            title: "Evidence behind the view",
            body: "Photos, notes and survey responses stay linked to the component, so the position is easier to review.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/overview">
            <DashboardPanel />
          </ScaledBrowser>
        }
      />

      <FeatureShowcase
        eyebrow="Controlled updates"
        title="The record updates only when information is accepted"
        description="A survey is a point-in-time view. The asset record should change only when that information has been checked and accepted. Haven helps teams manage that handover, so the view is not updated by accident or overwritten without review."
        points={[
          {
            icon: ShieldCheck,
            title: "Reviewed before update",
            body: "Accepted surveys and inspections update the record once they have passed review.",
          },
          {
            icon: History,
            title: "History is kept",
            body: "Teams can see what changed, when it changed and what evidence supported the change.",
          },
          {
            icon: ListTree,
            title: "Clear classifications",
            body: "Property, tenure, block, component and management information can be held consistently, making reporting easier.",
          },
        ]}
        visual={
          <ScaledBrowser url="app.havenams.com/properties/100023001">
            <AssetRegister />
          </ScaledBrowser>
        }
      />

      <CtaSection
        title="Turn fieldwork into a clearer asset view"
        description="See how Haven takes accepted surveys and inspections and turns them into property, block and component information your team can use."
      />
    </>
  );
}
