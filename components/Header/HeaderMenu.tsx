import { useSidebarContext } from '@/context/SidebarContext'
import { ERouterPaths } from '@/typescript/enums'
import PrimaryButton from '../Button/PrimaryButton'
import PrimaryLink from '../Link/PrimaryLink'

import styles from './HeaderMenu.module.scss'

const { headerMenu, headerMenuLogo, headerMenuBurger, headerMenuBurgerLine } =
  styles

export default function HeaderMenu() {
  const [_, setIsSidebarExpanded] = useSidebarContext()

  function toggleBurgerClickHandler() {
    setIsSidebarExpanded((prev) => !prev)
  }

  return (
    <div className={headerMenu}>
      <PrimaryButton
        type='button'
        title='Развернуть/Свернуть боковое меню'
        onClick={toggleBurgerClickHandler}
      >
        <div className={headerMenuBurger}>
          <span className={headerMenuBurgerLine}></span>
          <span className={headerMenuBurgerLine}></span>
          <span className={headerMenuBurgerLine}></span>
        </div>
      </PrimaryButton>
      <PrimaryLink
        href={ERouterPaths.HomePage}
        title='Логотип'
        className={headerMenuLogo}
        isHovering={false}
      >
        Логотип
      </PrimaryLink>
    </div>
  )
}
