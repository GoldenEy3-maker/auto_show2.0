import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

import PrimaryButton from '../Button/PrimaryButton'
import InputElement from '../Input/InputElement'

import { FiSearch } from 'react-icons/fi'

import styles from './HeaderSearchForm.module.scss'

const { headerSearchForm, headerSearchFormInput } = styles

export default function HeaderSearchForm() {
  const [searchValue, setSearchValue] = useState('')

  function changeSearchHandler(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  function submitFormHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form action='/' className={headerSearchForm} onSubmit={submitFormHandler}>
      <InputElement
        type='text'
        name='search'
        id='search'
        placeholder='Что-то ищите'
        title='Поиск'
        leadingIcon={<FiSearch />}
        trailingResetButton={true}
        className={headerSearchFormInput}
        value={searchValue}
        setValue={setSearchValue}
        onChange={changeSearchHandler}
      />
      <PrimaryButton title='Поиск' type='submit'>
        <FiSearch />
      </PrimaryButton>
    </form>
  )
}
