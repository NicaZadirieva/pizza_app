import cn from 'classnames';
import { SimpleButtonProps } from './SimpleButton.props';
import styles from './index.module.css';

export const SimpleButton = ({className, appearance, children, ...props}: SimpleButtonProps) => {
	return (
		<button {...props} type="button" className={cn(
			className,
			styles['simple-button'],
			{
				[styles.outlined]: appearance == 'outlined',
				[styles.rounded]: appearance == 'rounded'
			}
		)}>{children}</button>
	);
};