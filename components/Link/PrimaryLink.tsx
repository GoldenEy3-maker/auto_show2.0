import { useRipplesHighlight } from '@/hooks/ripplesHighlight'
import { setDynamicCls, setStaticCls } from '@/utils/setCls'
import Link, { LinkProps } from 'next/link'
import { HTMLProps, ReactNode, RefAttributes } from 'react'
import styles from './PrimaryLink.module.scss'

type PrimaryLinkStyleType = 'normal' | 'danger'

type PrimaryLinkProps = {
  children: ReactNode
  styleType?: PrimaryLinkStyleType
  isHovering?: boolean
} & LinkProps &
  RefAttributes<HTMLAnchorElement> &
  HTMLProps<HTMLAnchorElement>

export default function PrimaryLink({
  className,
  children,
  styleType = 'normal',
  isHovering = true,
  ...attr
}: PrimaryLinkProps) {
  const handleRipplesEffectPointerDownEvent = useRipplesHighlight()

  return (
    <Link
      className={setDynamicCls({
        stClasses: [styles.primaryLink, className],
        dnClasses: [[styles._dangerType], [styles._isHovering]],
        conditions: [styleType === 'danger', !!isHovering],
      })}
      onPointerDown={handleRipplesEffectPointerDownEvent}
      {...attr}
    >
      {children}
    </Link>
  )
}
