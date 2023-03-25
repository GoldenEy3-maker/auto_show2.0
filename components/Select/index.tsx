import { useDebounce } from "@/hooks/debounce"
import {
  ChangeEvent,
  FocusEvent,
  MouseEvent as ReMouseEvent,
  useEffect,
  useRef,
  useState
} from "react"
import { FiSearch } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"
import PrimaryButton from "../Button"
import InputElement from "../Input"
import styles from "./Select.module.scss"

interface SelectElementProps<Options extends string> {
  options: Options[]
  placeholder: string
  value: string
  changeHandler: (value: Options) => void
  id: string
}

export default function SelectElement<Options extends string>({
  options,
  placeholder,
  value,
  changeHandler,
  id,
}: SelectElementProps<Options>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const debouncedSearchValue = useDebounce(searchValue, 350)
  const selectButtonRef = useRef<HTMLButtonElement>(null)

  const filteredOptions = options.filter((option) =>
    option
      .toLowerCase()
      .trim()
      .includes(debouncedSearchValue.toLowerCase().trim())
  )

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev)

    if (!isMenuOpen) setSearchValue("")
  }

  function changeSearchHandler(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  function resetSearchHandler(event: ReMouseEvent) {
    event.stopPropagation()

    setSearchValue("")
  }

  function blurHandler(event: FocusEvent<HTMLDivElement>) {
    if (
      event.relatedTarget?.closest("." + styles.select) === null ||
      (event.relatedTarget?.closest("." + styles.selectButton) &&
        !event.relatedTarget?.contains(selectButtonRef.current))
    ) {
      setIsMenuOpen(false)
    }
  }

  function selectOptionHandler(event: ReMouseEvent<HTMLElement>) {
    changeHandler(event.currentTarget.innerText as Options)

    setIsMenuOpen(false)
  }

  useEffect(() => {
    function clickDocumentHandler(event: MouseEvent) {
      if (!(event.target as HTMLElement).closest("." + styles.select)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", clickDocumentHandler)

    return () => {
      document.removeEventListener("click", clickDocumentHandler)
    }
  }, [])

  return (
    <div className={styles.select} onBlur={blurHandler}>
      <PrimaryButton
        type="button"
        className={styles.selectButton}
        onClick={toggleMenu}
        title={placeholder}
        ref={selectButtonRef}
      >
        <p className={styles.selectButtonContent}>
          {value !== "" ? `${placeholder}: ${value}` : placeholder}
        </p>
        <span className={styles.selectButtonIcon}>
          <IoIosArrowDown />
        </span>
      </PrimaryButton>
      <div className={styles.selectMenu} aria-hidden={!isMenuOpen}>
        <div className={styles.selectMenuWrapper}>
          <div className={styles.selectMenuSearch}>
            <InputElement
              type="search"
              leadingIcon={<FiSearch />}
              id={id}
              name={id}
              placeholder="Поиск"
              value={searchValue}
              onChange={changeSearchHandler}
              trailingResetHandler={resetSearchHandler}
              inputStyle="alternate"
            />
          </div>
          <ul className={styles.selectMenuList}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li key={index} className={styles.selectMenuListItem}>
                  <PrimaryButton
                    type="button"
                    className={styles.selectMenuListItemButton}
                    title={option}
                    onClick={selectOptionHandler}
                  >
                    {option}
                  </PrimaryButton>
                </li>
              ))
            ) : (
              <li className={styles.selectMenuListItemEmpty}>
                По вашему запросу ничего не найдено!
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
