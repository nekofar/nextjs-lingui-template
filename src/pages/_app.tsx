import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useLinguiInit} from "@/utils/locales";
import {i18n} from "@lingui/core";
import {I18nProvider} from "@lingui/react";

export default function App({ Component, pageProps }: AppProps) {
  useLinguiInit(pageProps.translation)

  return (
      <>
        <I18nProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nProvider>
      </>
  )
}
