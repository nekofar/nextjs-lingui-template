import linguiConfig from '@/../lingui.config'

export type Locale = (typeof linguiConfig.locales)[number]

export const defaultLocale: Locale = linguiConfig.sourceLocale as Locale

export const availableLocales: Locale[] = linguiConfig.locales as Locale[]

export async function loadCatalog(locale: Locale): Promise<object> {
  try {
    const catalog = await import(
      `@lingui/loader!../locales/${locale}/messages.po`
    )
    return catalog.messages
  } catch (e) {
    console.error(`Could not load translations for locale ${locale}`, e)
    return {}
  }
}
