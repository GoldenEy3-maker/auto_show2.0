import RadioSelect from '@/components/Radio/RadioSelect'
import { useHeaderActionsProfileContext } from '@/context/HeaderActionsProfileContext'
import { LocalStorageNames } from '@/typescript/enums'
import { ChangeEvent, useState } from 'react'
import { HeaderActionsProfileMenuProps } from './HeaderActionsProfile'
import HeaderActionsProfileMenuWrapper from './HeaderActionsProfileMenuWrapper'

export type UserCityState =
  | 'Москва'
  | 'Санкт-Петербург'
  | 'Новосибирск'
  | 'Барнаул'

export default function HeaderActionsProfileCity({
  backButtonClickHandler,
}: HeaderActionsProfileMenuProps) {
  const [{ userCity }, setHeaderActionsProfileContext] =
    useHeaderActionsProfileContext()

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value as UserCityState

    setHeaderActionsProfileContext((prev) => {
      localStorage.setItem(LocalStorageNames.UserCity, value)

      return { ...prev, userCity: value }
    })
  }

  return (
    <HeaderActionsProfileMenuWrapper
      title='Выберите город'
      backButtonClickHandler={backButtonClickHandler}
    >
      <ul>
        <li>
          <RadioSelect
            label='Москва'
            id='Moscow'
            name='address'
            value='Москва'
            checked={userCity === 'Москва'}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label='Санкт-Петербург'
            id='Saint Petersburg'
            name='address'
            value='Санкт-Петербург'
            checked={userCity === 'Санкт-Петербург'}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label='Новосибирск'
            id='Novosibirsk'
            name='address'
            value='Новосибирск'
            checked={userCity === 'Новосибирск'}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label='Барнаул'
            id='Barnaul'
            name='address'
            value='Барнаул'
            checked={userCity === 'Барнаул'}
            onChange={changeHandler}
          />
        </li>
      </ul>
    </HeaderActionsProfileMenuWrapper>
  )
}
