import { MouseEvent, useState } from 'react'
import { HeaderActionsMenuProps } from '../HeaderActions'
import HeaderActionsItem from '../HeaderActionsItem'

import PrimaryButton from '@/components/Button/PrimaryButton'
import PrimaryLink from '@/components/Link/PrimaryLink'
import { setStaticCls } from '@/utils/setCls'
import Image from 'next/image'
import { FiTrash2 } from 'react-icons/fi'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import headerActionsStyles from '../HeaderActions.module.scss'

import { FavoritesData } from '@/typescript/types'
import { formatPrice } from '@/utils/formatData'
import { BsCart2 } from 'react-icons/bs'
import styles from './HeaderActionsFavorite.module.scss'

interface HeaderActionsFavoriteProps extends HeaderActionsMenuProps {}

export default function HeaderActionsFavorite({
  state,
  toggleMenuStateHandler,
}: HeaderActionsFavoriteProps) {
  const [favoritesData, setFavoritesData] = useState<FavoritesData[]>([
    {
      id: 1,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem ipsum dolor',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium sint esse voluptas commodi, illo nisi veroex reiciendis suscipit vitae eius mollitia veritatis inventore nulla quia architecto alias facilis.',
      price: 1000,
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem ipsum dolor',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium sint esse voluptas commodi, illo nisi veroex reiciendis suscipit vitae eius mollitia veritatis inventore nulla quia architecto alias facilis.',
      price: 1000,
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem ipsum dolor',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium sint esse voluptas commodi, illo nisi veroex reiciendis suscipit vitae eius mollitia veritatis inventore nulla quia architecto alias facilis.',
      price: 1000,
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem ipsum dolor',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium sint esse voluptas commodi, illo nisi veroex reiciendis suscipit vitae eius mollitia veritatis inventore nulla quia architecto alias facilis.',
      price: 1000,
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem ipsum dolor',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium sint esse voluptas commodi, illo nisi veroex reiciendis suscipit vitae eius mollitia veritatis inventore nulla quia architecto alias facilis.',
      price: 1000,
    },
    {
      id: 6,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem ipsum dolor',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium sint esse voluptas commodi, illo nisi veroex reiciendis suscipit vitae eius mollitia veritatis inventore nulla quia architecto alias facilis.',
      price: 1000,
    },
    {
      id: 7,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem ipsum dolor',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium sint esse voluptas commodi, illo nisi veroex reiciendis suscipit vitae eius mollitia veritatis inventore nulla quia architecto alias facilis.',
      price: 1000,
    },
    {
      id: 8,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem ipsum dolor',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium sint esse voluptas commodi, illo nisi veroex reiciendis suscipit vitae eius mollitia veritatis inventore nulla quia architecto alias facilis.',
      price: 1000,
    },
    {
      id: 9,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem ipsum dolor',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium sint esse voluptas commodi, illo nisi veroex reiciendis suscipit vitae eius mollitia veritatis inventore nulla quia architecto alias facilis.',
      price: 1000,
    },
    {
      id: 10,
      img: 'https://via.placeholder.com/75',
      title: 'Lorem ipsum dolor',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium sint esse voluptas commodi, illo nisi veroex reiciendis suscipit vitae eius mollitia veritatis inventore nulla quia architecto alias facilis.',
      price: 1000,
    },
    
  ])

  function removeFavoriteProducts(event: MouseEvent) {
    event.stopPropagation()

    setFavoritesData([])
  }

  function removeFavoriteProduct(id: number, event: MouseEvent) {
    event.stopPropagation()

    setFavoritesData((prev) =>
      prev.filter((favoriteItem) => favoriteItem.id !== id)
    )
  }

  return (
    <HeaderActionsItem
      title='Избранное'
      icon={<MdFavoriteBorder />}
      onClickHandler={toggleMenuStateHandler.bind(null, 'favorite')}
    >
      <div
        className={headerActionsStyles.headerActionsMenu}
        aria-hidden={state}
      >
        <div className={headerActionsStyles.headerActionsMenuWrapper}>
          <header
            className={setStaticCls(
              headerActionsStyles.headerActionsMenuHeader,
              styles.headerActionsFavoriteHeader
            )}
          >
            <p>Избранное</p>
            {favoritesData && favoritesData.length > 0 && (
              <PrimaryButton
                type='button'
                title='Отчистить избранное'
                styleType='danger'
                onClick={removeFavoriteProducts}
              >
                <FiTrash2 />
              </PrimaryButton>
            )}
          </header>
          <div className={headerActionsStyles.headerActionsMenuBody}>
            {favoritesData && favoritesData.length > 0 ? (
              <ul>
                {favoritesData.map(({ id, title, text, img, price }) => (
                  <li key={id} className={styles.headerActionsFavoriteItem}>
                    <div className={styles.headerActionsFavoriteItemWrapper}>
                      <PrimaryLink
                        href='/'
                        className={styles.headerActionsFavoriteItemImg}
                        title={title}
                      >
                        <Image src={img} alt={title} width={75} height={75} />
                      </PrimaryLink>
                      <div className={styles.headerActionsFavoriteItemInfo}>
                        <header
                          className={styles.headerActionsFavoriteItemInfoHeader}
                        >
                          <h3>{title}</h3>
                          <PrimaryButton
                            type='button'
                            title='Удалить из избранного'
                            onClick={removeFavoriteProduct.bind(null, id)}
                          >
                            <MdFavorite />
                          </PrimaryButton>
                        </header>
                        <p className={styles.headerActionsFavoriteItemInfoText}>
                          {text}
                        </p>
                        <footer
                          className={styles.headerActionsFavoriteItemInfoFooter}
                        >
                          <span
                            className={
                              styles.headerActionsFavoriteItemInfoFooterPrice
                            }
                          >
                            {formatPrice(price)}
                          </span>
                          <PrimaryButton
                            type='button'
                            title='Добавить в корзину'
                          >
                            <BsCart2 />
                          </PrimaryButton>
                        </footer>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>У вас нет избранных товаров</h3>
            )}
          </div>
        </div>
      </div>
    </HeaderActionsItem>
  )
}
