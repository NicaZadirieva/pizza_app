import { SimpleButton } from '@/app/shared';
import { Heading } from '@/app/widgets';
import cn from 'classnames';
import Link from 'next/link';
import { EventItemProps } from './EventItem.props';
import styles from './index.module.css';

export const EventItem = ({ imageUrl, title, buttonUrl, className  }: EventItemProps) => {
	return (
		<div style={{backgroundImage: `url(${imageUrl})`}} className={cn(className, styles['menu-item'])}>
			<Heading size='h3'>{title}</Heading>
			<Link style={{width: 'fit-content'}} href={buttonUrl}><SimpleButton appearance='filled'>More</SimpleButton></Link>
		</div>
	);
};