import { HeaderActionsMenuProps } from '../HeaderActions'
import HeaderActionsItem from '../HeaderActionsItem'

import { BsCart2 } from 'react-icons/bs'

import headerActionsStyles from '../HeaderActions.module.scss'

interface HeaderActionsCartProps extends HeaderActionsMenuProps {}

export default function HeaderActionsCart({
  state,
  toggleMenuStateHandler,
}: HeaderActionsCartProps) {
  return (
    <HeaderActionsItem
      title='Корзина'
      icon={<BsCart2 />}
      onClickHandler={toggleMenuStateHandler.bind(null, 'cart')}
    >
      <div
        className={headerActionsStyles.headerActionsMenu}
        aria-hidden={state}
      >
        <header className={headerActionsStyles.headerActionsMenuHeader}>
          Корзина
        </header>
      </div>
    </HeaderActionsItem>
  )
}
