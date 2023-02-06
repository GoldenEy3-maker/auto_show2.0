import type { AppProps } from 'next/app'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import { SidebarContextProvider } from '@/context/SidebarContext'
import '@/styles/globals.scss'
import { AnimatePresence } from 'framer-motion'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <SidebarContextProvider>
      <AnimatePresence mode='wait' initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </SidebarContextProvider>
  )
}
