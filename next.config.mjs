import { build } from 'velite'

/** @see https://velite.js.org/guide/with-nextjs */
class VeliteWebpackPlugin {
  static started = false

  constructor(/** @type {import('velite').Options} */ options = {}) {
    this.options = options
  }

  apply(/** @type {import('webpack').Compiler} */compiler) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      await build({ watch: dev, clean: !dev })
    })
  }
}

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  experimental: { typedRoutes: true },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
}
