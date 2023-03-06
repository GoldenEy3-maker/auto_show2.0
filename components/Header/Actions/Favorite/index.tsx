import { FavoritesData } from '@/typescript/types'
import { MouseEvent, useState } from 'react'
import { HeaderActionsMenuProps } from '../HeaderActions'

import PrimaryButton from '@/components/Button'
import HeaderActionsItem from '../HeaderActionsItem'
import HeaderActionsFavoriteProductItem from './Item'

import { setStaticCls } from '@/utils/setCls'
import { FiTrash2 } from 'react-icons/fi'
import { MdFavoriteBorder } from 'react-icons/md'

import headerActionsStyles from '../HeaderActions.module.scss'
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
                {favoritesData.map((favoriteItem) => (
                  <HeaderActionsFavoriteProductItem
                    key={favoriteItem.id}
                    deleteFavoriteHandler={removeFavoriteProduct}
                    {...favoriteItem}
                  />
                ))}
              </ul>
            ) : (
              <p className={headerActionsStyles.headerActionsMenuEmptyMessage}>
                У вас нет избранных товаров
              </p>
            )}
          </div>
        </div>
      </div>
    </HeaderActionsItem>
  )
}
