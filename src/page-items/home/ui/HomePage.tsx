import { AboutUs } from '@/page-items/home/ui/AboutUs';
import { Events } from '@/page-items/home/ui/Events';

import { GetMenu } from '@/features/menu';
import { GetPopularPizza } from '@/features/popular';
import { Preview } from '@/page-items/home/ui/Preview';



export function HomePage() {
	return (
		<div className="content">
			<Preview/>
			<GetMenu/>
			<GetPopularPizza/>
			<Events/>
			<AboutUs/>
		</div>
	);
}