/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  distDir: '.next',
  experimental: {
    serverActions: {
      allowedOrigins: ['*']
    },
    optimizePackageImports: ['@prisma/client']
  },
  env: {
    PORT: '8080'
  },
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false
}

module.exports = nextConfig 