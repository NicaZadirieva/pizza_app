
import { Paragraph } from '@/app/shared/Paragraph';
import { Heading } from '@/app/widgets';
import cn from 'classnames';
import Image from 'next/image';
import Arrow from './icon/arrow.svg';
import CrispsIconBottom from './icon/crisps-bottom-icon.svg';
import PizzaIconTop from './icon/pizza-top-icon.svg';
import styles from './index.module.css';


export const AboutUs = () => {
	return (
		<div className={styles['about-us']}>
			<div className={cn(styles.column, styles['about-us-content'])}>
				<Heading size='h2' className={styles.heading}>About Us</Heading>
				<Paragraph className={styles['paragraph']}>In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.</Paragraph>
				<Image className={styles['pizzas']} src="/about-us-pizzas.png" alt="about us" width={490} height={190}/>
				<Paragraph className={styles['paragraph']}>The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing work in order to receive / prepare / form / deliver customer orders on time.</Paragraph>
			</div>
			<div className={cn(styles.column, styles.centerized)}>
				<Arrow width={88} height={55}/>
			</div>
			{/**TODO: добавить декоративные элементы из макета */}
			<div className={cn(styles.column, styles['relative-column'])}>
				<PizzaIconTop className={styles['pizza-image']} />
				<Image className={styles['big-pizza-image']} src="/about-us-main.png" alt="about us" width={567} height={541} />
				<CrispsIconBottom className={styles['crisps-image']} />
			</div>
		</div>
	);
};