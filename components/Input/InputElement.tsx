import type {
  Dispatch,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  SetStateAction
} from 'react'

import { useRippleHighlight } from '@/hooks/rippleHighlight'
import { setStaticCls } from '@/utils/setCls'
import PrimaryButton from '../Button/PrimaryButton'

import { IoMdClose } from 'react-icons/io'

import styles from './InputElement.module.scss'

interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  leadingIcon?: ReactNode
  trailingResetHandler?: MouseEventHandler
}

export default function InputElement({
  className,
  leadingIcon,
  trailingResetHandler,
  ...attr
}: InputElementProps) {
  const handleRipplesEffectPointerDownEvent = useRippleHighlight()


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
      {trailingResetHandler && !!attr.value ? (
        <PrimaryButton
          type='reset'
          className={styles.inputElementTrailingIcon}
          title='Отчистить поле ввода'
          onClick={trailingResetHandler}
        >
          <IoMdClose />
        </PrimaryButton>
      ) : null}
    </div>
  )
}
