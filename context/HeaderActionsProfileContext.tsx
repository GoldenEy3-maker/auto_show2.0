import { UserCityState } from '@/components/Header/Actions/Profile/HeaderActionsProfileCity'
import { DocumentLangState } from '@/components/Header/Actions/Profile/HeaderActionsProfileLang'
import { SiteThemeState } from '@/components/Header/Actions/Profile/HeaderActionsProfileTheme'
import { LocalStorageNames } from '@/typescript/enums'
import { generateContextError } from '@/utils/contextError'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'

interface HeaderActionsProfileContextProviderProps {
  children: ReactNode
}

interface HeaderActionsProfileMenusState {
  siteTheme: SiteThemeState
  documentLang: DocumentLangState
  userCity: UserCityState
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
      siteTheme: 'system-theme',
      documentLang: 'ru',
      userCity: 'Москва',
    })

  useEffect(() => {
    const storedSiteTheme = localStorage.getItem(
      LocalStorageNames.SiteTheme
    ) as SiteThemeState
    const storedDocumentLang = localStorage.getItem(
      LocalStorageNames.DocumentLang
    ) as DocumentLangState
    const storedUserCity = localStorage.getItem(
      LocalStorageNames.UserCity
    ) as UserCityState

    setHeaderActionsProfileMenusState((prev) => {
      let state = prev

      if (storedSiteTheme) state = { ...state, siteTheme: storedSiteTheme }

      if (storedDocumentLang) {
        document.documentElement.lang = storedDocumentLang

        state = { ...state, documentLang: storedDocumentLang }
      }

      if (storedUserCity) state = { ...state, userCity: storedUserCity }

      return state
    })
  }, [])

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
      'useHeaderActionsProfileContext',
      'HeaderActionsProfileContextProvider'
    )

  return context
}
