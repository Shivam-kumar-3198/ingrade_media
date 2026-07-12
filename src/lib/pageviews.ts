import {
  addDoc,
  collection,
  getCountFromServer,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import type { ClientLeadMetadata } from "@/lib/lead-metadata";

export interface Pageview {
  id: string;
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
  country: string;
  createdAt: Timestamp | null;
}

export function trackPageview(metadata: ClientLeadMetadata, country: string) {
  return addDoc(collection(db, "pageviews"), {
    page: metadata.page,
    referrer: metadata.referrer,
    utmSource: metadata.utmSource,
    utmMedium: metadata.utmMedium,
    utmCampaign: metadata.utmCampaign,
    utmTerm: metadata.utmTerm,
    utmContent: metadata.utmContent,
    userAgent: metadata.userAgent,
    language: metadata.language,
    timezone: metadata.timezone,
    screen: metadata.screen,
    country,
    createdAt: serverTimestamp(),
  });
}

export function subscribeToRecentPageviews(
  onData: (views: Pageview[]) => void,
  onError: (error: Error) => void,
  count = 100
) {
  const q = query(collection(db, "pageviews"), orderBy("createdAt", "desc"), limit(count));
  return onSnapshot(
    q,
    (snapshot) => {
      const views = snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...(docSnap.data() as Omit<Pageview, "id">) }));
      onData(views);
    },
    onError
  );
}

export async function getTotalPageviewCount(): Promise<number> {
  const snapshot = await getCountFromServer(collection(db, "pageviews"));
  return snapshot.data().count;
}
