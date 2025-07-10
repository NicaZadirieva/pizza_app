import { Heading } from '@/app/shared';
import cn from 'classnames';
import ArrowIcon from './icon/arrow-icon.svg';
import LighterIcon from './icon/light-icon.svg';
import styles from './index.module.css';

export const Preview = () => {
	return (
		<Heading>The Fastest <ArrowIcon className={cn(styles.arrow)}/> Pizza <LighterIcon/> Delivery</Heading>
	);
};