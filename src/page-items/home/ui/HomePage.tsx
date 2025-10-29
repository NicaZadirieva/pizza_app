import { AboutUs } from '@/widgets/AboutUs';
import { Events } from '@/widgets/Events';

import { GetMenu } from '@/features/menu';
import { GetPopularPizza } from '@/features/popular';
import { Preview } from '@/widgets/Preview';



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