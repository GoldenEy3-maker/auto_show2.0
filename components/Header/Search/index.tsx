import type { ChangeEvent, FormEvent } from "react"
import { useState } from "react"

import InputElement from "../../Input"

import { FiSearch } from "react-icons/fi"

import styles from "./HeaderSearch.module.scss"
import { useQuery } from "react-query"
import { useDebounce } from "@/hooks/debounce"
import { APIResponse, ProductItemType } from "@/typescript/types"

import HeaderSearchResult from "@/components/Header/Search/Result"

export default function HeaderSearch() {
  const [searchValue, setSearchValue] = useState("")
  const debouncedSearchValue = useDebounce(searchValue, 300)
  const {
    data,
    isFetching
  } = useQuery<APIResponse<ProductItemType[] | undefined>>(["products", debouncedSearchValue], () => fetch("/api/search", {
    method: "post",
    body: debouncedSearchValue
  }).then(data => data.json()).catch(error => error), { enabled: Boolean(debouncedSearchValue) })

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
        searchResult={<HeaderSearchResult isFetchingData={isFetching} products={data?.data}
                                          error={data ? !data.isSuccess ? data as APIResponse : null : null}/>}
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
