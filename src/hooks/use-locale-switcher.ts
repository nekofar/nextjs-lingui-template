import {useLocale} from '@/hooks/use-locale'
import {Locale} from '@/utils/locales'
import {useRouter} from 'next/router'
import {useCallback} from 'react'

export function useLocaleSwitcher() {
  const router = useRouter()
  const locale = useLocale()

  const changeLocale = useCallback(
    async (nextLocale: Locale) => {
      if (!nextLocale || nextLocale === locale) {
        return
      }

      let pathName = router.pathname
      Object.keys(router.query).forEach((k) => {
        if (k === 'locale') {
          pathName = pathName.replace(`[${k}]`, nextLocale)
          return
        }
        pathName = pathName.replace(`[${k}]`, <string>router.query[k])
      })

      // languageDetector.cache?.(nextLocale, ['cookie', 'localStorage'])

      await router.replace(pathName)
    },
    [locale, router],
  )

  return {
    locale,
    changeLocale,
  }
}
