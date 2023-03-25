import { ToolPanelFilters } from "@/components/ToolPanel"
import { trpc } from "@/utils/trpc"

import FavoriteItem from "@/components/Favorites/Item"
import QueryRenderHandler from "@/components/QueryRenderHandler"
import { setDynamicCls } from "@/utils/setCls"
import styles from "./Favorites.module.scss"
import FavoritesLoadingSkeleton from "./LoadingSkeleton"

interface FavoritesProps extends ToolPanelFilters {}

export default function Favorites({
  filter,
  filterMode,
  searchValue,
  layout,
}: FavoritesProps) {
  const {
    data: queryData,
    error,
    isFetching,
  } = trpc.favorites.list.useQuery(
    {
      filter: filter,
      filterMode: filterMode,
      searchValue: searchValue,
    },
    {
      enabled: !!filter || !!filterMode || !!searchValue || true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  )

  return (
    <div
      className={setDynamicCls({
        stClasses: [styles.favorites],
        dnClasses: [["list"]],
        conditions: [layout === "list"],
      })}
    >
      <QueryRenderHandler
        data={queryData}
        error={error}
        isFetching={isFetching}
        isDataLengthNullMessage={"По вашему запросу ничего не найдено!"}
        loadingSkeleton={<FavoritesLoadingSkeleton />}
      >
        {(data) => (
          <ul className={styles.favoritesList}>
            {data.map((favoriteData) => (
              <li key={favoriteData.product._id}>
                <FavoriteItem {...favoriteData} />
              </li>
            ))}
          </ul>
        )}
      </QueryRenderHandler>
    </div>
  )
}
