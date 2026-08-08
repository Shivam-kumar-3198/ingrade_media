/**
 * Real (royalty-free, Unsplash-hosted) placeholder photography for clients
 * and office/work scenes. The team itself intentionally does NOT use photos
 * (see InitialsAvatar) since these people aren't real Ingrade Media staff.
 *
 * TODO before launch: every photo here is a stock photo of someone who is
 * NOT an actual client — they stand in for real photography until you have
 * your own. Swap the URLs below for real client/office photos; nothing else
 * in the codebase needs to change since every page reads from here.
 */

import type { ServiceSlug } from "@/lib/data/services";

function unsplash(id: string, params = "w=600&q=80") {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&${params}`;
}

/** Client headshots — keyed by testimonial/case-study client name */
export const clientPhotos: Record<string, string> = {
  "Sarah Kim": unsplash("1573496359142-b8d87734a5a2"),
  "James Whitfield": unsplash("1560250097-0b93528c311a"),
  "Fatima Al-Rashid": unsplash("1531123897727-8f129e1688ce"),
  "Daniel Osei": unsplash("1506794778202-cad84cf45f1d"),
  "Mei Lin Tan": unsplash("1580489944761-15a19d654956"),
  "Claire Bouchard": unsplash("1607746882042-944635dfe10e"),
  "Marcus Reyes": unsplash("1519244703995-f4e0f30006d5"),
};

/** Generic client faces for the hero rating card's avatar cluster (no name attached) */
export const heroClusterPhotos: string[] = [
  unsplash("1500648767791-00dcc994a43e", "w=200&q=80"),
  unsplash("1615109398623-88346a601842", "w=200&q=80"),
  unsplash("1535713875002-d1d0cf377fde", "w=200&q=80"),
  unsplash("1590086782957-93c06ef21604", "w=200&q=80"),
  unsplash("1494790108377-be9c29b29330", "w=200&q=80"),
];

/** Real work/office scenes used as section imagery (not tied to a specific name) */
export const scenePhotos = {
  teamCollaboration: unsplash("1522202176988-66273c2fd55f", "w=1200&q=80"),
  resultsCelebration: unsplash("1600880292203-757bb62b4baf", "w=1200&q=80"),
  teamWorkingTable: unsplash("1521737604893-d14cc237f11d", "w=1200&q=80"),
  strategyMeeting: unsplash("1517245386807-bb43f82c33c4", "w=1200&q=80"),
};

/** One relatable work scene per service, used on the services listing cards */
export const serviceCardPhotos: Record<ServiceSlug, string> = {
  "meta-ads": unsplash("1551650975-87deedd944c3", "w=800&q=80"),
  "google-ads": unsplash("1460925895917-afdab827c52f", "w=800&q=80"),
  "app-development": unsplash("1512941937669-90a1b58e7e9c", "w=800&q=80"),
  "website-development": unsplash("1607799279861-4dd421887fb3", "w=800&q=80"),
  "social-media-management": unsplash("1611926653458-09294b3142bf", "w=800&q=80"),
  "webflow-development": unsplash("1556155092-490a1ba16284", "w=800&q=80"),
  "wordpress-development": unsplash("1571171637578-41bc2dd41cd2", "w=800&q=80"),
};
