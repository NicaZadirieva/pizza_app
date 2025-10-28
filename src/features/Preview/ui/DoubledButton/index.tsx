import cn from 'classnames';
import { DoubledButtonProps } from './DoubledButton.props';
import styles from './index.module.css';

export const DoubledButton = ({className, ...props}: DoubledButtonProps) => {
	return (
		<div className={cn(className, styles['doubled-button'])}>
			<div className={styles['right-text-box']}>{props.rightText}</div>
			<div className={styles['left-text-box']}>{props.leftText}</div>
			
		</div>
	);
};