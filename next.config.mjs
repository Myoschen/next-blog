import { build } from 'velite'

// // https://velite.js.org/guide/with-nextjs
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
      this.options.watch = this.options.watch ?? dev
      this.options.clean = this.options.clean ?? !dev
      await build(this.options)
    })
  }
}

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  experimental: { typedRoutes: true },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
}
