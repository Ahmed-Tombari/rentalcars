/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

/****

require("dotenv").config();
const nextConfig = {
    reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "i.calameoassets.com"],
  },
  serverRuntimeConfig: {
    mySecret: "secret",
    port: process.env.NEXT_PUBLIC_PORT || 3000,
  },
  publicRuntimeConfig: {
    staticFolder: "/static",
  },
};

module.exports = nextConfig;
 */