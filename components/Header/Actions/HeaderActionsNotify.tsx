import HeaderActionsItem from './HeaderActionsItem'

import mainStyles from './HeaderActionsNotify.module.scss'

import { setStaticCls } from '@/lib/setCls'
import { useRef, useState } from 'react'
import { MdNotificationsNone } from 'react-icons/md'
import { IActionsMenuProps } from './HeaderActions'
import secStyles from './HeaderActions.module.scss'

const { headerActionsNotify } = mainStyles

const { headerActionsMenu, headerActionsMenuHeader } = secStyles

export default function HeaderActionsNotify({
  state,
  toggleStateHandler,
}: IActionsMenuProps) {
  return (
    <HeaderActionsItem
      onClickHandler={toggleStateHandler.bind(null, 'notify')}
      icon={<MdNotificationsNone />}
      title='Уведомления'
    >
      <div
        className={setStaticCls(headerActionsMenu, headerActionsNotify)}
        aria-hidden={state}
      >
        <header className={headerActionsMenuHeader}>Уведомления</header>
      </div>
    </HeaderActionsItem>
  )
}
