import { FlatCompat } from '@eslint/eslintrc'
import stylistic from '@stylistic/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import pluginNext from '@next/eslint-plugin-next'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginImportSort from 'eslint-plugin-simple-import-sort'
import pluginUnusedImports from 'eslint-plugin-unused-imports'

const compat = new FlatCompat()

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  stylistic.configs.customize({
    pluginName: 'style',
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
  }),
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    plugins: {
      'react': pluginReact,
      'react-hooks': pluginReactHooks,
      'next': pluginNext,
    },
    rules: {
      'style/jsx-curly-brace-presence': ['error', 'always'],
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  {
    plugins: {
      'import-sort': pluginImportSort,
    },
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
    ignores: ['eslint.config.mjs'],
  },
  {
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
  },
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
      },
    },
  }),
  {
    ignores: ['./.next/*'],
  },
]
