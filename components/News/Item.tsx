import { useDateDiff } from "@/hooks/dateDiff"
import { NewsData } from "@/typescript/types"
import { formatDate } from "@/utils/formatData"
import Image from "next/image"
import PrimaryLink from "../Link"
import styles from "./Item.module.scss"

interface NewsItemProps extends NewsData {
}

export default function NewsItem({ date, image, title, text }: NewsItemProps) {
  const dateDiffState = useDateDiff(date)
  const dateDiff = dateDiffState && dateDiffState / 1000 / 60 / 60 / 24

  return (
    <article className={styles.new}>
      <div className={styles.newImg}>
        <Image
          src={image}
          fill
          alt={title}
          sizes="100vw"
        />
      </div>
      <div className={styles.newInfo}>
        <h3 className={styles.newInfoTitle}>{title}</h3>
        <p className={styles.newInfoText}>{text}</p>
        <footer className={styles.newInfoFooter}>
          {dateDiff && (
            <time
              className={styles.newInfoFooterTime}
              dateTime={date.toISOString()}
              title={formatDate(date, dateDiff).fullDate}
            >
              {formatDate(date, dateDiff).shortDate}
            </time>
          )}
          <PrimaryLink
            href="/"
            title="Подробнее"
            className={styles.newInfoFooterLink}
          >
            Подробнее
          </PrimaryLink>
        </footer>
      </div>
    </article>
  )
}
