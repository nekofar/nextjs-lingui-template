import { getLocale, getLocaleDirection, Locale } from '@/utils/locales'
import { Head, Html, Main, NextScript } from 'next/document'
import { DocumentProps } from 'postcss'
import { ParsedUrlQuery } from 'querystring'

type Props = DocumentProps & { __NEXT_DATA__: { query: ParsedUrlQuery } }

export default function Document(props: Props) {
  const { __NEXT_DATA__: nextData } = props
  const locale = getLocale(nextData.query)

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
