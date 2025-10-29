import { PopularMenuItem } from '@/entities/popular';
import cn from 'classnames';
import { getPopularPizza } from '../api/getPopularPizza';
import { GetPopularPizzaProps } from './GetPopularPizza.props';
import styles from './index.module.css';

export const GetPopularPizza = async ({ className, ...props }: GetPopularPizzaProps) => {
	const data = await getPopularPizza();
	// TODO: добавить отступ через display: flex в body
	return (
		<div {...props} className={cn(className, styles['most-popular'])}>
			<div className={styles.banner}>
				<span>MOST POPULAR PIZZA</span>
			</div>
			<div className={styles['most-popular-content']}>
				{data.map((popularPizza) => <PopularMenuItem key={popularPizza.pizzaName} {...popularPizza} />)}
			</div>
		</div>
	);
};