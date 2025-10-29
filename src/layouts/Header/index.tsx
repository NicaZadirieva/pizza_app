'use client';
import { IconButton, Logo, MenuButton, SimpleButton } from '@/shared';

import CartIcon from './icon/cart-icon.svg';
import MenuToggleIcon from './icon/menu-toggle-icon.svg';

import cn from 'classnames';
import { useState } from 'react';
import styles from './index.module.css';
import { Menu } from './ui/Menu';
import { MobileMenu } from './ui/MobileMenu';

export const Header = () => {
	const [isMenuButtonClicked, setIsMenuButton] = useState(false);

	const toggleMenuButton = () => {
		setIsMenuButton(!isMenuButtonClicked);
	};
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
				<MenuButton onClick={toggleMenuButton} title="Открыть меню" className={styles['menu-button']}>
					<MenuToggleIcon width={30} height={30} />
				</MenuButton>
				<MobileMenu className={cn({
					[styles['menu-mobile-show']]: isMenuButtonClicked
				})
				}/>
			</div>
		</header>
	);
};