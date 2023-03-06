import RadioSelect from '@/components/Radio'
import { useHeaderActionsProfileContext } from '@/context/HeaderActionsProfileContext'
import { LocalStorageNames } from '@/typescript/enums'
import { ChangeEvent, useState } from 'react'
import { HeaderActionsProfileMenuProps } from './index'
import HeaderActionsProfileMenuWrapper from './Wrapper'

export type DocumentLangState = 'ru' | 'de' | 'en' | 'en-us'

export default function HeaderActionsProfileLang({
  backButtonClickHandler,
}: HeaderActionsProfileMenuProps) {
  const [{ documentLang }, setHeaderActionsProfileContext] =
    useHeaderActionsProfileContext()

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value as DocumentLangState

    setHeaderActionsProfileContext((prev) => {
      document.documentElement.lang = value

      localStorage.setItem(LocalStorageNames.DocumentLang, value)

      return { ...prev, documentLang: value }
    })
  }

  return (
    <HeaderActionsProfileMenuWrapper
      title='Выберите язык'
      backButtonClickHandler={backButtonClickHandler}
    >
      <ul>
        <li>
          <RadioSelect
            label='Русский'
            value='ru'
            id='ru'
            name='lang'
            checked={documentLang === 'ru'}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label='German'
            value='de'
            id='de'
            name='lang'
            checked={documentLang === 'de'}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label='English (UK)'
            value='en'
            id='en'
            name='lang'
            checked={documentLang === 'en'}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label='English (US)'
            value='en-us'
            id='en-us'
            name='lang'
            checked={documentLang === 'en-us'}
            onChange={changeHandler}
          />
        </li>
      </ul>
    </HeaderActionsProfileMenuWrapper>
  )
}
