import linguiConfig from '@/../lingui.config'
import langs from 'langs'

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

export function getLocaleDirection(locale: Locale) {
  return ['ar', 'he', 'fa'].includes(locale) ? 'rtl' : 'ltr'
}

export function getLocaleName(locale: Locale) {
  return langs.where(1, locale)!.local
}
