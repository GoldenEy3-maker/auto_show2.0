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
import { NotifyData } from '@/typescript/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { FiMoreVertical } from 'react-icons/fi'
import headerActionsStyles from '../HeaderActions.module.scss'
import styles from './HeaderActionsNotify.module.scss'
import HeaderActionsNotifyItem from './HeaderActionsNotifyItem'

interface HeaderActionsNotify extends HeaderActionsMenuProps {}

export default function HeaderActionsNotify({
  state,
  toggleMenuStateHandler,
}: HeaderActionsNotify) {
  const [notifyData, setNotifyData] = useState<NotifyData[]>(
    [
      {
        id: 1,
        img: 'https://via.placeholder.com/50',
        title: 'Lorem ipsum test test test 2 text dwad d dw dw dw dw wd wd ',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint iure repellendus atque, reprehenderit quidem dolor enim esse magni earum in nemo blanditiis error mollitia totam? Optio enim omnis pariatur.',
        date: new Date('2023-02-21 8:30'),
      },
      {
        id: 2,
        img: 'https://via.placeholder.com/50',
        title: 'Lorem ipsum test consectetut',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint iure repellendus atque, reprehenderit quidem dolor enim esse magni earum in nemo blanditiis error mollitia totam? Optio enim omnis pariatur.',
        date: new Date('2023-02-20 11:22'),
      },
      {
        id: 3,
        img: 'https://via.placeholder.com/50',
        title: 'Lorem ipsum test',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint iure repellendus atque, reprehenderit quidem dolor enim esse magni earum in nemo blanditiis error mollitia totam? Optio enim omnis pariatur.',
        date: new Date('2023-02-10 13:20'),
      },
      {
        id: 4,
        img: 'https://via.placeholder.com/50',
        title: 'Lorem ipsum test',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint iure repellendus atque, reprehenderit quidem dolor enim esse magni earum in nemo blanditiis error mollitia totam? Optio enim omnis pariatur.',
        date: new Date('2023-01-10 13:20'),
      },
      {
        id: 5,
        img: 'https://via.placeholder.com/50',
        title: 'Lorem ipsum test',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint iure repellendus atque, reprehenderit quidem dolor enim esse magni earum in nemo blanditiis error mollitia totam? Optio enim omnis pariatur.',
        date: new Date('2023-01-12 13:20'),
      },
      {
        id: 6,
        img: 'https://via.placeholder.com/50',
        title: 'Lorem ipsum test',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint iure repellendus atque, reprehenderit quidem dolor enim esse magni earum in nemo blanditiis error mollitia totam? Optio enim omnis pariatur.',
        date: new Date('2023-01-21 8:30'),
      },
      {
        id: 7,
        img: 'https://via.placeholder.com/50',
        title: 'Lorem ipsum test consectetur adipisicing elit',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint iure repellendus atque, reprehenderit quidem dolor enim esse magni earum in nemo blanditiis error mollitia totam? Optio enim omnis pariatur.',
        date: new Date('2023-02-15 11:22'),
      },
      {
        id: 8,
        img: 'https://via.placeholder.com/50',
        title: 'Lorem ipsum test',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint iure repellendus atque, reprehenderit quidem dolor enim esse magni earum in nemo blanditiis error mollitia totam? Optio enim omnis pariatur.',
        date: new Date('2023-02-11 13:20'),
      },
      {
        id: 9,
        img: 'https://via.placeholder.com/50',
        title: 'Lorem ipsum test',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint iure repellendus atque, reprehenderit quidem dolor enim esse magni earum in nemo blanditiis error mollitia totam? Optio enim omnis pariatur.',
        date: new Date('2023-02-17 13:20'),
      },
      {
        id: 10,
        img: 'https://via.placeholder.com/50',
        title: 'Lorem ipsum test',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint iure repellendus atque, reprehenderit quidem dolor enim esse magni earum in nemo blanditiis error mollitia totam? Optio enim omnis pariatur.',
        date: new Date('2022-12-10 13:20'),
      },
    ].sort((a, b) => {
      return b.date.getTime() - a.date.getTime()
    })
  )

  const [isNotifyOff, setIsNotifyOff] = useState(false)

  function changeNotifyOffHandler() {
    setIsNotifyOff((prev) => {
      localStorage.setItem(LocalStorageNames.IsNotifyOff, String(!prev))

      return !prev
    })
  }

  function clearNotify() {
    setNotifyData([])
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
                    <PrimaryButton
                      title='Удалить все уведомления'
                      styleType='danger'
                      onClick={clearNotify}
                    >
                      Удалить все уведомления
                    </PrimaryButton>
                  </li>
                </ul>
              </PrimaryButtonContextMenu>
            </div>
          </header>
          <div className={headerActionsStyles.headerActionsMenuBody}>
            {notifyData && notifyData.length > 0 ? (
              <ul>
                {notifyData.map((notifyItem) => (
                  <li key={notifyItem.id}>
                    <HeaderActionsNotifyItem {...notifyItem} />
                  </li>
                ))}
              </ul>
            ) : (
              <h1>Уведомлений нет</h1>
            )}
          </div>
        </div>
      </div>
    </HeaderActionsItem>
  )
}
