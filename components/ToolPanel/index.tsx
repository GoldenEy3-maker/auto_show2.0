import PrimaryButtonContextMenu from "@/components/Button/Context"
import InputElement from "@/components/Input"
import RadioSelect from "@/components/Radio"
import { useDebounce } from "@/hooks/debounce"
import { FilterModes, FilterNames } from "@/typescript/enums"
import { ValueOf } from "@/typescript/utils"
import { ChangeEvent, ReactNode, useState } from "react"
import { BiFilterAlt } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { RiLayoutGridLine, RiLayoutRowLine } from "react-icons/ri"
import RadioTabs from "../Radio/Tabs"
import styles from "./ToolPanel.module.scss"

const LayoutNames = { Column: "column", List: "list" } as const
type LayoutNames = ValueOf<typeof LayoutNames>

export interface ToolPanelFilters {
  filter?: FilterNames
  filterMode?: FilterModes
  searchValue?: string
  layout?: LayoutNames
}

interface FiltersList {
  name: FilterNames
  label: string
  isDefault?: boolean
}

interface ToolPanelProps {
  searchPlaceholder?: string
  filtersList?: FiltersList[]

  children(
    filter: FilterNames | undefined,
    filterMode: FilterModes | undefined,
    searchValue: string,
    layout: LayoutNames
  ): ReactNode
}

export default function ToolPanel({
  filtersList,
  searchPlaceholder,
  children,
}: ToolPanelProps) {
  const [filtersState, setFiltersState] = useState<FilterNames | undefined>(
    undefined
  )
  const [filtersModeState, setFiltersModeState] = useState<
    FilterModes | undefined
  >(undefined)
  const [searchValue, setSearchValue] = useState("")
  const [layoutState, setLayoutState] = useState<LayoutNames>("column")
  const debouncedSearchValue = useDebounce(searchValue, 350)

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
            <PrimaryButtonContextMenu
              type="button"
              buttonContent={<BiFilterAlt />}
              title="Фильтры"
            >
              {filtersList.map((filter) => (
                <RadioSelect
                  key={filter.name}
                  label={filter.label}
                  name={filter.name}
                  id={filter.name}
                  checked={
                    filter.isDefault
                      ? filtersState === filter.name ||
                        filtersState === undefined
                      : filtersState === filter.name
                  }
                  onChange={changeFiltersHandler}
                />
              ))}
              <span className={styles.toolPanelContextMenuSeparator}></span>
              <RadioSelect
                label="По возрастанию"
                name={FilterModes.Ascending}
                id={FilterModes.Ascending}
                checked={filtersModeState === FilterModes.Ascending}
                onChange={changeFiltersModeHandler}
              />
              <RadioSelect
                label="По убыванию"
                name={FilterModes.Descending}
                id={FilterModes.Descending}
                checked={
                  filtersModeState === FilterModes.Descending ||
                  filtersModeState === undefined
                }
                onChange={changeFiltersModeHandler}
              />
            </PrimaryButtonContextMenu>
          )}
        </div>
        <div className={styles.toolPanelSearch}>
          <InputElement
            leadingIcon={<FiSearch />}
            id="filters-tool-panel-search"
            name="filters-tool-panel-search"
            inputStyle={"alternate"}
            value={searchValue}
            onChange={changeSearchHandler}
            trailingResetHandler={resetSearchHandler}
            placeholder={searchPlaceholder}
          />
        </div>
        <div className={styles.toolPanelRadioTabs}>
          <RadioTabs>
            <RadioSelect
              label="Колонки"
              labelIcon={<RiLayoutGridLine />}
              name={LayoutNames.Column}
              id={LayoutNames.Column}
              checked={layoutState === LayoutNames.Column}
              onChange={changeLayoutHandler}
            />
            <RadioSelect
              label="Список"
              labelIcon={<RiLayoutRowLine />}
              name={LayoutNames.List}
              id={LayoutNames.List}
              checked={layoutState === LayoutNames.List}
              onChange={changeLayoutHandler}
            />
          </RadioTabs>
        </div>
      </div>
      <div className={styles.toolPanelContent}>
        {children(
          filtersState,
          filtersModeState,
          debouncedSearchValue,
          layoutState
        )}
      </div>
    </div>
  )
}
