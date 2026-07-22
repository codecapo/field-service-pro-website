/* Candidate brand marks, for comparison only.

   Every mark is a 48×48 viewBox and paints from --primary / --foreground so it
   inherits the theme exactly as the live mark does. Strokes are kept at 2.2+ so
   nothing disappears at the 36px the header actually renders.

   Nothing here is wired into the site; components/logo.tsx still owns the live
   mark. Delete this file once a direction is chosen. */

type MarkProps = { className?: string };

const P = "var(--primary)";
const F = "var(--foreground)";

/* ── 1. House with signal behind, enclosed — the brief as described ───────── */
export function HouseSignalRing({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" stroke={P} strokeWidth="2.2" />
      <g stroke={P} strokeWidth="2.4" strokeLinecap="round">
        <path d="M16.95 23.45 A7.5 7.5 0 0 1 31.05 23.45" />
        <path d="M13.19 22.09 A11.5 11.5 0 0 1 34.81 22.09" />
      </g>
      <g stroke={F} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.5 33 L24 25 L34.5 33" />
        <path d="M16 32.5 V40.5 H32 V32.5" />
      </g>
    </svg>
  );
}

/* ── 2. Same idea, unenclosed — the ring costs a lot of interior room ─────── */
export function HouseSignal({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <g stroke={P} strokeWidth="2.9" strokeLinecap="round">
        <path d="M13.4 20.6 A9.5 9.5 0 0 1 34.6 20.6" />
        <path d="M8.6 18.8 A14.5 14.5 0 0 1 39.4 18.8" />
      </g>
      <g stroke={F} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 32 L24 21 L38 32" />
        <path d="M14 31 V42 H34 V31" />
      </g>
    </svg>
  );
}

