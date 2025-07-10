import cn from 'classnames';
import { Header } from './features/Header';
import './globals.css';
import { SimpleButton } from './shared';
import { GlobalFont } from './shared/font';

export default function RootLayout({
	children
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn('body', GlobalFont.className)}>
				<Header/>
				<SimpleButton appearance='rounded'>23</SimpleButton>
				{children}
			</body>
		</html>
	);
}
