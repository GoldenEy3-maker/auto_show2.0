import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import { setStaticCls } from '@/lib/setCls'
import Head from 'next/head'
import { ReactNode } from 'react'

interface IMainLayoutProps {
  children: ReactNode
  title?: string
}

export default function MainLayout({ children, title }: IMainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={setStaticCls('wrapper')}>
        <Header />
        <div className='page-content'>
          <Sidebar />
          <div className='page-content__wrapper _container'>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  )
}