import { RouterPaths } from "@/typescript/enums"
import { setStaticCls } from "@/utils/setCls"
import Link from "next/link"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa"
import { SlSocialVkontakte } from "react-icons/sl"
import PrimaryLink from "../Link"
import styles from "./Footer.module.scss"
import FooterForm from "./Form"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={setStaticCls(styles.footerWrapper, "_container")}>
        <nav className={styles.footerNav}>
          <div className={styles.footerNavSocial}>
            <h3 className={styles.footerNavSocialTitle}>Социальные сети</h3>
            <ul className={styles.footerNavSocialList}>
              <li className={styles.footerNavSocialListItem}>
                <PrimaryLink
                  href="/"
                  title="Телеграм"
                  target="_blank"
                  isBackgroundColor
                >
                  <FaTelegramPlane/>
                </PrimaryLink>
              </li>
              <li className={styles.footerNavSocialListItem}>
                <PrimaryLink
                  href="/"
                  title="Вконтакте"
                  target="_blank"
                  isBackgroundColor
                >
                  <SlSocialVkontakte/>
                </PrimaryLink>
              </li>
              <li className={styles.footerNavSocialListItem}>
                <PrimaryLink
                  href="/"
                  title="WhatsApp"
                  target="_blank"
                  isBackgroundColor
                >
                  <AiOutlineWhatsApp/>
                </PrimaryLink>
              </li>
            </ul>
          </div>

          <div className={styles.footerNavMenus}>
            <div className={styles.footerNavMenu}>
              <h3 className={styles.footerNavMenuTitle}>Навигация</h3>
              <ul className={styles.footerNavMenuList}>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.HomePage} title="Главная">
                    Главная
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.NewsPage} title="Новости">
                    Новости
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.CatalogPage} title="Каталог">
                    Каталог
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.AuthPage} title="Аккаунт">
                    Аккаунт
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link
                    href={RouterPaths.SupportPage}
                    title="Обратная связь"
                  >
                    Обратная связь
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link
                    href={RouterPaths.SupportPage}
                    title="Техническая поддержка"
                  >
                    Техническая поддержка
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerNavMenu}>
              <h3 className={styles.footerNavMenuTitle}>
                Дополнительная информация
              </h3>
              <ul className={styles.footerNavMenuList}>
                <li className={styles.footerNavMenuListItem}>
                  <span>Email:</span>
                  <Link
                    href="mailto:danil-danil-korolev@bk.ru"
                    title="danil-danil-korolev@bk.ru"
                  >
                    danil-danil-korolev@bk.ru
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <span>Номер телефона:</span>

                  <Link href="tel:+79132253147" title="+7 (913) 225 31-47">
                    +7 (913) 225 31-47
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.RegisterPage} title="FAQ">
                    FAQ
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.HomePage} title="Политика конфиденциальности">
                    Политика конфиденциальности
                  </Link>
                </li>
                <li className={styles.footerNavMenuListItem}>
                  <Link href={RouterPaths.HomePage} title="Пользовательское соглашение">
                    Пользовательское соглашение
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerNavMenu}>
              <h3 className={styles.footerNavMenuTitle}>
                Подписка на рассылку
              </h3>
              <FooterForm/>
            </div>
          </div>
        </nav>
        <div className={styles.footerCopyright}>
          <p>Copyright @ 2023 Колледж АлтГУ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
