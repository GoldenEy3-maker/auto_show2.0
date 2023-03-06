import { ProductItemType } from "@/typescript/types"
import { formatPrice } from "@/utils/formatData"
import Image from "next/image"
import Link from "next/link"
import { BsCartPlus } from "react-icons/bs"
import { FiShare2 } from "react-icons/fi"
import { MdFavoriteBorder } from "react-icons/md"
import PrimaryButton from "../Button"
import styles from "./Product.module.scss"

interface ProductItemProps extends ProductItemType {
}

export function ProductItem({ title, _id, text, image, price }: ProductItemProps) {
  return (
    <div className={styles.product}>
      <Link href="/" title={title} className={styles.productImg}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
        />
      </Link>
      <div className={styles.productInfo}>
        <h3 className={styles.productInfoTitle}>{title}</h3>
        <p className={styles.productInfoText}>{text}</p>
        <footer className={styles.productInfoFooter}>
          <span className={styles.productInfoFooterPrice}>
            {formatPrice(price)}
          </span>
          <PrimaryButton type="button" title="Поделиться">
            <FiShare2></FiShare2>
          </PrimaryButton>
          <PrimaryButton type="button" title="Добавить в избранное">
            <MdFavoriteBorder></MdFavoriteBorder>
          </PrimaryButton>
          <PrimaryButton
            type="button"
            title="Добавить корзину"
            className={styles.productInfoFooterCartButton}
          >
            <BsCartPlus></BsCartPlus>
          </PrimaryButton>
        </footer>
      </div>
    </div>
  )
}
