import { useRippleHighlight } from '@/hooks/rippleHighlight'
import { setDynamicCls } from '@/utils/setCls'
import { InputHTMLAttributes } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import styles from './CheckboxElement.module.scss'

interface CheckboxElementProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isSwitcher?: boolean
}

export default function CheckboxElement({
  label,
  isSwitcher,
  id,
  checked,
  ...restAttr
}: CheckboxElementProps) {
  const ripplesEffectPointerDownHandler = useRippleHighlight()

  return (
    <div
      className={setDynamicCls({
        stClasses: [styles.checkboxElement],
        dnClasses: [[styles._checked]],
        conditions: [!!checked],
      })}
    >
      <label
        htmlFor={id}
        title={label}
        onPointerDown={ripplesEffectPointerDownHandler}
      >
        <p>{label}</p>
        {isSwitcher ? (
          <div className={styles.checkboxElementSwitcher}>
            <span></span>
          </div>
        ) : (
          <div className={styles.checkboxElementCheck}>
            <span>
              <BsCheck2 />
            </span>
          </div>
        )}
      </label>

      <input type='checkbox' id={id} checked={checked} {...restAttr} />
    </div>
  )
}
