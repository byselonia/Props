/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  distDir: '.next',
  experimental: {
    serverActions: {
      allowedOrigins: ['*']
    }
  },
  env: {
    PORT: '8080'
  }
}

module.exports = nextConfig 