import { NewsType } from "@/typescript/types"
import Image from "next/image"
import PrimaryLink from "../../Link"
import styles from "./Item.module.scss"

interface NewsItemProps extends NewsType {
}

export default function NewsItem({ date, image, title, text }: NewsItemProps) {


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
          <time
            className={styles.newInfoFooterTime}
          >
            date
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
