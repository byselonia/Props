/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    serverActions: {
      allowedOrigins: ['*']
    }
  },
  env: {
    PORT: '8080'
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Set a reasonable timeout for static generation
  staticPageGenerationTimeout: 120,
  // Disable image optimization
  images: {
    unoptimized: true
  },
  // Ensure proper server configuration
  server: {
    port: 8080,
    host: '0.0.0.0'
  }
}

module.exports = nextConfig 