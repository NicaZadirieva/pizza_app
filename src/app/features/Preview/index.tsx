
import { Paragraph } from '@/app/shared/Paragraph';
import { Heading } from '@/app/widgets';
import cn from 'classnames';
import ArrowIcon from './icon/arrow-icon.svg';
import CrispsIconBottom from './icon/crisps-bottom-icon.svg';
import LighterIcon from './icon/light-icon.svg';
import PizzaIconTop from './icon/pizza-top-icon.svg';
import PreviewImage from './icon/preview-icon.svg';
import styles from './index.module.css';
import CustomVideoPlayer from './ui/CustomVideoPlayer';
import { DoubledButton } from './ui/DoubledButton';


export const Preview = () => {
	return (
		<div className={styles.preview}>
			<div className={cn(styles.column, styles['preview-content'])}>
				<Heading className={styles.heading}>
					<div>The Fastest <ArrowIcon width={90} height={56} className={cn(styles.arrow)} /> </div>
					<div>Pizza <LighterIcon width={49} height={85} /> Delivery</div></Heading>
				<Paragraph className={styles['our-advantages']}>We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span className={styles.span}>pizza is free!</span></Paragraph>
				Cooking process:
				<CustomVideoPlayer src={'/videos/video_pizza.mp4'}/>
				{/**TODO: add onClick */}
				<DoubledButton className={styles['to-order-button']} leftText='To order' rightText='Pizza-Menu' />
			</div>
			<div className={cn(styles.column, styles['relative-column'])}>
				<PizzaIconTop className={styles['pizza-image']} />
				<PreviewImage className={styles['preview-image']}/>
				<CrispsIconBottom className={styles['crisps-image']} />
			</div>
		</div>
	);
};