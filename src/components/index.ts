import dynamic from 'next/dynamic'

export { default as Layout } from './layout'

const LocaleSwitcher = dynamic(() => import('./locale-switcher'), {
  ssr: false,
})

const ThemeSwitcher = dynamic(() => import('./theme-switcher'), {
  ssr: false,
})

export { LocaleSwitcher, ThemeSwitcher }
