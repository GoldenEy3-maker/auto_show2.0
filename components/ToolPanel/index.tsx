import styles from "./ToolPanel.module.scss"
import { BiFilterAlt } from "react-icons/bi"
import PrimaryButtonContextMenu from "@/components/Button/Context"
import RadioSelect from "@/components/Radio"
import { ChangeEvent, ReactNode, useState } from "react"
import InputElement from "@/components/Input"
import { FiSearch } from "react-icons/fi"
import { useDebounce } from "@/hooks/debounce"
import { FilterModes, FilterNames } from "@/typescript/enums"
import radioSelectTabs from "@/styles/components/RadioSelectTabs.module.scss"
import { RiLayoutGridLine, RiLayoutRowLine } from "react-icons/ri"
import { QueryLike, InferQueryLikeData } from "@trpc/react-query/shared"

enum LayoutNames {
  Columns = "columns",
  List = "list"
}

interface FilterList {
  name: FilterNames
  label: string
  isDefault?: boolean
}

interface ToolPanelProps<DataType extends InferQueryLikeData<Query>, Query extends QueryLike> {
  loadingTemplate: ReactNode
  searchPlaceholder?: string
  filtersList?: FilterList[]
  query: Query

  children(data: DataType): ReactNode
}

export default function ToolPanel<DataType extends InferQueryLikeData<Query>, Query extends QueryLike>({
                                                                                                         query,
                                                                                                         loadingTemplate,
                                                                                                         filtersList,
                                                                                                         searchPlaceholder,
                                                                                                         children
                                                                                                       }: ToolPanelProps<DataType, Query>) {
  const [filtersState, setFiltersState] = useState<FilterNames | undefined>(undefined)
  const [filtersModeState, setFiltersModeState] = useState<FilterModes | undefined>(undefined)
  const [searchValue, setSearchValue] = useState("")
  const [layoutState, setLayoutState] = useState<LayoutNames>(LayoutNames.Columns)
  const debouncedSearchValue = useDebounce(searchValue, 350)

  const { data, error, isFetching, isLoading } = query.useQuery({
    filter: filtersState,
    filterMode: filtersModeState,
    searchValue: debouncedSearchValue
  }, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })

  function changeFiltersHandler(event: ChangeEvent<HTMLInputElement>) {
    setFiltersState(event.target.name as FilterNames)
  }

  function changeFiltersModeHandler(event: ChangeEvent<HTMLInputElement>) {
    setFiltersModeState(event.target.name as FilterModes)
  }

  function changeLayoutHandler(event: ChangeEvent<HTMLInputElement>) {
    setLayoutState(event.target.name as LayoutNames)
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
          {filtersList && filtersList.length > 0 && (
            <PrimaryButtonContextMenu type="button" buttonContent={<BiFilterAlt/>} title="Фильтры">
              {filtersList.map(filter => (
                <RadioSelect
                  key={filter.name}
                  label={filter.label}
                  name={filter.name}
                  id={filter.name}
                  checked={filter.isDefault ?
                    filtersState === filter.name || filtersState === undefined
                    :
                    filtersState === filter.name}
                  onChange={changeFiltersHandler}/>
              ))}
              <span className={styles.toolPanelContextMenuSeparator}></span>
              <RadioSelect
                label="По возрастанию"
                name={FilterModes.Ascending}
                id={FilterModes.Ascending}
                checked={filtersModeState === FilterModes.Ascending}
                onChange={changeFiltersModeHandler}/>
              <RadioSelect
                label="По убыванию"
                name={FilterModes.Descending}
                id={FilterModes.Descending}
                checked={filtersModeState === FilterModes.Descending || filtersModeState === undefined}
                onChange={changeFiltersModeHandler}/>
            </PrimaryButtonContextMenu>
          )}
        </div>
        <div className={styles.toolPanelSearch}>
          <InputElement
            leadingIcon={<FiSearch/>} id="filters-tool-panel-search" name="filters-tool-panel-search"
            inputStyle={"alternate"}
            value={searchValue} onChange={changeSearchHandler}
            trailingResetHandler={resetSearchHandler}
            placeholder={searchPlaceholder}/>
        </div>
        <div className={styles.toolPanelRadioTabs}>
          <div className={radioSelectTabs.tabs}>
            <RadioSelect
              className={radioSelectTabs.tabsRadio}
              label="Колонки"
              labelIcon={<RiLayoutGridLine/>}
              name={LayoutNames.Columns}
              id={LayoutNames.Columns}
              checked={layoutState === "columns"}
              onChange={changeLayoutHandler}
            />
            <RadioSelect
              className={radioSelectTabs.tabsRadio}
              label="Список"
              labelIcon={<RiLayoutRowLine/>}
              name={LayoutNames.List}
              id={LayoutNames.List}
              checked={layoutState === "list"}
              onChange={changeLayoutHandler}
            />
          </div>
        </div>
      </div>

      <div className={styles.toolPanelContent}>
        {isFetching || isLoading ? loadingTemplate :
          error ? <p>{`Произошла ошибка (${error.data.code}): ${error.message}`}</p> :
            (data ? data.length > 0 ? children(data) :
                  <p>По вашему запросу ничего не найдено!</p> :
                <p>Нет данных</p>
            )}
      </div>

    </div>
  )
}