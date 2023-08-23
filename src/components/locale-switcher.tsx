import { useLocaleSwitcher } from '@/hooks/use-locale-switcher'
import { clsxm } from '@/utils'
import { availableLocales, getLocaleName } from '@/utils/locales'
import { Menu, Transition } from '@headlessui/react'
import { LanguageIcon } from '@heroicons/react/24/outline'
import { Trans } from '@lingui/macro'
import clsx from 'clsx'
import { Fragment } from 'react'

type LocalSwitcherProps = { className?: string }

export default function LocaleSwitcher({ className }: LocalSwitcherProps) {
  const { changeLocale } = useLocaleSwitcher()

  return (
    <Menu
      as="div"
      className={clsxm(
        'relative inline-block ltr:text-left rtl:text-right',
        className,
      )}
    >
      <div>
        <Menu.Button className="flex items-center">
          <span className="sr-only">
            <Trans>Open options</Trans>
          </span>
          <LanguageIcon className="h-7 w-7" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-32 rounded-md border border-gray-900 ring-1 ring-black/5 focus:outline-none ltr:right-0 ltr:origin-top-right rtl:left-0 rtl:origin-top-left dark:border-white">
          <div className="py-1">
            {availableLocales.map((locale) => (
              <Menu.Item key={locale}>
                {({ active }) => (
                  <div
                    role="button"
                    className={clsx(
                      active
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700 dark:text-white',
                      'block cursor-pointer px-4 py-2 text-sm',
                    )}
                    onClick={() => {
                      changeLocale(locale)
                    }}
                  >
                    {getLocaleName(locale)}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
