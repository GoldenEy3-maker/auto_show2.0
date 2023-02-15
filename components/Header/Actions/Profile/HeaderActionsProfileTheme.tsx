import RadioSelect from '@/components/Radio/RadioSelect'
import { useHeaderActionsProfileContext } from '@/context/HeaderActionsProfileContext'
import { LocalStorageNames } from '@/typescript/enums'
import { ChangeEvent, useEffect, useState } from 'react'
import { HeaderActionsProfileMenuProps } from './HeaderActionsProfile'
import HeaderActionsProfileMenuWrapper from './HeaderActionsProfileMenuWrapper'

export type SiteThemeState = 'system-theme' | 'dark-theme' | 'light-theme'

export default function HeaderActionsProfileTheme({
  backButtonClickHandler,
}: HeaderActionsProfileMenuProps) {
  const [{ siteTheme }, setHeaderActionsProfileContext] =
    useHeaderActionsProfileContext()

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value as SiteThemeState

    setHeaderActionsProfileContext((prev) => {
      localStorage.setItem(LocalStorageNames.SiteTheme, value)

      return { ...prev, siteTheme: value }
    })
  }

  return (
    <HeaderActionsProfileMenuWrapper
      title='Выберите тему'
      backButtonClickHandler={backButtonClickHandler}
    >
      <ul>
        <li>
          <RadioSelect
            label='Как в системе'
            id='system-theme'
            value='system-theme'
            name='theme'
            checked={siteTheme === 'system-theme'}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label='Темная'
            id='dark-theme'
            value='dark-theme'
            name='theme'
            checked={siteTheme === 'dark-theme'}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label='Светлая'
            id='light-theme'
            value='light-theme'
            name='theme'
            checked={siteTheme === 'light-theme'}
            onChange={changeHandler}
          />
        </li>
      </ul>
    </HeaderActionsProfileMenuWrapper>
  )
}
