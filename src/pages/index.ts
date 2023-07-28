import { getLocale, loadCatalog } from '@/utils/locales'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/${getLocale()}`)
  }, [router])

  return null
}

export const getStaticProps = async () => {
  return {
    props: { translation: await loadCatalog(getLocale()) },
  }
}
