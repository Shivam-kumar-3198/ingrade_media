export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Mobile App Development", href: "/services/app-development" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Social Media Management", href: "/services/social-media-management" },
  { label: "Webflow Development", href: "/services/webflow-development" },
  { label: "WordPress Development", href: "/services/wordpress-development" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];
