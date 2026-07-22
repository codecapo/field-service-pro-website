/* Internal preview for the app icon at the sizes it is actually used.
   Not linked, not indexed. Delete once the icon is signed off. */

export const metadata = { robots: { index: false, follow: false } };

const SIZES = [128, 64, 32, 16];

export default function IconLab() {
  return (
    <main className="min-h-screen bg-neutral-100 p-12">
      <h1 className="text-xl font-semibold tracking-tight">App icon</h1>
      <p className="mt-1 text-sm text-neutral-500">
        16px is the browser tab. If the arcs merge there, the strokes are too thin.
      </p>

      {/* on light, on dark, and on a busy surface — an icon does not choose its ground */}
      {[
        { id: "light", bg: "#f5f5f5", label: "On light" },
        { id: "dark", bg: "#1b1b22", label: "On dark" },
        {
          id: "busy",
          bg: "repeating-linear-gradient(45deg,#c9d2dd 0 12px,#aab6c6 12px 24px)",
          label: "On a busy ground",
        },
      ].map((surface) => (
        <section key={surface.id} className="mt-8">
          <p className="mb-3 text-xs font-medium tracking-wide text-neutral-500 uppercase">
            {surface.label}
          </p>
          <div
            className="flex items-end gap-8 rounded-2xl p-8"
            style={{ background: surface.bg }}
          >
            {SIZES.map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icon.svg" width={s} height={s} alt={`Icon at ${s} pixels`} />
                <span
                  className="text-[11px]"
                  style={{ color: surface.id === "dark" ? "#8b8b96" : "#6b6b76" }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
