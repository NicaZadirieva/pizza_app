import { FilterEnum, getFilteredProducts } from '@/api/getFilteredProducts';
import { Menu } from './entities/Menu';
import { Preview } from './features';


export default async function Home() {
	const data = await getFilteredProducts(FilterEnum.ShowAll);
	return (
		<div>
			<Preview/>
			<Menu data={data}/>
		</div>
	);
}
