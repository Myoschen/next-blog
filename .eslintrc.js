const stylistic = require('@stylistic/eslint-plugin')

const customized = stylistic.configs.customize({
  flat: false,
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: false,
})

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended'],
  plugins: ['@stylistic', 'simple-import-sort'],
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
    },
  },
  rules: {
    // stylistic
    ...customized.rules,
    '@stylistic/jsx-curly-brace-presence': ['error', 'always'],

    // sort imports
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': ['error', {
      groups: [
        ['^\\u0000'],
        ['^react', '^next'],
        ['^@/.*'],
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
      ],
    }],
  },
}
