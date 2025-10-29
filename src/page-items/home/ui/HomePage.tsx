import { AboutUs } from '@/entities/AboutUs';
import { Events } from '@/entities/Events';

import { Preview } from '@/entities/Preview';
import { GetMenu } from '@/features/menu';
import { GetPopularPizza } from '@/features/popular';



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