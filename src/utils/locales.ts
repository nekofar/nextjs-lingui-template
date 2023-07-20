import linguiConfig from '@/../lingui.config'
import { i18n, Messages } from '@lingui/core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export type Locale = (typeof linguiConfig.locales)[number]

export const defaultLocale: Locale = linguiConfig.sourceLocale as Locale

export const availableLocales: Locale[] = linguiConfig.locales as Locale[]

export async function loadCatalog(locale: Locale): Promise<object> {
    try {
        const catalog = await import( `@lingui/loader!../locales/${locale}/messages.po` )
        return catalog.messages
    } catch (e) {
        console.error(`Could not load translations for locale ${locale}`, e)
        return {}
    }
}

export function useLinguiInit(messages: Messages) {
    const router = useRouter()
    const locale = router.query.locale as string || defaultLocale
    const isClient = typeof window !== 'undefined'

    if (!isClient && locale !== i18n.locale) {
        // there is single instance of i18n on the server
        // note: on the server, we could have an instance of i18n per supported locale
        // to avoid calling loadAndActivate for (worst case) each request, but right now that's what we do
        i18n.loadAndActivate({ locale, messages })
    }
    if (isClient && i18n.locale === undefined) {
        // first client render
        i18n.loadAndActivate({ locale, messages })
    }

    useEffect(() => {
        const localeDidChange = locale !== i18n.locale
        if (localeDidChange) {
            i18n.loadAndActivate({ locale, messages })
        }
    }, [locale, messages])

    return i18n
}
