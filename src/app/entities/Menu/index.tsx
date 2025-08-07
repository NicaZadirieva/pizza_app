import cn from 'classnames';
import styles from './index.module.css';
import { MenuProps } from './Menu.props';
import { MenuItem } from './ui/MenuItem';

export async function Menu({ data, className, ...props }: MenuProps) {
	if (!data || data.length == 0) {
		return <>not found</>;
	}
	return (
		<div {...props} className={cn(className, styles.menu)}>
			{data.map((d) => {
				return <MenuItem key={d.pizzaName} {...d}/>;
			})}
		</div>
	);
};