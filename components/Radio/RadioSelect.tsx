import PrimaryButton from '@/components/Button/PrimaryButton'
import { useRipplesHighlight } from '@/hooks/ripplesHighlight'
import { setStaticCls } from '@/utils/setCls'
import { InputHTMLAttributes } from 'react'
import { BsCheck } from 'react-icons/bs'
import radioSelectStyles from './RadioSelect.module.scss'

const { radioSelectElement, radioSelectElementIcon } = radioSelectStyles

interface IRadioSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function RadioSelect({
  label,
  id,
  className,
  checked,
  ...restAttrs
}: IRadioSelectProps) {
  const ripplesEffectPointerDownHandler = useRipplesHighlight()

  return (
    <div className={setStaticCls(radioSelectElement, className)}>
      <label
        htmlFor={id}
        onPointerDown={ripplesEffectPointerDownHandler}
        title={label}
      >
        <p>{label}</p>
        {checked ? (
          <span className={radioSelectElementIcon}>
            <BsCheck />
          </span>
        ) : null}
      </label>
      <input type='radio' id={id} checked={checked} {...restAttrs} />
    </div>
  )
}
