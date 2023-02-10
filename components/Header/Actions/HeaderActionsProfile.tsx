import PrimaryButton from '@/components/Button/PrimaryButton'
import PrimaryLink from '@/components/Link/PrimaryLink'
import { ERouterPaths } from '@/typescript/enums'
import Link from 'next/link'
import { useRef } from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { GrSolaris } from 'react-icons/gr'
import { SlSettings } from 'react-icons/sl'
import { WiSolarEclipse } from 'react-icons/wi'
import HeaderActionsItem from './HeaderActionsItem'

import styles from './HeaderActionsProfile.module.scss'

const {
  headerActionsProfile,
  headerActionsProfile__wrapper,
  headerActionsProfileAvatar,
  headerActionsProfileInfo,
  headerActionsProfileInfoName,
  headerActionsProfileInfoEmail,
  headerActionsProfileInfoPhone,
  headerActionsProfile__separator,
  headerActionsProfileList,
  headerActionsProfileItem,
  headerActionsProfileItemLink,
  headerActionsProfileItemLinkIcon,
} = styles

export default function HeaderActionsProfile() {
  const menuRef = useRef<HTMLDivElement>(null)

  return (
    <HeaderActionsItem menuRef={menuRef} icon={<CgProfile />} title='Профиль'>
      <div className={headerActionsProfile} ref={menuRef} aria-hidden={false}>
        <div className={headerActionsProfile__wrapper}>
          <PrimaryLink
            href={ERouterPaths.ProfilePage}
            className={headerActionsProfileAvatar}
          >
            <div></div>
          </PrimaryLink>
          <div className={headerActionsProfileInfo}>
            <p className={headerActionsProfileInfoName}>
              Королев Данил Николаевич
            </p>
            <p className={headerActionsProfileInfoEmail}>
              danil-danil-korolev@bk.ru
            </p>
            <p className={headerActionsProfileInfoPhone}>+7 (913) 225 31-47</p>
          </div>
        </div>
        <span className={headerActionsProfile__separator}></span>
        <ul className={headerActionsProfileList}>
          <li className={headerActionsProfileItem}>
            <PrimaryLink
              href={ERouterPaths.SettingsPage}
              className={headerActionsProfileItemLink}
              title='Настройки'
            >
              <span className={headerActionsProfileItemLinkIcon}>
                <SlSettings />
              </span>
              <p>Настройки</p>
            </PrimaryLink>
          </li>
          <li className={headerActionsProfileItem}>
            <PrimaryButton
              className={headerActionsProfileItemLink}
              title='Сменить тему'
            >
              <span className={headerActionsProfileItemLinkIcon}>
                <GrSolaris />
              </span>
              <p>Сменить тему</p>
            </PrimaryButton>
          </li>
          <span className={headerActionsProfile__separator}></span>
          <li className={headerActionsProfileItem}>
            <PrimaryLink
              href={ERouterPaths.HomePage}
              className={headerActionsProfileItemLink}
              styleType='danger'
              title='Выход'
            >
              <span className={headerActionsProfileItemLinkIcon}>
                <AiOutlinePoweroff />
              </span>
              <p>Выход</p>
            </PrimaryLink>
          </li>
        </ul>
      </div>
    </HeaderActionsItem>
  )
}
