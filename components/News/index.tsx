import { NewsData, NewsType } from "@/typescript/types"
import NewsItem from "./Item/Item"
import styles from "./News.module.scss"

interface NewsProps {
  data: NewsType[]
}

export default function News({ data }: NewsProps) {
  return (
    <div className={styles.news}>
      <ul className={styles.newsList}>
        {data.map((dataNew) => (
          <li key={dataNew._id} className={styles.newsItem}>
            <NewsItem {...dataNew} />
          </li>
        ))}
      </ul>
    </div>
  )
}
