import type { MouseEventHandler, ReactNode } from 'react'

import PrimaryButton from '@/components/Button/PrimaryButton'

import styles from './HeaderActions.module.scss'

interface HeaderActionsItemProps {
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
}: HeaderActionsItemProps) {
  return (
    <li className={styles.headerActionsItem}>
      <PrimaryButton
        type='button'
        className={styles.headerActionsItemIcon}
        title={title}
        onClick={onClickHandler}
      >
        {icon}
      </PrimaryButton>
      {children}
    </li>
  )
}
