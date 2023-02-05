import { setStaticCls } from '@/lib/setCls'
import styles from './Footer.module.scss'

const {footer} = styles

export default function Footer() {
  return (
    <footer className={setStaticCls(footer, '_container')}>
      <h1>Footer</h1>
    </footer>
  )
}