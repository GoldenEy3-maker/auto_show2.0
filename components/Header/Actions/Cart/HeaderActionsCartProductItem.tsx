import PrimaryButton from '@/components/Button/PrimaryButton'
import PrimaryLink from '@/components/Link/PrimaryLink'
import QuantityElement from '@/components/quantity/QuantityElement'
import { CartData } from '@/typescript/types'
import { formatPrice } from '@/utils/formatData'
import Image from 'next/image'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './HeaderActionsCartProductItem.module.scss'

interface HeaderActionsCartProductItemProps extends CartData {
  setCartData: Dispatch<SetStateAction<CartData[]>>
}

export default function HeaderActionsCartProductItem({
  id,
  img,
  title,
  text,
  quantity,
  price,
  setCartData,
}: HeaderActionsCartProductItemProps) {
  function increaseQuantityHandler() {
    setCartData((prev) =>
      prev.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            quantity:
              cartItem.quantity < cartItem.maxCount
                ? cartItem.quantity + 1
                : cartItem.quantity,
          }
        }

        return cartItem
      })
    )
  }

  function decreaseQuantityHandler() {
    setCartData((prev) =>
      prev.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            quantity:
              cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity,
          }
        }

        return cartItem
      })
    )
  }

  function removeProductItemFormCart(event: MouseEvent) {
    event.stopPropagation()
    
    setCartData((prev) => prev.filter((cartItem) => cartItem.id !== id))
  }

  return (
    <div className={styles.headerActionsCartProductItem}>
      <PrimaryLink
        href='/'
        className={styles.headerActionsCartProductItemImg}
        title={title}
      >
        <Image src={img} alt={title} width={75} height={75} />
      </PrimaryLink>
      <div className={styles.headerActionsCartProductItemInfo}>
        <header className={styles.headerActionsCartProductItemInfoHeader}>
          <h3 className={styles.headerActionsCartProductItemInfoHeaderTitle} title={title}>
            {title}
          </h3>
          <PrimaryButton
            type='button'
            styleType='danger'
            className={styles.headerActionsCartProductItemInfoHeaderButton}
            title='Убрать товар из корзины'
            onClick={removeProductItemFormCart}
          >
            <AiOutlineClose />
          </PrimaryButton>
        </header>
        <p className={styles.headerActionsCartProductItemInfoText} title={text}>{text}</p>
        <footer className={styles.headerActionsCartProductItemInfoFooter}>
          <QuantityElement
            decreaseHandler={decreaseQuantityHandler}
            increaseHandler={increaseQuantityHandler}
            value={quantity}
            name={`quantity-item-${id}`}
          />
          <p className={styles.headerActionsCartProductItemInfoFooterPrice}>{formatPrice(quantity * price)}</p>
        </footer>
      </div>
    </div>
  )
}
