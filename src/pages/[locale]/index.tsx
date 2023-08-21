import { LocaleSwitcher, ThemeSwitcher } from '@/components'
import { availableLocales, loadCatalog } from '@/utils'
import { Trans, t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'

export default function Home() {
  const { i18n } = useLingui()

  return (
    <>
      <Head>
        <title>
          {t(i18n)`Next.js & Lingui: Building a Multi-Lingual Website`}
        </title>
      </Head>
      <div
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <section className="mt-16 py-8">
          <div className="container">
            <div className="mx-auto max-w-xl">
              <h1 className="mb-4 text-center text-4xl font-bold leading-tight text-gray-900 dark:text-white">
                <Trans>Building a Multi-Lingual Website</Trans>
              </h1>
              <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-300">
                <Trans>
                  Welcome to our Next.js and Lingui demo site! Discover the
                  power of combining Next.js, a powerful React framework for
                  building server-side rendered applications, with Lingui, the
                  ultimate solution for multi-lingual support in your web
                  projects.
                </Trans>
              </p>
              <div className="mb-4 text-center ">
                <LocaleSwitcher />
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
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
