const withRoutes = require("nextjs-routes/config")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', "es-MX"],
    defaultLocale: 'es-MX',
  }
}

module.exports = withRoutes(nextConfig)
