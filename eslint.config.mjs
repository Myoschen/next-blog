import { FlatCompat } from '@eslint/eslintrc'
import pluginNext from '@next/eslint-plugin-next'
import stylistic from '@stylistic/eslint-plugin'
import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginImportSort from 'eslint-plugin-simple-import-sort'
import pluginUnusedImports from 'eslint-plugin-unused-imports'

const compat = new FlatCompat()

/** @type {import('eslint').Linter.FlatConfig} */
const style = stylistic.configs.customize({
  indent: 2,
  quotes: 'single',
  semi: false,
  jsx: true,
  braceStyle: '1tbs',
})

/** @type {import('eslint').Linter.FlatConfig} */
const next = {
  files: ['src/**/*.{ts,tsx}'],
  languageOptions: {
    parser: parserTs,
    parserOptions: {
      ecmaVersion: 'latest',
      ecmaFeatures: { jsx: true },
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': pluginTs,
    'react': pluginReact,
    'react-hooks': pluginReactHooks,
    '@next/next': pluginNext,
  },
  rules: {
    ...pluginTs.configs['eslint-recommended'].overrides[0].rules,
    ...pluginTs.configs['recommended'].rules,
    ...pluginReact.configs['jsx-runtime'].rules,
    ...pluginReactHooks.configs.recommended.rules,
    ...pluginNext.configs.recommended.rules,
    ...pluginNext.configs['core-web-vitals'].rules,
    '@typescript-eslint/no-unused-vars': 'off',
    '@stylistic/jsx-curly-brace-presence': ['error', 'always'],
  },
}

const tailwindcss = compat.config({
  extends: ['plugin:tailwindcss/recommended'],
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
    },
  },
})

/** @type {import('eslint').Linter.FlatConfig} */
const sort = {
  plugins: { 'import-sort': pluginImportSort },
  rules: {
    'import-sort/exports': 'error',
    'import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^next', '@?\\w'],
          ['^~/.*'],
          ['^@/.*'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
}

/** @type {import('eslint').Linter.FlatConfig} */
const unused = {
  plugins: { 'unused-imports': pluginUnusedImports },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
}

/** @type {import('eslint').Linter.FlatConfig} */
const ignores = {
  ignores: ['./.next/*'],
}

export default [style, next, ...tailwindcss, sort, unused, ignores]