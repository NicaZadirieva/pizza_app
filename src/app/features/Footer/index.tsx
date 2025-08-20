import { Logo } from '@/app/shared/Logo';
import Link from 'next/link';
import FacebookIcon from './icon/fb.svg';
import InstaIcon from './icon/insta.svg';
import TwitterIcon from './icon/twitter.svg';

import styles from './index.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			{/**TODO: из header и footer запихать width и height в shared/Logo*/}
			<header className={styles['footer-header']}>
				<Logo className={styles.logo} width={162} height={37} />
				<nav className={styles['footer-menu']}>
					<ul className={styles['footer-menu-item']}>
						<li className={styles['footer-menu-item-header']}>Home</li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>To Order</Link></li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>About Us</Link></li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>Events</Link></li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>Menu</Link></li>
					</ul>

					<ul className={styles['footer-menu-item']}>
						<li className={styles['footer-menu-item-header']}>Events</li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>3 pizza 1 free coffee</Link></li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>2 pizza for 1 price</Link></li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>Kitchen Tour</Link></li>
					</ul>


					<ul className={styles['footer-menu-item']}>
						<li className={styles['footer-menu-item-header']}>Menu</li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>Show All</Link></li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>SeaProducts</Link></li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>Vegan</Link></li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>Meat</Link></li>
					</ul>


					<ul className={styles['footer-menu-item']}>
						<li className={styles['footer-menu-item-header']}>About Us</li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>Our History</Link></li>
						<li className={styles['footer-menu-item-withlink']}><Link href={''}>Why We</Link></li>
					</ul>
				</nav>
			</header>
			

			<section className={styles['footer-contacts']}>
				<span className={styles['footer-contacts-phone']}>+7 (937) 333-55-33</span>
				<div className={styles['footer-contacts-social']}>
					{/**TODO: доделать иконки. Понять как изменить цвет */}
					<InstaIcon/>
					<TwitterIcon/>
					<FacebookIcon/>
				</div>
			</section>
		</footer>
	);
};