import type { ReactNode, RefObject } from 'react'
import { useEffect, useRef } from 'react'

import PrimaryButton from '@/components/Button/PrimaryButton'

import { CgProfile } from 'react-icons/cg'

import styles from './HeaderActionsItem.module.scss'

const { headerActionsItem, headerActionsItemIcon } = styles

interface IHeaderActionsItemProps {
  children: ReactNode
  icon: ReactNode
  menuRef: RefObject<HTMLDivElement>
  title: string
}

export default function HeaderActionsItem({
  children,
  menuRef,
  icon,
  title
}: IHeaderActionsItemProps) {
  function toggleMenu() {
    if (menuRef.current)
      menuRef.current['ariaHidden'] =
        menuRef.current['ariaHidden'] === 'false' ? 'true' : 'false'
  }

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (
        !(event.target as HTMLLIElement).closest('.' + headerActionsItem) &&
        menuRef.current
      ) {
        menuRef.current['ariaHidden'] = 'false'
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => document.removeEventListener('click', handleDocumentClick)
  }, [menuRef])

  return (
    <li className={headerActionsItem}>
      <PrimaryButton
        type='button'
        className={headerActionsItemIcon}
        title={title}
        onClick={toggleMenu}
      >
        {icon}
      </PrimaryButton>
      {children}
    </li>
  )
}
