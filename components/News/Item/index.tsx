import { useFormatedDate } from "@/hooks/formatedDate"
import { NewsType } from "@/typescript/types"
import { formatDate } from "@/utils/formatDate"
import Image from "next/image"
import PrimaryLink from "../../Link"
import styles from "./NewsItem.module.scss"

interface NewsItemProps extends NewsType {}

export default function NewsItem({ _date, image, title, text }: NewsItemProps) {
  const date = new Date(_date)
  const formatedDate = useFormatedDate(date)

  return (
    <article className={styles.new}>
      <div className={styles.newImg}>
        <Image src={image} fill alt={title} sizes="100vw" />
      </div>
      <div className={styles.newInfo}>
        <h3 className={styles.newInfoTitle}>{title}</h3>
        <p className={styles.newInfoText}>{text}</p>
        <footer className={styles.newInfoFooter}>
          <time
            className={styles.newInfoFooterTime}
            title={formatedDate?.fullDate}
            dateTime={date.toISOString()}
          >
            {formatedDate?.dynamicDate}
          </time>
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
