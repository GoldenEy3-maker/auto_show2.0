import { HeaderActionsMenuProps } from '../HeaderActions'
import HeaderActionsItem from '../HeaderActionsItem'

import { BsCart2 } from 'react-icons/bs'

import headerActionsStyles from '../HeaderActions.module.scss'

import PrimaryButton from '@/components/Button/PrimaryButton'
import PrimaryLink from '@/components/Link/PrimaryLink'
import ListProductItem from '@/components/ProductItem/ListProductItem'
import { RouterPaths } from '@/typescript/enums'
import { setStaticCls } from '@/utils/setCls'
import { FiArrowRight, FiTrash2 } from 'react-icons/fi'
import styles from './HeaderActionsCart.module.scss'

interface HeaderActionsCartProps extends HeaderActionsMenuProps {}

export default function HeaderActionsCart({
  state,
  toggleMenuStateHandler,
}: HeaderActionsCartProps) {
  return (
    <HeaderActionsItem
      title='Корзина'
      icon={<BsCart2 />}
      onClickHandler={toggleMenuStateHandler.bind(null, 'cart')}
    >
      <div
        className={headerActionsStyles.headerActionsMenu}
        aria-hidden={state}
      >
        <header
          className={setStaticCls(
            headerActionsStyles.headerActionsMenuHeader,
            styles.headerActionsCartHeader
          )}
        >
          <p>Корзина</p>
          <PrimaryButton
            type='button'
            title='Отчистить корзину'
            styleType='danger'
          >
            <FiTrash2 />
          </PrimaryButton>
        </header>
        <div className={headerActionsStyles.headerActionsMenuWrapper}>
          <ul>
            <li>
              <ListProductItem />
            </li>
          </ul>
        </div>
        <footer className={headerActionsStyles.headerActionsMenuFooter}>
          <p>Всего: 1000 руб</p>
          <PrimaryLink href={RouterPaths.CartPage} title='Перейти к оформлению'>
            <p>Перейти к оформлению</p>
            <span>
              <FiArrowRight />
            </span>
          </PrimaryLink>
        </footer>
      </div>
    </HeaderActionsItem>
  )
}
