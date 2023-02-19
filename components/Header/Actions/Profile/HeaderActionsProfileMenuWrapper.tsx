import PrimaryButton from '@/components/Button/PrimaryButton'
import { ReactNode } from 'react'
import { IoMdArrowBack } from 'react-icons/io'

import headerActionsStyles from '../HeaderActions.module.scss'
import { HeaderActionsProfileMenuProps } from './HeaderActionsProfile'

interface HeaderActionsProfileMenuWrapperProps
  extends HeaderActionsProfileMenuProps {
  children: ReactNode
  title: string
}

export default function HeaderActionsProfileMenuWrapper({
  children,
  title,
  backButtonClickHandler,
}: HeaderActionsProfileMenuWrapperProps) {
  return (
    <>
      <header className={headerActionsStyles.headerActionsMenuHeader}>
        <PrimaryButton
          type='button'
          onClick={backButtonClickHandler}
          title='Вернуться назад'
        >
          <IoMdArrowBack />
        </PrimaryButton>
        <p>{title}</p>
      </header>
      <div className={headerActionsStyles.headerActionsMenuWrapper}>
        {children}
      </div>
    </>
  )
}
