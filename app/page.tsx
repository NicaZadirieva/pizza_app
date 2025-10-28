import { AboutUs } from '@/app/entities/AboutUs';
import { Events } from '@/app/entities/Events';
import { MostPopular } from '@/app/entities/MostPopular';
import { Preview } from '@/app/features';
import { Menu } from '@/app/widgets';



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
