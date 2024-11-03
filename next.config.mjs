import { withContentCollections } from '@content-collections/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  experimental: { typedRoutes: true },
}

export default withContentCollections(nextConfig)
