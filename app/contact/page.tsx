import type { Metadata } from "next";
import { CalendarCheck, Mail, WifiOff, ShieldCheck, FileCheck2 } from "lucide-react";
import { Badge, Container } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "See the offline survey-to-output spine running on a real batch of your stock. Book a walkthrough with the ClearView AMS team.",
};

const points = [
  {
    icon: WifiOff,
    title: "Offline capture, live",
    body: "We'll go offline mid-survey and show that nothing is lost.",
  },
  {
    icon: ShieldCheck,
    title: "Conflict control & QA",
    body: "Watch a changed master block a push, then pass the QA gate.",
  },
  {
    icon: FileCheck2,
    title: "Reconciled outputs",
    body: "See the PDF and the data export tie up on the same IDs.",
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <Container className="relative py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* left: pitch */}
          <div className="flex flex-col gap-6">
            <Badge>
              <span className="size-1.5 rounded-full bg-primary" />
              Book a demo
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              See it survive the field
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              A 30-minute walkthrough of the survey-to-AMS spine — on your stock,
              your inspection type, your questions. No slideware.
            </p>

            <ul className="mt-2 flex flex-col gap-4">
              {points.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{p.title}</p>
                    <p className="text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <CalendarCheck className="size-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                Prefer email?{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1 font-medium text-foreground hover:text-primary"
                >
                  <Mail className="size-3.5" /> {site.email}
                </a>
              </p>
            </div>
          </div>

          {/* right: form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
