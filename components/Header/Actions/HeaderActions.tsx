import { useEffect, useState } from 'react'

import HeaderActionsNotify from './HeaderActionsNotify'
import HeaderActionsProfile from './HeaderActionsProfile'

import styles from './HeaderActions.module.scss'
import HeaderActionsCart from './HeaderActionsCart'
import HeaderActionsFavorite from './HeaderActionsFavorite'

const { headerActions, headerActionsList, headerActionsItem } = styles

type TActionsMenuName = 'profile' | 'notify' | 'cart' | 'favorite'

type TActionsMenuState = {
  [k in TActionsMenuName]: boolean
}

export interface IActionsMenuProps {
  state: boolean
  toggleStateHandler: (stateName: TActionsMenuName) => void
}

export default function HeaderActions() {
  const [actionsMenuState, setActionsMenuState] = useState<TActionsMenuState>({
    profile: false,
    notify: false,
    cart: false,
    favorite: false,
  })

  function closeAllMenus(exceptionName?: TActionsMenuName) {
    setActionsMenuState((prev) => {
      let state = prev

      Object.keys(state).forEach((key) => {
        if (key !== exceptionName) state[key as TActionsMenuName] = false
      })

      return { ...state }
    })
  }

  function toggleStateHandler(stateName: TActionsMenuName) {
    closeAllMenus(stateName)

    setActionsMenuState((prev) => ({ ...prev, [stateName]: !prev[stateName] }))
  }

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (!(event.target as HTMLLIElement).closest('.' + headerActionsItem)) {
        closeAllMenus()
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => document.removeEventListener('click', handleDocumentClick)
  }, [])

  return (
    <div className={headerActions}>
      <ul className={headerActionsList}>
        <HeaderActionsFavorite
          state={actionsMenuState.favorite}
          toggleStateHandler={toggleStateHandler}
        />
        <HeaderActionsCart
          state={actionsMenuState.cart}
          toggleStateHandler={toggleStateHandler}
        />
        <HeaderActionsNotify
          state={actionsMenuState.notify}
          toggleStateHandler={toggleStateHandler}
        />
        <HeaderActionsProfile
          state={actionsMenuState.profile}
          toggleStateHandler={toggleStateHandler}
        />
      </ul>
    </div>
  )
}
