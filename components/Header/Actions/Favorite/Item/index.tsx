import PrimaryButton from "@/components/Button"
import PrimaryLink from "@/components/Link"
import { FavoritesData } from "@/typescript/types"
import { formatPrice } from "@/utils/formatData"
import Image from "next/image"
import { MouseEvent } from "react"
import { BsCart2 } from "react-icons/bs"
import { MdFavorite } from "react-icons/md"
import listProductItemStyles from "../../HeaderActionsListProductItem.module.scss"
import styles from "./HeaderActionsFavoriteProductItem.module.scss"
import { setStaticCls } from "@/utils/setCls"

interface HeaderActionsFavoriteProductItemProps extends FavoritesData {
  deleteFavoriteHandler: (id: number, event: MouseEvent) => void
}

export default function HeaderActionsFavoriteProductItem({
                                                           id,
                                                           title,
                                                           text,
                                                           img,
                                                           price,
                                                           deleteFavoriteHandler
                                                         }: HeaderActionsFavoriteProductItemProps) {
  return (
    <li key={id} className={listProductItemStyles.headerActionsListProductItem}>
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
            >
              {title}
            </h3>
            <PrimaryButton
              type="button"
              title="Удалить из избранного"
              className={setStaticCls(listProductItemStyles.headerActionsListProductItemInfoHeaderButton, styles.headerActionsFavoriteItemInfoHeaderButton)}
              onClick={deleteFavoriteHandler.bind(null, id)}
            >
              <MdFavorite/>
            </PrimaryButton>
          </header>
          <p
            className={
              listProductItemStyles.headerActionsListProductItemInfoText
            }
          >
            {text}
          </p>
          <footer
            className={
              listProductItemStyles.headerActionsListProductItemInfoFooter
            }
          >
            <span
              className={
                listProductItemStyles.headerActionsListProductItemInfoFooterPrice
              }
            >
              {formatPrice(price)}
            </span>
            <PrimaryButton type="button" title="Добавить в корзину">
              <BsCart2/>
            </PrimaryButton>
          </footer>
        </div>
      </div>
    </li>
  )
}
