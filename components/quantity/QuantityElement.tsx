import { InputHTMLAttributes, MouseEventHandler } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import PrimaryButton from '../Button/PrimaryButton'
import InputElement from '../Input/InputElement'
import styles from './QuantityElement.module.scss'

interface QuantityElementProps extends InputHTMLAttributes<HTMLInputElement> {
  decreaseHandler: MouseEventHandler
  increaseHandler: MouseEventHandler
}

export default function QuantityElement({
  decreaseHandler,
  increaseHandler,
  ...restAttr
}: QuantityElementProps) {
  return (
    <div className={styles.quantityElement}>
      <PrimaryButton
        type='button'
        title='Уменьшить количество'
        onClick={decreaseHandler}
      >
        <AiOutlineMinus />
      </PrimaryButton>
      <InputElement
        className={styles.quantityElementInput}
        type='number'
        value={1}
        // title='Ввести количество'
        disabled
        {...restAttr}
      />
      <PrimaryButton
        type='button'
        title='Увеличить количество'
        onClick={increaseHandler}
      >
        <AiOutlinePlus />
      </PrimaryButton>
    </div>
  )
}
