import NewsLoadingSkeleton from "@/components/News/LoadingSkeleton"
import { ToolPanelFilters } from "@/components/ToolPanel"
import { trpc } from "@/utils/trpc"
import QueryRenderHandler from "../QueryRenderHandler"
import NewsItem from "./Item"
import styles from "./News.module.scss"

interface NewsProps extends ToolPanelFilters {}

export default function News({ filter, filterMode, searchValue }: NewsProps) {
  const {
    data: queryData,
    error,
    isFetching,
  } = trpc.news.list.useQuery(
    {
      filter: filter,
      filterMode: filterMode,
      searchValue: searchValue,
    },
    {
      enabled: !!filter || !!filterMode || !!searchValue || true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )

  return (
    <div className={styles.news}>
      <QueryRenderHandler
        data={queryData}
        error={error}
        isFetching={isFetching}
        loadingSkeleton={<NewsLoadingSkeleton />}
        isDataLengthNullMessage="По вашему запросу ничего не найдено!"
      >
        {(data) => (
          <ul className={styles.newsList}>
            {data.map((dataNew) => (
              <li key={dataNew._id}>
                <NewsItem {...dataNew} />
              </li>
            ))}
          </ul>
        )}
      </QueryRenderHandler>
    </div>
  )
}
