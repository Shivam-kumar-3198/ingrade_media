export interface ClientLeadMetadata {
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
}

const EMPTY_METADATA: ClientLeadMetadata = {
  page: "",
  referrer: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmTerm: "",
  utmContent: "",
  userAgent: "",
  language: "",
  timezone: "",
  screen: "",
};

/**
 * Reads UTM params, referrer, and device info from the current browser
 * context. Shared by the contact form (captured once at submit) and the
 * site-wide pageview tracker (captured on every route change).
 */
export function getClientLeadMetadata(): ClientLeadMetadata {
  if (typeof window === "undefined") return EMPTY_METADATA;

  const params = new URLSearchParams(window.location.search);
  let timezone = "";
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  } catch {
    timezone = "";
  }

  return {
    page: window.location.pathname,
    referrer: document.referrer || "",
    utmSource: params.get("utm_source") ?? "",
    utmMedium: params.get("utm_medium") ?? "",
    utmCampaign: params.get("utm_campaign") ?? "",
    utmTerm: params.get("utm_term") ?? "",
    utmContent: params.get("utm_content") ?? "",
    userAgent: window.navigator.userAgent || "",
    language: window.navigator.language || "",
    timezone,
    screen: `${window.screen.width}x${window.screen.height}`,
  };
}
