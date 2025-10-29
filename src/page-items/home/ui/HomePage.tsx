import { AboutUs } from '@/entities/AboutUs';
import { Events } from '@/entities/Events';
import { MostPopular } from '@/entities/MostPopular';
import { Preview } from '@/entities/Preview';
import { GetMenu } from '@/features/menu';



export function HomePage() {
	return (
		<div className="content">
			<Preview/>
			<GetMenu/>
			<MostPopular/>
			<Events/>
			<AboutUs/>
		</div>
	);
}