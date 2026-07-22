import { BoardDetailMockup } from "@/components/app-mockups/board-detail";
import { DashboardMockup } from "@/components/app-mockups/dashboard";
import { ComplianceMockup } from "@/components/app-mockups/compliance";
import { AssetRegisterMockup } from "@/components/app-mockups/asset-register";

/* Internal preview: renders the product mockups at their true 1440px layout,
   unscaled, so they can be checked against the real app while being built. Not
   linked from anywhere and excluded from search. */

export const metadata = { robots: { index: false, follow: false } };

const SCREENS = [
  { id: "dashboard", node: <DashboardMockup /> },
  { id: "compliance", node: <ComplianceMockup /> },
  { id: "asset-register", node: <AssetRegisterMockup /> },
  { id: "board-detail", node: <BoardDetailMockup /> },
];

export default function MockupPreview() {
  return (
    <main className="flex min-h-screen flex-col gap-10 bg-neutral-200 p-8">
      {SCREENS.map((s) => (
        <section key={s.id} id={s.id} className="flex flex-col gap-2">
          <h2 className="font-mono text-xs tracking-wider text-neutral-600 uppercase">{s.id}</h2>
          <div className="w-[1440px] overflow-hidden rounded-lg border border-neutral-400 bg-white shadow-xl">
            <div className="h-[1007px]">{s.node}</div>
          </div>
        </section>
      ))}
    </main>
  );
}
