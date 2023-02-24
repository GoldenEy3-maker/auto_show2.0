import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

import PrimaryButton from '../Button/PrimaryButton'
import InputElement from '../Input/InputElement'

import { FiSearch } from 'react-icons/fi'

import styles from './HeaderSearchForm.module.scss'

export default function HeaderSearchForm() {
  const [searchValue, setSearchValue] = useState('')

  function changeSearchHandler(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  function submitFormHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function resetValueHandler() {
    setSearchValue('')
  }

  return (
    <form
      action='/'
      className={styles.headerSearchForm}
      onSubmit={submitFormHandler}
    >
      <InputElement
        type='search'
        name='search'
        id='search'
        placeholder='Напишите что-нибудь...'
        title='Поиск'
        leadingIcon={<FiSearch />}
        trailingResetHandler={resetValueHandler}
        className={styles.headerSearchFormInput}
        value={searchValue}
        onChange={changeSearchHandler}
      />
      {/* <PrimaryButton
        title='Поиск'
        type='submit'
        styleType='gray'
        isBackgroundColor={true}
      >
        <FiSearch />
      </PrimaryButton> */}
    </form>
  )
}
