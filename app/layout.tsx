import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://havenams.com"),
  title: {
    default: "Haven AMS — the offline-first asset management platform for social housing",
    template: "%s · Haven AMS",
  },
  description:
    "An evidence-led asset management platform built for councils and housing associations. Capture stock condition surveys fully offline, never overwrite the master record, and turn the field into a single source of truth.",
  openGraph: {
    title: "Haven AMS",
    description:
      "Offline-first asset management for social housing — survey capture, evidence-led compliance, and a single source of truth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
