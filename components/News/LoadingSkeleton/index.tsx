import styles from "../News.module.scss"

export default function NewsLoadingTemplate() {
  return (
    <ul className={styles.newsList}>
      <li className={styles.newsListLoadingSkeletonItem}></li>
      <li className={styles.newsListLoadingSkeletonItem}></li>
      <li className={styles.newsListLoadingSkeletonItem}></li>
      <li className={styles.newsListLoadingSkeletonItem}></li>
      <li className={styles.newsListLoadingSkeletonItem}></li>
      <li className={styles.newsListLoadingSkeletonItem}></li>
    </ul>
  )
}