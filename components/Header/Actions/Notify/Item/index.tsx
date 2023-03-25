import PrimaryLink from "@/components/Link"
import { useFormatedDate } from "@/hooks/formatedDate"
import { RouterPaths } from "@/typescript/enums"
import { NotifyData } from "@/typescript/types"
import { setDynamicCls } from "@/utils/setCls"
import Image from "next/image"

import styles from "./HeaderActionsNotifyItem.module.scss"

interface HeaderActionsNotifyItemProps extends NotifyData {}

export default function HeaderActionsNotifyItem({
  title,
  img,
  text,
  date,
  id,
  isNew,
}: HeaderActionsNotifyItemProps) {
  const formatedDate = useFormatedDate(date)
  const daysAgo = formatedDate && formatedDate.dateDiff / 1000 / 60 / 60 / 24

  return (
    <PrimaryLink
      href={RouterPaths.NotifyPage}
      className={setDynamicCls({
        stClasses: [styles.headerActionsNotifyItem],
        dnClasses: [[styles._newNotify]],
        conditions: [isNew],
      })}
      title={title}
    >
      <div className={styles.headerActionsNotifyItemImg}>
        <Image src={img} width={50} height={50} alt={title} />
      </div>
      <div className={styles.headerActionsNotifyItemInfo}>
        <header className={styles.headerActionsNotifyItemInfoHeader}>
          <h3 className={styles.headerActionsNotifyItemInfoHeaderTitle}>
            {title}
          </h3>
          <div className={styles.headerActionsNotifyItemInfoHeaderWrapper}>
            <span
              className={styles.headerActionsNotifyItemInfoHeaderIndicator}
            ></span>
            <time
              className={styles.headerActionsNotifyItemInfoHeaderTime}
              title={formatedDate?.fullDate}
              dateTime={date.toISOString()}
            >
              {daysAgo ? Math.floor(daysAgo) : 0} д. назад
            </time>
          </div>
        </header>
        <p className={styles.headerActionsNotifyItemText} title={text}>
          {text}
        </p>
      </div>
    </PrimaryLink>
  )
}
