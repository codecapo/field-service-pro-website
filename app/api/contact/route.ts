import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO_EMAIL || site.email;
const FROM = process.env.CONTACT_FROM_EMAIL || "Haven AMS <onboarding@resend.dev>";

type Payload = {
  name?: string;
  email?: string;
  org?: string;
  role?: string;
  interest?: string;
  message?: string;
  /** Honeypot — must be empty for genuine humans. */
  company_website?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a filled field means a bot. Pretend success so it doesn't retry.
  if (body.company_website && body.company_website.trim() !== "") {
    console.warn("[contact] honeypot triggered — submission dropped.");
    return NextResponse.json({ ok: true, delivered: false });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const org = body.org?.trim() ?? "";
  const role = body.role?.trim() ?? "";
  const interest = body.interest?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !org) {
    return NextResponse.json(
      { ok: false, error: "Name, email and organisation are required." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Organisation", org],
    ["Role", role || "—"],
    ["Interest", interest || "—"],
    ["Message", message || "—"],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,Helvetica,Arial,sans-serif;font-size:14px;color:#161A2C">
      <h2 style="margin:0 0 16px">New demo request — ${escapeHtml(site.name)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;width:140px;vertical-align:top">${k}</td>
                 <td style="padding:8px 12px;border:1px solid #e5e7eb;white-space:pre-wrap">${escapeHtml(v)}</td>
               </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const subject = `Demo request — ${org} (${name})`;

  // No key configured (e.g. local dev): log and succeed so the UX still works.
  if (!process.env.RESEND_API_KEY) {
    console.warn("[contact] RESEND_API_KEY not set — submission logged, not emailed:\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // 1) Team notification (the one that must land).
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      html,
      text,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Could not send right now." }, { status: 502 });
    }

    // 2) Autoresponder to the submitter (best-effort — never fails the request).
    const firstName = escapeHtml(name.split(/\s+/)[0] || name);
    const ackHtml = `
      <div style="font-family:system-ui,-apple-system,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#161A2C">
        <p>Hi ${firstName},</p>
        <p>Thanks for your interest in ${escapeHtml(site.name)} — we&apos;ve received your request and a member of the team will be in touch within one working day to set up your walkthrough.</p>
        <p>We&apos;ll show the offline survey-to-output flow running on a real batch of stock: capture with no signal, conflict-controlled sync, the QA gate, and a PDF and data export that reconcile.</p>
        <p>If anything changes in the meantime, just reply to this email.</p>
        <p style="margin-top:20px">— The ${escapeHtml(site.name)} team</p>
      </div>`;
    const ackText =
      `Hi ${name.split(/\s+/)[0] || name},\n\n` +
      `Thanks for your interest in ${site.name} — we've received your request and ` +
      `a member of the team will be in touch within one working day to set up your walkthrough.\n\n` +
      `If anything changes in the meantime, just reply to this email.\n\n— The ${site.name} team`;
    try {
      await resend.emails.send({
        from: FROM,
        to: email,
        replyTo: TO,
        subject: `Thanks — we've got your ${site.name} demo request`,
        html: ackHtml,
        text: ackText,
      });
    } catch (ackErr) {
      console.error("[contact] autoresponder failed (non-fatal):", ackErr);
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json({ ok: false, error: "Could not send right now." }, { status: 502 });
  }
}
