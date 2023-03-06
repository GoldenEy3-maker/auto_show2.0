import { Inter } from "@next/font/google"
import type { AppProps } from "next/app"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

import { SidebarContextProvider } from "@/context/SidebarContext"

import { setStaticCls } from "@/utils/setCls"

import "@/styles/globals.scss"
import { QueryClient, QueryClientProvider } from "react-query"

const inter = Inter({ subsets: ["cyrillic", "latin"], weight: "400" })
const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}
