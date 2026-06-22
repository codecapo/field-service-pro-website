"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/components/ui";

const inputClass =
  "h-11 w-full rounded-lg border border-border bg-card px-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20";

const labelClass = "text-sm font-medium";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setState("idle");
    }
  }

  if (state === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <span className="grid size-14 place-items-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="size-7" />
        </span>
        <h2 className="text-xl font-semibold">Thanks — request received</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          We&apos;ll be in touch within one working day to set up your
          walkthrough. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      {/* Honeypot: hidden from humans, tempting to bots. Real users leave it blank. */}
      <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden" hidden>
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required>
          <input id="name" name="name" required className={inputClass} placeholder="Jordan Patel" />
        </Field>
        <Field id="email" label="Work email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="jordan@council.gov.uk"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="org" label="Organisation" required>
          <input id="org" name="org" required className={inputClass} placeholder="Your council or housing association" />
        </Field>
        <Field id="role" label="Your role">
          <input id="role" name="role" className={inputClass} placeholder="Asset / compliance lead" />
        </Field>
      </div>

      <Field id="interest" label="What are you looking to do?">
        <select id="interest" name="interest" className={cn(inputClass, "appearance-none")}>
          <option>Stock condition surveys</option>
          <option>HHSRS / Decent Homes evidence</option>
          <option>Compliance & assurance</option>
          <option>Other inspection types</option>
          <option>Full asset management platform</option>
        </select>
      </Field>

      <Field id="message" label="Anything we should know?">
        <textarea
          id="message"
          name="message"
          rows={4}
          className={cn(inputClass, "h-auto py-3 resize-y")}
          placeholder="Portfolio size, current tools, timelines…"
        />
      </Field>

      {error && (
        <p
          role="alert"
          className="rounded-lg border border-danger/30 bg-danger/10 px-3.5 py-2.5 text-sm text-danger"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {state === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          "Request a demo"
        )}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        We&apos;ll only use your details to arrange the demo.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
    </div>
  );
}
