import { fixupConfigRules } from '@eslint/compat'
import pluginNext from '@next/eslint-plugin-next'
import stylistic from '@stylistic/eslint-plugin'
import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginImportSort from 'eslint-plugin-simple-import-sort'
import pluginTailwind from 'eslint-plugin-tailwindcss'

export default fixupConfigRules([
  // ignores
  {
    ignores: ['node_modules', '.next', '.content-collections'],
  },
  // stylistic
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    braceStyle: '1tbs',
  }),
  // react, next
  {
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
      ...pluginReactHooks.configs['recommended'].rules,
      ...pluginNext.configs['recommended'].rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
    },
  },
  // tailwindcss
  ...pluginTailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
        config: 'tailwind.config.ts',
      },
    },
  },
  // sort imports, exports
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
            ['^./.*', '^~/.*', '^#/.*', '^@/.*'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],
    },
  },
])
