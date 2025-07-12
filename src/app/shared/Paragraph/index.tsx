import cn from 'classnames';
import styles from './index.module.css';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph = ({className, children, ...props}: ParagraphProps) => {
	return <p className={cn(className, styles.paragraph)} {...props}>{children}</p>;
};