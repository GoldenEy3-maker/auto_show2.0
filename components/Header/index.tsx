import { useRefCallback } from "@/hooks/refCallback"

import HeaderActions from "./Actions/HeaderActions"
import styles from "./Header.module.scss"
import HeaderMenu from "./Menu"
import HeaderSearch from "./Search"

export default function Header() {
  const [headerNodeRefCallback] = useRefCallback<HTMLElement>((node) => {
    document.body.style.setProperty(
      "--hg-header",
      node.getBoundingClientRect().height + "px"
    )
  })

  return (
    <header className={styles.header} ref={headerNodeRefCallback}>
      <HeaderMenu/>
      <HeaderSearch/>
      <HeaderActions/>
    </header>
  )
}
