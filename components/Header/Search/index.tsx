import type { ChangeEvent, FormEvent } from "react"
import { useState } from "react"

import InputElement from "../../Input"

import { FiSearch } from "react-icons/fi"

import styles from "./HeaderSearch.module.scss"
import { useQuery } from "@tanstack/react-query"
import { useDebounce } from "@/hooks/debounce"
import { ErrorAPIResponse, ProductType } from "@/typescript/types"

import HeaderSearchResult from "@/components/Header/Search/Result"
import axi from "@/axios/instance"
import { AxiosError, AxiosResponse } from "axios"

export default function HeaderSearch() {
  const [searchValue, setSearchValue] = useState("")
  const debouncedSearchValue = useDebounce(searchValue, 300)
  const {
    error,
    data: queryData,
    isFetching
  } = useQuery<AxiosResponse<ProductType[]>, AxiosError<ErrorAPIResponse>>(["products", debouncedSearchValue], async () => await axi.post("/search", { searchValue: debouncedSearchValue }), { enabled: !!debouncedSearchValue })

  function changeSearchHandler(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  function submitFormHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function resetValueHandler() {
    setSearchValue("")
  }


  return (
    <form
      method="post"
      className={styles.headerSearch}
      onSubmit={submitFormHandler}
    >
      <InputElement
        type="search"
        name="search"
        id="search"
        searchResult={<HeaderSearchResult isFetchingData={isFetching} products={queryData?.data}
                                          error={error}/>}
        placeholder="Напишите что-нибудь..."
        title="Поиск"
        leadingIcon={<FiSearch/>}
        trailingResetHandler={resetValueHandler}
        className={styles.headerSearchInput}
        value={searchValue}
        onChange={changeSearchHandler}
      />
    </form>
  )
}
