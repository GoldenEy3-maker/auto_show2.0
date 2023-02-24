import { RouterPaths } from '@/typescript/enums'
import { setStaticCls } from '@/utils/setCls'
import Link from 'next/link'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaTelegram, FaTelegramPlane } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import PrimaryLink from '../Link/PrimaryLink'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={setStaticCls(styles.footerWrapper, '_container')}>
        <nav className={styles.footerNav}>
          <div className={styles.footerNavSocial}>
            <h3 className={styles.footerNavSocialTitle}>Социальные сети</h3>
            <ul className={styles.footerNavSocialList}>
              <li className={styles.footerNavSocialListItem}>
                <PrimaryLink href='/' title='Телеграм' target='_blank'>
                  <FaTelegramPlane />
                </PrimaryLink>
              </li>
              <li className={styles.footerNavSocialListItem}>
                <PrimaryLink href='/' title='Вконтакте' target='_blank'>
                  <SlSocialVkontakte />
                </PrimaryLink>
              </li>
              <li className={styles.footerNavSocialListItem}>
                <PrimaryLink href='/' title='WhatsApp' target='_blank'>
                  <AiOutlineWhatsApp />
                </PrimaryLink>
              </li>
            </ul>
          </div>

          <div className={styles.footerNavMenus}>
            <div className={styles.footerNavMenu}>
              <h3 className={styles.footerNavMenuTitle}>Навигация</h3>
              <ul className={styles.footerNavMenuList}>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.HomePage} title='Главная'>
                    Главная
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.CatalogPage} title='Каталог'>
                    Каталог
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.AuthPage} title='Авторизация'>
                    Авторизация
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.RegisterPage} title='Регистрация'>
                    Регистрация
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link
                    href={RouterPaths.SupportPage}
                    title='Техническая поддержка'
                  >
                    Техническая поддержка
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerNavMenu}>
              <h3 className={styles.footerNavMenuTitle}>Навигация</h3>
              <ul className={styles.footerNavMenuList}>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.HomePage} title='Главная'>
                    Главная
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.CatalogPage} title='Каталог'>
                    Каталог
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.AuthPage} title='Авторизация'>
                    Авторизация
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.RegisterPage} title='Регистрация'>
                    Регистрация
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link
                    href={RouterPaths.SupportPage}
                    title='Техническая поддержка'
                  >
                    Техническая поддержка
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}
