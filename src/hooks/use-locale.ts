import { getLocale, Locale } from '@/utils/locales'
import { useRouter } from 'next/router'

export function useLocale(): Locale {
  const router = useRouter()
  return getLocale(router.query)
}
