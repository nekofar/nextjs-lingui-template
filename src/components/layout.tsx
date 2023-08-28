import { vazirmatn } from '@/styles/fonts'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${vazirmatn.style.fontFamily};
        }
      `}</style>
      <main>{children}</main>
    </>
  )
}

export default Layout
