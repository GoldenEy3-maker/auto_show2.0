import { IActionsMenuProps } from './HeaderActions'
import HeaderActionsItem from './HeaderActionsItem'

import { BsCart2 } from 'react-icons/bs'

import actionsStyles from './HeaderActions.module.scss'

const { headerActionsMenu, headerActionsMenuHeader } = actionsStyles

export default function HeaderActionsCart({
  state,
  toggleStateHandler,
}: IActionsMenuProps) {
  return (
    <HeaderActionsItem
      title='Корзина'
      icon={<BsCart2 />}
      onClickHandler={toggleStateHandler.bind(null, 'cart')}
    >
      <div className={headerActionsMenu} aria-hidden={state}>
        <header className={headerActionsMenuHeader}>Корзина</header>
      </div>
    </HeaderActionsItem>
  )
}
