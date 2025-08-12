import { AboutUs } from './entities/AboutUs';
import { Events } from './entities/Events';
import { Menu } from './entities/Menu';
import { MostPopular } from './entities/MostPopular';
import { Preview } from './features';


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
