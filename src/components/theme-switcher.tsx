import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { useIsMounted } from 'usehooks-ts'

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

const { Dark, Light } = Theme

export function ThemeSwitcher() {
  const isMounted = useIsMounted()
  const [theme, setTheme] = useState<Theme>(Light)

  const isDarkMode = theme === Dark

  useEffect(() => {
    document.documentElement.classList.remove(Dark, Light)
    document.documentElement.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Light ? Dark : Light))
  }

  if (!isMounted) return null

  return (
    <div className="relative inline-block ltr:text-left rtl:text-right">
      <button
        onClick={toggleTheme}
        className="flex items-center rounded-full text-gray-900 dark:text-white"
      >
        {isDarkMode ? (
          <SunIcon className="h-7 w-7" />
        ) : (
          <MoonIcon className="h-7 w-7" />
        )}
        <span className="sr-only">
          {isDarkMode ? t`Switch to light theme` : t`Switch to dark theme`}
        </span>
      </button>
    </div>
  )
}
