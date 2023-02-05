/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB_AUTH_CLIENT_ID: process.env.GITHUB_AUTH_CLIENT_ID,
    GOOGLE_AUTH_CLIENT_ID: process.env.GOOGLE_AUTH_CLIENT_ID,
    GOOGLE_AUTH_CALLBACK_URL: process.env.GOOGLE_AUTH_CALLBACK_URL
  },
}

module.exports = nextConfig
