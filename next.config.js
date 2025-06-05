/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ['*']
    }
  },
  env: {
    PORT: '8080',
    HOST: '0.0.0.0'
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
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Add trailing slashes to help with routing
  trailingSlash: true,
  // Ensure proper asset prefix
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
  // Add proper headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  output: 'standalone',
}

module.exports = nextConfig 