import { ProductType } from "@/typescript/types"
import styles from "./PopularProducts.module.scss"
import { ProductItem } from "@/components/Product"

interface PopularProductsProps {
  data: ProductType[]
}

export default function PopularProducts({ data }: PopularProductsProps) {
  return (
    <ul className={styles.popularProductList}>
      {data.map((product) => (
        <li key={product._id}>
          <ProductItem {...product} />
        </li>
      ))}
    </ul>
  )
}