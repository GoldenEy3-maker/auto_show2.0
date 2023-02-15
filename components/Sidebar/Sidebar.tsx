import { ERouterPaths } from '@/typescript/enums'

import PrimaryLink from '../Link/PrimaryLink'

import { setDynamicCls } from '@/utils/setCls'

import { AiOutlinePoweroff } from 'react-icons/ai'
import { BiHomeAlt, BiSupport } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { GrCatalogOption } from 'react-icons/gr'
import { MdFavoriteBorder, MdNotificationsNone } from 'react-icons/md'
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
              href={ERouterPaths.CatalogPage}
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
              href={ERouterPaths.SupportPage}
              className={sidebarNavListItemLink}
              title='Поддержка'
            >
              <span className={sidebarNavListItemLinkIcon}>
                <BiSupport />
              </span>
              <p className={sidebarNavListItemLinkText}>Поддержка</p>
            </PrimaryLink>
          </li>
          <span className={sidebarNavListSeparater} />
          <li className={sidebarNavListItem}>
            <PrimaryLink
              href={ERouterPaths.ProfilePage}
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
              href={ERouterPaths.CartPage}
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
              href={ERouterPaths.FavoritesPage}
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
              href={ERouterPaths.NotifyPage}
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
              href={ERouterPaths.SettingsPage}
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
              styleType='danger'
              className={sidebarNavListItemLink}
              title='Выход'
            >
              <span className={sidebarNavListItemLinkIcon}>
                <AiOutlinePoweroff />
              </span>
              <p className={sidebarNavListItemLinkText}>Выход</p>
            </PrimaryLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
