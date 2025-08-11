import { Menu } from './entities/Menu';
import { Preview } from './features';


export default async function Home() {
	return (
		<div>
			<Preview/>
			<Menu/>
		</div>
	);
}
