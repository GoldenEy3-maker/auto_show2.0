import { HeaderActionsMenuProps } from '../HeaderActions'
import HeaderActionsItem from '../HeaderActionsItem'

import { BsCart2 } from 'react-icons/bs'

import headerActionsStyles from '../HeaderActions.module.scss'

import PrimaryButton from '@/components/Button/PrimaryButton'
import PrimaryLink from '@/components/Link/PrimaryLink'
import { RouterPaths } from '@/typescript/enums'
import { CartData } from '@/typescript/types'
import { formatPrice } from '@/utils/formatData'
import { setStaticCls } from '@/utils/setCls'
import Link from 'next/link'
import { MouseEvent, useState } from 'react'
import { FiArrowRight, FiTrash2 } from 'react-icons/fi'
import styles from './HeaderActionsCart.module.scss'
import HeaderActionsCartProductItem from './HeaderActionsCartProductItem'

interface HeaderActionsCartProps extends HeaderActionsMenuProps {}

export default function HeaderActionsCart({
  state,
  toggleMenuStateHandler,
}: HeaderActionsCartProps) {
  const [cartData, setCartData] = useState<CartData[]>([
    {
      id: 1,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem inpsum test',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi mollitia numquam ad  voluptatem ipsam dolores est aperiam. Obcaecati pariatur velit nostrum nam sed quaerat quis ad, non impedit?',
      quantity: 1,
      maxCount: 10,
      price: 1000,
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/75',
      title:
        'Lorem inpsum test Lorem inpsum test Lorem inpsum test Lorem inpsum test',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi mollitia numquam ad  voluptatem ipsam dolores est aperiam. Obcaecati pariatur velit nostrum nam sed quaerat quis ad, non impedit?',
      quantity: 1,
      maxCount: 10,
      price: 1000,
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/75',
      title:
        'Lorem inpsum test Lorem inpsum test Lorem inpsum test Lorem inpsum test',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi mollitia numquam ad  voluptatem ipsam dolores est aperiam. Obcaecati pariatur velit nostrum nam sed quaerat quis ad, non impedit?',
      quantity: 1,
      maxCount: 10,
      price: 1000,
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/75',
      title:
        'Lorem inpsum test Lorem inpsum test Lorem inpsum test Lorem inpsum test',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi mollitia numquam ad  voluptatem ipsam dolores est aperiam. Obcaecati pariatur velit nostrum nam sed quaerat quis ad, non impedit?',
      quantity: 1,
      maxCount: 10,
      price: 1000,
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/75',
      title:
        'Lorem inpsum test Lorem inpsum test Lorem inpsum test Lorem inpsum test',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi mollitia numquam ad  voluptatem ipsam dolores est aperiam. Obcaecati pariatur velit nostrum nam sed quaerat quis ad, non impedit?',
      quantity: 1,
      maxCount: 10,
      price: 1000,
    },
    {
      id: 6,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem inpsum test',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi mollitia numquam ad  voluptatem ipsam dolores est aperiam. Obcaecati pariatur velit nostrum nam sed quaerat quis ad, non impedit?',
      quantity: 1,
      maxCount: 10,
      price: 1000,
    },
    {
      id: 7,
      img: 'https://via.placeholder.com/75',
      title:
        'Lorem inpsum test Lorem inpsum test Lorem inpsum test Lorem inpsum test',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi mollitia numquam ad  voluptatem ipsam dolores est aperiam. Obcaecati pariatur velit nostrum nam sed quaerat quis ad, non impedit?',
      quantity: 1,
      maxCount: 10,
      price: 1000,
    },
    {
      id: 8,
      img: 'https://via.placeholder.com/75',
      title:
        'Lorem inpsum test Lorem inpsum test Lorem inpsum test Lorem inpsum test',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi mollitia numquam ad  voluptatem ipsam dolores est aperiam. Obcaecati pariatur velit nostrum nam sed quaerat quis ad, non impedit?',
      quantity: 1,
      maxCount: 10,
      price: 1000,
    },
    {
      id: 9,
      img: 'https://via.placeholder.com/75',
      title:
        'Lorem inpsum test Lorem inpsum test Lorem inpsum test Lorem inpsum test',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi mollitia numquam ad  voluptatem ipsam dolores est aperiam. Obcaecati pariatur velit nostrum nam sed quaerat quis ad, non impedit?',
      quantity: 1,
      maxCount: 10,
      price: 1000,
    },
    {
      id: 10,
      img: 'https://via.placeholder.com/75',
      title:
        'Lorem inpsum test Lorem inpsum test Lorem inpsum test Lorem inpsum test',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi mollitia numquam ad  voluptatem ipsam dolores est aperiam. Obcaecati pariatur velit nostrum nam sed quaerat quis ad, non impedit?',
      quantity: 1,
      maxCount: 10,
      price: 1000,
    },
  ])

  function calcTotalPrice() {
    let totalPrice = 0

    cartData.forEach(
      (cartItem) => (totalPrice += cartItem.price * cartItem.quantity)
    )

    return formatPrice(totalPrice)
  }

  function clearCart(event: MouseEvent) {
    event.stopPropagation()

    setCartData([])
  }

  return (
    <HeaderActionsItem
      title='Корзина'
      icon={<BsCart2 />}
      onClickHandler={toggleMenuStateHandler.bind(null, 'cart')}
    >
      {cartData && cartData.length > 0 && (
        <span className={styles.headerActionsCartCount}>{cartData.length}</span>
      )}
      <div
        className={headerActionsStyles.headerActionsMenu}
        aria-hidden={state}
      >
        <div className={headerActionsStyles.headerActionsMenuWrapper}>
          <header
            className={setStaticCls(
              headerActionsStyles.headerActionsMenuHeader,
              styles.headerActionsCartHeader
            )}
          >
            <p>Корзина</p>
            {cartData && cartData.length > 0 && (
              <PrimaryButton
                type='button'
                title='Отчистить корзину'
                styleType='danger'
                onClick={clearCart}
              >
                <FiTrash2 />
              </PrimaryButton>
            )}
          </header>
          <div className={headerActionsStyles.headerActionsMenuBody}>
            {cartData && cartData.length ? (
              <ul>
                {cartData &&
                  cartData.length &&
                  cartData.map((cartItem) => (
                    <li
                      key={cartItem.id}
                      className={styles.headerActionsCartItem}
                    >
                      <HeaderActionsCartProductItem
                        setCartData={setCartData}
                        {...cartItem}
                      />
                    </li>
                  ))}
              </ul>
            ) : (
              <h3 className={styles.headerActionsCartEmptyTitle}>
                Ваша корзина пуста
              </h3>
            )}
          </div>
          {cartData && cartData.length > 0 && (
            <footer className={headerActionsStyles.headerActionsMenuFooter}>
              <p className={styles.headerActionsCartTotalPrice}>
                Всего: <span>{calcTotalPrice()}</span>
              </p>
              <PrimaryLink
                href={RouterPaths.CartPage}
                title='Перейти к оформлению'
              >
                <p>Перейти к оформлению</p>
                <span>
                  <FiArrowRight />
                </span>
              </PrimaryLink>
            </footer>
          )}
        </div>
      </div>
    </HeaderActionsItem>
  )
}
