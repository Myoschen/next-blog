// https://nextjs.org/docs/pages/building-your-application/configuring/eslint
const path = require('path')

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    buildEslintCommand,
  ],
}
