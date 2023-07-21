/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ['ar', 'en', 'fa'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['<rootDir>/src'],
      exclude: ['**/node_modules/**', '**/.next/**', '**/out/**'],
    },
  ],
  format: 'po',
}
