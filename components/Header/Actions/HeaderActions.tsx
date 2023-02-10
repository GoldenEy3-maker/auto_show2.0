import { BsCart2 } from 'react-icons/bs'
import { MdFavoriteBorder, MdNotificationsNone } from 'react-icons/md'

import PrimaryButton from '../../Button/PrimaryButton'
import styles from './HeaderActions.module.scss'
import HeaderActionsProfile from './HeaderActionsProfile'

const {
  headerActions,
  headerActionsList,
  headerActionsItem,
  headerActionsItemIcon,
} = styles

export default function HeaderActions() {
  return (
    <div className={headerActions}>
      <ul className={headerActionsList}>
        <li className={headerActionsItem}>
          <PrimaryButton
            type='button'
            className={headerActionsItemIcon}
            title='Избранное'
          >
            <MdFavoriteBorder />
          </PrimaryButton>
        </li>
        <li className={headerActionsItem}>
          <PrimaryButton
            type='button'
            className={headerActionsItemIcon}
            title='Корзина'
          >
            <BsCart2 />
          </PrimaryButton>
        </li>
        <li className={headerActionsItem}>
          <PrimaryButton
            type='button'
            className={headerActionsItemIcon}
            title='Уведомления'
          >
            <MdNotificationsNone />
          </PrimaryButton>
        </li>
        <HeaderActionsProfile />
      </ul>
    </div>
  )
}
