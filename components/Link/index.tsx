import { useRippleHighlight } from '@/hooks/rippleHighlight'
import { InteractionElementsStyleType } from '@/typescript/types'
import { setDynamicCls, setStaticCls } from '@/utils/setCls'
import Link, { LinkProps } from 'next/link'
import { HTMLProps, ReactNode, RefAttributes } from 'react'
import styles from './PrimaryLink.module.scss'

type PrimaryLinkProps = {
  children: ReactNode
  styleType?: InteractionElementsStyleType
  isHovering?: boolean
  isBackgroundColor?: boolean
} & LinkProps &
  RefAttributes<HTMLAnchorElement> &
  HTMLProps<HTMLAnchorElement>

export default function PrimaryLink({
  className,
  children,
  styleType = 'normal',
  isHovering = true,
  isBackgroundColor,
  ...attr
}: PrimaryLinkProps) {
  const handleRippleEffectPointerDownEvent = useRippleHighlight()

  return (
    <Link
      className={setDynamicCls({
        stClasses: [styles.primaryLink, className],
        dnClasses: [
          [styles._dangerType],
          [styles._grayType],
          [styles._isHovering],
          [styles._isBackgroundColor]
        ],
        conditions: [
          styleType === 'danger',
          styleType === 'gray',
          !!isHovering,
          !!isBackgroundColor
        ],
      })}
      onPointerDown={handleRippleEffectPointerDownEvent}
      {...attr}
    >
      {children}
    </Link>
  )
}
