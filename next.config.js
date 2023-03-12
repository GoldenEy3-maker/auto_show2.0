/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false
  },
  images: {
    domains: ["via.placeholder.com"]
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    APP_URL: process.env.APP_URL,
    VERCEL_URL: process.env.VERSEL_URL,
    NODE_ENV: process.env.NODE_ENV
  }
}

module.exports = nextConfig
