/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
}

// https://velite.js.org/guide/with-nextjs
class VeliteWebpackPlugin {
  static started = false
  constructor(/** @type {import('velite').Options} */ options = {}) {
    this.options = options
  }

  apply(/** @type {import('webpack').Compiler} */ compiler) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      this.options.watch = this.options.watch ?? dev
      this.options.clean = this.options.clean ?? !dev
      const { build } = await import('velite')
      await build(this.options)
    })
  }
}
