import HeaderActionsItem from '../HeaderActionsItem'

import { setStaticCls } from '@/utils/setCls'
import { MdNotificationsNone } from 'react-icons/md'
import { HeaderActionsMenuProps } from '../HeaderActions'

import headerActionsStyles from '../HeaderActions.module.scss'
import styles from './HeaderActionsNotify.module.scss'

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
        <header className={headerActionsStyles.headerActionsMenuHeader}>
          Уведомления
        </header>
      </div>
    </HeaderActionsItem>
  )
}
