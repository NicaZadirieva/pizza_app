import cn from 'classnames';
import { MobileMenuProps } from './MobileMenu.props';
import styles from './index.module.css';

export const MobileMenu = ({ currentPage, className }: MobileMenuProps) => {
	return (
		<nav className={cn(className, styles['mobile-menu'])}>
			{['Home', 'Menu', 'Events', 'About us'].map((menuElement) => {
				if (currentPage == menuElement) {
					return <span key={menuElement} className={cn(styles['mobile-menu-item'], styles['current-link'])}>{menuElement}</span>;
				} else {
					return <a className={styles['mobile-menu-item']} key={menuElement} href="#">{menuElement}</a>;
				}
			})}
		</nav>
	);
};