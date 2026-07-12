/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ingrademedia.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/thank-you", "/admin", "/admin/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/admin" },
    ],
  },
  // Pages are pre-rendered under /en/... (the default locale segment), but
  // next-intl serves the default locale with no URL prefix ("as-needed").
  // Strip it here so the sitemap advertises the real, visitor-facing URLs.
  transform: async (config, path) => {
    const cleanPath = path.replace(/^\/en(?=\/|$)/, "") || "/";
    return {
      loc: cleanPath,
      changefreq: config.changefreq,
      priority: cleanPath === "/" ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
