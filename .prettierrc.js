/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  singleQuote: true,
  bracketSpacing: false,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<BUILT_IN_MODULES>',
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/types/(.*)$',
    '^@/constants/(.*)$',
    '^@/utils/(.*)$',
    '^@/hooks/(.*)$',
    '^@/store/(.*)$',
    '^@/components/(.*)$',
    '^@/content',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.1.6',
};
