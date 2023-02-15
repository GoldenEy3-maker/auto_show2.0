import { createContext, useContext, useState } from 'react'

import { generateContextError } from '@/utils/contextError'
import type { Dispatch, ReactNode, SetStateAction } from 'react'

interface SidebarContextProviderProps {
  children: ReactNode
}

type SidebarContextType =
  | [boolean, Dispatch<SetStateAction<boolean>>]
  | undefined

const SidebarContext = createContext<SidebarContextType>(undefined)

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  const sidebarContextState = useState(true)

  return (
    <SidebarContext.Provider value={sidebarContextState}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebarContext() {
  const context = useContext(SidebarContext)

  if (!context)
    throw generateContextError('useSidebarContext', 'SidebarContextProvider')

  return context
}
