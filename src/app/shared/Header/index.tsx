import Logo from './icon/pizzashop.svg';
import styles from './index.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo width={162} height={37}/>
		</header>
	);
};