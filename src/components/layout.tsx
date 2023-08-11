import { vazirmatn } from '@/utils/fonts'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className={vazirmatn.className}>{children}</main>
    </>
  )
}

export default Layout
