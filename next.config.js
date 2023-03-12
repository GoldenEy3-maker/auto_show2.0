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
    APP_URL: process.env.APP_URL,
    NODE_ENV: process.env.NODE_ENV
  }
}

module.exports = nextConfig
