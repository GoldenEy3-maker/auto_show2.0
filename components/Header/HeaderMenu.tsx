import { useSidebarContext } from '@/context/SidebarContext'
import { RouterPaths } from '@/typescript/enums'
import PrimaryButton from '../Button/PrimaryButton'
import PrimaryLink from '../Link/PrimaryLink'

import styles from './HeaderMenu.module.scss'

export default function HeaderMenu() {
  const [_, setIsSidebarExpanded] = useSidebarContext()

  function toggleBurgerClickHandler() {
    setIsSidebarExpanded((prev) => !prev)
  }

  return (
    <div className={styles.headerMenu}>
      <PrimaryButton
        type='button'
        title='Развернуть/Свернуть боковое меню'
        onClick={toggleBurgerClickHandler}
        className={styles.headerMenuBurgerButton}
      >
        <div className={styles.headerMenuBurger}>
          <span className={styles.headerMenuBurgerLine}></span>
          <span className={styles.headerMenuBurgerLine}></span>
          <span className={styles.headerMenuBurgerLine}></span>
        </div>
      </PrimaryButton>
      <PrimaryLink
        href={RouterPaths.HomePage}
        title='Логотип'
        className={styles.headerMenuLogo}
        isHovering={false}
      >
        Логотип
      </PrimaryLink>
    </div>
  )
}
