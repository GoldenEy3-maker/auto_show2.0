import { HeaderActionsMenuProps } from '../HeaderActions'
import HeaderActionsItem from '../HeaderActionsItem'

import { MdFavoriteBorder } from 'react-icons/md'
import headerActionsStyles from '../HeaderActions.module.scss'

interface HeaderActionsFavoriteProps extends HeaderActionsMenuProps {}

export default function HeaderActionsFavorite({
  state,
  toggleMenuStateHandler,
}: HeaderActionsFavoriteProps) {
  return (
    <HeaderActionsItem
      title='Избранное'
      icon={<MdFavoriteBorder />}
      onClickHandler={toggleMenuStateHandler.bind(null, 'favorite')}
    >
      <div
        className={headerActionsStyles.headerActionsMenu}
        aria-hidden={state}
      >
        <div className={headerActionsStyles.headerActionsMenuWrapper}>
          <header className={headerActionsStyles.headerActionsMenuHeader}>
            Избранное
          </header>
        </div>
      </div>
    </HeaderActionsItem>
  )
}
