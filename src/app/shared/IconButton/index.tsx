import cn from 'classnames';
import { IconButtonProps } from './IconedButton.props';
import styles from './index.module.css';

export const IconButton = (props: IconButtonProps) => {
	return (
		<button type="button" className={cn(
			styles['icon-button'],
			props.className
		)}>{props.children}</button>
	);
};