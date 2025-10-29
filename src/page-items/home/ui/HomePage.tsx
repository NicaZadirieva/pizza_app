import { GetMenu } from '@/features/menu';
import { GetPopularPizza } from '@/features/popular';

import { AboutUs } from '@/widgets/about';
import { Events } from '@/widgets/events';
import { Preview } from '@/widgets/preview';


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