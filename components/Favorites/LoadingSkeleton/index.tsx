import styles from "../Favorites.module.scss"

export default function FavoritesLoadingSkeleton() {
  return (
    <ul className={styles.favoritesList}>
      <li className={styles.favoritesListLoadingSkeletonItem}></li>
      <li className={styles.favoritesListLoadingSkeletonItem}></li>
      <li className={styles.favoritesListLoadingSkeletonItem}></li>
      <li className={styles.favoritesListLoadingSkeletonItem}></li>
      <li className={styles.favoritesListLoadingSkeletonItem}></li>
      <li className={styles.favoritesListLoadingSkeletonItem}></li>
    </ul>
  )
}
