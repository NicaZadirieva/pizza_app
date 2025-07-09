import cn from 'classnames';
import { SimpleButtonProps } from './SimpleButton.props';
import styles from './index.module.css';

export const SimpleButton = (props: SimpleButtonProps) => {
	return (
		<button type="button" className={cn(
			styles['simple-button'],
			{
				[styles.outlined]: props.appearance == 'outlined'
			}
		)}>{props.children}</button>
	);
};