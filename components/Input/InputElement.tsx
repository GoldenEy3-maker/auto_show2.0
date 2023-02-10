import type {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction
} from 'react'

import { useRipplesHighlight } from '@/hooks/ripplesHighlight'
import { setStaticCls } from '@/lib/setCls'
import PrimaryButton from '../Button/PrimaryButton'

import { IoMdClose } from 'react-icons/io'

import styles from './InputElement.module.scss'

const { inputElement, inputElementTrailingIcon, inputElementLeadingIcon } =
  styles

interface IInputElementProps extends InputHTMLAttributes<HTMLInputElement> {
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
}: IInputElementProps) {
  const handleRipplesEffectPointerDownEvent = useRipplesHighlight()

  function resetValueHandler() {
    setValue('')
  }

  return (
    <div className={setStaticCls(inputElement, className)}>
      {leadingIcon ? (
        <label
          htmlFor={attr.id}
          onPointerDown={handleRipplesEffectPointerDownEvent}
          title='Фокус на поле ввода'
          className={inputElementLeadingIcon}
        >
          {leadingIcon}
        </label>
      ) : null}
      <input {...attr} />
      {trailingResetButton && !!attr.value ? (
        <PrimaryButton
          type='reset'
          className={inputElementTrailingIcon}
          title='Отчистить поле ввода'
          onClick={resetValueHandler}
        >
          <IoMdClose />
        </PrimaryButton>
      ) : null}
    </div>
  )
}
