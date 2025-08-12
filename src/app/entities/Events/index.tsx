import { Heading } from '@/app/widgets';
import cn from 'classnames';
import styles from './index.module.css';
import { EventItem } from './ui/EventItem';

export const Events = () => {
	return (
		<div className={styles.events}>
			{/**1 ряд */}
            
			<EventItem className={styles['row1-item']} title={'How we cooking'} buttonUrl='' imageUrl="/how-we-cooking.png"/>
			<EventItem className={styles['row1-item']}  title={'Our Blog'} buttonUrl='' imageUrl="/our-blog.png" />
			<div className={cn(styles['events-title'], styles['row1-item'])}>
				<Heading size='h2'>Events</Heading>
				<p>There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!</p>
			</div>
			{/**2 ряд */}
			<EventItem className={styles['row2-item1']} title={'Two pizza for 1 price'} buttonUrl='' imageUrl="/2-pizza-for-1-price.png" />
			<EventItem className={styles['row2-item2']}  title={'Kitchen tour'} buttonUrl='' imageUrl="/kitchen-tour.png" />
			{/**3 ряд */}
			<EventItem className={styles['row3-item']}  title={'Free coffee for 3 pizza'} buttonUrl='' imageUrl="/free-coffee-for-3-pizza.png" />
			<EventItem className={styles['row3-item']}  title={'Our Instagram'} buttonUrl='' imageUrl="/our-insta.png" />
			<EventItem className={styles['row3-item']}  title={'Where are you choose us?'} buttonUrl='' imageUrl="/where-are-you-choose.png" />
		</div>
	);
};