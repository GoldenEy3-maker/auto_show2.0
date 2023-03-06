import { SiAudi, SiBmw, SiHonda, SiHyundai, SiMercedes, SiMitsubishi, SiOpel, SiPorsche, SiSkoda } from "react-icons/si"
import PrimaryLink from "../Link"
import styles from "./Dilers.module.scss"

export default function Dillers() {
  return (
    <div className={styles.dilers}>
      <ul className={styles.dilersList}>
        <li className={styles.dilersItem}>
          <PrimaryLink
            href="/"
            target="_blank"
            title="BMW"
            className={styles.dilersItemLink}
          >
            <SiBmw className={styles.dilersItemLinkIcon} />
            <span className={styles.dilersItemLinkTitle}>BMW</span>
          </PrimaryLink>
        </li>
        <li className={styles.dilersItem}>
          <PrimaryLink
            href="/"
            target="_blank"
            title="Audi"
            className={styles.dilersItemLink}
          >
            <SiAudi className={styles.dilersItemLinkIcon} />
            <span className={styles.dilersItemLinkTitle}>Audi</span>
          </PrimaryLink>
        </li>
        <li className={styles.dilersItem}>
          <PrimaryLink
            href="/"
            target="_blank"
            title="Honda"
            className={styles.dilersItemLink}
          >
            <SiHonda className={styles.dilersItemLinkIcon} />
            <span className={styles.dilersItemLinkTitle}>Honda</span>
          </PrimaryLink>
        </li>
        <li className={styles.dilersItem}>
          <PrimaryLink
            href="/"
            target="_blank"
            title="Mercedes"
            className={styles.dilersItemLink}
          >
            <SiMercedes className={styles.dilersItemLinkIcon} />
            <span className={styles.dilersItemLinkTitle}>Mercedes</span>
          </PrimaryLink>
        </li>
        <li className={styles.dilersItem}>
          <PrimaryLink
            href="/"
            target="_blank"
            title="SiSkoda"
            className={styles.dilersItemLink}
          >
            <SiSkoda className={styles.dilersItemLinkIcon} />
            <span className={styles.dilersItemLinkTitle}>SiSkoda</span>
          </PrimaryLink>
        </li>
        <li className={styles.dilersItem}>
          <PrimaryLink
            href="/"
            target="_blank"
            title="Opel"
            className={styles.dilersItemLink}
          >
            <SiOpel className={styles.dilersItemLinkIcon} />
            <span className={styles.dilersItemLinkTitle}>Opel</span>
          </PrimaryLink>
        </li>
        <li className={styles.dilersItem}>
          <PrimaryLink
            href="/"
            target="_blank"
            title="Mitsubishi"
            className={styles.dilersItemLink}
          >
            <SiMitsubishi className={styles.dilersItemLinkIcon} />
            <span className={styles.dilersItemLinkTitle}>Mitsubishi</span>
          </PrimaryLink>
        </li>
        <li className={styles.dilersItem}>
          <PrimaryLink
            href="/"
            target="_blank"
            title="Porsche"
            className={styles.dilersItemLink}
          >
            <SiPorsche className={styles.dilersItemLinkIcon} />
            <span className={styles.dilersItemLinkTitle}>Porsche</span>
          </PrimaryLink>
        </li>
        <li className={styles.dilersItem}>
          <PrimaryLink
            href="/"
            target="_blank"
            title="Hyundai"
            className={styles.dilersItemLink}
          >
            <SiHyundai className={styles.dilersItemLinkIcon} />
            <span className={styles.dilersItemLinkTitle}>Hyundai</span>
          </PrimaryLink>
        </li>
      </ul>
    </div>
  )
}
