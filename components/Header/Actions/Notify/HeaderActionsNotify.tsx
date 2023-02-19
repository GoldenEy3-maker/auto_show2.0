import HeaderActionsItem from '../HeaderActionsItem'

import { setStaticCls } from '@/utils/setCls'
import {
  MdOutlineNotificationsNone,
  MdOutlineNotificationsOff
} from 'react-icons/md'
import { HeaderActionsMenuProps } from '../HeaderActions'

import PrimaryButton from '@/components/Button/PrimaryButton'
import PrimaryButtonContextMenu from '@/components/Button/PrimaryButtonContextMenu'
import CheckboxElement from '@/components/Checkbox/CheckboxElement'
import PrimaryLink from '@/components/Link/PrimaryLink'
import { LocalStorageNames } from '@/typescript/enums'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { FiMoreVertical } from 'react-icons/fi'
import headerActionsStyles from '../HeaderActions.module.scss'
import styles from './HeaderActionsNotify.module.scss'

interface HeaderActionsNotify extends HeaderActionsMenuProps {}

export default function HeaderActionsNotify({
  state,
  toggleMenuStateHandler,
}: HeaderActionsNotify) {
  const [isNotifyOff, setIsNotifyOff] = useState(false)

  function changeNotifyOffHandler() {
    setIsNotifyOff((prev) => {
      localStorage.setItem(LocalStorageNames.IsNotifyOff, String(!prev))

      return !prev
    })
  }

  useEffect(() => {
    const storedIsNotifyOff = localStorage.getItem(
      LocalStorageNames.IsNotifyOff
    )

    if (storedIsNotifyOff) {
      setIsNotifyOff(storedIsNotifyOff === 'false' ? false : true)
    }
  }, [])

  return (
    <HeaderActionsItem
      onClickHandler={toggleMenuStateHandler.bind(null, 'notify')}
      icon={
        isNotifyOff ? (
          <MdOutlineNotificationsOff />
        ) : (
          <MdOutlineNotificationsNone />
        )
      }
      title='Уведомления'
    >
      <span className={styles.headerActionsNotifyIndicator}></span>
      <div
        className={setStaticCls(
          headerActionsStyles.headerActionsMenu,
          styles.headerActionsNotify
        )}
        aria-hidden={state}
      >
        <div className={headerActionsStyles.headerActionsMenuWrapper}>
          <header
            className={setStaticCls(
              headerActionsStyles.headerActionsMenuHeader,
              styles.headerActionsNotifyHeader
            )}
          >
            <p>Уведомления</p>
            <div className={styles.headerActionsNotifyHeaderActionButtons}>
              <PrimaryButton title='Отметить все как прочитанное' type='button'>
                <BsCheck2 />
              </PrimaryButton>

              <PrimaryButtonContextMenu
                buttonContent={<FiMoreVertical />}
                title='Настройки уведомлений'
                type='button'
              >
                <ul>
                  <li>
                    <CheckboxElement
                      label='Отключить уведомления'
                      id='notify-off'
                      name='notify-off'
                      onChange={changeNotifyOffHandler}
                      checked={isNotifyOff}
                      isSwitcher={true}
                    />
                  </li>
                  <li>
                    <PrimaryLink
                      href='/'
                      title='Удалить все уведомления'
                      styleType='danger'
                    >
                      Удалить все уведомления
                    </PrimaryLink>
                  </li>
                </ul>
              </PrimaryButtonContextMenu>
            </div>
          </header>
          <div className={headerActionsStyles.headerActionsMenuBody}>
            <ul>
              <li>
                <PrimaryLink
                  href='/'
                  className={setStaticCls(
                    styles.headerActionsNotifyItem,
                    styles._newNotify
                  )}
                  title='Lorem ipsum test'
                >
                  <div className={styles.headerActionsNotifyItemImg}>
                    <Image
                      src='https://via.placeholder.com/50'
                      width={50}
                      height={50}
                      alt=''
                    />
                  </div>
                  <div className={styles.headerActionsNotifyItemContent}>
                    <h3 className={styles.headerActionsNotifyItemTitle}>
                      <div className={styles.headerActionsNotifyItemTitleText}>
                        <p>
                          Lorem ipsum test dwadwa dwadaw Lorem ipsum test dwadwa
                          dwadaw
                        </p>
                      </div>

                      <span
                        className={styles.headerActionsNotifyItemIndicator}
                      ></span>
                      <time
                        className={styles.headerActionsNotifyItemTime}
                        title='Сегодня: 8:30'
                        dateTime='2023-02-16T8:30'
                      >
                        8:30
                      </time>
                    </h3>
                    <p className={styles.headerActionsNotifyItemText}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi sint iure repellendus atque, reprehenderit quidem
                      dolor enim esse magni earum in nemo blanditiis error
                      mollitia totam? Optio enim omnis pariatur.
                    </p>
                  </div>
                </PrimaryLink>
              </li>
              <li>
                <PrimaryLink
                  href='/'
                  className={styles.headerActionsNotifyItem}
                  title='Lorem ipsum test'
                >
                  <div className={styles.headerActionsNotifyItemImg}>
                    <Image
                      src='https://via.placeholder.com/50'
                      width={50}
                      height={50}
                      alt=''
                    />
                  </div>
                  <div className={styles.headerActionsNotifyItemContent}>
                    <h3 className={styles.headerActionsNotifyItemTitle}>
                      <div className={styles.headerActionsNotifyItemTitleText}>
                        <p>Lorem ipsum test dwadwa dwadaw </p>
                      </div>

                      <span
                        className={styles.headerActionsNotifyItemIndicator}
                      ></span>
                      <time
                        className={styles.headerActionsNotifyItemTime}
                        title='Сегодня: 8:30'
                        dateTime='2023-02-16T8:30'
                      >
                        8:30
                      </time>
                    </h3>
                    <p className={styles.headerActionsNotifyItemText}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi sint iure repellendus atque, reprehenderit quidem
                      dolor enim esse magni earum in nemo blanditiis error
                      mollitia totam? Optio enim omnis pariatur.
                    </p>
                  </div>
                </PrimaryLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderActionsItem>
  )
}
