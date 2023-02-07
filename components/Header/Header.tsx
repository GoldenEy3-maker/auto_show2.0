'use client'

import { useSidebarContext } from '@/context/SidebarContext'
import useRefCallback from '@/hooks/refCallback'
import { ERouterPaths } from '@/typescript/enums'
import PrimaryButton from '../Button/PrimaryButton'
import PrimaryLink from '../Link/PrimaryLink'

import styles from './Header.module.scss'

const { header, headerLogo, headerLeft, headerBurger, headerBurgerLine } =
  styles

export default function Header() {
  const [headerNodeRefCallback] = useRefCallback((node) => {
    document.body.style.setProperty(
      '--hg-header',
      node.getBoundingClientRect().height + 'px'
    )
  })
  const [_, setIsSidebarExpanded] = useSidebarContext()

  function toggleBurgerClickHandler() {
    setIsSidebarExpanded((prev) => !prev)
  }

  return (
    <header className={header} ref={headerNodeRefCallback}>
      <div className={headerLeft}>
        <PrimaryButton
          type='button'
          title='Развернуть/Свернуть боковое меню'
          onClick={toggleBurgerClickHandler}
        >
          <div className={headerBurger}>
            <span className={headerBurgerLine}></span>
            <span className={headerBurgerLine}></span>
            <span className={headerBurgerLine}></span>
          </div>
        </PrimaryButton>
        <PrimaryLink
          href={ERouterPaths.HomePage}
          title='Логотип'
          className={headerLogo}
        >
          Логотип
        </PrimaryLink>
      </div>
      <div className='headerMiddle'></div>
      <div className='headerRight'></div>
    </header>
  )
}
