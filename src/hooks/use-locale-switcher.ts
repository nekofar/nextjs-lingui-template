import { useLocale } from '@/hooks/use-locale'
import { Locale } from '@/utils/locales'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export function useLocaleSwitcher() {
  const router = useRouter()
  const locale = useLocale()

  const changeLocale = useCallback(
    (nextLocale: Locale) => {
      if (!nextLocale || nextLocale === locale) {
        return
      }

      let pathName = router.pathname
      for (const k of Object.keys(router.query)) {
        pathName =
          k === 'locale'
            ? pathName.replace(`[${k}]`, nextLocale)
            : pathName.replace(`[${k}]`, String(router.query[k]))
      }

      router.replace(pathName)
    },
    [locale, router],
  )

  return {
    locale,
    changeLocale,
  }
}
