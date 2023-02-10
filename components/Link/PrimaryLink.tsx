import { useRipplesHighlight } from '@/hooks/ripplesHighlight'
import { setDynamicCls, setStaticCls } from '@/lib/setCls'
import Link, { LinkProps } from 'next/link'
import { HTMLProps, ReactNode, RefAttributes } from 'react'
import styles from './PrimaryLink.module.scss'

const { primaryLink, _dangerType, _isHovering } = styles

type TPrimaryLinkStyleType = 'normal' | 'danger'

type TPrimaryLinkProps = {
  children: ReactNode
  styleType?: TPrimaryLinkStyleType
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
}: TPrimaryLinkProps) {
  const handleRipplesEffectPointerDownEvent = useRipplesHighlight()

  return (
    <Link
      className={setDynamicCls({
        stClasses: [primaryLink, className],
        dnClasses: [[_dangerType], [_isHovering]],
        conditions: [styleType === 'danger', !!isHovering],
      })}
      onPointerDown={handleRipplesEffectPointerDownEvent}
      {...attr}
    >
      {children}
    </Link>
  )
}
