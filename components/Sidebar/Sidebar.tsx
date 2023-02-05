'use client'

import { ERouterPaths } from '@/typescript/enums'

import PrimaryLink from '../Link/PrimaryLink'

import { setDynamicCls, setStaticCls } from '@/lib/setCls'

import { BiHomeAlt, BiSupport } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { GrCatalogOption } from 'react-icons/gr'
import { MdFavoriteBorder, MdNotificationsNone } from 'react-icons/md'
import { RxExit } from 'react-icons/rx'
import { SlSettings } from 'react-icons/sl'

import { useSidebarContext } from '@/context/SidebarContext'
import styles from './Sidebar.module.scss'

const {
  sidebar,
  sidebarNavListItemLink,
  sidebarNavListItemLinkIcon,
  sidebarNavListItem,
  sidebarNav,
  sidebarNavList,
  sidebarNavListSeparater,
  sidebarNavListItemLinkText,
  _redRipples,
  _collapsed,
} = styles

export default function Sidebar() {
  const [isSidebarExpanded] = useSidebarContext()

  return (
    <aside
      className={setDynamicCls({
        stClasses: [sidebar],
        dnClasses: [[_collapsed]],
        conditions: [!isSidebarExpanded],
      })}
    >
      <nav className={sidebarNav}>
        <ul className={sidebarNavList}>
          <li className={sidebarNavListItem}>
            <PrimaryLink
              href={ERouterPaths.HomePage}
              className={sidebarNavListItemLink}
              title='Главная'
            >
              <span className={sidebarNavListItemLinkIcon}>
                <BiHomeAlt />
              </span>
              <p className={sidebarNavListItemLinkText}>Главная</p>
            </PrimaryLink>
          </li>
          <li className={sidebarNavListItem}>
            <PrimaryLink
              href='/'
              className={sidebarNavListItemLink}
              title='Каталог'
            >
              <span className={sidebarNavListItemLinkIcon}>
                <GrCatalogOption />
              </span>
              <p className={sidebarNavListItemLinkText}>Каталог</p>
            </PrimaryLink>
          </li>

          <li className={sidebarNavListItem}>
            <PrimaryLink
              href='/'
              className={sidebarNavListItemLink}
              title='Техническая поддержка'
            >
              <span className={sidebarNavListItemLinkIcon}>
                <BiSupport />
              </span>
              <p className={sidebarNavListItemLinkText}>
                Техническая поддержка
              </p>
            </PrimaryLink>
          </li>
          <span className={sidebarNavListSeparater} />
          <li className={sidebarNavListItem}>
            <PrimaryLink
              href='/'
              className={sidebarNavListItemLink}
              title='Профиль'
            >
              <span className={sidebarNavListItemLinkIcon}>
                <CgProfile />
              </span>
              <p className={sidebarNavListItemLinkText}>Профиль</p>
            </PrimaryLink>
          </li>
          <li className={sidebarNavListItem}>
            <PrimaryLink
              href='/'
              className={sidebarNavListItemLink}
              title='Корзина'
            >
              <span className={sidebarNavListItemLinkIcon}>
                <BsCart2 />
              </span>
              <p className={sidebarNavListItemLinkText}>Корзина</p>
            </PrimaryLink>
          </li>
          <li className={sidebarNavListItem}>
            <PrimaryLink
              href='/'
              className={sidebarNavListItemLink}
              title='Избранное'
            >
              <span className={sidebarNavListItemLinkIcon}>
                <MdFavoriteBorder />
              </span>
              <p className={sidebarNavListItemLinkText}>Избранное</p>
            </PrimaryLink>
          </li>
          <li className={sidebarNavListItem}>
            <PrimaryLink
              href='/'
              className={sidebarNavListItemLink}
              title='Уведомления'
            >
              <span className={sidebarNavListItemLinkIcon}>
                <MdNotificationsNone />
              </span>
              <p className={sidebarNavListItemLinkText}>Уведомления</p>
            </PrimaryLink>
          </li>
          <li className={sidebarNavListItem}>
            <PrimaryLink
              href='/'
              className={sidebarNavListItemLink}
              title='Настройки'
            >
              <span className={sidebarNavListItemLinkIcon}>
                <SlSettings />
              </span>
              <p className={sidebarNavListItemLinkText}>Настройки</p>
            </PrimaryLink>
          </li>
        </ul>
        <ul className={sidebarNavList}>
          <span className={sidebarNavListSeparater} />
          <li className={sidebarNavListItem}>
            <PrimaryLink
              href='/'
              className={setStaticCls(sidebarNavListItemLink, _redRipples)}
              title='Выход'
            >
              <span className={sidebarNavListItemLinkIcon}>
                <RxExit />
              </span>
              <p className={sidebarNavListItemLinkText}>Выход</p>
            </PrimaryLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
