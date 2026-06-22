import { notFound } from "next/navigation";

// Resources are temporarily disabled — return 404 for all article slugs.
export function generateStaticParams() {
  return [];
}

export default function ResourcePage() {
  notFound();
}
