import { setStaticCls } from '@/utils/setCls'
import styles from './Footer.module.scss'


export default function Footer() {
  return (
    <footer className={setStaticCls(styles.footer, '_container')}>
      <h1>Footer</h1>
    </footer>
  )
}