"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
}

const MAX = { name: 100, email: 200, subject: 150, message: 5000 };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Delivers a contact-form message to my inbox via Resend.
 *
 * The visitor's address goes in replyTo (not from) — Resend can only
 * send from a domain it has verified, so from stays on the shared
 * onboarding@resend.dev sender while replying still reaches them.
 */
export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: a real visitor never sees this field, bots fill it in.
  if (formData.get("company")) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !subject || !message) {
    return { status: "error", message: "Please fill in every field." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "That email address doesn't look right." };
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    subject.length > MAX.subject ||
    message.length > MAX.message
  ) {
    return { status: "error", message: "That message is too long to send." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact email.");
    return {
      status: "error",
      message: `Sending isn't configured yet. Please email me directly at ${site.email}.`,
    };
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [site.email],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `${message}\n\n— ${name} <${email}>`,
      html: `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>
             <hr>
             <p>— ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>`,
    });

    if (error) {
      console.error("Resend rejected the contact email:", error);
      return {
        status: "error",
        message: `Sorry, that didn't go through. You can reach me at ${site.email}.`,
      };
    }

    return { status: "success", message: "Thanks! Your message has been sent." };
  } catch (cause) {
    console.error("Failed to send contact email:", cause);
    return {
      status: "error",
      message: `Sorry, that didn't go through. You can reach me at ${site.email}.`,
    };
  }
}
