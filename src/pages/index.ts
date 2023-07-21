import {defaultLocale, loadCatalog} from '@/utils/locales'
import {useRouter} from 'next/router'
import {useEffect} from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/${defaultLocale}`)
  }, [router])

  return null
}

export const getStaticProps = async () => {
  return {
    props: { translation: await loadCatalog(defaultLocale) },
  }
}
