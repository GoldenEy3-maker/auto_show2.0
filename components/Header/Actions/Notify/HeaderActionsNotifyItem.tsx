import PrimaryLink from '@/components/Link/PrimaryLink'
import { useDateDiff } from '@/hooks/dateDiff'
import { RouterPaths } from '@/typescript/enums'
import { NotifyData } from '@/typescript/types'
import { formatDate } from '@/utils/formatData'
import { setStaticCls } from '@/utils/setCls'
import Image from 'next/image'
import Link from 'next/link'

import styles from './HeaderActionsNotifyItem.module.scss'

interface HeaderActionsNotifyItemProps extends NotifyData {}

export default function HeaderActionsNotifyItem({
  title,
  img,
  text,
  date,
  id,
}: HeaderActionsNotifyItemProps) {
  const dateDiffState = useDateDiff(date)

  const dateDiff = dateDiffState && dateDiffState / 1000 / 60 / 60 / 24

  return (
    <PrimaryLink
      href={RouterPaths.NotifyPage}
      className={setStaticCls(
        styles.headerActionsNotifyItem,
        styles._newNotify
      )}
      title={title}
    >
      <div className={styles.headerActionsNotifyItemImg}>
        <Image src={img} width={50} height={50} alt={title} />
      </div>
      <div className={styles.headerActionsNotifyItemContent}>
        <h3 className={styles.headerActionsNotifyItemTitle}>
          <div className={styles.headerActionsNotifyItemTitleText}>
            <p>{title}</p>
          </div>
          <span className={styles.headerActionsNotifyItemIndicator}></span>
          {dateDiff && (
            <time
              className={styles.headerActionsNotifyItemTime}
              title={formatDate(date, dateDiff).detailedDate}
              dateTime={date.toISOString()}
            >
              {formatDate(date, dateDiff).date}
            </time>
          )}
        </h3>
        <p className={styles.headerActionsNotifyItemText}>{text}</p>
      </div>
    </PrimaryLink>
  )
}
