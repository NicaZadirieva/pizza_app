import localFont from 'next/font/local';

export const GlobalFont = localFont({
	src: [
		{
			path: './MullerRegular.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: './MullerMedium.ttf',
			weight: '500',
			style: 'normal'
		},
		{
			path: './MullerExtraBold.ttf',
			weight: '800',
			style: 'normal'
		}]
});