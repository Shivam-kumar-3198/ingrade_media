import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  // Honeypot tripped — pretend success so bots don't learn the field is checked.
  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  // TODO: send this to your CRM/email (Resend, SMTP, HubSpot, etc). See CONTACT_FORM_ENDPOINT / RESEND_API_KEY in .env.example.
  // eslint-disable-next-line no-console
  console.log("New contact form submission:", {
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company,
    country: parsed.data.country,
    budget: parsed.data.budget,
    services: parsed.data.services,
  });

  return NextResponse.json({ ok: true });
}
