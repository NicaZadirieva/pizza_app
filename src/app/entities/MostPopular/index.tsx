import { getPopularPizza } from '@/api/getPopularPizza';
import { MenuItem } from '@/app/shared';
import cn from 'classnames';
import { MostPopularProps } from './MostPopular.props';
import styles from './index.module.css';
import { Banner } from './ui/Banner';

export const MostPopular = async ({className, ...props}: MostPopularProps) => {
	const data = await getPopularPizza();
	// TODO: добавить отступ через display: flex в body
	return (
		<div {...props} className={cn(className, styles['most-popular'])}>
			<Banner/>
			<div className={styles['most-popular-content']}>
				{data.map((popularPizza) => <MenuItem key={popularPizza.pizzaName} {...popularPizza}/>)}
			</div>
		</div>
	);
};