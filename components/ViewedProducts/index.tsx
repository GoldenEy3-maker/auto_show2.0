import { ProductItemType } from "@/typescript/types"
import styles from "./ViewedProducts.module.scss"
import { ProductItem } from "@/components/Product"

interface ViewedProductsProps {
  data: ProductItemType[]
}

export default function ViewedProducts({ data }: ViewedProductsProps) {
  return (
    <ul className={styles.viewedProductList}>
      {data.map((product) => (
        <li key={product._id}>
          <ProductItem {...product} />
        </li>
      ))}
    </ul>
  )
}