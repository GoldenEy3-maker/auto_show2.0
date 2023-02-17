import Image from 'next/image'
import PrimaryLink from '../Link/PrimaryLink'
import styles from './ListProductItem.module.scss'

export default function ListProductItem() {
  return (
    <PrimaryLink href='/' className={styles.listProductItem}>
      <div className={styles.listProductItemImg}>
        <Image
          src='https://via.placeholder.com/100'
          alt=''
          width={100}
          height={100}
        />
      </div>
      <div className={styles.listProductItemContent}>
        <h3 className={styles.listProductItemContentTitle}>Lirem ipsum test</h3>
        <p className={styles.listProductItemContentText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          excepturi mollitia numquam ad aut voluptatem ipsam dolores est
          aperiam. Obcaecati pariatur velit nostrum nam sed quaerat quis ad, non
          impedit?
        </p>
      </div>
    </PrimaryLink>
  )
}
