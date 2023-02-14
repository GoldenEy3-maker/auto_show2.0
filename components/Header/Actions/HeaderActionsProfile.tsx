import PrimaryButton from '@/components/Button/PrimaryButton'
import PrimaryLink from '@/components/Link/PrimaryLink'
import { ERouterPaths } from '@/typescript/enums'
import Image from 'next/image'
import { MouseEvent, useRef, useState } from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaRegAddressBook } from 'react-icons/fa'
import { GrLanguage, GrSolaris } from 'react-icons/gr'
import { IoMdArrowBack } from 'react-icons/io'
import { SlSettings } from 'react-icons/sl'
import HeaderActionsItem from './HeaderActionsItem'

import { setStaticCls } from '@/lib/setCls'
import { IActionsMenuProps } from './HeaderActions'
import actionsStyles from './HeaderActions.module.scss'
import styles from './HeaderActionsProfile.module.scss'

type TSelectedMenu = 'changeTheme' | 'changeLang' | 'changeAddres' | null

const {
  headerActionsProfileHeader,
  headerActionsProfileHeaderAvatar,
  headerActionsProfileHeaderInfo,
  headerActionsProfileHeaderInfoName,
  headerActionsProfile__separator,
  headerActionsProfileList,
  headerActionsProfileItemLink,
  headerActionsProfileItemLinkIcon,
} = styles

const { headerActionsMenu, headerActionsMenuHeader } = actionsStyles

export default function HeaderActionsProfile({
  state,
  toggleStateHandler,
}: IActionsMenuProps) {
  const [selectedMenu, setSelectedMenu] = useState<TSelectedMenu>(null)

  function resetSelectedMenu() {
    setSelectedMenu(null)
  }

  function handleItemClick() {
    if (!state) resetSelectedMenu()

    toggleStateHandler('profile')
  }

  function handleSetSelectedMenu(selectMenu: TSelectedMenu, event: MouseEvent) {
    event.stopPropagation()
    setSelectedMenu(selectMenu)
  }

  return (
    <HeaderActionsItem
      onClickHandler={handleItemClick}
      icon={<CgProfile />}
      title='Профиль'
    >
      <div className={headerActionsMenu} aria-hidden={state}>
        {selectedMenu === null ? (
          <>
            <header
              className={setStaticCls(
                headerActionsMenuHeader,
                headerActionsProfileHeader
              )}
            >
              <PrimaryLink
                href={ERouterPaths.ProfilePage}
                className={headerActionsProfileHeaderAvatar}
              >
                <Image
                  src='https://via.placeholder.com/100'
                  alt='placeholder'
                  width={100}
                  height={100}
                />
                {/* <div></div> */}
              </PrimaryLink>
              <div className={headerActionsProfileHeaderInfo}>
                <p className={headerActionsProfileHeaderInfoName}>
                  Королев Данил Николаевич
                </p>
                <p>danil-danil-korolev@bk.ru</p>
                <p>+7 (913) 225 31-47</p>
              </div>
            </header>
            {/* <span className={headerActionsProfile__separator}></span> */}
            <ul className={headerActionsProfileList}>
              <li>
                <PrimaryButton
                  className={headerActionsProfileItemLink}
                  title='Сменить тему'
                  onClick={handleSetSelectedMenu.bind(null, 'changeTheme')}
                >
                  <span className={headerActionsProfileItemLinkIcon}>
                    <GrSolaris />
                  </span>
                  <p>
                    Сменить тему: <span>Темная</span>
                  </p>
                </PrimaryButton>
              </li>
              <li>
                <PrimaryButton
                  className={headerActionsProfileItemLink}
                  title='Выбрать язык'
                >
                  <span className={headerActionsProfileItemLinkIcon}>
                    <GrLanguage />
                  </span>
                  <p>
                    Выбрать язык: <span>Русский язык</span>
                  </p>
                </PrimaryButton>
              </li>
              <li>
                <PrimaryButton
                  className={headerActionsProfileItemLink}
                  title='Указать город'
                >
                  <span className={headerActionsProfileItemLinkIcon}>
                    <FaRegAddressBook />
                  </span>
                  <p>
                    Указать город: <span>Барнаул</span>
                  </p>
                </PrimaryButton>
              </li>
              <span className={headerActionsProfile__separator}></span>
              <li>
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
              <span className={headerActionsProfile__separator}></span>
              <li>
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
          </>
        ) : null}
        {selectedMenu === 'changeTheme' ? (
          <div>
            <header className={headerActionsMenuHeader}>
              <PrimaryButton
                type='button'
                onClick={handleSetSelectedMenu.bind(null, null)}
              >
                <IoMdArrowBack />
              </PrimaryButton>
              <p>Выберите тему</p>
            </header>

            <ul>
              <li>
                <label htmlFor='system'>Как в системе</label>
                <input type='radio' id='system' name='theme' />
              </li>
              <li>
                <label htmlFor='dark'>Темная</label>
                <input type='radio' id='dark' name='theme' />
              </li>
              <li>
                <label htmlFor='light'>Светлая</label>
                <input type='radio' id='light' name='theme' />
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </HeaderActionsItem>
  )
}
