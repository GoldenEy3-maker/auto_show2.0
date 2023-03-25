import { ReactNode } from "react"
import styles from "./RadioTabs.module.scss"

interface RadioTabsPops {
  children: ReactNode
}

export default function RadioTabs({ children }: RadioTabsPops) {
  return <div className={styles.tabs}>{children}</div>
}
