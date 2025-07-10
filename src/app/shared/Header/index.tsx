import { IconedButton } from '../IconedButton';
import { Menu } from '../Menu';
import { MenuButton } from '../MenuButton';
import { SimpleButton } from '../SimpleButton';
import CartIcon from './icon/cart-icon.svg';
import MenuToggleIcon from './icon/menu-toggle-icon.svg';
import Logo from './icon/pizzashop.svg';
import styles from './index.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo className={styles.logo} width={162} height={37}/>
			<Menu className={styles.nav} currentPage={'Home'}/>
			<div className={styles['btn-container']}>
				<SimpleButton className={styles['login-button']} appearance="filled">Log in</SimpleButton>
				<IconedButton title="Корзина" className={styles['cart-button']}>
					<CartIcon width={30} height={30}/>
				</IconedButton>
				<MenuButton title="Открыть меню" className={styles['menu-button']}>
					<MenuToggleIcon width={30} height={30} />
				</MenuButton>
			</div>
		</header>
	);
};