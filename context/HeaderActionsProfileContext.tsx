import { Cities, Langs, Themes } from "@/typescript/enums"
import { generateContextError } from "@/utils/contextError"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from "react"

interface HeaderActionsProfileContextProviderProps {
  children: ReactNode
}

interface HeaderActionsProfileMenusState {
  theme: Themes
  lang: Langs
  city: Cities
}

type HeaderActionsProfileContextType =
  | [
      HeaderActionsProfileMenusState,
      Dispatch<SetStateAction<HeaderActionsProfileMenusState>>
    ]
  | undefined

const HeaderActionsProfileContext =
  createContext<HeaderActionsProfileContextType>(undefined)

export function HeaderActionsProfileContextProvider({
  children,
}: HeaderActionsProfileContextProviderProps) {
  const [headerActionsProfileMenusState, setHeaderActionsProfileMenusState] =
    useState<HeaderActionsProfileMenusState>({
      theme: Themes.System,
      lang: Langs.En,
      city: Cities.Moscow,
    })

  return (
    <HeaderActionsProfileContext.Provider
      value={[
        headerActionsProfileMenusState,
        setHeaderActionsProfileMenusState,
      ]}
    >
      {children}
    </HeaderActionsProfileContext.Provider>
  )
}

export function useHeaderActionsProfileContext() {
  const context = useContext(HeaderActionsProfileContext)

  if (!context)
    throw generateContextError(
      "useHeaderActionsProfileContext",
      "HeaderActionsProfileContextProvider"
    )

  return context
}
