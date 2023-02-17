import { useRipplesHighlight } from '@/hooks/ripplesHighlight'
import { setDynamicCls } from '@/utils/setCls'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './PrimaryButton.module.scss'

type PrimaryButtonStyleType = 'normal' | 'gray'

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isHovering?: boolean
  styleType?: PrimaryButtonStyleType
  isBackgroundColor?: boolean
}

// const PrimaryButton = forwardRef<HTMLButtonElement, IPrimaryButtonProps>(
//   ({ className, children, isHovering = true, ...attr }, ref) => {
//     const ripplesPointerClickHandler = useRipplesHighlight()

//     return (
//       <button
//         className={setDynamicCls({
//           stClasses: [primaryButton, className],
//           dnClasses: [[_isHovering]],
//           conditions: [!!isHovering],
//         })}
//         onPointerDown={ripplesPointerClickHandler}
//         {...attr}
//         ref={ref}
//       >
//         {children}
//       </button>
//     )
//   }
// )

// PrimaryButton.displayName = 'Test'

// export default PrimaryButton

export default function PrimaryButton({
  className,
  children,
  isHovering = true,
  isBackgroundColor = false,
  styleType = 'normal',
  ...attr
}: PrimaryButtonProps) {
  const handleRipplesEffectPointerDownEvent = useRipplesHighlight()

  return (
    <button
      className={setDynamicCls({
        stClasses: [styles.primaryButton, className],
        dnClasses: [
          [styles._isHovering],
          [styles._grayType],
          [styles._isBackgroundColor],
        ],
        conditions: [!!isHovering, styleType === 'gray', isBackgroundColor],
      })}
      onPointerDown={handleRipplesEffectPointerDownEvent}
      {...attr}
    >
      {children}
    </button>
  )
}
