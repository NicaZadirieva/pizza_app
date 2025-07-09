import CartIcon from './icon/cart-icon.svg';
import MenuToggleIcon from './icon/menu-toggle-icon.svg';
import Logo from './icon/pizzashop.svg';
import styles from './index.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo className={styles.logo} width={162} height={37}/>
			<nav className={styles.nav}>
				<span className={styles['current-link']}>Home</span>
				<a href="#">Menu</a>
				<a href="#">Events</a>
				<a href="#">About us</a>
			</nav>
			<div className={styles['btn-container']}>
				{/**TODO: сделать кнопки компонентами */}
				<button type="button" className={styles['login-button']}>Log in</button>
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