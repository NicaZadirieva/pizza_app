import { AboutUs } from '@/entities/AboutUs';
import { Events } from '@/entities/Events';
import { MostPopular } from '@/entities/MostPopular';
import { Preview } from '@/features';
import { Menu } from '@/widgets';



export default async function Home() {
	return (
		<div className="content">
			<Preview/>
			<Menu/>
			<MostPopular/>
			<Events/>
			<AboutUs/>
		</div>
	);
}
