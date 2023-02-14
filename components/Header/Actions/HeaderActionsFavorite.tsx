import { IActionsMenuProps } from './HeaderActions'
import HeaderActionsItem from './HeaderActionsItem'

import { MdFavoriteBorder } from 'react-icons/md'
import actionsStyles from './HeaderActions.module.scss'

const { headerActionsMenu, headerActionsMenuHeader } = actionsStyles

export default function HeaderActionsFavorite({
  state,
  toggleStateHandler,
}: IActionsMenuProps) {
  return (
    <HeaderActionsItem
      title='Избранное'
      icon={<MdFavoriteBorder />}
      onClickHandler={toggleStateHandler.bind(null, 'favorite')}
    >
      <div className={headerActionsMenu} aria-hidden={state}>
        <header className={headerActionsMenuHeader}>Избранное</header>
      </div>
    </HeaderActionsItem>
  )
}
