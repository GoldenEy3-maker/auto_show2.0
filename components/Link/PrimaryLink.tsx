import { useRipplesHighlight } from '@/hooks/ripplesHighlight'
import { setStaticCls } from '@/lib/setCls'
import Link, { LinkProps } from 'next/link'
import { HTMLProps, ReactNode, RefAttributes } from 'react'
import styles from './PrimaryLink.module.scss'

const { primaryLink } = styles

type TPrimaryLinkProps = {
  children: ReactNode
} & LinkProps &
  RefAttributes<HTMLAnchorElement> &
  HTMLProps<HTMLAnchorElement>

export default function PrimaryLink({
  className,
  children,
  ...attr
}: TPrimaryLinkProps) {
  const ripplesPointerClickHandler = useRipplesHighlight()

  return (
    <Link
      className={setStaticCls(primaryLink, className)}
      onPointerDown={ripplesPointerClickHandler}
      {...attr}
    >
      {children}
    </Link>
  )
}
