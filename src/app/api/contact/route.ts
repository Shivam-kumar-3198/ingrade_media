import { NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { z } from "zod";

import { contactFormSchema } from "@/lib/validations/contact";
import { db } from "@/lib/firebase";

const leadRequestSchema = contactFormSchema.extend({
  page: z.string().optional().default(""),
  referrer: z.string().optional().default(""),
  utmSource: z.string().optional().default(""),
  utmMedium: z.string().optional().default(""),
  utmCampaign: z.string().optional().default(""),
  utmTerm: z.string().optional().default(""),
  utmContent: z.string().optional().default(""),
  userAgent: z.string().optional().default(""),
  language: z.string().optional().default(""),
  timezone: z.string().optional().default(""),
  screen: z.string().optional().default(""),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = leadRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  // Honeypot tripped — pretend success so bots don't learn the field is checked.
  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : request.headers.get("x-real-ip") ?? "";
  const geoCountry = request.headers.get("x-vercel-ip-country") ?? "";
  const geoCity = request.headers.get("x-vercel-ip-city") ?? "";

  try {
    await addDoc(collection(db, "leads"), {
      name: parsed.data.name,
      email: parsed.data.email,
      // Firestore rules reject an empty phone string, so only store it when given.
      ...(parsed.data.phone ? { phone: parsed.data.phone } : {}),
      company: parsed.data.company,
      website: parsed.data.website,
      country: parsed.data.country,
      budget: parsed.data.budget,
      services: parsed.data.services,
      message: parsed.data.message,
      source: "contact-form",
      status: "new",
      createdAt: serverTimestamp(),
      page: parsed.data.page,
      referrer: parsed.data.referrer,
      utmSource: parsed.data.utmSource,
      utmMedium: parsed.data.utmMedium,
      utmCampaign: parsed.data.utmCampaign,
      utmTerm: parsed.data.utmTerm,
      utmContent: parsed.data.utmContent,
      userAgent: parsed.data.userAgent,
      language: parsed.data.language,
      timezone: parsed.data.timezone,
      screen: parsed.data.screen,
      ip,
      geoCountry,
      geoCity,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to save lead to Firestore:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
