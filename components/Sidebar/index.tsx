import { RouterPaths } from "@/typescript/enums"

import PrimaryLink from "../Link"

import { setDynamicCls } from "@/utils/setCls"

import { AiOutlinePoweroff } from "react-icons/ai"
import { BiHomeAlt, BiNews, BiSupport } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { GrCatalogOption } from "react-icons/gr"
import { MdFavoriteBorder, MdNotificationsNone, MdOutlineFeedback } from "react-icons/md"
import { SlSettings } from "react-icons/sl"

import { useSidebarContext } from "@/context/SidebarContext"
import styles from "./Sidebar.module.scss"

export default function Sidebar() {
  const [isSidebarExpanded] = useSidebarContext()

  return (
    <aside
      className={setDynamicCls({
        stClasses: [styles.sidebar],
        dnClasses: [[styles._collapsed]],
        conditions: [!isSidebarExpanded]
      })}
    >
      <nav className={styles.sidebarNav}>
        <ul className={styles.sidebarNavList}>
          <li className={styles.sidebarNavListItem}>
            <PrimaryLink
              href={RouterPaths.HomePage}
              className={styles.sidebarNavListItemLink}
              title="Главная"
            >
              <span className={styles.sidebarNavListItemLinkIcon}>
                <BiHomeAlt/>
              </span>
              <p className={styles.sidebarNavListItemLinkText}>Главная</p>
            </PrimaryLink>
          </li>
          <li className={styles.sidebarNavListItem}>
            <PrimaryLink
              href={RouterPaths.NewsPage}
              className={styles.sidebarNavListItemLink}
              title="Новости"
            >
              <span className={styles.sidebarNavListItemLinkIcon}>
                <BiNews/>
              </span>
              <p className={styles.sidebarNavListItemLinkText}>Новости</p>
            </PrimaryLink>
          </li>
          <li className={styles.sidebarNavListItem}>
            <PrimaryLink
              href={RouterPaths.CatalogPage}
              className={styles.sidebarNavListItemLink}
              title="Каталог"
            >
              <span className={styles.sidebarNavListItemLinkIcon}>
                <GrCatalogOption/>
              </span>
              <p className={styles.sidebarNavListItemLinkText}>Каталог</p>
            </PrimaryLink>
          </li>
          <li className={styles.sidebarNavListItem}>
            <PrimaryLink
              href={RouterPaths.SupportPage}
              className={styles.sidebarNavListItemLink}
              title="Обратная связь"
            >
              <span className={styles.sidebarNavListItemLinkIcon}>
                <MdOutlineFeedback/>
              </span>
              <p className={styles.sidebarNavListItemLinkText}>Обратная связь</p>
            </PrimaryLink>
          </li>
          <li className={styles.sidebarNavListItem}>
            <PrimaryLink
              href={RouterPaths.SupportPage}
              className={styles.sidebarNavListItemLink}
              title="Поддержка"
            >
              <span className={styles.sidebarNavListItemLinkIcon}>
                <BiSupport/>
              </span>
              <p className={styles.sidebarNavListItemLinkText}>Поддержка</p>
            </PrimaryLink>
          </li>

          <span className={styles.sidebarNavListSeparater}/>
          <li className={styles.sidebarNavListItem}>
            <PrimaryLink
              href={RouterPaths.ProfilePage}
              className={styles.sidebarNavListItemLink}
              title="Профиль"
            >
              <span className={styles.sidebarNavListItemLinkIcon}>
                <CgProfile/>
              </span>
              <p className={styles.sidebarNavListItemLinkText}>Профиль</p>
            </PrimaryLink>
          </li>
          <li className={styles.sidebarNavListItem}>
            <PrimaryLink
              href={RouterPaths.CartPage}
              className={styles.sidebarNavListItemLink}
              title="Корзина"
            >
              <span className={styles.sidebarNavListItemLinkIcon}>
                <BsCart2/>
              </span>
              <p className={styles.sidebarNavListItemLinkText}>Корзина</p>
            </PrimaryLink>
          </li>
          <li className={styles.sidebarNavListItem}>
            <PrimaryLink
              href={RouterPaths.FavoritesPage}
              className={styles.sidebarNavListItemLink}
              title="Избранное"
            >
              <span className={styles.sidebarNavListItemLinkIcon}>
                <MdFavoriteBorder/>
              </span>
              <p className={styles.sidebarNavListItemLinkText}>Избранное</p>
            </PrimaryLink>
          </li>
          <li className={styles.sidebarNavListItem}>
            <PrimaryLink
              href={RouterPaths.NotifyPage}
              className={styles.sidebarNavListItemLink}
              title="Уведомления"
            >
              <span className={styles.sidebarNavListItemLinkIcon}>
                <MdNotificationsNone/>
              </span>
              <p className={styles.sidebarNavListItemLinkText}>Уведомления</p>
            </PrimaryLink>
          </li>
          <li className={styles.sidebarNavListItem}>
            <PrimaryLink
              href={RouterPaths.SettingsPage}
              className={styles.sidebarNavListItemLink}
              title="Настройки"
            >
              <span className={styles.sidebarNavListItemLinkIcon}>
                <SlSettings/>
              </span>
              <p className={styles.sidebarNavListItemLinkText}>Настройки</p>
            </PrimaryLink>
          </li>
        </ul>
        <ul className={styles.sidebarNavList}>
          <span className={styles.sidebarNavListSeparater}/>
          <li className={styles.sidebarNavListItem}>
            <PrimaryLink
              href="/"
              styleType="danger"
              className={styles.sidebarNavListItemLink}
              title="Выход"
            >
              <span className={styles.sidebarNavListItemLinkIcon}>
                <AiOutlinePoweroff/>
              </span>
              <p className={styles.sidebarNavListItemLinkText}>Выход</p>
            </PrimaryLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
