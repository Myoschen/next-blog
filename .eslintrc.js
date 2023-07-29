/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['prettier', 'tailwindcss'],
};
