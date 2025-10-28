import LogoIcon from './icon/pizzashop.svg';
import { LogoProps } from './Logo.props';
export const Logo = ({className, ...props}: LogoProps) => {
	return (
		<LogoIcon {...props} className={className}/>
	);
}; 