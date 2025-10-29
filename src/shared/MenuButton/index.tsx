import cn from 'classnames';
import styles from './index.module.css';
import { MenuButtonProps } from './MenuButton.props';

export const MenuButton = (props: MenuButtonProps) => {
	return (
		<button type="button" onClick={props.onClick} className={cn(
			styles['menu-button'],
			props.className
		)}>{props.children}
			
		</button>
	);
};