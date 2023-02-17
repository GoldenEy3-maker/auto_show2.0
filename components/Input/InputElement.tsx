import type {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction
} from 'react'

import { useRipplesHighlight } from '@/hooks/ripplesHighlight'
import { setStaticCls } from '@/utils/setCls'
import PrimaryButton from '../Button/PrimaryButton'

import { IoMdClose } from 'react-icons/io'

import styles from './InputElement.module.scss'

interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  leadingIcon: ReactNode
  trailingResetButton?: boolean
  setValue: Dispatch<SetStateAction<string>>
}

export default function InputElement({
  className,
  leadingIcon,
  trailingResetButton,
  setValue,
  ...attr
}: InputElementProps) {
  const handleRipplesEffectPointerDownEvent = useRipplesHighlight()

  function resetValueHandler() {
    setValue('')
  }

  return (
    <div className={setStaticCls(styles.inputElement, className)}>
      {leadingIcon ? (
        <label
          htmlFor={attr.id}
          onPointerDown={handleRipplesEffectPointerDownEvent}
          title='Фокус на поле ввода'
          className={styles.inputElementLeadingIcon}
        >
          {leadingIcon}
        </label>
      ) : null}
      <input {...attr} />
      {trailingResetButton && !!attr.value ? (
        <PrimaryButton
          type='reset'
          className={styles.inputElementTrailingIcon}
          title='Отчистить поле ввода'
          onClick={resetValueHandler}
        >
          <IoMdClose />
        </PrimaryButton>
      ) : null}
    </div>
  )
}
