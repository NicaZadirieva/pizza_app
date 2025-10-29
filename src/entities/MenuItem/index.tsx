
import cn from 'classnames';
import Image from 'next/image';
import { MenuItemProps } from './MenuItem.props';
import styles from './index.module.css';
import { SimpleButton } from './ui/SimpleButton';

export const MenuItem = ({ pizzaName, className, pizzaImgPath, filling, availableSizes, calculatedPrice, ...props}: MenuItemProps) => {
	return (
		<div className={cn(className, styles['menu-item'])} {...props}>
			<Image src={pizzaImgPath} alt={pizzaName} width={157} height={157} />
			<h3 className={styles['menu-item-title']}>{pizzaName}</h3>
			<span className={styles['menu-item-filling']}>Filling: {filling.join(', ')}</span>
			<div className={styles['menu-item-sizes']}>
				{availableSizes.map((size) => {
					return (
						<SimpleButton appearance='rounded' key={size} className={styles['menu-item-size']}>{size}</SimpleButton>
					);
				})}
			</div>
			{/**TODO: сделать обработчик событий onClick */}
			<SimpleButton appearance='outlined'>+ Ingredients</SimpleButton>
			<div className={styles['price-content']}>
				<span className={styles['price']}>
					{calculatedPrice} <sup>$</sup>
					{/**TODO: сделать + и - каунтеры */}
				</span>
			</div>
			<SimpleButton appearance='filled'>Order Now</SimpleButton>
		</div>
	);
};
