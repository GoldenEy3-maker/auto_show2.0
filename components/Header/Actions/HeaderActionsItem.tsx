import type { MouseEventHandler, ReactNode } from 'react'
import { useEffect, useRef } from 'react'

import PrimaryButton from '@/components/Button/PrimaryButton'

import styles from './HeaderActions.module.scss'

const { headerActionsItem, headerActionsItemIcon } = styles

interface IHeaderActionsItemProps {
  children: ReactNode
  icon: ReactNode
  title: string
  onClickHandler: MouseEventHandler
}

export default function HeaderActionsItem({
  children,
  icon,
  title,
  onClickHandler,
}: IHeaderActionsItemProps) {
  return (
    <li className={headerActionsItem}>
      <PrimaryButton
        type='button'
        className={headerActionsItemIcon}
        title={title}
        onClick={onClickHandler}
      >
        {icon}
      </PrimaryButton>
      {children}
    </li>
  )
}
