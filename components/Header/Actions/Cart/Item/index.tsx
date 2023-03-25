import PrimaryButton from "@/components/Button"
import PrimaryLink from "@/components/Link"
import QuantityElement from "@/components/Quantity"
import { CartData } from "@/typescript/types"
import { formatPrice } from "@/utils/formatDate"
import { setStaticCls } from "@/utils/setCls"
import Image from "next/image"
import { Dispatch, MouseEvent, SetStateAction } from "react"
import { AiOutlineClose } from "react-icons/ai"
import listProductItemStyles from "../../HeaderActionsListProductItem.module.scss"
import styles from "./HeaderActionsCartProductItem.module.scss"

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
                                                       setCartData
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
                : cartItem.quantity
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
              cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity
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
    <li className={listProductItemStyles.headerActionsListProductItem}>
      <div
        className={listProductItemStyles.headerActionsListProductItemWrapper}
      >
        <PrimaryLink
          href="/"
          className={listProductItemStyles.headerActionsListProductItemImg}
          title={title}
        >
          <Image src={img} alt={title} width={75} height={75}/>
        </PrimaryLink>
        <div className={listProductItemStyles.headerActionsListProductItemInfo}>
          <header
            className={
              listProductItemStyles.headerActionsListProductItemInfoHeader
            }
          >
            <h3
              className={
                listProductItemStyles.headerActionsListProductItemInfoHeaderTitle
              }
              title={title}
            >
              {title}
            </h3>
            <PrimaryButton
              type="button"
              styleType="danger"
              className={listProductItemStyles.headerActionsListProductItemInfoHeaderButton}
              title="Убрать товар из корзины"
              onClick={removeProductItemFormCart}
            >
              <AiOutlineClose/>
            </PrimaryButton>
          </header>
          <p
            className={setStaticCls(
              listProductItemStyles.headerActionsListProductItemInfoText,
              styles.headerActionsCartProductItemInfoText
            )}
            title={text}
          >
            {text}
          </p>
          <footer
            className={setStaticCls(
              listProductItemStyles.headerActionsListProductItemInfoFooter,
              styles.headerActionsCartProductItemInfoFooter
            )}
          >
            <QuantityElement
              decreaseHandler={decreaseQuantityHandler}
              increaseHandler={increaseQuantityHandler}
              value={quantity}
              name={`quantity-item-${id}`}
            />
            <p
              className={
                listProductItemStyles.headerActionsListProductItemInfoFooterPrice
              }
            >
              {formatPrice(quantity * price)}
            </p>
          </footer>
        </div>
      </div>
    </li>
  )
}
