import {defaultLocale, Locale} from "@/utils/locales";
import {useRouter} from "next/router";

export function useLocale(): Locale {
    const router = useRouter()
    return (router.query.locale as Locale) || defaultLocale
}
