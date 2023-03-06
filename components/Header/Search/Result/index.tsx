import { APIResponse, ProductItemType } from "@/typescript/types"
import styles from "./HeaderSearchReslt.module.scss"
import PrimaryLink from "@/components/Link"
import Image from "next/image"
import { formatPrice } from "@/utils/formatData"
import { setDynamicCls } from "@/utils/setCls"

interface HeaderSearchResultProps {
  isFetchingData: boolean
  products: ProductItemType[] | undefined
  error: APIResponse | null
}

export default function HeaderSearchResult({ products, isFetchingData, error }: HeaderSearchResultProps) {
  if (!products && !isFetchingData && !error) return null

  return (
    <div className={setDynamicCls({
      stClasses: [styles.searchResult],
      dnClasses: [[styles._isLoading]],
      conditions: [isFetchingData]
    })}>
      {isFetchingData ? (

        <ul className={styles.searchResultLoadingTemplate}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      ) : error ? (

        <p className={styles.searchResultErrorMessage}>{error.message}</p>

      ) : products ? products.length > 0 ? (

        <ul>{products.map(product => (
          <li key={product._id}>
            <PrimaryLink href="/" className={styles.searchResultItem} title={product.title}>
              <div className={styles.searchResultItemImg}>
                <Image src={product.image} alt={product.title} width={70} height={70}/>
              </div>
              <h3 className={styles.searchResultItemTitle}>{product.title}</h3>
              <span className={styles.searchResultItemPrice}>{formatPrice(product.price)}</span>
            </PrimaryLink>
          </li>
        ))}
        </ul>

      ) : <p className={styles.searchResultEmptyText}>По вашему запросу ничего не найдено!</p> : null}
    </div>
  )
}