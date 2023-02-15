import { useEffect, useState } from 'react'

import HeaderActionsNotify from './Notify/HeaderActionsNotify'
import HeaderActionsProfile from './Profile/HeaderActionsProfile'

import { HeaderActionsProfileContextProvider } from '@/context/HeaderActionsProfileContext'
import HeaderActionsCart from './Cart/HeaderActionsCart'
import HeaderActionsFavorite from './Favorite/HeaderActionsFavorite'
import styles from './HeaderActions.module.scss'

type HeaderActionsMenuName = 'profile' | 'notify' | 'cart' | 'favorite'

type HeaderActionsMenuState = {
  [k in HeaderActionsMenuName]: boolean
}

export interface HeaderActionsMenuProps {
  state: boolean
  toggleMenuStateHandler: (menu: HeaderActionsMenuName) => void
}

export default function HeaderActions() {
  const [actionsMenuState, setActionsMenuState] =
    useState<HeaderActionsMenuState>({
      profile: false,
      notify: false,
      cart: false,
      favorite: false,
    })

  function closeActionsMenus(exceptionMenu?: HeaderActionsMenuName) {
    setActionsMenuState((prev) => {
      let state = prev

      Object.keys(state).forEach((key) => {
        if (key !== exceptionMenu) state[key as HeaderActionsMenuName] = false
      })

      return { ...state }
    })
  }

  function toggleMenuStateHandler(menu: HeaderActionsMenuName) {
    closeActionsMenus(menu)

    setActionsMenuState((prev) => ({ ...prev, [menu]: !prev[menu] }))
  }

  useEffect(() => {
    function documentClickHandler(event: MouseEvent) {
      if (
        !(event.target as HTMLLIElement).closest('.' + styles.headerActionsItem)
      ) {
        closeActionsMenus()
      }
    }

    document.addEventListener('click', documentClickHandler)

    return () => document.removeEventListener('click', documentClickHandler)
  }, [])

  return (
    <div className={styles.headerActions}>
      <ul className={styles.headerActionsList}>
        <HeaderActionsFavorite
          state={actionsMenuState.favorite}
          toggleMenuStateHandler={toggleMenuStateHandler}
        />
        <HeaderActionsCart
          state={actionsMenuState.cart}
          toggleMenuStateHandler={toggleMenuStateHandler}
        />
        <HeaderActionsNotify
          state={actionsMenuState.notify}
          toggleMenuStateHandler={toggleMenuStateHandler}
        />
        <HeaderActionsProfileContextProvider>
          <HeaderActionsProfile
            state={actionsMenuState.profile}
            toggleMenuStateHandler={toggleMenuStateHandler}
          />
        </HeaderActionsProfileContextProvider>
      </ul>
    </div>
  )
}
