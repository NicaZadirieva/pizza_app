import { Events } from './entities/Events';
import { Menu } from './entities/Menu';
import { MostPopular } from './entities/MostPopular';
import { Preview } from './features';


export default async function Home() {
	return (
		<div>
			<Preview/>
			<Menu/>
			<MostPopular/>
			<Events/>
		</div>
	);
}
