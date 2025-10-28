'use client';
import { FilterEnum, getFilteredProducts, GetFilteredProductsResponse } from '@/api/getFilteredProducts';
import { Heading, MenuItem, SimpleButton } from '@/shared';
import cn from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import styles from './index.module.css';
import { MenuProps } from './Menu.props';

export function Menu({ className,  ...props }: MenuProps) {
	const [data, setData] = useState<GetFilteredProductsResponse[]>([]);
	const [currentMenu, setCurrentMenu] = useState<FilterEnum>(FilterEnum.ShowAll);

	const getData = useCallback(async () => {
		const filteredProducts = await getFilteredProducts(currentMenu);
		setData(filteredProducts);
	}, [currentMenu]);

	useEffect(() => {
		getData();
	}, [getData]);
	

	if (!data || data.length == 0) {
		return <>not found</>;
	}
	return (
		<section {...props} className={cn(className, styles.menu)}>
			<Heading size='h2' className={styles['menu-heading']}>Menu</Heading>
			<div className={styles['menu-button-box']}>
				<SimpleButton onClick={() => setCurrentMenu(FilterEnum.ShowAll)} className={cn({[styles.active]: currentMenu == FilterEnum.ShowAll})} appearance='filled'>Show All</SimpleButton> 
				<SimpleButton onClick={() => setCurrentMenu(FilterEnum.Meat)}  className={cn({ [styles.active]: currentMenu == FilterEnum.Meat })}  appearance='filled'>Meat</SimpleButton> 
				<SimpleButton onClick={() => setCurrentMenu(FilterEnum.Vegetarian)} className={cn({ [styles.active]: currentMenu == FilterEnum.Vegetarian })}  appearance='filled'>Vegetarian</SimpleButton> 
				<SimpleButton onClick={() => setCurrentMenu(FilterEnum.Sea)}  className={cn({ [styles.active]: currentMenu == FilterEnum.Sea })}  appearance='filled'>Sea products</SimpleButton> 
				<SimpleButton onClick={() => setCurrentMenu(FilterEnum.Mushroom)}  className={cn({ [styles.active]: currentMenu == FilterEnum.Mushroom })}  appearance='filled'>Mushroom</SimpleButton> 
			</div>
			<div className={styles['menu-content']}>
				{data.map((d) => {
					return <MenuItem key={d.pizzaName} {...d} />;
				})}
			</div>
		</section>
		
	);
};