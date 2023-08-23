/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-organize-attributes',
    'prettier-plugin-jsdoc',
    'prettier-plugin-tailwindcss',
  ],
  tailwindFunctions: ['clsx', 'clsxm'],
}
