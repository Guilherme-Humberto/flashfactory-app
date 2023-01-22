module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'images.pexels.com',
      'adminex.nyc3.digitaloceanspaces.com'
    ]
  },
  env: {
    STRAPI_API_URL_GQL: process.env.STRAPI_API_URL_GQL,
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN
  }
}
