import { Inter } from "@next/font/google"
import type { AppProps, AppType } from "next/app"
import { trpc } from "@/utils/trpc"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

import { SidebarContextProvider } from "@/context/SidebarContext"

import { setStaticCls } from "@/utils/setCls"

import "@/styles/globals.scss"

const inter = Inter({ subsets: ["cyrillic", "latin"], weight: "400" })

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SidebarContextProvider>
      <div className={setStaticCls("wrapper", inter.className)}>
        <Header/>
        <div className="page-content">
          <Sidebar/>
          <Component {...pageProps} />
        </div>
        <Footer/>
      </div>
    </SidebarContextProvider>
  )
}

export default trpc.withTRPC(MyApp)