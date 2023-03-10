import MainLayout from "@/layouts/MainLayout"
import ToolPanel from "@/components/ToolPanel"
import { ProductType } from "@/typescript/types"
import { NextPage } from "next"
import axi from "@/axios/instance"
import { ProductItem } from "@/components/Product"
import styles from "@/styles/pages/Favorites.module.scss"

interface FavoritesPageProps {
  products: ProductType[]
}

const FavoritesPage: NextPage<FavoritesPageProps> = ({ products }) => {
  return (
    <MainLayout title="Next 12 - Favorites Page">
      <main className={styles.favoritePage}>
        <h1 className="page-title">Избранное</h1>
        <ToolPanel prefetchedData={products} queryKey={"favorites"}>
          {(products) => (
            <ul className={styles.favoritePageList}>
              {products.map(product => (
                <li key={product._id}>
                  <ProductItem {...product} />
                </li>
              ))}
            </ul>
          )}
        </ToolPanel>
      </main>
    </MainLayout>
  )
}

FavoritesPage.getInitialProps = async (context) => {
  const { data } = await axi.get("/products")

  return { products: data }
}

export default FavoritesPage