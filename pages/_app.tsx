import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'

import { SidebarContextProvider } from '@/context/SidebarContext'

import { setStaticCls } from '@/utils/setCls'

import '@/styles/globals.scss'

const inter = Inter({ subsets: ['cyrillic', 'latin'], weight: '400' })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarContextProvider>
      <div className={setStaticCls('wrapper', inter.className)}>
        <Header />
        <div className='page-content'>
          <Sidebar />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </SidebarContextProvider>
  )
}
