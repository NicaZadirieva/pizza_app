import { Menu } from '../Menu';
import { SimpleButton } from '../SimpleButton';
import CartIcon from './icon/cart-icon.svg';
import MenuToggleIcon from './icon/menu-toggle-icon.svg';
import Logo from './icon/pizzashop.svg';
import styles from './index.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo className={styles.logo} width={162} height={37}/>
			<Menu currentPage={'Home'}/>
			<div className={styles['btn-container']}>
				<SimpleButton appearance="outlined">Log in</SimpleButton>
				<button title="Корзина" type="button" className={styles['cart-button']}>
					<CartIcon width={30} height={30}/>
				</button>
				<button title="Открыть меню" type="button" className={styles['menu-button']}>
					<MenuToggleIcon width={30} height={30} />
				</button>
			</div>
		</header>
	);
};