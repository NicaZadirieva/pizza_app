import { Heading } from '@/app/shared';
import { Paragraph } from '@/app/shared/Paragraph';
import cn from 'classnames';
import ArrowIcon from './icon/arrow-icon.svg';
import LighterIcon from './icon/light-icon.svg';
import styles from './index.module.css';

export const Preview = () => {
	return (
		<div className={styles.preview}>
			<Heading className={styles.heading}>
				<div>The Fastest <ArrowIcon width={90} height={56} className={cn(styles.arrow)} /> </div>
				<div>Pizza <LighterIcon width={49} height={85} /> Delivery</div></Heading>
			<Paragraph className={styles['our-advantages']}>We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span className={styles.span}>pizza is free!</span></Paragraph>
		</div>
	);
};