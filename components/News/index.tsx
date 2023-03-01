import { useDateDiff } from "@/hooks/dateDiff"
import { NewsData } from "@/typescript/types"
import { formatDate } from "@/utils/formatData"
import Image from "next/image"
import PrimaryLink from "../Link/PrimaryLink"
import NewsItem from "./Item"
import styles from "./News.module.scss"

interface NewsProps {
  data: NewsData[]
}

export default function News({ data }: NewsProps) {
  return (
    <div className={styles.news}>
      <ul className={styles.newsList}>
        {data.length > 0 &&
          data.map((dataNew) => (
            <li key={dataNew.id} className={styles.newsItem}>
              <NewsItem {...dataNew} />
            </li>
          ))}
      </ul>
    </div>
  )
}
