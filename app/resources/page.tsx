import { notFound } from "next/navigation";

// Resources are temporarily disabled — return 404 for the hub.
export default function ResourcesHub() {
  notFound();
}
