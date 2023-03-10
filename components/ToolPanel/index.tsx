import styles from "./ToolPanel.module.scss"
import { ErrorAPIResponse, ProductType } from "@/typescript/types"
import { BiFilterAlt } from "react-icons/bi"
import PrimaryButtonContextMenu from "@/components/Button/Context"
import RadioSelect from "@/components/Radio"
import { ChangeEvent, ReactNode, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axi from "@/axios/instance"
import { AxiosError, AxiosResponse } from "axios"
import InputElement from "@/components/Input"
import { FiSearch } from "react-icons/fi"
import { useDebounce } from "@/hooks/debounce"

enum FilterNames {
  ByName = "by-name",
  ByPrice = "by-price",
  ByDate = "by-date"
}

enum FilterModes {
  Ascending = "ascending",
  Descending = "descending"
}

interface ToolPanelProps {
  prefetchedData: ProductType[]
  queryKey: string

  children(products: ProductType[]): ReactNode
}

export default function ToolPanel({ prefetchedData, queryKey, children }: ToolPanelProps) {
  const [filtersState, setFiltersState] = useState<FilterNames | undefined>(undefined)
  const [filtersModeState, setFiltersModeState] = useState<FilterModes | undefined>(undefined)
  const [searchValue, setSearchValue] = useState("")
  const debouncedSearchValue = useDebounce(searchValue, 350)

  const {
    data: queryData,
    isFetching,
    error
  } = useQuery<AxiosResponse<ProductType[]>, AxiosError<ErrorAPIResponse>>([queryKey, filtersState, filtersModeState], async () => await axi.post("/products"), {
    enabled: !!filtersState || !!filtersModeState || !!debouncedSearchValue,
    refetchOnWindowFocus: false
  })

  function changeFiltersHandler(event: ChangeEvent<HTMLInputElement>) {
    setFiltersState(event.target.name as FilterNames)
  }

  function changeFiltersModeHandler(event: ChangeEvent<HTMLInputElement>) {
    setFiltersModeState(event.target.name as FilterModes)
  }

  function changeSearchHandler(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  function resetSearchHandler() {
    setSearchValue("")
  }

  return (
    <div className={styles.toolPanel}>
      <div className={styles.toolPanelWrapper}>
        <div className={styles.toolPanelFilter}>
          <PrimaryButtonContextMenu type="button" buttonContent={<BiFilterAlt/>} title="Фильтры">
            <RadioSelect label="По названию" name={FilterNames.ByName} id={FilterNames.ByName}
                         checked={filtersState === FilterNames.ByName || filtersState === undefined}
                         onChange={changeFiltersHandler}/>
            <RadioSelect label="По цене" name={FilterNames.ByPrice} id={FilterNames.ByPrice}
                         checked={filtersState === FilterNames.ByPrice} onChange={changeFiltersHandler}/>
            <RadioSelect label="По дате" name={FilterNames.ByDate} id={FilterNames.ByDate}
                         checked={filtersState === FilterNames.ByDate} onChange={changeFiltersHandler}/>
            <span className={styles.toolPanelContextMenuSeparator}></span>
            <RadioSelect label="По возрастанию" name={FilterModes.Ascending} id={FilterModes.Ascending}
                         checked={filtersModeState === FilterModes.Ascending || filtersModeState === undefined}
                         onChange={changeFiltersModeHandler}/>
            <RadioSelect label="По убыванию" name={FilterModes.Descending} id={FilterModes.Descending}
                         checked={filtersModeState === FilterModes.Descending} onChange={changeFiltersModeHandler}/>
          </PrimaryButtonContextMenu>
        </div>
        <div className={styles.toolPanelSearch}>
          <InputElement leadingIcon={<FiSearch/>} id="filters-tool-panel-search" name="filters-tool-panel-search"
                        inputStyle={"alternate"}
                        value={searchValue} onChange={changeSearchHandler} trailingResetHandler={resetSearchHandler}/>
        </div>
      </div>

      <div className={styles.toolPanelContent}>
        {isFetching ? <p>Loading...</p> : error ?
          <p>{error.response?.data ? `${error.message}: ${error.response.data.message}` : error.message}</p> : (queryData?.data || prefetchedData) ? (
            queryData?.data ? queryData.data.length > 0 ? children(queryData.data) :
              <p>По вашему запросу не найдено никаких
                данных!</p> : prefetchedData ? prefetchedData.length > 0 && children(prefetchedData) :
              <p>Нет данных</p>
          ) : <p>Нет данных</p>}
      </div>

    </div>
  )
}