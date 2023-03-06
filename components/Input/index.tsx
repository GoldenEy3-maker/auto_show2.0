import type {
  ChangeEvent,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode
} from "react"

import { useRippleHighlight } from "@/hooks/rippleHighlight"
import { setStaticCls } from "@/utils/setCls"
import PrimaryButton from "../Button"

import { IoMdClose } from "react-icons/io"

import styles from "./InputElement.module.scss"
import React, { useEffect, useState } from "react"

interface InputElementProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  leadingIcon?: ReactNode
  trailingResetHandler?: MouseEventHandler
  searchResult?: ReactNode
}

export default function InputElement<T = undefined>({
                                                      className,
                                                      leadingIcon,
                                                      trailingResetHandler,
                                                      searchResult,
                                                      id, value,
                                                      onChange,
                                                      ...restAttr
                                                    }: InputElementProps<T>) {
  const [isSearchResultOpen, setIsSearchResultOpen] = useState(false)

  const handleRippleEffectPointerDownEvent = useRippleHighlight()

  function focusHandler() {
    if (!!value) setIsSearchResultOpen(true)
  }

  function blurHandler(event: React.FocusEvent) {
    if (!event.target.closest("." + styles.inputElement))
      setIsSearchResultOpen(false)
  }

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) setIsSearchResultOpen(true)

    if (onChange) onChange(event)
  }

  useEffect(() => {
    function handleDocumentClick(event: FocusEvent) {
      if (!(event.target as HTMLElement).closest("." + styles.inputElement)) {
        setIsSearchResultOpen(false)
      }
    }

    document.addEventListener("click", handleDocumentClick)

    return () => document.removeEventListener("click", handleDocumentClick)
  }, [])

  return (
    <div className={setStaticCls(styles.inputElement, className)}>
      <div className={styles.inputElementWrapper}>
        {leadingIcon ? (
          <label
            htmlFor={id}
            onPointerDown={handleRippleEffectPointerDownEvent}
            title="Фокус на поле ввода"
            className={styles.inputElementLeadingIcon}
          >
            {leadingIcon}
          </label>
        ) : null}
        <input value={value} id={id} onChange={changeHandler} onFocus={focusHandler}
               onBlur={blurHandler} {...restAttr} />
        {trailingResetHandler && !!value ? (
          <PrimaryButton
            type="reset"
            className={styles.inputElementTrailingIcon}
            title="Отчистить поле ввода"
            onClick={trailingResetHandler}
          >
            <IoMdClose/>
          </PrimaryButton>
        ) : null}
      </div>
      {isSearchResultOpen && searchResult && (
        <div className={styles.inputElementSearchResult}>
          {searchResult}
        </div>
      )}
    </div>
  )
}
