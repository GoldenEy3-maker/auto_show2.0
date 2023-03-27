/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["via.placeholder.com"],
  },
  publicRuntimeConfig: {
    APP_URL: process.env.VERCEL_URL ?? process.env.APP_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
  i18n: {
    locales: ["ru-RU", "en-US", "en-GB", "de-DE"],
    defaultLocale: "en-US",
    localeDetection: true,
  },
}

module.exports = nextConfig
