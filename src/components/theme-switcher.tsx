import { clsxm } from '@/utils'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

const { Dark, Light } = Theme

type ThemeSwitcherProps = { className?: string }

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<Theme>(Light)

  const isDarkMode = theme === Dark

  useEffect(() => {
    document.documentElement.classList.remove(Dark, Light)
    document.documentElement.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Light ? Dark : Light))
  }

  return (
    <div
      className={clsxm(
        'relative inline-block ltr:text-left rtl:text-right',
        className,
      )}
    >
      <button onClick={toggleTheme} className="flex items-center">
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
