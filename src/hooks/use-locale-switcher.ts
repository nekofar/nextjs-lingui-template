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

      const pathName = Object.keys(router.query).reduce(
        (currentPathName, k) => {
          if (k === 'locale') {
            return currentPathName.replace(`[${k}]`, nextLocale)
          }
          return currentPathName.replace(`[${k}]`, String(router.query[k]))
        },
        router.pathname,
      )

      router.replace(pathName)
    },
    [locale, router],
  )

  return {
    locale,
    changeLocale,
  }
}
