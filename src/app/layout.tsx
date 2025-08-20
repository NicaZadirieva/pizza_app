import cn from 'classnames';
import { Footer } from './features/Footer';
import { Header } from './features/Header';
import './globals.css';
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
				{children}
				<Footer/>
			</body>
		</html>
	);
}
