import { createContext, useContext, useState } from 'react'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

interface ISidebarContextProviderProps {
  children: ReactNode
}

type TSidebarContext = [boolean, Dispatch<SetStateAction<boolean>>] | undefined

const SidebarContext = createContext<TSidebarContext>(undefined)

export function SidebarContextProvider({
  children,
}: ISidebarContextProviderProps) {
  const sidebarContextState = useState(true)

  return (
    <SidebarContext.Provider value={sidebarContextState}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebarContext() {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error(
      'useSidebarContext must be used within SidebarContextProvider'
    )
  }

  return context
}
