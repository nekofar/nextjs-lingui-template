import {useLinguiInit} from '@/hooks/use-lingui-init'
import '@/styles/globals.css'
import {i18n} from '@lingui/core'
import {I18nProvider} from '@lingui/react'
import type {AppProps} from 'next/app'

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
