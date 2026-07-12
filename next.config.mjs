import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    mdxRs: false,
  },
  async headers() {
    return [
      {
        // Lets Firebase's signInWithPopup (used on /admin) poll the popup
        // window's closed state — without this, Chrome silently blocks
        // that check and logs a COOP warning. Only governs window-to-window
        // relationships, so it doesn't affect image/script/iframe loading
        // elsewhere on the site.
        source: "/:path*",
        headers: [{ key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" }],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