/* ── 3. Roofline only, signal above — the most compressible ───────────────── */
export function RoofSignal({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <g stroke={P} strokeWidth="3" strokeLinecap="round">
        <path d="M15.2 24.4 A8.5 8.5 0 0 1 32.8 24.4" />
        <path d="M9.9 21.6 A14 14 0 0 1 38.1 21.6" />
      </g>
      <path
        d="M8 38 L24 26 L40 38"
        stroke={F}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── 4. House inside a shield — leans assurance rather than connectivity ──── */
export function ShieldHouse({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 4 L41 11 V24 C41 34 33 41.5 24 44.5 C15 41.5 7 34 7 24 V11 Z"
        stroke={P}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <g stroke={F} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.5 26 L24 19 L32.5 26" />
        <path d="M18 25.5 V34 H30 V25.5" />
      </g>
    </svg>
  );
}

/* ── 5. House containing a check — the "verified record" reading ──────────── */
export function HouseCheck({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <g stroke={F} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 22 L24 9 L39 22" />
        <path d="M13 21 V39 H35 V21" />
      </g>
      <path
        d="M18.5 29.5 L22.5 33.5 L30 26"
        stroke={P}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── 6. Stacked roofs — portfolio depth rather than a single home ─────────── */
export function StackedRoofs({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <g strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 18 L24 7 L40 18" stroke={P} />
        <path d="M8 28 L24 17 L40 28" stroke={F} opacity="0.45" />
        <path d="M8 38 L24 27 L40 38" stroke={F} />
      </g>
    </svg>
  );
}

/* ── 7. Signal radiating from a home, offset — asymmetric, more distinctive ─ */
export function HomeBroadcast({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <g stroke={F} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 30 L19 19 L32 30" />
        <path d="M10 29 V41 H28 V29" />
      </g>
      <g stroke={P} strokeWidth="2.7" strokeLinecap="round">
        <path d="M33.5 20.5 A6 6 0 0 1 33.5 30.5" />
        <path d="M38 16 A12 12 0 0 1 38 35" />
      </g>
    </svg>
  );
}

/* ── 8. The live mark, for honest comparison ──────────────────────────────── */
export function BeaconCurrent({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" stroke={P} strokeWidth="2.2" />
      <g transform="translate(24 24) scale(0.8) translate(-24 -24)">
        <g stroke={P} strokeWidth="2.75" strokeLinecap="round">
          <path d="M16.3 4.6 A 10 10 0 0 0 16.3 17.4" />
          <path d="M31.7 4.6 A 10 10 0 0 1 31.7 17.4" />
          <path d="M19.0 6.8 A 6.5 6.5 0 0 0 19.0 15.2" />
          <path d="M29.0 6.8 A 6.5 6.5 0 0 1 29.0 15.2" />
        </g>
        <circle cx="24" cy="11" r="2.8" fill={P} />
        <g stroke={F} strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.4 16.4 L17 40" />
          <path d="M25.6 16.4 L31 40" />
          <path d="M20.6 24.4 L27.4 24.4" />
          <path d="M18.8 32.4 L29.2 32.4" />
        </g>
      </g>
    </svg>
  );
}

/* ── Signal: the beacon reduced to what it does ───────────────────────────

   The mast was scaffolding — it held the light up but said nothing. What the
   beacon *does* is broadcast, so the mark is the broadcast: a source and the
   arcs leaving it.

   Hub keeps both pairs, radiating each way — the place everything reports to.
   Field is one arc over a pin: a single surveyor, somewhere specific. Five
   shapes for Hub, three for Field, which is why it holds at 20px where the
   mast version silts up. */

export function SignalHub({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <g stroke={P} strokeWidth="2.9" strokeLinecap="round">
        <path d="M18.21 17.11 A9 9 0 0 0 18.21 30.89" />
        <path d="M15 13.28 A14 14 0 0 0 15 34.72" />
        <path d="M29.79 17.11 A9 9 0 0 1 29.79 30.89" />
        <path d="M33 13.28 A14 14 0 0 1 33 34.72" />
      </g>
      <circle cx="24" cy="24" r="3.4" fill={F} />
    </svg>
  );
}

export function SignalField({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      {/* one arc — a single surveyor reporting in, not a hub receiving */}
      <path
        d="M13.28 19 A14 14 0 0 1 34.72 19"
        stroke={P}
        strokeWidth="2.9"
        strokeLinecap="round"
      />
      {/* somewhere specific */}
      <path
        d="M24 22 C20.7 22 18 24.7 18 28 C18 33 24 41 24 41 C24 41 30 33 30 28 C30 24.7 27.3 22 24 22 Z"
        stroke={F}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="28" r="2.2" fill={F} />
    </svg>
  );
}

/* The enclosed lock-up, for favicons and app icons where a container helps. */
export function SignalHubRing({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" stroke={P} strokeWidth="2.2" />
      <g transform="translate(24 24) scale(0.72) translate(-24 -24)">
        <g stroke={P} strokeWidth="3.6" strokeLinecap="round">
          <path d="M18.21 17.11 A9 9 0 0 0 18.21 30.89" />
          <path d="M15 13.28 A14 14 0 0 0 15 34.72" />
          <path d="M29.79 17.11 A9 9 0 0 1 29.79 30.89" />
          <path d="M33 13.28 A14 14 0 0 1 33 34.72" />
        </g>
        <circle cx="24" cy="24" r="4.2" fill={F} />
      </g>
    </svg>
  );
}

export const signalSystem = [
  { id: "signal-hub", label: "Signal — Hub", note: "Both arc pairs: the place everything reports to", Mark: SignalHub },
  { id: "signal-field", label: "Signal — Field", note: "One arc over a pin: one surveyor, somewhere specific", Mark: SignalField },
  { id: "signal-hub-ring", label: "Signal — enclosed", note: "For favicons and app icons", Mark: SignalHubRing },
] as const;

export const candidates = [
  { id: "house-signal-ring", label: "House + signal, enclosed", note: "Your brief, as described", Mark: HouseSignalRing },
  { id: "house-signal", label: "House + signal, open", note: "Same idea without the ring", Mark: HouseSignal },
  { id: "roof-signal", label: "Roofline + signal", note: "Most legible when small", Mark: RoofSignal },
  { id: "shield-house", label: "Shield + house", note: "Assurance over connectivity", Mark: ShieldHouse },
  { id: "house-check", label: "House + check", note: "The verified record", Mark: HouseCheck },
  { id: "stacked-roofs", label: "Stacked roofs", note: "Portfolio, not one home", Mark: StackedRoofs },
  { id: "home-broadcast", label: "Home broadcasting", note: "Asymmetric, more distinctive", Mark: HomeBroadcast },
  { id: "beacon-current", label: "Beacon (current)", note: "What is live today", Mark: BeaconCurrent },
] as const;
