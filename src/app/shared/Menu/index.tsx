import { MenuProps } from './Menu.props';
import styles from './index.module.css';

export const Menu = ({currentPage}: MenuProps) => {
	return (
		<nav className={styles.nav}>
			{['Home', 'Menu', 'Events', 'About us'].map((menuElement)=> {
				if (currentPage == menuElement) {
					return <span key={menuElement} className={styles['current-link']}>{menuElement}</span>;
				}  else {
					return <a key={menuElement}  href="#">{menuElement}</a>;
				}
			})}
			
		</nav>
	);
};