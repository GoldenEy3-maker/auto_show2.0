import { useRippleHighlight } from '@/hooks/rippleHighlight'
import { setDynamicCls, setStaticCls } from '@/utils/setCls'
import { InputHTMLAttributes } from 'react'
import { BsCheck } from 'react-icons/bs'
import styles from './RadioSelect.module.scss'

interface RadioSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function RadioSelect({
  label,
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
        dnClasses: [[styles._checked]],
        conditions: [!!checked],
      })}
    >
      <label
        htmlFor={id}
        onPointerDown={rippleEffectPointerDownHandler}
        title={label}
      >
        <p>{label}</p>
        <span className={styles.radioSelectElementIcon}>
          <BsCheck />
        </span>
      </label>
      <input type='radio' id={id} checked={checked} {...restAttrs} />
    </div>
  )
}
