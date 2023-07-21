import {availableLocales, loadCatalog} from '@/utils/locales'
import {Trans} from '@lingui/macro'
import {GetStaticPropsContext} from 'next'
import {Inter} from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <ul>
          <li>
            <Link href="/ar" locale="ar">
              Arabic: <Trans>Arabic</Trans>
            </Link>
          </li>
          <li>
            <Link href="/en" locale="en">
              English: <Trans>English</Trans>
            </Link>
          </li>
          <li>
            <Link href="/fa" locale="fa">
              Farsi: <Trans>Farsi</Trans>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ locale: string }>,
) {
  return {
    props: { translation: await loadCatalog(context.params!.locale!) },
  }
}

export async function getStaticPaths() {
  return {
    paths: availableLocales.map((locale) => ({ params: { locale } })),
    fallback: false,
  }
}
