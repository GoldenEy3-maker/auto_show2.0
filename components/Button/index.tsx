import { useRippleHighlight } from "@/hooks/rippleHighlight"
import { InteractionElementsStyleType } from "@/typescript/types"
import { setDynamicCls } from "@/utils/setCls"
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"
import styles from "./PrimaryButton.module.scss"

export interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isHovering?: boolean
  styleType?: InteractionElementsStyleType
  isBackgroundColor?: boolean
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (
    {
      className,
      children,
      isHovering = true,
      isBackgroundColor = false,
      styleType = "normal",
      ...attr
    },
    ref
  ) => {
    const handleRippleEffectPointerDownEvent = useRippleHighlight()

    return (
      <button
        className={setDynamicCls({
          stClasses: [styles.primaryButton, className],
          dnClasses: [
            [styles._grayType],
            [styles._dangerType],
            [styles._isHovering],
            [styles._isBackgroundColor],
          ],
          conditions: [
            styleType === "gray",
            styleType === "danger",
            !!isHovering,
            isBackgroundColor,
          ],
        })}
        onPointerDown={handleRippleEffectPointerDownEvent}
        ref={ref}
        {...attr}
      >
        {children}
      </button>
    )
  }
)

PrimaryButton.displayName = "PrimaryButton"

export default PrimaryButton

// export default function PrimaryButton({
//   className,
//   children,
//   isHovering = true,
//   isBackgroundColor = false,
//   styleType = "normal",
//   ...attr
// }: PrimaryButtonProps) {
//   const handleRippleEffectPointerDownEvent = useRippleHighlight()

//   return (
//     <button
//       className={setDynamicCls({
//         stClasses: [styles.primaryButton, className],
//         dnClasses: [
//           [styles._grayType],
//           [styles._dangerType],
//           [styles._isHovering],
//           [styles._isBackgroundColor],
//         ],
//         conditions: [
//           styleType === "gray",
//           styleType === "danger",
//           !!isHovering,
//           isBackgroundColor,
//         ],
//       })}
//       onPointerDown={handleRippleEffectPointerDownEvent}
//       {...attr}
//     >
//       {children}
//     </button>
//   )
// }
