import { IconButton, MenuButton, SimpleButton } from '@/app/shared';
import { Menu } from '@/app/widgets';
import CartIcon from './icon/cart-icon.svg';
import MenuToggleIcon from './icon/menu-toggle-icon.svg';

import { Logo } from '@/app/shared/Logo';
import styles from './index.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			{/**TODO: из header и footer запихать width и height в shared/Logo*/}
			<Logo className={styles.logo} width={162} height={37}/>
			<Menu className={styles.nav} currentPage={'Home'}/>
			<div className={styles['btn-container']}>
				<SimpleButton className={styles['login-button']} appearance="filled">Log in</SimpleButton>
				<IconButton title="Корзина" className={styles['cart-button']}>
					<CartIcon width={30} height={30}/>
				</IconButton>
				<MenuButton title="Открыть меню" className={styles['menu-button']}>
					<MenuToggleIcon width={30} height={30} />
				</MenuButton>
			</div>
		</header>
	);
};