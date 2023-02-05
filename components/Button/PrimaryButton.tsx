import { useRipplesHighlight } from '@/hooks/ripplesHighlight'
import { setStaticCls } from '@/lib/setCls'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './PrimaryButton.module.scss'

const { primaryButton } = styles

interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function PrimaryButton({
  className,
  children,
  ...attr
}: IPrimaryButtonProps) {
  const ripplesPointerClickHandler = useRipplesHighlight()

  return (
    <button
      className={setStaticCls(primaryButton, className)}
      onPointerDown={ripplesPointerClickHandler}
      {...attr}
    >
      {children}
    </button>
  )
}
