import { collection, doc, onSnapshot, orderBy, query, updateDoc, type Timestamp } from "firebase/firestore";

import { db } from "@/lib/firebase";

export const LEAD_STATUSES = ["new", "contacted", "won", "lost"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  website: string;
  country: string;
  budget: string;
  services: string[];
  message: string;
  status: LeadStatus;
  createdAt: Timestamp | null;
  page: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  userAgent: string;
  language: string;
  timezone: string;
  screen: string;
  ip: string;
  geoCountry: string;
  geoCity: string;
}

export function subscribeToLeads(onData: (leads: Lead[]) => void, onError: (error: Error) => void) {
  const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
  return onSnapshot(
    q,
    (snapshot) => {
      const leads = snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...(docSnap.data() as Omit<Lead, "id">) }));
      onData(leads);
    },
    onError
  );
}

export function updateLeadStatus(id: string, status: LeadStatus) {
  return updateDoc(doc(db, "leads", id), { status });
}
