import Favorites from "@/components/Favorites"
import ToolPanel from "@/components/ToolPanel"
import MainLayout from "@/layouts/MainLayout"
import styles from "@/styles/pages/Favorites.module.scss"
import { FilterNames } from "@/typescript/enums"
import { NextPage } from "next"

const FavoritesPage: NextPage = () => {
  return (
    <MainLayout title="Next 12 - Favorites Page">
      <main className={styles.favoritePage}>
        <h1 className="page-title">Избранное</h1>
        <ToolPanel
          filtersList={[
            {
              name: FilterNames.ByName,
              label: "По имени",
            },
            {
              name: FilterNames.ByPrice,
              label: "По цене",
            },
            {
              name: FilterNames.ByDate,
              label: "По дате добавления",
              isDefault: true,
            },
          ]}
          searchPlaceholder="Поиск по избранным товарам"
        >
          {(filter, filterMode, searchValue, layout) => (
            <Favorites
              filter={filter}
              filterMode={filterMode}
              searchValue={searchValue}
              layout={layout}
            />
          )}
        </ToolPanel>
      </main>
    </MainLayout>
  )
}

export default FavoritesPage
