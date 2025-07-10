import cn from 'classnames';
import { HeadingProps } from './Heading.props';
import styles from './index.module.css';

export const Heading = (props: HeadingProps) => {
	return (
		<h1 className={cn(props.className, styles['h1'])}>
			{props.children}
		</h1>
	);
};