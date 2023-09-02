import { clsxm } from '@/utils'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

const { Dark, Light } = Theme

type ThemeSwitcherProps = { className?: string }

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const [localTheme, setLocalTheme] = useLocalStorage<Theme>('theme', Light)
  const [theme, setTheme] = useState<Theme>(localTheme!)

  const isDarkMode = theme === Dark

  useEffect(() => {
    let classList = document.documentElement.classList

    classList.remove(Dark, Light)
    classList.add(theme!)
    setLocalTheme(theme)
  }, [setLocalTheme, theme])

  const toggleTheme = () => {
    console.log(theme)
    setTheme((prevTheme) => {
      console.log(prevTheme)
      return prevTheme === Light ? Dark : Light
    })
    console.log(theme)
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
