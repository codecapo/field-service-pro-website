import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://havenbeacon.com"),
  title: {
    default: "Haven Beacon — offline-first stock condition surveys and compliance for social housing",
    template: "%s · Haven Beacon",
  },
  description:
    "Haven Beacon helps housing teams capture surveys, inspections and site updates on site — even with no signal — keep the evidence in one place, and report with confidence. Built for councils and housing associations.",
  openGraph: {
    title: "Haven Beacon",
    description:
      "Capture surveys and inspections on site, keep the evidence connected, and report with confidence. Offline-first, built for social housing.",
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
