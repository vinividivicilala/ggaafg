const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);

// For OG Image Generation

// const { get } = require("@vercel/edge-config");

// redirects() {
//   try {
//     return get("redirects");
//   } catch {
//     return [];
//   }
// },
// headers() {
//   return [
//     {
//       source: "/(.*)",
//       headers: securityHeaders,
//     },
//   ];
// },
