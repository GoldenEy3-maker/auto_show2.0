import { setDynamicCls } from "@/utils/setCls"
import { ReactNode, useEffect, useState } from "react"
import PrimaryButton, { PrimaryButtonProps } from "../index"

import styles from "./PrimaryButtonContextMenu.module.scss"

interface PrimaryButtonContextMenu extends PrimaryButtonProps {
  children: ReactNode
  buttonContent: ReactNode
  menuPosition?: "left" | "right"
}

export default function PrimaryButtonContextMenu({
  children,
  buttonContent,
  menuPosition = "left",
  ...restAttr
}: PrimaryButtonContextMenu) {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)

  function toggleButtonClickHandler() {
    setIsContextMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    function documentClickHandler(event: MouseEvent) {
      if (
        !(event.target as HTMLDivElement).closest(
          "." + styles.primaryButtonContextMenu
        )
      )
        setIsContextMenuOpen(false)
    }

    document.addEventListener("click", documentClickHandler)

    return () => document.removeEventListener("click", documentClickHandler)
  }, [])

  return (
    <div className={styles.primaryButtonContextMenu}>
      <PrimaryButton {...restAttr} onClick={toggleButtonClickHandler}>
        {buttonContent}
      </PrimaryButton>
      <div
        className={setDynamicCls({
          stClasses: [styles.primaryButtonContextMenuWrapper],
          dnClasses: [[styles._open], [styles._isRightPos]],
          conditions: [isContextMenuOpen, menuPosition === "right"],
        })}
      >
        {children}
      </div>
    </div>
  )
}
