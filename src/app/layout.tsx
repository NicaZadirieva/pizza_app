import localFont from 'next/font/local';
import './globals.css';

const MullerText = localFont({
	src: [
		{
			path: './font/MullerRegular.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: './font/MullerMedium.ttf',
			weight: '500',
			style: 'normal'
		},
		{
			path: './font/MullerExtraBold.ttf',
			weight: '800',
			style: 'normal'
		}]
});

export default function RootLayout({
	children
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={MullerText.className}>
				{children}
			</body>
		</html>
	);
}
