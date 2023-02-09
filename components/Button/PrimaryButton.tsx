import { useRipplesHighlight } from '@/hooks/ripplesHighlight'
import { setDynamicCls, setStaticCls } from '@/lib/setCls'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './PrimaryButton.module.scss'

const { primaryButton, _isHovering } = styles

interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isHovering?: boolean
}

export default function PrimaryButton({
  className,
  children,
  isHovering = true,
  ...attr
}: IPrimaryButtonProps) {
  const ripplesPointerClickHandler = useRipplesHighlight()

  return (
    <button
      className={setDynamicCls({
        stClasses: [primaryButton, className],
        dnClasses: [[_isHovering]],
        conditions: [!!isHovering],
      })}
      onPointerDown={ripplesPointerClickHandler}
      {...attr}
    >
      {children}
    </button>
  )
}
