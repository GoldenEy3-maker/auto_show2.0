import PrimaryButton from '@/components/Button/PrimaryButton'
import { useRipplesHighlight } from '@/hooks/ripplesHighlight'
import { setStaticCls } from '@/utils/setCls'
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
  const ripplesEffectPointerDownHandler = useRipplesHighlight()

  return (
    <div className={setStaticCls(styles.radioSelectElement, className)}>
      <label
        htmlFor={id}
        onPointerDown={ripplesEffectPointerDownHandler}
        title={label}
      >
        <p>{label}</p>
        {checked ? (
          <span className={styles.radioSelectElementIcon}>
            <BsCheck />
          </span>
        ) : null}
      </label>
      <input type='radio' id={id} checked={checked} {...restAttrs} />
    </div>
  )
}
