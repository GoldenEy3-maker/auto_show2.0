import MainLayout from "@/layouts/MainLayout"
import ToolPanel from "@/components/ToolPanel"
import { UserFavoriteProduct } from "@/typescript/types"
import { NextPage } from "next"
import { ProductItem } from "@/components/Product"
import styles from "@/styles/pages/Favorites.module.scss"
import { FilterNames } from "@/typescript/enums"
import { trpc } from "@/utils/trpc"

const FavoritesPage: NextPage = () => {
  return (
    <MainLayout title="Next 12 - Favorites Page">
      <main className={styles.favoritePage}>
        <h1 className="page-title">Избранное</h1>
        <ToolPanel
          loadingTemplate={
            <ul className={styles.favoritePageList}>
              <li className={styles.favoritePageLoadingTemplateItem}></li>
              <li className={styles.favoritePageLoadingTemplateItem}></li>
              <li className={styles.favoritePageLoadingTemplateItem}></li>
              <li className={styles.favoritePageLoadingTemplateItem}></li>
              <li className={styles.favoritePageLoadingTemplateItem}></li>
              <li className={styles.favoritePageLoadingTemplateItem}></li>
            </ul>
          }
          query={trpc.favorites.list}
          filtersList={[
            {
              name: FilterNames.ByName,
              label: "По имени"
            },
            {
              name: FilterNames.ByPrice,
              label: "По цене"
            },
            {
              name: FilterNames.ByDate,
              label: "По дате",
              isDefault: true
            }
          ]}
          searchPlaceholder="Поиск избранного">
          {(data) => (
            <ul className={styles.favoritePageList}>
              {data.map(({ product }) => (
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

export default FavoritesPage