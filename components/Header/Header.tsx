import useRefCallback from '@/hooks/refCallback'

import HeaderActions from './Actions/HeaderActions'
import styles from './Header.module.scss'
import HeaderMenu from './HeaderMenu'
import HeaderSearchForm from './HeaderSearchForm'

export default function Header() {
  const [headerNodeRefCallback] = useRefCallback((node) => {
    document.body.style.setProperty(
      '--hg-header',
      node.getBoundingClientRect().height + 'px'
    )
  })

  return (
    <header className={styles.header} ref={headerNodeRefCallback}>
      <HeaderMenu />
      <HeaderSearchForm />
      <HeaderActions />
    </header>
  )
}
