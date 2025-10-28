import { Heading } from '@/widgets';
import cn from 'classnames';
import styles from './index.module.css';
import { EventItem } from './ui/EventItem';

export const Events = () => {
	return (
		<div className={styles.events}>
			{/**1 ряд */}
            
			<EventItem className={cn(styles['row1-item'], styles['event-item'])} title={'How we cooking'} buttonUrl='' imageUrl="/how-we-cooking.png"/>
			<EventItem className={cn(styles['row1-item'], styles['event-item'])}  title={'Our Blog'} buttonUrl='' imageUrl="/our-blog.png" />
			<div className={cn(styles['events-title'], styles['row1-item'])}>
				<Heading size='h2'>Events</Heading>
				<p>There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!</p>
			</div>
			{/**2 ряд */}
			<EventItem className={cn(styles['row2-item1'], styles['event-item'])} title={'Two pizza for 1 price'} buttonUrl='' imageUrl="/2-pizza-for-1-price.png" />
			<EventItem className={cn(styles['row2-item2'], styles['event-item'])}  title={'Kitchen tour'} buttonUrl='' imageUrl="/kitchen-tour.png" />
			{/**3 ряд */}
			<EventItem className={cn(styles['row3-item'], styles['event-item'])}  title={'Free coffee for 3 pizza'} buttonUrl='' imageUrl="/free-coffee-for-3-pizza.png" />
			<EventItem className={cn(styles['row3-item'], styles['event-item'])}  title={'Our Instagram'} buttonUrl='' imageUrl="/our-insta.png" />
			<EventItem className={cn(styles['row3-item'], styles['event-item'])}  title={'Where are you choose us?'} buttonUrl='' imageUrl="/where-are-you-choose.png" />
		</div>
	);
};