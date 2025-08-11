import cn from 'classnames';
import { HeadingProps } from './Heading.props';
import styles from './index.module.css';

export const Heading = ({className, children, size = 'h1', ...props}: HeadingProps) => {
	switch (size) {
	case 'h1': 
		return (
			<h1 {...props} className={cn(className, styles['h1'])}>
				{children}
			</h1>
		);
	case 'h2':
		return (
			<h2 {...props} className={cn(className, styles['h2'])}>{children}</h2>
		);
	default: 
		return (
			<h1 {...props} className={cn(className, styles['h1'])}>
				{children}
			</h1>
		);
	}
    
};