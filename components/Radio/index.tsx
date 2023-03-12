import { useRippleHighlight } from "@/hooks/rippleHighlight"
import { setDynamicCls } from "@/utils/setCls"
import { InputHTMLAttributes, ReactNode } from "react"
import { BsCheck } from "react-icons/bs"
import styles from "./RadioSelect.module.scss"

interface RadioSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  labelIcon?: ReactNode
}

export default function RadioSelect({
                                      label,
                                      labelIcon,
                                      id,
                                      className,
                                      checked,
                                      ...restAttrs
                                    }: RadioSelectProps) {
  const rippleEffectPointerDownHandler = useRippleHighlight()

  return (
    <div
      className={setDynamicCls({
        stClasses: [styles.radioSelectElement, className],
        dnClasses: [[styles._checked], [styles._labelIcon]],
        conditions: [!!checked, !!labelIcon]
      })}
    >
      <label
        htmlFor={id}
        onPointerDown={rippleEffectPointerDownHandler}
        title={label}
      >
        {labelIcon ? labelIcon : (
          <>
            <p>{label}</p>
            <span className={styles.radioSelectElementIcon}>
              <BsCheck/>
            </span>
          </>
        )}

      </label>
      <input type="radio" id={id} checked={checked} {...restAttrs} />
    </div>
  )
}
