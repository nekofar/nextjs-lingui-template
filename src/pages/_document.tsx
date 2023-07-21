import {defaultLocale, getLocaleDirection, Locale} from '@/utils/locales'
import {Head, Html, Main, NextScript} from 'next/document'
import {DocumentProps} from 'postcss'

type Props = DocumentProps & { __NEXT_DATA__: { query: { locale: string } } }

export default function Document(props: Props) {
  const { __NEXT_DATA__: nextData } = props
  const locale = nextData?.query?.locale || defaultLocale

  const language = locale as Locale
  const direction = getLocaleDirection(language)

  return (
    <Html lang={language} dir={direction}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
