import { BsCart2 } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { MdFavoriteBorder, MdNotificationsNone } from 'react-icons/md'
import PrimaryButton from '../Button/PrimaryButton'
import styles from './HeaderActions.module.scss'

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
          <PrimaryButton type='button' className={headerActionsItemIcon} title='Избранное'>
            <MdFavoriteBorder />
          </PrimaryButton>
        </li>
        <li className={headerActionsItem}>
          <PrimaryButton type='button' className={headerActionsItemIcon} title='Корзина'>
            <BsCart2 />
          </PrimaryButton>
        </li>
        <li className={headerActionsItem}>
          <PrimaryButton type='button' className={headerActionsItemIcon} title='Уведомления'>
            <MdNotificationsNone />
          </PrimaryButton>
        </li>
        <li className={headerActionsItem}>
          <PrimaryButton type='button' className={headerActionsItemIcon} title='Профиль'>
            <CgProfile />
          </PrimaryButton>
        </li>
      </ul>
    </div>
  )
}
