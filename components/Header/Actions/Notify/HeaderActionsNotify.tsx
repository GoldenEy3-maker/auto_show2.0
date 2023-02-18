import HeaderActionsItem from '../HeaderActionsItem'

import { setStaticCls } from '@/utils/setCls'
import { MdNotificationsNone } from 'react-icons/md'
import { HeaderActionsMenuProps } from '../HeaderActions'

import PrimaryButton from '@/components/Button/PrimaryButton'
import PrimaryButtonContextMenu from '@/components/Button/PrimaryButtonContextMenu'
import PrimaryLink from '@/components/Link/PrimaryLink'
import Image from 'next/image'
import { BsCheck2 } from 'react-icons/bs'
import { FiMoreVertical } from 'react-icons/fi'
import headerActionsStyles from '../HeaderActions.module.scss'
import styles from './HeaderActionsNotify.module.scss'
import HeaderActionsNotifyOffCheckbox from './HeaderActionsNotifyOffCheckbox'

interface HeaderActionsNotify extends HeaderActionsMenuProps {}

export default function HeaderActionsNotify({
  state,
  toggleMenuStateHandler,
}: HeaderActionsNotify) {
  return (
    <HeaderActionsItem
      onClickHandler={toggleMenuStateHandler.bind(null, 'notify')}
      icon={<MdNotificationsNone />}
      title='Уведомления'
    >
      <div
        className={setStaticCls(
          headerActionsStyles.headerActionsMenu,
          styles.headerActionsNotify
        )}
        aria-hidden={state}
      >
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
                  <HeaderActionsNotifyOffCheckbox />
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
        <div className={headerActionsStyles.headerActionsMenuWrapper}>
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
                    Nisi sint iure repellendus atque, reprehenderit quidem dolor
                    enim esse magni earum in nemo blanditiis error mollitia
                    totam? Optio enim omnis pariatur.
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
                    Nisi sint iure repellendus atque, reprehenderit quidem dolor
                    enim esse magni earum in nemo blanditiis error mollitia
                    totam? Optio enim omnis pariatur.
                  </p>
                </div>
              </PrimaryLink>
            </li>
          </ul>
        </div>
      </div>
    </HeaderActionsItem>
  )
}
