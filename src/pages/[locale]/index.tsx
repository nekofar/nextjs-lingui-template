import {LocaleSwitcher} from '@/components/locale-switcher'
import {availableLocales, loadCatalog} from '@/utils/locales'
import {GetStaticPropsContext} from 'next'
import {Vazirmatn} from 'next/font/google'
import Head from 'next/head'
import {t, Trans} from "@lingui/macro";
import {useLingui} from "@lingui/react";

const vazirmatn = Vazirmatn({ subsets: ['latin', 'arabic'] })

export default function Home() {
  const { i18n } = useLingui()

  return (
    <>
      <Head>
        <title>
          {t(i18n)`Next.js & Lingui: Building a Multi-Lingual Website`}
        </title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${vazirmatn.className}`}
      >
        <section className="mt-16 py-8">
          <div className="container">
            <div className="mx-auto max-w-xl">
              <h1 className="mb-4 text-center text-4xl font-bold leading-tight text-gray-100">
                <Trans>Building a Multi-Lingual Website</Trans>
              </h1>
              <p className="mb-8 text-center text-lg text-gray-200">
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
              </div>
            </div>
          </div>
        </section>
      </main>
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
