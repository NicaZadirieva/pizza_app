import cn from 'classnames';
import { IconedButtonProps } from './IconedButton.props';
import styles from './index.module.css';

export const IconedButton = (props: IconedButtonProps) => {
	return (
		<button type="button" className={cn(
			styles['icon-button'],
			props.className
		)}>{props.children}</button>
	);
};