import { notFound } from "next/navigation";

// The platform overview page is disabled — the individual platform surfaces
// (surveys, asset register, compliance, reporting) remain available.
export default function PlatformPage() {
  notFound();
}
