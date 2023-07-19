import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {defaultLocale, loadCatalog} from "@/utils/locales";

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        router.replace(`/${defaultLocale}`)
    }, [router])

    return null
}

export const getStaticProps = async () => {
    const translation = await loadCatalog(defaultLocale)
    return {
        props: {
            translation
        }
    }
}
