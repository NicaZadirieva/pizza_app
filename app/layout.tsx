import cn from 'classnames';
import { Metadata, Viewport } from 'next';

import '@/app/styles/base.css';
import '@/app/styles/variables.css';
import { Footer } from '@/entities/Footer';
import { Header } from '@/features';
import { GlobalFont } from '@/shared/font';


export const metadata: Metadata = {
	title: {
		template: '%s | Pizza Express - Best Pizza Delivery',
		default: 'Pizza Express - Fast Pizza Delivery Near You'
	},
	description: 'Order fresh, hot pizza delivered fast to your door. Best pizza in town with authentic Italian recipes and premium toppings.',
	keywords: ['pizza delivery', 'Italian pizza', 'fast food delivery', 'pizza near me', 'online pizza order'],
	authors: [{ name: 'Pizza Express Team' }],
	creator: 'Pizza Express',
	publisher: 'Pizza Express',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://pizzaexpress.com',
		siteName: 'Pizza Express',
		title: 'Pizza Express - Best Pizza Delivery Near You',
		description: 'Order fresh, hot pizza delivered fast to your door. Best pizza in town with authentic Italian recipes.',
		images: [
			{
				url: 'https://pizzaexpress.com/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Pizza Express - Delicious Pizza Delivery'
			}
		]
	},
	alternates: {
		canonical: 'https://pizzaexpress.com'
	}
	/*verification: {
		google: 'your-google-verification-code'
	}*/
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	minimumScale: 1,
	userScalable: false
};

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
