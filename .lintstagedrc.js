// https://nextjs.org/docs/pages/building-your-application/configuring/eslint
const path = require('path')

function eslint(/** @type {string[]} */filenames) {
  const current = process.cwd()
  const target = filenames.map(f => path.relative(current, f)).join(' ')
  // console.log(target)
  return `eslint --fix ${target}`
}

module.exports = {
  '**/*.{js,jsx,ts,tsx}': [eslint],
}
