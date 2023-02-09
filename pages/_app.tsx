import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'

import { AnimatePresence } from 'framer-motion'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'

import { SidebarContextProvider } from '@/context/SidebarContext'

import { setStaticCls } from '@/lib/setCls'

import '@/styles/globals.scss'

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarContextProvider>
      <div className={setStaticCls('wrapper', montserrat.className)}>
        {/* <AnimatePresence initial={false}> */}
          <Header />
          <div className='page-content'>
            <Sidebar />
            <Component {...pageProps} />
          </div>
          <Footer />
        {/* </AnimatePresence> */}
      </div>
    </SidebarContextProvider>
  )
}
